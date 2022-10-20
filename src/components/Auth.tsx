import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLogIn } from "../redux/actions";

const Auth = () => {
  const dispatch = useDispatch();
  return (
    <div className="border-solid border-color rounded border-2 px-20 py-10">
      <div className="flex flex-col justify-around items-center">
        <h1 className="m-5 text-3xl font-bold">Log In</h1>
        <div className="my-5">
          <GoogleLogin
            onSuccess={(res) => dispatch<any>(googleLogIn(res))}
            onError={() => console.log("Error")}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
