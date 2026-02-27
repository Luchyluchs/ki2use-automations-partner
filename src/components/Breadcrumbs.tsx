import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  '/standard-agenten': 'Standard-Agenten',
  '/massgeschneiderte-agenten': 'Maßgeschneiderte Agenten',
  '/agenten-rechner': 'Agenten-Rechner',
  '/roi-rechner': 'ROI-Rechner',
  '/ki-schulungen': 'KI-Schulungen',
  '/kontakt': 'Kontakt',
  '/impressum': 'Impressum',
  '/datenschutz': 'Datenschutz',
  '/agb': 'AGB',
  '/demoportal': 'Demo-Portal',
};

const Breadcrumbs: FC = () => {
  const location = useLocation();
  
  // Don't show on homepage
  if (location.pathname === '/') return null;
  
  const label = routeLabels[location.pathname];
  if (!label) return null;

  const items: BreadcrumbItem[] = [
    { label: 'Startseite', path: '/' },
    { label, path: location.pathname },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://ki2use.de${item.path}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="w-3 h-3 opacity-50" />}
              {index === 0 && <Home className="w-3 h-3 mr-1 opacity-60" />}
              {index === items.length - 1 ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
