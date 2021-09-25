import React from "react";
import "../sass/app.scss";
import "antd/dist/antd.css";
import engFlag from "../../assets/logo/eng.png";
import rusFlag from "../../assets/logo/rus.jpg";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const Search = () => {
  return (
    <div className="area">
      <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
      <Select className="select" defaultValue="english">
        <Option value="english">
          <img src={engFlag} alt="eng" /> English
        </Option>
        <Option value="russian">
          <img src={rusFlag} alt="rus" />
          Russian
        </Option>
      </Select>
    </div>
  );
};

export default Search;
