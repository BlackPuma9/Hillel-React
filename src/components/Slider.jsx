import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class Slider extends React.Component {
    render() {
        const {images} = this.props
        return (
            <Carousel>
                {images.map((image, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img alt="" className="d-block w-100" src={image}/>
                        </Carousel.Item>
                        )
                })}
            </Carousel>
    )
    }
}

export default Slider