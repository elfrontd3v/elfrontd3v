import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Slider,
  Space,
  Spin,
} from "antd";
import { ThemeContext } from "core/context";
import { numThousand, parserNumber } from "helpers/utils/validateFormat";
import React, { useContext } from "react";
import { useState } from "react";
import "./loans.scss";

const CreateLoan = ({
  isVisible,
  expenseToEdit,
  handleCancel,
  handleCreate,
  loadingModal,
}) => {
  const [themeState] = useContext(ThemeContext);
  const { generalDictionary } = themeState;
  const [value, setValue] = useState(0);
  const [interestsType, setInterestsType] = useState("");
  const [interestsValue, setInterestsValue] = useState(0);
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
                name={"initialValue"}
                label={generalDictionary.VALUE}
                rules={rules.valueRules}
                hasFeedback
              >
                <InputNumber
                  onChange={(e) => setValue(e)}
                  disabled={isVisible.visualize}
                  prefix="$"
                  style={{ width: "100%" }}
                  controls={false}
                  formatter={(value) => numThousand(value)}
                  parser={(value) => parserNumber(value)}
                />
              </Form.Item>
              <Form.Item
                name={"periodicity"}
                label={generalDictionary.PERIODICITY}
                rules={rules.periodicityRules}
                hasFeedback
              >
                <Select
                  placeholder={generalDictionary.PERIODICITY}
                  disabled={isVisible.visualize}
                >
                  <Select.Option value={"monthValue"}>
                    {generalDictionary.MONTHLY}
                  </Select.Option>
                  <Select.Option value={"dayValue"}>
                    {generalDictionary.DAILY}
                  </Select.Option>
                  <Select.Option value={"yearValue"}>
                    {generalDictionary.ANNUAL}
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={"interestsType"}
                wrapperCol={24}
                className={"loansFormCenter"}
                rules={rules.periodicityRules}
                hasFeedback
              >
                <Radio.Group onChange={(e) => setInterestsType(e.target.value)}>
                  <Space direction="horizontal">
                    <Radio value={"VAL"}>
                      {generalDictionary.FIXED_INTEREST}
                    </Radio>
                    <Radio value={"PER"}>
                      {generalDictionary.PERCENTAGE_INTEREST}
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
              {interestsType === "PER" && (
                <Form.Item
                  name={"interestsPercent"}
                  label={generalDictionary.PERCENTS}
                >
                  <Slider
                    onChange={(e) => setInterestsValue(value * (e / 100))}
                    min={1}
                    max={20}
                    tooltip={{ open: true }}
                    marks={{
                      5: "5 %",
                      10: "10 %",
                      15: "15 %",
                    }}
                  />
                </Form.Item>
              )}
              <Form.Item
                name={"interests"}
                label={generalDictionary.INTERESTS}
                rules={rules.valueRules}
                hasFeedback
              >
                <InputNumber
                  disabled={isVisible.visualize || interestsType !== "VAL"}
                  prefix="$"
                  style={{ width: "100%" }}
                  controls={false}
                  formatter={() => numThousand(interestsValue)}
                  parser={(value) => parserNumber(value)}
                  value={interestsValue}
                />
              </Form.Item>
              <Form.Item wrapperCol={24} className={"loansFormCenter"}>
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
