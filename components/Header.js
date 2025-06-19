function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
      lucide.createIcons();
    }, [isMenuOpen]);

    const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return React.createElement('header', {
      className: 'fixed top-0 w-full z-50 glass-effect-strong border-b border-white/10 h-16 sm:h-18 lg:h-20',
      'data-name': 'header',
      'data-file': 'components/Header.js'
    }, 
      React.createElement('nav', {
        className: 'container mx-auto px-4 sm:px-6 h-full flex items-center'
      },
        React.createElement('div', {
          className: 'flex items-center justify-between w-full'
        },
          React.createElement('div', {
            className: 'text-xl sm:text-2xl font-bold gradient-text tracking-tight'
          }, 'DigitalKreatif'),
          
          React.createElement('div', {
            className: 'hidden lg:flex items-center space-x-6 xl:space-x-8'
          },
            [
              { key: 'home', label: 'Beranda' },
              { key: 'services', label: 'Layanan' },
              { key: 'about', label: 'Tentang' },
              { key: 'portfolio', label: 'Portfolio' },
              { key: 'contact', label: 'Kontak' }
            ].map(item =>
              React.createElement('a', {
                key: item.key,
                href: `#${item.key}`,
                className: 'text-sm xl:text-base text-gray-300 hover:text-white transition-all duration-300 font-medium relative group py-2'
              }, 
                item.label,
                React.createElement('span', {
                  className: 'absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 group-hover:w-full'
                })
              )
            )
          ),

          React.createElement('div', {
            className: 'flex items-center space-x-2 sm:space-x-4'
          },
            React.createElement('button', {
              onClick: scrollToContact,
              className: 'hidden sm:block px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium text-sm sm:text-base'
            }, 'Mulai Proyek'),

            React.createElement('button', {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: 'lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center'
            },
              React.createElement('i', {
                'data-lucide': isMenuOpen ? 'x' : 'menu',
                className: 'w-5 h-5 sm:w-6 sm:h-6'
              })
            )
          )
        ),

        isMenuOpen && React.createElement('div', {
          className: 'absolute top-full left-0 right-0 lg:hidden bg-gray-900/95 backdrop-blur-lg border-b border-white/10 py-4 px-4 sm:px-6'
        },
          React.createElement('div', {
            className: 'space-y-1'
          },
            [
              { key: 'home', label: 'Beranda' },
              { key: 'services', label: 'Layanan' },
              { key: 'about', label: 'Tentang' },
              { key: 'portfolio', label: 'Portfolio' },
              { key: 'contact', label: 'Kontak' }
            ].map(item =>
              React.createElement('a', {
                key: item.key,
                href: `#${item.key}`,
                className: 'block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all text-base min-h-[44px] flex items-center',
                onClick: () => setIsMenuOpen(false)
              }, item.label)
            ),
            React.createElement('button', {
              onClick: () => {
                setIsMenuOpen(false);
                scrollToContact();
              },
              className: 'w-full mt-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium text-base'
            }, 'Mulai Proyek')
          )
        )
      )
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
  }
}
