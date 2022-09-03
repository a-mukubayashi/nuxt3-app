# Nuxt 3 Minimal Starter

- webpack5, vite support
- use esbuild
- include vue router
- server engine `Nitro`
- api
  - $fetch -> [ohmyfetch](https://github.com/unjs/ohmyfetch)
  - middleware [Nitro](https://github.com/unjs/nitro) includes [h3](https://github.com/unjs/h3) http server
- TypeScript

- `public/` server root
  - 静的アセットの公開サーバー(ex: image)
- `assets/` build tools asset

  - ローダー(webpack or Vite)を介して拡張が可能（ex: css, stylesheet, font）

- server

  - nuxt build
  - node .output/server/index.mjs
  - -> Listening on http://localhost:3000
    - if Error: listen EADDRINUSE: address already
    - `lsof -i:3000` and `sudo kill -9 [PID]`
  - access http://localhost:3000/api/hello
  - return `{"api":"works"}`

- data が廃止され `ref` `reactive` を使用
  - ref 独立したプリミティブな値（string, number, boolean）
  - reactive 複数のプロパティを持つ値(Object)
  - [Nuxt 3 State Management: Pinia vs useState](https://www.vuemastery.com/blog/nuxt-3-state-mangement-pinia-vs-usestate/)

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
