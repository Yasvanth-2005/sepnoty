import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { id: 1, link: "/", icon: FaXTwitter },
  { id: 2, link: "/", icon: FaInstagram },
  { id: 3, link: "/", icon: FaInstagram },
];

const Contact = () => {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const [sec1Ref, sec1Visible] = useIntersectionObserver();

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 7,
      },
    },
  };

  return (
    <div className="w-full bg-sectionBg min-h-[80vh] max-w-[1280px] mx-auto py-[50px] flex items-center justify-center flex-col">
      <motion.h1
        ref={sectionRef}
        initial="hidden"
        animate={sectionVisible ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
        className="px-7 py-1.5 mb-2 bg-red-100 font-semibold text-red-600 w-[fit-content] rounded-full"
      >
        Contact us
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={sectionVisible ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-2xl mt-1 font-semibold"
      >
        Have any Questions ?
      </motion.p>

      <div className="max-w-[1280px] mt-[60px] mx-auto grid grid-cols-2 max-md:grid-cols-1 place-items-center justify-items-center">
        <motion.div
          ref={sec1Ref}
          initial="hidden"
          animate={sec1Visible ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className="col-span-1 max-md:mb-4 p-3 px-10 max-sm:px-2"
        >
          <h1
            className="text-[2.2rem] mb-2 max-md:text-2xl font-bold text-black"
            style={{ lineHeight: "35px" }}
          >
            Lets Discuss About Something
          </h1>
          <p className="text-sm font-semibold text-gray-600 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            ducimus nulla beatae earum cum, explicabo iusto voluptatem quod
            accusantium illo quas vero, natus nobis quisquam et doloribus.
            Quaerat, iure deserunt.
          </p>
          <h2 className="mb-2 font-bold text-xl">Follow Us :</h2>

          <div className="flex space-x-2">
            {socialLinks.map(({ id, link, icon: Icon }) => (
              <a
                key={id}
                href={link}
                className="p-3 bg-zinc-200 rounded-full hover:bg-gray-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-sm text-gray-800" />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={sec1Ref}
          initial="hidden"
          animate={sec1Visible ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 px-5 max-md:px-6 w-full flex items-center justify-center"
        >
          <div className="w-[96%] bg-[#05102c] px-5 py-4 rounded">
            <h1 className="text-white text-2xl font-semibold">
              Let Us Elevate Your Projects with Our Skills
            </h1>
            <p className="text-gray-300 text-sm mt-1 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              ad, consequatur nihil quia repellat quisquam.
            </p>

            <div className="grid grid-cols-2 mb-2 max-md:grid-cols-1 gap-2 mt-4">
              <div className="col-span-1">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-200 text-sm"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-transparent mt-1 w-fill border-b border-gray-700 outline-none text-white pl-1"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="font-semibold text-gray-200 text-sm"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent mt-1 w-fill border-b border-gray-700 outline-none text-white pl-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 mb-2 max-md:grid-cols-1 gap-2 mt-4">
              <div className="col-span-1">
                <label
                  htmlFor="phno"
                  className="font-semibold text-gray-200 text-sm"
                >
                  Your Mobile Number *
                </label>
                <input
                  type="text"
                  id="phno"
                  className="bg-transparent mt-1 w-fill border-b border-gray-700 outline-none text-white pl-1"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="subject"
                  className="font-semibold text-gray-200 text-sm"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-transparent mt-1 w-fill border-b border-gray-700 outline-none text-white pl-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 mb-2 gap-2 mt-4">
              <div className="col-span-1 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-semibold text-gray-200 text-sm"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="bg-transparent mt-1 w-fill border-b border-gray-700 outline-none text-white pl-1"
                ></textarea>
              </div>
            </div>

            <div className="w-full mt-6">
              <button className="w-full py-2 mb-2 font-semibold text-sm rounded-full bg-white hover:bg-black hover:text-white transition">
                Submit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
