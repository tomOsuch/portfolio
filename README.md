# tomaszosuch.dev

Strona portfolio — [tomaszosuch.dev](https://tomaszosuch.dev)

Jednostronicowa wizytówka z sekcjami: doświadczenie, technologie, projekty i kontakt.
Cała treść jest odseparowana od komponentów i trzymana w `src/data/data.ts`.

## Stack

- React 19 + TypeScript
- Vite 8
- Sass (CSS Modules + style globalne)
- GitHub Pages + Cloudflare (domena i DNS)

## Uruchomienie

```bash
yarn install
yarn dev        # serwer deweloperski, otwiera przeglądarkę
yarn build      # build produkcyjny do dist/
yarn preview    # podgląd builda
yarn lint       # ESLint
```

## Deploy

```bash
yarn deploy     # build + publikacja na branch gh-pages
```

Domena pochodzi z pliku `public/CNAME`, `base` w `vite.config.ts` jest ustawione na `/`.
Po zmianie metatagów lub `og-image.png` warto wymusić odświeżenie cache podglądu
w LinkedIn Post Inspector.

## Struktura

```
public/          CNAME, favicon, og-image.png, robots.txt, sitemap.xml
src/
├── components/  komponenty sekcji, każdy z własnym modułem .scss
├── data/        data.ts — treść strony i typy TypeScript
├── hooks/       useScrollReveal (IntersectionObserver)
├── styles/      _variables.scss (custom properties), _global.scss
└── utils/       pluralizeYears
```

## Konwencje

- **CSS Modules** dla stylów komponentu, `_global.scss` dla tego, co współdzielone
  (kontener, nagłówki sekcji, animacja `fade-in`, warianty kolorystyczne tagów `variant-*`)
- **Warianty tagów** są globalne, żeby `Projects` i `Technologies` nie duplikowały tych samych kolorów
- **Treść tylko w `data.ts`** — komponenty nie zawierają tekstów
