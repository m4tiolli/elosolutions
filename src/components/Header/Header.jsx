import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
    return (
        <div id='header'>
            <img src={logo} alt="" id="logoHeader" />
            <div id='nav'>
                <li>Home</li>
                <li>Empresa</li>
                <li>Serviços</li>
                <li>Produtos</li>
                <li>Contato</li>
            </div>
        </div>
    )
}

export default Header