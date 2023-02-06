import axios from "axios";

// export default axios.create({
//   baseUrl: "https://fakestoreapi.com/",
// });

export default axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});
