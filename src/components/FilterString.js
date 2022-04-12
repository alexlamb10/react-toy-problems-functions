import React, {useState} from 'react'

function FilterString() {
    const [names, setNames] = useState([ "James", "Jessica", "Melody",
     "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ])
    const [userInput, setUserInput] = useState('')
    const [filteredNames, setFilteredNames] = useState([])

    const filterNames = (props) => {
        let newList = names.filter(i => i.includes(props))
        setFilteredNames(newList)
    }

  return (
    <div>
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>Names: {JSON.stringify(names)}</span>
            <input type="text" className='inputLine' onChange={(e) => setUserInput(e.target.value)}/>
            <button className='confirmationButton' onClick={() => filterNames(userInput)}>Submit</button>
            <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(filteredNames)}</span>
        </div>
    </div>
  )
}

export default FilterString