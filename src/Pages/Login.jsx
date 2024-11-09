import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { navigate, token, backendUrl, setToken } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log("Registration response:", response.data); 

  
        // Handling registration response
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Registration successful");
        } else {
          toast.error(response.data.message); // Show error message (e.g., "User already exists")
        }


      } else if (currentState === "Login") {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        console.log("Login response:", response.data); // Optionally log login response here
  
        // Handling login response
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful");
        } else {
          toast.error(response.data.message); // Show error message (e.g., "Invalid credentials" or "User does not exist")
        }
      }


    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };
  
  

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token, navigate])

 
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center md:pb-10 pb-0  "
    >
      <div className="flex justify-center mt-20 gap-2 items-center ">
        <h1 className="md:text-3xl text-xl prata-regular text-gray-800">{currentState}</h1>
        <hr className="border-none h-[1.5px] md:w-8  w-5 bg-gray-800" />
      </div>
      <div className="flex flex-col space-y-5 mt-10  md:w-96 w-60 ">
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            className="border border-gray-800 px-3 py-2 rounded"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          className="border border-gray-800 px-3 py-2 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border border-gray-800 px-3 py-2 rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>

      <div  className="flex justify-between w-full sm:w-96 text-gray-700 mt-3 md:px-0 px-10 ">
        <p className=" md:text-sm text-xs">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            className="md:text-sm text-xs cursor-pointer"
            onClick={() => setCurrentState("Sign up")}
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="md:text-sm text-xs cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <div className="mt-10">
        {currentState === "Login" ? (
          <button  type="submit" className="bg-black  text-white px-8 py-2 rounded">
            Login
          </button>
        ) : (
          <button type="submit"  className="bg-black  text-white px-8 py-2 rounded">
            
            Sign Up
          </button>
        )}
      </div>
    </form>
  );
};

export default Login;
