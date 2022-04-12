import React, {useState} from 'react'

function EvenAndOdd() {
    const [userInput, setUserInput] = useState('')
    const [evenArray, setEvenArray] = useState([])
    const [oddArray, setOddArray] = useState([])
    
    function sortArray(props) {
        let numArray = props.split(',')
        let even = []
        let odd = []

        numArray.forEach(i => i % 2 === 0 ? even.push(+i) : odd.push(+i))

        setEvenArray(even)
        setOddArray(odd)
    }

  return (
    <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}/>
        <button className="confirmationButton" onClick={() => sortArray(userInput)}>Submit</button>
        <span className="resultsBox">Even: {JSON.stringify(evenArray)} </span>
        <span className="resultsBox">Odd: {JSON.stringify(oddArray)} </span>
    </div>
  )
}

export default EvenAndOdd