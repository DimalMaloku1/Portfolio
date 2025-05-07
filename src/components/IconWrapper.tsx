import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, delay = 0 }) => {
  return (
    <div 
      className="icon-container icon-hover"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="icon-glow icon-appear">
        {children}
      </div>
    </div>
  );
};

export default IconWrapper;