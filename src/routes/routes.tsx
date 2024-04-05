import PublicLayout from '@/layouts/Public';
import Page404 from '@/pages/Page404';
import Login from '@/pages/login';
import Register from '@/pages/register';

const routes = [
  {
    path: '/*',
    element: <Page404 />,
  },
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
];

export default routes;
