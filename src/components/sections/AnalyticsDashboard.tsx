import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { LayoutDashboard, TrendingUp, Award, Laptop, Briefcase } from "lucide-react";

const skillData = [
  { name: "Python", level: 90, color: "#D68FA2" }, // Accent Rose
  { name: "SQL", level: 85, color: "#B18CCF" },    // Accent Mauve
  { name: "ML", level: 75, color: "#D8B26E" },     // Accent Gold
  { name: "Android", level: 80, color: "#D68FA2" },
  { name: "Network", level: 70, color: "#B18CCF" },
];

const distributionData = [
  { name: "AI Apps", value: 40 },
  { name: "Data Analysis", value: 30 },
  { name: "Networking", value: 30 },
];

const COLORS = ["#D68FA2", "#B18CCF", "#D8B26E"];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glassmorphism p-4 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl bg-[#16131D]/90">
        <p className="text-white-100 font-bold text-xs mb-2 tracking-wide">{payload[0].payload.name || payload[0].name}</p>
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: payload[0].payload.color || payload[0].fill }}
          />
          <p className="text-white-100 font-mono text-[11px] font-bold">
            {payload[0].value}% <span className="text-secondary font-sans font-normal ml-1 italic opacity-60">Efficiency</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export const AnalyticsDashboard = () => {
  return (
    <section id="analytics" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="identity-text">Business Intelligence</p>
        <div className="flex items-center gap-4">
          <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Command Center.
          </h2>
          <div className="bg-white/5 text-accent-rose p-2 rounded-xl backdrop-blur-md border border-white/5">
            <LayoutDashboard size={20} />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Projects Completed", val: "12+", icon: Laptop, color: "#D68FA2" },
          { label: "Certifications", val: "08+", icon: Award, color: "#B18CCF" },
          { label: "Tech Stack Skills", val: "15+", icon: TrendingUp, color: "#D8B26E" },
          { label: "Internships", val: "01", icon: Briefcase, color: "#D68FA2" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glassmorphism p-6 rounded-[2rem] flex items-center justify-between border border-white/5 hover:border-white/10 transition-all duration-300 shadow-sm"
          >
            <div>
              <p className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold mb-1 opacity-60">{stat.label}</p>
              <h4 className="text-3xl font-black text-white-100 tracking-tighter">{stat.val}</h4>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
              <stat.icon size={22} style={{ color: stat.color }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Technical Proficiency Chart */}
        <div className="glassmorphism p-8 rounded-[2.5rem] h-[450px] border border-white/5 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-rose/5 blur-[100px] -z-10" />

          <h3 className="text-secondary font-bold text-lg mb-8 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-rose shadow-[0_0_10px_#D68FA2]" />
            Technical Proficiency
          </h3>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="#F7F2F5"
                  fontSize={11}
                  fontWeight="600"
                  tickLine={false}
                  axisLine={false}
                  dy={15}
                  opacity={0.4}
                />
                <YAxis hide />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: 'rgba(255,255,255,0.03)', radius: 15 }}
                />
                <Bar
                  dataKey="level"
                  radius={[15, 15, 15, 15]}
                  barSize={32}
                  animationBegin={200}
                  animationDuration={1500}
                >
                  {skillData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      className="hover:opacity-70 transition-opacity cursor-pointer"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expertise Distribution */}
        <div className="glassmorphism p-8 rounded-[2.5rem] h-[450px] border border-white/5 relative group overflow-hidden">
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-mauve/5 blur-[100px] -z-10" />

          <h3 className="text-secondary font-bold text-lg mb-8 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-mauve shadow-[0_0_10px_#B18CCF]" />
            Expertise Distribution
          </h3>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  innerRadius={85}
                  outerRadius={115}
                  paddingAngle={10}
                  dataKey="value"
                  stroke="none"
                  animationBegin={400}
                  animationDuration={1500}
                >
                  {distributionData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="hover:opacity-70 transition-opacity cursor-pointer outline-none"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-8 mt-4">
            {distributionData.map((entry, i) => (
              <div key={i} className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-[10px] text-white-100 font-bold uppercase tracking-wider">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
