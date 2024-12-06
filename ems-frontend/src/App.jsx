import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ListBudgetComponent from "./components/ListBudgetComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import BudgetComponent from "./components/BudgetComponent.jsx";
import { useAuth } from './context/AuthContext.jsx';
import LoginComponent from "./components/LoginComponent.jsx";

function App() {
    const { auth } = useAuth(); // Get auth state from context

    console.log("Auth state:", auth);  // Debugging auth state

    return (
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                {/* Public routes */}
                <Route path="/login" element={auth ? <Navigate to="/" /> : <LoginComponent />} />

                {/* Protected routes */}
                {auth ? (
                    <>
                        <Route path="/" element={<ListBudgetComponent />} />
                        <Route path="/budgets" element={<ListBudgetComponent />} />
                        <Route path="/addBudget" element={<BudgetComponent />} />
                        <Route path="/updateBudget/:id" element={<BudgetComponent />} />
                        <Route path="/deleteBudget/:id" element={<ListBudgetComponent />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
