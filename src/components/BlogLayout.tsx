import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Layout from "./Layout";
import { Button } from "./ui/button";
import CalendlyButton from "./CalendlyButton";

interface RelatedArticle {
  title: string;
  slug: string;
  description: string;
}

interface BlogLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  slug: string;
  publishDate: string;
  readingTime: string;
  children: ReactNode;
  relatedArticles?: RelatedArticle[];
}

const BlogLayout = ({
  title,
  metaTitle,
  metaDescription,
  keywords,
  slug,
  publishDate,
  readingTime,
  children,
  relatedArticles,
}: BlogLayoutProps) => {
  const canonicalUrl = `https://ki2use.de/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: {
      "@type": "Person",
      name: "Alexander Lux",
    },
    publisher: {
      "@type": "Organization",
      name: "KI2USE",
      url: "https://ki2use.de",
    },
    datePublished: publishDate,
    dateModified: publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    keywords: keywords,
    inLanguage: "de-DE",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://ki2use.de/" },
      { "@type": "ListItem", position: 2, name: title, item: canonicalUrl },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> Alexander Lux
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {readingTime} Lesezeit
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none [&>h2]:text-2xl [&>h2]:font-light [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-light [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>ul]:text-muted-foreground [&>ol]:text-muted-foreground [&>li]:text-muted-foreground">
            {children}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-accent/10 border border-accent/20 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie KI Ihr Unternehmen voranbringen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton
                text="Kostenloses Erstgespräch"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full"
              />
              <Link to="/standard-agenten">
                <Button variant="outline" className="rounded-full px-8 py-3">
                  KI-Agenten entdecken
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <nav className="mt-16" aria-label="Weiterführende Artikel">
              <h2 className="text-2xl font-light text-foreground mb-6">Weiterlesen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="block p-6 rounded-2xl border border-card-border/30 hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="text-lg font-light text-foreground mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{article.description}</p>
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogLayout;
