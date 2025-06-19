function Portfolio() {
  try {
    const { isVisible, observeElement } = useScrollAnimation();
    const [loadingStates, setLoadingStates] = React.useState({});
    const [activeFilter, setActiveFilter] = React.useState('All');

    const projects = [
      {
        title: 'E-commerce Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['React', 'E-commerce', 'Responsive']
      },
      {
        title: 'Brand Identity',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Branding', 'Logo', 'Identity']
      },
      {
        title: 'Mobile Banking App',
        category: 'Mobile Development',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Mobile', 'Banking', 'iOS']
      },
      {
        title: 'SaaS Dashboard',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Dashboard', 'SaaS', 'Analytics']
      }
    ];

    const filters = ['All', 'Web Development', 'Design', 'Mobile Development'];

    const filteredProjects = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('portfolio-section');
      return cleanup;
    }, [observeElement]);

    const handleProjectClick = (index) => {
      setLoadingStates(prev => ({ ...prev, [index]: true }));
      setTimeout(() => {
        setLoadingStates(prev => ({ ...prev, [index]: false }));
        alert(`Opening ${filteredProjects[index].title} project details...`);
      }, 1500);
    };

    return React.createElement('section', {
      id: 'portfolio',
      className: 'py-20 bg-gray-900/30',
      'data-name': 'portfolio',
      'data-file': 'components/Portfolio.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6'
      },
        React.createElement('div', {
          id: 'portfolio-section',
          className: `text-center mb-16 fade-in ${isVisible['portfolio-section'] ? 'visible' : ''}`
        },
          React.createElement('h2', {
            className: 'text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'Our Portfolio'),
          React.createElement('p', {
            className: 'text-xl text-gray-300 max-w-2xl mx-auto mb-8'
          }, 'Explore some of our recent projects and see how we have helped businesses achieve their goals.')
        ),

        React.createElement('div', {
          className: 'flex flex-wrap justify-center gap-4 mb-12'
        },
          filters.map(filter =>
            React.createElement('button', {
              key: filter,
              onClick: () => setActiveFilter(filter),
              className: `px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'glass-effect text-gray-300 hover:bg-white/10'
              }`
            }, filter)
          )
        ),

        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-8'
        },
          filteredProjects.map((project, index) =>
            React.createElement('div', {
              key: project.title,
              className: `glass-effect rounded-xl overflow-hidden hover-lift group cursor-pointer scale-in ${isVisible['portfolio-section'] ? 'visible' : ''}`,
              style: { transitionDelay: `${index * 100}ms` },
              onClick: () => handleProjectClick(index)
            },
              React.createElement('div', {
                className: 'relative overflow-hidden'
              },
                React.createElement('img', {
                  src: project.image,
                  alt: project.title,
                  className: 'w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
                }),
                React.createElement('div', {
                  className: 'absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'
                },
                  loadingStates[index] ? 
                    React.createElement('div', {
                      className: 'loading-dots text-white'
                    },
                      React.createElement('span'),
                      React.createElement('span'),
                      React.createElement('span')
                    ) :
                    React.createElement('button', {
                      className: 'px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-purple-100 transition-colors'
                    }, 'View Project')
                )
              ),
              React.createElement('div', {
                className: 'p-6'
              },
                React.createElement('h3', {
                  className: 'text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors'
                }, project.title),
                React.createElement('p', {
                  className: 'text-purple-400 mb-3'
                }, project.category),
                React.createElement('div', {
                  className: 'flex flex-wrap gap-2'
                },
                  project.tags.map(tag =>
                    React.createElement('span', {
                      key: tag,
                      className: 'px-2 py-1 bg-gray-800 text-xs rounded-md text-gray-300'
                    }, tag)
                  )
                )
              )
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    reportError(error);
  }
}
