function App() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return React.createElement(LanguageProvider, null,
      React.createElement(ThemeProvider, null,
        React.createElement('div', {
          className: 'min-h-screen',
          'data-name': 'app',
          'data-file': 'app.js'
        },
          React.createElement(NotificationSystem, null),
          React.createElement(Header, null),
          React.createElement(Hero, null),
          React.createElement(Services, null),
          React.createElement(About, null),
          React.createElement(TeamSection, null),
          React.createElement(ProcessFlow, null),
          React.createElement(TechnologyStack, null),
          React.createElement(PricingCalculator, null),
          React.createElement(Portfolio, null),
          React.createElement(ClientDashboard, null),
          React.createElement(CRMIntegration, null),
          React.createElement(SecurityDashboard, null),
          React.createElement(PerformanceMonitor, null),
          React.createElement(Analytics, null),
          React.createElement(Testimonials, null),
          React.createElement(FAQ, null),
          React.createElement(CallToAction, null),
          React.createElement(Contact, null),
          React.createElement(Footer, null),
          React.createElement(LiveChat, null),
          React.createElement(AIConsultant, null)
        )
      )
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
