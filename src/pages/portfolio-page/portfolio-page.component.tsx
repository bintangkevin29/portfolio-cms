import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CustomCard from "../../components/card";
import { PortfolioProps } from "../../global-props";
import { firestoreDB } from "../../lib/firestore";

const PortfolioPage: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioProps[]>();

  useEffect(() => {
    firestoreDB
      .collection("portfolio")
      .get()
      .then((querySnapshot) => {
        const data: any = [];
        querySnapshot.forEach((query) => data.push(query.data()));
        setPortfolioData(data);
      });
  }, []);

  return (
    <CustomCard colXs={12}>
      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Site</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData && portfolioData?.length > 0 ? (
            portfolioData?.map((portfolio) => (
              <tr>
                <td className="text-center" colSpan={4}>
                  {portfolio.name}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan={4}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </CustomCard>
  );
};

export default PortfolioPage;
