import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firewbase.init";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(user);

  //   console.log(token, user);

  //   const navigate = useNavigate();

  //   let location = useLocation();
  //   const from = location.state?.from?.pathName || "/";

  //   useEffect(() => {
  //     if (token) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [token, from, navigate]);

  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("your passwords are did't match");
    }
    if (password.length < 6) {
      setError("password must be in six character or longer");
      return;
    }
    await createUserWithEmailAndPassword(email, password, confirmPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 border-0 pb-5">
        <div class="card-body"></div>
        <h1 className="text-3xl font-bold text-justify m-14 text-success">
          Create <br /> New Account{" "}
        </h1>
        <form onSubmit={handleCreateUser}>
          <div className="form-control w-full max-w-xs m-5">
            <input
              type="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered rounded-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs m-5">
            <input
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered rounded-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs m-5">
            <input
              type="Password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input input-bordered rounded-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs m-5">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text text-slate-800">
                I agree with Terms and condition
              </span>
            </label>
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <div className="form-control w-full max-w-xs m-5">
            <input
              className=" btn btn-success w-full max-w-xs"
              type="submit"
              value="Create Account"
            />
          </div>
        </form>
        <div className="divider w-full max-w-xs mx-5">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-neutral w-full max-w-xs m-1 mx-5"
        >
          Continue With Google
        </button>

        <button className="btn btn-neutral w-full max-w-xs m-1 mx-5">
          Continue With Facebook
        </button>
        <p className="text-slate-800 my-12">
          Already have an Account{" "}
          <Link className="text-blue-700" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
