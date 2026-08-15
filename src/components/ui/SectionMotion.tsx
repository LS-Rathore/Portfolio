import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type MotionPreset = 
  | 'boot' 
  | 'split-left' 
  | 'split-right' 
  | 'wave-left' 
  | 'wave-right' 
  | 'grid-zoom' 
  | 'timeline-draw' 
  | 'popup';

interface SectionMotionProps {
  children: ReactNode;
  preset?: MotionPreset;
  delay?: number;
  className?: string;
  id?: string;
}

export default function SectionMotion({
  children,
  preset = 'popup',
  delay = 0,
  className = '',
  id,
}: SectionMotionProps) {
  const getVariants = (): Variants => {
    switch (preset) {
      case 'boot':
        return {
          hidden: { opacity: 0, scale: 0.92, y: 30 },
          visible: {
            opacity: 1,
            scale: [0.92, 1.02, 1],
            y: 0,
            transition: { duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] },
          },
        };

      case 'split-left':
        return {
          hidden: { opacity: 0, x: -80, scale: 0.96 },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] },
          },
        };

      case 'split-right':
        return {
          hidden: { opacity: 0, x: 80, rotate: 3, scale: 0.96 },
          visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] },
          },
        };

      case 'wave-left':
        return {
          hidden: { opacity: 0, x: -60, y: 15 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.6, delay, ease: 'easeOut' },
          },
        };

      case 'wave-right':
        return {
          hidden: { opacity: 0, x: 60, y: 15 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.6, delay, ease: 'easeOut' },
          },
        };

      case 'grid-zoom':
        return {
          hidden: { opacity: 0, scale: 0.88, y: 45, rotateX: 8 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
          },
        };

      case 'timeline-draw':
        return {
          hidden: { opacity: 0, y: 55 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
          },
        };

      case 'popup':
      default:
        return {
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, delay, ease: [0.175, 0.885, 0.32, 1.275] },
          },
        };
    }
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
