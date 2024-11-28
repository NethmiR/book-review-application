import "@/styles/globals.css";
import { UserProvider } from "@/contexts/userContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
