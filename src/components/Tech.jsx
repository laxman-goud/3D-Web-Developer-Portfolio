import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from "../styles"

const Tech = () => {
  return (
    <div className="skills flex flex-col gap-8">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Skills & Tools.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icons={[technology.icon]} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech");