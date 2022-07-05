import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('')
  
  const fetchAdvice = async () => {
    const {data} = await axios.get('https://api.adviceslip.com/advice')
   setAdvice(data.slip.advice)
  }
  useEffect(() => {
    fetchAdvice()
    console.log(advice);
  }, [])

  const handleChangeAdvice = () => {
    fetchAdvice()
  }

  return (
    <div className="app">
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={handleChangeAdvice}><span>Change advice</span></button>
      </div>
    </div>
  )
}

export default App
