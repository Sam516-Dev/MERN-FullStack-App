import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signsuccess } from "../Redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();

  const handleGoogleSign = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log("this is the result", result.user);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signsuccess(data));
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSign}
      type="button"
      className="bg-red-800 hover:opacity-90 py-4 disabled:opacity-50 rounded-md text-white  font-bold text-base uppercase"
    >
      SIGN WITH GOOGLE
    </button>
  );
};

export default OAuth;
