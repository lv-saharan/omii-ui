const { h, classNames, extractClass } = omii;
import uiBase from "../uiBase";
import css from "./index.scss";
//min.js
let min = true;
let root = new URL(`./tinymce/`, import.meta.url).href;
let jsFile = `./tinymce.js`;
export default class extends uiBase {
  static css = css;
  static propTypes = {
    value: String,
    placeholder: String,
    required: Boolean,
    inline: Boolean,
  };
  static defaultProps = {
    //编辑器引擎
    value: "",
    placeholder: "...",
    required: false,
    language: "zh-Hans",
    directionality: null,
    plugins:
      "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",
    toolbar:
      "undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage  quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print",
    toolbarSticky: true,
    toolbarMode: "wrap",
    menu: null,
    menubar: false,
    inline: false,
    contentCss: null,
    contentStyle: null,
    blockFormats:
      "Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",
    fontFamilyFormats:
      "宋体=宋体;仿宋=仿宋;楷体=楷体;微软雅黑=微软雅黑;黑体=黑体;隶书=隶书;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
    fontSizeFormats: null,
    lineHeightFormats: null,
    indentation: null,
    indentUseMargin: false,
    styleFormatsMerge: true,
    styleFormats: null,
    colorCols: 5,
    colorMap: null,
    imagesUploadUrl: null,
    imagesUploadHandler: null,
    imagesUploadBasePath: null,
    imagesUploadCredentials: false,
    imagesReuseFilename: false,
    imagesFileTypes: null,
    automaticUploads: true,
    filePickerTypes: null,
    filePickerCallback: null,
    templates: null,
    importcssAppend: true,
    importcssGroups: [
      { title: "Table styles", filter: /^(td|tr)\./ }, // td.class and tr.class
      { title: "Block styles", filter: /^(div|p)\./ }, // div.class and p.class
      { title: "Other styles" }, // The rest
    ],
  };

  static get min() {
    return min;
  }
  static set min(value) {
    min = value;
  }

  static get root() {
    return root;
  }
  static set root(value) {
    root = value;
  }
  static get jsFile() {
    return jsFile;
  }
  static set jsFile(value) {
    jsFile = value;
  }

  get value() {
    return this.$props.value;
  }

  set value(value) {
    this.$props.value = value;
    if (this.editor && this.#ready) {
      try {
        this.editor.setContent(value);
      } catch (exc) {
        console.log("editor not init")
      }
    }
    //这里不能fire change，这样容易引起循环调用
    //监控change的控件可能会继续调用update
    //this.fire("change", { value });
  }

  #editor;
  get editor() {
    return this.#editor;
  }
  #css;
  css() {
    return this.#css;
  }

  get validity() {
    const { required } = this.$props;
    const result = {
      valid: true,
    };
    if (required && value == "") {
      result.valid = false;
      result.valueMissing = true;
    }

    return result;
  }
  //已经检查过有效性
  #checked = false;
  checkValidity() {
    this.#checked = true;
    const valid = this.validity.valid;
    if (!valid) {
      this.classList.add("is-invalid");
    } else {
      this.classList.remove("is-invalid");
    }
    return valid;
  }

  get editorId() {
    return `editor${this.elementId}`
  }
  #ready = false

  async installed() {
    // console.log("tiny installed");
    await import(new URL(this.constructor.jsFile, this.constructor.root).href);
    const $editor = this.$(`#${this.editorId}`);
    const {
      menu,
      menubar,
      toolbar,
      plugins,
      language,
      toolbarMode,
      baseUrl,
      inline,
      contentStyle,
      contentCss,
      fontFamilyFormats,
      blockFormats,
      fontSizeFormats,
      lineHeightFormats,
      indentUseMargin,
      indentation,
      styleFormats,
      styleFormatsMerge,
      colorCols,
      colorMap,
      imagesUploadUrl,
      imagesUploadHandler,
      imagesUploadBasePath,
      imagesUploadCredentials,
      imagesReuseFilename,
      imagesFileTypes,
      automaticUploads,
      filePickerTypes,
      filePickerCallback,
      templates,
      importcssGroups,
      importcssAppend,
    } = this.$props;
    tinymce.init({
      target: $editor,
      promotion: false,
      base_url: baseUrl ?? this.constructor.root,
      menu,
      menubar,
      toolbar,
      toolbar_mode: toolbarMode,
      plugins,
      language,
      inline,
      extended_valid_elements: "oi-icon[name|color|size]",
      custom_elements: "oi-icon",
      content_css: contentCss,
      content_style: contentStyle,
      font_family_formats: fontFamilyFormats,
      block_formats: blockFormats,
      font_size_formats: fontSizeFormats,
      line_height_formats: lineHeightFormats,
      indent_use_margin: indentUseMargin,
      indentation,
      style_formats: styleFormats,
      style_formats_merge: styleFormatsMerge,
      color_cols: colorCols,
      color_map: colorMap,
      images_upload_url: imagesUploadUrl,
      images_upload_handler: imagesUploadHandler,
      images_upload_base_path: imagesUploadBasePath,
      images_upload_credentials: imagesUploadCredentials,
      images_reuse_filename: imagesReuseFilename,
      images_file_types: imagesFileTypes,
      automatic_uploads: automaticUploads,
      file_picker_types: filePickerTypes,
      file_picker_callback: filePickerCallback,
      importcss_groups: importcssGroups,
      templates,
      importcss_append: importcssAppend,
      setup: (editor) => {
        this.#editor = editor;
        editor.on("init", e => {
          this.#ready = true
        })
        editor.on("change", (e) => {
          this.$props.value = editor.getContent();
          this.fire("change", { value: this.value });
        });
      },
    });
  }
  render() {
    return (
      <textarea
        class="editor"
        id={this.editorId}
        value={this.value}
        placeholder={this.placeholder}
      ></textarea>
    );
  }
}
