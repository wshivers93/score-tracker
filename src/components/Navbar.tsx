import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../app/atom";

export default function Navbar() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <nav className="light-mode-style dark:dark-mode-style w-screen h-[10vh] flex flex-row items-center p-2 drop-shadow-lg" aria-labelledby="site navigation">
      <div>Score Tracker</div>
      <button
        className="ml-auto"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {theme}
      </button>
    </nav>
  )
}