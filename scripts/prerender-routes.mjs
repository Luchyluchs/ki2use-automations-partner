#!/usr/bin/env node
/**
 * Prerender Routes - SEO Meta Tag Generator
 * Generates dist/[route]/index.html per route with correct meta tags.
 * Solves CSR SEO problem (all routes returning Homepage meta).
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SRC = path.resolve('src');
const SITE_URL = 'https://ki2use.de';

const OVERRIDE_META = {
  '/impressum': { title: 'Impressum | KI2USE', description: 'Impressum von KI2USE – KI-Beratung und KI-Einführung für den deutschen Mittelstand. Inhaber: Alexander Lux, Kaiser-Wilhelm-Ring 44, 50672 Köln.', keywords: 'KI2USE Impressum, Alexander Lux Köln' },
  '/datenschutz': { title: 'Datenschutzerklärung | KI2USE', description: 'Datenschutzerklärung von KI2USE. DSGVO-konforme Verarbeitung Ihrer Daten bei KI-Beratung und KI-Einführung.', keywords: 'Datenschutz KI2USE, DSGVO KI Beratung' },
  '/agb': { title: 'AGB | KI2USE', description: 'Allgemeine Geschäftsbedingungen von KI2USE für KI-Beratung, KI-Einführung und KI-Schulungen im deutschen Mittelstand.', keywords: 'AGB KI2USE, Geschäftsbedingungen KI Beratung' },
  '/demoportal': { title: 'KI-Demo-Portal | KI-Agenten live erleben | KI2USE', description: 'Erleben Sie unsere KI-Agenten live im Demo-Portal: Chatbot, E-Mail-Assistent, Sales-Agent und mehr. Direkt testen, kein Account nötig.', keywords: 'KI Demo, KI Agenten Demo, Chatbot Demo' },
  '/ki-fuer-unternehmen': { title: 'KI für Unternehmen | Programme, Kosten & Nutzen | KI2USE', description: 'Welche KI-Programme lohnen sich für Unternehmen? Überblick über KI-Anwendungen, Kosten-Nutzen-Vergleich und Checkliste. Speziell für deutsche KMU. DSGVO-konform.', keywords: 'KI für Unternehmen, KI Programme, Künstliche Intelligenz KMU' },
};

const DEFAULT_DESC = 'KI-Beratung und KI-Einführung für den deutschen Mittelstand. DSGVO-konform, mit Fördermittelberatung. Kostenloses Erstgespräch.';
const escAttr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escText = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const appTsx = fs.readFileSync(path.join(SRC, 'App.tsx'), 'utf8');
const useSeoCode = fs.readFileSync(path.join(SRC, 'hooks/useSEO.ts'), 'utf8');

function parseSEOTemplates(code) {
  const out = {};
  const block = code.match(/export\s+const\s+SEOTemplates\s*=\s*\{([\s\S]*?)\}\s*as\s+const/);
  if (!block) return out;
  const blockRe = /(\w+):\s*\{([\s\S]*?)\}(?=\s*[,}])/g;
  let m;
  while ((m = blockRe.exec(block[1])) !== null) {
    const props = m[2];
    const get = key => props.match(new RegExp('\\b' + key + '\\s*:\\s*"([^"]+)"'))?.[1];
    out[m[1]] = { title: get('title'), description: get('description'), keywords: get('keywords'), canonical: get('canonical') };
  }
  return out;
}
const SEO_TEMPLATES = parseSEOTemplates(useSeoCode);

const imports = {};
let m;
const lazyRe = /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(["']\.\/pages\/([^"']+)["']\)/g;
while ((m = lazyRe.exec(appTsx)) !== null) imports[m[1]] = m[2];
const eagerRe = /^import\s+(\w+)\s+from\s+["']\.\/pages\/([^"']+)["']/gm;
while ((m = eagerRe.exec(appTsx)) !== null) imports[m[1]] = m[2];

const routes = [];
const routeRe = /<Route\s+path=["']([^"']+)["']\s+element=\{<(\w+)/g;
while ((m = routeRe.exec(appTsx)) !== null) {
  if (m[1] === '*' || /[öäü]/.test(m[1]) || m[2] === 'Navigate') continue;
  routes.push({ path: m[1], component: m[2] });
}

function extractMeta(componentName) {
  const importPath = imports[componentName];
  if (!importPath) return null;
  const filePath = path.join(SRC, 'pages', importPath + '.tsx');
  if (!fs.existsSync(filePath)) return null;
  const code = fs.readFileSync(filePath, 'utf8');

  const blog = code.match(/<BlogLayout\s+([\s\S]*?)>/);
  if (blog) {
    const get = n => blog[1].match(new RegExp(n + '=["\']([^"\']+)["\']'))?.[1];
    return { title: get('metaTitle') || get('title'), description: get('metaDescription'), keywords: get('keywords') };
  }
  const lt = code.match(/const\s+data\s*:\s*LongTailPageData\s*=\s*\{([\s\S]*?)\n\};/);
  if (lt) {
    const get = n => lt[1].match(new RegExp('\\b' + n + '\\s*:\\s*"([^"]+)"'))?.[1];
    return { title: get('title'), description: get('description'), keywords: get('keywords'), canonical: get('canonical') };
  }
  const tplCall = code.match(/useSEO\(\s*(?:\{\s*\.\.\.\s*)?SEOTemplates\.(\w+)/);
  if (tplCall && SEO_TEMPLATES[tplCall[1]]) return SEO_TEMPLATES[tplCall[1]];
  const inline = code.match(/useSEO\(\s*\{([\s\S]*?)\}\s*\)/);
  if (inline) {
    const get = n => inline[1].match(new RegExp('\\b' + n + '\\s*:\\s*"([^"]+)"'))?.[1];
    const t = get('title');
    if (t) return { title: t, description: get('description'), keywords: get('keywords'), canonical: get('canonical') };
  }
  const helmet = code.match(/<Helmet[^>]*>([\s\S]*?)<\/Helmet>/);
  if (helmet) {
    return {
      title: helmet[1].match(/<title>([^<]+)<\/title>/)?.[1],
      description: helmet[1].match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/)?.[1],
      canonical: helmet[1].match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/)?.[1],
    };
  }
  return null;
}

function buildHtml(tmpl, { title, description, canonical, keywords }) {
  let html = tmpl.replace(/<title>[^<]*<\/title>/i, `<title>${escText(title)}</title>`);
  const ri = (re, rep, fb) => { html = re.test(html) ? html.replace(re, rep) : html.replace(/<\/title>/, `</title>\n    ${fb}`); };
  ri(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escAttr(description)}" />`, `<meta name="description" content="${escAttr(description)}" />`);
  ri(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${escAttr(canonical)}" />`, `<link rel="canonical" href="${escAttr(canonical)}" />`);
  const r = (re, rep) => { if (re.test(html)) html = html.replace(re, rep); };
  r(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escAttr(title)}" />`);
  r(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escAttr(description)}" />`);
  r(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${escAttr(canonical)}" />`);
  r(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${escAttr(title)}" />`);
  r(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${escAttr(description)}" />`);
  r(/<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:url" content="${escAttr(canonical)}" />`);
  if (keywords) ri(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${escAttr(keywords)}" />`, `<meta name="keywords" content="${escAttr(keywords)}" />`);
  return html;
}

let success = 0, skipped = 0;
console.log(`Found ${Object.keys(SEO_TEMPLATES).length} SEOTemplates, ${routes.length} routes\n`);
for (const { path: rp, component } of routes) {
  if (rp === '/') continue;
  const meta = OVERRIDE_META[rp] || extractMeta(component);
  if (!meta?.title) { console.log(`  ⚠️  ${rp} (${component}) – kein meta`); skipped++; continue; }
  const canonical = meta.canonical || `${SITE_URL}${rp}`;
  const description = meta.description || DEFAULT_DESC;
  const html = buildHtml(template, { title: meta.title, description, canonical, keywords: meta.keywords });
  const outDir = path.join(DIST, rp.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`  ✅ ${rp} → ${meta.title.substring(0, 55)}`);
  success++;
}
console.log(`\n🎉 ${success} prerendered, ${skipped} skipped`);
