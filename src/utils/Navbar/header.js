import React, { Component } from 'react';
import Navbar from './navbar';
import './header.css';

import BocaLogo from '../Imagenes/Navbar/BocaLogo.png';
import addidas from '../Imagenes/Navbar/addidas.png';
import garbarino from '../Imagenes/Navbar/garbarino.png';
import pes from '../Imagenes/Navbar/pes.png';
import qatar from '../Imagenes/Navbar/qatar.png';


class Header extends Component {
    render() {
        return (
            <section className="header">
                <section className="header-top">
                    <section className="header-top__logo">
                        <img src={BocaLogo} className="Boca-logo" />
                        <h3 className="BocaNombre">Club Atletico BOCA JUNIORS</h3>
                    </section>
                    <section className="patrocinadores">
                        <img src={addidas} className="marcas" />
                        <img src={qatar} className="marcas" />
                        <img src={garbarino} className="marcas" />
                        <img src={pes} className="marcas" />
                    </section>

                </section>

                <section className="header-bottom">
                   <Navbar/>
                </section>
            </section>
        );
    }
};

export default Header;