import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import "../sass/app.scss";
import messages from "../../assets/logo/mess.png";
import notification from "../../assets/logo/notific.png";
import invitations from "../../assets/logo/envelope.png";
import tasks from "../../assets/logo/tasklist.png";
import shape1 from "../../assets/logo/Shape 95.png";
import shape2 from "../../assets/logo/Shape 96.png";

const Content = () => {
  return (
    <div>
      <Card className="card">
        <div className="flex">
          <div className="info">
            <h1>Welcome Ema!</h1>
            <h4>YOU HAVE</h4>
            <p className="par">
              <img src={messages} alt="message" />
              {} Unread Messages
            </p>
            <p className="par">
              <img src={invitations} alt="invitations" />
              {} Pending Invitations
            </p>
            <p className="par">
              <img src={tasks} alt="tasks" />
              {} Due Tasks
            </p>
            <p>
              <img src={notification} alt="notification" />
              {} Other Notifications
            </p>
          </div>
          <div className="shapes">
            <h2>Site Visits</h2>
            <img className="img1" src={shape1} alt="shape1" />
            <img className="img2" src={shape2} alt="shape2" />
          </div>
          <div className="shapes">
            <h2>Site Audience</h2>
            <p>Male</p>
            <hr className="male" />
            <p>Female</p>
            <hr className="female" />
            <p>Other</p>
            <hr className="other" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Content;
