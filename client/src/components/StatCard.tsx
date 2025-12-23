type Props = {
  title: string;
  value: string | number;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-teal-400 transition">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2 text-white">{value}</p>
    </div>
  );
}
