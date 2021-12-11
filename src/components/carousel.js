import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true}>
                <div id="squares">
                    <img src="./public/../caro-img/honeysuckle-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/poppy-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/lavender-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/whiterose-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/sunflower-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/buttercup-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/rose-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/geranium-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/carnation-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/pansy-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/orchid-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/waterlily-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/1-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/2-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/7-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/4-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/5-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/3-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/6-img.jpeg" className="caro-img" alt=""/>
                </div>
                <div id="squares">
                <img src="./public/../caro-img/8-img.jpeg" className="caro-img" alt=""/>
                </div>

            </Carousel>
        </div>
    );
}