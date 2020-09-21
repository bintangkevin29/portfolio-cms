import React from "react";
import CustomButton from "../custom-button";

const PageContent: React.FC = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <CustomButton> Generate Report</CustomButton>
      </div>
      {children}
    </div>
  );
};

export default PageContent;
