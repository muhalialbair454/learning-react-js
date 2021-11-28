import React from 'react'

function Person({person}) {
    return (
        <div>
            <p>I am <b>{person.name}</b>. I am <b>{person.age}</b>. I know <b>{person.skill}</b>   </p>
        </div>
    )
}

export default Person
