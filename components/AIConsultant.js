function AIConsultant() {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([
      { 
        id: 1, 
        text: 'Hi! I\'m your AI project consultant. I can help you plan your digital project, estimate costs, and recommend the best solutions. What kind of project are you considering?', 
        sender: 'ai', 
        timestamp: new Date() 
      }
    ]);
    const [inputMessage, setInputMessage] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(false);

    const quickQuestions = [
      'I need a website for my business',
      'How much does a mobile app cost?',
      'What\'s included in branding services?',
      'I need an e-commerce platform'
    ];

    React.useEffect(() => {
      lucide.createIcons();
    }, [isOpen]);

    const generateAIResponse = async (userMessage) => {
      const systemPrompt = `You are an expert digital agency consultant. Help clients understand their project needs, provide cost estimates, and recommend solutions. Be professional, helpful, and concise.

Project Types:
- Website Development: $5,000-$25,000
- Mobile Apps: $15,000-$100,000  
- E-commerce: $10,000-$50,000
- Branding: $3,000-$15,000

Keep responses under 100 words and always end with a helpful question.`;

      try {
        const response = await invokeAIAgent(systemPrompt, userMessage);
        return response;
      } catch (error) {
        return "I'd be happy to help you with your project! Could you tell me more about what you're looking to build?";
      }
    };

    const sendMessage = async (messageText = inputMessage) => {
      if (!messageText.trim()) return;

      const userMessage = {
        id: messages.length + 1,
        text: messageText,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsTyping(true);

      const aiResponse = await generateAIResponse(messageText);
      
      setTimeout(() => {
        const aiMessage = {
          id: messages.length + 2,
          text: aiResponse,
          sender: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
    };

    const handleQuickQuestion = (question) => {
      sendMessage(question);
    };

    return React.createElement('div', {
      className: 'fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50',
      'data-name': 'ai-consultant',
      'data-file': 'components/AIConsultant.js'
    },
      isOpen && React.createElement('div', {
        className: 'mb-4 w-80 sm:w-96 h-96 sm:h-[500px] glass-effect-strong rounded-2xl overflow-hidden flex flex-col'
      },
        React.createElement('div', {
          className: 'bg-gradient-to-r from-purple-600 to-purple-700 p-3 sm:p-4 flex items-center justify-between'
        },
          React.createElement('div', {
            className: 'flex items-center space-x-2 sm:space-x-3'
          },
            React.createElement('div', {
              className: 'w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center'
            },
              React.createElement('i', {
                'data-lucide': 'brain',
                className: 'w-3 h-3 sm:w-4 sm:h-4 text-purple-600'
              })
            ),
            React.createElement('div', null,
              React.createElement('h4', {
                className: 'font-semibold text-white text-sm sm:text-base'
              }, 'AI Consultant'),
              React.createElement('p', {
                className: 'text-xs text-purple-100'
              }, 'Project Planning Assistant')
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
                  className: 'text-xs sm:text-sm leading-relaxed'
                }, message.text),
                React.createElement('p', {
                  className: 'text-xs opacity-70 mt-1'
                }, message.timestamp.toLocaleTimeString())
              )
            )
          ),
          
          isTyping && React.createElement('div', {
            className: 'flex justify-start'
          },
            React.createElement('div', {
              className: 'bg-gray-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg'
            },
              React.createElement('div', {
                className: 'loading-dots'
              },
                React.createElement('span'),
                React.createElement('span'),
                React.createElement('span')
              )
            )
          ),

          messages.length === 1 && React.createElement('div', {
            className: 'space-y-1 sm:space-y-2'
          },
            React.createElement('p', {
              className: 'text-xs text-gray-400 mb-2'
            }, 'Quick questions:'),
            quickQuestions.map((question, index) =>
              React.createElement('button', {
                key: index,
                onClick: () => handleQuickQuestion(question),
                className: 'block w-full text-left p-1.5 sm:p-2 text-xs bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'
              }, question)
            )
          )
        ),

        React.createElement('form', {
          onSubmit: (e) => { e.preventDefault(); sendMessage(); },
          className: 'p-3 sm:p-4 border-t border-gray-600'
        },
          React.createElement('div', {
            className: 'flex space-x-2'
          },
            React.createElement('input', {
              type: 'text',
              value: inputMessage,
              onChange: (e) => setInputMessage(e.target.value),
              placeholder: 'Ask about your project...',
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
        className: 'w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group'
      },
        React.createElement('i', {
          'data-lucide': isOpen ? 'x' : 'brain',
          className: 'w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform'
        })
      )
    );
  } catch (error) {
    console.error('AIConsultant component error:', error);
    reportError(error);
  }
}
