import React, { useState, useEffect } from "react";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CarouselProducts from "../../components/Carousel/Carousel";

//Importe de imagens
import image1 from "../../assets/image_27.png";
import image2 from "../../assets/image_30.png";
import image3 from "../../assets/image_31.png";

//Importação de estilização
import "./Produtos.css";
import WhatsApp from './../../components/WhatsApp/WhatsApp';

export default function Produtos() {
    //Script de Scroll de tela
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
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
                    <h1 className="font-title">Inversor de Frequência</h1>
                    <p className="font-body">
                        A Elo Solutions é reevendedor oficial das melhores marcas de
                        inversores de frequência do mercado industrial. Trabalhamos com
                        inversores para quaisquer tipo de aplicação.
                    </p>
                    <button>Ver mais</button>
                </div>
            </div>
            <div className="SobreProduto bg-white text-blue">
                <p className="font-body text-body">
                    Os inversores de frequência são equipamentos elétricos que realizam a
                    variação da velocidade de algum equipamento ligado nele, por exemplo
                    um motor elétrico em uma aplicação de compressores. A Elo Solutions
                    disponibliza quaisquer inversor de frequência para atender a sua
                    necessidade.
                </p>
                <img src={image2} alt="Imagem do Produtos" />
            </div>
            <div className="SobreProduto2 bg-blue text-white">
                <img src={image3} alt="Imagem do Produtos" />
                <p className="font-body">
                    As empresas parceiras, nos fornecem inversores de todos os modelos
                    disponíveis. Além disso, nossa equipe técnica lhe dará todo o suporte
                    técnico necessário sendo ele remoto ou local.
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
