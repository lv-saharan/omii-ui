# omii-ui
omi 兼容的ui库，样式采用bootstrap,整合bootstrap icons 和 material-design-icons

# 说明
内容整理中，
主要目的是构建使用标准esmodule模式项目开发环境

# esbuild
``` json
  "type": "module",
  "scripts": {
    "dev": "node esbuild.js dev",
    "build:all":"npm-run-all -s build:prod gen:icons build:icons build:loadings build:css build:coder",
    "build:prod": "node esbuild.js prod",
    "build:icons": "node ./src/icon/esbuild.js",
    "build:loadings": "node ./src/loading/esbuild.js",
    "build:css": "node ./src/bootstrap/esbuild.js",
    "build:coder": "node ./src/coder/esbuild.js",
    "gen:icons": "node ./src/icon/scripts/gen-icons.js"
  },
```
# Constrols
oi-rate

oi-tab

oi-icon

oi-bi  //bootstrap icons

oi-pager 

oi-tree 

oi-loading 

oi-alert 

oi-accordion 

oi-breadcrumb 

oi-modal 

oi-popover 

oi-uploader 

oi-carousel 

oi-badge 

oi-toast 

oi-progress

oi-tooltip 

oi-layout 

oi-import 

oi-offcanvas 

oi-pagination 

oi-dropdown 

oi-coder 

oi-select 

oi-table 

oi-tinymce

oi-echart 


# URL
[OMII UI ,一点示例](http://omii.flatweb.net/usage/ui "title")


[OMII playground,一些实践](http://omii.flatweb.net "title")
