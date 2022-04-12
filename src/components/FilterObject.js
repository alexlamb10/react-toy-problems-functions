import React, {useState} from 'react'

function FilterObject() {
    const [people, setPeople] = useState( [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 },
     { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
      { "name": "Carly Armstrong", "title": "CEO" } ])
    const [userInput, setUserInput] = useState('')
    const [filteredNames, setFilteredNames] = useState([])

    const filterNames = (props) => {
        let newNames = people.filter(i => i.hasOwnProperty(props))
        setFilteredNames(newNames)
    }

  return (
    <div>
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Original: {JSON.stringify(people)}</span>
            <input type="text" className='inputLine' onChange={(e) => setUserInput(e.target.value)}/>
            <button className='confirmationButton' onClick={() => filterNames(userInput)}>Submit</button>
            <span className='resultsBox filterObjectRB'>Filtered Names: {JSON.stringify(filteredNames)}</span>
        </div>
    </div>
  )
}

export default FilterObject