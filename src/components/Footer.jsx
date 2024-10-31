import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialLinks = [
  { id: 1, link: "/", icon: FaXTwitter },
  { id: 2, link: "/", icon: FaInstagram },
];

const Footer = () => {
  return (
    <div className="py-8 w-full bg-[#05102c]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-6 lg:gap-3 px-2 md:px-3 lg:px-8 text-white">
        <div className="about col-span-12 lg:col-span-6">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p className="mt-6 text-gray-400 text-lg">
            Analogue is the Best Mobile App Development Company in Hyderabad,
            India. We are skilled in Mobile App Development, E-Commerce
            Development, and Web Development.
          </p>
          {/* Circle social links */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map(({ id, link, icon: Icon }) => (
              <a
                key={id}
                href={link}
                className="p-3 bg-[#1A2D4E] rounded-full hover:bg-[#2F4A6D] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-lg text-white" />
              </a>
            ))}
          </div>
        </div>
        <div className="qlinks col-span-6 lg:col-span-3">
          <h1 className="text-2xl font-semibold">Quick Links</h1>
          <div className="mt-5 flex flex-col gap-3">
            <Link className="font-semibold text-gray-400 text-lg">Home</Link>
            <Link className="font-semibold text-gray-400 text-lg">About</Link>
            <Link className="font-semibold text-gray-400 text-lg">Careers</Link>
            <Link className="font-semibold text-gray-400 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="services col-span-6 lg:col-span-3">
          <h1 className="text-2xl font-semibold">Services</h1>
          <div className="mt-5 flex flex-col gap-3">
            <Link className="font-semibold text-gray-400 text-lg">
              Services
            </Link>
            <Link className="font-semibold text-gray-400 text-lg">Tepnoty</Link>
            <Link className="font-semibold text-gray-400 text-lg">Sepnoty</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
