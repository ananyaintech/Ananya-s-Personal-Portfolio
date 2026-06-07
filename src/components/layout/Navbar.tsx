import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Cpu, Network, BarChart, Award, FileText } from "lucide-react";
import { cn } from "../../utils/cn";

const navLinks = [
  { id: "about", title: "About", icon: <Terminal size={18} /> },
  { id: "experience", title: "Experience", icon: <Cpu size={18} /> },
  { id: "projects", title: "Projects", icon: <BarChart size={18} /> },
  { id: "networking", title: "Networking", icon: <Network size={18} /> },
  { id: "certifications", title: "Certificates", icon: <Award size={18} /> },
  { id: "resume", title: "Resume", icon: <FileText size={18} /> },
  { id: "contact", title: "Contact", icon: <Terminal size={18} /> },
];

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-[#241B24]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            whileHover={{ rotate: 180 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-[#D69BAA]/20"
            style={{ background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)' }}
          >
            <span className="text-[#241B24] font-bold text-xl">A</span>
          </motion.div>
          <p className="text-white-100 text-[18px] font-bold cursor-pointer flex tracking-tight">
            Ananya Chaurasia
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                "relative flex items-center gap-2 font-medium cursor-pointer transition-colors duration-300",
                active === link.title ? "text-white-100" : "text-secondary hover:text-white-100"
              )}
              onClick={() => setActive(link.title)}
            >
              <span style={{ color: active === link.title ? '#E0A6B4' : 'rgba(216, 155, 170, 0.4)' }}>
                {link.icon}
              </span>
              <a href={`#${link.id}`} className="text-xs uppercase tracking-[0.15em] font-bold">{link.title}</a>
              {active === link.title && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px]"
                  style={{ backgroundColor: '#E0A6B4', boxShadow: '0 0 10px rgba(224, 166, 180, 0.5)' }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)} className="text-white-100 opacity-60 hover:opacity-100 transition-opacity">
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 glassmorphism rounded-[2rem] p-8 border border-white/5 bg-[#241B24]/95 backdrop-blur-3xl shadow-2xl"
              >
                <ul className="list-none flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={cn(
                        "font-bold cursor-pointer text-xs uppercase tracking-widest transition-all",
                        active === link.title ? "text-[#E0A6B4]" : "text-white-100/40"
                      )}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
