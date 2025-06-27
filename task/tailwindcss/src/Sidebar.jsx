import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Sidebar = () => {
  return (
    <div className="h-screen w-18 bg-white text-black fixed top-0 left-0 shadow-lg">
  
      <div className="flex justify-center p-4 border-b border-gray-300">
        <img src="./public/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
      </div>

      <ul className="mt-6 flex flex-col items-center gap-6 text-3xl">
        <li>
          <i className="fa-solid fa-user-tie hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-solid fa-business-time hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-solid fa-desktop hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-solid fa-chart-simple hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-solid fa-book hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-solid fa-users hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-regular fa-circle-check hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-brands fa-windows hover:text-teal-500"></i>
        </li>
        <li>
          <i className="fa-solid fa-hourglass hover:text-teal-500"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
