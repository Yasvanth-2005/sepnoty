import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroAnimation from "../../assets/hero.json";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AnimatedButton from "../AnimatedButton";
import Header from "../Header";

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = " Join a community that cares.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length - 1) {
          setTypedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    } else {
      setTypedText("");
    }
  }, [isVisible]);

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
      ref={heroRef}
      className="w-full min-h-[80vh] md:min-h-screen py-[100px] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #ac8ae2 0%, #b98cdc 50%, #FFA6B5 100%)",
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}
    >
      <Header />
      <div className="w-full max-w-[1280px] px-2 grid grid-cols-2">
        <div className="col-span-1 max-lg:col-span-2 flex flex-col items-start justify-center px-4 max-lg:items-center gap-2">
          <motion.h1
            className="text-[3.4rem] max-md:text-3xl max-lg:text-center font-bold text-white"
            style={{ lineHeight: "1.2" }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">Connecting</span>{" "}
            <br className="max-lg:hidden" /> Empathy Seekers{" "}
            <br className="lg:hidden" /> and Providers
          </motion.h1>
          <motion.h2
            className="text-xl text-slate-100"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {typedText}
          </motion.h2>
          <motion.div
            initial="hidden"
            className="mt-2"
            animate={isVisible ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/tepnoty">
              <AnimatedButton text="Get Started" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 1.5 }}
          className="col-span-1 max-lg:hidden flex items-center justify-center"
        >
          <Lottie animationData={heroAnimation} loop={true} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
