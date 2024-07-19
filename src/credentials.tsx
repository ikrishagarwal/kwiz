import { createContext } from "react";

export const CredentialsContext = createContext<Credentials | null>(null);

interface Credentials {
  username: string;
  role: "organizer" | "attendee";
}
