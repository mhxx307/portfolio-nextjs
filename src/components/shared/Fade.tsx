import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    duration?: number;
    delay?: number;
    ease?: 'easeIn' | 'easeOut' | 'easeInOut';
    className?: string;
}

const Fade = ({
    children,
    delay,
    direction,
    duration,
    ease,
    className,
}: Props) => {
    const fadeVariants = {
        initial: {
            opacity: 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'top' ? -50 : direction === 'bottom' ? 50 : 0,
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration || 0.5,
                delay: delay || 0,
                ease: ease || 'easeInOut',
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Fade;
