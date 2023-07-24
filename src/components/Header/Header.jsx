import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
import { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'


function Header({ scrolled, color, bgcolor }) {

    const navigate = useNavigate();

    function navIot() {
        navigate('produtos/iot');
    }

    function navInversor() {
        navigate('produtos/inversor');
    }
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
            <img src={logo} alt="" id="logoHeader" />
            <input type="checkbox" id="bt_menu" />
            {!sidebarOpen ? <RxHamburgerMenu htmlFor="bt_menu" className="label" onClick={toggleSideBar} color={color} /> : <RxCross2 htmlFor="bt_menu" className="label" onClick={toggleSideBar} color={color} />}
            <div className={`${sidebarOpen ? 'sidebaropen' : ''} ${responsive ? 'menuresponsivo' : 'menu'}`}>
                <ul style={{ backgroundColor: responsive ? bgcolor : 'transparent' }}>
                    <li onClick={() => navigate("/")} style={{ color: color }}>Home</li>
                    <li style={{ color: color }} onClick={() => toggleopen1()}>
                        Produtos
                        <ul className={open1 ? 'block' : 'none'} style={responsive ? { backgroundColor: newbgcolor } : {}}>
                            <li style={responsive ? { color: color } : {}} onClick={navIot}>I.O.T</li>
                            <li style={responsive ? { color: color } : {}} onClick={navInversor}>Inversor de Frequência</li>
                        </ul>
                    </li>
                    <li style={{ color: color }} onClick={() => toggleopen2()}>
                        Serviços
                        <ul className={open2 ? 'block' : 'none'} style={responsive ? { backgroundColor: newbgcolor } : {}}>
                            <li style={responsive ? { color: color } : {}}>Locação de Equipamentos</li>
                            <li style={responsive ? { color: color } : {}}>Assistência Técnica</li>
                            <li style={responsive ? { color: color } : {}}>Montagem de Painéis</li>
                        </ul>
                    </li>
                    <li onClick={() => navigate("/empresa")} style={{ color: color }}>Empresa</li>
                    <li onClick={() => navigate("/contato")} style={{ color: color }}>Contato</li>
                </ul>
            </div>
        </div >
    );
}

export default Header;
