import { createContext } from "react";
import { WebSocketHook } from "react-use-websocket/dist/lib/types";

export const WebSocketContext = createContext<WebSocketHook | null>(null);
