import { useState } from "react";

export default function Counter(){
    let [count , setCount] = useState(0);


    function Increment(){
        setCount(count+1);
    }

    return (
        <>
        <button onClick={Increment}>count : {count}</button>
        </>
    );
}