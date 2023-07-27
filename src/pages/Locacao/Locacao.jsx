import React, { useState, useEffect } from "react";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

//Importe de imagens
import image1 from "../../assets/image_32.png";
import image2 from "../../assets/image_36.png";

//Importação de estilização
import "./Locacao.css";
import WhatsApp from './../../components/WhatsApp/WhatsApp';

export default function Locacao() {
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
                <img src={image1} alt="Imagem Banner Produtos" />
                <div className="TituloBanner">
                    <h1 className="font-title">Locação de Equipamentos</h1>
                    <p className="font-body">
                        Locamos diversos inversores de frequências, conversores e entre
                        outros!
                    </p>
                    <button>Ver mais</button>
                </div>
            </div>
            <div className="SobreProduto1 bg-blue text-white">
                <div className="SobreConteudo">
                    <p className="font-body text-body">
                        Locamos Inversores de frequência para qualquer tipo de aplicação,
                        seja ela Leve ou Pesada! Iniciamos o processo de locação com um
                        simples Check-list onde o criamos para facilitar na hora de
                        especificarmos um Inversor para a sua necessidade.
                    </p>
                    <button className="button bg-white text-blue">entre em contato</button>
                </div>
                <img src={image2} alt="Imagem do Produtos" />
            </div>
            <Footer bgcolor={"#FFF"} color={"#101663"} />
        </div>
    );
}
