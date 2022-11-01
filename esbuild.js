import { sassPlugin } from 'esbuild-sass-plugin'
import pkg from './package.json'  assert { type: "json" }
import esbuild from 'esbuild'
import { dev } from "local-dev-server"
import fs from "fs"

let [mode] = process.argv.splice(2) ?? "prod";

export const outputRoot = `./dist`
//export const outputRoot = `D:\\开发\\RuoYi-Vue-master\\rouyi-omii\\es-lib\\omii-ui\\latest`
//export const outputRoot = `../es-lib/omii-ui/${pkg.version}`


let outfile = `${outputRoot}/omii-ui.js`;

let defaultOptions = {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    format: "esm",
    bundle: true,
    sourcemap: true,
    minify: true,
}

let buildOptions = {
    ...defaultOptions,
    entryPoints: ['src/index.jsx'],
    outfile,
    plugins: [sassPlugin({
        type: "css-text"
    })],
}
//minify sortablejs
esbuild.build({
    ...buildOptions,
    entryPoints: ['node_modules/sortablejs/modular/sortable.core.esm.js'],
    outfile: `${outputRoot}/sortablejs/sortable.core.esm.js`
})

const editorOptions = [
    {
        entryPoints: ['./src/editor/engines/tinymce.js'],
        outfile: `${outputRoot}/editor/engines/tinymce.js`
    }
]
switch (mode) {
    case "prod":
        esbuild.build(buildOptions)
        for (let editorOption of editorOptions) {
            esbuild.build({
                ...buildOptions,
                ...editorOption
            })
        }
        break;
    case "dev":
        const { reload } = dev({ ...pkg.localDev.server, openBrowser: false })
        const devOptions = {
            watch: {
                onRebuild(error, result) {
                    if (error) console.error('watch build failed:', error)
                    else {
                        console.log('watch build succeeded:', result)
                        reload("ui rebuild ok")
                    }

                },
            }
        }
        esbuild.build({
            ...buildOptions,
            ...devOptions
        })

        for (let editorOption of editorOptions) {
            esbuild.build({
                ...buildOptions,
                ...editorOption,
                ...devOptions
            })
        }
        break;
}


