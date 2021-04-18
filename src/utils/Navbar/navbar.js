import React, { useState } from 'react';
import './navbar.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets';
import { FaSistrix } from 'react-icons/fa';
//class Navbar extends Component {
const Navbar = () => {
    //render() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    return (

        <section className="navbar">
            <div className="navbar-top">
                <a href="/" className="navbar-item">Noticias</a>
                <a href="/about" className="navbar-item">El Club</a>
                <a href="/portfolio" className="navbar-item">Futbol</a>
                <a href="/shop" className="navbar-item">Basquet</a>
                <a href="/blog" className="navbar-item">Deportes Amateurs</a>
                <a href="/contact" className="navbar-item">La Bombonera</a>
                <a href="/contact" className="navbar-item">Socios</a>
                <a href="/contact" className="navbar-item">Entrenamiento</a>
                <a href="/contact" className="navbar-item">Sitios de Boca</a>
                <FaSistrix className="navbar-item" onClick={() => setShow2(!show2)} />
                <div className="navbar-item" onClick={() => setShow(!show)}>Ultimo Momento</div>

            </div>
            <div className="navbar-down">
                {
                    show2 ?
                        <div className="Busqueda">
                            <FaSistrix onClick={() => setShow2(!show2)} className="Lupa"/>
                            <textarea className="Search" placeholder="BUSCA EN BOCAJUNIORS.COM.AR" />
                        </div> : null
                }
            </div>
            {
                show ?
                    <div className="twitter">
                        <Timeline
                            dataSource={{
                                sourceType: 'https://twitter.com/bocajrsoficial',
                                screenName: 'BocaJrsOficial'
                            }}
                            options={{
                                height: '400'
                            }}
                        /> </div> : null
            }
        </section>


    );
    //}
};

export default Navbar;