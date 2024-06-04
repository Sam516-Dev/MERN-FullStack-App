import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loader from "../SubComponents/Loader";

const SignUp = () => {
  const [formData, setformData] = useState({});
  const [myerror, setmyError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setmyError(data.message);
        setLoading(false);
        return;
      } else {
        setmyError(null);
        setLoading(false);
        navigate("/signIn");
      }
    } catch (error) {
      setmyError(data.message);
      setLoading(false);
    }
  };

  // console.log("error is", error)

  return (
    <div className="p-3 max-w-lg mx-auto bg-indigo-200 mt-9 rounded-md py-4 px-6">
      <h1 className="text-3xl text-center font-bold mb-8 text-indigo-950 ">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">   
        <input
          type="text"
          placeholder="enter username"
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
        <button
          disabled={loading}
          className="bg-indigo-950 py-4 mt-6 disabled:opacity-50 rounded-md text-white font-bold text-base uppercase hover:bg-indigo-800"
        >
          {loading ? (
            <div className="flex gap-4 items-center justify-center">
              <label className="lowercase">Loading... </label>
              <Loader />
            </div>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      <div className="flex gap-3 justify-center mt-4">
        <p>Have an account ?</p>
        <Link to={"/signIn"}>
          <span className="text-indigo-600 font-semibold"> Sign In </span>
        </Link>
      </div>
      <div>
     
        {myerror && (
          <p className="text-red-500 text-center bg-white p-2 mt-3 rounded-sm font-semibold">
            {myerror}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
