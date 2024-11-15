import React from 'react'

const HeaderComponent = () => {
    return (
        <div className={"header-parent"}>
            <header className={"main-header"}>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className={"navbar-brand"} href="http://localhost:3000">Budget Tracker</a>
                    <ul className="navbar-nav">
                        <li><a className="nav-link" href="/budgets">Budgets</a></li>
                        <li><a className="nav-link" href="/expenses">Expenses</a></li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}
export default HeaderComponent
