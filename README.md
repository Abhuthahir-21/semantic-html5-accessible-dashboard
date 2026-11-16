# Semantic HTML5 & Accessible Component Architecture

Responsive multi-page enterprise dashboard starter using semantic HTML5, CSS, and vanilla JavaScript.

## Structure
- `index.html` — overview dashboard, navigation, sidebar, cards, data table, native modal dialog.
- `reports.html` — report table and accessible filters.
- `settings.html` — accessible form using labels, fieldsets, legends, and native validation.
- `assets/css/styles.css` — responsive styling and visible keyboard focus.
- `assets/js/app.js` — menu, dialog, filters, and form interactions.
- `components/component-guide.md` — semantic component mapping.
- `docs/` — accessibility and validation documentation.
- `tests/` — manual test plan.

## Run
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## W3C validation
Validate **each** HTML page at https://validator.w3.org/nu/ and fix all errors. This project has not been run through the live validator from this environment, so do not claim zero syntax errors until you verify and save the actual results.

## Test
Follow `tests/manual-test-plan.md`. Check keyboard-only navigation, focus visibility, skip link, dialog behaviour, forms, responsive layout, and HTML validation.
