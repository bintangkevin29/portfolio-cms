import React from "react";
import { Table } from "react-bootstrap";
import CustomCard from "../../components/card";

const PortfolioPage: React.FC = () => {
  return (
    <CustomCard colXs={12}>
      <Table bordered>
        <thead>
          <tr>
            <th>Tes</th>
            <th>Tes</th>
            <th>Tes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </Table>
    </CustomCard>
  );
};

export default PortfolioPage;
