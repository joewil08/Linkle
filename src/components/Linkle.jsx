import { useState, useRef, useEffect } from "react";
import Row from "./Row";
import Keyboard from "./Keyboard";
import { LETTERS, potentialWords } from "../data/lettersAndWords";

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
    const [solutionFound, setSolutionFound] = useState(false);

    const linkleRef = useRef();

    useEffect(() => {
        linkleRef.current.focus();
    }, []);

    const typeLetter = (letter) => {
        //TODO add later
        console.log("LETTER TYPED:", letter);
    }

    const handleKeyDown = (event) => {
        if (solutionFound) return;

        if (LETTERS.includes(event.key)) {
            typeLetter(event.key);
        }
    };

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