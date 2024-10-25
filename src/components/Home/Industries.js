import React, { useEffect } from 'react';
import './Css/Industries.css';
import { useTranslation } from 'react-i18next';

const Industries = () => {
  const { t, i18n } = useTranslation(); 

  useEffect(() => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
          const parsedLanguage = JSON.parse(savedLanguage);
          i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');  
      }
  }, [i18n]); 
  return (
    <div className="industries">
      <div className="industries-grid">
        <div className="industry-card">
          <h2>{t('industriesSection.cards.education')}</h2>
        </div>
        <div className="industry-card">
          <h2>&nbsp;&nbsp; {t('industriesSection.cards.informationTechnology')}&nbsp;&nbsp;</h2>
        </div>
        <div className="industry-card">
          <h2>{t('industriesSection.cards.energy')}</h2>
        </div>
        <div className="industry-card">
          <h2>{t('industriesSection.cards.legal')}</h2>
        </div>
      </div>
      <div style={{ padding: '0px 20px' }}></div>
      <div className="industries-content">
        <h1>{t('industriesSection.content.mainTitle')}</h1>
        <p>{t('industriesSection.content.description1')}</p>
        <p>{t('industriesSection.content.description2')}</p>
        <p>{t('industriesSection.content.description3')}</p>
      </div>
    </div>
  );
};

export default Industries;
