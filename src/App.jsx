import React from 'react';
import { HashRouter } from 'react-router-dom'
import Router from './routes/'
import './App.css'

function App() {

  return (
    <div>
     <HashRouter>
        <Router />
     </HashRouter>
    </div>
  )
}

export default App
