// import React, { useState } from "react";
import './ErrorModal.css';
import Button from '../ButtonWrapper/Button';

const ErrorModal = (props) => {
    // const[isValid, setValid] = useState(true);

    const buttonHandler = () => {
        props.clickedOkay();
    }

    let buttonText = "Okay";
    let buttonType = "button";

    return (
        <div className="backdrop" onClick={buttonHandler}>
            <div className="modal">
                <header className="header">
                    <h2>Invalid Input</h2>
                </header>
                <p className="content">
                    {props.message};
                </p>
                <div className="actions">
                    <Button onClick={buttonHandler} innerText={buttonText} submit={buttonType}/>
                </div>
               
            </div>
        </div>
        
    )
    
}

export default ErrorModal;