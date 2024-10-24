import { Dropdown, Menu } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  function openBar() {
    const bar = document.querySelector(".bar");
    bar.classList.toggle("opened");
  }

  const industriesMenu = (
    <Menu>
      <Menu.Item>
        <NavLink
          to="#"
          onClick={() => {
            window.scrollTo(0, 0);  // Scroll to top on click
          }}
          style={{ color: "red", fontSize: "18px" }}
        >
          Education
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to="#"
          onClick={() => {

            window.scrollTo(0, 0);
          }}
          style={{ color: "red", fontSize: "18px" }}
        >
          Information Technology
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to="#"
          onClick={() => {

            window.scrollTo(0, 0);
          }}
          style={{ color: "red", fontSize: "18px" }}
        >
          Energy
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <NavLink to="/" className="logo" onClick={() => window.scrollTo(0, 0)}  >
            <img
              src="./logo14.png"
              alt="Logo"
              style={{ width: "200px", height: "50px", objectFit: "contain" }}
            />
          </NavLink>
          <ul className="bar">
            <li>
              <NavLink
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                style={{ color: "red", fontSize: "22px", fontWeight: "normal" }}
              >
                Home
              </NavLink>
            </li>
            <li style={{ position: "relative", listStyleType: "none" }}>
              <li style={{ position: "relative" }}>
                <Dropdown
                  overlay={industriesMenu}
                  trigger={["click"]}
                  placement="bottomLeft"
                >
                  <a
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: "red",
                      fontSize: "22px",
                      fontWeight: "normal",
                      cursor: "pointer",
                    }}
                  >
                    Industries
                  </a>
                </Dropdown>
              </li>
            </li>
            <li>
              <NavLink
                to="#"
                onClick={() => window.scrollTo(0, 0)}
                style={{ color: "red", fontSize: "22px", fontWeight: "normal" }}
              >
                Investor Relations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                style={{ color: "red", fontSize: "22px", fontWeight: "normal" }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                style={{ color: "red", fontSize: "22px", fontWeight: "normal" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger2"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
