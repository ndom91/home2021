import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if (localStorage.theme === "dark" || (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)) {
              document.documentElement.classList.add("dark")
            } else {
              document.documentElement.classList.remove("dark")
            }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
