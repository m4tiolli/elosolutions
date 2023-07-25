import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
import { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'


function Header({ scrolled, color, bgcolor, burger }) {

    const navigate = useNavigate();

    const [responsive, setResponsive] = useState(false);

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSideBar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)

    function toggleopen1() {
        setOpen1(!open1);
    }
    function toggleopen2() {
        setOpen2(!open2);
    }

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth < 800);
        };

        handleResize(); // Set initial state

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let newbgcolor = ""

    bgcolor === "#101663" ? newbgcolor = "#070b40" : newbgcolor = "#e9e9e9"

    return (
        <div id="header" className={scrolled ? "header-scroll" : ""}>
            <img src={logo} alt="Elo Solutions" id="logoHeader" />
            <input type="checkbox" id="bt_menu" />
            {!sidebarOpen ? <RxHamburgerMenu htmlFor="bt_menu" className="label" onClick={toggleSideBar} color={burger} /> : <RxCross2 htmlFor="bt_menu" className="label" onClick={toggleSideBar} color={color} />}
            <div className={`${sidebarOpen ? 'sidebaropen' : ''} ${responsive ? 'menuresponsivo' : 'menu'}`}>
                <ul style={{ backgroundColor: responsive ? bgcolor : 'transparent' }}>
                    <li style={{ color: color }} ><Link to={"/"}>Home</Link></li>
                    <li style={{ color: color }} onClick={() => toggleopen1()}>
                        Produtos
                        <ul className={open1 ? 'block' : 'none'} style={responsive ? { backgroundColor: newbgcolor } : {}}>
                            <li style={responsive ? { color: color } : {}}><Link to={"/produtos/iot"}>I.O.T</Link></li>
                            <li style={responsive ? { color: color } : {}}><Link to={"/produtos/inversor"}>Inversor de Frequência</Link></li>
                        </ul>
                    </li>
                    <li style={{ color: color }} onClick={() => toggleopen2()}>
                        Serviços
                        <ul className={open2 ? 'block' : 'none'} style={responsive ? { backgroundColor: newbgcolor } : {}}>
                            <li style={responsive ? { color: color } : {}}><Link to={"/servicos/locacao-equipamento"}>Locação de Equipamentos</Link></li>
                            <li style={responsive ? { color: color } : {}}><Link to={"/servicos/assistencia-tecnica"}>Assistência Técnica</Link></li>
                            <li style={responsive ? { color: color } : {}}><Link to={"/servicos/montagem-painel"}>Montagem de Painéis</Link></li>
                        </ul>
                    </li>
                    <li style={{ color: color }}><Link to={"/empresa"}>Empresa</Link></li>
                    <li style={{ color: color }}><Link to={"/contato"}>Contato</Link></li>
                </ul>
            </div>
        </div >
    );
}

export default Header;
