import React from "react";

interface Props {
  title: string;
  tech: string;
}

const ArchitectureCard: React.FC<Props> = ({ title, tech }) => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-gray-600">{tech}</p>
    </div>
  );
};

export default ArchitectureCard;
