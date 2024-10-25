import React, { useEffect } from 'react';
import './Css/NextStep.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NextStep = () => {
  const { t, i18n } = useTranslation(); 

  useEffect(() => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
          const parsedLanguage = JSON.parse(savedLanguage);
          i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');  
      }
  }, [i18n]); 
  return (
    <div className="next-step-container">
      <h2 className="title">{t('nextStepSection.title')}</h2>
      <div className="options">
        <div className="option">
          <h3 className="option-title">{t('nextStepSection.options.findSolution.title')}</h3>
          <p>{t('nextStepSection.options.findSolution.description')}</p>
          <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="action-button">{t('nextStepSection.options.findSolution.button')}</button>
          </NavLink>
        </div>
        <div className="option">
          <h3 className="option-title">{t('nextStepSection.options.forInvestors.title')}</h3>
          <p>{t('nextStepSection.options.forInvestors.description')}</p>
          <NavLink to="#">
            <button className="action-button">{t('nextStepSection.options.forInvestors.button')}</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NextStep;
