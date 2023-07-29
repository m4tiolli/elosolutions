import { BsChevronCompactDown } from "react-icons/bs";

const ScrollDownButton = ({ targetId, color }) => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById(targetId);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <BsChevronCompactDown
            className="arrow down"
            color={color}
            onClick={scrollToNextSection}
        />
    );
};

export default ScrollDownButton;
