import { create } from "zustand"

enum ThemeType {
  light = "light",
  dark = "dark",
}

interface ThemeState {
  theme: keyof typeof ThemeType
  setTheme: (theme: keyof typeof ThemeType) => void
  hoverText: boolean
  setHoverText: (hoverText: boolean) => void
}

const useStore = create<ThemeState>()((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
  hoverText: false,
  setHoverText: (hover) => set({ hoverText: hover }),
}))

export { useStore as default }
