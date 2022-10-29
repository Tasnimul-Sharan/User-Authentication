import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firewbase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Authentication</a>
        </div>
        <div className="flex-none">
          <>
            {user ? (
              <button onClick={logOut} className="btn btn-active btn-ghost">
                Sign Out
              </button>
            ) : (
              <button className="btn">
                <Link to="/signin">Sign In</Link>
              </button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
