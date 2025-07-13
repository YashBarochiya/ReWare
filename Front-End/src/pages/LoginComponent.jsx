import { useState } from "react";
import { axiosInstance } from "../helper/axiosinstance";
import { Login, API_BASE_URL } from "../helper/url_helper";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

function LoginComponent() {
  const [data, setData] = useState(INITIAL_VALUES);
  
  const post_data = (e) => {
    e.preventDefault();
    
    axiosInstance({ method: "post", url: API_BASE_URL + Login, payload: data });
    
    console.log("success")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={post_data}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label htmlFor="Email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            value={data.Email}
            placeholder="xyz@gmail.com"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.Password}
            placeholder="••••••••"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
