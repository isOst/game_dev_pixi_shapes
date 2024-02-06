import esbuild from 'esbuild';
import { prodSettings } from './settings.mjs';

await esbuild.build(prodSettings);
