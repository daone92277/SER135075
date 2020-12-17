import React from "react";


function Action(props){
   


    const displayText = props.label;
        

    if(displayText != null){
    return (<button className="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded">
      
    <span className="mdc-button__label">{displayText}</span>
        <div className="mdc-button__ripple"></div>
      </button>);
    }else{
        return(null);
    }
}

export default Action;