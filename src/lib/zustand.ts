import { create } from 'zustand'
import { createClient } from '@liveblocks/client'
import { liveblocks, WithLiveblocks } from '@liveblocks/zustand'

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

interface Cursor {
  x: number
  y: number
  lastUpdate: number
  country: string
  colo: string
}

interface LiveCursorState {
  cursor: Cursor | undefined
  setCursor: (cursor: Cursor) => void
}

const useStore = create<ThemeState>()((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
  hoverText: false,
  setHoverText: (hover) => set({ hoverText: hover }),
}))

const useLiveStore = create<WithLiveblocks<LiveCursorState>>()(
  liveblocks(
    (set: any): LiveCursorState => ({
      cursor: undefined,
      setCursor: (cursor) => set({ cursor }),
    }),
    { client, presenceMapping: { cursor: true } }
  )
)

export { useStore as default, useLiveStore }
