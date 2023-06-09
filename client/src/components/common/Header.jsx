import { useMemo } from 'react';
import { AiFillCaretDown, AiOutlineCamera } from 'react-icons/ai';
import { FaListUl } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import routesConfigs from '~/configs/routes.config';
import { setUser } from '~/redux/features/userSlice';
import { Logo } from './Logo';
import { PopperMenu } from './PopperMenu';

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userPopperMenu = useMemo(
    () => [
      {
        title: 'Models',
        icon: FaListUl,
        to: routesConfigs.models,
      },
      {
        title: 'Camera',
        icon: AiOutlineCamera,
        to: routesConfigs.camera,
      },
      {
        title: 'Logout',
        icon: FiLogOut,
        onClick: () => dispatch(setUser(null)),
      },
    ],
    [],
  );

  return (
    <header className="relative z-10 flex h-header w-full items-center justify-between bg-transparent px-5 transition-all sm:px-12 md:px-20">
      {/* Logo */}
      <Logo />

      {/* Nav */}
      <nav className="hidden gap-6 lg:flex">
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 text-xl font-bold uppercase tracking-wide ${
              isActive ? 'text-purple-600' : 'text-white hover:opacity-80'
            }`
          }
          to={routesConfigs.home}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 text-xl font-bold uppercase tracking-wide ${
              isActive ? 'text-purple-600' : 'text-white hover:opacity-80'
            }`
          }
          to={routesConfigs.models}
        >
          Models
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 text-xl font-bold uppercase tracking-wide ${
              isActive ? 'text-purple-600' : 'text-white hover:opacity-80'
            }`
          }
          to={routesConfigs.camera}
        >
          Camera
        </NavLink>
      </nav>

      {/* User */}
      {user ? (
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-slate-300">
            <img src={images.admin} className="h-full w-full object-cover" />
          </div>
          <PopperMenu menu={userPopperMenu} appendBody>
            <button className=":active block p-2 text-white">
              <AiFillCaretDown />
            </button>
          </PopperMenu>
        </div>
      ) : (
        <NavLink
          className={({ isActive }) =>
            `rounded-md px-1 py-0.5 text-xl font-bold uppercase tracking-wide ${
              isActive ? 'text-purple-600' : 'text-white hover:opacity-80'
            }`
          }
          to={routesConfigs.signin}
        >
          SignIn
        </NavLink>
      )}
    </header>
  );
}

export default Header;
