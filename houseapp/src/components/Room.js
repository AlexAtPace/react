import React from 'react';
import PrettyCounter from './PrettyCounter.js';
import '../App.css';

const Room = (props) => (
    <div className='EntireRoom'>
        <h3>Room: <i>{props.name}</i></h3>
        <PrettyCounter></PrettyCounter>
        {/* <Counter1></Counter1>
        <Counter2></Counter2>
        <Counter3></Counter3> */}
    </div>
) 

export default Room;