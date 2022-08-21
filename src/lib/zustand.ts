import create from 'zustand'
import { createClient } from '@liveblocks/client'
import { middleware } from '@liveblocks/zustand'

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_KEY as string,
})

enum ThemeType {
  light = 'light',
  dark = 'dark',
}

interface ThemeState {
  theme: keyof typeof ThemeType
  setTheme: (theme: keyof typeof ThemeType) => void
  hoverText: boolean
  setHoverText: (hoverText: boolean) => void
}

interface LiveThemeState {
  cursor: {
    x: number
    y: number
  }
  setCursor: (cursor: { x: number; y: number }) => void
}

const useStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
  hoverText: false,
  setHoverText: (hover) => set({ hoverText: hover }),
}))

const useLiveStore = create(
  middleware(
    (set): LiveThemeState => ({
      cursor: { x: 0, y: 0 },
      setCursor: (cursor: any) => set({ cursor }),
    }),
    { client, presenceMapping: { cursor: true } }
  )
)

export { useStore as default, useLiveStore }
