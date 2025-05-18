import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";
import { MdEmail } from "react-icons/md";

export default function SignUp() {
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
  });
  const [hidden, setHidden] = useState(true);

  function handleChange(event) {
    setFormData((prevFormData) => {
        return{
            ...prevFormData
        }
    });
  }
  function handleClick() {
    setHidden(!hidden);
  }
  return (
    <>
      <div className="flex h-75 justify-center items-center bg-white rounded-2xl gap-3 pr-4 font-montserrat w-auto ">
        <div className="flex flex-col justify-center items-center rounded-tr-[64px]  rounded-br-[42px] rounded-bl-2xl rounded-tl-2xl bg-gradient-to-r from-[#5c6bc0] to-[#512da8] h-75 w-auto p-1 text-white">
          <h1 className="text-2xl text-center mb-5 font-black">
            Nice to meet You!
          </h1>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-[12px]">Have an account?</p>
            <p className="text-[12px] text-center">
              Login with your personal data now
            </p>
            <Link
              className="border-solid border-1 px-5 py-0.5 mt-2  text-center rounded-md active:scale-90"
              to={"/sign-in"}
            >
              Sing In
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-black mb-5 ">Create Account</h1>
          <div className="flex flex-col justify-center items-center gap-2 mt-4 mb-3">
            <div className="flex justify-center items-center gap-1 bg-gray-200 p-1 rounded-md">
              <input
                className="border-0 outline-0 w-60"
                type="text"
                name="login"
                placeholder="Login"
                onChange={handleChange}
              />
              <FaUser />
            </div>
            <div className="flex justify-center items-center gap-1 bg-gray-200 p-1 rounded-md">
              <input
                className="border-0 outline-0 w-60"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <MdEmail />
            </div>
            <div className="flex justify-center items-center gap-1 bg-gray-200 p-1  rounded-md">
              <input
                className="border-0 outline-0 w-60"
                type={hidden ? "password" : "text"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {hidden ? (
                <FaEye onClick={handleClick} />
              ) : (
                <FaEyeSlash onClick={handleClick} />
              )}
            </div>
          </div>
          <button type="submit" className="border-solid border-1 bg-[#512da8] rounded-md mt-3 text-white h-7.5 w-1/2 font-medium text-[12px] active:scale-90 transition-transform">
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}
