import React from "react";
import { FaSignOutAlt, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import Footer from "@/components/Footer"; // Import the Footer component
import Link from "next/link";
import { useUser } from "@/contexts/userContext";
import Button from "./Button";

const VisitorLayout = ({ children }) => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col text-black bg-white">
      <header className="px-4 sm:px-28 md:px-32 lg:px-40 xl:px-60 flex items-center justify-between p-4 bg-green border-b border-gray-300">
        <div className="flex items-center">
          <img
            src={"/img/logo.png"}
            alt="ITW Digital Logo"
            className="h-12 rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-2xl text-white font-bold">BookWorm</h1>
            <p className="text-sm text-white m-0">All your computer needs</p>
          </div>
        </div>
        <div className="flex items-center">
          {user ? (
            <Link href={"/user"}>
              <FaUserCircle className="mx-4 text-2xl cursor-pointer text-white hover:text-light-green duration-300 transition-all ease-in-out" />
            </Link>
          ) : (
            <Link href={"/auth/signin"}>
              <Button
                caption="Sign In"
                onClick={() => {}}
                background="bg-white"
                textColor="text-green"
              />
            </Link>
          )}
          <FaSignOutAlt className="mx-4 text-2xl cursor-pointer text-white hover:text-light-green duration-300 transition-all ease-in-out" />
        </div>
      </header>
      <main className="flex-grow pb-12 px-4 sm:px-28 md:px-32 lg:px-40 xl:px-60">
        {children}
      </main>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default VisitorLayout;
