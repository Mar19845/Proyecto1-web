import React, { useState } from 'react';
import './grid.css';

import beneficios from '../Imagenes/Grid/beneficios.jpg';
import diego from '../Imagenes/Grid/diego.jpg';
import copa from '../Imagenes/Grid/copa.jpg';

import bbva from '../Imagenes/Grid/bbva.png';
import gladi from '../Imagenes/Grid/gladi.jpg';
import plantel from '../Imagenes/plantel.jpg';

//<img src={qatar} alt="" />
const grid = () => {

    return (

        <div className="grid-cont" >
            <div className="grid-center">
                <h3>Últimas noticias</h3>
                <div className="filaG">


                    <img src={beneficios} className="contPromo" />


                    <div className="containerG"  >
                        <img src={plantel} className="imageG" />
                        <div className="overlayG">
                            <div className="textG">Gano Boca</div>
                        </div>
                    </div>

                    <div className="containerG"  >
                        <img src={copa} className="imageG" />
                        <div className="overlayG">
                            <div className="textG">Lista de la Copa</div>
                        </div>
                    </div>
                </div>

                <div className="filaG">

                    <div className="containerG"  >
                        <img src={gladi} className="imageG" />
                        <div className="overlayG">
                            <div className="textG">Gladiadoras</div>
                        </div>
                    </div>

                    <div className="containerG"  >
                        <img src={diego} className="imageG" />
                        <div className="overlayG">
                            <div className="textG">El Diego</div>
                        </div>
                    </div>


                    <img src={bbva} className="contPromo" />

                </div>


            </div>
        </div>
    );
    //}
};
export default grid;