import React, {useState} from "react";
import '../App.css';

const PrettyCounter = (props) => {
    const [count, setcount] = useState(0);
    return (
        <div>
            <h3 className="CountH3">Count</h3>
            <button onClick = {() => {if (count !== 0) setcount(count - 1)}} className="buttonMinus">
                -
            </button>
            {count}
            <button onClick = {() => setcount(count + 1)} className="buttonPlus">
                +
            </button>
            <br></br>
            <button onClick = {() => setcount(0)} className="buttonReset">
                Reset
            </button>
        </div>
    );
}
export default PrettyCounter;