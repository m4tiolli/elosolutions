import React, { useState, useEffect } from "react";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CarouselProducts from "../../components/Carousel/Carousel";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

//Importe de imagens
import image1 from "../../assets/image_37.png";
import image2 from "../../assets/image_38.png";

//Importação de estilização
import "./Assistencia.css";

export default function Assistencia() {
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
                    <h1 className="font-title">Assistência Técnica</h1>
                    <p className="font-body">
                        Temos uma Equipe a prontidão que irá te atender a qualquer hora!
                    </p>
                    <button>Ver mais</button>
                </div>
            </div>
            <div className="SobreProduto_1 bg-red text-white">
                <p className="font-body text-body">
                    A Elo Solutions construiu toda uma estrutura de ferramentas, bancadas e entre outras coisas,
                    para melhorar na eficácia de seus atendimentos. Nosso atendimento é 24 Horas, onde ele poderá
                    ser de forma Remota (Via Telefone e/ou Computador) ou Local (No seu ambiente de trabalho).
                </p>
                <img src={image2} alt="Imagem do Produtos" />
            </div>
            <Footer bgcolor={"#101663"} color={"#FFF"} />
            ai sim em
        </div>
    );
}
