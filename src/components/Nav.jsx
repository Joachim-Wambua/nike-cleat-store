import headerLogo from "../assets/images/nike-logo.png";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} width={90} height={90} alt="Logo" />
          </a>

          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-opensans leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={toggleSidebar}
          >
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>

      {/* Sidebar Modal */}
      <div
        className={`${
          isSidebarOpen ? "right-0 h-full max-w-screen-md" : "right-full w-0"
        } absolute top-0 h-full overflow-y-auto bg-white transition-transform transform ease-in-out duration-300`}
      >
        <ul className="flex flex-col justify-center items-center mt-20 gap-14 p-20 h-[100vh]">
          {navLinks.map((item) => (
            <li key={item.label}>
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
