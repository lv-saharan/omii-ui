const baseUrl = new URL('../../tinymce/', import.meta.url).href
export async function setup() {
    return await import(baseUrl + "tinymce.js")
}
export async function create(el, options, host) {
    await setup()
    tinymce.init({
        target: el,
        base_url: baseUrl,
        setup: (editor) => {
            editor.on('change', (e) => {
                host.value = editor.getContent()
                host.fire("change", { value: host.value })
            });
        }
    })
}

