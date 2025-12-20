import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import ArchitectureSection from "../components/ArchitectureSection";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      <Overview /> 
      <ArchitectureSection />     
      

      {/* METRICS */}
      {/* ================= METRICS ================= */}
<section className="bg-emerald-50 py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto text-center">
    <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-green-700 bg-green-200 rounded-full">
      RESEARCH METHODOLOGY
    </span>

    <h2 className="text-4xl font-bold text-gray-900">
      Non-IID Data Partitioning & Metrics
    </h2>

    {/* METRIC CARDS */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { value: "94.2%", label: "Model Accuracy", color: "text-cyan-400" },
        { value: "2.3MB", label: "Communication Cost", color: "text-green-400" },
        { value: "0.001", label: "Privacy Leakage", color: "text-purple-400" },
        { value: "45s", label: "Training Time", color: "text-orange-400" },
      ].map((item) => (
        <div
          key={item.label}
          className="
            bg-slate-900 rounded-2xl p-8 text-left
            transform transition-all duration-500
            hover:-translate-y-2 hover:shadow-2xl
          "
        >
          <h3 className={`text-4xl font-bold ${item.color}`}>
            {item.value}
          </h3>

          <p className="mt-2 text-gray-400">{item.label}</p>

          {/* FAKE BAR GRAPH */}
          <div className="mt-6 flex gap-1 items-end h-12">
            {[6, 10, 14, 8, 12].map((h, i) => (
              <div
                key={i}
                className={`w-2 rounded-sm ${item.color.replace("text", "bg")}`}
                style={{ height: `${h * 4}px`, opacity: 0.7 }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-slate-900 text-gray-400 px-10 py-16">
        <p className="text-center text-sm">
          © 2025 FedLearn Research
        </p>
      </footer>
    </div>
  );
};

export default Landing;
