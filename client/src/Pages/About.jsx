import React from "react";
import { signsuccess } from "../Redux/user/userSlice";

const About = () => {
  return (
    <div>
      {signsuccess ? (
        <>
          <p>testing somethhing</p>
          <p>{signsuccess.user} </p>
        </>
      ) : (
        <p className=" bg-red-500"> Testing the About! </p>
      )}
    </div>
  );
};

export default About;
