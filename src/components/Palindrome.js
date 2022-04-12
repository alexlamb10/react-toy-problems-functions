import React from 'react'

function Palindrome() {
  return (
    <div>
        <div className='puzzleBox palindromePB'>
            <h4>Palindrome</h4>
            <input type="text" className='inputLine' />
            <button className='confirmationButton'>Submit</button>
            <span className='resultsBox'></span>
        </div>
    </div>
  )
}

export default Palindrome