import React from "react";

function HoverCounter (props){
    return(
        <div>
            <h4 onMouseOver={props.increment}>Hovered {props.count} times</h4>
        </div>
    )
}
export default HoverCounter;