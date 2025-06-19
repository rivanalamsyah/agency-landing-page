function TechnologyStack() {
  try {
    const { isVisible, observeElement } = useScrollAnimation();

    const technologies = [
      { name: 'React', category: 'Frontend', icon: 'code', color: 'text-blue-400' },
      { name: 'Node.js', category: 'Backend', icon: 'server', color: 'text-green-400' },
      { name: 'AWS', category: 'Cloud', icon: 'cloud', color: 'text-orange-400' },
      { name: 'MongoDB', category: 'Database', icon: 'database', color: 'text-green-400' },
      { name: 'Docker', category: 'DevOps', icon: 'package', color: 'text-blue-400' },
      { name: 'Figma', category: 'Design', icon: 'palette', color: 'text-purple-400' },
      { name: 'TypeScript', category: 'Language', icon: 'code-2', color: 'text-blue-400' },
      { name: 'GraphQL', category: 'API', icon: 'share-2', color: 'text-pink-400' }
    ];

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('tech-section');
      return cleanup;
    }, [observeElement]);

    return React.createElement('section', {
      className: 'py-16 sm:py-20 bg-gradient-to-b from-gray-900/30 to-black/20 px-4 sm:px-6',
      'data-name': 'technology-stack',
      'data-file': 'components/TechnologyStack.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          id: 'tech-section',
          className: `text-center mb-12 sm:mb-16 fade-in ${isVisible['tech-section'] ? 'visible' : ''}`
        },
          React.createElement('h2', {
            className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'Teknologi Terdepan'),
          React.createElement('p', {
            className: 'text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4'
          }, 'Teknologi cutting-edge yang mendukung pengalaman digital luar biasa')
        ),

        React.createElement('div', {
          className: 'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6'
        },
          technologies.map((tech, index) =>
            React.createElement('div', {
              key: index,
              className: `glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover-lift group scale-in ${isVisible['tech-section'] ? 'visible' : ''}`,
              style: { transitionDelay: `${index * 100}ms` }
            },
              React.createElement('i', {
                'data-lucide': tech.icon,
                className: `w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 ${tech.color} group-hover:scale-110 transition-transform`
              }),
              React.createElement('h4', {
                className: 'font-semibold text-sm sm:text-base mb-1'
              }, tech.name),
              React.createElement('p', {
                className: 'text-xs text-gray-400'
              }, tech.category)
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('TechnologyStack component error:', error);
    reportError(error);
  }
}
