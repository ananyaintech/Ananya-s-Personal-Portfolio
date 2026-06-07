import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Ultimate Job Ready AI-Powered Data Analytics Course",
    issuer: "CodeWithHarry",
    pdfPath: "/Certificates/Ultimate_Job-Ready_AI-Powered_Data_Analytics_Course__Certificate.pdf",
    skills: ["Python", "SQL", "Power BI", "Tableau", "Excel", "Statistics", "AI Tools"],
    accent: "#D68FA2" // Rose
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    pdfPath: "/Certificates/Deloitte Certificate.pdf",
    accent: "#B18CCF" // Mauve
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "Amazon Web Services (AWS)",
    pdfPath: "/Certificates/AWS Certificate.pdf",
    accent: "#D8B26E" // Gold
  },
  {
    title: "Python for Data Science",
    issuer: "Infosys Springboard",
    pdfPath: "/Certificates/Certificate- Python for Data Science.pdf",
    accent: "#D68FA2" // Rose
  },
  {
    title: "Cisco Content Networking",
    issuer: "Cisco",
    pdfPath: "/Certificates/CISCO Networking Basics Certificate.pdf",
    accent: "#B18CCF" // Mauve
  },
  {
    title: "UI/UX Design with Figma",
    issuer: "Figma Professional",
    pdfPath: "/Certificates/UI_UX Design Training - Certificate of Completion.pdf",
    accent: "#D8B26E" // Gold
  },
];

export const Certifications = () => {
  const handleViewCredential = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="identity-text">Milestones</p>
        <h2 className="text-white-100 font-black md:text-[50px] sm:text-[40px] text-[30px]">
          Certifications.
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[350px] glassmorphism p-6 rounded-[2rem] group relative overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-all shadow-sm"
            style={{ borderTop: `3px solid ${cert.accent}` }}
            onClick={() => handleViewCredential(cert.pdfPath)}
          >
            {/* Background Glow */}
            <div
              className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform"
              style={{ color: cert.accent }}
            >
              <Award size={120} />
            </div>

            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 shadow-inner">
                  <Award style={{ color: cert.accent }} size={24} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-40 bg-white/5 px-2 py-1 rounded">
                  Credential
                </div>
              </div>

              <h3 className="text-white-100 font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                {cert.title}
              </h3>
              <p className="text-secondary text-sm font-semibold mb-4 opacity-70">{cert.issuer}</p>

              {cert.skills && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-secondary border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div
                className="mt-auto flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-tighter"
                style={{ color: cert.accent }}
              >
                <span>View Full Credential</span>
                <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
