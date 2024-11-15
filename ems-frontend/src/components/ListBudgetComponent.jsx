import React, {useEffect, useState} from 'react'
import {deleteBudget, listBudgets} from "../services/BudgetService.js";
import {useNavigate} from "react-router-dom";

const ListBudgetComponent = () => {

    const [budgets, setBudgets] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getAllBudgets();
    }, []);

    function getAllBudgets() {
        listBudgets().then((response) => {
            setBudgets(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    function addNewBudget() {
        navigate('/addBudget')
    }

    function updateBudget(id) {
        navigate(`/updateBudget/${id}`)
    }

    function removeBudget(id) {
        console.log(id);

        deleteBudget(id).then((response) => {
            getAllBudgets();
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <h2> List of Budgets</h2>
            <br/> <br/>
            <button className={'btn btn-primary'} onClick={addNewBudget}
                    style={{marginLeft: '800px'}}>Add Budget
            </button>
            <br/> <br/>
            {/*<table className={'table table-striped table-bordered'}>*/}
                <table style={{margin: '0 auto', width: '60%'}} className={'table table-striped table-bordered'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th style={{width: '200px'}}>Name</th>
                        <th>Amount</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th style={{width: '100px'}}>Amount spent</th>
                        <th style={{width: '100px'}}>Remaining amount</th>
                        <th style={{width: '200px'}}>Actions</th>


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
                                    <td>
                                        <button className={'btn btn-info'} onClick={() => updateBudget(budget.id)}>Update
                                        </button>
                                        <button className={'btn btn-danger'} onClick={() => removeBudget(budget.id)}
                                                style={{marginLeft: '10px'}}>Delete
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
        </div>
    )
}
export default ListBudgetComponent
