import React, { Suspense } from "react";
import { Spin, Layout, Col } from "antd";
import { Routes } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import NavBar from "../navBar/NavBar";
import useApp from "./useApp";

const { Content } = Layout;

const App = () => {
  const { authState, authLoading, items, routesList } = useApp();

  return (
    <Spin
      spinning={authLoading}
      tip="Validando..."
      size="large"
      style={{ backgroundColor: "#fff", minHeight: "100vh", position: "fixed" }}
    >
      <Layout>
        {authState?.uid && <NavBar items={items} />}
        <Layout>
          {authState?.uid && (
            <Col xs={0} sm={0} md={0} lg={5} xl={4} xxl={3}>
              <SideBar items={items} />
            </Col>
          )}
          <Col xs={24} sm={24} md={24} lg={19} xl={20} xxl={21}>
            <Content>
              <Suspense fallback={<></>}>
                <Routes>{routesList}</Routes>
              </Suspense>
            </Content>
          </Col>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default App;
