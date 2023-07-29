import { BsChevronCompactUp } from "react-icons/bs";

const ScrollUpButton = ({ targetId, color }) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById(targetId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BsChevronCompactUp
      className="arrow up"
      color={color}
      onClick={scrollToNextSection}
    />
  );
};

export default ScrollUpButton;
