import React, { useState, useEffect } from "react";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

//Importe de imagens
import image1 from "../../assets/image_34.png";
import image2 from "../../assets/Painel.png";
import image3 from "../../assets/image_32.png";

//Importação de estilização
import "./Servicos.css";
import WhatsApp from './../../components/WhatsApp/WhatsApp';

export default function Servicos() {
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
                    <h1 className="font-title">Montagem de Painéis</h1>
                    <p className="font-body">
                        Montamos os melhores painéis do mercado! Com os melhores quadros, componentes e acima
                        de tudo, feitos com Capricho.
                    </p>
                    <button>Ver mais</button>
                </div>
            </div>
            <div className="SobreProduto bg-white text-blue">
                <p className="font-body text-body">
                    Nossos painéis são feitos apartir das seguintes etapas: <br /> <br />
                    * Primeiro nossa engenharia entende qual a sua necessidade.<br /> <br />
                    * Segundo iniciamos o processo de criação de Layout do painél. <br /> <br />
                    * Terceiro começamos a gerar o esquema elétrico e a montagem do Painél,
                    e por fim enviamos o painél para você.<br /> <br />
                    Trabalhamos também com programação de CLP´s e IHM´s.
                </p>
                <img src={image2} alt="Imagem do Produtos" />
            </div>
            <Footer bgcolor={"#FFF"} color={"#101663"} />
        </div>
    );
}
