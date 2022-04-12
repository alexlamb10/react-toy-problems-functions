import React, {useState} from 'react'

function Sum() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [sum, setSum] = useState(null)

  const add = () => {
    return setSum(+num1 + +num2)
  }
    
  return (
    <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={(e) => setNum1(+e.target.value)}/>
        <input className="inputLine" type="number" onChange={(e) => setNum2(+e.target.value)}/>
        <button className="confirmationButton" onClick={() => add()}>Submit</button>
        <span className="resultsBox">Sum: {sum}</span>
    </div>
  )
}

export default Sum