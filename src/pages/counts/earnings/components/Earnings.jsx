import React from "react";
import { Button, Card, Input, Space, Table } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import HeaderSection from "../../../../components/headerSection/HeaderSection";
import useEarnings from "../hooks/useEarnings";
import EarningsCards from "./EarningsCards";
import CreateEarning from "./CreateEarning";
import "./earnings.scss";

const Earnings = () => {
  const {
    generalDictionary,
    loading,
    earningsList,
    columns,
    graphicsData,
    filter,
    modal,
  } = useEarnings();

  return (
    <>
      <HeaderSection
        title={generalDictionary.EARNINGS}
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
        <EarningsCards
          generalDictionary={generalDictionary}
          graphicsData={graphicsData}
        />

        <Input
          type={"text"}
          className="earningsSearch"
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
          className="earningsTable"
          id="earnings-table"
          loading={loading}
          dataSource={earningsList}
          columns={columns}
          title={() => generalDictionary.EARNINGS_LIST}
          rowKey={(earnings) => earnings.id}
          bordered
          pagination={{
            defaultPageSize: 5,
            total: earningsList.length,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 15, 50],
          }}
          scroll={{
            x: true,
          }}
        />
      </Card>

      <CreateEarning
        isVisible={modal.modalVisible}
        expenseToEdit={modal.earningToEdit}
        handleCancel={modal.handleCancel}
        handleCreate={modal.handleCreate}
        loadingModal={modal.loadingModal}
      />
    </>
  );
};

export default Earnings;
