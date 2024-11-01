import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const services = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company A",
    img: "https://via.placeholder.com/100",
    context:
      "Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO, Company B",
    img: "https://via.placeholder.com/100",
    context:
      "Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Project Manager, Company C",
    img: "https://via.placeholder.com/100",
    context:
      "Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.",
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Marketing Lead, Company D",
    img: "https://via.placeholder.com/100",
    context:
      "Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.",
  },
  {
    id: 5,
    name: "William Brown",
    position: "Designer, Company E",
    img: "https://via.placeholder.com/100",
    context:
      "Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.Innovative solutions that really helped our business grow.",
  },
];

const Testimonials = () => {
  const [textRef, textVisible] = useIntersectionObserver();
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33);

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

  return (
    <div className="w-full bg-sectionBg2 min-h-[80vh] mx-auto py-12">
      <div>
        <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center">
          <motion.h1
            ref={textRef}
            initial="hidden"
            animate={textVisible ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            className="px-7 py-1.5 mb-2 bg-red-100 font-semibold text-red-600 rounded-full"
          >
            Testimonials
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={textVisible ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-2xl mt-1 font-semibold text-center"
          >
            Hear from Our Members
          </motion.p>
          <motion.p
            initial="hidden"
            animate={textVisible ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg max-w-[700px] mb-4 text-gray-600 text-center px-20 mt-1 font-semibold"
          >
            Unlock exclusive benefits and become part of our supportive
            community
          </motion.p>
          <Carousel
            autoPlay
            infiniteLoop
            showArrows
            showIndicators={true}
            showThumbs={false}
            interval={2000}
            centerMode
            centerSlidePercentage={centerSlidePercentage}
            className="w-full px-5"
            renderIndicator={(onClickHandler, isSelected, index) => {
              return (
                <button
                  className={`w-3 h-3 rounded-full mx-1 ${
                    isSelected ? "bg-black" : "bg-gray-400"
                  }`}
                  onClick={onClickHandler}
                  aria-label={`Select slide ${index + 1}`}
                />
              );
            }}
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
                <div className="flex max-w-[300px] flex-col items-start bg-white shadow-lg rounded-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-16">
                      <img
                        src={s.img}
                        alt={s.name}
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h1 className="text-xl font-semibold text-gray-800">
                        {s.name}
                      </h1>
                      <h2 className="text-xs text-gray-500">{s.position}</h2>
                    </div>
                  </div>
                  <p className="text-center my-5 text-gray-600 text-base">
                    {s.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
