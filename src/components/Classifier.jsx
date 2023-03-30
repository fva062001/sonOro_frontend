import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { modalActions } from "@/store/modal";

function FileInput({ sendFile }) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("audio", file);
    fetch("http://localhost:5001/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(modalActions.showModal({ type: "OPEN_MODAL", data }));
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input
        type="file"
        accept="audio/*"
        onChange={handleChange}
        className=" w-[40vw] text-2xl  rounded-lg cursor-pointer  text-gray-400 border-2 border-gray-600 placeholder-gray-400"
      />
      <button
        className="mt-10 text-black font-bold text-xl bg-gradient-to-r from-cyan-200 to-blue-400 px-4 py-2 rounded-full"
        type="submit"
      >
        Check Category
      </button>
    </form>
  );
}

function Classifier() {
  const data = useSelector((state) => state.modal.data);
  return (
    <div className="border-[#606060] w-[99%] h-[66%] border-[1px] rounded-2xl relative">
      <div className="h-full">
        <div className="text-[#9cddfe] font-bold text-8xl space-y-4 text-end px-10 py-6">
          <h1>Start Classifying</h1>
          <h1>Your Music</h1>
        </div>
        {data && <Modal data={data} />}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mt-20">
          <FileInput></FileInput>
        </div>
      </div>
    </div>
  );
}

export default Classifier;
