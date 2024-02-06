import esbuild from 'esbuild';
import { devSettings } from './settings.mjs';

await esbuild.build(devSettings);
