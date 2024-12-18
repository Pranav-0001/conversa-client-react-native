import { io } from "socket.io-client";

const URL = "http://54.89.240.111/"

export const socket = io(URL, {
  autoConnect: true,
  transports: ["websocket"],
});
