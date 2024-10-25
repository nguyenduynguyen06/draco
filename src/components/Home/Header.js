import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation(); 

  useEffect(() => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
          const parsedLanguage = JSON.parse(savedLanguage);
          i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');  
      }
  }, [i18n]); 
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>{t('HearderHome.HeaderTitle')}</h1>
    </header>
  );
}
export default Header;
