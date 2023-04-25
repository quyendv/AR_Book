import routesConfigs from '~/configs/routes';
import Home from '~/pages/Home';
import ProductList from '~/pages/ProductList';
import Upload from '~/pages/Upload';

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
    path: routesConfigs.upload,
    element: <Upload />,
  },
];

export default routes;
