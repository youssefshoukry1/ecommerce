// src/components/Loader.jsx

import React from "react";
import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-center">
        <HashLoader color="#36d7b7" size={70} />
        <p className="text-white mt-4 text-lg animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

