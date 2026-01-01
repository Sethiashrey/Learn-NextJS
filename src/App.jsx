import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';

function App() {

  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4">Shrey Sethia</h1>
      <p>Interesting person</p>
      Happy new Year 2026!
      <p>Wishing you and your family the best year ahead!</p>
      <Card name="Shrey Sethia" desc="Submit" />
      <Card />
      <Card />
    </>
  )
}

export default App
