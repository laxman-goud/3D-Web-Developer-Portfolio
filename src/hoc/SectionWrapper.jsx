/**
 * hoc/SectionWrapper.js
 * ---------------------------------------
 * Higher-Order Component (HOC) that wraps a given
 * section/component with motion animations, padding,
 * and section ID handling.
 *
 * Usage:
 *   export default SectionWrapper(MyComponent, "about");
 *
 * Params:
 * - Component (React.Component): The component to wrap.
 * - idName (string): ID for the section (used in nav links).
 */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/**
 * SectionWrapper HOC
 * Wraps any component inside a <motion.section>
 * with staggered animations and consistent layout.
 */
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}       // Animation config
                initial="hidden"                    // Start hidden
                whileInView="show"                  // Animate when in view
                viewport={{ once: true, amount: 0.25 }} // Animate only once, 25% visible
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                id={idName}
            >
                {/* Render wrapped component */}
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
