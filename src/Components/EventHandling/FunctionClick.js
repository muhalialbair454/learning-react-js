import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.info(`Button Clicked`)
    }

    return (
        <div>
            <b><i>Event Handling with Function : </i></b><button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
