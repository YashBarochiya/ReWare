import axios from "axios"

export const axiosInstance=({method = "get", url, payload = {}, config = {}})=>{
  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url, config);
    case "post":
      return axios.post(url, payload, config);
    case "put":
      return axios.put(url, payload, config);
    case "delete":
      return axios.delete(url, config);
    case "patch":
      return axios.patch(url, payload, config);
    default:
      throw new Error(`Unsupported HTTP method: ${method}`);
  }
}