import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

const DEFAULT_TITLE = "Solvify | Scale Your FinTech with Expert Backend Solutions";
const DEFAULT_DESCRIPTION = "Expert backend development, system modernization, and seamless integrations for ambitious FinTech startups. Build powerful solutions that scale.";
const SITE_URL = "https://solvify.com"; // Replace with actual domain if known

export function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  twitterHandle = "@solvify",
}: SEOProps) {
  const fullTitle = title ? `${title} | Solvify` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
