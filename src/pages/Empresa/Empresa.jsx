import { useState, useEffect } from "react";
import AOS from "aos";

//Importe de estilização
import "./Empresa.css";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

//Importação de imagens
import image1 from "../../assets/image_28.png";
import image2 from "../../assets/image_25.png";
import image3 from "../../assets/image_26.png";
import fundador1 from "../../assets/fundador1.png";
import fundador2 from "../../assets/fundador2.png";
import WhatsApp from "./../../components/WhatsApp/WhatsApp";

export default function Empresa() {
    //Mudança de tela com Arrow´s
    useEffect(() => {
        AOS.init();
    }, []);

    function QuemSomos() {
        window.location.href = "#quemsomos";
    }

    function Excelencia() {
        window.location.href = "#excelencia";
    }

    function Valores() {
        window.location.href = "#valores";
    }

    function Fundadores() {
        window.location.href = "#fundadores";
    }

    function Historia() {
        window.location.href = "#historia";
    }

    //Script de Scroll de tela
    const [scrolled, setScrolled] = useState(false);

    const [color, setColor] = useState("#101663");
    const [bgcolor, setBgcolor] = useState("#fff");

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
            isScrolled ? setBgcolor("#101663") : setBgcolor("#fff");
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <WhatsApp scrolled={scrolled} />
            <Header
                scrolled={scrolled}
                color={color}
                bgcolor={bgcolor}
                burger={"#101661"}
            />
            <div className="HeaderBanner" id="index">
                <div className="infoBanner text-blue textoBanner">
                    <img src={image1} alt="" />
                    <p>
                        A Elo Solutions é uma empresa que visa os valores em primeiro lugar!{" "}
                        <br />
                        Prezamos pela excelência e compromisso com nossos clientes e
                        parceiros!
                    </p>
                </div>
                <BsChevronCompactDown
                    className="arrow down"
                    color="#101663"
                    onClick={QuemSomos}
                />
            </div>
            <div className="QuemSomosBody fundo-blue" id="quemsomos">
                <BsChevronCompactUp
                    className="arrow up"
                    color="#FFFFFF"
                    onClick={() => (window.location.href = "#index")}
                />
                <div className="conteudoBody">
                    <h1 className="text-white texto-titulo">Quem Somos?</h1>
                    <p className="texto-conteudo text-white">
                        Somos uma Empresa Brasileira com alcance mundial. A nossa unidade
                        incorpora tudo que é necessário para que nossos clientes e parceiros
                        cresçam juntos conosco. <br /> <br />
                        Fomos fundados em 1999 com o intuito de agregar valor e gerar
                        credibilidade com nossos parceiros e clientes. A Elo Solutions tem
                        como prioridade entregar excelência nos nossos serviços,
                        atendimentos e dar todo o suporte necessário.
                    </p>
                </div>
                <BsChevronCompactDown
                    className="arrow down"
                    color="#FFF"
                    onClick={Excelencia}
                />
            </div>
            <div className="ExcelenciaBody fundo-white" id="excelencia">
                <BsChevronCompactUp
                    className="arrow up"
                    color="#101663"
                    onClick={QuemSomos}
                />
                <h1 className="text-blue texto-titulo">Excelência</h1>
                <div className="conteudoExcelencia text-blue">
                    <img src={image2} alt="Excelência da Elo Solutions" />
                    <p className="texto">
                        A excelência é um pilar que nos impulsiona a melhorarmos como
                        empresa e equipe. Com isso, temos toda uma metodologia de trabalho
                        com o intuito de atendermos as expectativas e até mesmo de
                        supera-las, sendo assim temos todo uma infraestrutura adequada e uma
                        equipe que esta pronta e capacitada para entregar o que for preciso!
                    </p>
                </div>
                <BsChevronCompactDown
                    className="arrow down"
                    color="#101663"
                    onClick={Valores}
                />
            </div>
            <div className="ValoresBody fundo-red" id="valores">
                <BsChevronCompactUp
                    className="arrow up"
                    color="#FFF"
                    onClick={Excelencia}
                />
                <h1 className="text-white texto-titulo">Valores</h1>
                <div className="conteudoValores text-white">
                    <p className="texto">
                        Somos conhecidos no mercado por priorizar nossos valores acima de
                        tudo. Temos em mente que o Respeito, Compromisso, Segurança,
                        Responsabilidade Econômica e Ambiental são pilares essênciais para
                        que possamos agregar positivamente e gerar credibilidade com nossos
                        clientes e parceiros.
                    </p>
                    <img src={image3} alt="Valores da Elo Solutions" />
                </div>
                <BsChevronCompactDown
                    className="arrow down"
                    color="#FFF"
                    onClick={Fundadores}
                />
            </div>
            <div className="fundadoresBody fundo-blue" id="fundadores">
                <BsChevronCompactUp
                    className="arrow up"
                    color="#FFF"
                    onClick={Valores}
                />
                <h1 className="text-white texto-titulo">Fundadores</h1>
                <div className="conteudoFundador text-white">
                    <div className="Fundador1 text-white">
                        <img src={fundador1} alt="José Fernando Nunes" />
                        <h2 className="texto-titulo">
                            José Fernando
                            <br />
                            Nunes
                        </h2>
                    </div>
                    <div className="Fundador2 text-white">
                        <img src={fundador2} alt="Adalberon R. Cruz" />
                        <h2 className="texto-titulo">Adalberon R. Cruz</h2>
                    </div>
                </div>
                <BsChevronCompactDown
                    className="arrow down"
                    color="#FFF"
                    onClick={Historia}
                />
            </div>
            <div className="HistoriaBody fundo-white" id="historia">
                <BsChevronCompactUp
                    className="arrow up"
                    color="#101663"
                    onClick={Fundadores}
                />
                <Card />
            </div>
            <Footer bgcolor={"#101663"} color={"#FFF"} />
        </div>
    );
}
