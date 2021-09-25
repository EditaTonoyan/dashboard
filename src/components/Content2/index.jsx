import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import "../sass/app.scss";
import userImg from "../../assets/logo/user.svg";
import graph from "../../assets/logo/graph.png";

const Content2 = () => {
  return (
    <div>
      <Card className="card-for-content2 ">
        <div style={{ display: "flex" }}>
          <div>
            <h3>GROWTH</h3>
            <h1>37%</h1>
            <p>This year</p>
          </div>
          <img src={graph} alt="graphic" />
        </div>
      </Card>
      <Card className="card-for-content2 ">
        <h3>NEW CUSTOMERS</h3>
        <img className="imgUser" src={userImg} alt="userImg" />
        <img className="imgUser" src={userImg} alt="userImg" />
        <img className="imgUser" src={userImg} alt="userImg" />
      </Card>
      <Card className="card-for-content2 ">
        <h3>TOTAL REVENUE</h3>
        <h1>$21,675</h1>
        <p>YTD Reavenue</p>
      </Card>
    </div>
  );
};

export default Content2;
