import React, {useState} from 'react'

function Sum() {
    
  return (


    <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number"/>
        <input className="inputLine" type="number"/>
        <button className="confirmationButton" >Submit</button>
        <span className="resultsBox"></span>
    </div>
  )
}

export default Sum