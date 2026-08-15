import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

interface SeoProps {
  title: string;
  description: string;
  /** Override the canonical path if it differs from the current route (rare). */
  path?: string;
  image?: string;
  noindex?: boolean;
  /** One or more JSON-LD objects to inject as <script type="application/ld+json">. */
  jsonLd?: object | object[];
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path,
  image,
  noindex,
  jsonLd,
}: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path ?? location.pathname}`;
    const ogImage = image ?? DEFAULT_OG_IMAGE;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertLink("canonical", canonicalUrl);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);

    let robotsMeta: HTMLMetaElement | null = null;
    if (noindex) {
      robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex, nofollow");
    }

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const item of items) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
        scripts.push(script);
      }
    }

    return () => {
      if (robotsMeta) robotsMeta.remove();
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, image, noindex, jsonLd, location.pathname]);

  return null;
}
