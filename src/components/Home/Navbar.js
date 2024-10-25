import React, { useEffect, useState } from 'react';
import './Css/NavbarHome.css';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu, Drawer } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const NavbarHome = () => {
  const { t, i18n } = useTranslation();

  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const parsedLanguage = JSON.parse(savedLanguage);
      i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');  
      setCurrentLanguage(parsedLanguage); 
    }
  }, [i18n]);

  // Khởi tạo ngôn ngữ hiện tại
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage
      ? JSON.parse(savedLanguage)
      : {
        name: 'English',
        flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
      };
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);  // Thay đổi ngôn ngữ trong i18n
    const newLanguage = lng === 'en'
      ? {
        name: 'English',
        flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
      }
      : {
        name: 'Tiếng Việt',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
      };

    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', JSON.stringify(newLanguage)); // Lưu ngôn ngữ vào localStorage
  };

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
          {t('drawerMenu.education')}
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
          {t('drawerMenu.informationTechnology')}
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
          {t('drawerMenu.energy')}
        </NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
          {t('drawerMenu.legal')}
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage('en')}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
          alt="English"
          style={{ width: '20px', marginRight: '8px' }}
        />
        English
      </Menu.Item>
      <Menu.Item key="vi" onClick={() => changeLanguage('vi')}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
          alt="Tiếng Việt"
          style={{ width: '20px', marginRight: '8px' }}
        />
        Tiếng Việt
      </Menu.Item>
    </Menu>
  );

  const toggleIndustries = () => {
    setIndustriesExpanded(!isIndustriesExpanded);
  };

  return (
    <>
      <div className={isSticky ? 'navbar-home sticky' : 'navbar-home'}>
        <NavLink to={"/"} className="logo-navbar" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo16.png" alt="Logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
              {t('navbar.home')}
            </NavLink>
          </li>
          <li>
            <Dropdown overlay={industriesMenu}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                {t('navbar.industries')}
              </a>
            </Dropdown>
          </li>
          <li>
            <NavLink to="#" onClick={() => window.scrollTo(0, 0)}>
              {t('navbar.investorRelations')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={() => window.scrollTo(0, 0)}>
              {t('navbar.about')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={() => window.scrollTo(0, 0)}>
              {t('navbar.contact')}
            </NavLink>
          </li>
        </ul>
        <Dropdown overlay={languageMenu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img
              src={currentLanguage.flag}
              alt={currentLanguage.name}
              style={{ width: '20px', marginRight: '8px' }}
            />
            {currentLanguage.name} <span style={{ paddingLeft: '5px' }}>▼</span>
          </a>
        </Dropdown>

        <div className="hamburger-icon" onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: '30px' }} />
        </div>
      </div>
      <Drawer
        title={<span style={{ fontSize: '28px', fontWeight: 'bold', color: 'red', display: 'block' }}>Menu</span>}
        placement="right"
        onClose={closeDrawer}
        visible={isDrawerVisible}
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(5px)"
        }}
        closeIcon={
          <CloseOutlined
            style={{ fontSize: '28px', color: 'red', position: 'absolute', right: '20px', top: '30px' }}
          />
        }
      >
        <ul className="mobile-nav-links">
          <li><NavLink to="/" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}> {t('navbar.home')}</NavLink></li>
          <li onClick={toggleIndustries} style={{ cursor: 'pointer' }}>
            <span className='custom-texttt'>{t('navbar.industries')} {isIndustriesExpanded ? '-' : '+'}</span>
          </li>
          {isIndustriesExpanded && (
            <ul className="submenu">
              <li><NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>{t('drawerMenu.education')}</NavLink></li>
              <li><NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>{t('drawerMenu.informationTechnology')}</NavLink></li>
              <li><NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>{t('drawerMenu.energy')}</NavLink></li>
              <li><NavLink to="#" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>{t('drawerMenu.legal')}</NavLink></li>
            </ul>
          )}
          <li><NavLink to="/About" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>{t('navbar.investorRelations')}</NavLink></li>
          <li><NavLink to="/About" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>{t('navbar.about')}</NavLink></li>
          <li><NavLink to="/Contact" onClick={() => { window.scrollTo(0, 0); closeDrawer(); }}>{t('navbar.contact')}</NavLink></li>
        </ul>
      </Drawer>
    </>
  );
};

export default NavbarHome;
