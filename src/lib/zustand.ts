import create from "zustand"

const useStore = create((set) => ({
  theme: "light",
  setTheme: (theme: "light" | "dark") => set({ theme }),
}))

export default useStore
