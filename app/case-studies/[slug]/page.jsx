import Posts from "./Posts";
import ConfigData from "../../../config";

export async function generateMetadata({ params }) {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const mainWebUrl = ConfigData.mainWebUrl;
  const slug = params.slug;

  try {
    const res = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();

    if (!data || data.length === 0) {
      return {
        title: "Post Not Found | Blog",
        description: "This blog post could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const post = data[0];
    const title = post.acf?.meta_title || post.title.rendered || "Blog Post";
    const description =
      post.acf?.meta_description_ ||
      post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "").trim() ||
      "Read our latest blog post.";
    const image = post.acf?.desktop_banner_image?.url || `${mainWebUrl}/default-og-image.jpg`;
    const canonicalUrl = `${mainWebUrl}/case-studies/${slug}`;
    const modifiedTime = post.modified;

    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        type: "article",
        images: [
          {
            url: image,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      other: {
        "article:modified_time": modifiedTime,
      },
      metadataBase: new URL(mainWebUrl),
      icons: {
        icon: "/favicon.ico",
      },
    };
  } catch (err) {
    return {
      title: "Error Loading Post",
      description: "There was an error loading this blog post.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

// ✅ Page Component with dangerouslySetInnerHTML for schema
export default async function CaseStudiesPage({ params }) {
  const siteUrl = ConfigData.wpApiUrl;
  const mainWebUrl = ConfigData.mainWebUrl;
  const slug = params.slug;

  const res = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const post = data[0];

  const schema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Posts",
        headline: post.acf?.meta_title || post.title.rendered,
        description:
          post.acf?.meta_description_ ||
          post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "").trim(),
        image: post.acf?.desktop_banner_image?.url,
        datePublished: post.date,
        dateModified: post.modified,
        url: `${mainWebUrl}/case-studies/${slug}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${mainWebUrl}/case-studies/${slug}`,
        },
        author: {
          "@type": "Organization",
          name: "iVistaz",
        },
        publisher: {
          "@type": "Organization",
          name: "iVistaz",
          logo: {
            "@type": "ImageObject",
            url: `${mainWebUrl}/logo.png`, // 🔁 Replace with your real logo
          },
        },
      }
    : null;

  return (
    <div className="bg-black pt-24">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Posts slug={params.slug} />
    </div>
  );
}
