const { h, classNames } = omii;
import uiBase from "../uiBase";
import css from "./index.scss";
import { getCSSStyleSheets } from "../css";
import pictures from "./templates/pictures";
import files from "./templates/files";
import { getExtension, getName } from "../utils";
import { creatPreviewUrl } from "preview-utils";

const Templates = { pictures, files, none: null };
const STATUS = {
  NONE: "NONE",
  UPLOADING: "UPLOADING",
  UPLOADED: "UPLOADED",
  ERROR: "ERROR",
};
export default class extends uiBase {
  static creatPreviewUrl = creatPreviewUrl;
  static get STATUS() {
    return STATUS;
  }
  static css = [
    () =>
      getCSSStyleSheets(
        "reboot",
        "containers",
        "grid",
        "card",
        "utilities",
        "buttons",
        "tables"
      ),
    css,
  ];
  static defaultProps = {
    accept: "",
    action: "",
    selectText: "选择文件上传",
    headers: null, //对象或返回对象的方法
    multiple: false,
    autoUpload: false,
    allowSort: false, //多选，并允许排序时才会有排序功能
    limit: false,
    withCredentials: false,
    template: "pictures", // file,picture-form,file-form,
    files: [], //{id,name,size,file,url,ext,type,status}
    uploadHandler(
      resource,
      url,
      { paramName = "file", withCredentials = false, headers }
    ) {
      const file = resource.file;
      const xhr = new XMLHttpRequest();
      const fd = new FormData();
      fd.append(paramName, file);
      xhr.withCredentials = withCredentials;
      xhr.open("POST", url);

      if (typeof headers === "function") {
        headers = headers();
      }
      if (typeof headers === "object") {
        for (let key in headers) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }

      resource.status = STATUS.UPLOADING;
      xhr.onreadystatechange = (args) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log("上传成功");
          let data = xhr.responseText;
          try {
            data = JSON.parse(data);
          } catch (exc) {
            resource.status = STATUS.ERROR;
            console.error(exc);
          }
          resource.status = STATUS.UPLOADED;
          // Object.assign(file, data);
          this.fire("uploaded", { resource, data, uploader: this });
          this.refresh();
        }
        if (xhr.status > 400) {
          file.status = STATUS.ERROR;
          console.log("上传失败", xhr, args);
        }

        // else {
        //   file.status = STATUS.ERROR;
        //   console.log("上传失败", xhr, args);
        // }
      };
      //监听文件上传（xhr.upload）进度
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          let percentage = Math.ceil((e.loaded / e.total) * 100);
          resource.progress = percentage;
          this.fire("progress", { resource, loaded: e.loaded, uploader: this });
          console.log(percentage + "%");
          this.refresh();
        }
      };
      xhr.send(fd);
    },
  };
  static propTypes = {
    accept: String,
    action: String,
    selectText: String,
    multiple: Boolean,
    autoUpload: Boolean,
    allowSort: Boolean,
    limit: Number,
    withCredentials: Boolean,
  };
  #replaceIndex = -1;

  open(index = -1) {
    this.#replaceIndex = index;
    this.$("#files").click();
    this.fire("open", { index });
  }
  remove(index) {
    this.$props.files?.splice(index, 1);
    this.updateSelf();
    this.fire("remove", { index });
  }

  select(files) {
    let { multiple, files: all, autoUpload } = this.$props;
    if (files?.length == 0) return false;
    if (!multiple) all.splice(0, all.length);
    if (this.#replaceIndex != -1 && files.length >= 1) {
      let replaceFiles = Array.from(files).map((file) => {
        return {
          id: null,
          name: getName(file.name),
          ext: getExtension(file.name),
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          file,
        };
      });
      all.splice(this.#replaceIndex, 1, ...replaceFiles);
      this.fire("replaced", { index: this.#replaceIndex, replaceFiles });
    } else {
      let selected = Array.from(files).map((file) => {
        return {
          id: null,
          name: getName(file.name),
          ext: getExtension(file.name),
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          file,
          status: STATUS.NONE,
        };
      });
      all.push(...selected);
      this.fire("selected", { selected });
    }
    this.updateSelf();
    if (autoUpload === true) this.upload();
  }
  refresh() {
    this.forceUpdate();
  }
  get uploadHandler() {
    return this.$props.uploadHandler;
  }
  upload() {
    let { files, action, withCredentials, headers } = this.$props;
    if (!action) alert("没有设置上传地址");
    let index = 0;

    for (let file of files.filter(
      (f) => f.file && (!f.status || f.status == STATUS.NONE)
    )) {
      file.index = index++;
      this.uploadHandler.call(this, file, action, { withCredentials, headers });
    }
  }
  render() {
    let { multiple, accept, template } = this.$props;

    return (
      <>
        <slot>{Templates[template]}</slot>
        <input
          id="files"
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={(evt) => {
            this.select(evt.target.files);
            evt.target.value = null;
          }}
        />
      </>
    );
  }
}
