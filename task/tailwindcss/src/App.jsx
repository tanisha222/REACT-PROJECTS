import React from "react";
import Sidebar from "./Sidebar";
import LeavePage from "./LeavePage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100 ml-18 p-6 relative">
        <LeavePage />
      </div>
    </div>
  );
}

export default App;
