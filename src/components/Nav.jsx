import { useState } from "react";
import headerLogo from "../assets/images/nike-logo.png";
import { hamburger, closeIcon } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = () => {
    // Add logic for handling menu item click if needed
    // For example, close the sidebar after clicking a menu item
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container sticky">
          <a href="/">
            <img src={headerLogo} width={90} height={90} alt="Logo" />
          </a>

          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-opensans leading-normal text-lg text-slate-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="hidden max-lg:block cursor-pointer relative z-20"
            onClick={toggleSidebar}
          >
            <img
              src={isSidebarOpen ? closeIcon : hamburger}
              alt={isSidebarOpen ? "Close" : "Hamburger"}
              width={25}
              height={25}
              style={{ zIndex: 1000 }} // Set a higher z-index for the icon
            />
          </div>
        </nav>
      </header>

      {/* Sidebar Modal */}
      <div
        className={`${
          isSidebarOpen ? "right-0 max-w-screen-md z-10" : "right-full w-0 z-10"
        } absolute top-0 overflow-y-auto transition-transform transform ease-in-out duration-300`}
      >
        <ul className="flex flex-col justify-center items-center mt-10 gap-20 p-20 h-[520px]">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer z-10"
              onClick={handleMenuItemClick}
            >
              <a
                href={item.href}
                className="font-opensans leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
