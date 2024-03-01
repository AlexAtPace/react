import React from 'react';
import '../App.css';

const House = (props) => (
    <div>
        <h1>My Awesome House</h1>
        <div>{props.children}</div>
    </div>
) 

export default House;