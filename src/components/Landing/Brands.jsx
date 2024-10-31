import { motion } from "framer-motion";
import google from "../../assets/google.png";
import useIntersectionObserver from "../../hooks/useIntersectionObserver"; // import custom hook

const Brands = () => {
  const [heroRef, isVisible] = useIntersectionObserver(0.1);

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
    <div ref={heroRef}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white w-[90%] max-w-[1000px] p-4 mt-[-10vh] rounded mx-auto flex items-center justify-around shadow-sm gap-5 max-md:gap-0 flex-wrap"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <img
              alt="Brand logo"
              src={google}
              className="grayscale w-[150px] h-[110px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
