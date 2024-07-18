import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  //console.log("Current User after useSelecting😂:", currentUser.photo);

  return (
    <header className=" bg-indigo-200 ">
      <div className="max-w-6xl p-3 py-4 flex justify-between items-center mx-auto">
        <Link to="/">
          <h2 className="text-xl text-slate-700 font-bold">SammY</h2>
        </Link>
        <form className="flex items-center relative">
          <input
            type="text"
            placeholder="Search ..."
            className="p-3 w-24 sm:w-64 focus:outline-none rounded-md font-semibold bg-indigo-50"
          />
          <FaSearch className="absolute right-4 text-slate-600" />
        </form>

        <ul className="flex gap-5">
          <Link to="/">
            <li className="hover:underline  ">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:underline  ">About</li>
          </Link>

          {currentUser ? (
            <Link to="/profile">
              <img
                className=" h-8 w-8 rounded-full object-cover"
                src={currentUser.photo}
                alt="icon"
              />
            </Link>
          ) : (
            <Link to="/signIn">
              <li className="hover:underline  ">SignIn</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

//<Link to="/signIn">
//<li className="hover:underline  ">SignIn</li>
//</Link>
