// Internationalization utilities
const LanguageContext = React.createContext();

function LanguageProvider({ children }) {
  try {
    const [currentLanguage, setCurrentLanguage] = React.useState('en');
    
    const translations = {
      en: {
        hero: {
          title: 'Transform Your Digital',
          subtitle: 'We craft exceptional digital experiences that drive growth and inspire innovation for forward-thinking businesses in the modern era.',
          cta: 'Start Your Project',
          viewWork: 'View Our Work'
        },
        navigation: {
          home: 'Home',
          services: 'Services',
          about: 'About',
          portfolio: 'Portfolio',
          contact: 'Contact'
        },
        services: {
          title: 'Our Expertise',
          webDev: 'Web Development',
          branding: 'Brand Strategy',
          mobile: 'Mobile Apps'
        }
      },
      es: {
        hero: {
          title: 'Transforma Tu Digital',
          subtitle: 'Creamos experiencias digitales excepcionales que impulsan el crecimiento e inspiran innovación para empresas visionarias.',
          cta: 'Iniciar Proyecto',
          viewWork: 'Ver Nuestro Trabajo'
        },
        navigation: {
          home: 'Inicio',
          services: 'Servicios',
          about: 'Acerca',
          portfolio: 'Portafolio',
          contact: 'Contacto'
        },
        services: {
          title: 'Nuestra Experiencia',
          webDev: 'Desarrollo Web',
          branding: 'Estrategia de Marca',
          mobile: 'Apps Móviles'
        }
      }
    };

    const t = (key) => {
      const keys = key.split('.');
      let value = translations[currentLanguage];
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return value || key;
    };

    const switchLanguage = (lang) => {
      setCurrentLanguage(lang);
    };

    return React.createElement(LanguageContext.Provider, {
      value: { currentLanguage, switchLanguage, t }
    }, children);
  } catch (error) {
    console.error('LanguageProvider error:', error);
    reportError(error);
  }
}

function useTranslation() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context;
}
