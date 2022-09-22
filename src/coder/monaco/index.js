import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return new URL('./vs/language/json/json.worker.js', import.meta.url).href;
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return new URL('./vs/language/css/css.worker.js', import.meta.url).href;
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return new URL('./vs/language/html/html.worker.js', import.meta.url).href;
		}
		if (label === 'typescript' || label === 'javascript') {
			return new URL('./vs/language/typescript/ts.worker.js', import.meta.url).href;
		}
		return new URL('./vs/editor/editor.worker.js', import.meta.url).href;
	}
};

export { monaco }