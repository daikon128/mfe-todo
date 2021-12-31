import React from "react";
import Dice from "./Dice";

const JsxSandbox = () => {
    const title = 'react'
    const stringArray = ["a", "b", "c"]
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
            <div>
                <ul>
                    {stringArray.map((text, index) => (
                        <li>{text}</li>
                        ))}
                </ul>
            </div>
            <ul>
            </ul>
        </div>
    )
};

export default JsxSandbox;
