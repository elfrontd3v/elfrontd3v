import { Table } from "antd";
import React from "react";
import "./dataTable.scss";

const DataTable = ({ loading, dataSource, columns, title, id }) => {
  return (
    <>
      <Table
        id={id ? id : ""}
        className="dataTable"
        loading={loading ? loading : false}
        dataSource={dataSource}
        columns={columns}
        title={() => (title ? title : "")}
        rowKey={(element) => element.id}
        bordered
        pagination={{
          defaultPageSize: 5,
          total: dataSource?.length ? dataSource.length : 0,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 15, 50],
        }}
        scroll={{
          x: true,
        }}
      />
    </>
  );
};

export default DataTable;
