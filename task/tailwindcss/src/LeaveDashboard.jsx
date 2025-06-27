import React from "react";


const LeaveDashboard = ({ onApplyLeave }) => {
  const leaveTypes = [
    { title: "Annual Leave", img: "./public/img1.png" },
    { title: "Remaining Leave", img: "./public/img2.png" },
    { title: "Compensatory off", img: "./public/img3.png" },
    { title: "Sick Leave", img: "./public/img4.png" },
    { title: "Misc", img: "./public/img5.png" },
    { title: "Total Leaves", img: "./public/img6.png" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Leave</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-3 py-1"
          />
          <div className="relative">
            <i className="fas fa-bell text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              4
            </span>
          </div>
          <img
            src="./public/profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {leaveTypes.map((leave, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-lg shadow text-center"
          >
            <h2 className="font-bold mb-2">{leave.title}</h2>
            <img
              src={leave.img}
              alt={leave.title}
              className="w-30 h- rounded-full mx-auto mb-2"
            />
            <p>Available: 10</p>
            <p>Pending: 2</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <div>
            <button className="bg-black text-white px-4 py-1 rounded mr-2">
              Upcoming
            </button>
            <button className="bg-white border px-4 py-1 rounded">Past</button>
          </div>
          <button
  className="bg-black text-white px-4 py-2 rounded hover:bg-teal-500 transition duration-200"
  onClick={onApplyLeave}>
  Apply Leave
</button>
        </div>
        <div className="overflow-hidden rounded-md shadow border border-gray-200 bg-white">

  <table className="w-full table-auto text-sm text-gray-500">
    <thead className="bg-gray-50 text-left text-sm text-gray-400">
      <tr>
        <th className="px-4 py-3">Sr.no</th>
        <th className="px-4 py-3">Leave Type</th>
        <th className="px-4 py-3">Start Date</th>
        <th className="px-4 py-3">End Date</th>
        <th className="px-4 py-3">No. of Leaves</th>
        <th className="px-4 py-3">Approver</th>
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">More Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-4 text-black text-sm border-t" colSpan="8">
          No leave data available
        </td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default LeaveDashboard;
