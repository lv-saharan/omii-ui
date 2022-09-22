

import fs from 'fs'
import jsdom from 'jsdom'
import jq from 'jquery'
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
const window = document.defaultView;
const $ = jq(window);

const root = './node_modules/@material-design-icons/svg'
const types = ['filled', 'outlined', 'round', 'sharp', 'two-tone']
for (let type of types) {
    let svgsRoot = `${root}/${type}/`
    fs.readdir(svgsRoot, function (err, files) {
        let targetRoot = `./src/icon/icons`
        if (!fs.existsSync(targetRoot)) {
            fs.mkdirSync(targetRoot)
        }
        let fMultiWriter = fs.createWriteStream(`${targetRoot}/${type}.jsx`);
        fMultiWriter.write("const {h} = omii;\n")
        fMultiWriter.write("export default {\n")
        for (let file of files) {
            console.log(`type:${type}\tfile:${file}`)
            let targetTypeRoot = `${targetRoot}/${type}`
            if (!fs.existsSync(targetTypeRoot)) {
                fs.mkdirSync(targetTypeRoot)
            }
            let fileName = file.substring(0, file.length - 4)
            let content = fs.readFileSync(`${svgsRoot}${file}`, { encoding: "utf-8" })
            let $svg = $(content)
            let singleContent = "const {h} = omii;\n"

            if ($svg.children().length == 1) {
                fMultiWriter.write(`"${fileName}":${$svg.html()},\n`)
                singleContent += `export default ${$svg.html()}`
            } else {
                fMultiWriter.write(`"${fileName}":[${$svg.children().get().map(c => {
                    return c.outerHTML
                }).join(',')}],\n`)
                singleContent += `export default [${$svg.children().get().map(c => {
                    return c.outerHTML
                }).join(',')}]`
            }
            fs.writeFileSync(`${targetTypeRoot}/${fileName}.jsx`, singleContent)

        }
        fMultiWriter.write("}")

        fMultiWriter.end()
        fMultiWriter.close()

    })

}
