import { BsChevronCompactUp } from "react-icons/bs";

const ScrollUpButton = ({ targetId }) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById(targetId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BsChevronCompactUp
      className="arrow up"
      color="#101663"
      onClick={scrollToNextSection}
    />
  );
};

export default ScrollUpButton;
