// Business logic utilities for advanced features
const useBusinessMetrics = () => {
  const [metrics, setMetrics] = React.useState({
    projectsCompleted: 0,
    clientSatisfaction: 0,
    averageProjectValue: 0,
    onTimeDelivery: 0
  });

  React.useEffect(() => {
    // Simulate real-time metrics updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        projectsCompleted: Math.min(prev.projectsCompleted + Math.floor(Math.random() * 3), 200),
        clientSatisfaction: Math.min(prev.clientSatisfaction + 0.1, 4.9),
        averageProjectValue: Math.min(prev.averageProjectValue + 100, 25000),
        onTimeDelivery: Math.min(prev.onTimeDelivery + 0.5, 98.5)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
};

// Project estimation AI logic
const calculateProjectEstimate = (projectData) => {
  const baseRates = {
    website: 5000,
    mobile: 15000,
    ecommerce: 10000,
    branding: 3000
  };

  const complexityMultipliers = {
    basic: 1,
    standard: 1.5,
    premium: 2.2,
    enterprise: 3
  };

  const featurePrices = {
    cms: 2000,
    analytics: 1500,
    seo: 2500,
    payment: 3000,
    api: 4000
  };

  const basePrice = baseRates[projectData.type] || 5000;
  const complexity = complexityMultipliers[projectData.complexity] || 1;
  const featuresTotal = (projectData.features || []).reduce((total, feature) => {
    return total + (featurePrices[feature] || 0);
  }, 0);

  const rushMultiplier = projectData.timeline === 'rush' ? 1.3 : 1;
  const total = (basePrice * complexity + featuresTotal) * rushMultiplier;

  return {
    basePrice: basePrice * complexity,
    featuresPrice: featuresTotal,
    totalPrice: Math.round(total),
    timeline: projectData.timeline === 'rush' ? '2-4 weeks' : '4-8 weeks',
    breakdown: {
      development: Math.round(total * 0.6),
      design: Math.round(total * 0.25),
      testing: Math.round(total * 0.15)
    }
  };
};

// AI consultation response generation
const generateConsultationResponse = async (userInput, context = {}) => {
  const responses = {
    website: "For a professional website, I'd recommend starting with our Standard package which includes responsive design, CMS integration, and basic SEO. Typical cost ranges from $8,000-$15,000. What's your target audience?",
    mobile: "Mobile app development typically ranges from $15,000-$50,000 depending on complexity. Would you like native iOS/Android or cross-platform development?",
    ecommerce: "E-commerce platforms require payment integration, inventory management, and security features. Budget typically starts at $12,000. What products will you be selling?",
    branding: "Brand identity packages include logo design, color palette, typography, and brand guidelines. Investment ranges from $3,000-$8,000. What industry are you in?"
  };

  const keywords = Object.keys(responses);
  const matchedKeyword = keywords.find(keyword => 
    userInput.toLowerCase().includes(keyword)
  );

  return matchedKeyword ? responses[matchedKeyword] : 
    "I'd love to help you with your project! Could you tell me more about what you're looking to build? Are you interested in a website, mobile app, e-commerce platform, or branding services?";
};
