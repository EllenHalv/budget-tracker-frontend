import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/budgets";

export const listBudgets = () => axios.get(REST_API_BASE_URL);

export const createBudget = (budget) => axios.post(REST_API_BASE_URL, budget);

export const getBudgetById = (budgetId) => axios.get(REST_API_BASE_URL + '/' + budgetId);
export const updateBudget = (budgetId, yarn) => axios.put(REST_API_BASE_URL + '/' + budgetId, yarn);

export const deleteBudget = (budgetId) => axios.delete(REST_API_BASE_URL + '/' + budgetId);