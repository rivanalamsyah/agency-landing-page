function Services() {
  try {
    const { isVisible, observeElement } = useScrollAnimation();
    const { visibleItems, triggerStagger } = useStaggerAnimation(150);

    const services = [
      {
        icon: 'code',
        title: 'Pengembangan Website',
        description: 'Website custom dan aplikasi web yang dibangun dengan teknologi terdepan dan praktik terbaik industri.',
        features: ['React & Next.js', 'Desain Responsif', 'Optimasi Performa']
      },
      {
        icon: 'palette',
        title: 'Strategi Brand',
        description: 'Pengembangan identitas brand dan strategi komprehensif untuk membuat bisnis Anda menonjol di pasar.',
        features: ['Desain Logo', 'Panduan Brand', 'Analisis Pasar']
      },
      {
        icon: 'smartphone',
        title: 'Aplikasi Mobile',
        description: 'Aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna yang luar biasa.',
        features: ['iOS & Android', 'Cross-platform', 'Optimasi App Store']
      },
      {
        icon: 'search',
        title: 'Optimasi SEO',
        description: 'Tingkatkan visibilitas online dan traffic organik dengan keahlian SEO advanced kami.',
        features: ['SEO Teknis', 'Strategi Konten', 'Setup Analytics']
      },
      {
        icon: 'megaphone',
        title: 'Digital Marketing',
        description: 'Kampanye digital marketing strategis yang mengkonversi pengunjung menjadi pelanggan setia.',
        features: ['Social Media', 'Kampanye PPC', 'Email Marketing']
      },
      {
        icon: 'headphones',
        title: 'Dukungan 24/7',
        description: 'Dukungan premium sepanjang waktu untuk memastikan aset digital Anda berkinerja optimal.',
        features: ['Live Chat', 'Dukungan Telepon', 'Respon Prioritas']
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('services-section');
      return cleanup;
    }, [observeElement]);

    React.useEffect(() => {
      if (isVisible['services-section']) {
        triggerStagger(services.length);
      }
    }, [isVisible, triggerStagger, services.length]);

    return React.createElement('section', {
      id: 'services',
      className: 'section-padding bg-gradient-to-b from-gray-900/50 to-gray-800/30 px-4 sm:px-6',
      'data-name': 'services',
      'data-file': 'components/Services.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          id: 'services-section',
          className: `text-center mb-12 sm:mb-16 lg:mb-20 fade-in ${isVisible['services-section'] ? 'visible' : ''}`
        },
          React.createElement('h2', {
            className: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 gradient-text px-4'
          }, 'Keahlian Kami'),
          React.createElement('p', {
            className: 'text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4'
          }, 'Kami menawarkan solusi digital komprehensif yang dirancang untuk membantu bisnis Anda berkembang di lanskap digital modern.')
        ),

        React.createElement('div', {
          className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
        },
          services.map((service, index) =>
            React.createElement('div', {
              key: index,
              className: `glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift group scale-in ${visibleItems.has(index) ? 'visible' : ''}`
            },
              React.createElement('div', {
                className: 'w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'
              },
                React.createElement('i', {
                  'data-lucide': service.icon,
                  className: 'w-6 h-6 sm:w-8 sm:h-8 text-white'
                })
              ),
              React.createElement('h3', {
                className: 'text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors'
              }, service.title),
              React.createElement('p', {
                className: 'text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed'
              }, service.description),
              React.createElement('ul', {
                className: 'space-y-2'
              },
                service.features.map((feature, idx) =>
                  React.createElement('li', {
                    key: idx,
                    className: 'flex items-center text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors'
                  },
                    React.createElement('i', {
                      'data-lucide': 'check',
                      className: 'w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mr-2 group-hover:text-purple-300 transition-colors flex-shrink-0'
                    }),
                    feature
                  )
                )
              )
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('Services component error:', error);
    reportError(error);
  }
}
