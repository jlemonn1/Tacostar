import React from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import StoryIcon from './StoryIcon';
import './StoryBlock.css';

const StoryBlock = ({ paragraph, index }) => {
  const directions = ['left', 'right', 'left'];
  const rotations = [-1, 1, -0.5];

  return (
    <ScrollReveal
      delay={index * 0.15}
      direction={directions[index]}
      distance={50}
      rotate={rotations[index]}
    >
      <div className="story-block" style={{ transform: `rotate(${rotations[index]}deg)` }}>
        <StoryIcon index={index} />
        <p className="story-block__text">{paragraph}</p>
        <div className="story-block__tape" aria-hidden="true" />
      </div>
    </ScrollReveal>
  );
};

export default StoryBlock;
