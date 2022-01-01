import axios from "axios";
import * as constants from "./Urls";

export const getAllUsers = () => {
 return axios.get(constants.baseURL);
};

export const Status = (updatedStatus, userId) => {
  const userData = { status: updatedStatus };
  return axios.put(`http://localhost:3001/updateStatus/${userId}.json`, userData, {
    headers: constants.headers,
  });
};

export const addNewUser = (firstName, lastName) => {
  const userData = {
    first_name: firstName,
    last_name: lastName,
    status: constants.statuses.ACTIVE,
  };
  return axios.post(`http://localhost:3001/new`, userData);
};

export const editUser = (firstName, lastName, userId) => {
  const userData = {
    first_name: firstName,
    last_name: lastName,
  };
  return axios.put(`http://localhost:3001/edit/${userId}`, userData, {
    headers: constants.headers,
  });
};

export const getUserById = (userId) => {
  return axios.get(`http://localhost:3001/getuser/${userId}`, {
    headers: constants.headers,
  });
};
