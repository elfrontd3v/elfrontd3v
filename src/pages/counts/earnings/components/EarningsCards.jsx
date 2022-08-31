import React from "react";
import { Col, Row } from "antd";
import {
  ContainerOutlined,
  ExclamationCircleOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import GraphicsCard from "../../../../components/graphicsCard/GraphicsCard";
import { numThousand } from "../../../../helpers/utils/validateFormat";

const EarningsCards = ({ graphicsData, generalDictionary }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <GraphicsCard
            color={"dark"}
            icon={<ContainerOutlined />}
            title={generalDictionary.NUMBER_OF_EARNINGS}
            data={graphicsData.totalEarnings}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <GraphicsCard
            color={"primary"}
            icon={<ExclamationCircleOutlined />}
            title={generalDictionary.TOTAL_EARNINGS}
            data={" $ " + numThousand(graphicsData.totalEarningsValue)}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <GraphicsCard
            color={"success"}
            icon={<DollarOutlined />}
            title={generalDictionary.MAX_EARNING}
            data={" $ " + numThousand(graphicsData.maxEarning)}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <GraphicsCard
            color={"error"}
            icon={<CheckCircleOutlined />}
            title={generalDictionary.MIN_EARNING}
            data={" $ " + numThousand(graphicsData.minEarning)}
          />
        </Col>
      </Row>
    </>
  );
};

export default EarningsCards;
