function Testimonials() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const { isVisible, observeElement } = useScrollAnimation();

    const testimonials = [
      {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        content: 'CreativeFlow transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.',
        rating: 5
      },
      {
        name: 'Michael Chen',
        role: 'Founder, InnovateHub',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        content: 'Working with CreativeFlow was a game-changer. They delivered a stunning website that perfectly captures our brand essence.',
        rating: 5
      },
      {
        name: 'Emily Rodriguez',
        role: 'Marketing Director, GrowthCo',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        content: 'The team\'s expertise in both design and development is remarkable. Our conversion rates increased by 150% after the redesign.',
        rating: 5
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('testimonials-section');
      return cleanup;
    }, [observeElement]);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return React.createElement('section', {
      className: 'section-padding bg-gradient-to-b from-purple-900/10 to-gray-900/20',
      'data-name': 'testimonials',
      'data-file': 'components/Testimonials.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6'
      },
        React.createElement('div', {
          id: 'testimonials-section',
          className: `text-center mb-16 fade-in ${isVisible['testimonials-section'] ? 'visible' : ''}`
        },
          React.createElement('h2', {
            className: 'text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'What Our Clients Say'),
          React.createElement('p', {
            className: 'text-xl text-gray-300 max-w-2xl mx-auto'
          }, 'Don\'t just take our word for it. Here\'s what our satisfied clients have to say about working with us.')
        ),

        React.createElement('div', {
          className: 'relative max-w-4xl mx-auto'
        },
          React.createElement('div', {
            className: `glass-effect rounded-2xl p-8 md:p-12 text-center scale-in ${isVisible['testimonials-section'] ? 'visible' : ''}`
          },
            React.createElement('div', {
              className: 'flex justify-center mb-6'
            },
              Array.from({ length: testimonials[currentIndex].rating }).map((_, i) =>
                React.createElement('i', {
                  key: i,
                  'data-lucide': 'star',
                  className: 'w-6 h-6 text-yellow-400 fill-current'
                })
              )
            ),

            React.createElement('p', {
              className: 'text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic'
            }, `"${testimonials[currentIndex].content}"`),

            React.createElement('div', {
              className: 'flex items-center justify-center space-x-4'
            },
              React.createElement('img', {
                src: testimonials[currentIndex].image,
                alt: testimonials[currentIndex].name,
                className: 'w-16 h-16 rounded-full object-cover border-2 border-purple-400'
              }),
              React.createElement('div', {
                className: 'text-left'
              },
                React.createElement('h4', {
                  className: 'font-semibold text-lg'
                }, testimonials[currentIndex].name),
                React.createElement('p', {
                  className: 'text-purple-400'
                }, testimonials[currentIndex].role)
              )
            )
          ),

          React.createElement('button', {
            onClick: prevTestimonial,
            className: 'absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
          },
            React.createElement('i', {
              'data-lucide': 'chevron-left',
              className: 'w-6 h-6'
            })
          ),

          React.createElement('button', {
            onClick: nextTestimonial,
            className: 'absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
          },
            React.createElement('i', {
              'data-lucide': 'chevron-right',
              className: 'w-6 h-6'
            })
          ),

          React.createElement('div', {
            className: 'flex justify-center space-x-2 mt-6'
          },
            testimonials.map((_, index) =>
              React.createElement('button', {
                key: index,
                onClick: () => setCurrentIndex(index),
                className: `w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-purple-400' : 'bg-gray-600'}`
              })
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    reportError(error);
  }
}
