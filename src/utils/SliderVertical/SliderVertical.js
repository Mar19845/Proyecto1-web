import React, { useState } from 'react';
import './SilderVertical.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';



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
    
    
    
    const mytimer = () =>{
        
        setInterval(()=>{
            setCurrent(current === lenght - 1 ? 0 : current + 1);
        },10000)
    }


    return (
    
        <div className="vertical-cont">
            
            <FaArrowAltCircleLeft className="left-arrowV" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrowV" onClick={nextSlide} />
            
            {SliderData.map((slider, index) => {
                return (

                    <div onLoad={mytimer} className={index === current ? 'slideV activeV' : 'slideV'} key={index}>
                        {
                            index === current && (
                                <div className="cont-V" key={index} >
                                    <img src={slider.image}   key={index} />
                                </div>)
                        }
                    </div>
                );

            })}
        </div>
    );

};
export default Slider;