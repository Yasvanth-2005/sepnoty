import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import statImg from "../../assets/statImg.svg";

const statsData = [
  { label: "Successful Projects", targetNumber: 120, image: statImg },
  { label: "Happy Clients", targetNumber: 80, image: statImg },
  { label: "Hours Spent", targetNumber: 15, image: statImg },
  { label: "Skilled Experts", targetNumber: 50, image: statImg },
];

// eslint-disable-next-line
const StatCounter = ({ targetNumber, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = Math.ceil(targetNumber / 100);
    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(counter);
  }, [targetNumber, startAnimation]);

  return <span className="text-3xl font-bold">{count}+</span>;
};

const Stats = () => {
  const [statsRef, statsVisible] = useIntersectionObserver();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 7 },
    },
  };

  return (
    <div
      ref={statsRef}
      className="w-full py-12 bg-sectionBg min-h-[25vh] flex items-center justify-center"
    >
      <div className="max-w-[1280px] w-full">
        <div className="w-full flex justify-center items-center flex-col">
          {/* Animated heading */}
          <motion.h1
            className="px-7 py-1.5 mb-2 bg-red-100 font-semibold text-red-600 w-[fit-content] rounded-full"
            variants={fadeInUp}
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
          >
            Our Stats
          </motion.h1>

          {/* Animated paragraph */}
          <motion.p
            className="text-2xl mb-6 font-semibold text-center"
            variants={fadeInUp}
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            The Stats We Earned
          </motion.p>
        </div>

        {/* Grid for stat cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-12 md:px-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 p-4 transform hover:scale-105 transition-transform"
              variants={fadeInUp}
              initial="hidden"
              animate={statsVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="w-16 h-16 aspect-square bg-blue-600 rounded-full flex items-center justify-center">
                <img src={stat.image} alt={stat.label} className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                {/* StatCounter with startAnimation based on visibility */}
                <StatCounter
                  targetNumber={stat.targetNumber}
                  startAnimation={statsVisible}
                />
                <h1 className="text-sm text-gray-500 uppercase font-semibold">
                  {stat.label}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
