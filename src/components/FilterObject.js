import React, {useState} from 'react'

function FilterObject() {
  return (
    <div>
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'></span>
            <input type="text" className='inputLine'/>
            <button className='confirmationButton'>Submit</button>
            <span className='resultsBox filterObjectRB'></span>
        </div>
    </div>
  )
}

export default FilterObject