import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.sayHi("Muhammad Ali Albair")}>Say Hi</button>
        </div>
    )
}

export default ChildComponent
