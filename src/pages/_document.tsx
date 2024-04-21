import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
if (localStorage.theme === "dark" || (!("theme" in localStorage) &&
window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark")
  document.documentElement.style.setProperty("color-scheme", "dark")
} else {
  document.documentElement.classList.remove("dark")
  document.documentElement.style.setProperty("color-scheme", "light")
}
          `,
            }}
          />
        </Head>
        <body className="h-dvh [&>div]:h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
