import React, { Fragment, ReactNode } from "react";
import { Button, ButtonProps } from "react-bootstrap";
import CustomSpinner from "../custom-spinner";

interface Props extends ButtonProps {
  children: ReactNode;
  iconComponent?: React.FC;
  loading?: boolean;
}

const CustomButton: React.FC<Props> = ({
  children,
  loading = false,
  iconComponent,
  disabled,
  type,
  ...props
}) => {
  return (
    <Button
      type={type}
      disabled={loading || disabled}
      className="btn btn-sm btn-primary shadow-sm"
      {...props}
    >
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
