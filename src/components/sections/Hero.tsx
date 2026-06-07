import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileImg from "../../assets/profile.png";
// import { NeuralNetworkCanvas } from "../canvas/NeuralNetwork";

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "AI-Assisted Application Developer",
      "Aspiring Data Analyst",
      "Network Engineering Enthusiast",
      "Building Intelligent Solutions",
      "Transforming Data Into Decisions",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center justify-center overflow-hidden pt-20">
      {/* Background 3D Elements Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-5" />
        {/* <NeuralNetworkCanvas /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

        {/* LEFT: Introduction */}
        <div className="flex flex-row items-start gap-5 flex-1 order-2 lg:order-1">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#D68FA2' }} />
            <div className="w-1 sm:h-80 h-40" style={{ background: 'linear-gradient(to bottom, #D68FA2, transparent)' }} />
          </div>

          <div>
            <h1 className="font-black text-white-100 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Hi, I'm <span className="hero-text-gradient">Ananya</span>
            </h1>
            <p className="text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 min-h-[80px]">
              {text}
              <Cursor cursorColor="#D68FA2" />
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Professional Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -20, 0]
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex-1 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] group">
            {/* Elegant Glow Backdrop */}
            <div className="absolute inset-0 bg-accent-rose/20 rounded-full blur-[50px] group-hover:bg-accent-rose/30 transition-all duration-700" />

            {/* Border Frame */}
            <div className="absolute -inset-4 border border-white/5 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="absolute -inset-4 border border-accent-rose/20 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500" />

            {/* Photo Container */}
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] border border-white/10 glassmorphism shadow-2xl">
              <img
                src={profileImg}
                alt="Ananya Chaurasia"
                className="w-full h-full object-cover object-center transition-all duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/600x600/221C2F/F7F2F5?text=Ananya+Chaurasia";
                }}
              />
            </div>

            {/* Decorative Elements (Professional) */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-gold/10 rounded-full backdrop-blur-md border border-white/5 flex items-center justify-center animate-pulse">
               <div className="w-12 h-12 rounded-full border-2 border-accent-gold/30 border-dashed animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-30 hover:opacity-100 transition-opacity">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
