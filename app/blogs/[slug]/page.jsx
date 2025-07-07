import Posts from "./Posts";
import ConfigData from "../../../config";

export async function generateMetadata({ params }) {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const mainWebUrl = ConfigData.mainWebUrl;
  const slug = params.slug;

  try {
    const res = await fetch(`${siteUrl}/blogs?_embed&slug=${slug}`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();

    if (!data || data.length === 0) {
      return {
        title: "Post Not Found",
        description: "This blog post could not be found.",
        robots: "noindex",
      };
    }

    const post = data[0];

    return {
      title: post.acf.meta_title,
      description: post.acf.meta_description_,
      alternates: {
        canonical: `${mainWebUrl}/blogs/${slug}`, 
      },
      openGraph: {
        title: post.acf.meta_title,
        description: post.acf.meta_description_,
        type: "article",
        url: `${mainWebUrl}/blogs/${slug}`,
        images: [
          {
            url: post.acf.desktop_banner_image?.url,
            alt: post.title.rendered,
          },
        ],
      },
      other: {
        "article:modified_time": post.modified,
      },
    };
  } catch (err) {
    return {
      title: "Error loading post",
      description: "An error occurred while generating metadata.",
      robots: "noindex",
    };
  }
}

export default async function BlogPage({ params }) {
  const siteUrl = ConfigData.wpApiUrl;
  const slug = params.slug;

  const res = await fetch(`${siteUrl}/blogs?_embed&slug=${slug}`);
  const data = await res.json();

  if (!data || data.length === 0) {
    return <div>Post Not Found</div>;
  }

  const post = data[0];

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "iVistaz",
    url: `${ConfigData.mainWebUrl}/`,
    potentialAction: {
      "@type": "SearchAction",
      target: `${ConfigData.mainWebUrl}/blogs/${slug}?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Posts slug={params.slug} />
    </>
  );
}