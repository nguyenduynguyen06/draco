import React, { useEffect } from 'react';
import './Css/Advantage.css';
import { useTranslation } from 'react-i18next';

const Advantage = () => {
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
        <section className="isdn-advantage">
            {/* Section hình ảnh với tiêu đề */}
            <div className="advantage-image">
                <h1 className="advantage-title">{t('advantageSection.title')}</h1>
            </div>

            {/* Phần này chứa các hình ảnh khác mà bạn đã thêm */}
            <div className="advantage-cards">
                <div className="card-advantage">
                    <img src="/Experiance.png" alt="Image 1" />
                    <div className="card-advantage-content">
                        <strong>{t('advantageSection.cards.experience.title')}</strong>
                        <div>{t('advantageSection.cards.experience.description')}</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="/Industries.png" alt="Image 2" />
                    <div className="card-advantage-content">
                        <strong>{t('advantageSection.cards.industries.title')}</strong>
                        <div>{t('advantageSection.cards.industries.description')}</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="/Technologiess.png" alt="Image 3" />
                    <div className="card-advantage-content">
                        <strong>{t('advantageSection.cards.technologies.title')}</strong>
                        <div>{t('advantageSection.cards.technologies.description')}</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="/Local.png" alt="Image 4" />
                    <div className="card-advantage-content">
                        <strong>{t('advantageSection.cards.local.title')}</strong>
                        <div>{t('advantageSection.cards.local.description')}</div>
                    </div>
                </div>
                <div className="card-advantage">
                    <img src="Result.png" alt="Image 5" />
                    <div className="card-advantage-content">
                        <strong>{t('advantageSection.cards.results.title')}</strong>
                        <div>{t('advantageSection.cards.results.description')}</div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "50px" }}>
                <div>
                    {t('advantageSection.description').split('\n').map((line, index) => (
                        <p style={{ fontSize: "20px",color:'black' }}key={index}>{line}</p>
                    ))}
                </div>
                <button className="grow-button" onClick={scrollToBottom}>{t('advantageSection.buttonText')}</button>
            </div>
        </section>
    );
};

export default Advantage;
