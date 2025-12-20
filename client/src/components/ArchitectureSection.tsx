export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="w-full bg-gradient-to-b from-white to-emerald-50 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900">
          System Architecture <span className="ml-2">🏗️</span>
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          A robust, scalable architecture designed for privacy-preserving
          distributed machine learning
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Client Layer */}
        <div
          className="
            group rounded-3xl p-10 text-white
            bg-gradient-to-br from-blue-500 to-indigo-600
            shadow-xl
            transform transition-all duration-500
            hover:-translate-y-3 hover:shadow-2xl
          "
        >
          <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">
            🖥️
          </div>
          <h3 className="text-2xl font-semibold mb-4">Client Layer</h3>
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              React
            </span>
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              TF.js
            </span>
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              WebRTC
            </span>
          </div>
        </div>

        {/* Aggregation Server */}
        <div
          className="
            group rounded-3xl p-10 text-white
            bg-gradient-to-br from-green-500 to-emerald-700
            shadow-xl
            transform transition-all duration-500
            hover:-translate-y-3 hover:shadow-2xl
          "
        >
          <div className="text-5xl mb-6 transition-transform duration-500 group-hover:rotate-12">
            ⚙️
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Aggregation Server
          </h3>
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              Node.js
            </span>
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              Express
            </span>
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              gRPC
            </span>
          </div>
        </div>

        {/* Privacy Protocols */}
        <div
          className="
            group rounded-3xl p-10 text-white
            bg-gradient-to-br from-orange-500 to-red-600
            shadow-xl
            transform transition-all duration-500
            hover:-translate-y-3 hover:shadow-2xl
          "
        >
          <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">
            🔒
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Privacy Protocols
          </h3>
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              DP
            </span>
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              SecAgg
            </span>
            <span className="px-4 py-1 rounded-full bg-white/20 text-sm">
              HTTPS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
