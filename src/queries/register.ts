import { useQuery } from '@tanstack/react-query';

const queryRegisterPolicy = () =>
  useQuery({
    queryKey: ['register/agreement'],
    queryFn: () => fetch('/api/register/policy').then((res) => res.json()),
  });

export { queryRegisterPolicy };
