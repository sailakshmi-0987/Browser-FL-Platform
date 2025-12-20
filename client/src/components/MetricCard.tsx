import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow text-center">
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-gray-500 mt-2">{label}</p>
    </div>
  );
};

export default MetricCard;
