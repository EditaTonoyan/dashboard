import React from "react";
import "antd/dist/antd.css";
import { Card, Checkbox } from "antd";
import "../sass/app.scss";
import { SearchOutlined } from "@ant-design/icons";
import projects from "../../assets/logo/projects.png";
import todos from "../../assets/logo/todos.png";
import thems from "../../assets/logo/thems.png";
import files from "../../assets/logo/files.png";
import userImg from "../../assets/logo/user.svg";
import search from "../../assets/logo/searchTodo.png";

const Content3 = () => {
  return (
    <>
      <div className="card-for-content3">
        <Card className="first-child-div">
          <h1>11</h1>
          <img src={projects} alt="diam" />
        </Card>

        <Card>
          <h1>22</h1>
          <img src={todos} alt="diam" />
        </Card>

        <Card>
          <h1>33</h1>
          <img src={thems} alt="diam" />
        </Card>

        <Card>
          <h1>44</h1>
          <img src={files} alt="diam" />
        </Card>
      </div>
      <Card className="todolist">
        <div className="dflex">
          <div className="links">
            <a href="#">Task List</a>
            <a href="#">All Tasks</a>
            <a href="#">My Tasks</a>
            {/* <SearchOutlined className="searchicon" /> */}
          </div>
          <div>
            <img src={search} alt="search" />
          </div>
        </div>
        <hr />

        <div className="dflex">
          <div>
            <Checkbox>Checkbox</Checkbox>
            <br />
            <Checkbox>Checkbox</Checkbox>
          </div>
          <div className="dflex">
            <div className="activities"></div>
            <p className="name">name</p>
            <img className="imgUser" src={userImg} alt="user" />
            <span> date</span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Content3;
