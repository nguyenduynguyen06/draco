import React, { useEffect } from 'react';
import './Css/Content.css';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const parsedLanguage = JSON.parse(savedLanguage);
      i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');
    }
  }, [i18n]);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="business-automation-container">
      <div className="business-content">
        <h2 className="main-title">{t('businessAutomation.mainTitle')}</h2>
        <p className="description">{t('businessAutomation.description1')}</p>
        <p className="description">{t('businessAutomation.description2')}</p>
        <p className="description">{t('businessAutomation.description3')}</p>
        <button className="grow-button" onClick={scrollToBottom}>
          {t('businessAutomation.buttonText')}
        </button>
      </div>
    </div>
  );
};

export default Content;
