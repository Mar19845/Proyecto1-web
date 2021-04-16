import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './Slider.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';


//class Slider extends React.Component {
const Slider = () => {
    const [current, setCurrent] = useState(0);
    const lenght = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1);
    }



    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }


    //render() {
    return (

        <div className="Slider-Cont">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slider, index) => {
                return (
                    <div className="container" >
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {
                                index === current && (<div className="container" key={index} >
                                    <img src={slider.image} alt={slider.hint} className="image" key={index} />
                                    <div className="overlay">
                                        <div className="text">{slider.hint}</div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                );

            })}
        </div>
    );
    //}
};
export default Slider;