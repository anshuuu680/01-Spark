import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { GrNotes } from 'react-icons/gr';
import { TbBrandFeedly } from 'react-icons/tb';
import { RiTaskLine } from 'react-icons/ri';

const navLinks = [
  { to: '/dashboard', icon: LuLayoutDashboard },
  { to: '/lectures', icon: LuLayoutDashboard },
  { to: '/feed', icon: TbBrandFeedly },
  { to: '/tasks', icon: RiTaskLine },
  { to: '/problems', icon: LuLayoutDashboard },
  { to: '/notes', icon: GrNotes },
];

const Navbar = () => {
  const location = useLocation();

  const renderNavLinks = () => {
    return (
      <ul className="flex flex-col gap-5">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.to;
          const commonClassName = 'text-white transition-all duration-300 p-1.5 rounded-md';

          if (index === 3) {
            return (
              <React.Fragment key={index}>
                <li className="flex items-center">
                  <NavLink
                    to={link.to}
                    className={`${commonClassName} ${isActive ? 'bg-blue-900' : 'hover:bg-gray-800'}`}
                  >
                    <link.icon className="text-2xl" />
                  </NavLink>
                </li>
                <hr className='my-2 mx-1 border-gray-400' />
              </React.Fragment>
            );
          }

          return (
            <li key={index} className="flex items-center ">
              <NavLink
                to={link.to}
                className={`${commonClassName} ${isActive ? 'bg-blue-900' : 'hover:bg-gray-800'}`}
              >
                <link.icon className="text-2xl" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  };

  const customHeight = 'calc(100vh - 3.5rem)';
  return (
    <section style={{ height: customHeight }} className="Navbar-wrapper fixed bottom-0 bg-DarkColorbg w-16 h-100 pt-5">
      <nav className="Navbar flex  justify-center items-center">
        {renderNavLinks()}
        <hr className="my-2 border-gray-500" />
      </nav>
    </section>
  );
};

export default Navbar;
