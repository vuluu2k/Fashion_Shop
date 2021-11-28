import React from 'react'
import {Carousel} from 'react-bootstrap'
export default function CarouselCustom() {
    return (
        <div>
            <Carousel interval={4000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://360boutique.vn/wp-content/uploads/2021/11/1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://360boutique.vn/wp-content/uploads/2021/10/COVER-WEB.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://360boutique.vn/wp-content/uploads/2021/10/WEB-LEN.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
