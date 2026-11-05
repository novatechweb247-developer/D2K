import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ScrollPopProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}

export const ScrollPop: React.FC<ScrollPopProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  ...props
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 50, scale: 0.96 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -50, scale: 0.96 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -50, scale: 0.96 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 50, scale: 0.96 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 40, scale: 0.96 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={getVariants()}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
