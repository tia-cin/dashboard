import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLogIn } from "../redux/actions";

const Auth = () => {
  const dispatch = useDispatch();
  const [create, setCreate] = React.useState(false);
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
      <div className="flex flex-col justify-around items-center text-sm">
        <p>
          {create ? "You're an user already?" : "New here?"}
          <span
            className="text-blue-400 cursor-pointer mx-2"
            onClick={() => setCreate(!create)}
          >
            {create ? "Log in" : "Create one now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
