

# Blog-System für SEO (unsichtbar in Navigation)

## Konzept
Versteckte Blog-Seiten nach dem gleichen Muster wie `/ki-einfuehrung` und `/ki-fuer-unternehmen` — nicht in der Navigation, nicht im Footer, aber indexierbar via Sitemap und llms.txt.

## Blog-Artikel (5 Stück zum Start)

| Route | Keyword-Fokus |
|-------|--------------|
| `/blog/ki-beratung-mittelstand` | KI Beratung Mittelstand |
| `/blog/ki-foerderung-2025` | KI Förderung Unternehmen 2025 |
| `/blog/chatbot-unternehmen` | Chatbot für Unternehmen |
| `/blog/ki-automatisierung-kmu` | KI Automatisierung KMU |
| `/blog/ki-kosten-roi` | KI Kosten ROI Unternehmen |

Jeder Artikel: 1.000+ Wörter, SEO-Meta-Tags, Structured Data (Article Schema), interner Verlinkung zu Hauptseiten, CTA am Ende.

## Technische Umsetzung

1. **Blog-Layout-Komponente** (`src/components/BlogLayout.tsx`) — Wiederverwendbares Layout mit Article-Schema, Lesezeit, Autor, Datum, CTA-Sektion
2. **5 Blog-Seiten** unter `src/pages/blog/` — Jeweils mit Layout-Komponente, 1.000+ Wörter Content
3. **Routen in App.tsx** — `/blog/*` Routen hinzufügen (keine Navigation/Footer-Links)
4. **Sitemap aktualisieren** — Alle 5 Blog-URLs mit `priority 0.7`
5. **llms.txt aktualisieren** — Blog-Sektion hinzufügen
6. **Interne Links** — Aus bestehenden Seiten (z.B. FAQ, Services) dezent auf Blog-Artikel verlinken (nur im Content, nicht in Navigation)

## Structured Data pro Artikel
```text
Article Schema:
- @type: Article
- headline, author, datePublished
- publisher: KI2USE
- keywords pro Artikel
```

