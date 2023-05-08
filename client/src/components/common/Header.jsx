import { Link, NavLink } from 'react-router-dom';
import images from '~/assets/images';
import routesConfigs from '~/configs/routes.config';

function Header() {
  return (
    <header className="relative z-10 flex h-header w-full items-center justify-between bg-transparent px-20">
      {/* Logo */}
      <Link to={routesConfigs.home} className="flex items-center gap-4">
        <img className="inline-block h-12 w-12 object-cover" src={images.logoIcon} alt="logo-icon" />
        <span className="text-4xl font-bold tracking-wider text-secondary">AR Book</span>
      </Link>

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
      </nav>
    </header>
  );
}

export default Header;
