import './WhatsApp.css'

import { FaWhatsapp } from 'react-icons/fa'

function WhatsApp({ scrolled }) {
    return (
        <a href="https://wa.me//5511973735968">
            <div id="containerwhatsapp" className={!scrolled ? 'displaynone' : ''}>
                <FaWhatsapp color='#fff' size={40} />
            </div>
        </a>
    )
}

export default WhatsApp