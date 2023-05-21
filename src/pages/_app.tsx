import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
