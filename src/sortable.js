const importURL = import.meta.url;
const JS = "sortable.core.esm.js"
let Root = new URL(`./sortablejs/`, importURL).href
let Sortable = null
let SortabelPlugins = {
    AutoScroll: false,
    Remove: false,
    Revert: false,
    MultiDrag: false,
    Swap: false
}
//插件一旦使用，不能卸载
export async function use({ autoScroll, remove, revert, multiDrag, swap } = {
    autoScroll: true,
    remove: true,
    revert: true,
    multiDrag: false,
    swap: false
}, root = Root) {

    if (!Sortable) {
        const path = new URL(JS, root).href
        Sortable = await import(path)
    }

    if (autoScroll && !SortabelPlugins.AutoScroll) {
        SortabelPlugins.AutoScroll = true
        Sortable.Sortable.mount(new Sortable.AutoScroll())
    }
    const [Remove, Revert] = Sortable.OnSpill
    if (remove && !SortabelPlugins.Remove) {
        SortabelPlugins.Remove = true
        Sortable.Sortable.mount(Remove)
    }
    if (remove && !SortabelPlugins.Remove) {
        SortabelPlugins.Remove = true
        Sortable.Sortable.mount(Remove)
    }
    if (revert && !SortabelPlugins.Remove) {
        SortabelPlugins.Revert = true
        Sortable.Sortable.mount(Revert)
    }

    if (multiDrag && !SortabelPlugins.MultiDrag) {
        SortabelPlugins.MultiDrag = true
        Sortable.Sortable.mount(new Sortable.MultiDrag())
    }

    if (swap && !SortabelPlugins.Swap) {
        SortabelPlugins.Swap = true
        Sortable.Sortable.mount(new Sortable.Swap())
    }
    return Sortable.Sortable

}

export function setRoot(root) {
    Root = root
}

export default {
    use,
    setRoot
}