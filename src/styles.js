/**
 * styles.js
 * ---------------------------------------
 * Centralized Tailwind CSS utility class presets
 * for consistent styling across the portfolio app.
 *
 * Contains reusable padding and text style definitions
 * for hero sections, subheadings, and general layout.
 */

const styles = {
    /* ===================== */
    /* Layout / Spacing      */
    /* ===================== */
    paddingX: "sm:px-16 px-6", // Horizontal padding
    paddingY: "sm:py-16 py-6", // Vertical padding
    padding: "sm:px-16 px-6 sm:py-16 py-10", // Combined padding

    /* ===================== */
    /* Hero Section Text     */
    /* ===================== */
    heroHeadText:
        "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",

    heroSubText:
        "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    /* ===================== */
    /* Section Titles        */
    /* ===================== */
    sectionHeadText:
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",

    sectionSubText:
        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };
