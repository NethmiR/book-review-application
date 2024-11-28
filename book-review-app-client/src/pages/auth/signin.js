import React, { useState, useEffect } from "react";
import Link from "next/link";
import TextBox from "@/components/TextBox";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import Toast from "@/components/Toast";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { loginUser } from "@/services/userService";
import { useUser } from "@/contexts/userContext";
import { login } from "@/services/authService";

const Signin = () => {
  const [loading, setLoading] = useState(false);

  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("book-token");
  }, []);

  const handleSignIn = async () => {
    if (email === "") {
      toast.warning("Please enter your email.");
      return;
    }
    if (password === "") {
      toast.warning("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const response = await login({ email, password });
      localStorage.setItem("book-token", response.token);
      setUser(response.user);
      toast.success("Login successful.");
      router.push("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials and try again.");
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
          Administration Portal
        </h1>
        <div className="w-full">
          <TextBox
            caption="Email"
            value={email}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e)}
          />
          <TextBox
            caption="Password"
            value={password}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e)}
            componentClassName={"mt-4"}
          />
          <div className="flex flex-col items-center justify-center mt-4">
            <Button caption="SIGN IN" onClick={handleSignIn} />
            <Link href="/auth/forgotpassword">
              <div className="mb-4 mt-2 text-black text-sm hover:text-light-green duration-300 transition-all ease-in-out cursor-pointer">
                Forgot Password?
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

export default Signin;