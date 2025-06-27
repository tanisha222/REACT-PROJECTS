import React, { useState } from "react";
import LeaveDashboard from "./LeaveDashboard";
import ApplyLeavePanel from "./ApplyLeavePanel";

const LeavePage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleOpenPanel = () => setIsPanelOpen(true);
  const handleClosePanel = () => setIsPanelOpen(false);

  return (
    <div className="relative">
      <LeaveDashboard onApplyLeave={handleOpenPanel} />
      <ApplyLeavePanel isOpen={isPanelOpen} onClose={handleClosePanel} />
    </div>
  );
};

export default LeavePage;
