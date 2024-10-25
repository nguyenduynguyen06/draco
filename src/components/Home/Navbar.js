import React, { useEffect, useState } from 'react';
import './Css/NavbarHome.css'; // Updated the CSS filename
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu, Drawer } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const NavbarHome = () => {
  const [isSticky, setSticky] = useState(false);
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [isIndustriesExpanded, setIndustriesExpanded] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const industriesMenu = (
    <Menu className="custom-menu">
      <Menu.Item key="1">
        <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
          Education
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
          Information Technology
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
          Energy
        </NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
          Medical
        </NavLink>
      </Menu.Item>
    </Menu>
  );


  const toggleIndustries = () => {
    setIndustriesExpanded(!isIndustriesExpanded);
  };
  return (
    <>
      {/* Desktop Navbar */}
      <div className={isSticky ? 'navbar-home sticky' : 'navbar-home'}>
        <NavLink to={"/"} className="logo" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo16.png" alt="Logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
              Home
            </NavLink>
          </li>
          <li>
            <Dropdown overlay={industriesMenu}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Industries
              </a>
            </Dropdown>
          </li>
          <li>
            <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
              Investor Relations
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={() => window.scrollTo(0, 0)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={() => window.scrollTo(0, 0)}>
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-icon" onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: '30px' }} />
        </div>
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title={<span style={{ fontSize: '28px', fontWeight: 'bold', color: 'red', display: 'block' }}>Menu</span>}
        placement="right"
        onClose={closeDrawer}
        visible={isDrawerVisible}
        style={{ backgroundColor: "transparent" }}
        closeIcon={
          <CloseOutlined
            style={{ fontSize: '28px', color: 'red', position: 'absolute', right: '20px', top: '30px' }}
          />
        }  /* Manually setting position as fallback */
      >
        <ul className="mobile-nav-links">
          <li><NavLink to="/" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>Home</NavLink></li>
          <li onClick={toggleIndustries} style={{ cursor: 'pointer' }}>
            <span style={{ textDecoration: "none", fontSize: "24px", color: "red", fontWeight: "bold" }}>Industries {isIndustriesExpanded ? '-' : '+'}</span>
          </li>
          {isIndustriesExpanded && (
            <ul className="submenu">
              <li>
                <NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>Education</NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>Information Technology</NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>Energy</NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>Medical</NavLink>
              </li>
            </ul>
          )}
          <li><NavLink to="/About" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>Investor Relations</NavLink></li>
          <li><NavLink to="/About" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>About</NavLink></li>
          <li><NavLink to="/Contact" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>Contact</NavLink></li>
        </ul>
      </Drawer>
    </>
  );
};

export default NavbarHome;
