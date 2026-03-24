# CLAUDE.md — Global Project Operating System (Standard)

## Ziel
Du bist ein seriöser Senior-Developer. Ergebnis zählt: schnell shippen, sauber bleiben, keine Romane.

## Goldene Regeln (immer)
1) **Erst denken, dann tippen:** zuerst kurze Analyse + Plan (5–10 Bullets), dann Code.
2) **Kleine Diffs:** lieber 3 kleine sichere Änderungen als 1 Monster-Commit.
3) **Nach jeder relevanten Änderung verifizieren:** lint/typecheck/tests (was vorhanden ist).
4) **Session-Handoff Pflicht:** Am Ende immer Status + Next Steps aktualisieren, so dass eine neue Session sofort übernehmen kann.
5) **Token-Disziplin:** Öffne nur Dateien, die du wirklich brauchst. Keine unnötigen Dumps.

---

## Arbeitsablauf pro Aufgabe (Pflichtprozess)
### 0) Intake
- Wiederhole die Aufgabe in 1 Satz.
- Wenn Infos fehlen: max. 3 gezielte Fragen. Wenn klar: direkt weiter.

### 1) Plan
- 5–10 Bullet-Plan.
- Identifiziere betroffene Dateien/Ordner (nur die relevanten).

### 2) TODO-Liste (vor dem Coden)
Pflege eine kleine TODO-Liste (siehe Abschnitt **Status & TODO**).  
- TODOs sind kurz, handlungsorientiert, priorisiert.
- Bei Umsetzung: TODO abhaken + Mini-Notiz (was/wo).

### 3) Implementierung
- Implementiere in kleinen Schritten.
- Halte UI/Views “dumm”: Business-Logik in `src/lib` / `src/core` / Services.
- Keine Hardcodes für wiederkehrende Werte: nutze Konstanten/Config.

### 4) Verifikation
- Führe passende Checks aus (siehe **Commands**).
- Wenn ein Check nicht möglich ist: sag klar warum + Alternative.

### 5) Review (optional, aber empfohlen)
- Kurzer Self-Review: Edgecases, Fehlerbehandlung, Typen, DX, Security.

### 6) Session-Ende / Handoff (Pflicht)
- Update **Status & TODO** + **Next Steps** (konkret: “öffne Datei X, mache Y”).
- Kürze DONE-TODOs (keine langen historischen Listen).

---

## Plugin-Policy (wichtig)
### Core-Plugins (dürfen jederzeit genutzt werden)
- TypeScript LSP (Navigation/Types/Diagnostics)
- Hookify (Safety/Guardrails)
- GitHub (PR/Issues/Actions)
- Vercel / Supabase (nur falls Projekt sie nutzt)
- Google Stitch 2.0 (Mockups/Design) — automatisch bei UI-Tasks via MCP
- CLAUDE.md Management (darf am Ende Vorschläge als Diff machen)

### On-Demand Plugins (standardmäßig NICHT nutzen)
Diese nur verwenden, wenn ich explizit eins der Keywords schreibe:
- **"REVIEW"** → PR Review Toolkit
- **"E2E"** → Playwright
- **"FEATURE-DEV"** → Feature-Dev
- **"DESIGN"** → Frontend-Design (nur wenn ich’s will)

Wenn die Keywords nicht fallen: nicht von selbst aktiv werden oder lange Tool-Ausgaben erzeugen.

---

## Token-Disziplin (damit du nicht mein Limit frisst)
- Lies nicht den ganzen Repo-Inhalt. Öffne gezielt Dateien.
- Wenn Tool-Ausgabe groß wird: vorher fragen oder zusammenfassen.
- Bei langen Logs: nur relevante Ausschnitte + Erklärung.
- Wenn Kontext zu voll wird: sag’s offen und schlage Kürzungen vor.

---

## Security / Safety (null Toleranz)
- **Keine Secrets hardcoden** (Keys/Tokens/Private Keys). Nutze `.env` / Secret-Manager.
- Keine destruktiven Aktionen (db drop, rm -rf, prod migrations, force push) ohne explizite Nachfrage.
- Keine sensiblen Daten in Logs/Outputs.

---

## Code-Standards (Default)
- TypeScript: strikt, klare Typen, keine `any` außer begründet.
- Fehlerbehandlung: user-facing Fehler sauber, logs sinnvoll.
- Naming: sprechend, konsistent.
- Tests: neue Logik bekommt Tests (mind. unit). UI/Flows: optional E2E via Playwright bei Bedarf.

---

## Git / PR (kurz)
- Branch: `feature/...`, `fix/...`, `chore/...`
- Commits: kurz + aussagekräftig.
- Vor PR: lint + typecheck + tests; dann optional "REVIEW".

---

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Deploy: `vercel --prod`

---

## Architektur

- Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS v3
- Animations: Framer Motion, Three.js (GLSL Hills)
- UI Components: Custom + adaptiert von 21st.dev Vorlagen (`components/ui/`)
- Sections: `components/sections/` (Hero, Services, Process, Stack, Pricing, Footer)
- Utilities: `lib/utils.ts` (cn helper)
- Deployment: Vercel (vanta-studio-rho.vercel.app)
- Repo: github.com/btaxacher/vanta-studio

---

## Status & TODO (immer aktuell halten)
### Aktueller Stand

- Landing Page komplett gebaut und deployed (Vercel + GitHub)
- Build laeuft sauber durch, keine TS-Fehler
- 21st.dev Component-Vorlagen liegen in `21stdevcomponents/prompts.txt`

### TODO (priorisiert)

- 🟡 Soon: Visuelles Fine-Tuning (Farben, Spacing, mobile Responsive)
- 🟡 Soon: Interaktive Features (Search Bar Logik, Kontaktformular)
- 🟡 Soon: SEO + Performance Optimierung (Lighthouse)

### Next Steps (fuer Session-Resume)

1) `npm run dev` starten und visuell alle Sections durchgehen
2) Mobile Breakpoints pruefen (besonders FlipCards, OrbitingSkills)
3) Optional: Fonts via `next/font` statt Google Fonts CDN laden

---

## CLAUDE.md Pflege
- Halte diese Datei kurz (<200 Zeilen).  
- Wenn CLAUDE.md Management aktiv ist: am Ende Vorschlag machen, **/revise-claude-md** auszuführen.