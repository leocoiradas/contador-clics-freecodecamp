import React from "react";
import '../component-styles/button.css'
function Button ( {message, clickscounter, action} ){
    return(
        <button className={clickscounter ? 'click' : 'reboot'} onClick={action}>
            {message}
        </button>

    )

}
export default Button