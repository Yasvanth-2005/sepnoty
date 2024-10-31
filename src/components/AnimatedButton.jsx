// eslint-disable-next-line
const AnimatedButton = ({ text, small = false }) => {
  return (
    <button className="group inline-flex items-center gap-3 font-semibold text-white rounded-full px-5 py-3 bg-primary hover:bg-secondary transition-colors duration-300">
      <span
        className={`relative flex-shrink-0 ${
          small ? "w-5 h-5" : "w-6 h-6"
        } bg-white text-primary rounded-full grid place-items-center`}
      >
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-[150%] group-hover:translate-y-[-150%] group-hover:opacity-0"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute transition-all duration-300 ease-in-out delay-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-x-[-150%] translate-y-[150%]"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <span
        className={`group-hover:text-white ${small ? "text-sm" : "text-base"}`}
      >
        {text}
      </span>
    </button>
  );
};

export default AnimatedButton;
