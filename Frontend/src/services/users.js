import axios from "axios";

const baseUrl = "http://localhost:3001/users";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((respone) => respone.data);
};

export default { getAll };
