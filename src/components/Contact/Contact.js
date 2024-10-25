import React, { useEffect, useState } from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import "./contact.css";
import Header from "../Home/Header";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showMap = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const parsedLanguage = JSON.parse(savedLanguage);
      i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');
    }
  }, [i18n]);
  return (
    <div>
      <Helmet>
        <title>{t('contactPage.pageTitle')}</title>
      </Helmet>
      <Navbar />
      <div className="contact-us-container">
        <div
          className="contact-us-header"
          style={{ backgroundImage: `url(./contactUs.png)` }}
        >
          <h2>{t('contactPage.headerTitle')}</h2>
          <span className="hihi">{t('contactPage.contactUs')}</span>
        </div>
        <div className="contact-us-cards">
          <div className="contact-card">
            <EnvironmentOutlined className="icon-style" />
            <h3>{t('contactPage.cards.address.title')}</h3>
            <p>
              {t('contactPage.cards.address.line1')} <br />
              {t('contactPage.cards.address.line2')} <br />
              {t('contactPage.cards.address.line3')}
            </p>
          </div>
          <div className="contact-card">
            <PhoneOutlined className="icon-style" />
            <h3>{t('contactPage.cards.phone.title')}</h3>
            <p>{t('contactPage.cards.phone.number')}</p>
          </div>
          <div className="contact-card">
            <MailOutlined className="icon-style" />
            <h3>{t('contactPage.cards.mail.title')}</h3>
            <p>{t('contactPage.cards.mail.email')}</p>
          </div>
        </div>

        <Modal
          title={t('contactPage.modalTitle')}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="map-container">
            <iframe
              src="https://www.google.gg/maps/place/Ph%C6%B0%E1%BB%9Dng+7+Ph%C3%BA+Nhu%E1%BA%ADn,+Ph%C6%B0%E1%BB%9Dng+7,+Ph%C3%BA+Nhu%E1%BA%ADn,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8028711,106.6889026,19z/data=!3m1!4b1!4m6!3m5!1s0x317528c5227901c9:0xec6f0dbb33f10779!8m2!3d10.8028711!4d106.6895463!16s%2Fg%2F11k3p1_w50?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="450"
              style={{ borderRadius: "15px", border: "1px solid #2D947A" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="contact-map"
            ></iframe>
          </div>
        </Modal>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;