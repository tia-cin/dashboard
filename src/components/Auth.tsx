import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLogIn } from "../redux/actions";
import { UserType } from "../types";

const Auth = () => {
  const dispatch = useDispatch();
  const [create, setCreate] = React.useState(false);
  const [newUser, setNewUser] = React.useState<UserType>({
    picture:
      "https://imgs.search.brave.com/ELqj37EvToQpTiGBQLm7jGj9y401mMGdlnrpxAtFJJg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2Z1bGwvMTI4/LTEyODA0MDZfdXNl/ci1pY29uLXBuZy5w/bmc",
    username: "",
    type: "account",
    email: "",
  });

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <div className="border-solid border-color rounded border-2 px-20 py-10">
      <div className="flex flex-col justify-around items-center">
        <h1 className="m-5 text-3xl font-bold">
          {create ? "Sign In" : "Log In"}
        </h1>
        {create ? (
          <form>
            <div>
              <input
                name="username"
                type="text"
                placeholder="User Name"
                value={newUser.username}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={newUser.email}
                onChange={handleOnChange}
              />
            </div>
          </form>
        ) : (
          <div className="my-5">
            <GoogleLogin
              onSuccess={(res) => dispatch<any>(googleLogIn(res))}
              onError={() => console.log("Error")}
              text="signin_with"
            />
          </div>
        )}
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
