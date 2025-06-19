function Hero() {
  try {
    const { isVisible, observeElement } = useScrollAnimation();
    const parallaxOffset = useParallax(0.3);

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('hero-content');
      return cleanup;
    }, [observeElement]);

    const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToPortfolio = () => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return React.createElement('section', {
      id: 'home',
      className: 'min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-28',
      'data-name': 'hero',
      'data-file': 'components/Hero.js'
    },
      React.createElement('div', {
        className: 'absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20',
        style: { transform: `translateY(${parallaxOffset}px)` }
      }),
      
      React.createElement('div', {
        className: 'container mx-auto text-center relative z-10 max-w-6xl'
      },
        React.createElement('div', {
          id: 'hero-content',
          className: `w-full fade-in ${isVisible['hero-content'] ? 'visible' : ''}`
        },
          React.createElement('div', {
            className: 'mb-4 sm:mb-6 inline-flex items-center px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300'
          },
            React.createElement('i', {
              'data-lucide': 'sparkles',
              className: 'w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-400'
            }),
            'Selamat datang di masa depan digital Indonesia'
          ),

          React.createElement('h1', {
            className: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight px-2'
          },
            React.createElement('span', {
              className: 'gradient-text block'
            }, 'Transformasi'),
            React.createElement('span', {
              className: 'text-gradient'
            }, 'Digital Anda')
          ),

          React.createElement('p', {
            className: 'text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto font-light px-4'
          }, 'Kami menciptakan pengalaman digital yang luar biasa untuk mengembangkan bisnis Anda. Partner terpercaya untuk transformasi digital perusahaan modern di Indonesia.'),

          React.createElement('div', {
            className: 'flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4'
          },
            React.createElement('button', {
              onClick: scrollToContact,
              className: 'w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-base sm:text-lg group'
            },
              React.createElement('span', null, 'Mulai Proyek Anda'),
              React.createElement('i', {
                'data-lucide': 'arrow-right',
                className: 'w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform'
              })
            ),

            React.createElement('button', {
              onClick: scrollToPortfolio,
              className: 'w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg border-white/20'
            }, 'Lihat Portfolio')
          ),

          React.createElement('div', {
            className: 'grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 px-4'
          },
            [
              { number: '150+', label: 'Proyek Selesai' },
              { number: '80+', label: 'Klien Puas' },
              { number: '7+', label: 'Tahun Pengalaman' },
              { number: '24/7', label: 'Dukungan Premium' }
            ].map((stat, index) =>
              React.createElement('div', {
                key: index,
                className: `text-center group scale-in ${isVisible['hero-content'] ? 'visible' : ''}`,
                style: { transitionDelay: `${index * 100}ms` }
              },
                React.createElement('div', {
                  className: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-2 sm:mb-3 group-hover:scale-110 transition-transform'
                }, stat.number),
                React.createElement('div', {
                  className: 'text-xs sm:text-sm text-gray-400 font-medium tracking-wide'
                }, stat.label)
              )
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}
