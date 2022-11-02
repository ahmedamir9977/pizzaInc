import axios from "axios";

const instance = axios.create({
  baseURL: "https://pizzainc-17039-default-rtdb.firebaseio.com",
});

export default instance;
