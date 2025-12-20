const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-black" />

      {/* Wave / Network Background */}
      <div className="absolute inset-0 opacity-60">
        <img
          src="/Hero-bg.avif"
          alt="Federated Learning Network"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Federated Learning
          <br />
          <span className="text-cyan-400">In Your Browser</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          Train machine learning models collaboratively without sharing raw data —
          powered by TensorFlow.js and privacy-preserving protocols.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold shadow-lg">
            Launch Demo →
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition font-semibold">
            View Architecture
          </button>
        </div>
      </div>

      {/* Floating Stats Card */}
      <div className="absolute bottom-10 right-10 bg-white text-black rounded-2xl shadow-xl p-5 w-48 hidden md:block">
        <p className="text-sm text-gray-500">Active Clients</p>
        <p className="text-3xl font-bold text-cyan-600">7</p>

        <div className="mt-4 border-t pt-3">
          <p className="text-sm font-medium">Round 82</p>
          <p className="text-xs text-gray-500">Training Session</p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
