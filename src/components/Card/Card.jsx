import React, { useState, useEffect } from "react";

//Importação de estilização
import "./Card.css";

//Importação para efeito Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importe de imagens
import image1 from "../../assets/image_25.png";

export default function Card() {
    const [responsive, setResponsive] = useState();

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

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("https://localhost:7231/api/Parceiros", {
    //         method: "GET",
    //     })
    //         .then((response) => response.json())
    //         .then((json) => setProducts(json))
    //         .catch((err) => {
    //             console.log(err);
    //             alert("Erro ao buscar Empresas Parceiras!");
    //             window.location.reload();
    //         });
    // }, []);

    //Configurações de efeito slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: responsive ? 1 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const historia = [
        {
            title: 'O Começo',
            imagem: image1,
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer placerat nec neque nec sodales. Duis at finibus elit,
            in vehicula felis. Aliquam dapibus orci a elit pretium
            fringilla efficitur sit amet lorem. Sed lorem urna, convallis
            id lectus quis, pretium lobortis ante. Cras orci elit,
            tincidunt quis sapien vel, dapibus finibus eros. Nulla porta,
            nibh non ullamcorper egestas, turpis ipsum gravida nulla, a
            tincidunt mi dolor nec massa. Aliquam ac eros bibendum,
            viverra turpis at, egestas lacus. Aliquam accumsan erat non
            libero tempus, eget tempus ex pretium.`
        },
        {
            title: 'O Meio',
            imagem: image1,
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer placerat nec neque nec sodales. Duis at finibus elit,
            in vehicula felis. Aliquam dapibus orci a elit pretium
            fringilla efficitur sit amet lorem. Sed lorem urna, convallis
            id lectus quis, pretium lobortis ante. Cras orci elit,
            tincidunt quis sapien vel, dapibus finibus eros. Nulla porta,
            nibh non ullamcorper egestas, turpis ipsum gravida nulla, a
            tincidunt mi dolor nec massa. Aliquam ac eros bibendum,
            viverra turpis at, egestas lacus. Aliquam accumsan erat non
            libero tempus, eget tempus ex pretium.`
        },
        {
            title: 'O Futuro',
            imagem: image1,
            info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer placerat nec neque nec sodales. Duis at finibus elit,
            in vehicula felis. Aliquam dapibus orci a elit pretium
            fringilla efficitur sit amet lorem. Sed lorem urna, convallis
            id lectus quis, pretium lobortis ante. Cras orci elit,
            tincidunt quis sapien vel, dapibus finibus eros. Nulla porta,
            nibh non ullamcorper egestas, turpis ipsum gravida nulla, a
            tincidunt mi dolor nec massa. Aliquam ac eros bibendum,
            viverra turpis at, egestas lacus. Aliquam accumsan erat non
            libero tempus, eget tempus ex pretium.`
        }
    ]


    return (
        <>
            <h1 className="text-blue texto-titulo">História</h1>
            <div className="carousel">
                <Slider {...settings}>
                    {historia.map((historias, index) => (
                        <div key={index} className="">
                            <div className="Card">
                                <h1 className="titleimg blue">{historias?.title}</h1>
                                <div className="Context">
                                    <img src={historias?.imagem} alt="" className="imgproduct" />
                                    <p className="conteudo blue">
                                        {historias?.info}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            </>
    );
}
