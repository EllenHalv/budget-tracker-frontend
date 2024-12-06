import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../context/AuthContext";

const ListBudgetComponent = () => {
    const { auth } = useAuth(); // Get auth state (which includes the JWT)
    const [budgets, setBudgets] = useState([]);
    const [error, setError] = useState(null); // State for error handling

    // Log the budgets state whenever it changes
    useEffect(() => {
        console.log("Updated Budgets State:", budgets);
    }, [budgets]);  // Runs whenever the budgets state changes

    useEffect(() => {
        if (auth && auth.token) {
            // Make API request with JWT token in the Authorization header
            axios.get(`http://localhost:8080/api/budgets/user/${auth.userId}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            })
                .then((response) => {
                    console.log("API Response:", response.data); // Log the full API response

                    // Assuming the response contains the array of budgets directly in response.data
                    setBudgets(response.data);  // Set the state with the fetched budgets
                })
                .catch((error) => {
                    setError("Error fetching budgets: " + error.message);  // Set error state
                    console.error("Error fetching budgets:", error);
                });
        }
    }, [auth]); // This effect runs when `auth` changes

    return (
        <div>
            <h2>Budgets</h2>
            {error && <p className="error">{error}</p>}  {/* Display error if any */}
            {budgets.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Remaining Amount</th>
                        <th>Amount Spent</th>
                    </tr>
                    </thead>
                    <tbody>
                    {budgets.map((budget) => {
                        console.log("Rendering budget:", budget);  // Log the individual budget object
                        console.log("Rendering budget remaining amount:", budget.remainingAmount);  // Log the individual budget object

                        return (
                            <tr key={budget.id}>
                                <td>{budget.name}</td>
                                <td>{budget.amount}</td>
                                <td>{budget.startDate}</td>
                                <td>{budget.endDate}</td>
                                <td>{budget.remainingAmount}</td>
                                <td>{budget.amountSpent}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            ) : (
                <p>No budgets available.</p>
            )}
        </div>
    );
};

export default ListBudgetComponent;
