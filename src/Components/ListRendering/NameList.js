import React from 'react'
import Person from './Person'

function NameList() {
    // Dummy JSON
    const persons = [
        {
            id: 1,
            name: 'Muhammad Ali Albair',
            age: 23,
            skill: 'React',
        },
        {
            id: 2,
            name: 'Kartika A',
            age: 23,
            skill: 'Vue',
        },
        {
            id: 3,
            name: 'Putri L',
            age: 22,
            skill: 'Angular',
        },
        {
            id: 1,
            name: 'Agung S',
            age: 24,
            skill: 'NodeJS',
        }
    ]
    
    const personList = persons.map(person => <Person person={person} />)
    
    return(
        <div>
            <p><b><i>List Rendering :</i></b></p>
            {personList}
        </div>
    )
}

export default NameList
