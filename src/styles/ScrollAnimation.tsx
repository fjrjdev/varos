import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

interface ScrollAnimationProps {
    children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start({ opacity: 1, y: 0 });
                    } else {
                        controls.start({ opacity: 0, y: -50 });
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={controls as AnimationControls}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;