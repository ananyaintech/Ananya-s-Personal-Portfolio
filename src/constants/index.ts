import { Terminal, Cpu, BarChart, Network, Database, BrainCircuit, ShieldCheck, Activity } from "lucide-react";

export const experiences = [
  {
    title: "Android App Development using Generative AI Intern",
    company_name: "MindMatrix",
    icon: "/assets/experience/mindmatrix.png",
    iconBg: "#1a1a2e",
    date: "Feb 2026 – May 2026",
    points: [
      "Architected and developed intelligent Android applications by integrating Google's Gemini AI for real-time safety monitoring and automated workflows.",
      "Engineered robust mobile solutions using Android Studio, Java/Kotlin, and Room Database for efficient local data persistence.",
      "Developed 'MedAlert', an AI-powered healthcare application featuring real-time patient tracking and automated emergency alert systems.",
      "Created 'Raksha Kavach', a safety intelligence platform utilizing AI for risk analysis, PPE checklist monitoring, and incident reporting.",
      "Optimized application performance through REST API integration and sophisticated UI/UX design focused on technical user interfaces.",
      "Applied advanced analytics thinking to transform complex data streams into actionable insights for industrial and medical safety environments."
    ],
  },
];

export const projects = [
  {
    name: "MEDALERT",
    description:
      "A high-performance AI-powered observation system for healthcare environments. Implements real-time activity tracking and live patient monitoring using computer vision to detect critical conditions and trigger automated emergency email alerts for multi-patient care.",
    tags: [
      { name: "Python", color: "text-primary" },
      { name: "Computer Vision", color: "text-cyber-blue" },
      { name: "Live Camera Monitoring", color: "text-neon-cyan" },
      { name: "Email Automation", color: "text-analytics" },
      { name: "Patient Tracking", color: "text-primary" },
      { name: "Database Management", color: "text-cyber-blue" },
      { name: "AI Monitoring", color: "text-neon-cyan" },
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/ananyaintech",
    features: [
      "Live Patient Monitoring",
      "Real-time Activity Tracking",
      "Emergency Email Alerts",
      "Multi-patient Monitoring",
      "AI-powered Observation System"
    ],
  },
  {
    name: "RAKSHA KAVACH",
    description:
      "An AI-powered industrial safety monitoring system. It utilizes Gemini AI for PPE checklist tracking, risk analysis, and incident reporting to ensure maximum site security.",
    tags: [
      { name: "Gemini AI", color: "text-primary" },
      { name: "Room DB", color: "text-cyber-blue" },
      { name: "Safety Intelligence", color: "text-neon-cyan" },
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/ananyaintech",
    features: ["Risk Analysis", "PPE Checklist Tracking", "Safety Recommendations"],
  },
];

export const techIcons = {
  Terminal,
  Cpu,
  BarChart,
  Network,
  Database,
  BrainCircuit,
  ShieldCheck,
  Activity
};
