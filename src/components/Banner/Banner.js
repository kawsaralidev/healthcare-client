import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from "../../images/image/banner/banner1.jpg";
import Banner2 from "../../images/image/banner/banner2.jpg";
import Banner3 from "../../images/image/banner/banner3.jpg";
import "./Banner.css"

const Banner = () => {
    return (
        <div className="carosel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark fs-1 fw-bold">Welcome To Hospital</h3>
                        <p className="text-dark fs-5">People with Medicare, family members, and caregivers People with Medicare, for the latest information on Medicare enrollment, benefits, and other helpful tools.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark fs-1 fw-bold">Try To Be Healthy</h3>
                        <p className="text-dark fs-5">People with Medicare, family members, and caregivers People with Medicare, for the latest information on Medicare enrollment, benefits, and other helpful tools.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark fs-1 fw-bold">Be Awesome</h3>
                        <p className="text-dark fs-5">People with Medicare, family members, and caregivers People with Medicare, for the latest information on Medicare enrollment, benefits, and other helpful tools.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;