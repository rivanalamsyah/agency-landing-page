// Animation utilities for scroll effects and parallax
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState({});

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const observeElement = React.useCallback((elementId) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(prev => ({
          ...prev,
          [elementId]: entry.isIntersecting
        }));
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const element = document.getElementById(elementId);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return { scrollY, isVisible, observeElement };
};

// Parallax hook for smooth movement effects
const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

// Stagger animation for multiple elements
const useStaggerAnimation = (delay = 100) => {
  const [visibleItems, setVisibleItems] = React.useState(new Set());

  const triggerStagger = React.useCallback((itemCount) => {
    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        setVisibleItems(prev => new Set(prev).add(i));
      }, i * delay);
    }
  }, [delay]);

  return { visibleItems, triggerStagger };
};
