import { io, Socket } from "socket.io-client";

export interface DashboardUpdatePayload {
  round: number;
  clients: number;
  accuracyHistory: number[];
}

export interface ServerToClientEvents {
  "dashboard-update": (data: DashboardUpdatePayload) => void;
  "global-model": (data: { weights: any[]; round: number }) => void;
}

export interface ClientToServerEvents {
  "model-update": (data: {
    weights: any[];
    samples: number;
    accuracy: number;
  }) => void;
}

export const socket: Socket<
  ServerToClientEvents,
  ClientToServerEvents
> = io("http://localhost:5000", {
  transports: ["websocket"],
  autoConnect: true
});
