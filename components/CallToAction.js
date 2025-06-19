function CallToAction() {
  try {
    const { isVisible, observeElement } = useScrollAnimation();

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('cta-section');
      return cleanup;
    }, [observeElement]);

    const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return React.createElement('section', {
      className: 'py-20 sm:py-24 bg-gradient-to-r from-purple-900/20 via-purple-800/10 to-blue-900/20 px-4 sm:px-6',
      'data-name': 'call-to-action',
      'data-file': 'components/CallToAction.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          id: 'cta-section',
          className: `max-w-4xl mx-auto text-center fade-in ${isVisible['cta-section'] ? 'visible' : ''}`
        },
          React.createElement('div', {
            className: 'glass-effect-strong rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16'
          },
            React.createElement('div', {
              className: 'mb-6 sm:mb-8'
            },
              React.createElement('i', {
                'data-lucide': 'rocket',
                className: 'w-16 h-16 sm:w-20 sm:h-20 mx-auto text-purple-400 mb-6'
              }),
              React.createElement('h2', {
                className: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 gradient-text'
              }, 'Siap Bertransformasi?'),
              React.createElement('p', {
                className: 'text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-4'
              }, 'Mari ciptakan sesuatu yang luar biasa bersama-sama. Transformasi digital Anda dimulai dari satu percakapan.')
            ),

            React.createElement('div', {
              className: 'flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10'
            },
              React.createElement('button', {
                onClick: scrollToContact,
                className: 'w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 font-bold text-base sm:text-lg group'
              },
                React.createElement('span', {
                  className: 'flex items-center justify-center space-x-3'
                },
                  React.createElement('span', null, 'Mulai Proyek Anda'),
                  React.createElement('i', {
                    'data-lucide': 'arrow-right',
                    className: 'w-5 h-5 group-hover:translate-x-1 transition-transform'
                  })
                )
              ),
              React.createElement('div', {
                className: 'flex items-center space-x-2 text-sm sm:text-base text-gray-400'
              },
                React.createElement('i', {
                  'data-lucide': 'shield-check',
                  className: 'w-4 h-4 sm:w-5 sm:h-5 text-green-400'
                }),
                React.createElement('span', null, 'Konsultasi gratis • Tanpa komitmen')
              )
            ),

            React.createElement('div', {
              className: 'grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center'
            },
              [
                { icon: 'clock', label: 'Respon 24-48 Jam', desc: 'Mulai proyek dengan cepat' },
                { icon: 'users', label: 'Tim Dedikasi', desc: 'Partner kesuksesan Anda' },
                { icon: 'award', label: 'Hasil Terbukti', desc: '150+ proyek sukses' }
              ].map((feature, index) =>
                React.createElement('div', {
                  key: index,
                  className: 'scale-in',
                  style: { transitionDelay: `${(index + 1) * 200}ms` }
                },
                  React.createElement('i', {
                    'data-lucide': feature.icon,
                    className: 'w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-purple-400'
                  }),
                  React.createElement('h4', {
                    className: 'font-semibold text-sm sm:text-base mb-1'
                  }, feature.label),
                  React.createElement('p', {
                    className: 'text-xs sm:text-sm text-gray-400'
                  }, feature.desc)
                )
              )
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('CallToAction component error:', error);
    reportError(error);
  }
}
