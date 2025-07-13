import { useState } from "react";
import { axiosInstance } from "../helper/axiosinstance";
import axios from "axios"
import { SignUp, API_BASE_URL } from "../helper/url_helper";

const INITIAL_DATA = {
  email: "",
  firstname: "",
  lastname: "",
  middlename: "",
  phone: "",
  password: "",
};

function SignUpComponent() {
  const [data, setData] = useState(INITIAL_DATA);
  const [photo, setPhoto] = useState(null);
  const create_user = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("middlename", data.middlename);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("photo", photo);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    const response = await axios.post(API_BASE_URL + SignUp, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
  };

  return (
    <>
      <form action="" onSubmit={create_user}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={data.firstname}
          onChange={(e) => setData({ ...data, firstname: e.target.value })}
          required
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={data.lastname}
          onChange={(e) => setData({ ...data, lastname: e.target.value })}
          required
        />
        <label htmlFor="middlename">Middle Name</label>
        <input
          type="text"
          placeholder="Middle Name"
          name="middlename"
          value={data.middlename}
          onChange={(e) => setData({ ...data, middlename: e.target.value })}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
        <label htmlFor="phono">Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          pattern="[0-9]{10}"
          required
        />
        <label htmlFor="Photo">Your Photo</label>
        <input
          type="file"
          placeholder="Choose your photo"
          name="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
          accept="image/*"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignUpComponent;
