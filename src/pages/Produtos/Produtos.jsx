import React, { useState, useEffect } from "react";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CarouselProducts from "../../components/Carousel/Carousel";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

//Importe de imagens
import image1 from "../../assets/image_27.png";
import image2 from "../../assets/image_30.png";
import image3 from "../../assets/image_31.png";

//Importação de estilização
import "./Produtos.css";

export default function Produtos({ title, desc1, desc2, desc3 }) {
    //Script de Scroll de tela
    const [scrolled, setScrolled] = useState(false);

    const [color, setColor] = useState("#fff");

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
            isScrolled ? setColor("#101663") : setColor("#fff");
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Header scrolled={scrolled} color="#101663" />
            <div className="Banner bg-white text-blue">
                <img src={image1} alt="Imagem Banner Produtos" />
                <div className="TituloBanner">
                    <h1 className="font-title">{title}</h1>
                    <p className="font-body">
                        {desc1}
                    </p>
                    <button>Ver mais</button>
                </div>
            </div>
            <div className="SobreProduto1 bg-white text-blue">
                <p className="font-body text-body">
                    {desc2}
                </p>
                <img src={image2} alt="Imagem do Produtos" />
            </div>
            <div className="SobreProduto2 bg-blue text-white">
                <img src={image3} alt="Imagem do Produtos" />
                <p className="font-body">
                    {desc3}
                </p>
            </div>
            <div className="CarouselEmpresas bg-blue text-white">
                <h1 className="font-title">Nossos Parceiros</h1>
                <CarouselProducts />
            </div>
            <Footer bgcolor={"#FFF"} color={"#101663"} />
        </div>
    );
}
