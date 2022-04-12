import React from 'react'

function FilterString() {
  return (
    <div>
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'></span>
            <input type="text" className='inputLine' />
            <button className='confirmationButton'>Submit</button>
            <span className='resultsBox filterStringRB'></span>
        </div>
    </div>
  )
}

export default FilterString