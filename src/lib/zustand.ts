import create, { SetState } from "zustand"

interface ThemeState {
  theme: string
}

const useStore = create((set: SetState<ThemeState>) => ({
  theme: "light",
  setTheme: (theme: "light" | "dark") => set({ theme }),
}))

export default useStore
