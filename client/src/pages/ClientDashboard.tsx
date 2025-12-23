import { useEffect, useState } from "react";
import { socket } from "../socket/socket";
import StatCard from "../components/StatCard";
import ClientList from "../components/ClientList";
import TrainingChart from "../components/TrainingChart";

export default function ClientDashboard() {
  const [round, setRound] = useState(0);
  const [accuracy, setAccuracy] = useState<number[]>([]);
  const [clients, setClients] = useState<number>(0);

  useEffect(() => {
    socket.on("dashboard-update", data => {
      setRound(data.round);
      setAccuracy(data.accuracyHistory);
      setClients(data.clients);
    });

    return () => {
      socket.off("dashboard-update");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">
        Federated Learning Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Current Round" value={round} />
        <StatCard title="Accuracy" value={accuracy.at(-1)?.toFixed(3) || 0} />
        <StatCard title="Clients" value={clients} />
        <StatCard title="Status" value="Training" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <TrainingChart accuracy={accuracy} />
        </div>
        <ClientList clients={Array(clients).fill("client")} />
      </div>
    </div>
  );
}
