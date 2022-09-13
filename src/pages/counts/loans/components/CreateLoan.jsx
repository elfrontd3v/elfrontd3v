import { Button, Col, DatePicker, Form, Input, Modal, Row, Spin } from "antd";
import { ThemeContext } from "core/context";
import React, { useContext } from "react";

const CreateLoan = ({
  isVisible,
  expenseToEdit,
  handleCancel,
  handleCreate,
  loadingModal,
}) => {
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;
  const initialValues = expenseToEdit.id ? expenseToEdit : null;
  const rules = {
    nameRules: [
      {
        required: true,
        type: "string",
        min: 3,
        max: 30,
        message: generalDictionary.VALIDATE_NAME,
      },
    ],
    valueRules: [
      {
        transform: (value) => parseFloat(value),
        required: true,
        type: "number",
        min: 1,
        max: 999999999999,
        message: generalDictionary.VALIDATE_VALUE,
      },
    ],
    periodicityRules: [
      {
        required: true,
        message: generalDictionary.VALIDATE_PERIODICITY,
      },
    ],
    initialDateRules: [
      {
        required: true,
        message: generalDictionary.VALIDATE_DATE,
      },
    ],
  };
  return (
    <Modal
      closable={false}
      destroyOnClose={true}
      maskClosable={false}
      title={generalDictionary.ADD_LOAN}
      visible={isVisible.state}
      onCancel={handleCancel}
      footer={null}
    >
      <Spin
        tip={generalDictionary.SAVING}
        spinning={loadingModal}
        delay={500}
        size={"large"}
      >
        <Row>
          <Col span={24}>
            <Form
              initialValues={initialValues}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 15 }}
              onFinish={(values) =>
                handleCreate(values, initialValues ? initialValues : null)
              }
            >
              <Form.Item
                name={"name"}
                label={generalDictionary.NAME}
                rules={rules.nameRules}
                hasFeedback
              >
                <Input
                  disabled={isVisible.visualize}
                  type={"text"}
                  placeholder={generalDictionary.NAME}
                />
              </Form.Item>
              <Form.Item
                name={"initialDate"}
                label={generalDictionary.INITIAL_DATE}
                rules={rules.initialDateRules}
                hasFeedback
              >
                <DatePicker
                  disabled={isVisible.visualize}
                  placeholder={generalDictionary.INITIAL_DATE}
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                wrapperCol={24}
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                {!isVisible.visualize && (
                  <Button
                    type={"primary"}
                    htmlType={"submit"}
                    style={{ marginRight: "8px" }}
                    disabled={loadingModal}
                  >
                    {generalDictionary.ACCEPT}
                  </Button>
                )}
                <Button
                  type={"default"}
                  onClick={handleCancel}
                  disabled={loadingModal}
                >
                  {generalDictionary.CANCEL}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Spin>
    </Modal>
  );
};

export default CreateLoan;
