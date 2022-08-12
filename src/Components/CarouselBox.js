import React, {Component} from 'react';

import Carousel from "react-bootstrap/Carousel";

import driveImg from '../assets/drive.jpg'
import mountainImg from '../assets/mountain.jpg'


export default class CarouselBox extends Component {
    render() {
        return (
          // картинки карусели
            <Carousel>
                <Carousel.Item>
                    <img height="700"
                        className="d-block w-100"
                        src={ driveImg }
                        alt="drive"
                    />
                    {/*текст внутри карусели*/}
                    <Carousel.Caption>
                        <h3>New capabilities</h3>
                        <p>We know, this road is not easy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="700"
                        className="d-block w-100"
                        src={ mountainImg }
                        alt="drive"
                    />
                    <Carousel.Caption>
                        <h3>New capabilities</h3>
                        <p>I know, this road is not easy</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

