import React from 'react';
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

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
                    <Link className={"navbar-brand"} to="/">Budget Tracker</Link>
                    <ul className="navbar-nav">
                        {auth ? (
                            <>
                                <li><Link className="nav-link" to="/budgets">Budgets</Link></li>
                                <li><Link className="nav-link" to="/expenses">Expenses</Link></li>
                                <li><button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button></li>
                            </>
                        ) : (
                            <li><Link className="nav-link" to="/login">Login</Link></li>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;