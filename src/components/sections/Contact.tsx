import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Download,
  Send,
  Eye,
  Copy,
  CheckCircle2,
  Loader2,
  AlertCircle
} from "lucide-react";
import emailjs from "@emailjs/browser";

// --- CONFIGURATION ---
const CONTACT_INFO = {
  name: "Ananya Chaurasia",
  email: "ananyachaurasia80@gmail.com",
  linkedin: "https://www.linkedin.com/in/itsananya8",
  github: "https://github.com/ananyaintech",
  location: "Bangalore, India",
  relocation: "Willing to Relocate",
  resumePath: "/resume/ananya_resume.pdf"
};

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validation
    if (!formData.user_name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!validateEmail(formData.user_email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      alert("Please enter a message.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      // 2. EmailJS Integration using your provided keys
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 3. Success Handling
      setStatus("success");
      setFormData({ user_name: "", user_email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleResumeView = () => {
    window.open(CONTACT_INFO.resumePath, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN: CONTACT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="identity-text">Connect with me</p>
          <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-6">
            Contact.
          </h2>
          <p className="text-secondary text-[18px] leading-[30px] mb-10">
            I'm currently looking for new opportunities in Bangalore or remote.
            Fill out the form to send me a direct message or use the links below!
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {/* EMAIL CARD */}
            <div
              onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}
              className="glassmorphism p-5 rounded-3xl border transition-all cursor-pointer group relative"
              style={{ border: '1px solid rgba(142, 106, 134, 0.1)' }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner"
                  style={{ backgroundColor: 'rgba(214, 155, 170, 0.1)', color: '#D69BAA' }}
                >
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-secondary text-[10px] uppercase font-bold tracking-[0.1em] opacity-60">Email</p>
                  <p className="text-white-100 font-bold text-sm truncate">{CONTACT_INFO.email}</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-white/20 hover:text-white-100 transition-colors"
                  title="Copy Email"
                >
                  {copied ? <CheckCircle2 size={16} style={{ color: '#E0A6B4' }} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* LINKEDIN CARD */}
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism p-5 rounded-3xl border transition-all cursor-pointer group"
              style={{ border: '1px solid rgba(142, 106, 134, 0.1)' }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner"
                  style={{ backgroundColor: 'rgba(200, 154, 191, 0.1)', color: '#C89ABF' }}
                >
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-secondary text-[10px] uppercase font-bold tracking-[0.1em] opacity-60">LinkedIn</p>
                  <p className="text-white-100 font-bold text-sm">Ananya's LinkedIn</p>
                </div>
              </div>
            </a>

            {/* GITHUB CARD */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism p-5 rounded-3xl border transition-all cursor-pointer group"
              style={{ border: '1px solid rgba(142, 106, 134, 0.1)' }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white-100 group-hover:scale-110 transition-transform shadow-inner"
                  style={{ backgroundColor: 'rgba(255, 245, 247, 0.05)' }}
                >
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-secondary text-[10px] uppercase font-bold tracking-[0.1em] opacity-60">GitHub</p>
                  <p className="text-white-100 font-bold text-sm">Ananya's GitHub</p>
                </div>
              </div>
            </a>

            {/* LOCATION CARD */}
            <div
              className="glassmorphism p-5 rounded-3xl border transition-all group"
              style={{ border: '1px solid rgba(142, 106, 134, 0.1)' }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner"
                  style={{ backgroundColor: 'rgba(231, 178, 167, 0.1)', color: '#E7B2A7' }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-secondary text-[10px] uppercase font-bold tracking-[0.1em] opacity-60">Location</p>
                  <p className="text-white-100 font-bold text-sm">{CONTACT_INFO.location}</p>
                  <p className="text-[9px] font-bold" style={{ color: '#E7B2A7' }}>{CONTACT_INFO.relocation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RESUME BUTTONS */}
          <div id="resume" className="mt-10 flex flex-wrap gap-4">
            <a
              href={CONTACT_INFO.resumePath}
              download
              className="flex items-center gap-2 text-white-100 px-8 py-3.5 rounded-2xl font-bold transition-all shadow-md active:scale-95 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)', boxShadow: '0 5px 15px rgba(214, 155, 170, 0.2)' }}
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={handleResumeView}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white-100 px-8 py-3.5 rounded-2xl font-bold transition-all active:scale-95"
            >
              <Eye size={18} />
              View Resume
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-tertiary/20 p-8 rounded-[3rem] border border-white/5 relative overflow-hidden backdrop-blur-3xl shadow-2xl"
        >
          {/* Form Status Overlays */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-black-200/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-rose/10 text-rose rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-white-100 text-2xl font-black mb-3">Transmission Successful</h3>
                <p className="text-secondary text-sm mb-8 max-w-[280px] leading-relaxed">
                  Thank you for reaching out. I have received your message and will respond to you at <b>{formData.user_email}</b> as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-10 py-3 rounded-xl font-bold text-[#241B24] hover:opacity-90 transition-all shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)' }}
                >
                  Return to Form
                </button>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-black-200/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <AlertCircle size={40} />
                </div>
                <h3 className="text-white-100 text-2xl font-black mb-3">Error Occurred</h3>
                <p className="text-secondary text-sm mb-8 max-w-[280px] leading-relaxed">
                  Something went wrong while sending the message. Please try again or email me directly at {CONTACT_INFO.email}.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-10 py-3 rounded-xl font-bold text-[#241B24] hover:opacity-90 transition-all"
                  style={{ background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)' }}
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="text-white-100/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ml-1 block">Full Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border border-white/5 rounded-[1.25rem] px-6 py-5 text-sm text-white-100 focus:outline-none transition-all placeholder:text-white-100/10"
                style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
                placeholder="How shall I address you?"
              />
            </div>
            <div>
              <label className="text-white-100/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ml-1 block">Email Address</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border border-white/5 rounded-[1.25rem] px-6 py-5 text-sm text-white-100 focus:outline-none transition-all placeholder:text-white-100/10"
                style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
                placeholder="Where can I reach you?"
              />
            </div>
            <div>
              <label className="text-white-100/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ml-1 block">Message Details</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 border border-white/5 rounded-[1.25rem] px-6 py-5 text-sm text-white-100 focus:outline-none transition-all placeholder:text-white-100/10 resize-none"
                style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
                placeholder="Tell me about your opportunity..."
              />
            </div>
            <button
              disabled={loading}
              className="w-full py-5 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group text-[#241B24] uppercase tracking-widest text-xs"
              style={{ background: 'linear-gradient(135deg, #D69BAA, #E0A6B4)', boxShadow: '0 10px 20px rgba(214, 155, 170, 0.15)' }}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Initiating...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center gap-2.5 opacity-30">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D69BAA' }} />
            <span className="text-white-100 text-[9px] uppercase font-bold tracking-[0.3em]">Encrypted Data Transmission</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
