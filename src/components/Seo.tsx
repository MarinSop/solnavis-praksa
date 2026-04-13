import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? "https://sol-navis.hr";

const Seo = ({
  title,
  description,
  path,
  image,
  locale = "hr_HR",
  jsonLd,
}: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/logo.png`;

  return (
    <Helmet>
      <html lang={locale.startsWith("hr") ? "hr" : "en"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
