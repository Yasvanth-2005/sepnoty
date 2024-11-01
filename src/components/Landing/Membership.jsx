import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";

const services = [
  {
    id: 1,
    cost: "4890",
    name: "3 Months Plan",
    plan: "Basic",
    text: "Access to exclusive resources.",
    features: [
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
    ],
  },
  {
    id: 2,
    cost: "9000",
    name: "6 Months Plan",
    plan: "Advanced",
    text: "Enhanced community support.",
    features: [
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
    ],
  },
  {
    id: 3,
    cost: "15000",
    name: "1 Year Plan",
    plan: "Pro",
    text: "Full access and premium features.",
    features: [
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
      "Lorem ipsum dolor sit amet consectetur amet consectetur",
    ],
  },
];

const MemberShip = () => {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

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
    <div
      ref={sectionRef}
      className="w-full bg-sectionBg min-h-[80vh] max-w-[1280px] mx-auto py-[50px] flex items-center justify-center flex-col"
    >
      <motion.h1
        initial="hidden"
        animate={sectionVisible ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
        className="px-7 py-1.5 mb-2 bg-red-100 font-semibold text-red-600 w-[fit-content] rounded-full"
      >
        Membership
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={sectionVisible ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-2xl mt-1 font-semibold"
      >
        Join the Sepnoty Club!
      </motion.p>
      <motion.p
        initial="hidden"
        animate={sectionVisible ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-lg max-w-[700px] text-gray-600 text-center px-20 max-md:px-6 mt-1 font-semibold"
      >
        Unlock exclusive benefits and become part of our supportive community
      </motion.p>

      <div className="my-10 flex items-center justify-center flex-wrap gap-5 px-4">
        {services.map((s) => {
          // eslint-disable-next-line
          const [cardRef, cardVisible] = useIntersectionObserver();
          return (
            <motion.div
              key={s.id}
              ref={cardRef}
              className="w-[90%] max-w-[380px] mb-4 p-5 flex items-center justify-center flex-col bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
              initial="hidden"
              animate={cardVisible ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, delay: s.id * 0.1 }}
            >
              <h1 className="text-xl font-semibold">{s.name}</h1>
              <p className="text-center text-base text-gray-600">{s.text}</p>
              <p className="mt-1 font-semibold text-2xl">{s.plan}</p>
              <p className="text-center mt-2 text-3xl font-bold">
                ${s.cost} INR
              </p>
              <ul className="mt-5" style={{ maxWidth: "320px" }}>
                {s.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex pt-1 items-start px-3 text-center text-gray-600"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        animate={sectionVisible ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Link to="/membership">
          <AnimatedButton text="Join Now" />
        </Link>
      </motion.div>
    </div>
  );
};

export default MemberShip;
