import React, { useState, useEffect } from "react";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

//Importe de imagens
import image1 from "../../assets/image_30_2.png";
import image2 from "../../assets/image_31_1.png";
import image3 from "../../assets/image_32.png";

//Importação de estilização
import "./Servicos.css";

export default function Servicos({ title, desc1, desc2, desc3 }) {
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
                <img src={image3} alt="Imagem Banner Produtos" />
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
                <img src={image1} alt="Imagem do Produtos" />
                <p className="font-body">
                    {desc3}
                </p>
            </div>
            <Footer bgcolor={"#FFF"} color={"#101663"} />
        </div>
    );
}
