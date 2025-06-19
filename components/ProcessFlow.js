function ProcessFlow() {
  try {
    const [activeStep, setActiveStep] = React.useState(0);
    const { isVisible, observeElement } = useScrollAnimation();

    const steps = [
      {
        title: 'Riset & Strategi',
        description: 'Kami menganalisis tujuan bisnis Anda, target audiens, dan lanskap kompetitif untuk menciptakan strategi komprehensif.',
        icon: 'search',
        duration: '1-2 minggu'
      },
      {
        title: 'Desain & Prototipe',
        description: 'Tim desain kami membuat wireframe, mockup, dan prototipe interaktif berdasarkan brand dan kebutuhan Anda.',
        icon: 'palette',
        duration: '2-3 minggu'
      },
      {
        title: 'Pengembangan & Testing',
        description: 'Kami membangun solusi Anda menggunakan teknologi terdepan dan melakukan pengujian menyeluruh untuk memastikan kualitas.',
        icon: 'code',
        duration: '4-8 minggu'
      },
      {
        title: 'Peluncuran & Optimasi',
        description: 'Kami melakukan deploy proyek Anda dan memberikan dukungan berkelanjutan, monitoring, dan optimasi untuk performa puncak.',
        icon: 'rocket',
        duration: 'Berkelanjutan'
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('process-section');
      return cleanup;
    }, [observeElement]);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [steps.length]);

    return React.createElement('section', {
      className: 'py-20 bg-gradient-to-b from-purple-900/10 to-gray-900/20',
      'data-name': 'process-flow',
      'data-file': 'components/ProcessFlow.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6'
      },
        React.createElement('div', {
          id: 'process-section',
          className: `text-center mb-16 fade-in ${isVisible['process-section'] ? 'visible' : ''}`
        },
          React.createElement('h2', {
            className: 'text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'Proses Kami'),
          React.createElement('p', {
            className: 'text-xl text-gray-300 max-w-2xl mx-auto'
          }, 'Metodologi terbukti yang menghasilkan hasil luar biasa untuk setiap proyek')
        ),

        React.createElement('div', {
          className: 'max-w-6xl mx-auto'
        },
          React.createElement('div', {
            className: 'grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'
          },
            steps.map((step, index) =>
              React.createElement('div', {
                key: index,
                className: `text-center cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`,
                onClick: () => setActiveStep(index)
              },
                React.createElement('div', {
                  className: `w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-purple-600 shadow-lg shadow-purple-500/25' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`
                },
                  React.createElement('i', {
                    'data-lucide': step.icon,
                    className: `w-8 h-8 ${activeStep === index ? 'text-white' : 'text-gray-400'}`
                  })
                ),
                React.createElement('h3', {
                  className: `font-semibold mb-2 ${activeStep === index ? 'text-white' : 'text-gray-400'}`
                }, step.title),
                React.createElement('p', {
                  className: 'text-xs text-purple-400'
                }, step.duration)
              )
            )
          ),

          React.createElement('div', {
            className: 'glass-effect rounded-2xl p-8 text-center'
          },
            React.createElement('h3', {
              className: 'text-2xl font-bold mb-4'
            }, steps[activeStep].title),
            React.createElement('p', {
              className: 'text-gray-300 leading-relaxed max-w-2xl mx-auto'
            }, steps[activeStep].description)
          )
        )
      )
    );
  } catch (error) {
    console.error('ProcessFlow component error:', error);
    reportError(error);
  }
}
