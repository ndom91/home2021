import { Inter, Victor_Mono } from "next/font/google"

const inter = Inter({ weight: ["100", "300", "900"], subsets: ["latin"] })
const victorMono = Victor_Mono({
  weight: ["100", "200", "400", "600"],
  subsets: ["latin"],
})

const fonts = {
  inter: {
    className: inter.className,
    style: inter.style,
  },
  victorMono: {
    className: victorMono.className,
    style: victorMono.style,
  },
}

export { fonts }
