import React from "react";
import { Card, Col, Row } from "antd";
import GraphicsCard from "../../../../components/graphicsCard/GraphicsCard";
import {
  ContainerOutlined,
  ExclamationCircleOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import HeaderSection from "../../../../components/headerSection/HeaderSection";
const Earnings = () => {
  return (
    <>
      <HeaderSection title={"Earnings"} />
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <GraphicsCard
              color={"dark"}
              icon={<ContainerOutlined />}
              title={"Numero ingresos"}
              data={6}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <GraphicsCard
              color={"primary"}
              icon={<ExclamationCircleOutlined />}
              title={"Ingresos totales"}
              data={4523288}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <GraphicsCard
              color={"success"}
              icon={<DollarOutlined />}
              title={"Ingreso más alto"}
              data={2500000}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <GraphicsCard
              color={"error"}
              icon={<CheckCircleOutlined />}
              title={"Ingreso más bajo"}
              data={500000}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Earnings;
