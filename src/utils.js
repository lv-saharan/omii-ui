
/**
 * 清除html里面的标记
 * @param {*} html 
 * @param {*} removeNewLine 
 */
const cleanHTML = (html, removeNewLine = false) => {
    html = html
        .replace(/\n/g, "")
        .replace(/<br\/?>/gi, "\n")
        .replace(/<div[^>]*>/gi, "\n")
        .replace(/<[^>]*\/?>/gi, "")
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/&quot;/gi, '"')
    if (removeNewLine) {
        html = html.replace(/\n/ig, "")
    }

    return html
};
/**
 * 判断时间是否是今天
 * @param {*} time 
 */
const isToday = (time) => {
    const now = new Date();
    return (
        now.getFullYear() == time.getFullYear() &&
        now.getMonth() == time.getMonth() &&
        now.getDate() == time.getDate()
    );
}
/**
 * 判断时间是不是昨天
 * @param {*} time 
 */
const isYesterday = (time) => {
    const now = new Date();
    return (
        now.getFullYear() == time.getFullYear() &&
        now.getMonth() == time.getMonth() &&
        now.getDate() == time.getDate() + 1
    );
}

/**
 * 获取扩展名
 * @param {*} name 
 */
const getExtension = name => {
    if (!name) return null
    const m = name.match(/\.\w+$/)
    if (!m) return null
    return m.toString().toLowerCase()
}

const getName = name => {
    if (!name) return null
    const index = name.lastIndexOf(".")
    if (index == -1) return name
    return name.substring(0, index)
}
const k = 1024
const sizeNames = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
/**
 * 格式化文件大小
 * @param {*} size 
 */
const formatSize = size => {
    //大于pb不太可能
    size = Number.parseInt(size)
    let result = size
    let nameIndex = 0
    while (result > k) {
        result /= k
        nameIndex++
    }
    return result.toFixed(nameIndex == 0 ? 0 : 2) + sizeNames[nameIndex]
}
/**
 * 下载指定url
 * @param {*} url 
 * @param {*} name 
 */
const downloadUrl = (url, name) => {
    // 创建一个a链接
    const aTag = document.createElement("a")
    // 给下载文件命名
    aTag.download = name
    // 创建下载
    aTag.href = url
    aTag.target = '_blank'
    // 开始下载
    aTag.click();
}
const tryExtension = (yesCallback, noCallback) => {
    if (window.chrome.extension) {
        yesCallback()
    } else {
        noCallback()
    }
}
export const reflow = (element) => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
};

const extensionMap = [
    [[".doc", ".docx"], "word"],
    [[".ppt", ".pptx"], "powerpoint"],
    [[".xls", ".xlsx"], "excel"],
    [[".zip", ".rar"], "zip"],
    [[".pdf"], "pdf"],
]
export const getFileType = (ext) => {
    if (!ext) return "file"
    ext = ext.toLowerCase()
    const item = extensionMap.find(kv => kv[0].includes(ext))
    if (item == null) return "file"
    else return item[1]

}
export {
    tryExtension,
    downloadUrl,
    getExtension,
    getName,
    cleanHTML,
    isToday,
    isYesterday,
    formatSize
}

export default {
    tryExtension,
    getFileType,
    downloadUrl,
    getName,
    getExtension,
    cleanHTML,
    isToday,
    isYesterday,
    formatSize
}
