import React, { useState } from "react";
import CounterContext from "./CounterContext.js";

export default function CounterContextProvider(props) {
    const [counter, setCounter] = useState(0);



    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {props.children}
        </CounterContext.Provider>
    );
}
