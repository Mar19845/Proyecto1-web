import React, { useState } from 'react';
import './Blue.css';
import Select from 'react-select';

const Blue = () => {
    const options = [
        { value: 'Superliga', label: 'Superliga' },
        { value: 'Copa Argentina', label: 'Copa Argentina' },
        { value: 'Copa Libertadores', label: 'Copa Libertadores' }
    ]

    return (

        <div className="blue-cont" >
            <div className="blue-top">
                <Select options={options} className="select-blue"/>
            </div>
            <div className="blue-down">

            </div>
        </div>
    );
    //}
};
export default Blue;