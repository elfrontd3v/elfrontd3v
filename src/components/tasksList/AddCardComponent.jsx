import { Button, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const AddCardComponent = ({ generalDictionary, type }) => {
  const [addCollapse, setAddCollapse] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      {addCollapse ? (
        <div className="addTitleForm">
          <Input
            className="inputTitle"
            size="large"
            value={inputValue}
            placeholder={
              type === "LIST"
                ? generalDictionary.ADD_TITLE
                : generalDictionary.ADD_TASK
            }
            onChange={(event) => setInputValue(event.target.value)}
            onBlur={() => setAddCollapse(false)}
            autoFocus={true}
          />
          <Button
            onMouseDown={() => {
              setAddCollapse(true);
              console.log("agregando..");
            }}
            type={"primary"}
            className="addButtonConfirm"
          >
            {generalDictionary.ADD}
          </Button>
          <Button
            className="addButtonCancel"
            onMouseDown={() => setAddCollapse(false)}
            type={"danger"}
          >
            {generalDictionary.CANCEL}
          </Button>
        </div>
      ) : (
        <Button
          size="large"
          type="text"
          className={"addButton"}
          icon={<PlusOutlined />}
          onClick={() => setAddCollapse(true)}
        >
          {type === "LIST"
            ? generalDictionary.ADD_LIST
            : generalDictionary.ADD_TASK}
        </Button>
      )}
    </>
  );
};

export default AddCardComponent;
