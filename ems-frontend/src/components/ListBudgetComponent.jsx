import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";

const ListBudgetComponent = () => {
    const { auth } = useAuth(); // Access authentication context
    const [budgets, setBudgets] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if (auth) {
            // Fetch budgets for the logged-in user
            const fetchBudgets = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/budgets/user/${auth.userId}`, {
                        headers: {
                            Authorization: `Bearer ${auth.token}`, // Send token for authorization
                        },
                    });
                    setBudgets(response.data);
                } catch (err) {
                    setError("Failed to load budgets. Please try again.");
                }
            };

            fetchBudgets();
        }
    }, [auth]);

    if (!auth) {
        return <p>Please log in to view your budgets.</p>;
    }

    return (
        <div>
            <h2>Your Budgets</h2>
            {error && <p className="error">{error}</p>}
            {budgets.length > 0 ? (
                <ul>
                    {budgets.map((budget) => (
                        <li key={budget.id}>
                            {budget.name}: {budget.amount}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No budgets available.</p>
            )}
        </div>
    );
};

export default ListBudgetComponent;
