import Head from "next/head";
import React from "react";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "../app/atom";

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

        <main className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50">
          {children}
        </main>
      </div>
    </>
  );
}