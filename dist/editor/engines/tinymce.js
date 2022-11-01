var n=new URL("../../tinymce/",import.meta.url).href;async function i(){return await import(n+"tinymce.js")}async function u(a,r,e){await i(),tinymce.init({target:a,base_url:n,setup:t=>{t.on("change",c=>{e.value=t.getContent(),e.fire("change",{value:e.value})})}})}export{u as create,i as setup};
//# sourceMappingURL=tinymce.js.map
