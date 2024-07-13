import React from "react";

const Square =(props)=>{
    return(
        <div onClick={props.click} className="square">
            <h6>{props.value}</h6>
        </div>
    );
}

export default Square