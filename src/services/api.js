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


const api = {
  postLogin,
  postSignUp,
  postAddIncome,
  postAddExpense
};

export default api;
