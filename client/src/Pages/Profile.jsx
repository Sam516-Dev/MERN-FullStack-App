import React from "react";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" mx-auto max-w-lg mt-8 bg-indigo-100 p-8 border border-indigo-300 rounded-md">
      <h2 className=" text-slate-700 font-bold text-3xl text-center ">
        Profile
      </h2>
      <div className="flex items-center justify-center mt-6 ">
        <img
          className="h-28 w-28 object-cover rounded-full border-4 border-indigo-200"
          src={currentUser.photo}
          alt="User Photo"
        />
      </div>

      <form className="flex flex-col mt-6  gap-4">
        <input
          className="p-3  py-4 outline-none rounded-md"
          type="text"
          placeholder="username..."
          id="username"
        />
        <div className="relative">
          <input
            className="p-3 bg-white w-full py-4 outline-none rounded-md"
            type="email"
            placeholder="email..."
            id="email"
          />
          <MdOutlineMail className="absolute top-1/2 right-7 h-7 w-8 transform -translate-y-1/2 text-slate-400" />
        </div>

        <div className="relative">
          <input
            className="p-3 border-white w-full py-4 outline-none rounded-md"
            type="password"
            placeholder="password..."
            id="email"
          />
          <MdLockOutline className="absolute top-1/2 right-7 h-7 w-8 transform -translate-y-1/2 text-slate-400" />
        </div>
        <button className="p-3 py-4 text-white mt-6 rounded-md bg-slate-600 uppercase hover:opacity-90">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <button className="text-red-800 font-semibold text-lg">
          Delete Account
        </button>
        <button className="flex gap-2 items-center ">
          <span className="text-red-800 font-semibold text-lg">Sign Out</span>
          <MdLogout className="h-5 text-slate-800" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
