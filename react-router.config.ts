import type { Config } from "@react-router/dev/config";

export default {
  // Static build without a server: the app is built into build/client.
  // To turn on server-side rendering, set `ssr: true`
  ssr: false,
  // Prerender all static routes to HTML at build time
  prerender: true,
} satisfies Config;
