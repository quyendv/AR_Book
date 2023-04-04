import routesConfigs from '~/configs/routes';
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
];

export default routes;
