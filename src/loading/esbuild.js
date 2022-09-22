import { sassPlugin } from 'esbuild-sass-plugin'
import { outputRoot } from '../../esbuild.js'
import fs from "fs"
import path from "path"
import esbuild from 'esbuild'
let defaultOptions = {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    format: "esm",
    bundle: true,
    sourcemap: true,
    minify: true,
}
const loadingsRoot = path.join(path.dirname(process.argv[1]), "effects")
fs.readdirSync(loadingsRoot).forEach(file => {
    let effectDir = path.join(loadingsRoot, file)
    if (fs.statSync(effectDir).isDirectory()) {
        let effectFile = path.join(effectDir, 'index.jsx')
        if (fs.existsSync(effectFile)) {
            let effect = path.basename(file, "jsx")
            let loadingsOptions = {
                ...defaultOptions,
                entryPoints: [effectFile],
                outfile: `${outputRoot}/loadings/${effect}.js`,
                bundle: true,
                sourcemap: false,
                plugins: [sassPlugin({
                    type: "css-text"
                })],
            }
            console.log("build loadings：", effect)
            esbuild.build(loadingsOptions)
        }
    }
})