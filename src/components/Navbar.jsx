import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed flex justify-center items-center w-full border-b-2 bg-neutral-800 bg-opacity-60">
      <div className="flex w-3/5 justify-between">
        <div className="p-4">
          <Link to="home" smooth={true} duration={400}>
            <h1 className="text-5xl font-semibold text-white">ExNa</h1>
          </Link>
        </div>
        <div className="p-4 flex items-center gap-10 text-2xl text-white">
          <Link
            to="about"
            smooth={true}
            duration={400}
            className="hover:text-orange-400"
          >
            about
          </Link>
          <Link
            to="info"
            smooth={true}
            duration={400}
            className="hover:text-orange-400"
          >
            info
          </Link>
          <Link
            to="testimonio"
            smooth={true}
            duration={400}
            className="hover:text-orange-400"
          >
            clientes
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={400}
            className="hover:text-orange-400"
          >
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
