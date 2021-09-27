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
import ellipse from "../../assets/logo/ellipse.png";

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
      <div className="tickets">
        <Card>
          <div className="dflex">
            <h4>Recent:Support Tickets</h4>
            <a href="#">See All Tasks --></a>
          </div>
        </Card>
        <Card>
          <div>
            <h4>Tickets By Status</h4>
            <img className="ellipse" src={ellipse} alt="ellispe" />
            <h1 className="sum">24</h1>
          </div>
        </Card>
      </div>

      <Card className="map">
        <div>
          <h4>Revenu Overviews</h4>
          <p>Europe</p>
          <hr />
          <p>North America</p>
          <hr />
          <p>Japan, South Karia</p>
          <hr />
          <p>Other</p>
          <hr />
        </div>
      </Card>
    </>
  );
};

export default Content3;
