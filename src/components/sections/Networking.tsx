import { motion } from "framer-motion";
import { Network, Shield, Cpu, Globe, Server, Share2 } from "lucide-react";

const NetworkNode = ({ x, y, label, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
    viewport={{ once: true }}
    className="absolute flex flex-col items-center justify-center gap-2"
    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
  >
    <div
      className="w-12 h-12 rounded-full bg-tertiary border-2 flex items-center justify-center z-20 hover:scale-110 transition-transform cursor-pointer group"
      style={{ borderColor: '#D8B26E', boxShadow: '0 0 15px rgba(216, 178, 110, 0.2)' }}
    >
      <Icon className="w-6 h-6 transition-colors" style={{ color: '#D8B26E' }} />
    </div>
    <span className="text-[10px] font-mono text-secondary uppercase tracking-tighter bg-background/80 px-2 py-0.5 rounded border border-white/5">{label}</span>
  </motion.div>
);

export const Networking = () => {
  const topics = [
    "TCP/IP Protocols", "Routing & Switching", "Network Security",
    "OSI Model Architecture", "Cloud Infrastructure", "Network Security"
  ];

  return (
    <section id="networking" className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="identity-text">Infrastructure Enthusiast</p>
          <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-6">
            Networking.
          </h2>
          <p className="text-secondary text-[17px] leading-[30px] mb-8">
            Deeply passionate about the backbone of modern technology. I explore the complexities
            of network architecture, from low-level packet switching to high-level cloud security.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-3 glassmorphism p-3 rounded-lg border-l-4"
                style={{ borderColor: '#B18CCF' }}
              >
                <Shield className="w-4 h-4" style={{ color: '#B18CCF' }} />
                <span className="text-sm font-semibold text-white/80">{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Animated Topology Diagram */}
        <div className="relative h-[400px] bg-tertiary/20 rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Connections */}
            <line x1="50%" y1="20%" x2="20%" y2="50%" stroke="rgba(216, 178, 110, 0.1)" strokeWidth="1.5" />
            <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="rgba(216, 178, 110, 0.1)" strokeWidth="1.5" />
            <line x1="20%" y1="50%" x2="50%" y2="80%" stroke="rgba(216, 178, 110, 0.1)" strokeWidth="1.5" />
            <line x1="80%" y1="50%" x2="50%" y2="80%" stroke="rgba(216, 178, 110, 0.1)" strokeWidth="1.5" />
            <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="rgba(216, 178, 110, 0.1)" strokeWidth="1.5" />
          </svg>

          {/* Nodes */}
          <NetworkNode x={50} y={20} label="Gateway" icon={Globe} delay={0.1} />
          <NetworkNode x={20} y={50} label="Router A" icon={Share2} delay={0.3} />
          <NetworkNode x={80} y={50} label="Router B" icon={Share2} delay={0.5} />
          <NetworkNode x={50} y={80} label="Database" icon={Server} delay={0.7} />
          <NetworkNode x={50} y={50} label="Core Switch" icon={Cpu} delay={0.9} />

          {/* Animated Packets */}
          <div className="absolute inset-0 w-full h-full">
             <div className="absolute top-[35%] left-[35%] w-1 h-1 bg-accent-rose rounded-full animate-ping" />
             <div className="absolute top-[65%] left-[65%] w-1 h-1 bg-accent-mauve rounded-full animate-ping" />
          </div>
        </div>

      </div>
    </section>
  );
};
