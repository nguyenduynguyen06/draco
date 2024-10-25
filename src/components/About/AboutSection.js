import React, { useEffect } from 'react';
import './About.css';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next'; // Import hook dịch

const AboutSection = () => {
    const { t, i18n } = useTranslation(); 

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            const parsedLanguage = JSON.parse(savedLanguage);
            i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');  
        }
    }, [i18n]); 

    return (
        <>
            <Helmet>
                <title>{t('aboutPage.title')} | Draco Holding</title>
            </Helmet>
            <Navbar />
            <div className="about-section">
                <div className="about-section-text">
                    <h1>{t('aboutPage.title')}</h1>
                </div>
                <div className="about-section-image">
                    <img src="https://static.wixstatic.com/media/51a01d_4c356886dc58403f90c2f2b7bc3eff0e~mv2.png/v1/fill/w_1142,h_425,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/51a01d_4c356886dc58403f90c2f2b7bc3eff0e~mv2.png" alt="Technology" />
                </div>
            </div>
            <div className="about-description">
                <p>{t('aboutPage.description1')}</p>
                <p>{t('aboutPage.description2')}</p>
                <p>{t('aboutPage.description3')}</p>
            </div>
            <div className="container-aboutt">
                <NavLink to="#" className="item-about">{t('aboutPage.globalNetwork')}</NavLink>
                <NavLink to="#" className="item-about">{t('aboutPage.boardOfDirectors')}</NavLink>
                <NavLink to="#" className="item-about">{t('aboutPage.boardCommittees')}</NavLink>
                <NavLink to="#" className="item-about">{t('aboutPage.corporateInformation')}</NavLink>
                <NavLink to="#" className="item-about">{t('aboutPage.corporateGovernance')}</NavLink>
            </div>
            <div className="vision-section">
                <div className="vision-image">
                    <img src="https://static-images.vnncdn.net/files/publish/2023/9/26/chuyen-doi-so-2-807.jpg" alt="Vision Image" />
                </div>
                <div className="vision-content">
                    <h2>{t('aboutPage.visionTitle')}</h2>
                    <h3>{t('aboutPage.visionDescription')}</h3>
                    <ul>
                        <li><strong>{t('aboutPage.visionPoints.leadingInvestor')}</strong> {t('aboutPage.visionPoints.leadingInvestorDescription')}</li>
                        <li><strong>{t('aboutPage.visionPoints.capitalSupport')}</strong> {t('aboutPage.visionPoints.capitalSupportDescription')}</li>
                        <li><strong>{t('aboutPage.visionPoints.sustainableDevelopment')}</strong> {t('aboutPage.visionPoints.sustainableDevelopmentDescription')}</li>
                    </ul>
                    <h3>{t('aboutPage.visionDescription2')}</h3>
                </div>
            </div>
            <div className="vision-section">
                <div className="vision-content">
                    <h2>{t('aboutPage.missionTitle')}</h2>
                    <h3>{t('aboutPage.missionDescription')}</h3>
                    <ul>
                        <li><strong>{t('aboutPage.missionPoints.supportingGrowth')}</strong> {t('aboutPage.missionPoints.supportingGrowthDescription')}</li>
                        <li><strong>{t('aboutPage.missionPoints.buildingNetworks')}</strong> {t('aboutPage.missionPoints.buildingNetworksDescription')}</li>
                        <li><strong>{t('aboutPage.missionPoints.sustainableDevelopment')}</strong> {t('aboutPage.missionPoints.sustainableDevelopmentDescription')}</li>
                        <li><strong>{t('aboutPage.missionPoints.enhancingCapabilities')}</strong> {t('aboutPage.missionPoints.enhancingCapabilitiesDescription')}</li>
                        <li><strong>{t('aboutPage.missionPoints.creatingPartnerValue')}</strong> {t('aboutPage.missionPoints.creatingPartnerValueDescription')}</li>
                    </ul>
                </div>
                <div className="vision-image">
                    <img src="https://static.wixstatic.com/media/51a01d_7718489da01d4edb970bcd410aa81b06~mv2.png/v1/fill/w_951,h_698,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/51a01d_7718489da01d4edb970bcd410aa81b06~mv2.png" alt="Vision Image" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutSection;
