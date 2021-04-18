import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Slider from './utils/Slider/Slider';
import Header from './utils/Navbar/header';
import Grid from './utils/Grid/grid';
// <Slider/><Header /><Grid />  

class App extends Component {
    render() {
        return (
            <div className="app">
              <Header />
              <Slider/>
              <Grid />
              
            </div>
        );
    }
};

export default App;