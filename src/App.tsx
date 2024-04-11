import { useState } from 'react'
import { ThemeContext } from './Context.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Booking from './components/Booking'

export interface Theme {
  theme : boolean;
}

function App() {
  const [appTheme, setAppTheme] = useState<Theme>({
    theme: true
  })

  const toggleTheme = () => {
    setAppTheme( prv => {
      return {
        theme : !prv.theme
      } 
    })
  }

  return (
      <ThemeContext.Provider value={appTheme} >
        <Booking setTheme={toggleTheme}/>
      </ThemeContext.Provider>
  )
}

export default App
