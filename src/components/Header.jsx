import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Tepnoty", link: "/tepnoty" },
  { id: 5, name: "Membership", link: "/membership" },
  { id: 6, name: "Careers", link: "/careers" },
  { id: 7, name: "Contact us", link: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div className="fixed w-full">
      <div className="max-w-[1280px] py-8 mx-auto px-6 max-lg:px-2 flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-full h-8" />
        </div>
        <div className="flex items-center gap-8 text-lg text-white">
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
      </div>
    </div>
  );
};

export default Header;
