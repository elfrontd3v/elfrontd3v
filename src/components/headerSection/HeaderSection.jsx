import React from "react";
import { PageHeader } from "@ant-design/pro-layout";
import "./headerSection.scss";
const HeaderSection = ({
  title,
  subtitle,
  backIcon,
  backFunction,
  buttons,
}) => {
  return (
    <>
      <PageHeader
        className="headerSectionClass"
        title={title ? title : false}
        subTitle={subtitle ? subtitle : false}
        backIcon={backIcon ? backIcon : false}
        onBack={backFunction ? backFunction : false}
        extra={buttons ? buttons : []}
      />
    </>
  );
};

export default HeaderSection;
