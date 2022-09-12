import { atom, RecoilState } from "recoil";

enum SiteTheme {
  light = "light",
  dark = "dark",
}

type Themes = keyof typeof SiteTheme;

export const themeState = atom<Themes>({
  key: "themeState",
  default: "dark",
});