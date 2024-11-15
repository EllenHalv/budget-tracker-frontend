import React, {useEffect, useState} from 'react'
import {createBudget, getBudgetById, updateBudget} from "../services/BudgetService.js";
import {useNavigate, useParams} from "react-router-dom";

const BudgetComponent = () => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const {id} = useParams();
    const [errors, setErrors] = useState({
        name: '',
        amount: '',
        startDate: '',
        endDate: ''
    })

    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getBudgetById(id).then((response) => {
                setName(response.data.name);
                setAmount(response.data.amount);
                setStartDate(response.data.startDate);
                setEndDate(response.data.endDate);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])


    function saveOrUpdateBudget(Event) {
        Event.preventDefault()

        if(validateForm()){

            //const budget = {name: name, amount: amount, startDate: startDate, endDate: endDate}
            const budget = {name, amount, startDate, endDate}
            console.log('Budget => ' + JSON.stringify(budget))

            if(id) {
                updateBudget(id, budget).then((response) => {
                    console.log(response.data)
                    navigate('/budgets')
                }).catch((error) => {
                    console.error(error);
                })
            } else {
                createBudget(budget).then((response) => {
                    console.log('Budget added successfully')
                    navigate('/budgets')
                }).catch((error) => {
                    console.error('Error while adding Budget')
                })
            }
        }
    }

    //prints error message if the input is empty
    function validateForm(){
        let valid = true

        const errorsCopy = {...errors}

        if(name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'name is required';
            valid = false;
        }

        if(amount.trim()) {
            errorsCopy.amount = '';
        } else {
            errorsCopy.amount = 'amount is required';
            valid = false;
        }

        if(startDate.trim()) {
            errorsCopy.startDate = '';
        } else {
            errorsCopy.startDate = 'date is required';
            valid = false;
        }

        if(endDate.trim()) {
            errorsCopy.endDate = '';
        } else {
            errorsCopy.endDate = 'date is required';
            valid = false;
        }

        setErrors(errorsCopy)
        return valid
    }

    function pageTitle() {
        if(id) {
            return <h2 className={'text-center'}>Update Budget</h2>
        } else {
            return <h2 className={'text-center'}>Add Budget</h2>
        }
    }

    return (
        <div className={'container'}>
            <br/> <br/>
            <div className={'row'}>
                <div className={'card col-md-6 offset-md-3 offset-md-3'}>
                    {pageTitle()}
                    <div className={'card-body'}>
                        <form>
                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Name:</label>
                                <input
                                    type={'text'}
                                    placeholder={'Enter budget name'}
                                    name={'name'}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    value={name}
                                    onChange={(Event) => setName(Event.target.value)}
                                />
                                {errors.name && <div className={'invalid-feedback'}>{errors.name}</div>}
                            </div>

                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Amount:</label>
                                <input
                                    type={'number'}
                                    placeholder={'Enter budget amount'}
                                    name={'amount'}
                                    className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                                    value={amount}
                                    onChange={(Event) => setAmount(Event.target.value)}
                                />
                                {errors.amount && <div className={'invalid-feedback'}>{errors.amount}</div>}
                            </div>

                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Start Date:</label>
                                <input
                                    type={'date'}
                                    placeholder={'Enter start date'}
                                    name={'startDate'}
                                    className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                                    value={startDate}
                                    onChange={(Event) => setStartDate(Event.target.value)}
                                />
                                {errors.startDate && <div className={'invalid-feedback'}>{errors.startDate}</div>}
                            </div>

                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>End Date:</label>
                                <input
                                    type={'date'}
                                    placeholder={'Enter end date'}
                                    name={'endDate'}
                                    className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
                                    value={endDate}
                                    onChange={(Event) => setEndDate(Event.target.value)}
                                />
                                {errors.endDate && <div className={'invalid-feedback'}>{errors.endDate}</div>}
                            </div>
                            <button className={'btn btn-success'} onClick={saveOrUpdateBudget}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BudgetComponent
