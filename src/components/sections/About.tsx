import { motion } from "framer-motion";
import { Terminal, BarChart3, Network, BrainCircuit } from "lucide-react";
import { cn } from "../../utils/cn";

const services = [
  {
    title: "AI-Assisted App Developer",
    icon: <Terminal className="w-12 h-12" style={{ color: '#D68FA2' }} />,
    description: "Building production-ready Android and Web applications using Generative AI workflows and modern tech stacks.",
    accent: "#D68FA2"
  },
  {
    title: "Aspiring Data Analyst",
    icon: <BarChart3 className="w-12 h-12" style={{ color: '#B18CCF' }} />,
    description: "Transforming raw data into actionable insights through advanced visualization and statistical modeling.",
    accent: "#B18CCF"
  },
  {
    title: "Network Engineering Enthusiast",
    icon: <Network className="w-12 h-12" style={{ color: '#D8B26E' }} />,
    description: "Passionate about modern network architecture, TCP/IP protocols, and cloud infrastructure security.",
    accent: "#D8B26E"
  },
  {
    title: "AI Integration Expert",
    icon: <BrainCircuit className="w-12 h-12" style={{ color: '#D68FA2' }} />,
    description: "Specializing in embedding LLMs and AI intelligence into software products to solve real-world problems.",
    accent: "#D68FA2"
  },
];

const ServiceCard = ({ index, title, icon, description, accent }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="xs:w-[250px] w-full"
  >
    <div
      className="w-full p-[1px] rounded-[20px]"
      style={{ background: `linear-gradient(135deg, ${accent}, transparent)` }}
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col text-center hover:bg-tertiary/60 transition-all cursor-pointer group border border-white/5">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="group-hover:drop-shadow-[0_0_15px_rgba(214,143,162,0.3)] transition-all"
        >
          {icon}
        </motion.div>
        <h3 className="text-white-100 text-[20px] font-bold mt-4 leading-tight">
          {title}
        </h3>
        <p className="text-secondary text-[14px] mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="identity-text">Introduction</p>
        <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a versatile tech professional specializing in AI-assisted application development.
        With a strong foundation in Android Studio and REST API integration, I leverage
        Generative AI to accelerate development cycles and create intelligent solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};
