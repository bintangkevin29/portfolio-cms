import React, { Fragment, ReactNode } from "react";
import CustomSpinner from "../custom-spinner";

interface Props {
  children: ReactNode;
  iconComponent?: React.FC;
  loading?: boolean;
}

const CustomButton: React.FC<Props> = ({ children, loading = false, iconComponent }) => {
  return (
    <button disabled={loading} className="btn btn-sm btn-primary shadow-sm">
      {loading ? (
        <CustomSpinner small />
      ) : (
        <Fragment>
          {iconComponent && <i className="fas fa-download fa-sm text-white-50"></i>} {children}
        </Fragment>
      )}
    </button>
  );
};

export default CustomButton;
