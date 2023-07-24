import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselMini.css';

import abb from '../../assets/abbw.png'
import bonfiglioli from '../../assets/bonfiglioliw.png'
import cincinnati from '../../assets/cincinnatiw.png'
import gefran from '../../assets/gefranw.png'
import hansa from '../../assets/hansaw.png'
import markem from '../../assets/markemw.png'
import schneider from '../../assets/schneiderw.png'
import sesotec from '../../assets/sesotecw.png'
import siemens from '../../assets/siemensw.png'
import solcon from '../../assets/solconw.png'
import synchrony from '../../assets/synchronyw.png'
import { useEffect, useState } from 'react';

function CarouselMini() {

    const products = [
        abb,
        bonfiglioli,
        cincinnati,
        gefran,
        hansa,
        markem,
        schneider,
        sesotec,
        siemens,
        solcon,
        synchrony
    ]

    const [responsive, setResponsive] = useState()

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth < 800);
        };

        handleResize(); // Set initial state

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: responsive ? 3 : 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };
    return (
        <div className="carouselmini">
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div key={index}>
                        <div className="divimageproductmini">
                            <img src={product} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselMini