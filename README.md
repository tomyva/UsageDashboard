# Usage Atlas — Phase 1

A responsive, installable demo PWA for exploring OpenAI token usage. All values are deterministic sample data; no credentials, API calls, or billing data are used.

## Run it

From this folder, run `python -m http.server 8080`, then open `http://localhost:8080`. To enable the service worker and install prompt, use this local server rather than opening the HTML file directly.

Run the logic tests with `npm test` (Node.js 18+ required).

## Included

- Date presets and custom range selection, persisted locally
- Token allowance, comparison summaries, daily trend, model allocation, and searchable/sortable activity table
- Dark/light preference persistence and responsive layout
- Basic offline PWA shell

## Deliberate Phase 1 limits

The dashboard uses mock records only. Live OpenAI data, imports, alerts, widgets, authentication, and native apps are intentionally reserved for subsequent phases.
