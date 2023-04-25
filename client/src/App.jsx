import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from '~/components/layouts/MainLayout';
import routes from '~/routes';
import 'aframe';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.layout || MainLayout;
            return route.index ? (
              <Route index key={index} element={<Layout>{route.element}</Layout>} />
            ) : (
              <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
