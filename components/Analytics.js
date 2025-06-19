function Analytics() {
  try {
    const [analyticsData, setAnalyticsData] = React.useState({
      visitors: { current: 12847, growth: 15.3 },
      conversions: { current: 342, growth: 8.7 },
      revenue: { current: 89650, growth: 22.1 },
      satisfaction: { current: 4.8, growth: 5.2 }
    });

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    const metrics = [
      {
        key: 'visitors',
        label: 'Website Visitors',
        icon: 'users',
        color: 'text-blue-400',
        prefix: '',
        suffix: ''
      },
      {
        key: 'conversions',
        label: 'Conversions',
        icon: 'target',
        color: 'text-green-400',
        prefix: '',
        suffix: ''
      },
      {
        key: 'revenue',
        label: 'Revenue',
        icon: 'dollar-sign',
        color: 'text-purple-400',
        prefix: '$',
        suffix: ''
      },
      {
        key: 'satisfaction',
        label: 'Client Satisfaction',
        icon: 'star',
        color: 'text-yellow-400',
        prefix: '',
        suffix: '/5'
      }
    ];

    return React.createElement('section', {
      className: 'py-16 bg-gradient-to-b from-gray-900/30 to-black/20',
      'data-name': 'analytics',
      'data-file': 'components/Analytics.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6'
      },
        React.createElement('div', {
          className: 'text-center mb-12'
        },
          React.createElement('h2', {
            className: 'text-3xl md:text-4xl font-bold mb-4 gradient-text'
          }, 'Performance Analytics'),
          React.createElement('p', {
            className: 'text-lg text-gray-300 max-w-2xl mx-auto'
          }, 'Real-time insights into our agency performance and client success metrics')
        ),

        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        },
          metrics.map(metric =>
            React.createElement('div', {
              key: metric.key,
              className: 'glass-effect rounded-xl p-6 hover-lift group'
            },
              React.createElement('div', {
                className: 'flex items-center justify-between mb-4'
              },
                React.createElement('div', {
                  className: `w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform`
                },
                  React.createElement('i', {
                    'data-lucide': metric.icon,
                    className: `w-6 h-6 ${metric.color}`
                  })
                ),
                React.createElement('div', {
                  className: `text-xs px-2 py-1 rounded-full ${
                    analyticsData[metric.key].growth > 0 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`
                },
                  `+${analyticsData[metric.key].growth}%`
                )
              ),
              React.createElement('div', {
                className: 'text-2xl font-bold mb-1'
              }, `${metric.prefix}${analyticsData[metric.key].current.toLocaleString()}${metric.suffix}`),
              React.createElement('p', {
                className: 'text-sm text-gray-400'
              }, metric.label)
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('Analytics component error:', error);
    reportError(error);
  }
}
