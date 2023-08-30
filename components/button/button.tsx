'use client'

import "./button.css";
import React from "react";

interface ButtonProps {
    buttonText?: string;
    buttonIcon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div className="buttonContainer">
            <button>
                {props.buttonIcon}
                {props.buttonText}
            </button>
        </div>
    );
};

export default Button;