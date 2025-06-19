function NotificationSystem() {
  try {
    const [notifications, setNotifications] = React.useState([]);

    React.useEffect(() => {
      lucide.createIcons();
    }, [notifications]);

    const addNotification = React.useCallback((notification) => {
      const id = Date.now();
      const newNotification = { ...notification, id };
      
      setNotifications(prev => [...prev, newNotification]);
      
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 5000);
    }, []);

    React.useEffect(() => {
      const notifications = [
        { type: 'success', title: 'Project Update', message: 'Design phase completed for TechCorp website' },
        { type: 'info', title: 'New Lead', message: 'Potential client inquiry from healthcare industry' },
        { type: 'warning', title: 'Deadline Alert', message: 'Mobile app project due in 3 days' }
      ];

      let index = 0;
      const interval = setInterval(() => {
        if (index < notifications.length) {
          addNotification(notifications[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 3000);

      return () => clearInterval(interval);
    }, [addNotification]);

    const removeNotification = (id) => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const getIcon = (type) => {
      switch (type) {
        case 'success': return 'check-circle';
        case 'warning': return 'alert-triangle';
        case 'error': return 'x-circle';
        default: return 'info';
      }
    };

    const getColor = (type) => {
      switch (type) {
        case 'success': return 'border-green-500 bg-green-500/10';
        case 'warning': return 'border-yellow-500 bg-yellow-500/10';
        case 'error': return 'border-red-500 bg-red-500/10';
        default: return 'border-blue-500 bg-blue-500/10';
      }
    };

    return React.createElement('div', {
      className: 'fixed top-16 sm:top-20 right-2 sm:right-6 z-50 space-y-2 sm:space-y-3 max-w-xs sm:max-w-sm',
      'data-name': 'notification-system',
      'data-file': 'components/NotificationSystem.js'
    },
      notifications.map(notification =>
        React.createElement('div', {
          key: notification.id,
          className: `glass-effect-strong rounded-lg p-3 sm:p-4 border-l-4 ${getColor(notification.type)} transform transition-all duration-300 hover:scale-105`
        },
          React.createElement('div', {
            className: 'flex items-start justify-between'
          },
            React.createElement('div', {
              className: 'flex items-start space-x-2 sm:space-x-3 flex-1'
            },
              React.createElement('i', {
                'data-lucide': getIcon(notification.type),
                className: `w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${
                  notification.type === 'success' ? 'text-green-400' :
                  notification.type === 'warning' ? 'text-yellow-400' :
                  notification.type === 'error' ? 'text-red-400' : 'text-blue-400'
                }`
              }),
              React.createElement('div', {
                className: 'min-w-0 flex-1'
              },
                React.createElement('h4', {
                  className: 'font-semibold text-xs sm:text-sm mb-1 truncate'
                }, notification.title),
                React.createElement('p', {
                  className: 'text-xs text-gray-300 leading-tight'
                }, notification.message)
              )
            ),
            React.createElement('button', {
              onClick: () => removeNotification(notification.id),
              className: 'text-gray-400 hover:text-white transition-colors p-1 flex-shrink-0'
            },
              React.createElement('i', {
                'data-lucide': 'x',
                className: 'w-3 h-3 sm:w-4 sm:h-4'
              })
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('NotificationSystem component error:', error);
    reportError(error);
  }
}
