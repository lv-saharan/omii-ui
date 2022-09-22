import { sassPlugin } from 'esbuild-sass-plugin'
 
import fs from "fs"
import path from "path"
import esbuild from 'esbuild'
import { outputRoot } from '../../esbuild.js'

 
let defaultOptions = {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    format: "esm",
    bundle: true,
    sourcemap: true,
    minify: true,
}

const bootstrapRoot = path.dirname(process.argv[1])
let csses = []
fs.readdirSync(bootstrapRoot).forEach(
    file => {
        if (path.extname(file) == ".scss" && !file.startsWith("_")) {
            csses.push(file.substring(0, file.length - 5))
        }
    }
)
let fwriter = fs.createWriteStream(`${bootstrapRoot}/stylesheets.js`);
fwriter.write("export default [")
fwriter.write(csses.map(css => `\"${css}\"`).join(','))
fwriter.write("]")
fwriter.end()
fwriter.close()
console.log("css to build", csses)
let cssOptions = {
    ...defaultOptions,
    entryPoints: csses.map(css => `${bootstrapRoot}/${css}.scss`),
    outdir: `${outputRoot}/bootstrap`,
    bundle: false,
    sourcemap: false,
    plugins: [sassPlugin({
    })],
}

esbuild.build(cssOptions)

fs.readdirSync(`${bootstrapRoot}/themes`).forEach(
    file => {
        if (path.extname(file) == ".scss" && !file.startsWith("_")) {
            let theme = file.substring(0, file.length - 5)
            esbuild.build({
                ...defaultOptions,
                entryPoints: [`${bootstrapRoot}/themes/${file}`],
                outfile: `${outputRoot}/bootstrap/theme.${theme}.css`,
                bundle: false,
                sourcemap: false,
                plugins: [sassPlugin({
                })],
            })
        }
    }
)
