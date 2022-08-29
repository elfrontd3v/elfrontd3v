import React, { useState } from "react";
import { Drawer, Row, Col } from "antd";
import {  MenuUnfoldOutlined } from "@ant-design/icons";

import { Header } from "antd/lib/layout/layout";



const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Row>
          <Col xs={2} sm={2} md={2} lg={0} xl={0}>
            <MenuUnfoldOutlined onClick={() => setVisible(true)} />
          </Col>
        </Row>
      </Header>
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
    </>
  );
};
export default NavBar;
