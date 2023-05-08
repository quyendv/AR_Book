import { Fragment } from 'react';
import { AuthLayout } from '~/components/layouts/AuthLayout';
import routesConfigs from '~/configs/routes.config';
import Camera from '~/pages/Camera';
import Home from '~/pages/Home';
import ProductList from '~/pages/ProductList';
import { SignIn } from '~/pages/SignIn';

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: routesConfigs.products,
    element: <ProductList />,
  },
  {
    path: routesConfigs.camera,
    element: <Camera />,
    layout: Fragment,
  },
  {
    path: routesConfigs.signin,
    element: <SignIn />,
    layout: AuthLayout
  }
];

export default routes;
