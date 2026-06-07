import { motion } from "framer-motion";
import { experiences } from "../../constants";

const ExperienceCard = ({ experience }: any) => {
  return (
    <div className="relative pl-8 pb-12 border-l-2 last:pb-0 ml-4" style={{ borderColor: 'rgba(214, 155, 170, 0.2)' }}>
      {/* Icon Circle */}
      <div
        className="absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 border-background shadow-[0_0_15px_rgba(214, 155, 170, 0.3)]"
        style={{ backgroundColor: '#D69BAA' }}
      />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
      >
        <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
          <div>
            <h3 className="text-white-100 text-[24px] font-bold">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
              {experience.company_name}
            </p>
          </div>
          <div
            className="px-4 py-1 rounded-full text-sm font-bold border"
            style={{ backgroundColor: 'rgba(214, 155, 170, 0.05)', color: '#E0A6B4', borderColor: 'rgba(214, 155, 170, 0.2)' }}
          >
            {experience.date}
          </div>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, index: number) => (
            <li
              key={`experience-point-${index}`}
              className="text-secondary text-[14px] pl-1 tracking-wider leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="identity-text">Professional Journey</p>
        <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </section>
  );
};
