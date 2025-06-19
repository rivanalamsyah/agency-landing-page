function Footer() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return React.createElement('footer', {
      className: 'bg-gray-900 dark:bg-black text-white py-12',
      'data-name': 'footer',
      'data-file': 'components/Footer.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6'
      },
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-4 gap-8'
        },
          React.createElement('div', null,
            React.createElement('h3', {
              className: 'text-2xl font-bold gradient-text mb-4'
            }, 'DigitalKreatif'),
            React.createElement('p', {
              className: 'text-gray-400 mb-4'
            }, 'Mentransformasi bisnis melalui solusi digital inovatif dan keunggulan kreatif untuk masa depan yang lebih baik.'),
            React.createElement('div', {
              className: 'flex space-x-4'
            },
              ['facebook', 'twitter', 'linkedin', 'instagram'].map(social =>
                React.createElement('a', {
                  key: social,
                  href: '#',
                  className: 'w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors'
                },
                  React.createElement('i', {
                    'data-lucide': social,
                    className: 'w-5 h-5'
                  })
                )
              )
            )
          ),

          React.createElement('div', null,
            React.createElement('h4', {
              className: 'text-lg font-semibold mb-4'
            }, 'Layanan'),
            ['Pengembangan Website', 'Strategi Brand', 'Aplikasi Mobile', 'Optimasi SEO'].map(service =>
              React.createElement('a', {
                key: service,
                href: '#',
                className: 'block text-gray-400 hover:text-white mb-2 transition-colors'
              }, service)
            )
          ),

          React.createElement('div', null,
            React.createElement('h4', {
              className: 'text-lg font-semibold mb-4'
            }, 'Perusahaan'),
            ['Tentang Kami', 'Portfolio', 'Karir', 'Kontak'].map(link =>
              React.createElement('a', {
                key: link,
                href: '#',
                className: 'block text-gray-400 hover:text-white mb-2 transition-colors'
              }, link)
            )
          ),

          React.createElement('div', null,
            React.createElement('h4', {
              className: 'text-lg font-semibold mb-4'
            }, 'Kontak'),
            React.createElement('div', {
              className: 'space-y-2'
            },
              React.createElement('p', {
                className: 'text-gray-400'
              }, 'Jl. Sudirman No. 123'),
              React.createElement('p', {
                className: 'text-gray-400'
              }, 'Jakarta Pusat 10220'),
              React.createElement('p', {
                className: 'text-gray-400'
              }, '+62 21 2345 6789'),
              React.createElement('p', {
                className: 'text-gray-400'
              }, 'hello@digitalkreatif.id')
            )
          )
        ),

        React.createElement('div', {
          className: 'border-t border-gray-700 mt-8 pt-8 text-center text-gray-400'
        },
          React.createElement('p', null, '© 2024 DigitalKreatif. Semua hak dilindungi.')
        )
      )
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
  }
}
