import React, {useState} from 'react'

function Palindrome() {
    const [userInput, setUserInput] = useState('')
    const [palindrome, setPalindrome] = useState('')

    const checkForPalindrome = (props) => {
        let stringArray = props.split('')
        let reverse = stringArray.reverse().join('')
        
        let pal = reverse === userInput ? 'True' : 'False'
        setPalindrome(pal)

    }

  return (
    <div>
        <div className='puzzleBox palindromePB'>
            <h4>Palindrome</h4>
            <input type="text" className='inputLine' onChange={(e) => setUserInput(e.target.value)}/>
            <button className='confirmationButton' onClick={() => checkForPalindrome(userInput)}>Submit</button>
            <span className='resultsBox'>Palindrome? {palindrome}</span>
        </div>
    </div>
  )
}

export default Palindrome