import Head from "next/head";
import React from "react";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "../app/atom";
import Navbar from "./Navbar";

// TODO: fix children type error
interface Children {
  children: ReactElement;
}

export default function Layout({ children }: Children) {
  const theme = useRecoilValue(themeState);

  return (
    <>
      <div className={`${theme}`} data-theme={theme}>
        <Head>
          <title>Will Shivers</title>
        </Head>

        <Navbar />
        <main className="light-mode-style dark:dark-mode-style w-screen flex flex-col">
          {children}
        </main>
      </div>
    </>
  );
}