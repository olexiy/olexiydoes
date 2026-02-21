# Technisches Aufgabenblatt (TA)
## Projekt: "LUMA Naturkosmetik" — Online-Shop für handgemachte Naturkosmetik

---

### Projektübersicht

| Feld | Details |
|------|---------|
| **Kunde** | LUMA Naturkosmetik (fiktiv — Demoprojekt) |
| **Branche** | Naturkosmetik / Beauty / D2C |
| **Paket** | Premium (€3.500) |
| **Lieferzeit** | 3–4 Wochen |
| **Plattform** | Shopify |

### Warum dieses Projekt als Demo?

Naturkosmetik ist ein Wachstumsmarkt in Deutschland (über €1,5 Mrd. Umsatz, zweistelliges Wachstum). Viele kleine Hersteller suchen einen professionellen Online-Auftritt. Dieses Premium-Demoprojekt zeigt, was im höheren Preissegment möglich ist: erweiterte Produktfilter, Hauttyp-Quiz, Bewertungssystem und Loyalty-Programm — alles auf Shopify.

---

### 1. Anforderungen des Kunden

**Ausgangslage:** LUMA stellt in einer kleinen Manufaktur in Augsburg handgemachte Seifen, Cremes und Öle her. Bisher Verkauf über regionale Märkte und Unverpackt-Läden. Jetzt soll der Schritt in den eigenen Online-Direktverkauf erfolgen.

**Ziele:**
- Premium-Auftritt, der die Handwerksqualität und natürliche Inhaltsstoffe kommuniziert
- Kunden sollen über ein Hauttyp-Quiz passende Produkte finden
- Bewertungssystem für Social Proof
- Langfristig: Stammkunden aufbauen (Loyalty/Punkte-System)
- Vorbereitung für B2B-Bereich (Großhandelsanfragen)

**Zielgruppe:** Frauen und Männer 28–50, gesundheitsbewusst, Nachhaltigkeit ist wichtig, bereit für Premium-Preise (€15–45 pro Produkt)

---

### 2. Seitenstruktur

| Seite | Inhalt |
|-------|--------|
| **Startseite** | Fullscreen Hero-Video (Herstellung), Bestseller-Karussell, "Finde deine Routine" CTA zum Quiz, Inhaltsstoffe-Highlight (3 Zutaten mit Erklärung), Kundenbewertungen, Instagram-Feed |
| **Shop** | Alle Produkte mit Filtern: Kategorie (Gesicht/Körper/Haare/Sets), Hauttyp (normal/trocken/ölig/empfindlich/Misch), Inhaltsstoff, Preis |
| **Produktdetailseite** | Bildergalerie (min. 4 Bilder), vollständige INCI-Liste, Anwendungstipps, "Passt zu"-Empfehlungen, Kundenbewertungen, Nachhaltigkeits-Badge |
| **Hauttyp-Quiz** | 5–7 Fragen → personalisierte Produktempfehlung → direkt in den Warenkorb |
| **Über uns / Manufaktur** | Geschichte, Werte, Fotos der Herstellung, Zertifizierungen |
| **Inhaltsstoffe** | Glossar der verwendeten natürlichen Inhaltsstoffe mit Bildern und Wirkung |
| **B2B / Großhandel** | Passwortgeschützter Bereich oder Kontaktformular für Händleranfragen |
| **Blog** | Hautpflege-Tipps, DIY-Rezepte, Behind-the-scenes (SEO-Content) |
| **Kontakt** | Formular, FAQ, Manufaktur-Adresse |

---

### 3. Produkte

Ca. **25 Produkte** zum Start:

**Gesichtspflege (8)**
- 3 Gesichtscremes (Tagescreme, Nachtcreme, reichhaltige Pflege)
- 2 Gesichtsöle (Argan-Jojoba, Hagebutte-Vitamin E)
- 1 Gesichtswasser (Rosenwasser-Toner)
- 1 Peeling (Meersalz-Lavendel)
- 1 Lippenpflege

**Körperpflege (8)**
- 3 Körperseifen (Lavendel, Zitrone-Minze, Aktivkohle)
- 2 Körperbutter (Shea-Kakao, Mango-Kokos)
- 1 Duschöl
- 1 Deodorant (natürlich)
- 1 Handcreme

**Haarpflege (4)**
- 1 Haarseife
- 1 Haaröl
- 1 Shampoo Bar
- 1 Conditioner Bar

**Sets & Geschenke (5)**
- Starter-Set Gesichtspflege
- Verwöhn-Set Körperpflege
- Geschenkbox (frei konfigurierbar)
- Reise-Set (Minis)
- Probier-Set (5 × Mini)

Jedes Produkt mit: INCI-Liste, Hauttyp-Eignung (Tags), Gewicht/Volumen, Anwendungshinweise, Haltbarkeit (PAO-Symbol).

---

### 4. Funktionale Anforderungen

