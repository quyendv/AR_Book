import { NavLink } from 'react-router-dom';
import routesConfigs from '~/configs/routes.config';
import { Logo } from './Logo';

function Header() {
  return (
    <header className="relative z-10 flex h-header w-full items-center justify-between bg-transparent px-20">
      {/* Logo */}
      <Logo />

      {/* Nav */}
      <nav className="flex gap-8 text-xl font-semibold text-white">
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 uppercase tracking-wide ${isActive ? 'text-purple-600' : 'hover:opacity-80'}`
          }
          to={routesConfigs.home}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 uppercase tracking-wide ${isActive ? 'text-purple-600' : 'hover:opacity-80'}`
          }
          to={routesConfigs.products}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 uppercase tracking-wide ${isActive ? 'text-purple-600' : 'hover:opacity-80'}`
          }
          to={routesConfigs.camera}
        >
          Camera
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 uppercase tracking-wide ${isActive ? 'text-purple-600' : 'hover:opacity-80'}`
          }
          to={routesConfigs.signin}
        >
          SignIn
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
