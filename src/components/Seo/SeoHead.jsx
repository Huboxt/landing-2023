import Head from 'next/head'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/seo'

/**
 * @param {object} props
 * @param {string} props.title Page title (brand suffix added unless already present)
 * @param {string} props.description Meta description
 * @param {string} [props.path='/'] URL path including leading slash
 */
export default function SeoHead({ title, description, path = '/' }) {
  const normalizedPath = path === '/' ? '' : path
  const url = `${SITE_URL}${normalizedPath}`
  const fullTitle = title.includes('HUBOXT') ? title : `${title} | ${SITE_NAME}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Head>
  )
}
