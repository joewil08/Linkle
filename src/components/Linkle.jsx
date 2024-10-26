import { useState, useRef, useEffect } from "react";
import "../styles/Linkle.css"
import Row from "./Row";
import Keyboard from "./Keyboard";

const SOLUTION = "zelda";

export default function Linkle() {
    // template for grid
    const [guesses, setGuesses] = useState([
        "     ",
        "     ",
        "     ",
        "     ",
        "     ",
        "     "
    ]);

    const linkleRef = useRef();

    useEffect(() => {
        linkleRef.current.focus();
    }, []);

    const handleKeyDown = () => {};

    return (
        <div className="linkle"
            ref={linkleRef}
            tabIndex="0"
            onBlur={(e) => {
                e.target.focus();
            }}
            onKeyDown={handleKeyDown}
        >
        <h1 className="title">Linkle</h1>
        <div className="notification"></div>
        {guesses.map((guess, index) => {
            return <Row key={index} word={guess} />
        })}
    </div>
    );
}