import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";
import Lottie from "lottie-react";
import aboutAnimation from "../../assets/about.json";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { motion } from "framer-motion";

const About = () => {
  const [lottieRef, lottieVisible] = useIntersectionObserver();
  const [textRef, textVisible] = useIntersectionObserver();

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
    <div className="w-full py-8 bg-sectionBg min-h-[80vh] flex items-center justify-center">
      <div className="max-w-[1280px] grid grid-cols-2 max-md:grid-cols-1 place-items-center">
        <motion.div
          ref={lottieRef}
          initial="hidden"
          animate={lottieVisible ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className="col-span-1 max-md:mb-4 flex items-center justify-center p-3"
        >
          <Lottie animationData={aboutAnimation} loop={true} />
        </motion.div>
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textVisible ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 px-3 max-md:px-6"
        >
          <h1 className="px-7 py-1.5 mb-2 bg-red-100 font-semibold text-red-600 w-[fit-content] rounded-full">
            About Us
          </h1>
          <h2 className="mb-2 text-3xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-[550px]">
            At Sepnoty, we`re on a mission to transform mental health support
            through technology. Our community is built on empathy, innovation,
            and connection.
          </p>
          <Link to="/about">
            <AnimatedButton text="Learn More" small />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
