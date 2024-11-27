import { useState } from 'react'
import './App.css'
import ListBudgetComponent from "./components/ListBudgetComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BudgetComponent from "./components/BudgetComponent.jsx";
import { useAuth } from './context/AuthContext.jsx';
import LoginComponent from "./components/LoginComponent.jsx";

function App() {
    const { auth } = useAuth(); // Get auth state from context
    //const [count, setCount] = useState(0)

    return (
    <>
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                {/*// http://localhost:3000*/}
                <Route path={'/'} element={<ListBudgetComponent />}></Route>

                {/*// http://localhost:3000/budgets*/}
                <Route path={'/budgets'} element={<ListBudgetComponent />}></Route>

                {/*// http://localhost:3000/addBudget*/}
                <Route path={'/addBudget'} element={<BudgetComponent />}></Route>

                {/*// http://localhost:3000/updateBudget*/}
                <Route path={'/updateBudget/:id'} element={<BudgetComponent />}></Route>

                {/*// http://localhost:3000/deleteBudget*/}
                <Route path={'/deleteBudget/:id'} element={<ListBudgetComponent />}></Route>

                <Route path="/login" element={<LoginComponent />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
