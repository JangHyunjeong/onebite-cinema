import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "./components/global-layout";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { NextPage } from "next";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <div className={pretendard.className}>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </div>
  );
}
