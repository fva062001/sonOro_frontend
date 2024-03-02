import React from "react";
import styles from "../styles/Header.module.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <div
      className={`${styles.background} w-[99%] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[94%] rounded-[20px] bg-cover bg-center bg-no-repeat`}>
      <div className="w-[95%] mx-auto mt-8 flex flex-row justify-between">
        <NavBar></NavBar>
        <div className="w-[47%]">
          <h1 className="font-medium">
            <span className="text-7xl leading-tight">
              Your Personal Music Classifier with <br /> Machine Learning
            </span>
          </h1>
        </div>
        <div className=" flex flex-row">
          <p>
            Try our model for free 🤙🏻
            <button className="ml-4 text-white font-light bg-black px-6 py-2 rounded-full">
              Try our app
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
