# L.I.G.O. SPACE website (prototype)

ES modules, no build step. Browsers block modules on file://, so serve it:

    cd ligo-space && python3 -m http.server 8000   # open http://localhost:8000

## Structure
- css/tokens.css      colors, dark mode, spacing tokens
- css/styles.css      layout and component styles
- js/core/dom.js      h() element builder, store, disk (localStorage)
- js/data/api.js      the ONLY place that talks to storage/backend (swap for real API in Phase 2)
- js/data/config.js   pathways (funnel), impact indicators, initiatives, statuses
- js/components/      reusable UI: common, funnel form, metric, roadmap
- js/pages/           one file per page
- js/main.js          routes + app shell

Add a page: create js/pages/x.js, import it in main.js, add one line to `routes`.
Add a funnel pathway or impact indicator: edit js/data/config.js only.
