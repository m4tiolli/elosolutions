import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

//Importação de componentes
import { useState, useEffect } from 'react';

function CarouselProducts() {
    //Imagens do banco de dados
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7231/api/Parceiros', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setProducts(json))
            .catch((err) => {
                console.log(err);
                alert('Erro ao buscar Empresas Parceiras!');
                window.location.reload();
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
        slidesToShow: responsive ? 2 : 3,
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
                            <h2 className="titleimg">{product?.nome}</h2>
                            <img src={product?.imagem} alt="" className="imgproduct" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselProducts;
