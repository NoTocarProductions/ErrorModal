import React from "react";
import './Button.css';

const Button = (props) => {
    return (
        <button className="button" type={props.submit}>
            {props.innerText}
        </button>
    );
}

export default Button;