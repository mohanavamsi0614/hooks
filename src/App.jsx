import { createContext, useState } from 'react'
import './App.css'
import Main from './Ma'
export const background=createContext()
function App() {
  const [state, setstate] = useState(false)
  return (
    <>
    <background.Provider value={state}>
      <button onClick={()=>{setstate(!state)}}>Toggle</button>
      <Main/>
      </background.Provider>
    </>
  )
}

export default App
