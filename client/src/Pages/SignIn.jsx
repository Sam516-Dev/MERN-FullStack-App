import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../SubComponents/Loader";
import { useDispatch, useSelector } from "react-redux";
import { signstart, signsuccess, signfailure } from "../Redux/user/userSlice";
import OAuth from "../Components/OAuth";

const SignIn = () => {
  const [formData, setformData] = useState({});
  //const [myerror, setmyError] = useState(null);  const [loading, setLoading] = useState(false);
  const { loading, error: myerror } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      dispatch(signstart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("this is data from post mthd: ", data);

      if (data.success === false) {
        dispatch(signfailure(data.message));
        return;
      } else {
        dispatch(
          signsuccess({ token: data.token, currentUser: data.currentUser })
        );
        navigate("/");
      }
    } catch (error) {
      dispatch(signfailure(error.message));
    }
  };

  // console.log("error is", error)

  return (
    <div className="p-3 max-w-lg mx-auto bg-indigo-200 mt-9 rounded-md py-4 px-6">
      <h1 className="text-3xl text-center font-bold mb-8 text-indigo-950 ">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
            "Sign In"
          )}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-3 justify-center mt-4">
        <p> Dont have an account ?</p>
        <Link to={"/signup"}>
          <span className="text-indigo-600 font-semibold"> Sign Up Here </span>
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

export default SignIn;

// import React from "react";

// const SignIn = () => {

//   return (
//     <div className="p-3 max-w-lg mx-auto bg-indigo-200 mt-9 rounded-md py-16 px-6">
//       <h1 className="text-3xl text-center font-bold mb-8 text-indigo-950 ">
//         Sign In
//       </h1>
//       <form className="flex flex-col gap-6">
//         <input
//           type="text"
//           placeholder="username"
//           className="text-indigo-950  outline-none font-medium border p-3 rounded-lg"
//           id="username"
//         />
//         <input
//           type="email"
//           placeholder="email"
//           className="text-indigo-950  outline-none font-medium border p-3 rounded-lg"
//           id="email"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           className=" text-indigo-950 outline-none font-medium border p-3 rounded-lg"
//           id="password"
//         />
//         <button className="bg-indigo-950 py-4 mt-6 rounded-md text-white font-bold text-base uppercase hover:bg-indigo-800">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
