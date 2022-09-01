import React from "react";
import { Button, Card, Input, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import HeaderSection from "components/headerSection/HeaderSection";
import useLoans from "../hooks/useLoans";
import LoansCards from "./LoansCards";
import DataTable from "components/dataTable/DataTable";
import "./loans.scss";

const Loans = () => {
  const { generalDictionary, loading, loansList, columns, filter, modal } =
    useLoans();
  return (
    <>
      <HeaderSection
        title={generalDictionary.LOANS}
        buttons={[
          <Button
            key="1"
            type="primary"
            icon={<PlusOutlined />}
            onClick={modal.handleOpenModal}
          >
            {generalDictionary.ADD}
          </Button>,
        ]}
      />
      <Card>
        <LoansCards generalDictionary={generalDictionary} />
        <Input
          type={"text"}
          className="loansSearch"
          placeholder={generalDictionary.SEARCH}
          value={filter.search.searchValue}
          onChange={(event) => filter.searchFilter(event.target.value)}
          addonBefore={
            <Space>
              <SearchOutlined />
              {generalDictionary.SEARCH}
            </Space>
          }
        />
        <DataTable
          id="expenses-table"
          loading={loading}
          dataSource={loansList}
          columns={columns}
          title={generalDictionary.EXPENSES_LIST}
        />
      </Card>
    </>
  );
};

export default Loans;
