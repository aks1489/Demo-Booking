import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import Booking from './components/Booking'

export interface Theme {
  theme : boolean;
}

function App() {
  const [appTheme] = useState<Theme>({
    theme: true
  })

  return (
      <ThemeContext.Provider value={appTheme} >
        <Booking />
      </ThemeContext.Provider>
  )
}

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { useState } from 'react'
import { ThemeContext } from './Context.js';
export default App
