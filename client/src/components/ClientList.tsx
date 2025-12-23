type Props = {
  clients: string[];
};

export default function ClientList({ clients }: Props) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h3 className="text-white font-semibold mb-4">Connected Clients</h3>
      <ul className="space-y-2">
        {clients.map((id) => (
          <li
            key={id}
            className="text-sm text-gray-300 bg-slate-800 rounded px-3 py-2"
          >
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
}
