import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Menubar = ({ children }) => {
  const menu = (
    <>
      <li>
        <Link className="rounded-lg text-base" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="rounded-lg text-base" to="/show-books">
          Show-Books
        </Link>
      </li>
      <li>
        <Link className="rounded-lg text-base" to="/add-book">
          Add-Books
        </Link>
      </li>
    </>
  );
  return (
    <div class="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
        <div
          class="w-full navbar bg-base-300"
          style={{
            background: "#CAD5E2",
            color: "#E6425E",
          }}
        >
          <div class="flex-1 px-2 mx-2 text-lg font-semibold">
            Redux Crud App
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">{menu}</ul>
          </div>
        </div>
        <div>
          <div
            style={{
              background: "#120E43",
            }}
            className="w-[90%] mx-auto text-white mt-5 p-6"
          >
            {children}
          </div>
          <Footer></Footer>
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul
          class="menu p-4 overflow-y-auto w-80 bg-base-100"
          style={{
            background: "#CAD5E2",
            color: "#E6425E",
          }}
        >
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
