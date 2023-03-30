import React from "react";
import { FiMusic } from "react-icons/fi";

function NavBar() {
  return (
    <div className="space-y-8 text-2xl font-light">
      <h1 className="font-bold text-4xl">
        <FiMusic className="inline mr-2"></FiMusic> SonOro
      </h1>
      <ul className="space-y-4">
        <li>Try</li>
        <li>Project</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default NavBar;
