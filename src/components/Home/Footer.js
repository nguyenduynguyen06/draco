import { Link, animateScroll as scroll } from 'react-scroll'
import "./Css/Footer.css";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
function Footer() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const parsedLanguage = JSON.parse(savedLanguage);
      i18n.changeLanguage(parsedLanguage.name === 'English' ? 'en' : 'vi');
    }
  }, [i18n]);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo" style={{ fontWeight: 'bolder' }}>{t('footer.logo')}</h1>
                <p className="footer-text" style={{ fontWeight: 'bolder' }}>
                  {t('footer.footerText')}
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">{t('footer.addressTitle')}</p>
                <ul>
                  <li>
                    <div style={{ fontSize: '18px' }}>{t('footer.address')}<br /></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p className="footer-title">{t('footer.contactTitle')}</p>
              <ul>
                <li>
                  <div style={{ fontSize: '18px' }}>{t('footer.email')}</div>
                </li>
                <li>
                  <div style={{ fontSize: '18px' }}>{t('footer.hotline')}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i> {t('footer.goTop')}
      </button>
    </footer>
  );
}
export default Footer;
