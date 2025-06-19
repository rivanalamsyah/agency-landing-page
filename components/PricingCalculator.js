function PricingCalculator() {
  try {
    const [formData, setFormData] = React.useState({
      projectType: '',
      complexity: '',
      timeline: '',
      features: [],
      budget: ''
    });
    const [estimate, setEstimate] = React.useState(null);
    const [isCalculating, setIsCalculating] = React.useState(false);

    const projectTypes = [
      { id: 'website', name: 'Pengembangan Website', basePrice: 25000000 },
      { id: 'mobile', name: 'Aplikasi Mobile', basePrice: 75000000 },
      { id: 'ecommerce', name: 'Platform E-commerce', basePrice: 50000000 },
      { id: 'branding', name: 'Identitas Brand', basePrice: 15000000 }
    ];

    const complexityLevels = [
      { id: 'basic', name: 'Basic', multiplier: 1 },
      { id: 'standard', name: 'Standard', multiplier: 1.5 },
      { id: 'premium', name: 'Premium', multiplier: 2.2 },
      { id: 'enterprise', name: 'Enterprise', multiplier: 3 }
    ];

    const features = [
      { id: 'cms', name: 'Content Management', price: 10000000 },
      { id: 'analytics', name: 'Integrasi Analytics', price: 7500000 },
      { id: 'seo', name: 'Optimasi SEO', price: 12500000 },
      { id: 'payment', name: 'Payment Gateway', price: 15000000 },
      { id: 'api', name: 'Integrasi API', price: 20000000 }
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    const calculateEstimate = async () => {
      setIsCalculating(true);
      
      setTimeout(() => {
        const projectType = projectTypes.find(p => p.id === formData.projectType);
        const complexity = complexityLevels.find(c => c.id === formData.complexity);
        
        if (projectType && complexity) {
          const basePrice = projectType.basePrice * complexity.multiplier;
          const featuresPrice = formData.features.reduce((total, featureId) => {
            const feature = features.find(f => f.id === featureId);
            return total + (feature ? feature.price : 0);
          }, 0);
          
          const timelineMultiplier = formData.timeline === 'rush' ? 1.3 : 1;
          const totalPrice = (basePrice + featuresPrice) * timelineMultiplier;
          
          setEstimate({
            basePrice,
            featuresPrice,
            totalPrice: Math.round(totalPrice),
            timeline: formData.timeline === 'rush' ? '2-4 minggu' : '4-8 minggu'
          });
        }
        setIsCalculating(false);
      }, 2000);
    };

    const handleFeatureToggle = (featureId) => {
      setFormData(prev => ({
        ...prev,
        features: prev.features.includes(featureId)
          ? prev.features.filter(id => id !== featureId)
          : [...prev.features, featureId]
      }));
    };

    const formatPrice = (price) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(price);
    };

    return React.createElement('section', {
      className: 'section-padding bg-gradient-to-b from-gray-900/20 to-purple-900/10 px-4 sm:px-6',
      'data-name': 'pricing-calculator',
      'data-file': 'components/PricingCalculator.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          className: 'text-center mb-8 sm:mb-12'
        },
          React.createElement('h2', {
            className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'Kalkulator Proyek'),
          React.createElement('p', {
            className: 'text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4'
          }, 'Dapatkan estimasi instan untuk proyek Anda menggunakan kalkulator bertenaga AI kami')
        ),

        React.createElement('div', {
          className: 'max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'
        },
          React.createElement('div', {
            className: 'glass-effect rounded-xl lg:rounded-2xl p-6 sm:p-8'
          },
            React.createElement('h3', {
              className: 'text-xl sm:text-2xl font-semibold mb-6'
            }, 'Detail Proyek'),

            React.createElement('div', {
              className: 'space-y-6'
            },
              React.createElement('div', null,
                React.createElement('label', {
                  className: 'block text-sm font-medium mb-3'
                }, 'Jenis Proyek'),
                React.createElement('div', {
                  className: 'grid grid-cols-1 sm:grid-cols-2 gap-3'
                },
                  projectTypes.map(type =>
                    React.createElement('button', {
                      key: type.id,
                      onClick: () => setFormData(prev => ({ ...prev, projectType: type.id })),
                      className: `p-3 sm:p-4 rounded-lg border text-sm sm:text-base transition-all min-h-[48px] ${
                        formData.projectType === type.id
                          ? 'border-purple-500 bg-purple-500/20 text-white'
                          : 'border-gray-600 hover:border-gray-500 text-gray-300'
                      }`
                    }, type.name)
                  )
                )
              ),

              React.createElement('div', null,
                React.createElement('label', {
                  className: 'block text-sm font-medium mb-3'
                }, 'Tingkat Kompleksitas'),
                React.createElement('select', {
                  value: formData.complexity,
                  onChange: (e) => setFormData(prev => ({ ...prev, complexity: e.target.value })),
                  className: 'w-full px-4 py-3 sm:py-4 rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base min-h-[48px]'
                },
                  React.createElement('option', { value: '' }, 'Pilih kompleksitas'),
                  complexityLevels.map(level =>
                    React.createElement('option', {
                      key: level.id,
                      value: level.id
                    }, level.name)
                  )
                )
              ),

              React.createElement('div', null,
                React.createElement('label', {
                  className: 'block text-sm font-medium mb-3'
                }, 'Fitur Tambahan'),
                React.createElement('div', {
                  className: 'space-y-3'
                },
                  features.map(feature =>
                    React.createElement('label', {
                      key: feature.id,
                      className: 'flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-800/50 transition-colors min-h-[44px]'
                    },
                      React.createElement('input', {
                        type: 'checkbox',
                        checked: formData.features.includes(feature.id),
                        onChange: () => handleFeatureToggle(feature.id),
                        className: 'w-4 h-4 rounded border-gray-600 bg-gray-800 text-purple-600 focus:ring-purple-500'
                      }),
                      React.createElement('span', {
                        className: 'text-sm sm:text-base flex-1'
                      }, `${feature.name} (+${formatPrice(feature.price)})`)
                    )
                  )
                )
              ),

              React.createElement('button', {
                onClick: calculateEstimate,
                disabled: !formData.projectType || !formData.complexity || isCalculating,
                className: 'w-full px-6 py-3 sm:py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base font-medium min-h-[48px]'
              },
                isCalculating && React.createElement('div', {
                  className: 'loading-dots'
                },
                  React.createElement('span'),
                  React.createElement('span'),
                  React.createElement('span')
                ),
                React.createElement('span', null, isCalculating ? 'Menghitung...' : 'Hitung Estimasi')
              )
            )
          ),

          React.createElement('div', {
            className: 'glass-effect rounded-xl lg:rounded-2xl p-6 sm:p-8'
          },
            React.createElement('h3', {
              className: 'text-xl sm:text-2xl font-semibold mb-6'
            }, 'Hasil Estimasi'),
            
            estimate ? React.createElement('div', {
              className: 'space-y-6'
            },
              React.createElement('div', {
                className: 'border-b border-gray-600 pb-4 space-y-2'
              },
                React.createElement('div', {
                  className: 'flex justify-between text-sm sm:text-base'
                },
                  React.createElement('span', null, 'Harga Dasar:'),
                  React.createElement('span', null, formatPrice(estimate.basePrice))
                ),
                React.createElement('div', {
                  className: 'flex justify-between text-sm sm:text-base'
                },
                  React.createElement('span', null, 'Fitur Tambahan:'),
                  React.createElement('span', null, formatPrice(estimate.featuresPrice))
                )
              ),
              React.createElement('div', {
                className: 'text-2xl sm:text-3xl font-bold gradient-text'
              }, `Total: ${formatPrice(estimate.totalPrice)}`),
              React.createElement('div', {
                className: 'text-sm text-gray-400'
              }, `Estimasi Waktu: ${estimate.timeline}`),
              React.createElement('button', {
                className: 'w-full mt-6 px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base font-medium min-h-[48px]'
              }, 'Minta Penawaran Detail')
            ) : React.createElement('div', {
              className: 'text-center text-gray-400 py-8 sm:py-12'
            },
              React.createElement('i', {
                'data-lucide': 'calculator',
                className: 'w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50'
              }),
              React.createElement('p', {
                className: 'text-sm sm:text-base'
              }, 'Isi formulir untuk mendapatkan estimasi proyek Anda')
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('PricingCalculator component error:', error);
    reportError(error);
  }
}
