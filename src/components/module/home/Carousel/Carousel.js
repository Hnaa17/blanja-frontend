// import Carousel from 'react-bootstrap/Carousel';
// import { Carousel } from "bootstrap";
import slide1 from "../../../../asset/img/slide1.png";
import slide2 from "../../../../asset/img/slide2.png";
import { Carousel } from 'react-bootstrap';
import "../StyleHome.css";
import "./style.css";

function CarouselFadeExample() {
    return (
        <div>
          <div className="container slide myslide">
            <div className="row">
              <Carousel>
                <Carousel.Item>
                  <img className="w-100" src={slide1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="w-100" src={slide2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="w-100" src={slide1} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="w-100" src={slide2} alt="Forth slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      );
}

export default CarouselFadeExample;