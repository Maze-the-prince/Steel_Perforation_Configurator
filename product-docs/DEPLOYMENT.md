# Deployment

## Local

```bash
npm install
npm start
```

`npm start` builds the current React application into `docs/` and then starts the Node API/static server on port 8080.

## Development

```bash
npm install
npm run dev
```

Vite runs on port 5173. If API-backed RFQ/analytics are required during development, start `node server.mjs` separately after a build.

## Static hosting

Run `npm run build` and publish the generated `docs/` directory. Static hosting keeps the configurator, share URL, local save, PDF, DXF, CSV and most AR behavior. API-backed analytics/configuration-code storage/RFQ database require the Node service or an equivalent backend.
