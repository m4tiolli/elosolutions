import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselMini.css';

import { useEffect, useState } from 'react';

function CarouselMini() {

    //Imagens vindas do banco de dados
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/clientes', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setProducts(json))
            .catch((err) => {
                console.log(err);
                alert('Erro ao pegar Clientes');
            })
    }, []);

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
        speed: 700,
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
                            <img src={product?.imagem} alt="" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselMini