import React, { useState } from 'react';
import './Footer.css';

import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import data from '../Imagenes/datafactory.png';

const Footer = () => {

    return (

        <div className="main-foot" >
            <div className="foot-cont">
                <div className="foot-row">
                    <div className="foot-col">
                        <h4>SEGUINOS</h4>
                        <FaYoutube className="foot-logo"/>
                        <FaInstagram className="foot-logo"/>
                        <FaFacebookSquare className="foot-logo"/>
                        <FaTwitter className="foot-logo"/>
                        <FaMusic className="foot-logo"/>
                        <img src={data}/>
                    </div>
                    <div className="foot-col">
                        <h6>© Copyright {new Date().getFullYear()} Boca Juniors (fan edit JM)</h6>
                        <h6>Desarrollado por ©Proyecto1-WEB-Mar19845</h6>
                    </div>
                </div>
            </div>
        </div>
    );
    //}
};
export default Footer;