import Posts from "./Posts";
import ConfigData from "../../../config";

export async function generateMetadata({ params }) {
  const siteUrl = ConfigData.wpApiUrl;
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
    const title = post.acf.meta_title || post.title.rendered.replace(/<[^>]*>/g, '');
    const description = post.acf.meta_description_ || post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160);
    const imageUrl = post.acf.desktop_banner_image?.url || `${mainWebUrl}/default-blog-image.jpg`;

    return {
      title: title,
      description: description,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-snippet': -1,
          'max-image-preview': 'large',
          'max-video-preview': -1,
        },
      },
      alternates: {
        canonical: `${mainWebUrl}/blogs/${slug}`, 
      },
      openGraph: {
        title: title,
        description: description,
        type: "article",
        url: `${mainWebUrl}/blogs/${slug}`,
        siteName: "iVistaz",
        images: [
          {
            url: imageUrl,
            alt: post.title.rendered.replace(/<[^>]*>/g, ''),
            width: 800,
            height: 600,
          },
        ],
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: [post.acf.author || "iVistaz Team"],
        tags: post.acf.keywords ? post.acf.keywords.split(',').map(tag => tag.trim()) : ["digital marketing", "SEO", "content marketing"],
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [imageUrl],
        creator: '@ivistaz',
        site: '@ivistaz',
      },
      other: {
        "article:published_time": post.date,
        "article:modified_time": post.modified,
        "article:author": post.acf.author || "iVistaz Team",
        "article:section": "Blog",
        "article:tag": post.acf.keywords || "digital marketing, SEO, content marketing",
        "author": post.acf.author || "iVistaz Team",
        "theme-color": "#000000",
        "msapplication-TileColor": "#000000",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black",
        "format-detection": "telephone=no",
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
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.acf.meta_title || post.title.rendered.replace(/<[^>]*>/g, ''),
    description: post.acf.meta_description_ || post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    image: post.acf.desktop_banner_image?.url || `${ConfigData.mainWebUrl}/default-blog-image.jpg`,
    author: {
      "@type": "Person",
      name: post.acf.author || "iVistaz Team",
    },
    publisher: {
      "@type": "Organization",
      name: "iVistaz",
      logo: {
        "@type": "ImageObject",
        url: `${ConfigData.mainWebUrl}/ivista_logo.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.modified,
    mainEntityOfPage: `${ConfigData.mainWebUrl}/blogs/${slug}`,
    url: `${ConfigData.mainWebUrl}/blogs/${slug}`,
    wordCount: post.content.rendered.replace(/<[^>]*>/g, '').split(' ').length,
    articleSection: "Blog",
    keywords: post.acf.keywords || "digital marketing, SEO, content marketing",
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": ConfigData.mainWebUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": `${ConfigData.mainWebUrl}/blogs`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title.rendered.replace(/<[^>]*>/g, ''),
        "item": `${ConfigData.mainWebUrl}/blogs/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Posts slug={params.slug} />
    </>
  );
}