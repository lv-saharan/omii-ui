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
const rootdir = path.dirname(process.argv[1])
const types = ['filled', 'outlined', 'round', 'sharp', 'two-tone']

let iconsOptions = {
    ...defaultOptions,
    entryPoints: [...types, "file-type"].map(type => path.join(rootdir, `icons/${type}.jsx`)),
    outdir: `${outputRoot}/icons`,
    bundle: false,
    sourcemap: false,

}
//bundle
esbuild.buildSync(iconsOptions)

const iconsRoot = path.join(rootdir, 'icons')
for (let type of types) {

    let typeIconsRoot = `${iconsRoot}/${type}/`

    fs.readdir(typeIconsRoot, function (err, files) {
        let iconOptions = {
            ...defaultOptions,
            entryPoints: files.map(file => `${typeIconsRoot}${file}`),
            outdir: `${outputRoot}/icons/${type}`,
            bundle: false,
            sourcemap: false,
        }
        esbuild.build(iconOptions)
    })

}