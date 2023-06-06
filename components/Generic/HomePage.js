import React from "react";
import mainLogo from "../../public/images/Logo.png";
import backgroundImage from "../../public/images/mainBG-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div>
      {/* Main Logo */}
      <div className="flex flex-row mt-8 ml-8">
        <Image src={mainLogo} alt="" className="w-20" />
        <div className="flex items-end">
          <h1 className="text-4xl ml-3">FloraGenic</h1>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex absolute bottom-16 left-10 gap-4 md:bottom-28 md:left-12 md:gap-5">
        <Link href="/signIn">
          <button
            type="submit"
            className="w-24 h-12 p-2 bg-floraGreen rounded-full text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]"
          >
            Sign In
          </button>
        </Link>

        <Link href="/signUp">
          <button
            type="submit"
            className="w-24 h-12 bg-floraGreen rounded-full text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]"
          >
            Sign Up
          </button>
        </Link>
      </div>

      <div className="">
        <Image
          src={backgroundImage}
          alt=""
          className="absolute bottom-0 right-0 w-1/2"
        />
      </div>
    </div>
  );
};
