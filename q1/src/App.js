import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  const [cal, setCal] = useState('isPrime')
  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  const isFibonacci = num => {
    let fibSeq = [0, 1], i = 1, fibSeqL;
    for (i; i <= num; i = (fibSeq[fibSeqL - 1] + fibSeq[fibSeqL])) {
      fibSeq.push(i);
      fibSeqL = fibSeq.length - 1;
    }
    return fibSeq[fibSeqL] === num;
  }
  const calculate = () => {
    const v = parseInt(value)
    return cal === 'isPrime' ? `${isPrime(v)}` : `${isFibonacci(v)}`
  }
  return (
    <div className="App">
      <div className="col1">
        <input type="number" id="number" name="number" onChange={(e) => setValue(e.target.value)}/>
      </div>
      <div className="col2">
        <select name="calculation" id="calculation" onChange={e => setCal(e.target.value)}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="col3">
        {(value && cal) && <span>{calculate()}</span>}
      </div>
    </div>
  );
}

export default App;
