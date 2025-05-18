import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SignIn() {
  const [hidden, setHidden] = useState(true);
  function handleClick() {
    setHidden(!hidden);
  }
  return (
    <>
      <div className="flex h-75 justify-center items-center bg-white rounded-2xl gap-3 pl-4 font-montserrat w-auto ">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-black mb-5 ">Sign In</h1>
          <div className="flex flex-col justify-center items-center gap-2 mt-4 mb-3">
            <div className="flex justify-center items-center gap-1 bg-gray-200 p-1 rounded-md">
              <input
                className="border-0 outline-0 w-60"
                type="text"
                placeholder="Login"
              />
              <FaUser />
            </div>
            <div className="flex justify-center items-center gap-1 bg-gray-200 p-1  rounded-md">
              <input
                className="border-0 outline-0 w-60"
                type={hidden ? "password" : "text"}
                placeholder="Password"
              />
              {hidden ? (
                <FaEye onClick={handleClick} />
              ) : (
                <FaEyeSlash onClick={handleClick} />
              )}
            </div>
          </div>
          <a className="text-[12px] text-[#333]" href="*">
            Forgot Password?
          </a>
          <button className="border-solid border-1 bg-[#512da8] rounded-md mt-3 text-white h-7.5 w-1/2 font-medium text-[12px] active:scale-90 transition-transform">
            SIGN IN
          </button>
        </div>
        <div className="flex flex-col justify-center items-center rounded-tl-[64px]  rounded-bl-[42px] rounded-tr-2xl rounded-br-2xl bg-gradient-to-r from-[#5c6bc0] to-[#512da8] h-75 w-auto p-1 text-white">
          <h1 className="text-2xl text-center mb-5 font-black">Welcome Back!</h1>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-[12px]">Don't have an account?</p>
            <p className="text-[12px] text-center">Register with your personal data now</p>
            <Link
              className="border-solid border-1 px-5 py-0.5 mt-2  text-center rounded-md active:scale-90"
              to={"/sign-up"}
            >
              Sing Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
