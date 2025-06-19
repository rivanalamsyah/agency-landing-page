function TeamSection() {
  try {
    const { isVisible, observeElement } = useScrollAnimation();
    const { visibleItems, triggerStagger } = useStaggerAnimation(200);

    const team = [
      {
        name: 'Andi Pratama',
        role: 'Creative Director',
        expertise: 'Strategi Brand & Desain',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        skills: ['UI/UX Design', 'Brand Identity', 'Creative Strategy']
      },
      {
        name: 'Sari Wulandari',
        role: 'Lead Developer',
        expertise: 'Full-Stack Development',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        skills: ['React/Node.js', 'Cloud Architecture', 'DevOps']
      },
      {
        name: 'Budi Santoso',
        role: 'Digital Strategist',
        expertise: 'Growth & Analytics',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        skills: ['SEO/SEM', 'Data Analytics', 'Optimasi Konversi']
      },
      {
        name: 'Maya Kusuma',
        role: 'Project Manager',
        expertise: 'Agile Delivery',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
        skills: ['Agile/Scrum', 'Client Relations', 'Quality Assurance']
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
      const cleanup = observeElement('team-section');
      return cleanup;
    }, [observeElement]);

    React.useEffect(() => {
      if (isVisible['team-section']) {
        triggerStagger(team.length);
      }
    }, [isVisible, triggerStagger, team.length]);

    return React.createElement('section', {
      className: 'section-padding bg-gradient-to-b from-purple-900/5 to-gray-900/20 px-4 sm:px-6',
      'data-name': 'team-section',
      'data-file': 'components/TeamSection.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          id: 'team-section',
          className: `text-center mb-12 sm:mb-16 fade-in ${isVisible['team-section'] ? 'visible' : ''}`
        },
          React.createElement('h2', {
            className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text'
          }, 'Tim Profesional Kami'),
          React.createElement('p', {
            className: 'text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4'
          }, 'Profesional berbakat yang berdedikasi untuk mewujudkan visi digital Anda')
        ),

        React.createElement('div', {
          className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'
        },
          team.map((member, index) =>
            React.createElement('div', {
              key: index,
              className: `glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover-lift scale-in ${visibleItems.has(index) ? 'visible' : ''}`
            },
              React.createElement('div', {
                className: 'relative mb-6'
              },
                React.createElement('img', {
                  src: member.image,
                  alt: member.name,
                  className: 'w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-purple-500/30'
                }),
                React.createElement('div', {
                  className: 'absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900'
                })
              ),
              React.createElement('h3', {
                className: 'text-lg sm:text-xl font-bold mb-2'
              }, member.name),
              React.createElement('p', {
                className: 'text-purple-400 font-medium mb-2'
              }, member.role),
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-4'
              }, member.expertise),
              React.createElement('div', {
                className: 'space-y-1'
              },
                member.skills.map((skill, idx) =>
                  React.createElement('span', {
                    key: idx,
                    className: 'inline-block px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300 mr-1 mb-1'
                  }, skill)
                )
              )
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('TeamSection component error:', error);
    reportError(error);
  }
}
