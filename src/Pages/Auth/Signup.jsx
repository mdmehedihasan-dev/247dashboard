import React from "react";
import brandLogo from "../../assets/image/signuplogo.png";
import { BsGoogle } from "react-icons/bs";
import imageVideo from "../../assets/image/imageVideo.png";
const Signup = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <div className="flex justify-between">
        {/*============= left side ================= */}
        <div className="w-1/2">
          {/* Logo and Title Section */}
          <div>
            <img src={brandLogo} alt="" />
          </div>
          {/* Main Content Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold">Welcome to 247WEB.AI</h2>
            <p className="text-lg mt-2 text-[#327CFE] opacity-90">
              Welcome to 247WEB.AI
            </p>
          </div>
          {/* Signup Form */}
          <div className="w-full max-w-md bg-black bg-opacity-60 p-8 rounded-xl shadow-lg">
            <button className="w-full space-x-2.5 mb-4 py-4 text-white bg-[#327CFE] opacity-70 rounded-full flex items-center justify-center bg-cover bg-center">
              <BsGoogle />
              <span>Join with Google</span>
            </button>
            <div className="text-center mb-4">
              <span className="text-sm">or</span>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 bg-gray-800 rounded-xl text-white"
            />
            <button className="w-full py-3 bg-[#327CFE] rounded-full text-white ">
              Continue with email
            </button>
            <div className="mt-4 text-center">
              <span className="text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-blue-400">
                  Sign up
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* ==================Video Section ===================*/}
        <div className="flex w-1/2 flex-col items-center justify-center">
          <h1 className="leading-8 px-20 text-center font-bold text-3xl">
            CREATE VIRAL VIDEO IN MINUTES
          </h1>
          <p className="text-[#327CFE] text-xl opacity-70">
            The only video tool you’ll ever need
          </p>
          <img className="mt-10" src={imageVideo} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
