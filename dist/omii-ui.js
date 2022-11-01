var Gs=Object.defineProperty;var qs=Object.getPrototypeOf;var ei=Reflect.get;var ti=(t,e,o)=>e in t?Gs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(ti(t,typeof e!="symbol"?e+"":e,o),o),po=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(po(t,e,"read from private field"),o?o.call(t):e.get(t)),g=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},m=(t,e,o,s)=>(po(t,e,"write to private field"),s?s.call(t,o):e.set(t,o),o);var $t=(t,e,o)=>(po(t,e,"access private method"),o),pt=(t,e,o)=>ei(qs(t),o,e);var oi=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),si=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},ii=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},Dt=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},zt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var ri=["B","KB","MB","GB","TB","PB"],uo=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+ri[o]},ai=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},ni=(t,e)=>{window.chrome.extension?t():e()},Jt=t=>{t.offsetHeight},li=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],jt=t=>{if(!t)return"file";t=t.toLowerCase();let e=li.find(o=>o[0].includes(t));return e==null?"file":e[1]};var Ao={tryExtension:ni,downloadUrl:ai,getName:zt,getExtension:Dt,cleanHTML:oi,isToday:si,isYesterday:ii,formatSize:uo};var ci=import.meta.url,di="sortable.core.esm.js",Mo=new URL("./sortablejs/",ci).href,V=null,D={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function pi({autoScroll:t,remove:e,revert:o,multiDrag:s,swap:i}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=Mo){V||(V=await import(new URL(di,r).href)),t&&!D.AutoScroll&&(D.AutoScroll=!0,V.Sortable.mount(new V.AutoScroll));let[a,n]=V.OnSpill;return e&&!D.Remove&&(D.Remove=!0,V.Sortable.mount(a)),e&&!D.Remove&&(D.Remove=!0,V.Sortable.mount(a)),o&&!D.Remove&&(D.Revert=!0,V.Sortable.mount(n)),s&&!D.MultiDrag&&(D.MultiDrag=!0,V.Sortable.mount(new V.MultiDrag)),i&&!D.Swap&&(D.Swap=!0,V.Sortable.mount(new V.Swap)),V.Sortable}function ui(t){Mo=t}var He={use:pi,setRoot:ui};var{define:br,h:vr,Component:fi}=omii,f=class extends fi{};var Xo=`
:host {
  height: 100%;
  display: block;
}

.tabs {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
}
.tabs .navs .nav {
  display: inline-block;
  padding: var(--oi-tab-nav-padding, 0.3rem 1rem);
  line-height: var(--oi-tab-nav-line-height, 1.2);
  font: var(--oi-tab-nav-font, 1.2rem arial, sans-serif);
  color: var(--oi-tab-nav-color);
  margin-right: 0.2rem;
  cursor: pointer;
  border-top: var(--oi-tab-nav-border-top, 1px solid transparent);
  border-right: var(--oi-tab-nav-border-right, 1px solid transparent);
  border-bottom: var(--oi-tab-nav-border-bottom, 1px solid transparent);
  border-left: var(--oi-tab-nav-border-left, 1px solid transparent);
}
.tabs .navs .nav.active {
  border-top: var(--oi-tab-nav-active-border-top, 1px solid transparent);
  border-right: var(--oi-tab-nav-active-border-right, 1px solid transparent);
  border-bottom: var(--oi-tab-nav-active-border-bottom, 1px solid #0d6efd);
  border-left: var(--oi-tab-nav-active-border-left, 1px solid transparent);
  font: var(--oi-tab-nav-active-font, bold 1.2rem arial, sans-serif);
  color: var(--oi-tab-nav-active-color, var(--oi-primary));
}
.tabs .navs .nav:hover {
  border-top: var(--oi-tab-nav-hover-border-top, 1px solid transparent);
  border-right: var(--oi-tab-nav-hover-border-right, 1px solid transparent);
  border-bottom: var(--oi-tab-nav-hover-border-bottom, 1px solid #0d6efd);
  border-left: var(--oi-tab-nav-hover-border-left, 1px solid transparent);
  font: var(--oi-tab-nav-hover-font, bold 1.2rem arial, sans-serif);
  color: var(--oi-tab-nav-hover-color, var(--oi-primary));
}
.tabs .panes {
  flex: 1 0 auto;
  padding: var(--oi-tab-nav-panes-padding, 0rem);
}
.tabs .panes .pane {
  display: none;
  height: 100%;
}
.tabs .panes .pane.active {
  display: block;
}
.tabs .panes oi-loading {
  width: var(--oi-tab-loading-size, 3rem);
  height: var(--oi-tab-loading-size, 3rem);
  display: block;
  margin: auto;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:ut,Component:Br,classNames:Wo,render:Qr}=omii,ae=class extends f{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},!0,!0):this.update$Props({activeIndex:t},!0,!0))}async render(t){let e=this.$props,o=t.items??e.items,s=[],i=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,c=a.pane;i.push(ut("div",{key:`pane-${a.key??r}`,className:Wo("pane",{active:n})},c)),s.push(ut("div",{key:`nav-${a.key??r}`,className:Wo("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return ut("div",{class:"tabs"},ut("div",{class:"navs"},s),ut("div",{class:"panes"},i))}};l(ae,"css",Xo),l(ae,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(ae,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Ee={BUNDLE:"bundle",SINGLE:"single"},ft={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:kr,h:Ho,Component:Or}=omii,ht=Ee.SINGLE,fo=ft.FILLED,ho=async(t,e,o)=>{e=e??fo,e==ft.FILE_TYPE&&(o=Ee.BUNDLE);try{if((o??ht)==Ee.BUNDLE){let{default:s}=await import(`./icons/${e}.js`);return s[t]}else{let{default:s}=await import(`./icons/${e}/${t}.js`);return s}}catch{console.error("load icon error",t,e)}},hi=async(t,e,o,s={})=>{let i=await ho(t,e,o);return Ho("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...s},i)},J=class extends f{static useBundleMode(){ht=Ee.BUNDLE}static useSingleMode(){ht=Ee.SINGLE}static get MODES(){return Ee}static get TYPES(){return ft}static get Mode(){return ht}static set Mode(t){ht=t}static get Type(){return fo}static set Type(t){fo=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",s=t?`${t}rem`:"var(--oi-icon-width, 1rem)",i=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,s=await ho(t,e);return Ho("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},s)}};l(J,"updateOnAttributeChanged",!0),l(J,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(J,"defaultProps",{name:null,type:ft.FILLED,viewBox:24,size:null,color:null}),l(J,"createSvg",hi),l(J,"loadIcon",ho),l(J,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var{h:_o}=omii,mo=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},mi=async(t,e={})=>{let o=await mo(t);return _o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},X=class extends f{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",s=t?`${t}rem`:"var(--oi-bi-width, 1rem)",i=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await mo(t);return _o("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(X,"updateOnAttributeChanged",!0),l(X,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(X,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(X,"createSvg",mi),l(X,"loadIcon",mo),l(X,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var Yo=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:jr,h:go,Component:Pr,classNames:gi,render:Ar}=omii,bo={STAR:"star",HALF:"star_half",BORDER:"star_border"},W,ne=class extends f{constructor(){super(...arguments);g(this,W,-1)}get rateScore(){return this.$props.score}install(){m(this,W,this.$props.score)}rate(e){this.fire("rate",e),m(this,W,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:s,rateable:i,size:r,color:a}=o,n=[],c=d(this,W);for(let p=0;p<s;p++)c-p>=.5?n.push(bo.STAR):c-p>0?n.push(bo.HALF):n.push(bo.BORDER);return go("div",{class:gi("rate-wrap","rate-"+d(this,W))},n.map((p,h)=>i?go("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),m(this,W,h+1),this.fire("tryRate",d(this,W)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),m(this,W,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(h+1)}}):go("oi-icon",{name:p,size:r,color:a,className:p})))}};W=new WeakMap,l(ne,"css",Yo),l(ne,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(ne,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Zo=`
:host {
  display: block;
}

.pager {
  margin: 0 auto;
}
.pager div {
  padding: var(--oi-pager-page-padding, 0.375rem 0.75rem);
  line-height: var(--oi-pager-page-line-height, 1.2);
  text-align: center;
  display: inline-block;
  border: 0;
  border-radius: 0.2rem;
  background-color: var(--oi-pager-page-bgcolor, #fff);
  color: var(--oi-pager-page-color, black);
  margin-right: 0.3rem;
  user-select: none;
  font-size: 1.25rem;
  cursor: pointer;
  vertical-align: bottom;
}
.pager .first,
.pager .last,
.pager .prev,
.pager .next {
  font-size: 0;
}
.pager .first.disable,
.pager .last.disable,
.pager .prev.disable,
.pager .next.disable {
  color: var(--oi-pager-disable-color, #ccc);
  cursor: not-allowed;
  --oi-icon-color: var(--oi-pager-disable-color, #ccc);
}
.pager .info {
  width: auto;
  cursor: auto;
  color: var(--oi-pager-info-color, #0d6efd);
  background-color: var(--oi-pager-info-bgcolor, transparent);
}
.pager .info .curr {
  color: var(--oi-pager-info-curr-color, red);
}
.pager .jumper {
  width: fit-content;
  padding: 0.175rem;
}
.pager .jumper .jump-to {
  width: 3em;
  padding: 0;
  box-sizing: border-box;
  height: min-content;
}
.pager .active {
  background-color: var(--oi-pager-page-active-bgcolor, #0d6efd);
  color: var(--oi-pager-page-active-color, #fff);
}
.pager .page:hover {
  background-color: var(--oi-pager-page-hover-bgcolor, #6f9ab8);
  color: var(--oi-pager-page-hover-color, #fff);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:O,classNames:mt}=omii,H=class extends f{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(H,"css",Zo),l(H,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:O("oi-icon",{name:"keyboard_arrow_left"}),next:O("oi-icon",{name:"keyboard_arrow_right"}),first:O("oi-icon",{name:"first_page"}),last:O("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:s}=t;return O("div",{class:mt("prev",{disable:o<=1}),onClick:i=>{o>1&&e.goto(o-1)}},s)},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return O("div",{class:mt("next",{disable:o>=i}),onClick:r=>{i>o&&e.goto(o+1)}},s)},createFirst(t,e){let{first:o,pageNum:s}=t;return O("div",{class:mt("first",{disable:s<=1}),onClick:i=>{s!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return O("div",{class:mt("last",{disable:s>=i}),onClick:r=>{s!=i&&e.goto(i)}},o)},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(O("div",{className:mt({active:s==p,page:!0}),onClick:h=>{s!=p&&e.goto(p)}},p));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return O("div",{class:"info"},O("span",{class:"curr"},o),"/",O("span",{class:"total"},s))},createJumper(t,e){return O("div",{class:"jumper"},"\u524D\u5F80",O("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return O("div",{class:"pager"},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e))}}),l(H,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var Ko=`
.info .page-link {
  border-color: transparent;
}
.info .page-link .total {
  color: var(--oi-gray-dark);
}

.jumper .page-link {
  border-color: transparent;
}

.jump-to {
  margin: 0;
  padding: 0;
  border: 0;
  outline: var(--oi-gray-dark) solid 1px;
}

.pagination {
  margin: 0;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Pt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:bi,define:qr,h:vi,Component:ea,setTheme:yi}=omii,yo="bootstrap";function xi(t){yo=t,le=new URL(`./${yo}/`,import.meta.url).href}var le=new URL(`./${yo}/`,import.meta.url).href;function wi(t){le=t}var At=(t,e=le)=>fetch(xo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),Si=t=>At=t,Go=(t,e,o=le)=>{let s=vi("link",{rel:"styleSheet",href:xo(t,o)});bi(s,e??"body")},Fi=(t,e=le)=>{Go("reboot",t,e)},xo=(t,e=le)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},vo=new Map,Mt=async(t,e=le)=>{let o=`${e}/${t}`,s=vo.get(o);if(s===void 0){let i=[];vo.set(o,i),s=new CSSStyleSheet;try{s.replaceSync(await At(t,e)),i.forEach(r=>{r(s)}),vo.set(o,s)}catch(r){console.error("get css stylesheets error",r)}}else if(s instanceof Array)return new Promise(i=>{s.push(i)});return s},v=(...t)=>Promise.all(t.map(e=>Mt(e))),qo={};Pt.forEach(t=>{Object.defineProperty(qo,t,{get:function(){return Mt(t)}})});var Bi=(t=Pt)=>{t.forEach(e=>{Mt(e)})},Qi=async(t,e=le)=>{let o=await At(`theme.${t}`,e);yi(o)},I=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let s=0,i=(r=[])=>{let a=s%e.length,{classNames:n,duration:c=0,delay:p=0,callback:h=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),h&&h(t,n,c,p)},p*1e3),s++,!(Math.floor(s/e.length)>=o)&&setTimeout(()=>{i(n)},(c+p)*1e3)};i()}},es={StyleSheets:Pt,CSSStyleSheets:qo,setBaseUrl:wi,setBaseRoot:xi,loadStyleSheet:At,setStyleSheetLoader:Si,addStyleSheet:Go,addRebootStyleSheet:Fi,getStyleSheetUrl:xo,getCSSStyleSheet:Mt,getCSSStyleSheets:v,useTheme:Qi,timingClassNames:I,preLoad:Bi};var{h:S,classNames:gt,extractClass:Ui}=omii,_e=class extends H{},ce=_e;l(ce,"css",[()=>v("reboot","pagination","utilities"),Ko]),l(ce,"defaultProps",{...pt(_e,_e,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:s}=t;return S("li",{class:gt("page-item",{disabled:o<=1})},S("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i=>{o>1&&e.goto(o-1),i.preventDefault(),i.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return S("li",{class:gt("page-item",{disabled:o>=i})},S("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{i>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:s}=t;return S("li",{class:gt("page-item",{disabled:s<=1})},S("a",{class:"page-link",href:"#","aria-label":"First",onClick:i=>{s!=1&&e.goto(1),i.preventDefault(),i.stopPropagation()}},S("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return S("li",{class:gt("page-item",{disabled:s>=i})},S("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{s!=i&&e.goto(i),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(S("li",{key:`pager-${p}`,className:gt("page-item",{active:s==p,page:!0})},S("a",{class:"page-link",href:"#",onClick:h=>{s!=p&&e.goto(p),h.preventDefault(),h.stopPropagation()}},p)));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return S("li",{class:"info page-item"},S("span",{className:"page-link"},S("span",{class:"curr"},o),"/",S("span",{class:"total"},s)))},createJumper(t,e){return S("li",{class:"jumper page-item mx-2"},S("span",{className:"page-link"},"\u524D\u5F80",S("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return S("nav",null,S("ul",{...Ui(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e)))}}),l(ce,"propTypes",{...pt(_e,_e,"propTypes"),align:String});var ts=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var os=`
:host {
  display: block;
  margin: 0.3rem 0;
  color: var(--oi-tree-node-color, black);
}
:host .node {
  position: relative;
}
:host .node .element {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  position: relative;
  font: var(--oi-tree-node-font);
}
:host .node .element .text {
  display: inline-block;
}
:host .node .element .expander {
  width: 1rem;
  padding-left: 0.3rem;
}
:host .node .element .expander::after {
  display: block;
  content: " ";
  width: 0;
  height: 0;
  border: 0.5rem solid transparent;
  border-left-color: black;
  transition: transform 0.36s ease;
}
:host .node .element .expander.no-children::after {
  display: none;
}
:host .node .element:hover {
  background-color: var(--oi-tree-node-hover-bgcolor, #cfe2ff);
  color: var(--oi-tree-node-hover-color, black);
  --oi-tree-node-expander-color: black;
}
:host .node .element.selected {
  background-color: var(--oi-tree-node-selected-bgcolor, #9ec5fe);
  color: var(--oi-tree-node-selected-color, black);
}
:host .node .element oi-loading {
  position: absolute;
  transform: scale(0.8);
  transform-origin: left top;
}
:host .node .element input[type=checkbox],
:host .node .element input[type=radio] {
  width: 1rem;
  height: 1rem;
  vertical-align: top;
}
:host .node .element .checkbox-placeholder {
  display: inline-block;
  width: 1rem;
  margin: 3px;
}
:host .node .element .radio-placeholder {
  display: inline-block;
  width: 1rem;
  margin: 3px;
}
:host .node .children {
  display: none;
}
:host .node.expanded .expander::after {
  transform: rotate(45deg);
  transform-origin: left center;
}
:host .node.expanded .children {
  display: block;
}

:host(.sortable-ghost) {
  pointer-events: none;
}

:host(.sortable-drag) {
  border: dotted 1px #9ec5fe;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTs7QUFTSTtFQUNJO0VBQ0E7O0FBS1I7RUFDSTs7O0FBTWhCO0VBRUk7OztBQUdKO0VBQ0kifQ== */`;var{h:_,classNames:Xt,define:Ri,getHost:wo}=omii,Ye,bt,Fo=class extends f{constructor(){super(...arguments);g(this,Ye,void 0);g(this,bt,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.$props.node??{}}get nodes(){return d(this,Ye)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=wo(this);return o instanceof Fo?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?_("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):_("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?_("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):_("div",{class:"radio-placeholder"}):null}install(){!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}get Sortable(){return d(this,bt)}async installed(){if(this.sortable){let o=await He.use();m(this,bt,o.create(this.$(".children"),{delay:100,handle:".element",swapThreshold:.65,fallbackOnBody:!0,group:this.tree.sortGroup,onEnd:s=>{let i=wo(s.from),r=wo(s.to),a=i.nodes,n=r.nodes;this.tree.fire("sorted",{fromNodes:a,toNodes:n,fromIndex:s.oldIndex,toIndex:s.newIndex})}}))}}async render(o){let{node:s,cssss:i}=o,r=s.element??s.label??s.key;typeof r=="function"&&(r=await r(s,o,this));let a=null,n=m(this,Ye,s.children);return typeof n=="function"&&this.expanded&&m(this,Ye,n=await n(s,o,this)),a=_("div",{class:Xt("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(n instanceof Array?n.map(c=>_("oi-tree-node",{node:c,"node-level":this.level+1,tree:this.tree,cssss:i})):n)),_("div",{class:Xt("node",{expanded:this.expanded,"no-children":this.noChildren})},_("div",{class:Xt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:c=>{c.stopPropagation(),this.selected&&c.ctrlKey===!0?this.unSelect():this.select()}},_("div",{onClick:c=>{c.stopPropagation(),this.toggle()},class:Xt("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,_("div",{class:"text"},r)),a)}},Ce=Fo;Ye=new WeakMap,bt=new WeakMap,l(Ce,"css",os),l(Ce,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),l(Ce,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});Ri("oi-tree-node",Ce);var So=Ce;var{h:ss,purgeCSSSS:Ni,getHost:Wt,classNames:ki}=omii;var vt,Ze,de=class extends f{constructor(){super(...arguments);g(this,vt,void 0);g(this,Ze,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return d(this,vt)}isSelected(e){let{multiSelect:o,selectedKey:s,selectedKeys:i}=this.$props;return o?(i??[]).some(r=>r==e):s!=null&&s==e}select(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;s?i.some(r=>r==e)||i.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;if(!s)this.$props.selectedKey=null;else{let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:s}=this.$props;return o?(s??[]).some(i=>i==e):!1}check(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;s&&i.indexOf(e)==-1&&i.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;if(s){let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:s}=this.$props;return o?s!=null&&s==e:!1}radio(e,o=!0){let{radioTree:s}=this.$props;s&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(s=>s==e)}expand(e,o=!0){let{expandedKeys:s}=this.$props;s.indexOf(e)!=-1&&s.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:s}=this.$props,i=s.indexOf(e);i!=-1&&s.splice(i,1),o&&this.update()}async installed(){if(this.$props.sortable){let e=await He.use();m(this,vt,e.create(this.rootNode,{delay:100,swapThreshold:.65,group:this.sortGroup,onEnd:o=>{let s=Wt(o.from),i=Wt(o.to),r=s.nodes,a=i.nodes;this.fire("sorted",{fromNodes:r,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}get nodes(){if(!d(this,Ze)){let e=this.$props.nodes,o=Wt(this);typeof e=="function"&&(e=e.call(o)),m(this,Ze,e)}return d(this,Ze)}render(){let e=Wt(this),o=Ni(this.$props.nodeCss,e);return ss("div",{class:ki("tree-container",{sortable:this.sortable})},this.nodes.map(s=>ss("oi-tree-node",{node:s,tree:this,cssss:o})))}};vt=new WeakMap,Ze=new WeakMap,l(de,"css",ts),l(de,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),l(de,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:ya,classNames:xa}=omii,yt,ee=class extends f{constructor(){super(...arguments);g(this,yt,void 0)}css(){let{size:e,color:o}=this.$props,s="2rem";if(e)s=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?s=`${a.offsetHeight}px`:s="2rem"}let i=`
    :host{
      --oi-loading-size:${s};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,yt)}
    ${i}
    ${r}
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:s}}=await import(`./loadings/${e}.js`);return m(this,yt,s),o}};yt=new WeakMap,l(ee,"updateOnAttributeChanged",!0),l(ee,"css",`
    :host{
      display:inline-block;
    }
  `),l(ee,"defaultProps",{name:"circle",size:null,color:null}),l(ee,"propTypes",{name:String,size:Number,color:String});var Ke={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Bo="show",Ht="collapse",Qo="collapsing",Oi="collapse-horizontal",Uo=.35,Ro=(t,e)=>e||(t.classList.contains(Oi)?Ke.HORIZONTAL:Ke.VERTICAL),is={show(t,e=Uo,o=null){return new Promise(s=>{o=Ro(t,o),I(t,[{classNames:[Ht]},{classNames:[Qo],duration:e,callback(i){i.style[o==Ke.VERTICAL?"height":"width"]=`${i[o==Ke.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Ht,Bo],callback(i){i.style[o==Ke.VERTICAL?"height":"width"]="",s()}}])})},hide(t,e=Uo,o=null){return new Promise(s=>{o=Ro(t,o);let i=o==Ke.VERTICAL?"height":"width";t.style[i]=`${t.getBoundingClientRect()[i]}px`,Jt(t.offsetHeight),I(t,[{classNames:[Qo,Ht,Bo]},{classNames:[Qo],duration:e,callback(r){r.style[i]=""}},{classNames:[Ht],callback:s}])})},toggle(t,e=Uo,o=null){return o=Ro(t,o),t.classList.contains(Bo)?this.hide(t,e,o):this.show(t,e,o)}};var xt="fade",No="show",ko=.15,rs={show(t,e=ko){return new Promise(o=>{I(t,[{classNames:[xt]},{classNames:[xt,No],duration:e,callback:o}])})},hide(t,e=ko){return new Promise(o=>{I(t,[{classNames:[xt,No]},{classNames:[xt],duration:e,callback:o}])})},toggle(t,e=ko){return t.classList.contains(xt)&&!t.classList.contains(No)?this.show(t,e):this.hide(t,e)}};var B={collapse:is,fade:rs};var{h:Oo,classNames:Ti}=omii;var Li="show",wt,pe=class extends f{constructor(){super(...arguments);g(this,wt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(Li),m(this,wt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return d(this,wt)?null:Oo("div",{className:Ti("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},Oo("slot",null),o?Oo("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};wt=new WeakMap,l(pe,"css",()=>v("reboot","utilities","alert","close","transitions")),l(pe,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(pe,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:Ge,classNames:To}=omii,_t={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Ei="collapsed",qe,Yt,ue=class extends f{constructor(){super(...arguments);g(this,qe)}static get DIRECTIONS(){return _t}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:s}=this.$props;if(e.length>0&&s&&(e[0].opened=!0),!o){let i=e.filter(r=>r.opened);if(i.length){let r=i.shift();r.opened=!0,i.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==_t.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:s}=this.$props;if(s)$t(this,qe,Yt).call(this,e);else{let i=o.findIndex(a=>a.opened),r=i==-1?null:o[i];r&&r!=e&&$t(this,qe,Yt).call(this,r),$t(this,qe,Yt).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return Ge("div",{class:To("accordion",{"collapse-horizontal":o==_t.HORIZONTAL})},e.map((s,i)=>Ge("div",{class:"accordion-item",key:s.key??`item-${i}`},Ge("h2",{class:"accordion-header"},Ge("button",{class:To("accordion-button",{collapsed:!s.opened}),type:"button","aria-expanded":s.opened,onClick:r=>{this.toggle(s)}},s.header)),Ge("div",{class:To("accordion-collapse",{collapse:!0,show:s.opened})},Ge("div",{class:"accordion-body"},typeof s.body=="function"?s.body(s,this.$props,this):s.body)))))}};qe=new WeakSet,Yt=function(e){let{items:o,transitionDuration:s}=this.$props,i=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${i+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(Ei,!e.opened),e.opened?(B.collapse.show(a),this.fire("collapseShow",e)):(B.collapse.hide(a),this.fire("collapseHide",e))},l(ue,"css",()=>v("reboot","utilities","accordion","close","transitions")),l(ue,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:_t.VERTICAL}),l(ue,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:St,classNames:ja}=omii,fe=class extends f{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return St("nav",{"aria-label":"breadcrumb"},St("ol",{class:"breadcrumb"},t.map((o,s)=>s!==t.length-1?St("li",{class:"breadcrumb-item"},typeof e=="object"&&s!=0?e:null,St("a",{href:o.href},o.label)):St("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&s!=0?e:null,o.label))))}};l(fe,"css",()=>v("reboot","utilities","breadcrumb")),l(fe,"defaultProps",{}),l(fe,"propTypes",{});var as=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:E,classNames:ns,extractClass:Ci}=omii,he=class extends f{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return E(E.f,null,e.visible&&!e.staticPosition&&E("div",{class:ns("modal-backdrop","fade","show")}),E("div",{...Ci(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},E("div",{class:ns("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},E("div",{class:"modal-content"},E("div",{class:"modal-header"},E("slot",{name:"header"},E("h5",{class:"modal-title"},e.title),E("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),E("div",{class:"modal-body"},E("slot",null)),E("div",{class:"modal-footer"},E("slot",{name:"footer"}))))))}};l(he,"css",[()=>v("reboot","modal","utilities","close","scrollbar"),as]),l(he,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(he,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function Bt(t){return t.split("-")[0]}function Kt(t){return t.split("-")[1]}function Qt(t){return["top","bottom"].includes(Bt(t))?"x":"y"}function Eo(t){return t==="y"?"height":"width"}function ls(t,e,o){let{reference:s,floating:i}=t,r=s.x+s.width/2-i.width/2,a=s.y+s.height/2-i.height/2,n=Qt(e),c=Eo(n),p=s[c]/2-i[c]/2,h=n==="x",u;switch(Bt(e)){case"top":u={x:r,y:s.y-i.height};break;case"bottom":u={x:r,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:a};break;case"left":u={x:s.x-i.width,y:a};break;default:u={x:s.x,y:s.y}}switch(Kt(e)){case"start":u[n]-=p*(o&&h?-1:1);break;case"end":u[n]+=p*(o&&h?-1:1)}return u}var ds=async(t,e,o)=>{let{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),c=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:h}=ls(c,s,n),u=s,b={},y=0;for(let w=0;w<r.length;w++){let{name:F,fn:Q}=r[w],{x:R,y:T,data:L,reset:U}=await Q({x:p,y:h,initialPlacement:s,placement:u,strategy:i,middlewareData:b,rects:c,platform:a,elements:{reference:t,floating:e}});p=R??p,h=T??h,b={...b,[F]:{...b[F],...L}},U&&y<=50&&(y++,typeof U=="object"&&(U.placement&&(u=U.placement),U.rects&&(c=U.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):U.rects),{x:p,y:h}=ls(c,u,n)),w=-1)}return{x:p,y:h,placement:u,strategy:i,middlewareData:b}};function ps(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function Ft(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Co(t,e){var o;e===void 0&&(e={});let{x:s,y:i,platform:r,rects:a,elements:n,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:b=!1,padding:y=0}=e,w=ps(y),F=n[b?u==="floating"?"reference":"floating":u],Q=Ft(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(F)))==null||o?F:F.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:h,strategy:c})),R=Ft(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:s,y:i}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:c}):a[u]);return{top:Q.top-R.top+w.top,bottom:R.bottom-Q.bottom+w.bottom,left:Q.left-R.left+w.left,right:R.right-Q.right+w.right}}var Vi=Math.min,Ii=Math.max;function Lo(t,e,o){return Ii(t,Vi(e,o))}var Vo=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:s=0}=t??{},{x:i,y:r,placement:a,rects:n,platform:c}=e;if(o==null)return{};let p=ps(s),h={x:i,y:r},u=Qt(a),b=Kt(a),y=Eo(u),w=await c.getDimensions(o),F=u==="y"?"top":"left",Q=u==="y"?"bottom":"right",R=n.reference[y]+n.reference[u]-h[u]-n.floating[y],T=h[u]-n.reference[u],L=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o)),U=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0;U===0&&(U=n.floating[y]);let Vt=R/2-T/2,Xe=p[F],ct=U-w[y]-p[Q],N=U/2-w[y]/2+Vt,z=Lo(Xe,N,ct),We=(b==="start"?p[F]:p[Q])>0&&N!==z&&n.reference[y]<=n.floating[y];return{[u]:h[u]-(We?N<Xe?Xe-N:ct-N:0),data:{[u]:z,centerOffset:N-z}}}}),$i={left:"right",right:"left",bottom:"top",top:"bottom"};function Zt(t){return t.replace(/left|right|bottom|top/g,e=>$i[e])}function Di(t,e,o){o===void 0&&(o=!1);let s=Kt(t),i=Qt(t),r=Eo(i),a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Zt(a)),{main:a,cross:Zt(a)}}var zi={start:"end",end:"start"};function cs(t){return t.replace(/start|end/g,e=>zi[e])}var Ji=["top","right","bottom","left"],qa=Ji.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Ut=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:s,middlewareData:i,rects:r,initialPlacement:a,platform:n,elements:c}=e,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:y=!0,...w}=t,F=Bt(s),Q=u||(F===a||!y?[Zt(a)]:function(N){let z=Zt(N);return[cs(N),z,cs(z)]}(a)),R=[a,...Q],T=await Co(e,w),L=[],U=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&L.push(T[F]),h){let{main:N,cross:z}=Di(s,r,await(n.isRTL==null?void 0:n.isRTL(c.floating)));L.push(T[N],T[z])}if(U=[...U,{placement:s,overflows:L}],!L.every(N=>N<=0)){var Vt,Xe;let N=((Vt=(Xe=i.flip)==null?void 0:Xe.index)!=null?Vt:0)+1,z=R[N];if(z)return{data:{index:N,overflows:U},reset:{placement:z}};let We="bottom";switch(b){case"bestFit":{var ct;let Po=(ct=U.map(It=>[It,It.overflows.filter(dt=>dt>0).reduce((dt,Ks)=>dt+Ks,0)]).sort((It,dt)=>It[1]-dt[1])[0])==null?void 0:ct[0].placement;Po&&(We=Po);break}case"initialPlacement":We=a}if(s!==We)return{reset:{placement:We}}}return{}}}};var Rt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:s}=e,i=await async function(r,a){let{placement:n,platform:c,elements:p}=r,h=await(c.isRTL==null?void 0:c.isRTL(p.floating)),u=Bt(n),b=Kt(n),y=Qt(n)==="x",w=["left","top"].includes(u)?-1:1,F=h&&y?-1:1,Q=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:T,alignmentAxis:L}=typeof Q=="number"?{mainAxis:Q,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...Q};return b&&typeof L=="number"&&(T=b==="end"?-1*L:L),y?{x:T*F,y:R*w}:{x:R*w,y:T*F}}(e,t);return{x:o+i.x,y:s+i.y,data:i}}}};function ji(t){return t==="x"?"y":"x"}var Nt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:s,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:Q=>{let{x:R,y:T}=Q;return{x:R,y:T}}},...c}=t,p={x:o,y:s},h=await Co(e,c),u=Qt(Bt(i)),b=ji(u),y=p[u],w=p[b];if(r){let Q=u==="y"?"bottom":"right";y=Lo(y+h[u==="y"?"top":"left"],y,y-h[Q])}if(a){let Q=b==="y"?"bottom":"right";w=Lo(w+h[b==="y"?"top":"left"],w,w-h[Q])}let F=n.fn({...e,[u]:y,[b]:w});return{...F,data:{x:F.x-o,y:F.y-s}}}}};function bs(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function oe(t){if(t==null)return window;if(!bs(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function Y(t){return oe(t).getComputedStyle(t)}function te(t){return bs(t)?"":t?(t.nodeName||"").toLowerCase():""}function vs(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function Z(t){return t instanceof oe(t).HTMLElement}function et(t){return t instanceof oe(t).Element}function tt(t){return typeof ShadowRoot>"u"?!1:t instanceof oe(t).ShadowRoot||t instanceof ShadowRoot}function qt(t){let{overflow:e,overflowX:o,overflowY:s}=Y(t);return/auto|scroll|overlay|hidden/.test(e+s+o)}function Pi(t){return["table","td","th"].includes(te(t))}function us(t){let e=/firefox/i.test(vs()),o=Y(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function ys(){return!/^((?!chrome|android).)*safari/i.test(vs())}var fs=Math.min,kt=Math.max,Gt=Math.round;function Ve(t,e,o){var s,i,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),c=1,p=1;e&&Z(t)&&(c=t.offsetWidth>0&&Gt(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&Gt(n.height)/t.offsetHeight||1);let h=et(t)?oe(t):window,u=!ys()&&o,b=(n.left+(u&&(s=(i=h.visualViewport)==null?void 0:i.offsetLeft)!=null?s:0))/c,y=(n.top+(u&&(r=(a=h.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,w=n.width/c,F=n.height/p;return{width:w,height:F,top:y,right:b+w,bottom:y+F,left:b,x:b,y}}function me(t){return(e=t,(e instanceof oe(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function eo(t){return et(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function xs(t){return Ve(me(t)).left+eo(t).scrollLeft}function Ai(t,e,o){let s=Z(e),i=me(e),r=Ve(t,s&&function(c){let p=Ve(c);return Gt(p.width)!==c.offsetWidth||Gt(p.height)!==c.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(s||!s&&o!=="fixed")if((te(e)!=="body"||qt(i))&&(a=eo(e)),Z(e)){let c=Ve(e,!0);n.x=c.x+e.clientLeft,n.y=c.y+e.clientTop}else i&&(n.x=xs(i));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function ws(t){return te(t)==="html"?t:t.assignedSlot||t.parentNode||(tt(t)?t.host:null)||me(t)}function hs(t){return Z(t)&&Y(t).position!=="fixed"?function(e){let{offsetParent:o}=e,s=e,i=!1;for(;s&&s!==o;){let{assignedSlot:r}=s;if(r){let a=r.offsetParent;if(Y(r).display==="contents"){let n=r.hasAttribute("style"),c=r.style.display;r.style.display=Y(s).display,a=r.offsetParent,r.style.display=c,n||r.removeAttribute("style")}s=r,o!==a&&(o=a,i=!0)}else if(tt(s)&&s.host&&i)break;s=tt(s)&&s.host||s.parentNode}return o}(t):null}function Io(t){let e=oe(t),o=hs(t);for(;o&&Pi(o)&&Y(o).position==="static";)o=hs(o);return o&&(te(o)==="html"||te(o)==="body"&&Y(o).position==="static"&&!us(o))?e:o||function(s){let i=ws(s);for(tt(i)&&(i=i.host);Z(i)&&!["html","body"].includes(te(i));){if(us(i))return i;{let r=i.parentNode;i=tt(r)?r.host:r}}return null}(t)||e}function ms(t){if(Z(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Ve(t);return{width:e.width,height:e.height}}function Ss(t){let e=ws(t);return["html","body","#document"].includes(te(e))?t.ownerDocument.body:Z(e)&&qt(e)?e:Ss(e)}function Fs(t,e){var o;e===void 0&&(e=[]);let s=Ss(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=oe(s),a=i?[r].concat(r.visualViewport||[],qt(s)?s:[]):s,n=e.concat(a);return i?n:n.concat(Fs(a))}function gs(t,e,o){return e==="viewport"?Ft(function(s,i){let r=oe(s),a=me(s),n=r.visualViewport,c=a.clientWidth,p=a.clientHeight,h=0,u=0;if(n){c=n.width,p=n.height;let b=ys();(b||!b&&i==="fixed")&&(h=n.offsetLeft,u=n.offsetTop)}return{width:c,height:p,x:h,y:u}}(t,o)):et(e)?function(s,i){let r=Ve(s,!1,i==="fixed"),a=r.top+s.clientTop,n=r.left+s.clientLeft;return{top:a,left:n,x:n,y:a,right:n+s.clientWidth,bottom:a+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}(e,o):Ft(function(s){var i;let r=me(s),a=eo(s),n=(i=s.ownerDocument)==null?void 0:i.body,c=kt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=kt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),h=-a.scrollLeft+xs(s),u=-a.scrollTop;return Y(n||r).direction==="rtl"&&(h+=kt(r.clientWidth,n?n.clientWidth:0)-c),{width:c,height:p,x:h,y:u}}(me(t)))}function Mi(t){let e=Fs(t),o=["absolute","fixed"].includes(Y(t).position)&&Z(t)?Io(t):t;return et(o)?e.filter(s=>et(s)&&function(i,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(i.contains(r))return!0;if(a&&tt(a)){let n=r;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(s,o)&&te(s)!=="body"):[]}var Xi={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:s,strategy:i}=t,r=[...o==="clippingAncestors"?Mi(e):[].concat(o),s],a=r[0],n=r.reduce((c,p)=>{let h=gs(e,p,i);return c.top=kt(h.top,c.top),c.right=fs(h.right,c.right),c.bottom=fs(h.bottom,c.bottom),c.left=kt(h.left,c.left),c},gs(e,a,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:s}=t,i=Z(o),r=me(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((i||!i&&s!=="fixed")&&((te(o)!=="body"||qt(r))&&(a=eo(o)),Z(o))){let c=Ve(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:et,getDimensions:ms,getOffsetParent:Io,getDocumentElement:me,getElementRects:t=>{let{reference:e,floating:o,strategy:s}=t;return{reference:Ai(e,Io(o),s),floating:{...ms(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Y(t).direction==="rtl"};var to=(t,e,o)=>ds(t,e,{platform:Xi,...o});var Bs=`
:host {
  --oi-heading-color: black;
  position: relative;
}
:host slot:not([name]) {
  position: relative;
  display: inline-block;
}
:host slot[name=header]:not(:empty) {
  display: block;
}
:host slot[name=body] {
  display: block;
  min-width: fit-content;
}
:host .popover {
  position: absolute;
  width: max-content;
  display: none;
}
:host .popover .popover-arrow {
  position: absolute;
}
:host .popover.show {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Ie,classNames:pn,createRef:Wi}=omii,oo,Qs,Ot,$o,$e,K=class extends f{constructor(){super(...arguments);g(this,oo);g(this,Ot);l(this,"slotRef",Wi());g(this,$e,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props,i=d(this,Ot,$o);if(i){let r=this.$(`.${this.type}-arrow`);to(i,this.$element,{strategy:s,placement:e,middleware:[Ut(),Nt(),Rt(o),Vo({element:r})]}).then(({x:a,y:n,placement:c,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:h,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];r&&Object.assign(r.style,{left:h!=null?`${h}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let y=this.$element.dataset;b=="top"?y.popperPlacement="bottom":b=="bottom"?y.popperPlacement="top":b=="left"?y.popperPlacement="right":b=="right"&&(y.popperPlacement="left")})}}show(){m(this,$e,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){m(this,$e,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,$e)?this.hide():this.show()}installed(){let e=d(this,Ot,$o),{triggerShow:o,triggerHide:s}=this.$props;e&&(o.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),s.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),d(this,$e)&&this.hide()})}))}render(e){let{placement:o,header:s,body:i}=this.$props;return Ie(Ie.f,null,Ie("slot",{ref:this.slotRef,tabIndex:!0}),Ie("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Ie("div",{class:"popover-arrow"}),Ie("slot",{name:"header",class:"popover-header"},s),Ie("slot",{class:"popover-body",name:"body"},i)))}};oo=new WeakSet,Qs=function(){return this.slotRef.current},Ot=new WeakSet,$o=function(){let e=d(this,oo,Qs).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},$e=new WeakMap,l(K,"css",[()=>v("reboot","utilities","transitions","popover"),Bs]),l(K,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(K,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var Us=`
:host {
  position: relative;
  display: block;
}

input[type=file] {
  position: fixed;
  opacity: 0;
  width: 0;
  height: 0;
  left: -1000px;
}

.pictures .card {
  width: 10rem;
  height: 10rem;
}
.pictures .card .file {
  --oi-icon-width: 8rem;
  --oi-icon-height: 8rem;
}
.pictures .card .file label {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  text-align: center;
}
.pictures .card .image {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.pictures .card .selector {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: 1;
}
.pictures .card .actions {
  --oi-icon-width: 2rem;
  --oi-icon-height: 2rem;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: none;
}
.pictures .card:not(.selector):hover::after {
  display: block;
  content: " ";
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 100%;
  background-color: var(--oi-secondary);
  opacity: 0.9;
}
.pictures .card:not(.selector):hover .actions {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Rs=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:k,classNames:Hi}=omii,Ns=t=>t?.type?.indexOf("image")==0,_i=t=>Ns(t)?(t.url=t.url??Rs(t.file),k("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):k("div",{className:"file"},k("oi-icon",{"view-box":"1024",name:jt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),k("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),ks=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return k("div",{className:"pictures"},k("div",{class:"row row-cols-auto g-4"},e.map((i,r)=>k("div",{className:"col",key:`file-${r}`},k("div",{class:"card",onClick:()=>{t.open(r)}},_i(i),k("div",{className:"actions"},k("div",{class:"position-absolute top-50 start-50 translate-middle"},Ns(i)&&k("oi-icon",{name:"search"}),k("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(s||e.length==0)&&k("div",{className:"col selector-col",key:"selector"},k("div",{class:"card selector"},k("label",{class:Hi("selector",{multiple:s}),title:o,onClick:()=>{t.open()}},k("oi-icon",{name:"add"}))))))};var{h:j,classNames:Bn}=omii,Os=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return j("div",{className:"files"},j("slot",{name:"actions"},j("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),j("table",{class:"table"},j("tbody",null,e.map(i=>j("tr",null,j("td",null,j("oi-icon",{"view-box":"1024",name:jt(i.ext),type:"file-type"}),i.name,i.ext),j("td",null,uo(i.size)),j("td",null,j("oi-icon",{name:"delete"})))))))};var{h:so,classNames:Rn}=omii,Yi={pictures:ks,files:Os},io={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},De,ge=class extends f{constructor(){super(...arguments);g(this,De,-1)}static get STATUS(){return io}open(e=-1){m(this,De,e),this.$("#files").click()}remove(e){this.$props.files?.splice(e,1),this.updateSelf()}select(e){let{multiple:o,files:s,autoUpload:i}=this.$props;if(e?.length==0)return!1;if(o||s.splice(0,s.length),d(this,De)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:zt(a.name),ext:Dt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.splice(d(this,De),1,...r),this.fire("replaced",{index:d(this,De),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:zt(a.name),ext:Dt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),i===!0&&this.upload()}refresh(){this.update()}upload(){let{files:e,action:o,withCredentials:s,headers:i}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==io.NONE||a.status==io.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=s,typeof i=="function"&&(i=i()),typeof i=="object")for(let c in i)n.setRequestHeader(c,i[c]);n.send(a),n.onreadystatechange=function(c){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=io.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,c)},n.upload.onprogress=function(c){if(c.lengthComputable){let p=Math.ceil(c.loaded/c.total*100);r.progress=p,this.fire("progress",{file:r,loaded:c.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:s}=this.$props;return so(so.f,null,so("slot",null,Yi[s]),so("input",{id:"files",type:"file",multiple:e,accept:o,onChange:i=>{this.select(i.target.files)}}))}};De=new WeakMap,l(ge,"css",[()=>v("reboot","containers","grid","card","utilities","buttons","tables"),Us]),l(ge,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(ge,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Ts=`
:host {
  display: block;
}
:host slot {
  display: block;
}
:host slot[name=indicators] button {
  padding: 0.2rem;
  border: 0;
  margin: 0 0.2rem;
  width: 0;
  background-color: white;
  border-radius: 0.1rem;
  transition: width 0.36s;
}
:host slot[name=indicators] button.active {
  width: 1rem;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var Zi="transitionend";var Ls=t=>{t.dispatchEvent(new Event(Zi))},Ki=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Es=t=>{if(!Ki(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let s=t.closest("summary");if(s&&s.parentNode!==o||s===null)return!1}return e};var{h:$,classNames:Cs,extractClass:Gi}=omii;var qi="carousel-item-end",er="carousel-item-start",tr="carousel-item-next",or="carousel-item-prev",sr=".active",ir=".carousel-item",An=sr+ir,ze,se,Tt,ve,be=class extends f{constructor(){super(...arguments);g(this,ze,0);g(this,se,!1);g(this,Tt,[]);g(this,ve,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,ze)}get isSliding(){return d(this,se)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,se)&&Ls(this),clearInterval(d(this,ve)),m(this,ve,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(d(this,se))return!1;let{$activeItem:o,$items:s,$props:{duration:i}}=this,r=s.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=s.indexOf(n),e=a>r):typeof e=="number"?(a=(e+s.length)%s.length,n=s[a],e=a>r):(a=(r+1)%s.length,e||(a=(r-1+s.length)%s.length),n=s[a]),d(this,ze)==a)return!1;let c=e?er:qi,p=e?tr:or;m(this,se,!0);let h=Number.parseFloat(o.getAttribute("waiting"))??0;I(n,[{classNames:[],duration:h},{classNames:[p],callback:()=>{Jt(n)}},{classNames:[p,c],duration:i},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),I(o,[{classNames:[],duration:h},{classNames:[c,"active"],duration:i},{classNames:[],callback:()=>{m(this,se,!1),m(this,ze,a);let u;for(;u=d(this,Tt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Es(this)&&this.slide()}cycle(){d(this,ve)&&clearInterval(d(this,ve)),m(this,ve,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),m(this,ze,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,se)?d(this,Tt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:s,prevCtrl:i,indicator:r}=this.$props;return $("div",{...Gi(e,"carousel")},$("slot",{class:"carousel-inner"},o.map(a=>$("div",{className:Cs("carousel-item"),waiting:a.attributes?.waiting},a))),$("div",{class:"carousel-indicators"},$("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),$("slot",{name:"actions"},typeof s=="function"&&s(this),typeof i=="function"&&i(this)))}};ze=new WeakMap,se=new WeakMap,Tt=new WeakMap,ve=new WeakMap,l(be,"css",[()=>v("reboot","utilities","carousel"),Ts]),l(be,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>$("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},$("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),$("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>$("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},$("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),$("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>$("button",{type:"button",onClick:s=>o.slide(e),class:Cs({active:e==0})})}),l(be,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Do,classNames:Wn,extractClass:rr}=omii,ye=class extends f{css(){}render(t){let{text:e,desc:o,position:s}=this.$props,i=s?s.split("-"):[];return Do("span",{...rr(t,"badge",{"position-absolute":s,"top-0":i.includes("top"),"start-100":i.includes("right"),"start-0":i.includes("left"),"top-100":i.includes("bottom"),"translate-middle":s,"rounded-pill":s})},Do("slot",null,e),o&&Do("span",{class:"visually-hidden"},o))}};l(ye,"css",()=>v("reboot","utilities","badge")),l(ye,"defaultProps",{text:"",desc:!1,position:!1}),l(ye,"propTypes",{});var Vs=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:ot,classNames:Gn,extractClass:ar}=omii,we,xe=class extends f{constructor(){super(...arguments);g(this,we,!0)}get closed(){return d(this,we)}close(){m(this,we,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){m(this,we,!1),this.update(),B.fade.show(this)}install(){m(this,we,!this.$props.visible)}render(e){return ot("div",{...ar(e,"toast",{show:!d(this,we)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},ot("div",{class:"toast-header"},ot("slot",{name:"header"}),ot("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),ot("div",{class:"toast-body"},ot("slot",null)))}};we=new WeakMap,l(xe,"css",[()=>v("reboot","utilities","toasts","close"),Vs]),l(xe,"defaultProps",{visible:!1}),l(xe,"propTypes",{visible:Boolean});var{h:zo,classNames:nr,extractClass:rl}=omii,Se=class extends f{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:s,max:i,showPercent:r,striped:a,animated:n,style:c,className:p}=this.$props;return zo("div",{class:"progress",style:c},zo("div",{class:nr("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":s,"aria-valuemax":i},r&&zo("span",null,o,"%")))}};l(Se,"css",()=>v("reboot","utilities","progress")),l(Se,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(Se,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Is=`
:host {
  --oi-heading-color: black;
  position: relative;
}
:host .tooltip {
  position: absolute;
  width: max-content;
  display: none;
}
:host .tooltip.show {
  display: block;
}
:host .tooltip-arrow {
  position: absolute;
}
:host slot:not([name]) {
  position: relative;
  display: inline-block;
}
:host slot[name=body] {
  display: block;
  min-width: fit-content;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:st,classNames:pl,createRef:ul}=omii,ro=class extends K{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return st(st.f,null,st("slot",{ref:this.slotRef}),st("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},st("div",{class:"tooltip-arrow"}),st("slot",{class:"tooltip-inner",name:"body"},o)))}},Je=ro;l(Je,"css",[()=>v("reboot","utilities","transitions","tooltip"),Is]),l(Je,"defaultProps",{...pt(ro,ro,"defaultProps"),offset:0});var $s=`
:host {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
  height: 100%;
  clear: both;
  overflow: hidden;
  --oi-layout-duration: .36s;
}
:host slot {
  position: relative;
  box-sizing: border-box;
  display: block;
  padding: 0;
  margin: 0;
  border: 0;
}
:host slot[name=header] {
  padding: val(--oi-layout-header-padding, 0);
}
:host slot[name=footer] {
  padding: val(--oi-layout-footer-padding, 0);
}
:host slot[name=content] {
  flex-grow: 1;
  z-index: 6;
  padding: val(--oi-layout-content-padding, 0);
}
:host slot[name=left] {
  padding: var(--oi-layout-left-padding, 0);
}
:host slot[name=right] {
  padding: val(--oi-layout-right-padding, 0);
}
:host main {
  display: flex;
  flex: 1 0 auto;
  transition: all var(--oi-layout-duration) ease;
}
:host .collapse:not(.show, .collapse-horizontal) {
  height: 0;
}
:host .collapse.collapse-horizontal:not(.show) {
  width: 0;
}
:host .collapsing {
  height: 0;
  transition: height var(--oi-layout-duration) ease;
}
@media (prefers-reduced-motion: reduce) {
  :host .collapsing {
    transition: none;
  }
}
:host .collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width var(--oi-layout-duration) ease;
}
@media (prefers-reduced-motion: reduce) {
  :host .collapsing.collapse-horizontal {
    transition: none;
  }
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:Fe,classNames:vl,createRef:it}=omii,P,ie,A,je,Pe,ao,Be=class extends f{constructor(){super(...arguments);g(this,P,it());g(this,ie,it());g(this,A,it());g(this,je,it());g(this,Pe,it());g(this,ao,it())}close(e,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.clientHeight-d(this,A).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(d(this,P).current),d(this,ie).current.style.height=this.clientHeight-d(this,A).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(d(this,P).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.scrollHeight-d(this,A).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(d(this,je).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(d(this,je).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(d(this,Pe).current)}openRight(){this.$props.openRight=!0,B.collapse.show(d(this,Pe).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=d(this,P).current.getBoundingClientRect(),s=d(this,A).current.getBoundingClientRect();d(this,ie).current.style.height=e.height-o.height-s.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:s,openRight:i}=this.$props;e||(d(this,A).current.style.height=0),o||(d(this,P).current.style.height=0),s||(d(this,je).current.style.height=0),i||(d(this,Pe).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return Fe(Fe.f,null,Fe("slot",{name:"header",ref:d(this,P)}),Fe("main",{ref:d(this,ie)},Fe("slot",{name:"left",ref:d(this,je),class:"collapse-horizontal"}),Fe("slot",{name:"content",ref:d(this,ao)}),Fe("slot",{name:"right",ref:d(this,Pe),class:"collapse-horizontal"})),Fe("slot",{name:"footer",ref:d(this,A)}))}};P=new WeakMap,ie=new WeakMap,A=new WeakMap,je=new WeakMap,Pe=new WeakMap,ao=new WeakMap,l(Be,"css",[$s]),l(Be,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(Be,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Ds=`
:host {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
:host oi-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:Jo,classNames:Rl,uniqueTag:lr}=omii,G,Qe=class extends f{constructor(){super(...arguments);g(this,G,void 0)}get $module(){return d(this,G)}load(e,o,s,i){o=o??this.$props.module,s=s??this.$props.loading,i=i??this.$props.loadError,m(this,G,s),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)m(this,G,i);else if(typeof a=="function"){let n=lr(a);m(this,G,Jo(n,null))}else m(this,G,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),m(this,G,i),this.updateSelf()})}install(){let{src:e,module:o,loading:s,loadError:i}=this.$props;this.load(e,o,s,i)}render(e){return d(this,G)}};G=new WeakMap,l(Qe,"css",[Ds]),l(Qe,"defaultProps",{src:null,module:"default",loading:Jo("oi-loading",{size:"6"}),loadError:Jo("h1",null,"Module Load Error")}),l(Qe,"propTypes",{src:String,module:String});var zs=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Ue,classNames:El,createRef:Js,extractClass:cr}=omii,q,Re=class extends f{constructor(){super(...arguments);l(this,"offcanvasRef",Js());l(this,"backdropRef",Js());g(this,q,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,q))return;m(this,q,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;I(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,q)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,q))return;m(this,q,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;I(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){m(this,q,this.$props.visible)}render(e){let{visible:o,placement:s,position:i,title:r,useBackdrop:a}=this.$props;return Ue(Ue.f,null,Ue("div",{ref:this.offcanvasRef,...cr(e,"offcanvas",`offcanvas-${s}`,`position-${i}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Ue("div",{class:"offcanvas-header"},Ue("slot",{name:"title",class:"offcanvas-title h5"},r),Ue("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Ue("slot",{class:"offcanvas-body"})),a&&d(this,q)&&Ue("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};q=new WeakMap,l(Re,"css",[()=>v("reboot","offcanvas","utilities","close"),zs]),l(Re,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Re,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:Jl,classNames:jl,extractClass:Pl,createRef:Al}=omii;function As(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let s in e)s!=="valid"&&e[s]===!0&&o.push(s);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function js(t){let e=t.currentTarget;e.checkValidity(),As(t.target),e.classList.add("was-validated")}function Ms(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(s=>{As(s)}),t.classList.add("was-validated"),o.every(s=>s.checkValidity?s.checkValidity():!0)&&e}function Ps(t){let e=t.target;e.removeEventListener("input",js),e.addEventListener("input",js,!1),Ms(e)||(t.preventDefault(),t.stopPropagation())}var rt=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",Ps),e.addEventListener("submit",Ps,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return Ms(this)}connectedCallback(){this.constructor.validate(this)}};var Xs=`
:host {
  position: relative;
}
:host slot:not([name=menu]) {
  display: inline-block;
  width: 100%;
  height: 100%;
}
:host slot[name=menu] {
  position: absolute;
  z-index: 1000;
  display: none;
  padding: 0;
  border: 0;
  min-width: fit-content;
}
:host slot[name=menu] .dropdown-menu {
  display: block;
  position: relative;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:no,classNames:Wl,createRef:Ws}=omii,Me=null;document.addEventListener("click",t=>{Me&&Me.hide()});var Lt,Et,re,Ae,Ct,jo,at,Ne=class extends f{constructor(){super(...arguments);g(this,re);g(this,Ct);g(this,Lt,Ws());g(this,Et,Ws());g(this,at,!1)}get $menu(){return d(this,Lt).current}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props;to(d(this,Ct,jo),this.$menu,{strategy:s,placement:e,middleware:[Ut(),Nt(),Rt(o)]}).then(({x:i,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${i}px`,top:`${r}px`})})}show(){m(this,at,!0),d(this,re,Ae).focus(),d(this,re,Ae).setAttribute("aria-expanded",!0),d(this,re,Ae).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Me=this,this.setPosition()}hide(){m(this,at,!1),d(this,re,Ae).classList.remove("show"),d(this,re,Ae).setAttribute("aria-expanded","false"),Me=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,at)?this.hide():this.show()}installed(){d(this,Ct,jo).addEventListener("click",e=>{Me&&Me!=this&&Me.hide(),this.toggle(),e.preventDefault(),e.stopPropagation()}),this.addEventListener("click",e=>{e.stopPropagation()})}render(e){let{menu:o}=this.$props;return no(no.f,null,no("slot",{ref:d(this,Et)}),no("slot",{name:"menu",ref:d(this,Lt)},o))}};Lt=new WeakMap,Et=new WeakMap,re=new WeakSet,Ae=function(){return d(this,Et).current},Ct=new WeakSet,jo=function(){let e=d(this,re,Ae).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},at=new WeakMap,l(Ne,"css",[()=>v("reboot","utilities","transitions","dropdown"),Xs]),l(Ne,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Ne,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var Hs=`
:host {
  display: block;
  height: 100%;
  width: 100%;
}
:host .coder {
  width: 100%;
  height: 100%;
  overflow: auto;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:dr,Component:ec}=omii,lo,ke=class extends f{constructor(){super(...arguments);g(this,lo,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:s,fontSize:i}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{m(this,lo,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:s,fontSize:i,minimap:{enabled:!1}})})}render(){return dr("div",{class:"coder"})}};lo=new WeakMap,l(ke,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,s=new CSSStyleSheet;return s.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,s],fetch(new URL("./monaco/index.css",e).href).then(i=>i.text())},Hs]),l(ke,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(ke,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var _s=`
:host .selected {
  width: 100%;
}
:host .values {
  margin: 0;
  padding: 0;
}
:host .values li {
  display: inline-block;
  list-style: none;
  background-color: aliceblue;
  margin-right: 0.25em;
  padding: 0 0.5rem;
  border-radius: 0.5;
}
:host .expander::after {
  content: " ";
  margin-top: 50%;
  display: block;
  width: 0;
  height: 0;
  border: solid 0.25em transparent;
  border-top-color: black;
  margin-right: 0.5em;
}
:host .dropdown-menu {
  padding: 0.3em 0;
  margin: 0;
  border-radius: 0.5em;
  box-shadow: 5px 5px 5px #cdcfcf;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid 1px #cdcfcf;
  margin-top: 0.375rem;
}
:host .dropdown-menu li {
  list-style: none;
  padding: 0.3rem 0.5rem;
  border-bottom: solid 1px #ccc;
}
:host .dropdown-menu li:last-child {
  border-bottom: none;
}
:host .dropdown-menu li:hover {
  background-color: aliceblue;
}
:host .dropdown-menu li .form-check-label {
  margin-left: 0.5rem;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJIn0= */`;var{h:M,classNames:ac,extractClass:nc}=omii,nt,Oe=class extends f{constructor(){super(...arguments);g(this,nt,!1)}get validity(){let{required:e,values:o,min:s,max:i}=this.$props,r={valid:!0};return e&&(!o||o.length==0)&&(r.valid=!1,r.valueMissing=!0),r.valid&&(s!=0&&s>o.length&&(r.valid=!1,r.rangeUnderflow=!0),i!=0&&i<o.length&&(r.valid=!1,r.rangeOverflow=!0)),r}checkValidity(){m(this,nt,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",e=>{this.showOptions()})}render(){let{values:e,options:o,preserveOrder:s,createSelected:i,createOption:r}=this.$props;return r=r.bind(this),i=i.bind(this),e=e??[],s&&e.sort((a,n)=>o.findIndex(c=>c.value==a)-o.findIndex(c=>c.value==n)),o=o??[],M("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},M("div",{class:"selected d-flex",onClick:a=>{a.stopImmediatePropagation()}},"\xA0",M("ul",{class:"values flex-grow-1"},e.map((a,n)=>{let c=o.find(p=>p.value==a);if(c)return i(c,n)})),M("div",{class:"expander",onClick:a=>{this.showOptions()}})),M("ul",{class:"dropdown-menu",slot:"menu"},o.map((a,n)=>M("li",null,r(a,n)))))}};nt=new WeakMap,l(Oe,"css",[()=>v("reboot","utilities","forms","scrollbar"),_s]),l(Oe,"defaultProps",{options:[],values:[],multiple:!0,required:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:s,multiple:i}=this.$props,r={};return i?r.for=`option${o}`:r.onClick=a=>{s.includes(e.value)?s.splice(0,s.length):s.push(e.value)},M("div",{class:"form-check d-flex"},i&&M("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:s.includes(e.value),onChange:a=>{if(a.target.checked)s.includes(e.value)||s.push(e.value);else{let n=s.indexOf(e.value);n!=-1&&s.splice(n,1)}this.updateSelf(),d(this,nt)&&this.checkValidity()}}),M("label",{class:"form-check-label flex-grow-1",...r},e.text))},createSelected(e,o){let{values:s}=this.$props;return M("li",{onClick:i=>{i.stopImmediatePropagation()}},e.text,M("oi-bi",{name:"x",onClick:i=>{s.splice(o,1),this.updateSelf(),i.stopPropagation(),d(this,nt)&&this.checkValidity()}}))}}),l(Oe,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,min:Number,max:Number});var Ys=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:C,classNames:hc,extractClass:pr}=omii,Te=class extends f{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:s,dataCellFormatter:i,height:r}=this.$props,a=pr(this.$props)?.class??"";return C("div",{className:"table-container",style:{height:r}},C("table",{className:`table ${a}`},C("thead",null,o&&C("tr",null,t?.map(n=>C("th",{style:n.titleStyle,scope:"col"},s(n,t,e,this)))),C("slot",{name:"header"})),C("tbody",null,e?.map((n,c)=>C("tr",null,t.map(p=>C("td",{style:p.style},i(p,n,c,e,this)))))),C("tfoot",null,C("slot",{name:"footer"}))))}};l(Te,"css",[()=>v("reboot","utilities","tables"),Ys]),l(Te,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,s){if(t.type=="checkbox"){t.checked||(t.checked=[]);let i=o?.map(a=>a[t.field])??[],r=i.every(a=>t.checked.includes(a));return C("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...i);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),c=new Set(i.filter(p=>!n.has(p)));t.checked.splice(0,t.checked.length,...c)}await s.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,s,i){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),C("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await i.updateSelf()}});case"radio":return C("input",{type:"radio"});default:return r}},height:"auto"}),l(Te,"propTypes",{showHeader:Boolean});var Zs=`
:host {
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
}
:host #editor {
  height: 100%;
  width: 100%;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxlZGl0b3IiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0EifQ== */`;var{h:ur,classNames:wc,extractClass:Sc}=omii,lt,co,Le=class extends f{constructor(){super(...arguments);g(this,lt,void 0);g(this,co,void 0)}get value(){return this.$props.value}set value(e){this.$props.value=e,this.fire("change",{value:e})}get editor(){return d(this,lt)}css(){return d(this,co)}async install(){let{engine:e,theme:o}=this.$props;if(typeof e=="function")m(this,lt,await e(this.$props,this));else if(typeof e=="string"){let{create:s,themes:i}=await import(new URL(`./editor/engines/${e}.js`,import.meta.url).href);this.addEventListener("installed",r=>{m(this,lt,s(this.$("#editor"),this.$props,this))})}}render(){return ur("textarea",{id:"editor",value:this.value})}};lt=new WeakMap,co=new WeakMap,l(Le,"css",Zs),l(Le,"propTypes",{}),l(Le,"defaultProps",{engine:"tinymce",value:"",theme:"default",placeholder:"..."});var{define:x}=omii;x("oi-rate",ne);x("oi-tab",ae);x("oi-icon",J);x("oi-bi",X);x("oi-pager",H);x("oi-tree",de);x("oi-loading",ee);x("oi-alert",pe);x("oi-accordion",ue);x("oi-breadcrumb",fe);x("oi-modal",he);x("oi-popover",K);x("oi-uploader",ge);x("oi-carousel",be);x("oi-badge",ye);x("oi-toast",xe);x("oi-progress",Se);x("oi-tooltip",Je);x("oi-layout",Be);x("oi-import",Qe);x("oi-offcanvas",Re);x("oi-pagination",ce);x("oi-dropdown",Ne);x("oi-coder",ke);x("oi-select",Oe);x("oi-table",Te);x("oi-editor",Le);customElements.define("oi-form",rt,{extends:"form"});var fr=import.meta.url;omii.ui={utils:Ao,css:es,effect:B,icon:J,tab:ae,rate:ne,pager:H,tree:de,treeNode:So,loading:ee,alert:pe,accordion:ue,breadcrumb:fe,modal:he,popover:K,uploader:ge,carousel:be,badge:ye,toast:xe,progress:Se,tooltip:Je,layout:Be,import:Qe,offcanvas:Re,pagination:ce,form:rt,dropdown:Ne,coder:ke,select:Oe,table:Te,importURL:fr,sortable:He,editor:Le};export{ue as accordion,pe as alert,X as bicon,fe as breadcrumb,be as carousel,ke as coder,es as css,Ne as dropdown,Le as editor,B as effect,rt as form,J as icon,Qe as import,fr as importURL,Be as layout,ee as loading,he as modal,Re as offcanvas,H as pager,ce as pagination,K as popover,Se as progress,ne as rate,Oe as select,He as sortable,ae as tab,Te as table,xe as toast,Je as tooltip,de as tree,So as treeNode,ge as uploader,Ao as utils};
//# sourceMappingURL=omii-ui.js.map
