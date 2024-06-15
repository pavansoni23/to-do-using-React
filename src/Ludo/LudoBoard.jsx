import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ red: 0, green: 0, blue: 0, yellow: 0 });
    let [arr , setArr] = useState(["no moves"]);

    function updateRed (){
        setMoves({...moves , red : moves.red+1});   // spreaded object
        setArr([...arr , ", red moves"]);                 // spreaded array
    }

    function updateGreen (){
        setMoves({...moves , green : moves.green+1});   // spreaded object
    }

    function updateBlue (){
        setMoves({...moves , blue : moves.blue+1});   // spreaded object
    }

    function updateYellow (){
        setMoves({...moves , yellow : moves.yellow+1});   // spreaded object
    }

    return (
        <>
            <p>game begins....</p>
            <div className="board">
                <p>Array is : {arr}</p>
                <p>Red Moves : {moves.red}</p>
                <button style={{ backgroundColor: "red" }}   onClick={updateRed}>+1</button>

                <p>Green Moves : {moves.green}</p>
                <button style={{ backgroundColor: "green" }}   onClick={updateGreen}>+1</button>

                <p>Blue Moves : {moves.blue} </p>
                <button style={{ backgroundColor: "blue" }}   onClick={updateBlue}>+1</button>

                <p>Yellow Moves : {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow" }}   onClick={updateYellow}>+1</button>
            </div>
        </>
    );
}

