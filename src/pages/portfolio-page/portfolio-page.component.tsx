import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CustomCard from "../../components/card";
import { PortfolioProps } from "../../global-props";
import { firestoreDB } from "../../lib/firestore";

const PortfolioPage: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioProps[]>();
  const [loading, setLoading] = useState(true);
  const [deleteDetector, setDeleteDetector] = useState(false);

  const handleDelete = (id: string) => {
    firestoreDB
      .collection("portfolio")
      .doc(id)
      .delete()
      .then(() => {
        toast.success("Deleted");
        setDeleteDetector(!deleteDetector);
      })
      .catch(() => toast.error("Fail to delete"));
  };

  useEffect(() => {
    setLoading(true);
    firestoreDB
      .collection("portfolio")
      .get()
      .then((querySnapshot) => {
        const data: any = [];
        querySnapshot.forEach((query) => data.push({ id: query.id, ...query.data() }));

        setLoading(false);
        setPortfolioData(data);
      });
  }, [deleteDetector]);

  return (
    <CustomCard colXs={12}>
      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Site</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData && portfolioData?.length > 0 ? (
            portfolioData?.map((portfolio, i) => (
              <tr key={i}>
                <td>{portfolio.name}</td>
                <td>{portfolio.url}</td>
                <td className="text-center">
                  <Link to={`/portfolio/details/${portfolio.id}`}>
                    <FaPencilAlt className="text-primary mx-2 cursor-pointer" />
                  </Link>
                  <FaTrash
                    onClick={() => handleDelete(portfolio.id)}
                    className="text-danger mx-2 cursor-pointer"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan={4}>
                {loading ? "Loading..." : "No Data"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </CustomCard>
  );
};

export default PortfolioPage;
