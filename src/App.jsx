import './App.css'
import {useState} from 'react';


function App() {

  const [minNum, setMinNum] = useState("0")
  const [maxNum, setMaxNum] = useState("0")
  const [sum, setSum] = useState(null)

  function handleSum() {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + parseInt(minNum);
    setSum(randomNumber);
  }

  return (
      <div className='container'>
          <h1 style={{margin: '0', color: 'white', paddingTop: '20px'}}>Random Number Generator</h1>

          <div className='rnd-number-generator-container'> 
              <div className='min-number'>
                  <label>Min</label>
                  <input placeholder='Min Number' value={minNum} onChange={e => setMinNum(e.target.value)}></input>
              </div>

              <div className='max-number'>
                <label>Max</label>
                <input placeholder='Max Number' value={maxNum} onChange={e => setMaxNum(e.target.value)}></input>
              </div>

              <div className='result'>
                <label>Result:</label>
                <span className='result-container' value={sum}>{sum}</span>
              </div>

              <button className='generate-button' onClick={handleSum}>Generate Random Number</button>
          </div>
      </div>
  )
}

export default App
