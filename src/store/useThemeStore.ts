import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const updateTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;

  document.documentElement.setAttribute("data-theme", theme);

  const favicon = document.querySelector<HTMLLinkElement>(
    'link[rel="icon"][type="image/svg+xml"]',
  );

  if (favicon) {
    favicon.href =
      theme === "dark"
        ? "/images/favicons/favicon-dark.svg"
        : "/images/favicons/favicon-light.svg";
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",

      setTheme: (theme) => {
        set({ theme });
        updateTheme(theme);
      },

      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        get().setTheme(newTheme);
      },
    }),
    {
      name: "theme-storage",

      onRehydrateStorage: () => (state) => {
        if (state) {
          updateTheme(state.theme);
        }
      },
    },
  ),
);
