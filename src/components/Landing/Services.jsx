import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import service1 from "../../assets/services/service1.json";
import service2 from "../../assets/services/service2.json";
import service3 from "../../assets/services/service3.json";
import service4 from "../../assets/services/service4.json"
import service5 from "../../assets/services/service5.json"
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    name: "UI/UX Design",
    text: "Innovative mobile solutions.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service2,
  },
  {
    id: 2,
    name: "App Development",
    text: "Creating user-friendly interfaces.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service1,
  },
  {
    id: 3,
    name: "AI Technologies",
    text: "Smart, empathetic solutions.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service3,
  },
  {
    id: 4,
    name: "Digital Marketing",
    text: "Helping you reach your audience.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service5,
  },
  {
    id: 5,
    name: "Graphic Design",
    text: "Visually captivating designs.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service4,
  },
];

const Services = () => {
  const [textRef, textVisible] = useIntersectionObserver();
  const scrollRef = useRef(null);
  const scrollSpeed = 2;
  const scrollInterval = useRef(null);

  const startScrolling = () => {
    scrollInterval.current = setInterval(() => {
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset scroll to the start
        }
      }
    }, 20);
  };

  useEffect(() => {
    startScrolling();

    const handleMouseEnter = () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
    const handleMouseLeave = () => startScrolling();

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 7 },
    },
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="min-h-[80vh] max-w-[1280px] mx-auto py-[50px] flex items-center justify-center flex-col">
        <h1
          ref={textRef}
          className={`px-7 py-1.5 mb-2 bg-gray-300 font-semibold text-primary w-[fit-content] rounded-full ${
            textVisible ? "animate-fade-in" : ""
          }`}
        >
          Services
        </h1>
        <p
          className={`text-3xl mt-3 font-semibold ${
            textVisible ? "animate-fade-in" : ""
          }`}
        >
          What We Offer
        </p>
        <p
          className={`text-lg mt-1 max-w-[700px] mb-4 text-gray-600 text-center px-20 mt-1 font-semibold ${
            textVisible ? "animate-fade-in" : ""
          }`}
        >
          Unlock exclusive benefits and become part of our supportive community
        </p>

        <div
          ref={scrollRef}
          className="my-10 w-full overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-5">
            {services.map((s) => (
              <motion.div
                key={s.id}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="flex-shrink-0 flex items-center justify-center w-full sm:w-[50%] md:w-[33%]"
              >
                <Link to="/services">
                  <div className="w-full max-w-[280px] py-5 px-3 flex items-center justify-center flex-col bg-white shadow-lg rounded-lg hover:-translate-y-2 transition-transform">
                    <div className="w-24 h-24 flex items-center justify-center">
                      <Lottie animationData={s.img} loop={true} />
                    </div>
                    <h1 className="text-xl font-semibold mt-4">{s.name}</h1>
                    <p className="text-center text-base text-gray-600">
                      {s.text}
                    </p>
                    <p className="text-center text-sm font-semibold my-2">
                      {s.desc}
                    </p>

                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700">
                      Learn More
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
