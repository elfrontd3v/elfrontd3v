import React from "react";
import { Button, Card } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import HeaderSection from "components/headerSection/HeaderSection";
import useLoans from "../hooks/useLoans";
import LoansCards from "./LoansCards";

const Loans = () => {
  const { generalDictionary, loan } = useLoans();
  return (
    <>
      <HeaderSection
        title={generalDictionary.LOANS}
        buttons={[
          <Button
            key="1"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {}}
          >
            {generalDictionary.ADD}
          </Button>,
        ]}
      />
      <Card>
        <LoansCards generalDictionary={generalDictionary} />
      </Card>
    </>
  );
};

export default Loans;
