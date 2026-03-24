# Creative Economies Scorecard

**Knowledge on Tap · Monica Poling**

Score any US state's creative economy against national benchmarks using AI-powered analysis grounded in BEA/NASAA federal data. Select up to five states to compare.

## What it does

- Scores states across three dimensions: arts & cultural employment, creative industry GDP share, and education/pipeline
- Assigns a structural archetype (Developing, At Risk, Leading, Paradox, Model)
- Generates a plain-language narrative specific to each state
- Shows ROI per $1 of public arts investment
- Compares up to five states side by side with synthesized insight

## Data sources

- BEA Arts and Cultural Production Satellite Account (ACPSA) 2023
- NASAA FY2025 State Arts Agency Revenues Report
- NEA State Profiles
- State arts agency budget documents

## Stack

- Single HTML file (`index.html`)
- Vercel serverless function (`/api/anthropic.js`) proxies Claude API calls
- No database · no dependencies · no build step

## Deploy

1. Fork or clone this repo
2. Import to [Vercel](https://vercel.com)
3. Add environment variable: `ANTHROPIC_API_KEY` = your Anthropic API key
4. Deploy — done

## Environment variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key from console.anthropic.com |

## Local dev

Open `index.html` directly in a browser to preview the UI. API calls won't work locally without a running serverless environment — use `vercel dev` for full local testing.

## Part of the Knowledge on Tap series

This is app in the **40 Apps in 30 Weeks** live build series.
Watch it get built at [monicapoling.com](https://monicapoling.com)

---
*Built with Claude · Powered by federal public data · Free to use*