#### Theme & Design
- **Theme:** Sense (kostenlos, beauty-optimiert) oder Prestige (Premium)
- **Farbpalette:** Naturtöne — Salbeigrün (#8B9E7C), Creme (#F5F0E8), Soft Rosa (#E8D5D0), Dunkelbraun (#3D2B1F)
- **Typografie:** Elegant-Serif für Überschriften (Cormorant Garamond), Clean Sans-Serif für Body (Nunito Sans)
- **Bildsprache:** Helle, natürliche Aufnahmen, Flat-Lays mit Pflanzen, Nahaufnahmen der Texturen

#### E-Commerce-Funktionen
- **Produktfilter:** Erweitert mit Shopify Search & Discovery App
  - Nach Kategorie, Hauttyp, Inhaltsstoff, Preis, Bewertung
- **Hauttyp-Quiz:** Implementiert als eigene Shopify-Seite mit Octane AI (kostenlose Variante) oder custom HTML/JS
  - 5–7 Fragen (Hauttyp, Probleme, Gewohnheiten, Budget)
  - Ergebnis: 3–5 passende Produktempfehlungen
  - E-Mail-Capture am Ende (optional)
- **Bewertungssystem:** Judge.me (Free Plan) — Foto-Reviews, Import von bestehenden Bewertungen
- **Loyalty:** Smile.io (Free Plan) — Punkte für Käufe, Bewertungen, Social Shares
- **Zahlungsanbieter:** Shopify Payments (Kreditkarte, Apple Pay, Google Pay), PayPal, Klarna, SEPA-Lastschrift
- **Versand:** DHL GoGreen (klimaneutraler Versand), kostenlos ab €50
- **Steuer:** Deutscher MwSt.-Satz 19% (Kosmetik)

#### Marketing & SEO
- **SEO:** Meta-Titles & Descriptions, Alt-Texte für alle Bilder, strukturierte Daten (Product, FAQ, Breadcrumb Schema)
- **Blog:** 3 Starter-Artikel als Content-Basis (vom Kunden bereitgestellt, von mir SEO-optimiert eingepflegt)
- **Newsletter:** Klaviyo — Willkommenssequenz (3 E-Mails), Abandoned Cart, Post-Purchase
- **Instagram:** Shopify Instagram Sales Channel + Feed-Embed auf Startseite
- **Google Shopping:** Merchant Center Feed-Setup

#### Rechtliches
- Impressum, Datenschutz, AGB, Widerrufsbelehrung
- Cookie-Banner mit Consent-Management
- **Kosmetikverordnung (EU) Nr. 1223/2009:** INCI-Listen, Chargennummer, PAO-Symbol, verantwortliche Person
- Verpackungsgesetz: LUCID-Registrierung (Hinweis an Kunden)

---

### 5. Integrationen

| Integration | Anbieter | Zweck |
|-------------|----------|-------|
| Zahlungen | Shopify Payments + PayPal + Klarna | Checkout |
| Versand | DHL GoGreen / Shipcloud | Klimaneutraler Versand |
| Produktfilter | Shopify Search & Discovery | Erweiterte Filterung |
| Quiz | Octane AI / Custom | Hauttyp-Beratung |
| Bewertungen | Judge.me Free | Social Proof |
| Loyalty | Smile.io Free | Stammkundenbindung |
| E-Mail | Klaviyo Free | Newsletter & Automatisierungen |
| Buchhaltung | sevDesk | Rechnungen & DATEV |
| Instagram | Shopify Sales Channel | Social Commerce |
| Blog | Shopify Blog | SEO-Content |

---

### 6. Lieferplan

| Woche | Meilenstein |
|-------|-------------|
| **Woche 1, Mo–Mi** | Theme-Setup, Branding (Farben, Fonts, Logo), Navigation, Seitenstruktur |
| **Woche 1, Do–Fr** | Produkterstellung: Gesichts- und Körperpflege (16 Produkte mit INCI, Bildern, Tags) |
| **Woche 2, Mo** | Restliche Produkte (Haare + Sets), Collection-Seiten, Produktfilter |
| **Woche 2, Di–Mi** | Hauttyp-Quiz erstellen und verknüpfen, Bewertungssystem, Loyalty-Setup |
| **Woche 2, Do–Fr** | Content-Seiten (Über uns, Inhaltsstoffe, Blog-Artikel), B2B-Bereich |
| **Woche 3, Mo–Di** | Zahlungsanbieter, Versand, Rechtliches, E-Mail-Marketing-Setup |
| **Woche 3, Mi–Do** | SEO-Optimierung, Google Shopping Feed, Instagram-Integration |
| **Woche 3, Fr** | 1. Korrekturschleife |
| **Woche 4, Mo–Di** | 2. Korrekturschleife, Feinschliff |
| **Woche 4, Mi** | 3. Korrekturschleife |
| **Woche 4, Do** | Go-Live, Einweisung (2 Std.) |
| **Woche 4, Fr** | Puffer / Nacharbeit |

---

### 7. Abnahmekriterien

- [ ] Shop ist responsive (Desktop, Tablet, Mobile)
- [ ] Alle 25 Produkte mit INCI, Bildern, Varianten und Hauttyp-Tags eingerichtet
- [ ] Produktfilter funktionieren (Kategorie, Hauttyp, Inhaltsstoff)
- [ ] Hauttyp-Quiz liefert passende Empfehlungen
- [ ] Judge.me Bewertungssystem aktiv
- [ ] Smile.io Loyalty-Programm eingerichtet
- [ ] Zahlungsanbieter live (Shopify Payments, PayPal, Klarna)
- [ ] Versand konfiguriert (DHL GoGreen, kostenlos ab €50)
- [ ] 3 Blog-Artikel veröffentlicht
- [ ] Newsletter-Automatisierungen aktiv (Welcome, Abandoned Cart)
- [ ] Alle rechtlichen Seiten vorhanden (inkl. Kosmetikverordnung-Compliance)
- [ ] B2B-Anfrage-Formular funktioniert
- [ ] Google PageSpeed Score ≥ 75 (Mobile)
- [ ] Einweisung durchgeführt (2 Std.), Kunde kann selbstständig arbeiten
