import { useEffect, useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { IoFlash } from "react-icons/io5";
import AOS from "aos";

//Importação de estilo
import "./Home.css";
import "aos/dist/aos.css";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//Importe de Imagens
import robo from "../../assets/robo.png";
import index2 from "../../assets/index2.png";
import index3 from "../../assets/index3.png";
import IOT from "../../assets/IOT_Elo.png";
import Inversor from "../../assets/Inversor.png";
import Baixa from "../../assets/BaixaTensao.png";
import Painel from "../../assets/Painel.png";
import Suporte from "../../assets/eletricista-manutencao-eletrica.png";

//Carrossel
import CarouselProducts from "../../components/Carousel/Carousel";
import CarouselMini from "../../components/CarouselMini/CarouselMini";
const images = [IOT, Inversor, Baixa, Painel, index2, index3];

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  function produtos() {
    window.location.href = "#produtos";
  }
  function servicos() {
    window.location.href = "#servicos";
  }
  function industrias() {
    window.location.href = "#industrias";
  }

  function empresa() {
    window.location.href = "#empresas";
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container index" id="index">
        <Header scrolled={scrolled} />
        <div id="carouselEmpresas">
          <CarouselMini />
        </div>
        <div className="datacontainerindex">
          <div>
            <p className="textindex white" data-aos="fade-up">
              Potencialize seu projeto com a melhor empresa de locação de
              equipamentos, assistência técnica 24 horas e montagem de painéis!
            </p>
            <button className="button">ver mais</button>
          </div>
          <img src={robo} alt="" className="robo" />
        </div>
        <BsChevronCompactDown
          className="arrow down"
          color="#fff"
          onClick={produtos}
        />
      </div>
      <div className="wrapper">
        <div className="container" id="produtos">
          <BsChevronCompactUp
            className="arrow up"
            color="#101663"
            onClick={() => (window.location.href = "#index")}
          />
          <h2 className="title">Produtos</h2>
          <div className="datacontainer descido">
            <h2 className="title subtitle">I.O.T</h2>
            <img src={IOT} alt="IOT" className="image" />
            <div className="textbutton">
              <div className="align">
                <p className="text1 blue">
                  Comercializamos um sistema completo de I.O.T, onde sua empresa
                  poderá ter uma melhor visão de como está a vida útil de seu
                  equipamento, como Compressores, Motores e equipamentos em
                  geral.
                </p>
                <button className="button">ver mais</button>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            className="svg svgleft"
          >
            <path d="M711 900L0 0V900H711Z" fill="#D82528" />
          </svg>
        </div>
        <div className="container">
          <div className="datacontainer reverse">
            <img
              src={Inversor}
              alt="Inversor de Frequência"
              className="image"
            />
            <h2 className="title">Inversor de Frequência e Conversores</h2>
            <div className="textbutton-reverse">
              <div className="align">
                <p className="text1 blue">
                  Somos revendedores certificados das principais fabricantes de
                  inversores de frequência e conversores do mercado. Vendemos
                  para qualquer tipo de aplicação sendo ela pesada ou leve.
                </p>
                <button className="button">ver mais</button>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            className="svg svgleft reversesvg"
          >
            <path d="M711 900L0 0V900H711Z" fill="#D82528" />
          </svg>
        </div>
        <div className="container">
          <div className="datacontainer">
            <h2 className="title">Baixa Tensão</h2>
            <img src={Baixa} alt="Baixa Tensão" className="image" />
            <div className="textbutton">
              <div className="align">
                <p className="text1 blue">
                  Vendemos Equipamentos de baixa tensão, como Inversores de
                  Frequência, CLP (Controladores Lógicos Programáveis),
                  Disjuntores-Motores, Relés e entre outros equipamentos.
                </p>
                <button className="button">ver mais</button>
                <div />
              </div>
            </div>
            <BsChevronCompactDown
              className="arrow down"
              color="#101663"
              onClick={servicos}
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 714 900"
            className="svg svgright"
            fill="none"
          >
            <path d="M0 900L714 0V900H0Z" fill="#D82528" />
          </svg>
        </div>
      </div>
      <div className="wrapper">
        <div className="container bgblue" id="servicos">
          <BsChevronCompactUp
            className="arrow up"
            color="#fff"
            onClick={produtos}
          />
          <h2 className="title white">Serviços</h2>
          <div className="datacontainer descido">
            <h2 className="title subtitle white">Montagem de Painéis</h2>
            <img src={Painel} alt="Montagem de Painel" className="image" />
            <div className="textbutton">
              <div className="align">
                <p className="text1 white">
                  Fazemos a montagem de painél(eis) para qualquer linha de
                  montagem independente da aplicação, entregamos além do painél
                  elétrico montado, enviamos o esquema elétrico completo e caso
                  seja necessário fazemos a programação do CLP.
                </p>
                <button className="buttonblue">ver mais</button>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 714 900"
            className="svg svgright reversesvg"
            fill="none"
          >
            <path d="M0 900L714 0V900H0Z" fill="#D82528" />
          </svg>
        </div>
        <div className="container bgblue">
          <div className="datacontainer reverse">
            <h2 className="title white">Assistência e Suporte técnico</h2>
            <img
              src={Suporte}
              alt="Assistencia técnica 24 Horas"
              className="image"
              style={{ borderRadius: 10 }}
            />
            <div className="textbutton-reverse">
              <div className="align">
                <p className="text1 white">
                  Somos reconhecidos além do nosso atendimento e sim, da nossa
                  disponibilidade 24 Horas todos os dias, fazemos toda a parte
                  de assistência em seus equipamentos e também suporte Local
                  e/ou Remoto.
                </p>
                <button className="buttonblue">ver mais</button>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            className="svg svgleft"
          >
            <path d="M711 900L0 0V900H711Z" fill="#D82528" />
          </svg>
        </div>
        <div className="container bgblue">
          <div className="datacontainer">
            <h2 className="title white">Locação de equipamentos</h2>
            <img src={index3} alt="" className="image xsize" />
            <div className="textbutton">
              <div className="align">
                <p className="text1 white">
                  Se a sua empresa precisa de algo imediato como Inversores,
                  Conversores e/ou Soft Starters, nós oferecemos esses
                  equipamentos e mais, caso você não tenha um profissional
                  capacitado, disponibilizamos um técnico que fará toda a
                  instalação e parametrização do mesmo.
                </p>
                <button className="buttonblue">ver mais</button>
              </div>
            </div>
          </div>
          <BsChevronCompactDown
            className="arrow down"
            color="#fff"
            onClick={industrias}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            className="svg svgleft reversesvg"
          >
            <path d="M711 900L0 0V900H711Z" fill="#D82528" />
          </svg>
        </div>
      </div>
      <div className="container inline" id="industrias">
        <BsChevronCompactUp
          className="arrow up"
          color="#101663"
          onClick={servicos}
        />
        <div className="industrias">
          <IoFlash className="flash" />
          <h2 className="titleindustrias blue">Indústria Metalúrgica</h2>
          <p className="textindustrias blue">
            A mais de 13 anos a Elo Solutions presta serviços oferecendo
            soluções à seus clientes. Um bom exemplo foi em uma Usina de Açúcar
            e Álcool localizada na região de Araçatuba...
          </p>
          <button className="button">ver mais</button>
        </div>
        <div className="industrias">
          <IoFlash className="flash" />
          <h2 className="titleindustrias blue">Indústria Sucroalcooleira</h2>
          <p className="textindustrias blue">
            A Elo Solutions também está presente na indústria metalúrgica,
            sempre pensando nas soluções mais adequadas aos processos de seus
            clientes...
          </p>
          <button className="button">ver mais</button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          viewBox="0 0 714 900"
          className="svg svgright"
          fill="none"
        >
          <path d="M0 900L714 0V900H0Z" fill="#D82528" />
        </svg>
        <BsChevronCompactDown
          className="arrow down"
          color="#101663"
          onClick={empresa}
        />
      </div>
      <div className="container bgblue" id="empresas">
        <BsChevronCompactUp
          className="arrow up"
          color="#fff"
          onClick={industrias}
        />
        <h2 className="title white">Empresas Parceiras</h2>
        <CarouselProducts />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
