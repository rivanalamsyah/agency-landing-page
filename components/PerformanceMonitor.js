function PerformanceMonitor() {
  try {
    const [metrics, setMetrics] = React.useState({
      pageLoad: 2.1,
      apiResponse: 150,
      errorRate: 0.02,
      throughput: 1250
    });

    React.useEffect(() => {
      lucide.createIcons();
      
      // Simulate real-time metrics updates
      const interval = setInterval(() => {
        setMetrics(prev => ({
          pageLoad: Math.max(1.5, prev.pageLoad + (Math.random() - 0.5) * 0.2),
          apiResponse: Math.max(100, prev.apiResponse + (Math.random() - 0.5) * 20),
          errorRate: Math.max(0, Math.min(1, prev.errorRate + (Math.random() - 0.5) * 0.01)),
          throughput: Math.max(800, prev.throughput + (Math.random() - 0.5) * 100)
        }));
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    const performanceMetrics = [
      { 
        label: 'Page Load Time', 
        value: `${metrics.pageLoad.toFixed(1)}s`, 
        icon: 'zap',
        status: metrics.pageLoad < 3 ? 'good' : 'warning'
      },
      { 
        label: 'API Response', 
        value: `${Math.round(metrics.apiResponse)}ms`, 
        icon: 'activity',
        status: metrics.apiResponse < 200 ? 'good' : 'warning'
      },
      { 
        label: 'Error Rate', 
        value: `${(metrics.errorRate * 100).toFixed(2)}%`, 
        icon: 'alert-circle',
        status: metrics.errorRate < 0.05 ? 'good' : 'error'
      },
      { 
        label: 'Throughput', 
        value: `${Math.round(metrics.throughput)}/min`, 
        icon: 'trending-up',
        status: metrics.throughput > 1000 ? 'good' : 'warning'
      }
    ];

    const getStatusColor = (status) => {
      switch (status) {
        case 'good': return 'text-green-400 bg-green-500/20';
        case 'warning': return 'text-yellow-400 bg-yellow-500/20';
        case 'error': return 'text-red-400 bg-red-500/20';
        default: return 'text-gray-400 bg-gray-500/20';
      }
    };

    return React.createElement('section', {
      className: 'py-12 sm:py-16 bg-gradient-to-b from-black/20 to-gray-900/30 px-4 sm:px-6',
      'data-name': 'performance-monitor',
      'data-file': 'components/PerformanceMonitor.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          className: 'text-center mb-8 sm:mb-12'
        },
          React.createElement('h2', {
            className: 'text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text'
          }, 'Performance Monitor'),
          React.createElement('p', {
            className: 'text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4'
          }, 'Real-time performance metrics and system health monitoring')
        ),

        React.createElement('div', {
          className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'
        },
          performanceMetrics.map((metric, index) =>
            React.createElement('div', {
              key: index,
              className: 'glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 hover-lift group'
            },
              React.createElement('div', {
                className: 'flex items-center justify-between mb-4'
              },
                React.createElement('i', {
                  'data-lucide': metric.icon,
                  className: 'w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover:scale-110 transition-transform'
                }),
                React.createElement('div', {
                  className: `px-2 py-1 rounded-full text-xs ${getStatusColor(metric.status)}`
                }, metric.status.toUpperCase())
              ),
              React.createElement('div', {
                className: 'text-xl sm:text-2xl font-bold mb-2'
              }, metric.value),
              React.createElement('p', {
                className: 'text-xs sm:text-sm text-gray-400'
              }, metric.label)
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('PerformanceMonitor component error:', error);
    reportError(error);
  }
}
