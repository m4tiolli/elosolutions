import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselMini.css';

import colgate from '../../assets/colgate.png'
import abb from '../../assets/abb.png'
import bonfiglioli from '../../assets/bonfiglioli.png'
import ambev from '../../assets/ambev.png'
import siemens from '../../assets/siemens.png'

function CarouselMini() {

    const products = [
        colgate,
        abb,
        bonfiglioli,
        ambev,
        siemens,
        colgate,
        abb,
        bonfiglioli,
        ambev,
        siemens,
        colgate,
        abb,
        bonfiglioli,
        ambev,
        siemens,
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
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