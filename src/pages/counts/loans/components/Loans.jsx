import { Card } from "antd";
import React from "react";
import HeaderSection from "components/headerSection/HeaderSection";
import useLoans from "../hooks/useLoans";
import LoansCards from "./LoansCards";

const Loans = () => {
  const { generalDictionary, loan } = useLoans();
  console.log("new loan", loan);
  return (
    <>
      <HeaderSection title={generalDictionary.LOANS} />
      <Card>
        <LoansCards generalDictionary={generalDictionary} />
      </Card>
    </>
  );
};

export default Loans;
