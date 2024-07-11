import Head from "next/head"
import { useRouter } from "next/router"
import { usePathname, useSearchParams } from "next/navigation"
import * as Swetrix from "swetrix"

const Meta = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  Swetrix.init("aobVjewCqi98", {
    apiURL: "https://api.stats.ndo.dev/log",
  })
  let url = pathname
  if (searchParams.toString() !== "") {
    url += `?${searchParams.toString()}`
  }

  if (typeof document !== "undefined") {
    Swetrix.trackPageview(url)
  }

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#d9d9d9" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="description" content={`ndom91`} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content="ndom91" />
        <meta property="og:description" content="CEO of HTML" />
        <meta property="og:url" content={`https://ndo.dev/${router.pathname}`} />
        <meta property="profile:first_name" content="Nico" />
        <meta property="profile:last_name" content="Domino" />
        <meta property="profile:username" content="ndom91" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="ndom91" />
        <meta name="twitter:site" content="@ndom91" />
        <meta name="darkreader-lock" />
        <title>ndom91</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org/",
              "@type": "Person",
              name: "Nico Domino",
              image: "https://ndo.dev/assets/img/avatar.png",
              url: "https://ndo.dev",
              jobTitle: "Fullstack Web Developer",
              // worksFor: {
              //   "@type": "Organization",
              //   name: "Checkly",
              // },
              // sameAs: [
              //   "https://www.linkedin.com/in/ndom91/",
              //   "https://twitter.com/ndom91",
              //   "https://github.com/ndom91",
              // ],
            }),
          }}
        />
      </Head>
    </>
  )
}

export default Meta
