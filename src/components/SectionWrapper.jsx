import { motion as Motion } from "framer-motion";

const SectionWrapper = ({ children, id }) => {
  return (
    <Motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[92vh] flex flex-col justify-center py-16 px-6 relative z-10"
    >
      {children}
    </Motion.section>
  );
};

export default SectionWrapper;
