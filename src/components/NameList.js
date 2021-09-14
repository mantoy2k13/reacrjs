import React from 'react'
import Person from './Person'
function NameList() {
  
    const names = ['Bruce', 'Clark', 'Diana', 'John']
    const personList = names.map(name => <h2> {name}</h2> ) 
    return (
        <div>{nameList}</div>
    )
}

export default NameList
