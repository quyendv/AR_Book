import { Fragment } from 'react';
import ProtectedPage from '~/components/common/ProtectedPage';
import { AuthLayout } from '~/components/layouts/AuthLayout';
import routesConfigs from '~/configs/routes.config';
import Camera from '~/pages/Camera';
import Home from '~/pages/Home';
import ModelList from '~/pages/ModelList';
import { SignIn } from '~/pages/SignIn';

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: routesConfigs.models,
    element: (
      <ProtectedPage>
        <ModelList />
      </ProtectedPage>
    ),
  },
  {
    path: routesConfigs.camera,
    element: (
      <ProtectedPage>
        <Camera />
      </ProtectedPage>
    ),
    layout: Fragment,
  },
  {
    path: routesConfigs.signin,
    element: <SignIn />,
    layout: AuthLayout,
  },
];

export default routes;
