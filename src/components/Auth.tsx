import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { createNewUser, googleLogIn } from "../redux/actions";
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

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch<any>(createNewUser(newUser));
  };

  return (
    <div className="border-solid border-color rounded border-2 px-20 py-10">
      <div className="flex flex-col justify-around items-center">
        <h1 className="m-5 text-3xl font-bold">
          {create ? "Sign In" : "Log In"}
        </h1>
        {create ? (
          <form
            className="flex flex-col justify-between items-center"
            onSubmit={handleOnSubmit}
          >
            <div>
              <input
                className="border p-2 rounded my-1"
                name="username"
                type="text"
                placeholder="User Name"
                value={newUser.username}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <input
                className="border p-2 rounded my-1"
                name="email"
                type="text"
                placeholder="Email"
                value={newUser.email}
                onChange={handleOnChange}
              />
            </div>
            <button className="bg-emerald-400 rounded my-1 w-full p-2 mb-2 hover:bg-opacity-80 transition-all">
              Create Account
            </button>
          </form>
        ) : (
          <div className="my-5">
            <GoogleLogin
              onSuccess={(res) => dispatch<any>(googleLogIn(res))}
              onError={() => console.log("Error")}
              text="continue_with"
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
