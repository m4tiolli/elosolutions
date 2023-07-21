import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
import { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

function Header({ scrolled, color }) {
    const navigate = useNavigate();

    const [responsive, setResponsive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth < 700);
        };

        handleResize(); // Set initial state

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div id="header" className={scrolled ? "header-scroll" : ""}>
            <img src={logo} alt="" id="logoHeader" />
            <input type="checkbox" id="bt_menu" />
            <RxHamburgerMenu htmlFor="bt_menu" className="label" />
            <div className={responsive ? 'menuresponsivo' : 'menu'}>
                <ul>
                    <li onClick={() => navigate("/")} style={{ color: color }}>Home</li>
                    <li style={{ color: color }}>
                        Produtos
                        <ul>
                            <li>Baixa Tensão</li>
                            <li>I.O.T</li>
                            <li>Inversor de Frequência</li>
                            <li>Baixa Tensão</li>
                            <li>I.O.T</li>
                            <li>Inversor de Frequência</li>
                            <li>Baixa Tensão</li>
                            <li>I.O.T</li>
                            <li>Inversor de Frequência</li>
                        </ul>
                    </li>
                    <li style={{ color: color }}>
                        Serviços
                        <ul>
                            <li>Locação de Equipamentos</li>
                            <li>Assistência Técnica</li>
                            <li>Montagem de Painéis</li>
                        </ul>
                    </li>
                    <li onClick={() => navigate("/empresa")} style={{ color: color }}>Empresa</li>
                    <li style={{ color: color }}>Contato</li>
                </ul>
            </div>
        </div >
    );
}

export default Header;
