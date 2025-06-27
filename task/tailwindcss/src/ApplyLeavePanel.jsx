import React from 'react';

const ApplyLeavePanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-xl p-6 overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Apply Leave</h2>
        <p className="mb-4 text-gray-600">Applying for Anamnaaj Mansuri</p>

        <form className="space-y-4">
          <select className="w-full border rounded p-2">
            <option>Select leave</option>
            <option>Annual Leave</option>
            <option>Sick Leave</option>
            <option>Compensatory Off</option>
          </select>

          <div className="flex gap-2">
            <input type="date" className="w-1/2 border rounded p-2" placeholder="From" />
            <input type="date" className="w-1/2 border rounded p-2" placeholder="To" />
          </div>

          <input type="number" className="w-full border rounded p-2" placeholder="Number of days" />

          <textarea
            className="w-full border rounded p-2"
            placeholder="Reason For Leave"
            rows={3}
          />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLeavePanel;
