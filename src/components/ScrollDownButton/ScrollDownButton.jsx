import { BsChevronCompactDown } from "react-icons/bs";

const ScrollDownButton = ({ targetId }) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById(targetId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BsChevronCompactDown
      className="arrow down"
      color="#101663"
      onClick={scrollToNextSection}
    />
  );
};

export default ScrollDownButton;
