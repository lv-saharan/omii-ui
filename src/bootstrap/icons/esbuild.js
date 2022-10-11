import fs from "fs"
import path from "path"
import esbuild from 'esbuild'
import { outputRoot } from '../../../esbuild.js'

const svgRoot = './node_modules/bootstrap-icons/icons'

const entryPoints = []

fs.readdirSync(svgRoot).forEach(file => {
    if (path.extname(file) == ".svg") {
        entryPoints.push(path.join(svgRoot, file))
    }
})


let svgOnLoadPlugin = {
    name: 'svgPlugin',
    setup(build) {
        // Load ".txt" files and return an array of words
        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            let text = await fs.promises.readFile(args.path, 'utf8')
            const pathes = text.match(/</g)

            return {
                contents: `
                const {h} = omii;
                export default ${text.replace(/<svg[^>]*>/, pathes.length == 3 ? "" : "<>").replace(/<\/svg>/, pathes.length == 3 ? "" : "</>")}`,
                loader: 'jsx',
            }
        })
    },
}


let defaultOptions = {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    entryPoints,
    format: "esm",
    bundle: false,
    sourcemap: false,
    minify: true,
    plugins: [svgOnLoadPlugin],
    loader: { '.svg': 'jsx' },
    outdir: `${outputRoot}/bootstrap/icons`
}

esbuild.build(defaultOptions)
