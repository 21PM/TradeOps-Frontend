import React from "react";

function Navbar() {
  return (
    <header
      className="bg-sf-header-bg border-b border-sf-border h-14 flex items-center justify-between px-4 shrink-0"
      data-purpose="global-header"
    >
      <div className="flex items-center space-x-8">
        {/* <!-- Logo --> */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
            <span className="text-black font-bold text-xl">S</span>
          </div>
        </div>
        {/* <!-- Nav Links --> */}
        <nav className="flex items-center space-x-6 text-sm font-medium text-sf-text-dim">
          <a
            className="bg-indigo-900/40 text-white px-4 py-4 -my-4 border-b-2 border-sf-accent-blue"
            href="#"
          >
            Trade Desk
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Portfolio
          </a>
          <button className="flex items-center hover:text-white transition-colors">
            More{" "}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 9l-7 7-7-7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
      {/* <!-- Global Actions --> */}
      <div className="flex items-center space-x-3">
        <button className="border border-sf-primary-blue text-sf-primary-blue hover:bg-sf-primary-blue hover:text-white px-6 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer">
          Sign In
        </button>
        <button className="border border-sf-primary-blue text-sf-primary-blue hover:bg-sf-primary-blue hover:text-white px-6 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer">
          Sign Up
        </button>
        <button className="bg-sf-primary-blue hover:bg-indigo-500 px-6 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer">
          Connect Account
        </button>
      </div>
    </header>
  );
}

export default Navbar;
