import { io } from "socket.io-client";

const URL = "https://7x1rcvfz-80.inc1.devtunnels.ms/"

export const socket = io(URL, {
  autoConnect: true,
  transports: ["websocket"],
});
