# Semantic component guide

| Component | Semantic elements | Purpose |
|---|---|---|
| Site header | `<header>` | Branding and primary navigation context |
| Primary navigation | `<nav aria-label="Primary navigation">` | Main page links |
| Sidebar | `<aside>` with `<nav>` | Related navigation and supporting content |
| Main content | `<main>` | Unique primary content |
| Content group | `<section aria-labelledby>` | Thematically grouped content with a heading |
| Dashboard card | `<article>` | Self-contained metric item |
| Data table | `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th scope>` | Tabular data with header relationships |
| Form group | `<fieldset>` and `<legend>` | Related controls grouped with a name |
| Modal | `<dialog>` | Native dialog with keyboard support |
| Footer | `<footer>` | Page-level footer content |

Prefer native HTML semantics over generic containers. Use ARIA only where native HTML does not provide the required name or state.
