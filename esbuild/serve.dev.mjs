import esbuild from 'esbuild';
import { devSettings } from './settings.mjs';

const ctx = await esbuild.context(devSettings);

await ctx.watch();

const { host, port } = await ctx.serve({
  port: 5500,
  servedir: 'dist',
  fallback: "dist/index.html"
});

console.log(`Serving app at ${host}:${port}.`);