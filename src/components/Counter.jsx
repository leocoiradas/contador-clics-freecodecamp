import React from "react";
import '../component-styles/counter.css'
function Counter ( {numClics} ){
    return(
        <div className='counterBox'>
            {numClics}
        </div>
    )
}
export default Counter