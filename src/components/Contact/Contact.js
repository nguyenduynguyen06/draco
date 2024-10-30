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
          <div className="contact-card"  onClick={showMap}>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.520714718376!2d106.83431057583897!3d10.847943257868891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317520bf41923763%3A0x9cadf5732a6c4b1a!2zMTM1IFBoxrDhu5tjIFRoaeG7h24sIExvbmcgVGjhuqFuaCBN4bu5LCBRdeG6rW4gOSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1730188882968!5m2!1svi!2s"
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