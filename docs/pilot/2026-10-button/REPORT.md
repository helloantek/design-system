# Pilot Figma → kod: Button

> **Historical record.** This pilot ran in `helloantek/visual-memory-app` (branch `claude/figma-button-pilot`, folder `design-system/`) before this repository existed. Paths and commands below refer to that folder. `raw/` holds the unmodified `get_design_context` output it measured; its asset paths pointed at local copies that are not kept here. The measurement tooling now lives in `tools/figma-visual`.

**Komponent:** Figma `Button` (component set `28:22033`, plik `4tiBR2hKd4yvQehtKhM9OY`). 840 wariantów: Variant 2 × Style 7 × State 6 × Size 5 × Shape 2.
**Narzędzie:** Figma MCP `get_design_context` (React + Tailwind), czyli to, co agent dostaje „z pudełka”.
**Cel:** React + Storybook, bez Tailwinda.

## Wynik w skrócie

| | Surowy output MCP | Po dopracowaniu |
|---|---|---|
| Zgodność wizualna (średni % różnych pikseli vs render z Figmy) | **8,5%** (15 wariantów) | **1,7%** (60 wariantów), max 5,1% |
| …po poprawieniu tylko nazwy fontu | 3,0% | 2,7% (te same 15 wariantów) |
| Wymiary zgodne z Figmą (±1,5 px) | 2 / 15 | 60 / 60 |
| Element | `<div>` | `<button>` |
| Fokus z klawiatury / Enter / Spacja | nie / nie / nie | tak / tak / tak |
| Hover, Press, Focus | osobne statyczne komponenty | `:hover`, `:active`, `:focus-visible` |
| Motywy (4 tryby Themes, 4 Radius, 2 Font) | brak, zaszyty jeden tryb | wszystkie, przez tokeny |
| Pokrycie wariantów | 1 plik = 1 wariant (15 plików, 798 linii) | 1 komponent = 840 wariantów (116 TSX + 327 CSS) |
| Zahardkodowane wartości | 143 × px, 67 × kolor w 15 plikach | 5 kolorów (efekty, które w Figmie nie są zmiennymi) |

**Wniosek:** wizualnie MCP jest bardzo dokładny. Po naprawie jednego błędu fontu różni się od wersji dopracowanej o 0,3 p.p. Jakość „z pudełka” jest słaba w tym, czego na obrazku nie widać: semantyka, interakcje, API, tokeny i motywy. Surowy output nadaje się jako **specyfikacja wartości** (paddingi, kolory, cienie, rozmiary ikon), a nie jako kod komponentu.

## Co dokładnie jest nie tak w surowym outpucie

1. **Niepoprawny font:** `font-[family-name:var(--body,'Inter:Medium')]`. `'Inter:Medium'` nie jest nazwą rodziny, więc przeglądarka renderuje **Liberation Serif**, nawet gdy Inter jest załadowany. Daje to ok. 6 px różnicy szerokości i większość rozbieżności wizualnej.
2. **Tokeny tylko z nazwy:** kod odwołuje się do `var(--bg\/state\/primary, #111115)`, ale nic tych zmiennych nie definiuje. Zawsze działa fallback, czyli jeden zaszyty tryb (Theme-1-Light). Pozostałe 3 motywy oraz tryby Radius i Font giną.
3. **Brak interaktywności:** korzeniem jest `<div>`. Nie da się na niego wejść klawiaturą ani go aktywować, a czytnik ekranu nie ogłasza przycisku. **axe tego nie wykrywa**: `div` bez roli nie jest dla niego naruszeniem, więc potrzebny jest osobny test zachowania.
4. **API przepisane z warstw:** typy z jedną wartością (`style?: "Primary"`, `size?: "md"`), propsy `badge1`, `leadIcon1`, `tailIcon1`. Właściwość komponentu **Tooltip** w ogóle nie trafiła do kodu.
5. **Stroke jako CSS border:** w Figmie stroke jest „inside” i nie zmienia wymiarów. W kodzie Secondary i Dashed są o 2 px wyższe i szersze (38 px zamiast 36 px).
6. **Loading z `w-[143px]`:** szerokość zaszyta na sztywno pod tekst „Button”.
7. **Ikony jako `<img>` z zaszytym kolorem:** osobny plik SVG na każdy kolor zamiast `currentColor`. URL-e assetów wygasają po 7 dniach.
8. **Absolutnie pozycjonowane warstwy tła i cienia:** 50 wystąpień `absolute` w 15 plikach, odwzorowanie warstw Figmy zamiast CSS.

