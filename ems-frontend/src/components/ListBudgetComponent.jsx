import React, {useEffect, useState} from 'react'
import {listBudgets} from "../services/BudgetService.js";

const ListBudgetComponent = () => {

    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        listBudgets().then((response) => {
            setBudgets(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, []);

    return (
        <div>
            <h2> List of Budgets</h2>
            <table className={'table table-striped table-bordered'}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Amount spent</th>
                        <th>Remaining amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        budgets.map(
                            budget =>
                                <tr key={budget.id}>
                                    <td>{budget.id}</td>
                                    <td>{budget.name}</td>
                                    <td>{budget.amount}</td>
                                    <td>{budget.startDate}</td>
                                    <td>{budget.endDate}</td>
                                    <td>{budget.amountSpent}</td>
                                    <td>{budget.remainingAmount}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListBudgetComponent
