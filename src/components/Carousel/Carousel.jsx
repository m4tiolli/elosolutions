import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'


export default class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true, // Ativa o modo de reprodução automática
            autoplaySpeed: 2000, // Tempo de espera entre as transições
            arrows: false,
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>

                    <h3>1</h3>


                    <h3>2</h3>


                    <h3>3</h3>


                    <h3>4</h3>


                    <h3>5</h3>


                    <h3>6</h3>

                </Slider>
            </div>
        );
    }
}