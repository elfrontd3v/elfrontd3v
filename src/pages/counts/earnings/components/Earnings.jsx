import React from "react";
import { Card, Col, Row } from "antd";
import GraphicsCard from "../../../../components/graphicsCard/GraphicsCard";

const Earnings = () => {
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
          <GraphicsCard />
        </Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}></Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}></Col>
        <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}></Col>
      </Row>
    </Card>
  );
};

export default Earnings;
