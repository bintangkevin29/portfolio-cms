import React from "react";

const CustomSpinner: React.FC<{ small?: boolean }> = ({ small = false }) => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 h-100">
      <div className={`spinner-border ${small ? "spinner-border-sm" : ""}`}></div>
    </div>
  );
};

export default CustomSpinner;
