import React from "react";
import Footer from "../footer";

const ContentWrapper: React.FC = ({ children }) => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">{children}</div>
      <Footer />
    </div>
  );
};

export default ContentWrapper;
