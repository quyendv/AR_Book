import { Fragment } from 'react';
import routesConfigs from '~/configs/routes.config';
import Camera from '~/pages/Camera';
import Home from '~/pages/Home';
import ProductList from '~/pages/ProductList';

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
];

export default routes;
