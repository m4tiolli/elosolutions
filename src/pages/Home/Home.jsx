import { useRef, useEffect } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { IoFlash } from "react-icons/io5";
import AOS from "aos";

//Importação de estilo
import "./Home.css";
import "aos/dist/aos.css";

//Importe de componentes
import Header from "../../components/Header/Header";

//Importe de Imagens
import robo from "../../assets/robo.png";
import index2 from "../../assets/index2.png";
import index3 from "../../assets/index3.png";

function Home() {
  const container1 = useRef(null);
  const scrollContainer1 = () =>
    container1.current.scrollIntoView({ behavior: "smooth" });
  const container2 = useRef(null);
  const scrollContainer2 = () =>
    container2.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container index" ref={container1}>
        <Header />
        <div id="carouselEmpresas"></div>
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
          onClick={scrollContainer2}
        />
      </div>
      <div className="wrapper" ref={container2}>
        <div id="scrollableDiv" className="containerpai">
          <div className="container">
            <BsChevronCompactUp className="arrow up" color="#101663" />
            <h2 className="title">Produtos</h2>
            <div className="datacontainer descido">
              <h2 className="title subtitle">I.O.T</h2>
              <img src={index2} alt="" className="image" />
              <div className="textbutton">
                <div className="align">
                  <p className="text1 blue">
                    Comerçalizamos um sistema completo de I.O.T, onde sua
                    empresa poderá ter uma melhor visão de como esta a vida útil
                    de seu equipamento, como Compressores, Motores e
                    equipamentos em geral.
                  </p>
                  <button className="button">ver mais</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="datacontainer reverse">
              <img src={index2} alt="" className="image" />
              <h2 className="title">Inversor de Frequência e Conversores</h2>
              <div className="textbutton-reverse">
                <div className="align">
                  <p className="text1 blue">
                    Somos revendedores certificados das principais fabricantes
                    de inversores de frequência e conversores do mercado.
                    Vendemos para qualquer tipo de aplicação sendo ela pesada ou
                    leve.
                  </p>
                  <button className="button">ver mais</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="datacontainer">
              <h2 className="title">Baixa Tensão</h2>
              <img src={index2} alt="" className="image" />
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
              <BsChevronCompactDown className="arrow down" color="#101663" />
            </div>
          </div>
        </div>
        <div className="wrapper" ref={container2}>
          <div id="scrollableDiv" className="containerpai"></div>
          <div className="container">
            <BsChevronCompactUp className="arrow up" color="#101663" />
            <h2 className="title">Serviços</h2>
            <div className="datacontainer descido">
              <h2 className="title subtitle">Montagem de Painéis</h2>
              <img src={index3} alt="" className="image xsize" />
              <div className="textbutton">
                <div className="align">
                  <p className="text1 blue">
                    Fazemos a montagem de painél(eis) para qualquer linha de
                    montagem independente da aplicação, entregamos além do
                    painél elétrico montado, enviamos o esquema elétrico
                    completo e caso seje necessário fazemos a programação do
                    CLP.
                  </p>
                  <button className="button">ver mais</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="datacontainer reverse">
              <h2 className="title">Assistência e Suporte técnico</h2>
              <img src={index3} alt="" className="image xsize" />
              <div className="textbutton-reverse">
                <div className="align">
                  <p className="text1 blue">
                    Somos reconhecidos além do nosso atendimento e sim, da nossa
                    disponibilidade 24 Horas todos os dias, fazemos toda a parte
                    de assistência em seus equipamentos e também suporte Local
                    e/ou Remoto.
                  </p>
                  <button className="button">ver mais</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="datacontainer">
              <h2 className="title">Locação de equipamentos</h2>
              <img src={index3} alt="" className="image xsize" />
              <div className="textbutton">
                <div className="align">
                  <p className="text1 blue">
                    Se a sua empresa precisa de algo imediáto como Inversores,
                    Conversores e/ou Soft Starters, nós oferecemos esses
                    equipamentos e mais, caso você não tenha um profissional
                    capacitado, disponibilizamos um técnico que fará toda a
                    instalação e parametrização do mesmo.
                  </p>
                  <button className="button">ver mais</button>
                </div>
              </div>
            </div>
            <BsChevronCompactDown className="arrow down" color="#101663" />
          </div>
        </div>
        <div className="container inline">
          <BsChevronCompactUp className="arrow up" color="#101663" />
          <div className="industrias">
            <IoFlash className="flash" />
            <h2 className="titleindustrias blue">Indústria Metalúrgica</h2>
            <p className="textindustrias blue">
              A mais de 13 anos a Elo Solutions presta serviços oferecendo
              soluções à seus clientes. Um bom exemplo foi em uma Usina de
              Açúcar e Álcool localizada na região de Araçatuba...
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
          <BsChevronCompactDown className="arrow down" color="#101663" />
        </div>
      </div>
    </div>
  );
}

export default Home;
