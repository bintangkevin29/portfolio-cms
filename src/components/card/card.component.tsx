import React, { ReactNode } from "react";
import { Col } from "react-bootstrap";

interface Props {
  colXs?: number;
  colMd?: number;
  children: ReactNode;
  header?: string;
}

const CustomCard: React.FC<Props> = ({ children, colXs, colMd, header }) => {
  return (
    <Col xs={colXs} md={colMd}>
      <div className="card shadow h-100 py-2">
        {header && (
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">{header}</h6>
          </div>
        )}
        <div className="card-body">{children}</div>
      </div>
    </Col>
  );
};

export default CustomCard;
