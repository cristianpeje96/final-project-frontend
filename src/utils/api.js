import { API_BASE_URL, CABINS_ENDPOINT } from "../utils/constants";
const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const fetchCabins = () => {
  return fetch(`${API_BASE_URL}${CABINS_ENDPOINT}`).then(handleResponse);
};
