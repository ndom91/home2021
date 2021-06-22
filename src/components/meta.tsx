// import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
// import { getAbsoluteURL } from "../lib/utils"

const Meta = () => {
  const router = useRouter()
  const searchParams = new URLSearchParams()
  searchParams.set("path", router.pathname)
  // const fullImageURL = getAbsoluteURL(`/api/og?${searchParams}`)
  const fullImageURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?${searchParams}`

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#FCE7F3" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`ndom91`} />

      <meta property="og:type" content="profile" />
      <meta property="og:title" content="ndom91" />
      <meta
        property="og:description"
        content="Web Dev @ Checkly | <3 Opensource"
      />
      <meta property="og:url" content={`https://ndo.dev/${router.pathname}`} />
      <meta property="og:image" content={fullImageURL} />
      <meta property="profile:first_name" content="Nico" />
      <meta property="profile:last_name" content="Domino" />
      <meta property="profile:username" content="ndom91" />
      <meta name="twitter:image" content={fullImageURL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="ndom91" />
      <meta name="twitter:site" content="@ndom91" />
      <title>ndom91</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Person",
            name: "Nico Domino",
            image: "https://home2021.vercel.app/assets/img/avatar.png",
            url: "https://home2021.vercel.app",
            jobTitle: "Fullstack Web Developer",
            worksFor: {
              "@type": "Organization",
              name: "Checkly",
            },
            sameAs: [
              "https://www.linkedin.com/in/ndom91/",
              "https://twitter.com/ndom91",
              "https://github.com/ndom91",
            ],
          }),
        }}
      />
    </Head>
  )
}

export default Meta
