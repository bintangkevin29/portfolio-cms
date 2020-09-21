import React, { Fragment, ReactNode } from "react";
import { Button, ButtonProps } from "react-bootstrap";
import CustomSpinner from "../custom-spinner";

interface Props extends ButtonProps {
  children: ReactNode;
  iconComponent?: React.FC;
  loading?: boolean;
}

const CustomButton: React.FC<Props> = ({ children, loading = false, iconComponent, disabled }) => {
  return (
    <Button disabled={loading || disabled} className="btn btn-sm btn-primary shadow-sm">
      {loading ? (
        <CustomSpinner small />
      ) : (
        <Fragment>
          {iconComponent && <i className="fas fa-download fa-sm text-white-50"></i>} {children}
        </Fragment>
      )}
    </Button>
  );
};

export default CustomButton;
