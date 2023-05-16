import HeadlessTippy from '@tippyjs/react/headless';
import { NavLink } from 'react-router-dom';

export function PopperMenu({ children, menu = [], className = '', placement = 'bottom-end', appendBody = false }) {
  return (
    <HeadlessTippy
      delay={[100, 100]}
      offset={[0, 16]}
      // visible
      trigger="click"
      interactive
      placement={placement}
      appendTo={appendBody ? document.body : 'parent'}
      render={(attrs) => (
        // Wrapper
        <div className="min-w-[150px] rounded bg-[#34224f] p-4 shadow-md" {...attrs} tabIndex={-1}>
          {/* List MenuItem => TODO: lg: only show logout <-> others lg:hidden */}
          <div className="flex flex-col gap-2">
            {menu.map((item, id) => (
              <NavLink
                key={id}
                to={item.to}
                className={({ isActive }) =>
                  `${
                    item.to /* others except Logout */ && 'lg:hidden'
                  } flex items-center gap-3 text-lg font-bold tracking-wide transition-all ${
                    isActive && item.to ? 'text-purple-600' : 'text-white hover:tracking-wider hover:text-purple-400'
                  }`
                }
                onClick={item.onClick}
              >
                <item.icon />
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    >
      {children}
    </HeadlessTippy>
  );
}
