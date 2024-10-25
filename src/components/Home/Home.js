import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Industries from "./Industries";
import NextStep from "./NextStep";
import Content from "./Content";
import Advantage from "./Advantage";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Home() {
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
        <title>{t('HearderHome.Title')}</title>
      </Helmet>
      <Navbar />
      <Header />
      <Content />
      <Advantage/>
      <Industries/>
      <NextStep/>
      <Footer />
    </>
  );
}

export default Home;
