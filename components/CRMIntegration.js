function CRMIntegration() {
  try {
    const [leads, setLeads] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const sampleLeads = [
      {
        id: 1,
        name: 'Sarah Johnson',
        company: 'TechStart Inc',
        email: 'sarah@techstart.com',
        project: 'E-commerce Platform',
        value: 25000,
        status: 'qualified'
      },
      {
        id: 2,
        name: 'Michael Chen',
        company: 'InnovateHub',
        email: 'mike@innovatehub.com',
        project: 'Mobile App',
        value: 45000,
        status: 'proposal'
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        company: 'GrowthCo',
        email: 'emily@growthco.com',
        project: 'Brand Identity',
        value: 8000,
        status: 'negotiation'
      }
    ];

    React.useEffect(() => {
      lucide.createIcons();
      loadLeads();
    }, []);

    const loadLeads = async () => {
      setIsLoading(true);
      setTimeout(() => {
        setLeads(sampleLeads);
        setIsLoading(false);
      }, 1000);
    };

    const getStatusColor = (status) => {
      switch (status) {
        case 'qualified': return 'bg-blue-500/20 text-blue-400';
        case 'proposal': return 'bg-yellow-500/20 text-yellow-400';
        case 'negotiation': return 'bg-purple-500/20 text-purple-400';
        case 'closed': return 'bg-green-500/20 text-green-400';
        default: return 'bg-gray-500/20 text-gray-400';
      }
    };

    const totalValue = leads.reduce((sum, lead) => sum + lead.value, 0);
    const qualifiedLeads = leads.filter(lead => lead.status === 'qualified').length;

    return React.createElement('section', {
      className: 'section-padding bg-gradient-to-b from-gray-900/20 to-purple-900/10 px-4 sm:px-6',
      'data-name': 'crm-integration',
      'data-file': 'components/CRMIntegration.js'
    },
      React.createElement('div', {
        className: 'container mx-auto'
      },
        React.createElement('div', {
          className: 'text-center mb-8 sm:mb-12'
        },
          React.createElement('h2', {
            className: 'text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text'
          }, 'Lead Management'),
          React.createElement('p', {
            className: 'text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4'
          }, 'Advanced CRM integration for efficient lead tracking and conversion optimization')
        ),

        React.createElement('div', {
          className: 'grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8'
        },
          React.createElement('div', {
            className: 'glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 text-center'
          },
            React.createElement('div', {
              className: 'text-2xl sm:text-3xl font-bold gradient-text mb-2'
            }, leads.length),
            React.createElement('p', {
              className: 'text-sm text-gray-400'
            }, 'Total Leads')
          ),
          React.createElement('div', {
            className: 'glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 text-center'
          },
            React.createElement('div', {
              className: 'text-2xl sm:text-3xl font-bold gradient-text mb-2'
            }, qualifiedLeads),
            React.createElement('p', {
              className: 'text-sm text-gray-400'
            }, 'Qualified Leads')
          ),
          React.createElement('div', {
            className: 'glass-effect rounded-lg sm:rounded-xl p-4 sm:p-6 text-center'
          },
            React.createElement('div', {
              className: 'text-2xl sm:text-3xl font-bold gradient-text mb-2'
            }, `$${totalValue.toLocaleString()}`),
            React.createElement('p', {
              className: 'text-sm text-gray-400'
            }, 'Pipeline Value')
          )
        ),

        React.createElement('div', {
          className: 'glass-effect rounded-lg sm:rounded-xl overflow-hidden'
        },
          React.createElement('div', {
            className: 'p-4 sm:p-6 border-b border-gray-600'
          },
            React.createElement('h3', {
              className: 'text-lg sm:text-xl font-semibold'
            }, 'Recent Leads')
          ),
          
          isLoading ? React.createElement('div', {
            className: 'p-8 sm:p-12 text-center'
          },
            React.createElement('div', {
              className: 'loading-dots mx-auto'
            },
              React.createElement('span'),
              React.createElement('span'),
              React.createElement('span')
            )
          ) : React.createElement('div', {
            className: 'overflow-x-auto responsive-table'
          },
            React.createElement('div', {
              className: 'min-w-full'
            },
              leads.map(lead =>
                React.createElement('div', {
                  key: lead.id,
                  className: 'border-b border-gray-600 p-4 sm:p-6 hover:bg-gray-800/30 transition-colors'
                },
                  React.createElement('div', {
                    className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4'
                  },
                    React.createElement('div', {
                      className: 'flex-1'
                    },
                      React.createElement('h4', {
                        className: 'font-semibold text-sm sm:text-base text-white mb-1'
                      }, lead.name),
                      React.createElement('p', {
                        className: 'text-xs sm:text-sm text-gray-400'
                      }, `${lead.company} • ${lead.email}`)
                    ),
                    React.createElement('div', {
                      className: 'flex items-center justify-between sm:justify-end gap-3 sm:gap-6'
                    },
                      React.createElement('div', {
                        className: 'text-right'
                      },
                        React.createElement('p', {
                          className: 'font-semibold text-sm sm:text-base'
                        }, `$${lead.value.toLocaleString()}`),
                        React.createElement('p', {
                          className: 'text-xs text-gray-400'
                        }, lead.project)
                      ),
                      React.createElement('span', {
                        className: `px-2 py-1 text-xs rounded-full ${getStatusColor(lead.status)}`
                      }, lead.status.charAt(0).toUpperCase() + lead.status.slice(1))
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  } catch (error) {
    console.error('CRMIntegration component error:', error);
    reportError(error);
  }
}
