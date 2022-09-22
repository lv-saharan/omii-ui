/**
 * file 对象转换成base64
 * @param {*} file 
 */
let readFileAsBase64 = async (file) => {
    return new Promise(resolve => {
        let fs = new FileReader();
        fs.readAsDataURL(file);
        fs.onload = e => {
            resolve(e.target.result);
        };
    });
};
/**
 * 截取base64数据部分
 * @param {*} base64 
 */
let splitBase64 = async base64 => {
    return base64.split(";base64,")[1]
}
/**
 * 通过图片Url地址，将图片转换成base64
 * 跨域图片不一定可以成功
 * @param {*} url 
 */
let convertImageUrlToBase64 = url => {
    return new Promise(resolve => {
        let image = new Image()
        image.crossOrigin = 'anonymous'
        image.src = url
        image.onload = () => {
            resolve(convertImageToBase64(image))
        }
    })
}
/**
 * 使用fetch将图片url转换成file对象
 * 需要跨域是需要对应url允许当前域访问
 * @param {*} url 
 */
let convertImageUrlToFile = url => {
    return new Promise((resolve, reject) => {
        try {
            fetch(url).then(async response => {
                if (response.status == 200) {
                    let image = new Image()
                    let blob = await response.blob()
                    image.crossOrigin = 'anonymous'
                    image.src = URL.createObjectURL(blob)
                    image.onload = () => {
                        URL.revokeObjectURL(image.src)
                        resolve(convertImageToFile(image))
                    }
                    image.onerror = (e) => {
                        reject(e)
                    }
                } else {
                    reject(new Error(response.status))
                }

            })
        } catch (exc) {
            reject(exc)
        }
    })
}
/**
 * 将图像对象转换成文件对象
 * @param {*} image 
 * @param {*} fileName 
 */
let convertImageToFile = (image, fileName = 'image.png') => {
    return convertBlobToFile(convertImageToBlob(image), fileName, "image/png")
}
/**
 * 将图像对象转换成blob
 * @param {*} image 
 */
let convertImageToBlob = (image) => {
    return convertBase64ToBlob(convertImageToBase64(image))
}
/**
 * 将图像转换成Base64
 * @param {*} image 
 * @param {*} type 
 * @param {*} quality 
 */
let convertImageToBase64 = (image, type = 'image/png', quality = .8) => {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight
    ctx.drawImage(image, 0, 0)
    return canvas.toDataURL(type, quality)
}
/**
 * 将base64转换成blob
 * @param {*} base64 
 */
let convertBase64ToBlob = (base64) => {
    const parts = base64.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}
/**
 * 将blob转换成文件
 * @param {*} blob 
 * @param {*} fileName 
 * @param {*} contentType 
 */
let convertBlobToFile = (blob, fileName, contentType) => {
    return new File([blob], fileName, { type: contentType, lastModified: Date.now() });
}

/**
 * 为图像、视频文件对象生成成缩略图
 * @param {image or video} file 
 * @param {宽度} fileWidth 
 * @param {高度} fileHeight 
 * @param {缩略图最大宽度} maxWidth 
 * @param {缩略图最大高度} maxHeight 
 * @param {image/jpeg or image/png ...} type 
 * @param {.1 ~ 1} quality 
 */
let createFileThumb = (file, fileWidth, fileHeight, maxWidth, maxHeight, type = 'image/png', quality = .8) => {
    let width = maxWidth > fileWidth ? fileWidth : maxWidth
    let height = width * fileHeight / fileWidth
    if (height > maxHeight) {
        height = maxHeight
        width = height * fileWidth / fileHeight
    }
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height
    ctx.drawImage(file, 0, 0, fileWidth, fileHeight, 0, 0, width, height)
    return canvas.toDataURL(type, quality)
}
/**
 * 创建图片缩略图
 * @param {*} image 
 * @param {*} maxWidth 
 * @param {*} maxHeight 
 * @param {*} type 
 * @param {*} quality 
 */
let createImageThumb = (image, maxWidth, maxHeight, type = 'image/png', quality = .8) => {
    return createFileThumb(image, image.naturalWidth, image.naturalHeight, maxWidth, maxHeight, type, quality)
}
/**
 * 为图像文件创建缩略图
 * @param {*} file 
 * @param {*} maxWidth 
 * @param {*} maxHeight 
 * @param {*} type 
 * @param {*} quality 
 */
let createImageFileThumb = async (file, maxWidth, maxHeight, type = 'image/png', quality = .8) => {
    return new Promise(resolve => {
        let image = new Image()
        image.src = window.URL.createObjectURL(file)
        image.onload = () => {
            window.URL.revokeObjectURL(image.src);
            resolve(createImageThumb(image, maxWidth, maxHeight, type, quality))
        }
    })
}

/**
 * 创建视频文件的缩略图
 * @param {*} file 
 * @param {*} maxWidth 
 * @param {*} maxHeight 
 * @param {*} type 
 * @param {*} quality 
 */
let createVideoFileThumb = (file, maxWidth = 100, maxHeight = 100, type = 'image/jpeg', quality = .8) => {
    return new Promise((resolve, reject) => {
        try {
            let video = document.createElement('video')
            video.src = window.URL.createObjectURL(file)
            video.preload = "auto"
            video.onloadeddata = () => {
                resolve(createVideoThumb(video, maxWidth, maxHeight, type, quality))
                window.URL.revokeObjectURL(video.src);
            }
            video.onerror = (e) => {
                window.URL.revokeObjectURL(video.src);
                reject(e)
            }
        }
        catch (exc) {
            reject(exc)
        }

    })
}
/**
 * 创建视频对象的缩略图
 * @param {*} video 
 * @param {*} maxWidth 
 * @param {*} maxHeight 
 * @param {*} type 
 * @param {*} quality 
 */
let createVideoThumb = (video, maxWidth = 100, maxHeight = 100, type = 'image/jpeg', quality = .8) => {
    return createFileThumb(video, video.videoWidth, video.videoHeight, maxWidth, maxHeight, type, quality)
}

let getPreviewUrl = (imageFile) => {
    if (!(imageFile instanceof File) || imageFile.type.indexOf("image/") != 0) return null
    let image = new Image();
    image.src = URL.createObjectURL(imageFile);
    image.onload = () => {
        URL.revokeObjectURL(image.src);
    };
    return image.src;
}
export {
    convertImageUrlToBase64,
    createVideoThumb,
    createVideoFileThumb,
    convertImageUrlToFile,
    convertBase64ToBlob,
    convertBlobToFile,
    convertImageToBase64,
    convertImageToBlob,
    convertImageToFile,
    splitBase64,
    readFileAsBase64,
    createImageFileThumb,
    createImageThumb,
    getPreviewUrl
}

export default {
    convertImageUrlToBase64,
    createVideoThumb,
    createVideoFileThumb,
    convertImageUrlToFile,
    convertBase64ToBlob,
    convertBlobToFile,
    convertImageToBase64,
    convertImageToBlob,
    convertImageToFile,
    splitBase64,
    readFileAsBase64,
    createImageFileThumb,
    createImageThumb,
    getPreviewUrl
}
