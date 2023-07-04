import "@/styles/globals.css";
import { ConfigProvider, Alert } from "antd";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7655DA",
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
