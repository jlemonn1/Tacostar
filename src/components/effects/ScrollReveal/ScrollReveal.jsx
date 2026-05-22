import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    switch (direction) {
      case 'left': return 'scroll-reveal--left';
      case 'right': return 'scroll-reveal--right';
      case 'up':
      default: return 'scroll-reveal--up';
    }
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${getAnimationClass()} ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
