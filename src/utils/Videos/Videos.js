import React, { useState } from 'react';
import './Videos.css';

import Esca from '../Imagenes/Videos/11Esca.jpg';
import CanalBoca36 from '../Imagenes/Videos/CanalBoca36.jpg';
import iarley from '../Imagenes/Videos/iarley.jpg';
import { FaPlayCircle } from 'react-icons/fa';


const Videos = () => {

    return (

        <div className="vid-cont" >
            <div className="vid-center">
                <h3>Videos</h3>
                <div className="vid-row">
                    <div className="containerV"  >
                        <FaPlayCircle className="vid-logo" />
                        <img src={CanalBoca36} className="imageV" />

                        <div className="overlayV">
                            <div className="textV">Gonzalo Escalante desde Italia
                            </div>
                        </div>
                    </div>
                    <div className="containerV"  >
                        <FaPlayCircle className="vid-logo" />
                        <img src={Esca} className="imageV" />
                        <div className="overlayV">
                            <div className="textV">Mi 11 ideal: Gonzalo Escalante</div>
                        </div>
                    </div>
                    <div className="containerV"  >
                        <FaPlayCircle className="vid-logo" />
                        <img src={iarley} className="imageV" />
                        <div className="overlayV">
                            <div className="textV">Perfiles Xeneizes: Pedro Iarley</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
    //}
};
export default Videos;