import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/mobileapp.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const services = [
  {
    id: 1,
    name: "App 1",
    img: img1,
  },
  {
    id: 2,
    name: "App 2",
    img: img1,
  },
  {
    id: 3,
    name: "App 3",
    img: img1,
  },
  {
    id: 4,
    name: "App 4",
    img: img1,
  },
];

const MobileApps = () => {
  const [textRef, textVisible] = useIntersectionObserver();
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33);
  const [currentSlide, setCurrentSlide] = useState(0); // New state to manage current slide
  const carouselRef = useRef(null);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 7 },
    },
  };

  useEffect(() => {
    const updateSlidePercentage = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCenterSlidePercentage(33);
      else if (width >= 768) setCenterSlidePercentage(50);
      else setCenterSlidePercentage(100);
    };

    updateSlidePercentage();
    window.addEventListener("resize", updateSlidePercentage);

    return () => window.removeEventListener("resize", updateSlidePercentage);
  }, []);

  const handlePrev = () => {
    if (carouselRef.current) {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + services.length) % services.length
      );
      carouselRef.current.moveTo(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
      carouselRef.current.moveTo(currentSlide + 1);
    }
  };

  return (
    <div className="w-full bg-white min-h-[80vh] mx-auto py-12">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center">
        <motion.h1
          ref={textRef}
          initial="hidden"
          animate={textVisible ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
          className="px-7 py-1.5 mb-2 bg-red-100 font-semibold text-red-600 rounded-full"
        >
          App Development
        </motion.h1>
        <motion.p
          initial="hidden"
          animate={textVisible ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-2xl mt-1 font-semibold text-center"
        >
          Our Successful Mobile App Projects
        </motion.p>
        <motion.p
          initial="hidden"
          animate={textVisible ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-lg max-w-[700px] mb-4 text-gray-600 text-center px-20 max-md:px-6 mt-1 font-semibold"
        >
          Unlock exclusive benefits and become part of our supportive community
        </motion.p>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-end px-20 max-md:px-4">
          <motion.div
            initial="hidden"
            animate={textVisible ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-3"
          >
            <button
              onClick={handlePrev}
              className="bg-blue-500 cursor-pointer text-white font-bold text-sm w-10 h-10 flex items-center justify-center aspect-square rounded-full p-2"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 cursor-pointer text-white font-bold text-sm w-10 h-10 aspect-square flex items-center justify-center rounded-full p-2"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        </div>

        <Carousel
          ref={carouselRef}
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          interval={2000}
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          className="w-full px-5"
          renderIndicator={(onClickHandler, isSelected, index) => (
            <button
              className={`w-3 h-3 rounded-full mx-1 ${
                isSelected ? "bg-black" : "bg-gray-400"
              }`}
              onClick={onClickHandler}
              aria-label={`Select slide ${index + 1}`}
            />
          )}
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              className="py-5 px-3 mb-12 mt-5 flex items-center justify-center"
              initial="hidden"
              animate={textVisible ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 0.5, delay: s.id * 0.1 }}
            >
              <div className="flex max-w-[300px] flex-col items-start rounded-lg p-6">
                <img src={s.img} alt={s.name} />
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MobileApps;
