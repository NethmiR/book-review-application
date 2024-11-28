import React, { useState, useEffect } from "react";
import Link from "next/link";
import TextBox from "@/components/TextBox";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { forgotPassword } from "@/services/userService";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleForgotPassword = async () => {
    if (email === "") {
      toast.warning("Please enter your email.");
      return;
    }

    setLoading(true);

    try {

    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-opacity-10 bg-blur-3xl bg-gradient-to-r from-blue-500 to-blue-700
        flex items-center justify-center text-black"
      style={{ backgroundImage: `url('/img/banners/back.jpg')` }}
    >
      <div
        className="absolute w-screen h-screen bg-white bg-opacity-20 backdrop-blur-md"
        style={{ zIndex: 1 }}
      ></div>
      <div
        className="bg-white bg-opacity-50 rounded-xl p-4 sm:px-10 border border-gray-200 border-opacity-70 w-80 sm:w-96 h-[400px] flex flex-col items-center justify-center space-y-2"
        style={{ zIndex: 2 }}
      >
        <img
          src="/img/logo.png"
          alt="logo"
          className="w-20 h-20 mx-auto rounded-full"
        />
        <h1 className="text-lg font-large text-center text-black opacity-90 font-semibold">
          Password Reset
        </h1>
        <div className="w-full">
          <TextBox
            caption="Email"
            value={email}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e)}
          />
          <div className="flex flex-col items-center justify-center mt-4">
            <Button caption="SEND OTP" onClick={handleForgotPassword} />
            <Link href="/auth/signin">
              <div className="mb-4 mt-2 text-black text-sm hover:text-light-green duration-300 transition-all ease-in-out cursor-pointer">
                Sign In Instead
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Toast />
      <Spinner isVisible={loading} />
    </div>
  );
};

export default ForgotPassword;