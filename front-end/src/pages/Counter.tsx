import React from "react";
import {CounterNumber} from "@/components";
import {Fragment, useState} from "react";

const Counter:React.FC = () => {
    const [number, setNumber] = useState(1)

    const increase = () =>{
        setNumber(number + 1)
    }

    const decrease = () => {
        setNumber(number - 1)
    }

   return (
        <Fragment>
            <h1>Counter</h1>
            <CounterNumber number={number}/>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </Fragment>
    )
}

export default Counter;