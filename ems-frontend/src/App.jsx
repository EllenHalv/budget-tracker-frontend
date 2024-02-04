import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListBudgetComponent from "./components/ListBudgetComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HeaderComponent />
        <ListBudgetComponent />

    </>
  )
}

export default App
