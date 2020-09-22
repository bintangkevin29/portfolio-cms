import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import { useModule } from "../../lib/use-module";
import CustomButton from "../custom-button";

const PageContent: React.FC = ({ children }) => {
  const { module } = useModule();
  const { pathname } = useLocation();
  const history = useHistory();
  const urlLength = pathname.split("/").length;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center">
          {urlLength > 2 && (
            <FaChevronLeft
              onClick={handleBack}
              className="text-primary mr-3 h4 my-0 cursor-pointer"
            />
          )}
          <h1 className="h3 mb-0 text-gray-800">{module?.name}</h1>
        </div>
        {module?.haveAdd && (
          <Link to={`${module.url}/add`}>
            <CustomButton> Add {module?.name}</CustomButton>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default PageContent;
