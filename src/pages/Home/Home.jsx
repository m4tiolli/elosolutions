import Header from "../../components/Header/Header"
import './Home.css'
import robo from '../../assets/robo.png'
import index1 from '../../assets/index1.png'
import index2 from '../../assets/index2.png'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import { useRef, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    const container1 = useRef(null)
    const scrollContainer1 = () => container1.current.scrollIntoView({ behavior: "smooth" });
    const container2 = useRef(null)
    const scrollContainer2 = () => container2.current.scrollIntoView({ behavior: "smooth" });

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className="container index" ref={container1}>
                <Header />
                <div id="carouselEmpresas"></div>
                <div className="datacontainerindex">
                    <div>
                        <p className="text white" data-aos="fade-up">Potencialize seu projeto com a melhor empresa de locação de equipamentos, assistência técnica 24 horas e montagem de painéis!</p>
                        <button className="button">ver mais</button>
                    </div>
                    <img src={robo} alt="" className="robo" />
                </div>
                <BsChevronCompactDown className="arrow down" color="#fff" onClick={scrollContainer2} />
            </div>
            <div className="container" ref={container2}>
                <BsChevronCompactUp className="arrow up" color="#101663" />
                <h2 className="title">Produtos</h2>
                <div className="datacontainer">
                    <img src={index2} alt="" data-aos="fade-up"/>
                    <p data-aos="fade-up" className="text blue">A Elo Solutions comercializa e distribui materiais de baixa tensão e automação industrial, tais como motores de corrente alternada, servo motores, transdutores de temperatura, celular de cargas e transdutores de força, indicadores, controladores de potência, relés de estado sólido.</p>
                </div>

            </div>
        </div>
    )
}

export default Home