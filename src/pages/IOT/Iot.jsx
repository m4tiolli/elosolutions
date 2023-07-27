import React, { useState, useEffect } from "react";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CarouselProducts from "../../components/Carousel/Carousel";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

//Importe de imagens
import image1 from "../../assets/image_33.png";
import image2 from "../../assets/IOT_Elo.png";
import image3 from "../../assets/image_33_1.png";

//Importação de estilização
import "./Iot.css";
import WhatsApp from './../../components/WhatsApp/WhatsApp';

export default function IOT() {
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
            <WhatsApp scrolled={scrolled} />
            <Header scrolled={scrolled} color="#101663" bgcolor={"#fff"} />
            <div className="Banner bg-white text-blue">
                <img src={image1} alt="Imagem Produtos" />
                <div className="TituloBanner">
                    <h1 className="font-title">I.O.T</h1>
                    <p className="font-body">
                        Desenvolvemos uma solução onde ajudará a sua empresa na área da manutenção, onde você terá
                        uma analise completa de suas maquinas!
                    </p>
                    <button>Ver mais</button>
                </div>
            </div>
            <div className="SobreProduto_1 bg-white text-blue">
                <p className="font-body text-body">
                    Nosso sistema foi pensado a partir de conceitos da Engenharia Análitica, onde nós priorizamos
                    a coleta de dados em uma maquina e também todo um estudo em cima do mesmo para que haja uma
                    previsão de quando ocorrerá o e onde o proximo problema aparecerá.
                </p>
                <img src={image2} alt="Imagem do Produtos" />
            </div>
            <div className="SobreProduto2 bg-blue text-white">
                <img src={image3} alt="Imagem do Produtos" />
                <p className="font-body">
                    Desenvolmovemos toda uma solução, que compõem 5 (cinco) dispositivos, sendo que 4 (quatro) deles
                    fará toda a coleta de dados e enviará para um quinto dispositivo, onde ele manda essas informações para um
                    CLP que realizará todos os calculos e formatações que serão vistas no DashBoard feito pela nossa Engenharia.
                </p>
            </div>
            <Footer bgcolor={"#FFF"} color={"#101663"} />
        </div>
    );
}
