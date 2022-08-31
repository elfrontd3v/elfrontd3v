import React from "react";
import { Button, Card, Input, Space, Table } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import HeaderSection from "../../../../components/headerSection/HeaderSection";
import useExpenses from "../hooks/useExpenses";
import ExpensesCards from "./ExpensesCards";
import CreateExpense from "./CreateExpense";
import "./expenses.scss";

const Expenses = () => {
  const {
    generalDictionary,
    loading,
    expensesList,
    columns,
    graphicsData,
    filter,
    modal,
  } = useExpenses();
  return (
    <>
      <HeaderSection
        title={generalDictionary.EXPENSES}
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
        <ExpensesCards
          generalDictionary={generalDictionary}
          graphicsData={graphicsData}
        />

        <Input
          type={"text"}
          className="expensesSearch"
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

        <Table
          className="expensesTable"
          id="expenses-table"
          loading={loading}
          dataSource={expensesList}
          columns={columns}
          title={() => generalDictionary.EXPENSES_LIST}
          rowKey={(earnings) => earnings.id}
          bordered
          pagination={{
            defaultPageSize: 5,
            total: expensesList.length,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 15, 50],
          }}
          scroll={{
            x: true,
          }}
        />
      </Card>

      <CreateExpense
        isVisible={modal.modalVisible}
        expenseToEdit={modal.expenseToEdit}
        handleCancel={modal.handleCancel}
        handleCreate={modal.handleCreate}
        loadingModal={modal.loadingModal}
      />
    </>
  );
};

export default Expenses;
