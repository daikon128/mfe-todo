import React from "react";
import Dice from "./Dice";

const Sandbox = () => {
    const title = 'react'
    return (
        <div>
            <div>{title}</div>
            <div>{"hello" + title}</div>
            <div>{1}</div>
            <div>{/*alert(title) // 一応これもできる */}</div>
            <input type="checkbox" defaultChecked={true}/>
            <div>
                <div className="thisIsHtmlClass">dice in sandbox</div>
                <Dice></Dice>
            </div>
            <ul>
            </ul>
        </div>
    )
};

export default Sandbox;
