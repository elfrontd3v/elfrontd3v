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
          <Input
            addonBefore={
              <Space>
                <SearchOutlined />
                {generalDictionary.SEARCH}
              </Space>
            }
            type={"text"}
            placeholder={generalDictionary.TYPE_SOMETHING}
            value={filter.search.searchValue}
            onChange={(event) => filter.searchFilter(event.target.value)}
          />,
          <Button
            key="1"
            type="primary"
            icon={<PlusOutlined />}
            onClick={modal.handleOpenModal}
          >
            {generalDictionary.ADD_EARNING}
          </Button>,
        ]}
      />

      <Card>
        <EarningsCards
          generalDictionary={generalDictionary}
          graphicsData={graphicsData}
        />

        <Table
          className="earningsTable"
          loading={loading}
          dataSource={earningsList}
          columns={columns}
          id="earnings-table"
          rowKey={(earnings) => earnings.id}
          bordered
          pagination={{
            defaultPageSize: 5,
            total: earningsList.length,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 15, 50],
          }}
          scroll={{
            x: 1000,
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
