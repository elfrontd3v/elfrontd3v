import React from "react";
import { Spin, Layout, Col } from "antd";
import SideBar from "../sideBar/SideBar";
import NavBar from "../navBar/NavBar";
import useApp from "./useApp";
import { AllRoutes } from "../../routes";
const { Content } = Layout;
const App = () => {
  const { authState, themeState, authLoading } = useApp();
  return (
    <Spin
      spinning={authLoading}
      tip="Validando..."
      size="large"
      style={{ backgroundColor: "#fff", minHeight: "100vh", position: "fixed" }}
    >
      <Layout>
        {authState?.uid && (
          <Col xs={0} sm={0} md={0} lg={5} xl={4} xxl={3}>
            <SideBar />
          </Col>
        )}
        <Layout>
          {authState?.uid && <NavBar />}
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={authState?.uid ? 19 : 24}
            xl={authState?.uid ? 20 : 24}
            xxl={authState?.uid ? 21 : 24}
          >
            <Content
              className={themeState.themeClass === "light" ? "" : "dark"}
            >
              <AllRoutes />
            </Content>
          </Col>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default App;
