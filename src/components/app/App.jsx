import React, { Suspense } from "react";
import { Spin, Layout, Col, ConfigProvider } from "antd";
import { Routes } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import NavBar from "../navBar/NavBar";
import useApp from "./useApp";

const { Content } = Layout;

const App = () => {
  const { authState, authLoading, items, routesList, configProvider } =
    useApp();

  return (
    <Spin
      spinning={authLoading}
      tip="Validando..."
      size="large"
      style={{ backgroundColor: "#fff", minHeight: "100vh", position: "fixed" }}
    >
      <ConfigProvider
        locale={configProvider.locale}
        direction={configProvider.direction}
      >
        <Layout>
          {authState?.uid && <NavBar items={items} />}
          <Layout
            style={
              authState?.uid ? { marginTop: "64px" } : { marginTop: "0px" }
            }
          >
            {authState?.uid && (
              <Col
                xs={0}
                sm={0}
                md={0}
                lg={4}
                xl={3}
                xxl={3}
                style={{ backgroundColor: "#fafafa" }}
              >
                <SideBar items={items} />
              </Col>
            )}
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={authState.uid ? 20 : 24}
              xl={authState.uid ? 21 : 24}
              xxl={authState.uid ? 21 : 24}
            >
              <Content
                className={authState?.uid ? "contentClass" : "fullHeight"}
              >
                <Suspense fallback={<></>}>
                  <Routes>{routesList}</Routes>
                </Suspense>
              </Content>
            </Col>
          </Layout>
        </Layout>
      </ConfigProvider>
    </Spin>
  );
};

export default App;
