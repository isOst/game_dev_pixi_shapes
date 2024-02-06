import copyStaticFiles from 'esbuild-copy-static-files';
import {sassPlugin} from 'esbuild-sass-plugin';

const copyTemplateSettings = {
    src: 'assets/template',
    dest: 'dist',
    dereference: true,
    errorOnExist: false,
    preserveTimestamps: true
};

const commonSettings = {
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    plugins: [
        copyStaticFiles(copyTemplateSettings),
        sassPlugin()
    ]
};

export const devSettings = {
    ...commonSettings,
    sourcemap: true,
    define: {
        'process.env.ENV': '"development"'
    }
};

export const prodSettings = {
    ...commonSettings,
    define: {
        'process.env.ENV': '"production"'
    }
};
