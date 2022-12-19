import axios from "axios";
//http://localhost:3000?api_key=3656457&a=hello&start=1&count=5
const instance = axios.create({
  baseURL: "http://localhost:3000",
  params: {
    api_key: 5000,
    a: "hello",
  },
});

export default instance;