import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function TrainingChart({ accuracy }: { accuracy: number[] }) {
  const data = {
    labels: accuracy.map((_, i) => `Round ${i + 1}`),
    datasets: [
      {
        label: "Global Accuracy",
        data: accuracy,
        borderColor: "#2dd4bf",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <Line data={data} />
    </div>
  );
}
