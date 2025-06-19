function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi';
      if (!formData.email.trim()) {
        newErrors.email = 'Email wajib diisi';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Format email tidak valid';
      }
      if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';
      if (formData.phone && !/^[\d\s\-\(\)\+]{10,}$/.test(formData.phone)) {
        newErrors.phone = 'Nomor telepon tidak valid';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSubmitting(true);
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setIsSubmitting(false);
      }, 2000);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
      }
    };

    return React.createElement('section', {
      id: 'contact',
      className: 'section-padding px-4 sm:px-6',
      'data-name': 'contact',
      'data-file': 'components/Contact.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          className: 'text-center mb-12 sm:mb-16'
        },
          React.createElement('h2', {
            className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'Hubungi Kami'),
          React.createElement('p', {
            className: 'text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4'
          }, 'Siap memulai proyek berikutnya? Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda.')
        ),

        React.createElement('div', {
          className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto'
        },
          React.createElement('div', null,
            React.createElement('h3', {
              className: 'text-xl sm:text-2xl font-semibold mb-6'
            }, 'Informasi Kontak'),
            
            [
              { icon: 'mail', title: 'Email', info: 'hello@digitalkreatif.id' },
              { icon: 'phone', title: 'Telepon', info: '+62 21 2345 6789' },
              { icon: 'map-pin', title: 'Alamat', info: 'Jl. Sudirman No. 123, Jakarta Pusat 10220' },
              { icon: 'clock', title: 'Jam Kerja', info: 'Senin - Jumat: 09:00 - 18:00 WIB' }
            ].map((contact, index) =>
              React.createElement('div', {
                key: index,
                className: 'flex items-start space-x-4 mb-6'
              },
                React.createElement('div', {
                  className: 'w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'
                },
                  React.createElement('i', {
                    'data-lucide': contact.icon,
                    className: 'w-6 h-6 text-white'
                  })
                ),
                React.createElement('div', null,
                  React.createElement('h4', {
                    className: 'font-semibold text-lg mb-1'
                  }, contact.title),
                  React.createElement('p', {
                    className: 'text-gray-300'
                  }, contact.info)
                )
              )
            )
          ),

          React.createElement('form', {
            onSubmit: handleSubmit,
            className: 'glass-effect rounded-2xl p-8'
          },
            React.createElement('div', {
              className: 'grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'
            },
              React.createElement('div', null,
                React.createElement('label', {
                  className: 'block text-sm font-medium mb-2'
                }, 'Nama Lengkap *'),
                React.createElement('input', {
                  type: 'text',
                  name: 'name',
                  value: formData.name,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-600'} bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500`,
                  placeholder: 'Masukkan nama lengkap'
                }),
                errors.name && React.createElement('p', {
                  className: 'text-red-400 text-sm mt-1'
                }, errors.name)
              ),
              React.createElement('div', null,
                React.createElement('label', {
                  className: 'block text-sm font-medium mb-2'
                }, 'Email *'),
                React.createElement('input', {
                  type: 'email',
                  name: 'email',
                  value: formData.email,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-600'} bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500`,
                  placeholder: 'nama@email.com'
                }),
                errors.email && React.createElement('p', {
                  className: 'text-red-400 text-sm mt-1'
                }, errors.email)
              )
            ),

            React.createElement('div', {
              className: 'grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'
            },
              React.createElement('div', null,
                React.createElement('label', {
                  className: 'block text-sm font-medium mb-2'
                }, 'Nomor Telepon'),
                React.createElement('input', {
                  type: 'tel',
                  name: 'phone',
                  value: formData.phone,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-600'} bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500`,
                  placeholder: '+62 812 3456 7890'
                }),
                errors.phone && React.createElement('p', {
                  className: 'text-red-400 text-sm mt-1'
                }, errors.phone)
              ),
              React.createElement('div', null,
                React.createElement('label', {
                  className: 'block text-sm font-medium mb-2'
                }, 'Nama Perusahaan'),
                React.createElement('input', {
                  type: 'text',
                  name: 'company',
                  value: formData.company,
                  onChange: handleChange,
                  className: 'w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500',
                  placeholder: 'PT. Perusahaan Anda'
                })
              )
            ),

            React.createElement('div', {
              className: 'mb-6'
            },
              React.createElement('label', {
                className: 'block text-sm font-medium mb-2'
              }, 'Pesan *'),
              React.createElement('textarea', {
                name: 'message',
                value: formData.message,
                onChange: handleChange,
                rows: 4,
                className: `w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-600'} bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500`,
                placeholder: 'Ceritakan tentang proyek yang Anda inginkan...'
              }),
              errors.message && React.createElement('p', {
                className: 'text-red-400 text-sm mt-1'
              }, errors.message)
            ),

            React.createElement('button', {
              type: 'submit',
              disabled: isSubmitting,
              className: 'w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-semibold disabled:opacity-50 flex items-center justify-center space-x-2'
            },
              isSubmitting && React.createElement('div', {
                className: 'loading-dots'
              },
                React.createElement('span'),
                React.createElement('span'),
                React.createElement('span')
              ),
              React.createElement('span', null, isSubmitting ? 'Mengirim...' : 'Kirim Pesan'),
              !isSubmitting && React.createElement('i', {
                'data-lucide': 'send',
                className: 'w-5 h-5'
              })
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('Contact component error:', error);
    reportError(error);
  }
}
