export default (file, progress, action) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', action);
    xhr.setRequestHeader("Authorization", "Bearer " + Token.value);
    xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
            progress(e.loaded / e.total * 100);
        }
    };

    xhr.onload = () => {
        if (xhr.status === 403 || xhr.status < 200 || xhr.status >= 300) {
            reject({ message: 'HTTP Error: ' + xhr.status, status: xhr.status });
            return;
        }
        const json = JSON.parse(xhr.responseText);
        resolve(json);

    };

    xhr.onerror = () => {
        reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
    };

    const formData = new FormData();
    if (file instanceof File) {
        formData.append('file', file, file.name);
    }
    else {
        formData.append('file', file.blob(), file.filename());
    }
    xhr.send(formData);
});
