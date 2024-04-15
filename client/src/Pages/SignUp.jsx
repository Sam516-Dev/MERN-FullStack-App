import React, { useState } from "react";
import { Link } from "react-router-dom";



const SignUp = () => {

const [formData, setformData] = useState({});

const handleChange = (e) => {
  setformData({
    ...formData,
    [e.target.id]: e.target.value,
  });
};
console.log(formData)

const handleSubmit = async (e) =>{
  e.preventDefault()
  const res = await fetch("/api/auth/signup",{
    method: "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(formData)
  }
  )
  const data = await res.json()
  console.log(data)
}


  return (
    <div className="p-3 max-w-lg mx-auto bg-indigo-200 mt-9 rounded-md py-16 px-6">
      <h1 className="text-3xl text-center font-bold mb-8 text-indigo-950 ">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="username"
          className="text-indigo-950  outline-none font-medium border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="text-indigo-950  outline-none font-medium border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className=" text-indigo-950 outline-none font-medium border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-indigo-950 py-4 mt-6 rounded-md text-white font-bold text-base uppercase hover:bg-indigo-800">
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 justify-center mt-4">
        <p>Have an account ?</p>
        <Link to={"/signIn"}>
          <span className="text-indigo-600 font-semibold"> Sign In </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
