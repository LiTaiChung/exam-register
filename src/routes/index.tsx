import routes from './routes';
import { BrowserRouter, useRoutes } from 'react-router-dom';

const GetRoutes = () => {
  return useRoutes(routes);
};

const SetRoutes = () => {
  return (
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  );
};

export default SetRoutes;
