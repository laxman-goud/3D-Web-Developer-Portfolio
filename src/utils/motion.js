/**
 * utils/motion.js
 * ---------------------------------------
 * Centralized animation variants for Framer Motion.
 * Each function returns an object containing `hidden` and `show`
 * states, to be used with Framer Motion's `variants` prop.
 *
 * Available animations:
 * - textVariant: Slide text down with fade-in
 * - fadeIn: Fade element in from a direction
 * - zoomIn: Scale element in from 0
 * - slideIn: Slide element from a direction
 * - staggerContainer: Stagger multiple child animations
 */

/**
 * textVariant
 * Animates text by moving it down from top (-y) with fade-in.
 * @param {number} delay - Delay before animation starts
 */
export const textVariant = (delay) => {
    return {
        hidden: { y: -50, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

/**
 * fadeIn
 * Fades an element into view from a specified direction.
 * @param {"left"|"right"|"up"|"down"} direction - Entry direction
 * @param {"spring"|"tween"} type - Animation type
 * @param {number} delay - Delay before animation starts
 * @param {number} duration - Animation duration
 */
export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

/**
 * zoomIn
 * Zooms an element into view by scaling from 0 to 1.
 * @param {number} delay - Delay before animation starts
 * @param {number} duration - Animation duration
 */
export const zoomIn = (delay, duration) => {
    return {
        hidden: { scale: 0, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

/**
 * slideIn
 * Slides an element into view from a direction.
 * @param {"left"|"right"|"up"|"down"} direction - Entry direction
 * @param {"spring"|"tween"} type - Animation type
 * @param {number} delay - Delay before animation starts
 * @param {number} duration - Animation duration
 */
export const slideIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

/**
 * staggerContainer
 * Staggers animation of multiple child elements.
 * @param {number} staggerChildren - Delay between children animations
 * @param {number} [delayChildren=0] - Delay before first child animates
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};
