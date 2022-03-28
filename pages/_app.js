import "../styles/fonts.css";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
