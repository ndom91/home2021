import { create } from "zustand"

enum ThemeType {
  light = "light",
  dark = "dark",
}

interface ThemeState {
  theme: keyof typeof ThemeType
  setTheme: (theme: keyof typeof ThemeType) => void
}

const useStore = create<ThemeState>()((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}))

export { useStore as default }
