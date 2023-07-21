import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

//Importação de componentes
import colgate from '../../assets/colgate.png'
import abb from '../../assets/abb.png'
import bonfiglioli from '../../assets/bonfiglioli.png'
import ambev from '../../assets/ambev.png'
import siemens from '../../assets/siemens.png'

function CarouselProducts() {
    const products = [
        {
            name: "ABB",
            image:
                'data:image/png;base64,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',
        },
        {
            name: "COLGATE",
            image:
                'https://qph.cf2.quoracdn.net/main-qimg-8ad425017062edebf81c6bc560338c25',
        },
        {
            name: "SIEMENS",
            image:
                siemens,
        },
        {
            name: "BONFIGLIOLI",
            image:
                'https://www.ppdistributors.com/cdn/shop/collections/Bonfiglioli-logo.jpg?v=1636644081',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="">
                        <div className="divimageproduct">
                            <h2 className="titleimg">{product.name}</h2>
                            <img src={product.image} alt="" className="imgproduct" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselProducts;
