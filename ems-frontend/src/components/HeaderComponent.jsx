import React from 'react'
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(null); // Clear authentication state
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className={"header-parent"}>
            <header className={"main-header"}>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className={"navbar-brand"} href="/">Budget Tracker</a>
                    <ul className="navbar-nav">
                        {auth ? (
                            <>
                                <li><a className="nav-link" href="/budgets">Budgets</a></li>
                                <li><a className="nav-link" href="/expenses">Expenses</a></li>
                                <li><button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button></li>
                            </>
                        ) : (
                            <li><a className="nav-link" href="/login">Login</a></li>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default HeaderComponent;