function About() {
  try {
    const { isVisible, observeElement } = useScrollAnimation();

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('about-section');
      return cleanup;
    }, [observeElement]);

    return React.createElement('section', {
      id: 'about',
      className: 'py-20',
      'data-name': 'about',
      'data-file': 'components/About.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6'
      },
        React.createElement('div', {
          id: 'about-section',
          className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'
        },
          React.createElement('div', {
            className: `slide-in-left ${isVisible['about-section'] ? 'visible' : ''}`
          },
            React.createElement('h2', {
              className: 'text-4xl md:text-5xl font-bold mb-6'
            }, 'Tentang DigitalKreatif'),
            React.createElement('p', {
              className: 'text-lg text-gray-300 mb-6'
            }, 'Kami adalah tim yang berdedikasi terdiri dari desainer, developer, dan strategis digital yang berpengalaman lebih dari 7 tahun dalam industri teknologi. Kami telah membantu berbagai bisnis dari startup hingga perusahaan besar mencapai tujuan digital mereka.'),
            React.createElement('p', {
              className: 'text-lg text-gray-300 mb-8'
            }, 'Pendekatan kami menggabungkan kreativitas dengan keahlian teknis untuk menghadirkan solusi yang tidak hanya terlihat menarik tetapi juga menghasilkan dampak bisnis yang nyata.'),
            
            React.createElement('div', {
              className: 'grid grid-cols-2 gap-6'
            },
              [
                { icon: 'users', title: 'Tim Ahli', desc: 'Profesional berpengalaman' },
                { icon: 'award', title: 'Kualitas Utama', desc: 'Keunggulan dalam delivery' },
                { icon: 'clock', title: 'Tepat Waktu', desc: 'Selalu memenuhi deadline' },
                { icon: 'shield', title: 'Terpercaya', desc: 'Dipercaya oleh klien' }
              ].map((item, index) =>
                React.createElement('div', {
                  key: index,
                  className: `flex items-center space-x-3 scale-in ${isVisible['about-section'] ? 'visible' : ''}`,
                  style: { transitionDelay: `${(index + 2) * 100}ms` }
                },
                  React.createElement('div', {
                    className: 'w-10 h-10 bg-purple-900 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors'
                  },
                    React.createElement('i', {
                      'data-lucide': item.icon,
                      className: 'w-5 h-5 text-purple-400'
                    })
                  ),
                  React.createElement('div', null,
                    React.createElement('h4', {
                      className: 'font-semibold'
                    }, item.title),
                    React.createElement('p', {
                      className: 'text-sm text-gray-400'
                    }, item.desc)
                  )
                )
              )
            )
          ),

          React.createElement('div', {
            className: `relative slide-in-right ${isVisible['about-section'] ? 'visible' : ''}`
          },
            React.createElement('img', {
              src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              alt: 'Tim kolaborasi DigitalKreatif',
              className: 'rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500'
            })
          )
        )
      )
    );
  } catch (error) {
    console.error('About component error:', error);
    reportError(error);
  }
}
