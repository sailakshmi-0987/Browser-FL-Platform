export default function Overview() {
  return (
    <section
      id="overview"
      className="bg-white py-24 px-6 text-slate-900"
    >
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase text-gray-400">
            About the Project
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Democratizing Privacy-Preserving ML
          </h2>

          <p className="mt-6 text-gray-600">
            Our browser-based Federated Learning Toolkit enables collaborative
            machine learning training directly in web browsers without
            compromising user privacy.
          </p>

          {/* Cards */}
          <div className="mt-10 flex gap-6">
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm w-48">
              <p className="text-3xl font-bold text-teal-600">100%</p>
              <p className="text-sm text-gray-500 mt-1">
                Privacy Preserved
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 shadow-sm w-48">
              <p className="text-3xl font-bold text-green-600">Zero</p>
              <p className="text-sm text-gray-500 mt-1">
                Data Sharing
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-2xl bg-gray-100 p-6 shadow-lg">
          <img
            src="/architecture.png"
            alt="Architecture"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
