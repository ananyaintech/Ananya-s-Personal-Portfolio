import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldCheck, Activity, Brain } from "lucide-react";
import { projects } from "../../constants";

const ProjectCard = ({ index, name, description, tags, source_code_link, features, image }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-tertiary/40 p-5 rounded-[2rem] sm:w-[360px] w-full border border-white/5 hover:border-accent-rose/30 transition-all shadow-card group"
    >
      <div className="relative w-full h-[230px]">
        {/* Project image with overlay */}
        <div className="w-full h-full bg-black-200 rounded-2xl overflow-hidden border border-white/5 relative">
           <img
              src={image}
              alt={name}
              className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

           <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
              <h3 className="text-white-100 font-bold text-[24px] tracking-tight">{name}</h3>
           </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover z-30">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/50 backdrop-blur-md w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform border border-white/10"
            >
              <Github className="w-1/2 h-1/2 text-white-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 px-1">
        <p className="text-secondary text-[14px] line-clamp-3 leading-relaxed">{description}</p>

        <div className="mt-4 space-y-2">
          {features.slice(0, 3).map((feature: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-[12px] text-secondary/80">
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: i % 2 === 0 ? '#D68FA2' : '#B18CCF' }} />
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag: any, i: number) => (
          <p
            key={`${name}-${tag.name}`}
            className="text-[11px] font-mono px-2 py-0.5 bg-white/5 rounded-md border border-white/5"
            style={{ color: i % 3 === 0 ? '#D68FA2' : i % 3 === 1 ? '#B18CCF' : '#D8B26E' }}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="identity-text">Showcasing Intelligence</p>
        <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects demonstrate my ability to bridge AI development and data analytics.
          Each project is a testament to my skills in solving complex safety and medical problems.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};
