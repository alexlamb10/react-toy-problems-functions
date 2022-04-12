import './App.css';
import EvenAndOdd from './components/EvenAndOdd';
import Sum from './components/Sum';
import FilterObject from './components/FilterObject';
import FilterString from './components/FilterString';
import Palindrome from './components/Palindrome';

function App() {
  return (
    <div>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </div>
  );
}

export default App;
