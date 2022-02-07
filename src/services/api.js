import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);

  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function postAddIncome(body, token) {
  const promise = axios.post(`${BASE_URL}/add-income`, body, token);

  return promise;
}

function postAddExpense(body, token) {
  const promise = axios.post(`${BASE_URL}/add-expense`, body, token);

  return promise;
}

function getTransactions(token) {
  const promise = axios.get(`${BASE_URL}/get-transactions`, token);
  return promise;
}

function deleteTransaction(transactionId, token) {
  const promise = axios.delete(
    `${BASE_URL}/delete-transactions/${transactionId}`,
    token
  );
  return promise;
}

function editTransaction(transactionId, body, token) {
  const promise = axios.put(
    `${BASE_URL}/edit-transactions/${transactionId}`,
    body,
    token
  );
  return promise;
}

const api = {
  postLogin,
  postSignUp,
  postAddIncome,
  postAddExpense,
  getTransactions,
  deleteTransaction,
  editTransaction,
};

export default api;
