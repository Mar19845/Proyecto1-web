import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Slider from './utils/Slider/Slider';
import Header from './utils/Navbar/header';
import Grid from './utils/Grid/grid';
import Blue from './utils/Blue/Blue';
import Footer from './utils/Footer/Footer';
import Videos from './utils/Videos/Videos';
// <Slider/><Header /><Grid />  

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-wrap-cont">
                    <Header />
                    <Slider />
                    <Grid />
                    <Blue />
                    <Videos />
                </div>
                <Footer />
            </div>
        );
    }
};

export default App;