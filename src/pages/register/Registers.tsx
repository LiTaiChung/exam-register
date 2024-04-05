import { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { queryRegisterPolicy } from '@/queries/register';
import { useStep } from '@/hooks/useStep';

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [isReaded, setIsReaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { isPending, error, data } = queryRegisterPolicy();

  const [currentStep, stepHelpers] = useStep(2);
  const currentPolicyData = data ? data[currentStep - 1] : [];

  const {
    canGoToPrevStep,
    canGoToNextStep,
    goToNextStep,
    goToPrevStep,
    reset,
    setStep,
  } = stepHelpers;

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e);
    if (e.target.type !== 'checkbox') {
      console.log(e.target.type);
    }

    if (!isReaded) {
      toast({
        title: `請先閱讀條款`,
        status: 'error',
        isClosable: true,
      });
      return;
    }
    setChecked((prev) => !prev);
  };

  const handlePolicyOpen = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    onOpen();
  };

  const handlePolicyNextStep = () => {
    if (canGoToNextStep) {
      goToNextStep();
      return;
    }

    setIsReaded(true);
    setChecked(true);
    onClose();
  };

  const handlePolicyPrevStep = () => {
    if (canGoToPrevStep) {
      goToPrevStep();
      return;
    }

    setIsReaded(false);
    setChecked(false);
    onClose();
  };

  return (
    <>
      <Container py={8} border="1px" borderColor="gray.200" my={12}>
        <Center as="h1" fontSize="x-large">
          會員註冊
        </Center>
        <Center mt={2} mb={8}>
          <Divider w="100px" />
        </Center>
        <form>
          <Stack spacing={3} divider={<StackDivider border="none" />}>
            <FormControl>
              <FormLabel>帳號</FormLabel>
              <Input type="email" />
              <FormHelperText>帳號為 Email</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>密碼</FormLabel>
              <Input type="password" />
              <FormHelperText>
                1. 密碼需為英數混合並長度需大於6個字元
              </FormHelperText>
            </FormControl>
            <Stack>
              <Checkbox isChecked={checked} onChange={handleChangeChecked}>
                我已仔細閱讀並同意以下條款
              </Checkbox>
              <Box
                color="green.600"
                cursor="pointer"
                ml={5}
                onClick={handlePolicyOpen}>
                <Box as="span" textDecoration="underline">
                  「加入會員條款」
                </Box>
                、
                <Box as="span" textDecoration="underline">
                  「隱私權政策」
                </Box>
              </Box>
            </Stack>
            <Button>註冊</Button>
          </Stack>
        </form>
      </Container>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {currentPolicyData.title} ({currentStep}/2)
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box dangerouslySetInnerHTML={{ __html: currentPolicyData.html }} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlePolicyPrevStep}>
              {canGoToPrevStep ? '上一份' : '不同意'}
            </Button>
            <Button variant="ghost" onClick={handlePolicyNextStep}>
              {canGoToNextStep ? '下一份' : '同意'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
