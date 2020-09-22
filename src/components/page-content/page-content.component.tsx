import React from "react";
import { Link } from "react-router-dom";

import { useModule } from "../../lib/use-module";
import CustomButton from "../custom-button";

const PageContent: React.FC = ({ children }) => {
  const { module } = useModule();
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{module?.name}</h1>
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
