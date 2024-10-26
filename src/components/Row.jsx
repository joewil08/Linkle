import React from "react";

export default function Row({ word }) {
    return (
        <div className="row">
            {word.split("").map((letter, index) => {
                return (
                    <div className="letter" key={index}>
                        {letter}
                        <div className="back">{letter}</div>
                    </div>
                );
            })}
        </div>
    );
}