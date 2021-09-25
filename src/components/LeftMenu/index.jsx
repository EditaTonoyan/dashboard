import React from "react";
import "antd/dist/antd.css";
import "../sass/app.scss";
import logoImg from "../../assets/logo/logo.svg";
import userImg from "../../assets/logo/user.svg";
// import dashboard from "../assets/logo/dashboard.jpg";
import cmr from "../../assets/logo/CMR.png";
import crypto from "../../assets/logo/crypto.png";
import listing from "../../assets/logo/listing.png";
import settings from "../../assets/logo/settings.png";
import widgets from "../../assets/logo/widgets.png";
import matrics from "../../assets/logo/matrics.png";
import algolia from "../../assets/logo/algolia.png";
import extension from "../../assets/logo/extension.png";
import custom from "../../assets/logo/custom.png";
import inbuild from "../../assets/logo/in-build.png";
import social from "../../assets/logo/social.png";
import documents from "../../assets/logo/documents.png";
import dashboard from "../../assets/logo/dashboard01.png";

import { Menu } from "antd";
import {
  MenuUnfoldOutlined,
  BellOutlined,
  SearchOutlined,
  MessageOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const LeftMenu = () => {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <header className="header">
            <span className="menuIcon">
              <MenuUnfoldOutlined />
            </span>
            <img src={logoImg} alt="logo" />
          </header>
          <div className="wrapper">
            <Menu className="menu" mode="inline">
              <SubMenu
                title={
                  <span>
                    <img src={userImg} alt="user" />
                    <span>UserName</span>
                  </span>
                }
              >
                <Menu.Item key="1">User Info</Menu.Item>
              </SubMenu>
            </Menu>
          </div>

          <div className="flex">
            <SearchOutlined />
            <BellOutlined />
            <MessageOutlined />
          </div>
          <div className="separator">
            <hr />
          </div>

          <div className="navbar">
            <Menu
              className="navbarMenu"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<img src={dashboard} alt="dashboard" />} title="Dashboards">
                <Menu.Item icon={<img src={cmr} alt="cmr" />} key="3">
                  CRM
                </Menu.Item>
                <Menu.Item icon={<img src={crypto} alt="crypto" />} key="4">
                  Crypto
                </Menu.Item>
                <Menu.Item icon={<img src={listing} alt="listing" />} key="5">
                  Listing
                </Menu.Item>
              </SubMenu>
              <Menu.Item icon={<img src={widgets} alt="widgets" />} key="6">
                Widgets
              </Menu.Item>
              <Menu.Item icon={<img src={matrics} alt="matrics" />} key="7">
                Matrices
              </Menu.Item>
              <Menu.Item icon={<img src={algolia} alt="algolia" />} key="8">
                Algolia
              </Menu.Item>
              <SubMenu
                key="sub2"
                icon={<img src={settings} alt="settings" />}
                title="Components"
              ></SubMenu>

              <SubMenu
                key="sub3"
                icon={<img src={extension} alt="extension" />}
                title="Extensions"
              ></SubMenu>

              <SubMenu
                key="sub4"
                icon={<img src={custom} alt="custom" />}
                title="Custom Views"
              ></SubMenu>

              <SubMenu
                key="sub5"
                icon={<img src={social} alt="social" />}
                title="Social Apps"
              ></SubMenu>

              <SubMenu
                key="sub6"
                icon={<img src={inbuild} alt="inbuild" />}
                title="In-Build Apps"
              ></SubMenu>

              <SubMenu
                key="sub7"
                icon={<img src={documents} alt="documents" />}
                title="Documents"
              ></SubMenu>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
