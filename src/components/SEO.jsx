import { useEffect } from "react";

const SITE_URL = "https://chubbies.co.in";

function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

// Drop <SEO title="..." description="..." /> at the top of any page component.
// Updates the browser tab title, meta description, canonical URL, and the
// Open Graph / Twitter tags that control link-preview cards on WhatsApp,
// Facebook, etc. Restores the site-wide defaults on unmount.
export default function SEO({ title, description, path = "" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Chubbies`
      : "Chubbies — Momo Franchise & Cart Business";
    const desc =
      description ||
      "India's fastest-growing momo cart brand. Bhook lage? Yahein ruko.";
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);

  return null;
}
