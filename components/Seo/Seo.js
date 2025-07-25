"use client"
import React from "react"

function NextSeo({ title, description, path, metaImage }) {
  // Dynamically get the domain name from window.location (client-side)
  const domainName = typeof window !== "undefined" ? window.location.origin : "https://ivistaz.com"

  return (
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${domainName}${path}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${domainName}${path}`} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "iVistaz",
            url: "https://ivistaz.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: `https://ivistaz.com${path}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </head>
  )
}

export default NextSeo
