import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './ScrollReveal.css';

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  scale = 1,
  rotate = 0,
  blur = 0,
  duration = 0.8,
  easing = 'ease-out',
  threshold = 0.1,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced, threshold]);

  const getInitialTransform = () => {
    let transforms = [];
    if (direction === 'up') transforms.push(`translateY(${distance}px)`);
    if (direction === 'down') transforms.push(`translateY(-${distance}px)`);
    if (direction === 'left') transforms.push(`translateX(${distance}px)`);
    if (direction === 'right') transforms.push(`translateX(-${distance}px)`);
    if (scale !== 1) transforms.push(`scale(${scale})`);
    if (rotate !== 0) transforms.push(`rotate(${rotate}deg)`);
    if (blur > 0) transforms.push(`blur(${blur}px)`);
    return transforms.join(' ');
  };

  const getFinalTransform = () => {
    let transforms = ['translateY(0)', 'translateX(0)'];
    if (scale !== 1) transforms.push(`scale(1)`);
    if (rotate !== 0) transforms.push(`rotate(0deg)`);
    if (blur > 0) transforms.push(`blur(0px)`);
    return transforms.join(' ');
  };

  const initialTransform = getInitialTransform();
  const finalTransform = getFinalTransform();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{
        '--sr-initial-transform': initialTransform,
        '--sr-final-transform': finalTransform,
        '--sr-delay': `${delay}s`,
        '--sr-duration': `${duration}s`,
        '--sr-easing': easing,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
