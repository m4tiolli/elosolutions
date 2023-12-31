import { useEffect, useState } from "react";
import { IoFlash } from "react-icons/io5";
import AOS from "aos";

//Importação de estilo
import "./Home.css";
import "aos/dist/aos.css";

//Importe de componentes
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//Importe de Imagens
import robo from "../../assets/Robot.png";
import index3 from "../../assets/index3.png";
import IOT from "../../assets/IOT_Elo.png";
import Inversor from "../../assets/Inversor.png";
import Baixa from "../../assets/BaixaTensao.png";
import Painel from "../../assets/Alicate.png";
import Suporte from "../../assets/eletricista-manutencao-eletrica.png";

//Carrossel
import CarouselProducts from "../../components/Carousel/Carousel";
import CarouselMini from "../../components/CarouselMini/CarouselMini";
import { useNavigate } from "react-router-dom";
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import ScrollDownButton from "../../components/ScrollDownButton/ScrollDownButton";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButon";

function Home() {

  const navigate = useNavigate();

  const [color, setColor] = useState("#fff")
  const [bgcolor, setBgcolor] = useState("#101663")
  useEffect(() => {
    AOS.init();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      isScrolled ? setColor("#101663") : setColor("#fff");
      isScrolled ? setBgcolor("#fff") : setBgcolor("#101663");
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <WhatsApp scrolled={scrolled} />
      <div className="container index" id="index">
        <Header scrolled={scrolled} color={color} bgcolor={bgcolor} burger={color} />
        <div id="carouselEmpresas">
          <CarouselMini />
        </div>
        <div className="datacontainerindex">
          <div>
            <p className="textindex white" data-aos="fade-up">
              Potencialize seu Projeto com a Elo Solutions, conheça nossas soluções, produtos e srviços que oferecemos.
              Caso queira mais clique no botão abaixo!
            </p>
            <button className="button" onClick={() => navigate('/contato')}>ver mais</button>
          </div>
          <img src={robo} alt="" className="robo" />
        </div>
        <ScrollDownButton targetId={"produtos"} color={"#fff"} />
      </div>
      <div className="wrapper">
        <div className="container" id="produtos">
          <ScrollUpButton targetId={"index"} color={"#101663"} />
          <h2 className="title">Produtos</h2>
          <div className="datacontainer descido">
            <h2 className="subtitle">I.O.T</h2>
            <img src={IOT} alt="IOT" className="image" />
            <div className="textbutton">
              <div className="align">
                <p className="text1 blue">
                  Comercializamos um sistema completo de I.O.T, onde sua empresa
                  poderá ter uma melhor visão de como está a vida útil de seu
                  equipamento, como Compressores, Motores e equipamentos em
                  geral.
                </p>
                <button className="button" onClick={() => navigate('/produtos/iot')}>ver mais</button>
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
                <button className="button" onClick={() => navigate('/produtos/inversor')}>ver mais</button>
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
                  Frequência, Disjuntores-Motores, Relés e entre outros equipamentos.
                </p>
                <button className="button">ver mais</button>
                <div />
              </div>
            </div>
          </div>
          <ScrollDownButton targetId={"servicos"} color={"#101663"} />
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
          <ScrollUpButton targetId={"produtos"} color={"#101663"} />
          <h2 className="title white">Serviços</h2>
          <div className="datacontainer descido">
            <h2 className="title subtitle white">Montagem de Painéis</h2>
            <img src={Painel} alt="Montagem de Painel" className="imagesquare" />
            <div className="textbutton">
              <div className="align">
                <p className="text1 white">
                  Fazemos a montagem de painél para qualquer linha de
                  montagem independente da aplicação, entregamos além do painél
                  elétrico montado, enviamos o esquema elétrico completo e caso
                  seja necessário fazemos a programação do CLP.
                </p>
                <button className="buttonblue" onClick={() => navigate('/servicos/montagem-painel')}>ver mais</button>
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
              className="imagesquare"
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
                <button className="buttonblue" onClick={() => navigate('/servicos/assistencia-tecnica')}>ver mais</button>
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
                <button className="buttonblue" onClick={() => navigate('/servicos/locacao-equipamento')}>ver mais</button>
              </div>
            </div>
          </div>
          <ScrollDownButton targetId={"casos-de-sucesso"} color={"#101663"} />
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
      <div className="container inline" id="casos-de-sucesso">
        <ScrollUpButton targetId={"servicos"} color={"#101663"} />
        <div className="industrias">
          <IoFlash className="flash" />
          <h2 className="titleindustrias blue">Indústria Sucroalcooleira</h2>
          <p className="textindustrias blue">
            A mais de 13 anos a Elo Solutions presta serviços oferecendo
            soluções à seus clientes. Um bom exemplo foi em uma Usina de Açúcar
            e Álcool localizada na região de Araçatuba...
          </p>
        </div>
        <div className="industrias">
          <IoFlash className="flash" />
          <h2 className="titleindustrias blue">Indústria Metalúrgica</h2>
          <p className="textindustrias blue">
            A Elo Solutions também está presente na indústria metalúrgica,
            sempre pensando nas soluções mais adequadas aos processos de seus
            clientes...
          </p>
        </div>
        <div className="center" >
          <ScrollDownButton targetId={"empresas"} />
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
      <div className="container bgblue lightheight" id="empresas">
        <ScrollUpButton targetId={"empresas"} color={"#fff"} />
        <h2 className="title white">Empresas Parceiras</h2>
        <CarouselProducts />
      </div>
      <Footer bgcolor={'#FFF'} color={'#101663'} />
    </div>
  );
}

export default Home;
