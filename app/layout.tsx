import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  metadataBase: new URL('https://portfolio-five-lime-27.vercel.app/'),
  title:
    'Dynamic Solutions: JavaScript & TypeScript Development with Prasenjit Das',
  description:
    'Welcome to my portfolio! I’m a dedicated JavaScript and TypeScript developer passionate about building robust and scalable web applications. Here, you will find a collection of my projects that highlight my expertise in crafting seamless user experiences, optimizing performance, and implementing best practices. Dive into my work to see how I transform ideas into dynamic solutions, leveraging the power of modern frameworks and libraries.',
  openGraph: {
    title: 'Prasenjit Das - JavaScript & TypeScript Developer',
    description:
      'Welcome to my portfolio! I’m a dedicated JavaScript and TypeScript developer passionate about building robust and scalable web applications. Here, you will find a collection of my projects that highlight my expertise in crafting seamless user experiences, optimizing performance, and implementing best practices. Dive into my work to see how I transform ideas into dynamic solutions, leveraging the power of modern frameworks and libraries.',
    url: 'https://portfolio-five-lime-27.vercel.app/',
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 600,
        alt: "Prasenjit Das's Portfolio"
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prasenjit Das - JavaScript & TypeScript Developer',
    description:
      'Welcome to my portfolio! I’m a dedicated JavaScript and TypeScript developer passionate about building robust and scalable web applications. Here, you will find a collection of my projects that highlight my expertise in crafting seamless user experiences, optimizing performance, and implementing best practices.',
    image: '/og-image.png'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const openGraphImages = metadata.openGraph.images?.[0]

  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Only render these meta tags if openGraphImages exists */}
        {openGraphImages && (
          <>
            <meta property="og:image" content={openGraphImages.url} />
            <meta
              property="og:image:width"
              content={openGraphImages.width.toString()}
            />
            <meta
              property="og:image:height"
              content={openGraphImages.height.toString()}
            />
            <meta property="og:image:alt" content={openGraphImages.alt} />
          </>
        )}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Default Title and Description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  )
}
