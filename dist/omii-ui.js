var ni=Object.defineProperty;var li=Object.getPrototypeOf;var ci=Reflect.get;var di=(t,e,o)=>e in t?ni(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(di(t,typeof e!="symbol"?e+"":e,o),o),ho=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(ho(t,e,"read from private field"),o?o.call(t):e.get(t)),h=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},m=(t,e,o,s)=>(ho(t,e,"write to private field"),s?s.call(t,o):e.set(t,o),o);var zt=(t,e,o)=>(ho(t,e,"access private method"),o),pt=(t,e,o)=>ci(li(t),o,e);var pi=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),ui=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},fi=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},Jt=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},jt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var hi=["B","KB","MB","GB","TB","PB"],mo=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+hi[o]},mi=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},gi=(t,e)=>{window.chrome.extension?t():e()},Pt=t=>{t.offsetHeight},bi=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],At=t=>{if(!t)return"file";t=t.toLowerCase();let e=bi.find(o=>o[0].includes(t));return e==null?"file":e[1]};var Wo={tryExtension:gi,downloadUrl:mi,getName:jt,getExtension:Jt,cleanHTML:pi,isToday:ui,isYesterday:fi,formatSize:mo};var vi=import.meta.url,yi="sortable.core.esm.js",Ho=new URL("./sortablejs/",vi).href,V=null,D={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function xi({autoScroll:t,remove:e,revert:o,multiDrag:s,swap:i}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=Ho){V||(V=await import(new URL(yi,r).href)),t&&!D.AutoScroll&&(D.AutoScroll=!0,V.Sortable.mount(new V.AutoScroll));let[a,n]=V.OnSpill;return e&&!D.Remove&&(D.Remove=!0,V.Sortable.mount(a)),e&&!D.Remove&&(D.Remove=!0,V.Sortable.mount(a)),o&&!D.Remove&&(D.Revert=!0,V.Sortable.mount(n)),s&&!D.MultiDrag&&(D.MultiDrag=!0,V.Sortable.mount(new V.MultiDrag)),i&&!D.Swap&&(D.Swap=!0,V.Sortable.mount(new V.Swap)),V.Sortable}function wi(t){Ho=t}var _e={use:xi,setRoot:wi};var{define:Rr,h:Nr,Component:Si}=omii,f=class extends Si{};var _o=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:ut,Component:Cr,classNames:Yo,render:Vr}=omii,ae=class extends f{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},!0,!0):this.update$Props({activeIndex:t},!0,!0))}async render(t){let e=this.$props,o=t.items??e.items,s=[],i=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,c=a.pane;i.push(ut("div",{key:`pane-${a.key??r}`,className:Yo("pane",{active:n})},c)),s.push(ut("div",{key:`nav-${a.key??r}`,className:Yo("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return ut("div",{class:"tabs"},ut("div",{class:"navs"},s),ut("div",{class:"panes"},i))}};l(ae,"css",_o),l(ae,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(ae,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Ce={BUNDLE:"bundle",SINGLE:"single"},ft={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:zr,h:Zo,Component:Jr}=omii,ht=Ce.SINGLE,go=ft.FILLED,bo=async(t,e,o)=>{e=e??go,e==ft.FILE_TYPE&&(o=Ce.BUNDLE);try{if((o??ht)==Ce.BUNDLE){let{default:s}=await import(`./icons/${e}.js`);return s[t]}else{let{default:s}=await import(`./icons/${e}/${t}.js`);return s}}catch{console.error("load icon error",t,e)}},Fi=async(t,e,o,s={})=>{let i=await bo(t,e,o);return Zo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...s},i)},J=class extends f{static useBundleMode(){ht=Ce.BUNDLE}static useSingleMode(){ht=Ce.SINGLE}static get MODES(){return Ce}static get TYPES(){return ft}static get Mode(){return ht}static set Mode(t){ht=t}static get Type(){return go}static set Type(t){go=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",s=t?`${t}rem`:"var(--oi-icon-width, 1rem)",i=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,s=await bo(t,e);return Zo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},s)}};l(J,"updateOnAttributeChanged",!0),l(J,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(J,"defaultProps",{name:null,type:ft.FILLED,viewBox:24,size:null,color:null}),l(J,"createSvg",Fi),l(J,"loadIcon",bo),l(J,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var{h:Ko}=omii,vo=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},Bi=async(t,e={})=>{let o=await vo(t);return Ko("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},X=class extends f{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",s=t?`${t}rem`:"var(--oi-bi-width, 1rem)",i=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await vo(t);return Ko("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(X,"updateOnAttributeChanged",!0),l(X,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(X,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(X,"createSvg",Bi),l(X,"loadIcon",vo),l(X,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var Go=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:Kr,h:yo,Component:Gr,classNames:Ui,render:qr}=omii,xo={STAR:"star",HALF:"star_half",BORDER:"star_border"},W,ne=class extends f{constructor(){super(...arguments);h(this,W,-1)}get rateScore(){return this.$props.score}install(){m(this,W,this.$props.score)}rate(e){this.fire("rate",e),m(this,W,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:s,rateable:i,size:r,color:a}=o,n=[],c=d(this,W);for(let p=0;p<s;p++)c-p>=.5?n.push(xo.STAR):c-p>0?n.push(xo.HALF):n.push(xo.BORDER);return yo("div",{class:Ui("rate-wrap","rate-"+d(this,W))},n.map((p,g)=>i?yo("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),m(this,W,g+1),this.fire("tryRate",d(this,W)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),m(this,W,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(g+1)}}):yo("oi-icon",{name:p,size:r,color:a,className:p})))}};W=new WeakMap,l(ne,"css",Go),l(ne,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(ne,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var qo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:O,classNames:mt}=omii,H=class extends f{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(H,"css",qo),l(H,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:O("oi-icon",{name:"keyboard_arrow_left"}),next:O("oi-icon",{name:"keyboard_arrow_right"}),first:O("oi-icon",{name:"first_page"}),last:O("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:s}=t;return O("div",{class:mt("prev",{disable:o<=1}),onClick:i=>{o>1&&e.goto(o-1)}},s)},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return O("div",{class:mt("next",{disable:o>=i}),onClick:r=>{i>o&&e.goto(o+1)}},s)},createFirst(t,e){let{first:o,pageNum:s}=t;return O("div",{class:mt("first",{disable:s<=1}),onClick:i=>{s!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return O("div",{class:mt("last",{disable:s>=i}),onClick:r=>{s!=i&&e.goto(i)}},o)},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(O("div",{className:mt({active:s==p,page:!0}),onClick:g=>{s!=p&&e.goto(p)}},p));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return O("div",{class:"info"},O("span",{class:"curr"},o),"/",O("span",{class:"total"},s))},createJumper(t,e){return O("div",{class:"jumper"},"\u524D\u5F80",O("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return O("div",{class:"pager"},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e))}}),l(H,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var es=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Mt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:Qi,define:ca,h:Ri,Component:da,setTheme:Ni}=omii,So="bootstrap";function ki(t){So=t,le=new URL(`./${So}/`,import.meta.url).href}var le=new URL(`./${So}/`,import.meta.url).href;function Oi(t){le=t}var Xt=(t,e=le)=>fetch(Fo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),Ti=t=>Xt=t,ts=(t,e,o=le)=>{let s=Ri("link",{rel:"styleSheet",href:Fo(t,o)});Qi(s,e??"body")},Li=(t,e=le)=>{ts("reboot",t,e)},Fo=(t,e=le)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},wo=new Map,Wt=async(t,e=le)=>{let o=`${e}/${t}`,s=wo.get(o);if(s===void 0){let i=[];wo.set(o,i),s=new CSSStyleSheet;try{s.replaceSync(await Xt(t,e)),i.forEach(r=>{r(s)}),wo.set(o,s)}catch(r){console.error("get css stylesheets error",r)}}else if(s instanceof Array)return new Promise(i=>{s.push(i)});return s},v=(...t)=>Promise.all(t.map(e=>Wt(e))),os={};Mt.forEach(t=>{Object.defineProperty(os,t,{get:function(){return Wt(t)}})});var Ei=(t=Mt)=>{t.forEach(e=>{Wt(e)})},Ci=async(t,e=le)=>{let o=await Xt(`theme.${t}`,e);Ni(o)},I=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let s=0,i=(r=[])=>{let a=s%e.length,{classNames:n,duration:c=0,delay:p=0,callback:g=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),g&&g(t,n,c,p)},p*1e3),s++,!(Math.floor(s/e.length)>=o)&&setTimeout(()=>{i(n)},(c+p)*1e3)};i()}},ss={StyleSheets:Mt,CSSStyleSheets:os,setBaseUrl:Oi,setBaseRoot:ki,loadStyleSheet:Xt,setStyleSheetLoader:Ti,addStyleSheet:ts,addRebootStyleSheet:Li,getStyleSheetUrl:Fo,getCSSStyleSheet:Wt,getCSSStyleSheets:v,useTheme:Ci,timingClassNames:I,preLoad:Ei};var{h:S,classNames:gt,extractClass:Vi}=omii,Ye=class extends H{},ce=Ye;l(ce,"css",[()=>v("reboot","pagination","utilities"),es]),l(ce,"defaultProps",{...pt(Ye,Ye,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:s}=t;return S("li",{class:gt("page-item",{disabled:o<=1})},S("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i=>{o>1&&e.goto(o-1),i.preventDefault(),i.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return S("li",{class:gt("page-item",{disabled:o>=i})},S("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{i>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:s}=t;return S("li",{class:gt("page-item",{disabled:s<=1})},S("a",{class:"page-link",href:"#","aria-label":"First",onClick:i=>{s!=1&&e.goto(1),i.preventDefault(),i.stopPropagation()}},S("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return S("li",{class:gt("page-item",{disabled:s>=i})},S("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{s!=i&&e.goto(i),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(S("li",{key:`pager-${p}`,className:gt("page-item",{active:s==p,page:!0})},S("a",{class:"page-link",href:"#",onClick:g=>{s!=p&&e.goto(p),g.preventDefault(),g.stopPropagation()}},p)));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return S("li",{class:"info page-item"},S("span",{className:"page-link"},S("span",{class:"curr"},o),"/",S("span",{class:"total"},s)))},createJumper(t,e){return S("li",{class:"jumper page-item mx-2"},S("span",{className:"page-link"},"\u524D\u5F80",S("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return S("nav",null,S("ul",{...Vi(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e)))}}),l(ce,"propTypes",{...pt(Ye,Ye,"propTypes"),align:String});var is=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var rs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTs7QUFTSTtFQUNJO0VBQ0E7O0FBS1I7RUFDSTs7O0FBTWhCO0VBRUk7OztBQUdKO0VBQ0kifQ== */`;var{h:_,classNames:Ht,define:Ii,getHost:Bo}=omii,Ze,bt,Qo=class extends f{constructor(){super(...arguments);h(this,Ze,void 0);h(this,bt,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.$props.node??{}}get nodes(){return d(this,Ze)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=Bo(this);return o instanceof Qo?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?_("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):_("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?_("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):_("div",{class:"radio-placeholder"}):null}install(){!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}get Sortable(){return d(this,bt)}async installed(){if(this.sortable){let o=await _e.use();m(this,bt,o.create(this.$(".children"),{delay:100,handle:".element",swapThreshold:.65,fallbackOnBody:!0,group:this.tree.sortGroup,onEnd:s=>{let i=Bo(s.from),r=Bo(s.to),a=i.nodes,n=r.nodes;this.tree.fire("sorted",{fromNodes:a,toNodes:n,fromIndex:s.oldIndex,toIndex:s.newIndex})}}))}}async render(o){let{node:s,cssss:i}=o,r=s.element??s.label??s.key;typeof r=="function"&&(r=await r(s,o,this));let a=null,n=m(this,Ze,s.children);return typeof n=="function"&&this.expanded&&m(this,Ze,n=await n(s,o,this)),a=_("div",{class:Ht("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(n instanceof Array?n.map(c=>_("oi-tree-node",{node:c,"node-level":this.level+1,tree:this.tree,cssss:i})):n)),_("div",{class:Ht("node",{expanded:this.expanded,"no-children":this.noChildren})},_("div",{class:Ht("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:c=>{c.stopPropagation(),this.selected&&c.ctrlKey===!0?this.unSelect():this.select()}},_("div",{onClick:c=>{c.stopPropagation(),this.toggle()},class:Ht("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,_("div",{class:"text"},r)),a)}},Ve=Qo;Ze=new WeakMap,bt=new WeakMap,l(Ve,"css",rs),l(Ve,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),l(Ve,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});Ii("oi-tree-node",Ve);var Uo=Ve;var{h:as,purgeCSSSS:$i,getHost:_t,classNames:Di}=omii;var vt,Ke,de=class extends f{constructor(){super(...arguments);h(this,vt,void 0);h(this,Ke,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return d(this,vt)}isSelected(e){let{multiSelect:o,selectedKey:s,selectedKeys:i}=this.$props;return o?(i??[]).some(r=>r==e):s!=null&&s==e}select(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;s?i.some(r=>r==e)||i.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;if(!s)this.$props.selectedKey=null;else{let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:s}=this.$props;return o?(s??[]).some(i=>i==e):!1}check(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;s&&i.indexOf(e)==-1&&i.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;if(s){let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:s}=this.$props;return o?s!=null&&s==e:!1}radio(e,o=!0){let{radioTree:s}=this.$props;s&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(s=>s==e)}expand(e,o=!0){let{expandedKeys:s}=this.$props;s.indexOf(e)!=-1&&s.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:s}=this.$props,i=s.indexOf(e);i!=-1&&s.splice(i,1),o&&this.update()}async installed(){if(this.$props.sortable){let e=await _e.use();m(this,vt,e.create(this.rootNode,{delay:100,swapThreshold:.65,group:this.sortGroup,onEnd:o=>{let s=_t(o.from),i=_t(o.to),r=s.nodes,a=i.nodes;this.fire("sorted",{fromNodes:r,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}get nodes(){if(!d(this,Ke)){let e=this.$props.nodes,o=_t(this);typeof e=="function"&&(e=e.call(o)),m(this,Ke,e)}return d(this,Ke)}render(){let e=_t(this),o=$i(this.$props.nodeCss,e);return as("div",{class:Di("tree-container",{sortable:this.sortable})},this.nodes.map(s=>as("oi-tree-node",{node:s,tree:this,cssss:o})))}};vt=new WeakMap,Ke=new WeakMap,l(de,"css",is),l(de,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),l(de,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:ka,classNames:Oa}=omii,yt,ee=class extends f{constructor(){super(...arguments);h(this,yt,void 0)}css(){let{size:e,color:o}=this.$props,s="2rem";if(e)s=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?s=`${a.offsetHeight}px`:s="2rem"}let i=`
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
  `),l(ee,"defaultProps",{name:"circle",size:null,color:null}),l(ee,"propTypes",{name:String,size:Number,color:String});var Ge={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Ro="show",Yt="collapse",No="collapsing",zi="collapse-horizontal",ko=.35,Oo=(t,e)=>e||(t.classList.contains(zi)?Ge.HORIZONTAL:Ge.VERTICAL),ns={show(t,e=ko,o=null){return new Promise(s=>{o=Oo(t,o),I(t,[{classNames:[Yt]},{classNames:[No],duration:e,callback(i){i.style[o==Ge.VERTICAL?"height":"width"]=`${i[o==Ge.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Yt,Ro],callback(i){i.style[o==Ge.VERTICAL?"height":"width"]="",s()}}])})},hide(t,e=ko,o=null){return new Promise(s=>{o=Oo(t,o);let i=o==Ge.VERTICAL?"height":"width";t.style[i]=`${t.getBoundingClientRect()[i]}px`,Pt(t.offsetHeight),I(t,[{classNames:[No,Yt,Ro]},{classNames:[No],duration:e,callback(r){r.style[i]=""}},{classNames:[Yt],callback:s}])})},toggle(t,e=ko,o=null){return o=Oo(t,o),t.classList.contains(Ro)?this.hide(t,e,o):this.show(t,e,o)}};var xt="fade",To="show",Lo=.15,ls={show(t,e=Lo){return new Promise(o=>{I(t,[{classNames:[xt]},{classNames:[xt,To],duration:e,callback:o}])})},hide(t,e=Lo){return new Promise(o=>{I(t,[{classNames:[xt,To]},{classNames:[xt],duration:e,callback:o}])})},toggle(t,e=Lo){return t.classList.contains(xt)&&!t.classList.contains(To)?this.show(t,e):this.hide(t,e)}};var B={collapse:ns,fade:ls};var{h:Eo,classNames:Ji}=omii;var ji="show",wt,pe=class extends f{constructor(){super(...arguments);h(this,wt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(ji),m(this,wt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return d(this,wt)?null:Eo("div",{className:Ji("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},Eo("slot",null),o?Eo("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};wt=new WeakMap,l(pe,"css",()=>v("reboot","utilities","alert","close","transitions")),l(pe,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(pe,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:qe,classNames:Co}=omii,Zt={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Pi="collapsed",et,Kt,ue=class extends f{constructor(){super(...arguments);h(this,et)}static get DIRECTIONS(){return Zt}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:s}=this.$props;if(e.length>0&&s&&(e[0].opened=!0),!o){let i=e.filter(r=>r.opened);if(i.length){let r=i.shift();r.opened=!0,i.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==Zt.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:s}=this.$props;if(s)zt(this,et,Kt).call(this,e);else{let i=o.findIndex(a=>a.opened),r=i==-1?null:o[i];r&&r!=e&&zt(this,et,Kt).call(this,r),zt(this,et,Kt).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return qe("div",{class:Co("accordion",{"collapse-horizontal":o==Zt.HORIZONTAL})},e.map((s,i)=>qe("div",{class:"accordion-item",key:s.key??`item-${i}`},qe("h2",{class:"accordion-header"},qe("button",{class:Co("accordion-button",{collapsed:!s.opened}),type:"button","aria-expanded":s.opened,onClick:r=>{this.toggle(s)}},s.header)),qe("div",{class:Co("accordion-collapse",{collapse:!0,show:s.opened})},qe("div",{class:"accordion-body"},typeof s.body=="function"?s.body(s,this.$props,this):s.body)))))}};et=new WeakSet,Kt=function(e){let{items:o,transitionDuration:s}=this.$props,i=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${i+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(Pi,!e.opened),e.opened?(B.collapse.show(a),this.fire("collapseShow",e)):(B.collapse.hide(a),this.fire("collapseHide",e))},l(ue,"css",()=>v("reboot","utilities","accordion","close","transitions")),l(ue,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:Zt.VERTICAL}),l(ue,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:St,classNames:Ka}=omii,fe=class extends f{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return St("nav",{"aria-label":"breadcrumb"},St("ol",{class:"breadcrumb"},t.map((o,s)=>s!==t.length-1?St("li",{class:"breadcrumb-item"},typeof e=="object"&&s!=0?e:null,St("a",{href:o.href},o.label)):St("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&s!=0?e:null,o.label))))}};l(fe,"css",()=>v("reboot","utilities","breadcrumb")),l(fe,"defaultProps",{}),l(fe,"propTypes",{});var cs=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:E,classNames:ds,extractClass:Ai}=omii,he=class extends f{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return E(E.f,null,e.visible&&!e.staticPosition&&E("div",{class:ds("modal-backdrop","fade","show")}),E("div",{...Ai(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},E("div",{class:ds("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},E("div",{class:"modal-content"},E("div",{class:"modal-header"},E("slot",{name:"header"},E("h5",{class:"modal-title"},e.title),E("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),E("div",{class:"modal-body"},E("slot",null)),E("div",{class:"modal-footer"},E("slot",{name:"footer"}))))))}};l(he,"css",[()=>v("reboot","modal","utilities","close","scrollbar"),cs]),l(he,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(he,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function Bt(t){return t.split("-")[0]}function qt(t){return t.split("-")[1]}function Ut(t){return["top","bottom"].includes(Bt(t))?"x":"y"}function Io(t){return t==="y"?"height":"width"}function ps(t,e,o){let{reference:s,floating:i}=t,r=s.x+s.width/2-i.width/2,a=s.y+s.height/2-i.height/2,n=Ut(e),c=Io(n),p=s[c]/2-i[c]/2,g=n==="x",u;switch(Bt(e)){case"top":u={x:r,y:s.y-i.height};break;case"bottom":u={x:r,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:a};break;case"left":u={x:s.x-i.width,y:a};break;default:u={x:s.x,y:s.y}}switch(qt(e)){case"start":u[n]-=p*(o&&g?-1:1);break;case"end":u[n]+=p*(o&&g?-1:1)}return u}var fs=async(t,e,o)=>{let{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),c=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:g}=ps(c,s,n),u=s,b={},y=0;for(let w=0;w<r.length;w++){let{name:F,fn:U}=r[w],{x:R,y:T,data:L,reset:Q}=await U({x:p,y:g,initialPlacement:s,placement:u,strategy:i,middlewareData:b,rects:c,platform:a,elements:{reference:t,floating:e}});p=R??p,g=T??g,b={...b,[F]:{...b[F],...L}},Q&&y<=50&&(y++,typeof Q=="object"&&(Q.placement&&(u=Q.placement),Q.rects&&(c=Q.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):Q.rects),{x:p,y:g}=ps(c,u,n)),w=-1)}return{x:p,y:g,placement:u,strategy:i,middlewareData:b}};function hs(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function Ft(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function $o(t,e){var o;e===void 0&&(e={});let{x:s,y:i,platform:r,rects:a,elements:n,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:g="viewport",elementContext:u="floating",altBoundary:b=!1,padding:y=0}=e,w=hs(y),F=n[b?u==="floating"?"reference":"floating":u],U=Ft(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(F)))==null||o?F:F.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:g,strategy:c})),R=Ft(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:s,y:i}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:c}):a[u]);return{top:U.top-R.top+w.top,bottom:R.bottom-U.bottom+w.bottom,left:U.left-R.left+w.left,right:R.right-U.right+w.right}}var Mi=Math.min,Xi=Math.max;function Vo(t,e,o){return Xi(t,Mi(e,o))}var Do=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:s=0}=t??{},{x:i,y:r,placement:a,rects:n,platform:c}=e;if(o==null)return{};let p=hs(s),g={x:i,y:r},u=Ut(a),b=qt(a),y=Io(u),w=await c.getDimensions(o),F=u==="y"?"top":"left",U=u==="y"?"bottom":"right",R=n.reference[y]+n.reference[u]-g[u]-n.floating[y],T=g[u]-n.reference[u],L=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o)),Q=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0;Q===0&&(Q=n.floating[y]);let $t=R/2-T/2,We=p[F],ct=Q-w[y]-p[U],N=Q/2-w[y]/2+$t,z=Vo(We,N,ct),He=(b==="start"?p[F]:p[U])>0&&N!==z&&n.reference[y]<=n.floating[y];return{[u]:g[u]-(He?N<We?We-N:ct-N:0),data:{[u]:z,centerOffset:N-z}}}}),Wi={left:"right",right:"left",bottom:"top",top:"bottom"};function Gt(t){return t.replace(/left|right|bottom|top/g,e=>Wi[e])}function Hi(t,e,o){o===void 0&&(o=!1);let s=qt(t),i=Ut(t),r=Io(i),a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Gt(a)),{main:a,cross:Gt(a)}}var _i={start:"end",end:"start"};function us(t){return t.replace(/start|end/g,e=>_i[e])}var Yi=["top","right","bottom","left"],dn=Yi.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Qt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:s,middlewareData:i,rects:r,initialPlacement:a,platform:n,elements:c}=e,{mainAxis:p=!0,crossAxis:g=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:y=!0,...w}=t,F=Bt(s),U=u||(F===a||!y?[Gt(a)]:function(N){let z=Gt(N);return[us(N),z,us(z)]}(a)),R=[a,...U],T=await $o(e,w),L=[],Q=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&L.push(T[F]),g){let{main:N,cross:z}=Hi(s,r,await(n.isRTL==null?void 0:n.isRTL(c.floating)));L.push(T[N],T[z])}if(Q=[...Q,{placement:s,overflows:L}],!L.every(N=>N<=0)){var $t,We;let N=(($t=(We=i.flip)==null?void 0:We.index)!=null?$t:0)+1,z=R[N];if(z)return{data:{index:N,overflows:Q},reset:{placement:z}};let He="bottom";switch(b){case"bestFit":{var ct;let Xo=(ct=Q.map(Dt=>[Dt,Dt.overflows.filter(dt=>dt>0).reduce((dt,ai)=>dt+ai,0)]).sort((Dt,dt)=>Dt[1]-dt[1])[0])==null?void 0:ct[0].placement;Xo&&(He=Xo);break}case"initialPlacement":He=a}if(s!==He)return{reset:{placement:He}}}return{}}}};var Rt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:s}=e,i=await async function(r,a){let{placement:n,platform:c,elements:p}=r,g=await(c.isRTL==null?void 0:c.isRTL(p.floating)),u=Bt(n),b=qt(n),y=Ut(n)==="x",w=["left","top"].includes(u)?-1:1,F=g&&y?-1:1,U=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:T,alignmentAxis:L}=typeof U=="number"?{mainAxis:U,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...U};return b&&typeof L=="number"&&(T=b==="end"?-1*L:L),y?{x:T*F,y:R*w}:{x:R*w,y:T*F}}(e,t);return{x:o+i.x,y:s+i.y,data:i}}}};function Zi(t){return t==="x"?"y":"x"}var Nt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:s,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:U=>{let{x:R,y:T}=U;return{x:R,y:T}}},...c}=t,p={x:o,y:s},g=await $o(e,c),u=Ut(Bt(i)),b=Zi(u),y=p[u],w=p[b];if(r){let U=u==="y"?"bottom":"right";y=Vo(y+g[u==="y"?"top":"left"],y,y-g[U])}if(a){let U=b==="y"?"bottom":"right";w=Vo(w+g[b==="y"?"top":"left"],w,w-g[U])}let F=n.fn({...e,[u]:y,[b]:w});return{...F,data:{x:F.x-o,y:F.y-s}}}}};function xs(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function oe(t){if(t==null)return window;if(!xs(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function Y(t){return oe(t).getComputedStyle(t)}function te(t){return xs(t)?"":t?(t.nodeName||"").toLowerCase():""}function ws(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function Z(t){return t instanceof oe(t).HTMLElement}function tt(t){return t instanceof oe(t).Element}function ot(t){return typeof ShadowRoot>"u"?!1:t instanceof oe(t).ShadowRoot||t instanceof ShadowRoot}function to(t){let{overflow:e,overflowX:o,overflowY:s}=Y(t);return/auto|scroll|overlay|hidden/.test(e+s+o)}function Ki(t){return["table","td","th"].includes(te(t))}function ms(t){let e=/firefox/i.test(ws()),o=Y(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function Ss(){return!/^((?!chrome|android).)*safari/i.test(ws())}var gs=Math.min,kt=Math.max,eo=Math.round;function Ie(t,e,o){var s,i,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),c=1,p=1;e&&Z(t)&&(c=t.offsetWidth>0&&eo(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&eo(n.height)/t.offsetHeight||1);let g=tt(t)?oe(t):window,u=!Ss()&&o,b=(n.left+(u&&(s=(i=g.visualViewport)==null?void 0:i.offsetLeft)!=null?s:0))/c,y=(n.top+(u&&(r=(a=g.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,w=n.width/c,F=n.height/p;return{width:w,height:F,top:y,right:b+w,bottom:y+F,left:b,x:b,y}}function me(t){return(e=t,(e instanceof oe(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function oo(t){return tt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Fs(t){return Ie(me(t)).left+oo(t).scrollLeft}function Gi(t,e,o){let s=Z(e),i=me(e),r=Ie(t,s&&function(c){let p=Ie(c);return eo(p.width)!==c.offsetWidth||eo(p.height)!==c.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(s||!s&&o!=="fixed")if((te(e)!=="body"||to(i))&&(a=oo(e)),Z(e)){let c=Ie(e,!0);n.x=c.x+e.clientLeft,n.y=c.y+e.clientTop}else i&&(n.x=Fs(i));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function Bs(t){return te(t)==="html"?t:t.assignedSlot||t.parentNode||(ot(t)?t.host:null)||me(t)}function bs(t){return Z(t)&&Y(t).position!=="fixed"?function(e){let{offsetParent:o}=e,s=e,i=!1;for(;s&&s!==o;){let{assignedSlot:r}=s;if(r){let a=r.offsetParent;if(Y(r).display==="contents"){let n=r.hasAttribute("style"),c=r.style.display;r.style.display=Y(s).display,a=r.offsetParent,r.style.display=c,n||r.removeAttribute("style")}s=r,o!==a&&(o=a,i=!0)}else if(ot(s)&&s.host&&i)break;s=ot(s)&&s.host||s.parentNode}return o}(t):null}function zo(t){let e=oe(t),o=bs(t);for(;o&&Ki(o)&&Y(o).position==="static";)o=bs(o);return o&&(te(o)==="html"||te(o)==="body"&&Y(o).position==="static"&&!ms(o))?e:o||function(s){let i=Bs(s);for(ot(i)&&(i=i.host);Z(i)&&!["html","body"].includes(te(i));){if(ms(i))return i;{let r=i.parentNode;i=ot(r)?r.host:r}}return null}(t)||e}function vs(t){if(Z(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Ie(t);return{width:e.width,height:e.height}}function Us(t){let e=Bs(t);return["html","body","#document"].includes(te(e))?t.ownerDocument.body:Z(e)&&to(e)?e:Us(e)}function Qs(t,e){var o;e===void 0&&(e=[]);let s=Us(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=oe(s),a=i?[r].concat(r.visualViewport||[],to(s)?s:[]):s,n=e.concat(a);return i?n:n.concat(Qs(a))}function ys(t,e,o){return e==="viewport"?Ft(function(s,i){let r=oe(s),a=me(s),n=r.visualViewport,c=a.clientWidth,p=a.clientHeight,g=0,u=0;if(n){c=n.width,p=n.height;let b=Ss();(b||!b&&i==="fixed")&&(g=n.offsetLeft,u=n.offsetTop)}return{width:c,height:p,x:g,y:u}}(t,o)):tt(e)?function(s,i){let r=Ie(s,!1,i==="fixed"),a=r.top+s.clientTop,n=r.left+s.clientLeft;return{top:a,left:n,x:n,y:a,right:n+s.clientWidth,bottom:a+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}(e,o):Ft(function(s){var i;let r=me(s),a=oo(s),n=(i=s.ownerDocument)==null?void 0:i.body,c=kt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=kt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),g=-a.scrollLeft+Fs(s),u=-a.scrollTop;return Y(n||r).direction==="rtl"&&(g+=kt(r.clientWidth,n?n.clientWidth:0)-c),{width:c,height:p,x:g,y:u}}(me(t)))}function qi(t){let e=Qs(t),o=["absolute","fixed"].includes(Y(t).position)&&Z(t)?zo(t):t;return tt(o)?e.filter(s=>tt(s)&&function(i,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(i.contains(r))return!0;if(a&&ot(a)){let n=r;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(s,o)&&te(s)!=="body"):[]}var er={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:s,strategy:i}=t,r=[...o==="clippingAncestors"?qi(e):[].concat(o),s],a=r[0],n=r.reduce((c,p)=>{let g=ys(e,p,i);return c.top=kt(g.top,c.top),c.right=gs(g.right,c.right),c.bottom=gs(g.bottom,c.bottom),c.left=kt(g.left,c.left),c},ys(e,a,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:s}=t,i=Z(o),r=me(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((i||!i&&s!=="fixed")&&((te(o)!=="body"||to(r))&&(a=oo(o)),Z(o))){let c=Ie(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:tt,getDimensions:vs,getOffsetParent:zo,getDocumentElement:me,getElementRects:t=>{let{reference:e,floating:o,strategy:s}=t;return{reference:Gi(e,zo(o),s),floating:{...vs(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Y(t).direction==="rtl"};var so=(t,e,o)=>fs(t,e,{platform:er,...o});var Rs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:$e,classNames:wn,createRef:tr}=omii,io,Ns,Ot,Jo,De,K=class extends f{constructor(){super(...arguments);h(this,io);h(this,Ot);l(this,"slotRef",tr());h(this,De,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props,i=d(this,Ot,Jo);if(i){let r=this.$(`.${this.type}-arrow`);so(i,this.$element,{strategy:s,placement:e,middleware:[Qt(),Nt(),Rt(o),Do({element:r})]}).then(({x:a,y:n,placement:c,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:g,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];r&&Object.assign(r.style,{left:g!=null?`${g}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let y=this.$element.dataset;b=="top"?y.popperPlacement="bottom":b=="bottom"?y.popperPlacement="top":b=="left"?y.popperPlacement="right":b=="right"&&(y.popperPlacement="left")})}}show(){m(this,De,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){m(this,De,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,De)?this.hide():this.show()}installed(){let e=d(this,Ot,Jo),{triggerShow:o,triggerHide:s}=this.$props;e&&(o.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),s.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),d(this,De)&&this.hide()})}))}render(e){let{placement:o,header:s,body:i}=this.$props;return $e($e.f,null,$e("slot",{ref:this.slotRef,tabIndex:!0}),$e("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},$e("div",{class:"popover-arrow"}),$e("slot",{name:"header",class:"popover-header"},s),$e("slot",{class:"popover-body",name:"body"},i)))}};io=new WeakSet,Ns=function(){return this.slotRef.current},Ot=new WeakSet,Jo=function(){let e=d(this,io,Ns).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},De=new WeakMap,l(K,"css",[()=>v("reboot","utilities","transitions","popover"),Rs]),l(K,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(K,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var ks=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Os=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:k,classNames:or}=omii,Ts=t=>t?.type?.indexOf("image")==0,sr=t=>Ts(t)?(t.url=t.url??Os(t.file),k("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):k("div",{className:"file"},k("oi-icon",{"view-box":"1024",name:At(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),k("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),Ls=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return k("div",{className:"pictures"},k("div",{class:"row row-cols-auto g-4"},e.map((i,r)=>k("div",{className:"col",key:`file-${r}`},k("div",{class:"card",onClick:()=>{t.open(r)}},sr(i),k("div",{className:"actions"},k("div",{class:"position-absolute top-50 start-50 translate-middle"},Ts(i)&&k("oi-icon",{name:"search"}),k("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(s||e.length==0)&&k("div",{className:"col selector-col",key:"selector"},k("div",{class:"card selector"},k("label",{class:or("selector",{multiple:s}),title:o,onClick:()=>{t.open()}},k("oi-icon",{name:"add"}))))))};var{h:j,classNames:Cn}=omii,Es=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return j("div",{className:"files"},j("slot",{name:"actions"},j("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),j("table",{class:"table"},j("tbody",null,e.map(i=>j("tr",null,j("td",null,j("oi-icon",{"view-box":"1024",name:At(i.ext),type:"file-type"}),i.name,i.ext),j("td",null,mo(i.size)),j("td",null,j("oi-icon",{name:"delete"})))))))};var{h:ro,classNames:$n}=omii,ir={pictures:Ls,files:Es},ao={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},ze,ge=class extends f{constructor(){super(...arguments);h(this,ze,-1)}static get STATUS(){return ao}open(e=-1){m(this,ze,e),this.$("#files").click()}remove(e){this.$props.files?.splice(e,1),this.updateSelf()}select(e){let{multiple:o,files:s,autoUpload:i}=this.$props;if(e?.length==0)return!1;if(o||s.splice(0,s.length),d(this,ze)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:jt(a.name),ext:Jt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.splice(d(this,ze),1,...r),this.fire("replaced",{index:d(this,ze),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:jt(a.name),ext:Jt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),i===!0&&this.upload()}refresh(){this.update()}upload(){let{files:e,action:o,withCredentials:s,headers:i}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==ao.NONE||a.status==ao.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=s,typeof i=="function"&&(i=i()),typeof i=="object")for(let c in i)n.setRequestHeader(c,i[c]);n.send(a),n.onreadystatechange=function(c){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=ao.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,c)},n.upload.onprogress=function(c){if(c.lengthComputable){let p=Math.ceil(c.loaded/c.total*100);r.progress=p,this.fire("progress",{file:r,loaded:c.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:s}=this.$props;return ro(ro.f,null,ro("slot",null,ir[s]),ro("input",{id:"files",type:"file",multiple:e,accept:o,onChange:i=>{this.select(i.target.files)}}))}};ze=new WeakMap,l(ge,"css",[()=>v("reboot","containers","grid","card","utilities","buttons","tables"),ks]),l(ge,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(ge,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Cs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var rr="transitionend";var Vs=t=>{t.dispatchEvent(new Event(rr))},ar=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Is=t=>{if(!ar(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let s=t.closest("summary");if(s&&s.parentNode!==o||s===null)return!1}return e};var{h:$,classNames:$s,extractClass:nr}=omii;var lr="carousel-item-end",cr="carousel-item-start",dr="carousel-item-next",pr="carousel-item-prev",ur=".active",fr=".carousel-item",qn=ur+fr,Je,se,Tt,ve,be=class extends f{constructor(){super(...arguments);h(this,Je,0);h(this,se,!1);h(this,Tt,[]);h(this,ve,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,Je)}get isSliding(){return d(this,se)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,se)&&Vs(this),clearInterval(d(this,ve)),m(this,ve,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(d(this,se))return!1;let{$activeItem:o,$items:s,$props:{duration:i}}=this,r=s.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=s.indexOf(n),e=a>r):typeof e=="number"?(a=(e+s.length)%s.length,n=s[a],e=a>r):(a=(r+1)%s.length,e||(a=(r-1+s.length)%s.length),n=s[a]),d(this,Je)==a)return!1;let c=e?cr:lr,p=e?dr:pr;m(this,se,!0);let g=Number.parseFloat(o.getAttribute("waiting"))??0;I(n,[{classNames:[],duration:g},{classNames:[p],callback:()=>{Pt(n)}},{classNames:[p,c],duration:i},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),I(o,[{classNames:[],duration:g},{classNames:[c,"active"],duration:i},{classNames:[],callback:()=>{m(this,se,!1),m(this,Je,a);let u;for(;u=d(this,Tt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Is(this)&&this.slide()}cycle(){d(this,ve)&&clearInterval(d(this,ve)),m(this,ve,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),m(this,Je,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,se)?d(this,Tt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:s,prevCtrl:i,indicator:r}=this.$props;return $("div",{...nr(e,"carousel")},$("slot",{class:"carousel-inner"},o.map(a=>$("div",{className:$s("carousel-item"),waiting:a.attributes?.waiting},a))),$("div",{class:"carousel-indicators"},$("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),$("slot",{name:"actions"},typeof s=="function"&&s(this),typeof i=="function"&&i(this)))}};Je=new WeakMap,se=new WeakMap,Tt=new WeakMap,ve=new WeakMap,l(be,"css",[()=>v("reboot","utilities","carousel"),Cs]),l(be,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>$("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},$("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),$("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>$("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},$("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),$("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>$("button",{type:"button",onClick:s=>o.slide(e),class:$s({active:e==0})})}),l(be,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:jo,classNames:ol,extractClass:hr}=omii,ye=class extends f{css(){}render(t){let{text:e,desc:o,position:s}=this.$props,i=s?s.split("-"):[];return jo("span",{...hr(t,"badge",{"position-absolute":s,"top-0":i.includes("top"),"start-100":i.includes("right"),"start-0":i.includes("left"),"top-100":i.includes("bottom"),"translate-middle":s,"rounded-pill":s})},jo("slot",null,e),o&&jo("span",{class:"visually-hidden"},o))}};l(ye,"css",()=>v("reboot","utilities","badge")),l(ye,"defaultProps",{text:"",desc:!1,position:!1}),l(ye,"propTypes",{});var Ds=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:st,classNames:ll,extractClass:mr}=omii,we,xe=class extends f{constructor(){super(...arguments);h(this,we,!0)}get closed(){return d(this,we)}close(){m(this,we,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){m(this,we,!1),this.update(),B.fade.show(this)}install(){m(this,we,!this.$props.visible)}render(e){return st("div",{...mr(e,"toast",{show:!d(this,we)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},st("div",{class:"toast-header"},st("slot",{name:"header"}),st("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),st("div",{class:"toast-body"},st("slot",null)))}};we=new WeakMap,l(xe,"css",[()=>v("reboot","utilities","toasts","close"),Ds]),l(xe,"defaultProps",{visible:!1}),l(xe,"propTypes",{visible:Boolean});var{h:Po,classNames:gr,extractClass:ml}=omii,Se=class extends f{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:s,max:i,showPercent:r,striped:a,animated:n,style:c,className:p}=this.$props;return Po("div",{class:"progress",style:c},Po("div",{class:gr("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":s,"aria-valuemax":i},r&&Po("span",null,o,"%")))}};l(Se,"css",()=>v("reboot","utilities","progress")),l(Se,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(Se,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var zs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:it,classNames:wl,createRef:Sl}=omii,no=class extends K{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return it(it.f,null,it("slot",{ref:this.slotRef}),it("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},it("div",{class:"tooltip-arrow"}),it("slot",{class:"tooltip-inner",name:"body"},o)))}},je=no;l(je,"css",[()=>v("reboot","utilities","transitions","tooltip"),zs]),l(je,"defaultProps",{...pt(no,no,"defaultProps"),offset:0});var Js=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:Fe,classNames:Nl,createRef:rt}=omii,P,ie,A,Pe,Ae,lo,Be=class extends f{constructor(){super(...arguments);h(this,P,rt());h(this,ie,rt());h(this,A,rt());h(this,Pe,rt());h(this,Ae,rt());h(this,lo,rt())}close(e,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.clientHeight-d(this,A).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(d(this,P).current),d(this,ie).current.style.height=this.clientHeight-d(this,A).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(d(this,P).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.scrollHeight-d(this,A).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(d(this,Pe).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(d(this,Pe).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(d(this,Ae).current)}openRight(){this.$props.openRight=!0,B.collapse.show(d(this,Ae).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=d(this,P).current.getBoundingClientRect(),s=d(this,A).current.getBoundingClientRect();d(this,ie).current.style.height=e.height-o.height-s.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:s,openRight:i}=this.$props;e||(d(this,A).current.style.height=0),o||(d(this,P).current.style.height=0),s||(d(this,Pe).current.style.height=0),i||(d(this,Ae).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return Fe(Fe.f,null,Fe("slot",{name:"header",ref:d(this,P)}),Fe("main",{ref:d(this,ie)},Fe("slot",{name:"left",ref:d(this,Pe),class:"collapse-horizontal"}),Fe("slot",{name:"content",ref:d(this,lo)}),Fe("slot",{name:"right",ref:d(this,Ae),class:"collapse-horizontal"})),Fe("slot",{name:"footer",ref:d(this,A)}))}};P=new WeakMap,ie=new WeakMap,A=new WeakMap,Pe=new WeakMap,Ae=new WeakMap,lo=new WeakMap,l(Be,"css",[Js]),l(Be,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(Be,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var js=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:Ao,classNames:$l,uniqueTag:br}=omii,G,Ue=class extends f{constructor(){super(...arguments);h(this,G,void 0)}get $module(){return d(this,G)}load(e,o,s,i){o=o??this.$props.module,s=s??this.$props.loading,i=i??this.$props.loadError,m(this,G,s),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)m(this,G,i);else if(typeof a=="function"){let n=br(a);m(this,G,Ao(n,null))}else m(this,G,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),m(this,G,i),this.updateSelf()})}install(){let{src:e,module:o,loading:s,loadError:i}=this.$props;this.load(e,o,s,i)}render(e){return d(this,G)}};G=new WeakMap,l(Ue,"css",[js]),l(Ue,"defaultProps",{src:null,module:"default",loading:Ao("oi-loading",{size:"6"}),loadError:Ao("h1",null,"Module Load Error")}),l(Ue,"propTypes",{src:String,module:String});var Ps=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Qe,classNames:Al,createRef:As,extractClass:vr}=omii,q,Re=class extends f{constructor(){super(...arguments);l(this,"offcanvasRef",As());l(this,"backdropRef",As());h(this,q,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,q))return;m(this,q,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;I(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,q)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,q))return;m(this,q,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;I(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){m(this,q,this.$props.visible)}render(e){let{visible:o,placement:s,position:i,title:r,useBackdrop:a}=this.$props;return Qe(Qe.f,null,Qe("div",{ref:this.offcanvasRef,...vr(e,"offcanvas",`offcanvas-${s}`,`position-${i}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Qe("div",{class:"offcanvas-header"},Qe("slot",{name:"title",class:"offcanvas-title h5"},r),Qe("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Qe("slot",{class:"offcanvas-body"})),a&&d(this,q)&&Qe("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};q=new WeakMap,l(Re,"css",[()=>v("reboot","offcanvas","utilities","close"),Ps]),l(Re,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Re,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:Zl,classNames:Kl,extractClass:Gl,createRef:ql}=omii;function Ws(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let s in e)s!=="valid"&&e[s]===!0&&o.push(s);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function Ms(t){let e=t.currentTarget;e.checkValidity(),Ws(t.target),e.classList.add("was-validated")}function Hs(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(s=>{Ws(s)}),t.classList.add("was-validated"),o.every(s=>s.checkValidity?s.checkValidity():!0)&&e}function Xs(t){let e=t.target;e.removeEventListener("input",Ms),e.addEventListener("input",Ms,!1),Hs(e)||(t.preventDefault(),t.stopPropagation())}var at=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",Xs),e.addEventListener("submit",Xs,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return Hs(this)}connectedCallback(){this.constructor.validate(this)}};var _s=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:co,classNames:oc,createRef:Ys}=omii,Xe=null;document.addEventListener("click",t=>{Xe&&Xe.hide()});var Lt,Et,re,Me,Ct,Mo,nt,Ne=class extends f{constructor(){super(...arguments);h(this,re);h(this,Ct);h(this,Lt,Ys());h(this,Et,Ys());h(this,nt,!1)}get $menu(){return d(this,Lt).current}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props;so(d(this,Ct,Mo),this.$menu,{strategy:s,placement:e,middleware:[Qt(),Nt(),Rt(o)]}).then(({x:i,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${i}px`,top:`${r}px`})})}show(){m(this,nt,!0),d(this,re,Me).focus(),d(this,re,Me).setAttribute("aria-expanded",!0),d(this,re,Me).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Xe=this,this.setPosition()}hide(){m(this,nt,!1),d(this,re,Me).classList.remove("show"),d(this,re,Me).setAttribute("aria-expanded","false"),Xe=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,nt)?this.hide():this.show()}installed(){d(this,Ct,Mo).addEventListener("click",e=>{Xe&&Xe!=this&&Xe.hide(),this.toggle(),e.preventDefault(),e.stopPropagation()}),this.addEventListener("click",e=>{e.stopPropagation()})}render(e){let{menu:o}=this.$props;return co(co.f,null,co("slot",{ref:d(this,Et)}),co("slot",{name:"menu",ref:d(this,Lt)},o))}};Lt=new WeakMap,Et=new WeakMap,re=new WeakSet,Me=function(){return d(this,Et).current},Ct=new WeakSet,Mo=function(){let e=d(this,re,Me).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},nt=new WeakMap,l(Ne,"css",[()=>v("reboot","utilities","transitions","dropdown"),_s]),l(Ne,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Ne,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var Zs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:yr,Component:dc}=omii,po,ke=class extends f{constructor(){super(...arguments);h(this,po,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:s,fontSize:i}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{m(this,po,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:s,fontSize:i,minimap:{enabled:!1}})})}render(){return yr("div",{class:"coder"})}};po=new WeakMap,l(ke,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,s=new CSSStyleSheet;return s.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,s],fetch(new URL("./monaco/index.css",e).href).then(i=>i.text())},Zs]),l(ke,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(ke,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var Ks=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJIn0= */`;var{h:M,classNames:gc,extractClass:bc}=omii,lt,Oe=class extends f{constructor(){super(...arguments);h(this,lt,!1)}get validity(){let{required:e,values:o,min:s,max:i}=this.$props,r={valid:!0};return e&&(!o||o.length==0)&&(r.valid=!1,r.valueMissing=!0),r.valid&&(s!=0&&s>o.length&&(r.valid=!1,r.rangeUnderflow=!0),i!=0&&i<o.length&&(r.valid=!1,r.rangeOverflow=!0)),r}checkValidity(){m(this,lt,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",e=>{this.showOptions()})}render(){let{values:e,options:o,preserveOrder:s,createSelected:i,createOption:r}=this.$props;return r=r.bind(this),i=i.bind(this),e=e??[],s&&e.sort((a,n)=>o.findIndex(c=>c.value==a)-o.findIndex(c=>c.value==n)),o=o??[],M("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},M("div",{class:"selected d-flex",onClick:a=>{a.stopImmediatePropagation()}},"\xA0",M("ul",{class:"values flex-grow-1"},e.map((a,n)=>{let c=o.find(p=>p.value==a);if(c)return i(c,n)})),M("div",{class:"expander",onClick:a=>{this.showOptions()}})),M("ul",{class:"dropdown-menu",slot:"menu"},o.map((a,n)=>M("li",null,r(a,n)))))}};lt=new WeakMap,l(Oe,"css",[()=>v("reboot","utilities","forms","scrollbar"),Ks]),l(Oe,"defaultProps",{options:[],values:[],multiple:!0,required:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:s,multiple:i}=this.$props,r={};return i?r.for=`option${o}`:r.onClick=a=>{s.includes(e.value)?s.splice(0,s.length):s.push(e.value)},M("div",{class:"form-check d-flex"},i&&M("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:s.includes(e.value),onChange:a=>{if(a.target.checked)s.includes(e.value)||s.push(e.value);else{let n=s.indexOf(e.value);n!=-1&&s.splice(n,1)}this.updateSelf(),d(this,lt)&&this.checkValidity()}}),M("label",{class:"form-check-label flex-grow-1",...r},e.text))},createSelected(e,o){let{values:s}=this.$props;return M("li",{onClick:i=>{i.stopImmediatePropagation()}},e.text,M("oi-bi",{name:"x",onClick:i=>{s.splice(o,1),this.updateSelf(),i.stopPropagation(),d(this,lt)&&this.checkValidity()}}))}}),l(Oe,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,min:Number,max:Number});var Gs=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:C,classNames:Bc,extractClass:xr}=omii,Te=class extends f{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:s,dataCellFormatter:i,height:r}=this.$props,a=xr(this.$props)?.class??"";return C("div",{className:"table-container",style:{height:r}},C("table",{className:`table ${a}`},C("thead",null,o&&C("tr",null,t?.map(n=>C("th",{style:n.titleStyle,scope:"col"},s(n,t,e,this)))),C("slot",{name:"header"})),C("tbody",null,e?.map((n,c)=>C("tr",null,t.map(p=>C("td",{style:p.style},i(p,n,c,e,this)))))),C("tfoot",null,C("slot",{name:"footer"}))))}};l(Te,"css",[()=>v("reboot","utilities","tables"),Gs]),l(Te,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,s){if(t.type=="checkbox"){t.checked||(t.checked=[]);let i=o?.map(a=>a[t.field])??[],r=i.every(a=>t.checked.includes(a));return C("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...i);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),c=new Set(i.filter(p=>!n.has(p)));t.checked.splice(0,t.checked.length,...c)}await s.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,s,i){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),C("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await i.updateSelf()}});case"radio":return C("input",{type:"radio"});default:return r}},height:"auto"}),l(Te,"propTypes",{showHeader:Boolean});var qs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0aW55bWNlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBIn0= */`;var{h:wr,classNames:Tc,extractClass:Lc}=omii,ei=!0,ti=new URL("./tinymce/",import.meta.url).href,oi="./tinymce.js",Vt,uo,fo,Le=class extends f{constructor(){super(...arguments);h(this,Vt,void 0);h(this,uo,void 0);h(this,fo,!1)}static get min(){return ei}static set min(e){ei=e}static get root(){return ti}static set root(e){ti=e}static get jsFile(){return oi}static set jsFile(e){oi=e}get value(){return this.$props.value}set value(e){this.$props.value=e,this.fire("change",{value:e})}get editor(){return d(this,Vt)}css(){return d(this,uo)}get validity(){let{required:e}=this.$props,o={valid:!0};return e&&value==""&&(o.valid=!1,o.valueMissing=!0),o}checkValidity(){m(this,fo,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}async installed(){await import(new URL(this.constructor.jsFile,this.constructor.root).href);let e=this.$("#editor");m(this,Vt,tinymce.init({target:e,base_url:this.constructor.root,setup:o=>{o.on("change",s=>{this.value=o.getContent(),this.fire("change",{value:this.value})})}}))}render(){return wr("textarea",{id:"editor",value:this.value,placeholder:this.placeholder})}};Vt=new WeakMap,uo=new WeakMap,fo=new WeakMap,l(Le,"css",qs),l(Le,"propTypes",{value:String,placeholder:String,required:Boolean}),l(Le,"defaultProps",{value:"",placeholder:"...",required:!1});var si=`
:host {
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
}
:host main {
  width: 100%;
  height: 100%;
  overflow: visible;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxlY2hhcnRzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EifQ== */`;var{h:Sr,classNames:Dc,extractClass:zc}=omii,ii=new URL("./echarts/",import.meta.url).href,ri="echarts.esm.min.js",It,Ee=class extends f{constructor(){super(...arguments);h(this,It,void 0)}static get root(){return ii}static set root(e){ii=e}static get jsFile(){return ri}static set jsFile(e){ri=e}get echart(){return d(this,It)}async installed(){let e=await import(new URL(this.constructor.jsFile,this.constructor.root).href);m(this,It,e.init(this.$("main"))),this.draw()}draw(){this.echart.setOption(this.$props)}updated(){this.draw()}render(){return Sr("main",null)}};It=new WeakMap,l(Ee,"css",si),l(Ee,"propTypes",{}),l(Ee,"defaultProps",{title:null,tooltip:null,legend:[],xAxis:{},yAxis:{},series:[],width:null,height:null});var{define:x}=omii;x("oi-rate",ne);x("oi-tab",ae);x("oi-icon",J);x("oi-bi",X);x("oi-pager",H);x("oi-tree",de);x("oi-loading",ee);x("oi-alert",pe);x("oi-accordion",ue);x("oi-breadcrumb",fe);x("oi-modal",he);x("oi-popover",K);x("oi-uploader",ge);x("oi-carousel",be);x("oi-badge",ye);x("oi-toast",xe);x("oi-progress",Se);x("oi-tooltip",je);x("oi-layout",Be);x("oi-import",Ue);x("oi-offcanvas",Re);x("oi-pagination",ce);x("oi-dropdown",Ne);x("oi-coder",ke);x("oi-select",Oe);x("oi-table",Te);x("oi-tinymce",Le);x("oi-echarts",Ee);customElements.define("oi-form",at,{extends:"form"});var Fr=import.meta.url;omii.ui={utils:Wo,css:ss,effect:B,icon:J,tab:ae,rate:ne,pager:H,tree:de,treeNode:Uo,loading:ee,alert:pe,accordion:ue,breadcrumb:fe,modal:he,popover:K,uploader:ge,carousel:be,badge:ye,toast:xe,progress:Se,tooltip:je,layout:Be,import:Ue,offcanvas:Re,pagination:ce,form:at,dropdown:Ne,coder:ke,select:Oe,table:Te,importURL:Fr,sortable:_e,tinymce:Le,echarts:Ee};export{ue as accordion,pe as alert,X as bicon,fe as breadcrumb,be as carousel,ke as coder,ss as css,Ne as dropdown,Ee as echarts,B as effect,at as form,J as icon,Ue as import,Fr as importURL,Be as layout,ee as loading,he as modal,Re as offcanvas,H as pager,ce as pagination,K as popover,Se as progress,ne as rate,Oe as select,_e as sortable,ae as tab,Te as table,Le as tinymce,xe as toast,je as tooltip,de as tree,Uo as treeNode,ge as uploader,Wo as utils};
//# sourceMappingURL=omii-ui.js.map
