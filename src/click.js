import React, { useState } from "react";

function Click (props){

    

    return(
        <div>
            <button onClick={props.i}>Cliced {props.c} times {props.name}</button>
        </div>
    )
}
export default Click;