## Co poprawiono w wersji dopracowanej

- Pipeline tokenów: `tokens/figma-variables.json` (wartości wszystkich trybów wyeksportowane z Figmy) → `scripts/build-tokens.mjs` → `tokens.css`.
- Jeden komponent `<Button>` z propsami odpowiadającymi właściwościom Figmy, stanami CSS, `loading` (zachowuje szerokość, `aria-busy`, blokuje `onClick`) i wariantem icon-only z wymaganym `aria-label`.
- Stroke jako nakładka, która nie zmienia wymiarów, tak jak w Figmie.
- Storybook: Playground, Icon only, macierz wszystkich stylów i stanów, rozmiary, kształty, 4 motywy, addon a11y.

## Błędy złapane przez testy wizualne w mojej własnej implementacji

Testy znalazły trzy błędy, które przeoczyłem przy pisaniu dopracowanej wersji. Wszystkie są poprawione, a liczby powyżej pochodzą z końcowego pomiaru:

- badge 28 px zamiast 20 px (brak `box-sizing: border-box`),
- brak focus ringu w Dashed, Soft i Ghost (`none` wewnątrz listy `box-shadow` unieważnia deklarację),
- zmiana szerokości przy Loading (93 px zamiast 143 px).

Wniosek: dopracowanie bez porównania z Figmą też przepuszcza błędy, więc pixel diff warto mieć w CI.

## Uwagi do designu (nie do kodu)

- **Kontrast poniżej WCAG AA (4,5:1)** wynika z samych tokenów:
  - Destructive, biały tekst na `#e74341`: 3,97:1 (Theme-1).
  - Destructive, biały tekst na `#eb3e5b`: 3,9:1 (Theme-2).
  - Theme-1-Dark Destructive: 4,45:1.
  - Theme-2 Primary: cień tekstu obniża kontrast do 3,25:1.
- Ghost Muted icon-only: w Default ikona ma `icon/default-muted`, a w Hover i Press `icon/default-subtle`. Inne style tego nie robią, więc to prawdopodobnie przeoczenie.
- Właściwość `Tooltip` jest zdefiniowana w component secie, ale żaden wariant nie ma warstwy tooltipa.

## Metoda

- **Referencje:** 60 renderów 1× z Figmy (`reference/`, `manifest.json`): wszystkie style × wszystkie stany w md, 5 rozmiarów, oba kształty, icon-only.
- **Pixel diff:** Playwright + pixelmatch (threshold 0,1, bez antyaliasingu), dopasowanie położenia ±3 px. Pozostałe 1–5% różnic to głównie rasteryzacja tekstu: Figma podaje szerokość „Button” jako 45 px, Chromium 43,8 px.
- **Stany:** Hover, Press i Focus wywoływane prawdziwą myszą i klawiaturą (Tab), a nie wymuszone klasą.
- **Zachowanie:** fokus, Enter i Spacja, wywołania `onClick` w stanach disabled i loading, font faktycznie użyty przez przeglądarkę (CDP).
- **axe-core** na harnessie i na każdej story.
- **Ograniczenie:** proxy kontenera blokuje `www.figma.com`, więc assety i rendery pobierałem przez Plugin API (`use_figma`) i zrzuty MCP, a nie przez URL-e assetów.

Uruchomienie: zobacz `../README.md` → *Pilot measurements*.
