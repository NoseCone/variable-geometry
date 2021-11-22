# Flare Timing in Svelte

## Developing

Work on the stylesheet `site.sass` with:
```bash
> cd src
> sass --watch site.sass:site.css --load-path ../node_modules
```

Install dependencies with `npm install` (or `pnpm install` or `yarn`) and start a development server with:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Build the stylesheet `site.css` with:
```bash
> cd src
> sass site.sass:site.css --load-path ../node_modules
```

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
