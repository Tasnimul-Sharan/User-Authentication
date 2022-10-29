import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firewbase.init";
import useToken from "../../Hooks/useToken";
import swal from "sweetalert";
import google from "../../images/google.png";
import facebook from "../../images/Facebook_f_logo_(2021).svg.webp";

const SignIn = () => {
  const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, floading, fError] =
    useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  const [token] = useToken(user);

  //   const navigate = useNavigate();

  //   let location = useLocation();
  //   const from = location.state?.from?.pathName || "/";

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    swal("Email Sent!", "Please check your email!", "success");
  };

  //   useEffect(() => {
  //     if (token) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [token, from, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex justify-center items-center">
      <div class="card w-96 bg-base-100 border-0 pb-5">
        <div class="card-body"></div>
        <h1 className="text-3xl font-bold text-justify m-14 text-success">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs m-5 ">
            <input
              className="input input-bordered rounded-full max-w-xs"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs m-5">
            <input
              className="input input-bordered rounded-full max-w-xs"
              type="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs m-5">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Remember me</span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs m-5">
            <input
              className=" btn btn-success w-full max-w-xs"
              type="submit"
              value="Sign In"
            />
            <p>
              <button
                onClick={resetPassword}
                className="btn btn-link no-underline text-black"
              >
                forget password?
              </button>
            </p>
          </div>
        </form>
        <div className="divider w-full max-w-xs mx-5">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-neutral w-full max-w-xs m-1 mx-5"
        >
          <img className="mx-5" src={google} alt="" />
          Continue With Google
        </button>

        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-neutral w-full max-w-xs m-1 mx-5"
        >
          <img className="w-10 mx-5" src={facebook} alt="" />
          Continue With Facebook
        </button>
        <p className="text-slate-800 my-12">
          Don't have any account?{" "}
          <Link className="text-blue-700" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
