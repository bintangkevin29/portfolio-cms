import React from "react";
import ContentWrapper from "../content-wrapper";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import PageContent from "../page-content";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main-layout">
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper>
          <Navbar />
          <PageContent>{children}</PageContent>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default MainLayout;
