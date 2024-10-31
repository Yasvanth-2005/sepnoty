import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Tepnoty", link: "/tepnoty" },
  { id: 5, name: "Membership", link: "/membership" },
  { id: 6, name: "Careers", link: "/careers" },
];

const Header = () => {
  const location = useLocation();
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 w-full h-[100px] bg-transparent">
        <div className="max-w-[1280px] py-8 mx-auto px-6 max-lg:px-2 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full h-8 max-lg:px-3" />
          </Link>

          {/* Navbar for larger screens */}
          <div className="flex items-center gap-8 text-lg text-white px-10 py-2.5 rounded-full max-lg:hidden bg-[rgba(255,255,255,0.1)] ">
            {navItems.map((nav) => (
              <Link
                to={nav.link}
                key={nav.id}
                className={`font-semibold rounded ${
                  location.pathname === nav.link
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Hamburger menu and Contact button */}
          <div className="flex items-center">
            <Link to="/contact">
              <div className="text-white cursor-pointer font-semibold bg-primary rounded-full px-6 py-2.5 hover:bg-secondary max-md:text-sm max-md:py-2 max-md:px-5">
                Get In Touch
              </div>
            </Link>
            <div
              onClick={() => setSideBar(!sideBar)}
              className="lg:hidden mx-4 cursor-pointer"
            >
              <GiHamburgerMenu className="text-primary" size={26} />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar and overlay */}
      <>
        {sideBar && (
          <div
            className="fixed top-0 left-0 w-full h-screen z-[100] bg-[rgba(0,0,0,0.4)]"
            onClick={() => setSideBar(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 w-full max-w-[280px] h-screen z-[200] py-6 shadow-lg transition-transform transform ${
            sideBar ? "translate-x-0" : "translate-x-full"
          } duration-300 ease-in-out bg-[#F8EDED]`}
          style={{
            background: "linear-gradient(135deg, #f7b7d1 0%, #ea94d7 100%)",
          }}
        >
          {/* Close Button */}
          <div className="flex justify-between mt-5 pr-6 items-center mb-3">
            <h3 className="text-xl font-bold text-white"></h3>
            <IoMdClose
              size={26}
              className="cursor-pointer text-primary"
              onClick={() => setSideBar(false)}
            />
          </div>

          {/* Sidebar Navigation Items */}
          <ul className="flex flex-col overflow-y-auto">
            {navItems.map((nav) => (
              <Link
                to={nav.link}
                onClick={() => setSideBar(false)}
                className={`font-semibold py-3 px-6 border border-transparent w-full text-xl max-sm:text-lg ${
                  location.pathname === nav.link
                    ? "text-white bg-primary border-b-primary"
                    : "text-primary hover:bg-primary hover:text-white"
                }`}
                key={nav.id}
              >
                <li>{nav.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </>
    </>
  );
};

export default Header;
