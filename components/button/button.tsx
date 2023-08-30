'use client'

import "./button.css";
import React from "react";

interface ButtonProps {
    onClick?: () => void;
    buttonText?: string;
    buttonIcon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div className="buttonContainer">
            <button onClick={props.onClick}>
                {props.buttonIcon}
                {props.buttonText}
            </button>
        </div>
    );
};

export default Button;