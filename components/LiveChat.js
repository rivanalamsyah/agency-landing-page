function LiveChat() {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([
      { id: 1, text: 'Hello! How can we help you today?', sender: 'agent', timestamp: new Date() }
    ]);
    const [inputMessage, setInputMessage] = React.useState('');

    React.useEffect(() => {
      lucide.createIcons();
    }, [isOpen]);

    const sendMessage = (e) => {
      e.preventDefault();
      if (!inputMessage.trim()) return;

      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages([...messages, newMessage]);
      setInputMessage('');

      setTimeout(() => {
        const agentResponse = {
          id: messages.length + 2,
          text: 'Thank you for your message! Our team will get back to you shortly.',
          sender: 'agent',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, agentResponse]);
      }, 1000);
    };

    return React.createElement('div', {
      className: 'fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50',
      'data-name': 'live-chat',
      'data-file': 'components/LiveChat.js'
    },
      isOpen && React.createElement('div', {
        className: 'mb-4 w-80 sm:w-96 h-80 sm:h-96 glass-effect-strong rounded-2xl overflow-hidden flex flex-col'
      },
        React.createElement('div', {
          className: 'bg-purple-600 p-3 sm:p-4 flex items-center justify-between'
        },
          React.createElement('div', {
            className: 'flex items-center space-x-2 sm:space-x-3'
          },
            React.createElement('div', {
              className: 'w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center'
            },
              React.createElement('i', {
                'data-lucide': 'headphones',
                className: 'w-3 h-3 sm:w-4 sm:h-4 text-purple-600'
              })
            ),
            React.createElement('div', null,
              React.createElement('h4', {
                className: 'font-semibold text-white text-sm sm:text-base'
              }, 'Live Support'),
              React.createElement('p', {
                className: 'text-xs text-purple-100'
              }, 'We\'re online')
            )
          ),
          React.createElement('button', {
            onClick: () => setIsOpen(false),
            className: 'text-white hover:text-purple-200 p-1'
          },
            React.createElement('i', {
              'data-lucide': 'x',
              className: 'w-4 h-4 sm:w-5 sm:h-5'
            })
          )
        ),

        React.createElement('div', {
          className: 'flex-1 p-3 sm:p-4 overflow-y-auto space-y-2 sm:space-y-3'
        },
          messages.map(message =>
            React.createElement('div', {
              key: message.id,
              className: `flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`
            },
              React.createElement('div', {
                className: `max-w-xs px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-100'
                }`
              },
                React.createElement('p', {
                  className: 'text-xs sm:text-sm'
                }, message.text),
                React.createElement('p', {
                  className: 'text-xs opacity-70 mt-1'
                }, message.timestamp.toLocaleTimeString())
              )
            )
          )
        ),

        React.createElement('form', {
          onSubmit: sendMessage,
          className: 'p-3 sm:p-4 border-t border-gray-600'
        },
          React.createElement('div', {
            className: 'flex space-x-2'
          },
            React.createElement('input', {
              type: 'text',
              value: inputMessage,
              onChange: (e) => setInputMessage(e.target.value),
              placeholder: 'Type your message...',
              className: 'flex-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-700 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
            }),
            React.createElement('button', {
              type: 'submit',
              className: 'px-2 sm:px-3 py-1.5 sm:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
            },
              React.createElement('i', {
                'data-lucide': 'send',
                className: 'w-3 h-3 sm:w-4 sm:h-4'
              })
            )
          )
        )
      ),

      React.createElement('button', {
        onClick: () => setIsOpen(!isOpen),
        className: 'w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group'
      },
        React.createElement('i', {
          'data-lucide': isOpen ? 'x' : 'message-circle',
          className: 'w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform'
        })
      )
    );
  } catch (error) {
    console.error('LiveChat component error:', error);
    reportError(error);
  }
}
