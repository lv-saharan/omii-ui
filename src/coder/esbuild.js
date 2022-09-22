import esbuild from 'esbuild'
import path from 'path'
import { outputRoot } from '../../esbuild.js'
const uiroot = path.resolve()

const workerEntryPoints = [
    'vs/language/json/json.worker.js',
    'vs/language/css/css.worker.js',
    'vs/language/html/html.worker.js',
    'vs/language/typescript/ts.worker.js',
    'vs/editor/editor.worker.js'
];
esbuild.build({
    entryPoints: workerEntryPoints.map((entry) => path.join(uiroot, `./node_modules/monaco-editor/esm/${entry}`)),
    bundle: true,
    format: 'iife',
    outbase: path.join(uiroot, './node_modules/monaco-editor/esm/'),
    outdir: path.join(outputRoot, "./monaco/")
});

esbuild.build({
    entryPoints: [path.join(path.dirname(process.argv[1]), './monaco/index.js')],
    bundle: true,
    format: 'esm',
    loader: {
        '.ttf': 'file'
    },
    outdir: path.join(outputRoot, "./monaco/")
});
