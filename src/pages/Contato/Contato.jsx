import React, { useState, useEffect } from "react";

//Importação de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";

//Importe de estilização
import "./Contato.css";

export default function Contato() {
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
            <div className="Banner text-blue">
                <h1 className="texto-titulo">Endereço</h1>
                <h2 className="texto-conteudo">
                    Rua Iguaçu, 38 - Vila São Silvestre - Barueri - SP <br />
                    Cep: 06417-140 <br />
                    Telefone: 11 4154.4414
                </h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3465041951526!2d-46.885052989013616!3d-23.484025658667537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03a1c6bdd9bb%3A0x609ba8df16b9f42d!2sElo%20Solutions!5e0!3m2!1spt-BR!2sbr!4v1690163100174!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="MAPA ASDKLJAHASD"
                    style={{ border: 0, borderRadius: 10 }}
                ></iframe>
            </div>
            <div className="Conteudo bg-blue text-white">
                <h1 className="texto-titulo">Assistência Técnica 24 Horas</h1>
                <div className="Contatos">
                    <h3 className="texto-subtitulo">
                        Entre em contato com nossa assistência 24 Horas!
                    </h3>
                    <div className="whats iconsize texto-conteudo">
                        <BsWhatsapp />
                        <p>11 98208.2914</p>
                    </div>
                    <div className="whats iconsize texto-conteudo">
                        <BsWhatsapp />
                        <p>11 98208.2915</p>
                    </div>
                </div>
            </div>
            <Footer bgcolor={"#101663"} color={"#FFF"} />
        </div>
    );
}
