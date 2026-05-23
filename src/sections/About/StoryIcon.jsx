import React from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import './StoryIcon.css';

const StoryIcon = ({ index }) => {
  const icons = [
    <svg key="taco" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7c0-1.1.9-2 2-2h14a2 2 0 012 2v0" />
      <path d="M3 7l2.5 12a2 2 0 002 1.5h9a2 2 0 002-1.5L21 7" />
      <path d="M12 7v13" />
    </svg>,
    <svg key="cheese" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L2 9l10 6 10-6-10-6z" />
      <path d="M2 15l10 6 10-6" />
      <path d="M12 21V9" />
    </svg>,
    <svg key="fire" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.215-.567-5.137 2.306-7.34" />
      <path d="M12 3c1.5 1.5 2 3 2 4.5 0 2.5-1.5 3.5-2 5-.5 1-1 2.5-1 4" />
      <path d="M15 17c1 1 1.5 2.5 1.5 4 0 2-1.5 3.5-3 3.5s-3.5-1.5-3.5-3.5c0-1.5.5-3 1.5-4" />
    </svg>,
  ];

  const glows = ['neon-glow-red', 'neon-glow-yellow', 'neon-glow-blue'];
  const colors = ['var(--color-red)', 'var(--color-yellow)', 'var(--color-blue)'];

  return (
    <ScrollReveal delay={index * 0.1} scale={0.8} rotate={-10}>
      <div className={`story-icon ${glows[index]}`} style={{ color: colors[index] }}>
        {icons[index]}
      </div>
    </ScrollReveal>
  );
};

export default StoryIcon;
