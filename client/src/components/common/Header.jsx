import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import routesConfigs from '~/configs/routes';

function Header() {
  return (
    <header className="relative z-10 flex h-header w-full items-center justify-between bg-transparent px-20">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <img className="inline-block h-10 w-10 object-cover" src={images.logoIcon} alt="logo-icon" />
        <span className="text-3xl font-bold tracking-wider text-secondary">AR Book</span>
      </div>

      {/* Nav */}
      <nav className="text-xl flex gap-4 font-semibold text-white">
        <NavLink
          className={({ isActive }) => `tracking-wide ${isActive ? 'text-primary' : 'hover:opacity-80'}`}
          to={routesConfigs.home}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `tracking-wide ${isActive ? 'text-primary' : 'hover:opacity-80'}`}
          to={routesConfigs.products}
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
