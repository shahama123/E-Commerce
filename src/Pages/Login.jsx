import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const Login = () => {
  const {navigate} = useContext(ShopContext)
  const [currentState, setCurrentState] = useState("Signup");
  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler()} className="flex flex-col items-center pb-20">
      <div className="flex justify-center mt-20 gap-2 items-center ">
        <h1 className="text-3xl prata-regular text-gray-800">{currentState}</h1>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <div className="flex flex-col space-y-5 mt-10 w-96">
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            className="border border-gray-800 px-3 py-2"
            type="text"
            placeholder="Name"
            required
          />
        )}
        <input
          className="border border-gray-800 px-3 py-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="border border-gray-800 px-3 py-2"
          type="password"
          placeholder="Password"
          required
        />
      </div>

      <div className="flex justify-between gap-36 text-sm text-gray-700 mt-3 ">
        <p>Forgot your password?</p>
        {currentState === "Login" ? (
          <p
          className="cursor-pointer" 
          onClick={() => setCurrentState("Sign Up")}>Create Account</p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <div className="mt-5">
        {
          currentState === 'Login' ? <button onClick={()=>navigate('/')} className="bg-black  text-white px-8 py-2">Login</button> : <button onClick={()=>navigate('/')} className="bg-black  text-white px-8 py-2">Sign Up</button>


        }
      </div>
    </form>
  );
};

export default Login;
