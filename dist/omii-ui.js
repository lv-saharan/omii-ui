var Ws=Object.defineProperty;var _s=Object.getPrototypeOf;var Ys=Reflect.get;var Ks=(t,e,o)=>e in t?Ws(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(Ks(t,typeof e!="symbol"?e+"":e,o),o),no=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(no(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},g=(t,e,o,s)=>(no(t,e,"write to private field"),s?s.call(t,o):e.set(t,o),o);var It=(t,e,o)=>(no(t,e,"access private method"),o),ct=(t,e,o)=>Ys(_s(t),o,e);var Zs=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),Gs=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},qs=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},$t=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Vt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var ei=["B","KB","MB","GB","TB","PB"],lo=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+ei[o]},ti=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},oi=(t,e)=>{window.chrome.extension?t():e()},Dt=t=>{t.offsetHeight},si=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],zt=t=>{if(!t)return"file";t=t.toLowerCase();let e=si.find(o=>o[0].includes(t));return e==null?"file":e[1]};var zo={tryExtension:oi,downloadUrl:ti,getName:Vt,getExtension:$t,cleanHTML:Zs,isToday:Gs,isYesterday:qs,formatSize:lo};var ii=import.meta.url,ri="sortable.core.esm.js",Jo=new URL("./sortablejs/",ii).href,I=null,D={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function ai({autoScroll:t,remove:e,revert:o,multiDrag:s,swap:i}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=Jo){I||(I=await import(new URL(ri,r).href)),t&&!D.AutoScroll&&(D.AutoScroll=!0,I.Sortable.mount(new I.AutoScroll));let[a,n]=I.OnSpill;return e&&!D.Remove&&(D.Remove=!0,I.Sortable.mount(a)),e&&!D.Remove&&(D.Remove=!0,I.Sortable.mount(a)),o&&!D.Remove&&(D.Revert=!0,I.Sortable.mount(n)),s&&!D.MultiDrag&&(D.MultiDrag=!0,I.Sortable.mount(new I.MultiDrag)),i&&!D.Swap&&(D.Swap=!0,I.Sortable.mount(new I.Swap)),I.Sortable}function ni(t){Jo=t}var He={use:ai,setRoot:ni};var{define:dr,h:pr,Component:li}=omii,h=class extends li{};var jo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:dt,Component:br,classNames:Po,render:vr}=omii,ae=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},!0,!0):this.update$Props({activeIndex:t},!0,!0))}async render(t){let e=this.$props,o=t.items??e.items,s=[],i=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,c=a.pane;i.push(dt("div",{key:`pane-${a.key??r}`,className:Po("pane",{active:n})},c)),s.push(dt("div",{key:`nav-${a.key??r}`,className:Po("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return dt("div",{class:"tabs"},dt("div",{class:"navs"},s),dt("div",{class:"panes"},i))}};l(ae,"css",jo),l(ae,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(ae,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Ee={BUNDLE:"bundle",SINGLE:"single"},pt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:Sr,h:Ao,Component:Fr}=omii,ut=Ee.SINGLE,co=pt.FILLED,po=async(t,e,o)=>{e=e??co,e==pt.FILE_TYPE&&(o=Ee.BUNDLE);try{if((o??ut)==Ee.BUNDLE){let{default:s}=await import(`./icons/${e}.js`);return s[t]}else{let{default:s}=await import(`./icons/${e}/${t}.js`);return s}}catch{console.error("load icon error",t,e)}},ci=async(t,e,o,s={})=>{let i=await po(t,e,o);return Ao("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...s},i)},J=class extends h{static useBundleMode(){ut=Ee.BUNDLE}static useSingleMode(){ut=Ee.SINGLE}static get MODES(){return Ee}static get TYPES(){return pt}static get Mode(){return ut}static set Mode(t){ut=t}static get Type(){return co}static set Type(t){co=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",s=t?`${t}rem`:"var(--oi-icon-width, 1rem)",i=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,s=await po(t,e);return Ao("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},s)}};l(J,"updateOnAttributeChanged",!0),l(J,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(J,"defaultProps",{name:null,type:pt.FILLED,viewBox:24,size:null,color:null}),l(J,"createSvg",ci),l(J,"loadIcon",po),l(J,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var{h:Mo}=omii,uo=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},di=async(t,e={})=>{let o=await uo(t);return Mo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},H=class extends h{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",s=t?`${t}rem`:"var(--oi-bi-width, 1rem)",i=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await uo(t);return Mo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(H,"updateOnAttributeChanged",!0),l(H,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(H,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(H,"createSvg",di),l(H,"loadIcon",uo),l(H,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var Xo=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:Cr,h:fo,Component:Ir,classNames:pi,render:$r}=omii,ho={STAR:"star",HALF:"star_half",BORDER:"star_border"},W,ne=class extends h{constructor(){super(...arguments);m(this,W,-1)}get rateScore(){return this.$props.score}install(){g(this,W,this.$props.score)}rate(e){this.fire("rate",e),g(this,W,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:s,rateable:i,size:r,color:a}=o,n=[],c=d(this,W);for(let p=0;p<s;p++)c-p>=.5?n.push(ho.STAR):c-p>0?n.push(ho.HALF):n.push(ho.BORDER);return fo("div",{class:pi("rate-wrap","rate-"+d(this,W))},n.map((p,f)=>i?fo("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),g(this,W,f+1),this.fire("tryRate",d(this,W)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),g(this,W,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):fo("oi-icon",{name:p,size:r,color:a,className:p})))}};W=new WeakMap,l(ne,"css",Xo),l(ne,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(ne,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Ho=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:O,classNames:ft}=omii,_=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(_,"css",Ho),l(_,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:O("oi-icon",{name:"keyboard_arrow_left"}),next:O("oi-icon",{name:"keyboard_arrow_right"}),first:O("oi-icon",{name:"first_page"}),last:O("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:s}=t;return O("div",{class:ft("prev",{disable:o<=1}),onClick:i=>{o>1&&e.goto(o-1)}},s)},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return O("div",{class:ft("next",{disable:o>=i}),onClick:r=>{i>o&&e.goto(o+1)}},s)},createFirst(t,e){let{first:o,pageNum:s}=t;return O("div",{class:ft("first",{disable:s<=1}),onClick:i=>{s!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return O("div",{class:ft("last",{disable:s>=i}),onClick:r=>{s!=i&&e.goto(i)}},o)},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(O("div",{className:ft({active:s==p,page:!0}),onClick:f=>{s!=p&&e.goto(p)}},p));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return O("div",{class:"info"},O("span",{class:"curr"},o),"/",O("span",{class:"total"},s))},createJumper(t,e){return O("div",{class:"jumper"},"\u524D\u5F80",O("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return O("div",{class:"pager"},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e))}}),l(_,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var Wo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Jt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:ui,define:Hr,h:fi,Component:Wr,setTheme:hi}=omii,go="bootstrap";function mi(t){go=t,le=new URL(`./${go}/`,import.meta.url).href}var le=new URL(`./${go}/`,import.meta.url).href;function gi(t){le=t}var jt=(t,e=le)=>fetch(bo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),bi=t=>jt=t,_o=(t,e,o=le)=>{let s=fi("link",{rel:"styleSheet",href:bo(t,o)});ui(s,e??"body")},vi=(t,e=le)=>{_o("reboot",t,e)},bo=(t,e=le)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},mo=new Map,Pt=async(t,e=le)=>{let o=`${e}/${t}`,s=mo.get(o);if(s===void 0){let i=[];mo.set(o,i),s=new CSSStyleSheet;try{s.replaceSync(await jt(t,e)),i.forEach(r=>{r(s)}),mo.set(o,s)}catch(r){console.error("get css stylesheets error",r)}}else if(s instanceof Array)return new Promise(i=>{s.push(i)});return s},v=(...t)=>Promise.all(t.map(e=>Pt(e))),Yo={};Jt.forEach(t=>{Object.defineProperty(Yo,t,{get:function(){return Pt(t)}})});var yi=(t=Jt)=>{t.forEach(e=>{Pt(e)})},xi=async(t,e=le)=>{let o=await jt(`theme.${t}`,e);hi(o)},$=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let s=0,i=(r=[])=>{let a=s%e.length,{classNames:n,duration:c=0,delay:p=0,callback:f=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),f&&f(t,n,c,p)},p*1e3),s++,!(Math.floor(s/e.length)>=o)&&setTimeout(()=>{i(n)},(c+p)*1e3)};i()}},Ko={StyleSheets:Jt,CSSStyleSheets:Yo,setBaseUrl:gi,setBaseRoot:mi,loadStyleSheet:jt,setStyleSheetLoader:bi,addStyleSheet:_o,addRebootStyleSheet:vi,getStyleSheetUrl:bo,getCSSStyleSheet:Pt,getCSSStyleSheets:v,useTheme:xi,timingClassNames:$,preLoad:yi};var{h:S,classNames:ht,extractClass:wi}=omii,We=class extends _{},ce=We;l(ce,"css",[()=>v("reboot","pagination","utilities"),Wo]),l(ce,"defaultProps",{...ct(We,We,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:s}=t;return S("li",{class:ht("page-item",{disabled:o<=1})},S("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i=>{o>1&&e.goto(o-1),i.preventDefault(),i.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return S("li",{class:ht("page-item",{disabled:o>=i})},S("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{i>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:s}=t;return S("li",{class:ht("page-item",{disabled:s<=1})},S("a",{class:"page-link",href:"#","aria-label":"First",onClick:i=>{s!=1&&e.goto(1),i.preventDefault(),i.stopPropagation()}},S("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return S("li",{class:ht("page-item",{disabled:s>=i})},S("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{s!=i&&e.goto(i),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(S("li",{key:`pager-${p}`,className:ht("page-item",{active:s==p,page:!0})},S("a",{class:"page-link",href:"#",onClick:f=>{s!=p&&e.goto(p),f.preventDefault(),f.stopPropagation()}},p)));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return S("li",{class:"info page-item"},S("span",{className:"page-link"},S("span",{class:"curr"},o),"/",S("span",{class:"total"},s)))},createJumper(t,e){return S("li",{class:"jumper page-item mx-2"},S("span",{className:"page-link"},"\u524D\u5F80",S("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return S("nav",null,S("ul",{...wi(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e)))}}),l(ce,"propTypes",{...ct(We,We,"propTypes"),align:String});var Zo=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var Go=`
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
  display: block;
}
:host .node.expanded .expander::after {
  transform: rotate(45deg);
  transform-origin: left center;
}
:host .node.expanded .children {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTs7QUFLSTtFQUNJO0VBQ0E7O0FBS1I7RUFDSSJ9 */`;var{h:j,classNames:At,define:Si,getHost:Mt}=omii,_e,mt,yo=class extends h{constructor(){super(...arguments);m(this,_e,void 0);m(this,mt,!1)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.$props.node??{}}get children(){return d(this,_e)}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=Mt(this);return o instanceof yo?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}get noChildren(){return!this.node.children}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?j("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):j("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?j("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):j("div",{class:"radio-placeholder"}):null}install(){!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}async installed(){this.sortable&&(await He.use()).create(this.$(".children"),{group:this.tree.sortGroup,onAdd:s=>{let i=Mt(s.to);s.item.update$Props({nodeLevel:i.level+1},!0,!0),i.updateSelf()},onEnd:s=>{let i=Mt(s.from),r=Mt(s.to),a=i.tagName=="OI-TREE-NODE"?i.children:i.nodes,n=r.tagName=="OI-TREE-NODE"?r.children:r.nodes;this.tree.fire("sorted",{fromNodes:a,toNodes:n,fromIndex:s.oldIndex,toIndex:s.newIndex})}})}async render(o){let{node:s,cssss:i}=o,r=s.element??s.label??s.key;typeof r=="function"&&(r=await r(s,o,this));let a=null,n=g(this,_e,s.children);return typeof n=="function"&&this.expanded&&g(this,_e,n=await n(s,o,this)),a=j("div",{class:At("children",{expanded:this.expanded})},this.expanded&&(n instanceof Array?n.map(c=>j("oi-tree-node",{node:c,"node-level":this.level+1,tree:this.tree,cssss:i})):n)),j("div",{class:At("node",{expanded:this.expanded,"loading-children":d(this,mt),"no-children":this.noChildren})},j("div",{class:At("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:c=>{c.stopPropagation(),this.selected&&c.ctrlKey===!0?this.unSelect():this.select()}},j("div",{onClick:c=>{c.stopPropagation(),this.toggle()},class:At("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,j("div",{class:"text"},r),d(this,mt)?j("oi-loading",null):null),a)}},Le=yo;_e=new WeakMap,mt=new WeakMap,l(Le,"css",Go),l(Le,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),l(Le,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});Si("oi-tree-node",Le);var vo=Le;var{h:qo,purgeCSSSS:Fi,getHost:gt}=omii;var Ye,de=class extends h{constructor(){super(...arguments);m(this,Ye,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}isSelected(e){let{multiSelect:o,selectedKey:s,selectedKeys:i}=this.$props;return o?(i??[]).some(r=>r==e):s!=null&&s==e}select(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;s?i.some(r=>r==e)||i.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;if(!s)this.$props.selectedKey=null;else{let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:s}=this.$props;return o?(s??[]).some(i=>i==e):!1}check(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;s&&i.indexOf(e)==-1&&i.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;if(s){let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:s}=this.$props;return o?s!=null&&s==e:!1}radio(e,o=!0){let{radioTree:s}=this.$props;s&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(s=>s==e)}expand(e,o=!0){let{expandedKeys:s}=this.$props;s.indexOf(e)!=-1&&s.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:s}=this.$props,i=s.indexOf(e);i!=-1&&s.splice(i,1),o&&this.update()}async installed(){this.$props.sortable&&(await He.use()).create(this.$(".tree-container"),{delay:100,group:this.sortGroup,onAdd:o=>{let s=gt(o.to);o.item.update$Props({nodeLevel:0},!0,!0),s.updateSelf()},onEnd:o=>{let s=gt(o.from),i=gt(o.to),r=s==this?s.nodes:s.children,a=i==this?i.nodes:i.children;this.fire("sorted",{fromNodes:r,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}})}get nodes(){if(!d(this,Ye)){let e=this.$props.nodes,o=gt(this);typeof e=="function"&&(e=e.call(o)),g(this,Ye,e)}return d(this,Ye)}render(){let e=gt(this),o=Fi(this.$props.nodeCss,e);return qo("div",{className:"tree-container"},this.nodes.map(s=>qo("oi-tree-node",{node:s,tree:this,cssss:o})))}};Ye=new WeakMap,l(de,"css",Zo),l(de,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),l(de,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:ua,classNames:fa}=omii,bt,ee=class extends h{constructor(){super(...arguments);m(this,bt,void 0)}css(){let{size:e,color:o}=this.$props,s="2rem";if(e)s=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?s=`${a.offsetHeight}px`:s="2rem"}let i=`
    :host{
      --oi-loading-size:${s};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,bt)}
    ${i}
    ${r}
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:s}}=await import(`./loadings/${e}.js`);return g(this,bt,s),o}};bt=new WeakMap,l(ee,"updateOnAttributeChanged",!0),l(ee,"css",`
    :host{
      display:inline-block;
    }
  `),l(ee,"defaultProps",{name:"circle",size:null,color:null}),l(ee,"propTypes",{name:String,size:Number,color:String});var Ke={HORIZONTAL:"horizontal",VERTICAL:"vertical"},xo="show",Xt="collapse",wo="collapsing",Bi="collapse-horizontal",So=.35,Fo=(t,e)=>e||(t.classList.contains(Bi)?Ke.HORIZONTAL:Ke.VERTICAL),es={show(t,e=So,o=null){return new Promise(s=>{o=Fo(t,o),$(t,[{classNames:[Xt]},{classNames:[wo],duration:e,callback(i){i.style[o==Ke.VERTICAL?"height":"width"]=`${i[o==Ke.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Xt,xo],callback(i){i.style[o==Ke.VERTICAL?"height":"width"]="",s()}}])})},hide(t,e=So,o=null){return new Promise(s=>{o=Fo(t,o);let i=o==Ke.VERTICAL?"height":"width";t.style[i]=`${t.getBoundingClientRect()[i]}px`,Dt(t.offsetHeight),$(t,[{classNames:[wo,Xt,xo]},{classNames:[wo],duration:e,callback(r){r.style[i]=""}},{classNames:[Xt],callback:s}])})},toggle(t,e=So,o=null){return o=Fo(t,o),t.classList.contains(xo)?this.hide(t,e,o):this.show(t,e,o)}};var vt="fade",Bo="show",Uo=.15,ts={show(t,e=Uo){return new Promise(o=>{$(t,[{classNames:[vt]},{classNames:[vt,Bo],duration:e,callback:o}])})},hide(t,e=Uo){return new Promise(o=>{$(t,[{classNames:[vt,Bo]},{classNames:[vt],duration:e,callback:o}])})},toggle(t,e=Uo){return t.classList.contains(vt)&&!t.classList.contains(Bo)?this.show(t,e):this.hide(t,e)}};var B={collapse:es,fade:ts};var{h:Qo,classNames:Ui}=omii;var Qi="show",yt,pe=class extends h{constructor(){super(...arguments);m(this,yt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(Qi),g(this,yt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return d(this,yt)?null:Qo("div",{className:Ui("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},Qo("slot",null),o?Qo("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};yt=new WeakMap,l(pe,"css",()=>v("reboot","utilities","alert","close","transitions")),l(pe,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(pe,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:Ze,classNames:Ro}=omii,Ht={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Ri="collapsed",Ge,Wt,ue=class extends h{constructor(){super(...arguments);m(this,Ge)}static get DIRECTIONS(){return Ht}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:s}=this.$props;if(e.length>0&&s&&(e[0].opened=!0),!o){let i=e.filter(r=>r.opened);if(i.length){let r=i.shift();r.opened=!0,i.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==Ht.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:s}=this.$props;if(s)It(this,Ge,Wt).call(this,e);else{let i=o.findIndex(a=>a.opened),r=i==-1?null:o[i];r&&r!=e&&It(this,Ge,Wt).call(this,r),It(this,Ge,Wt).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return Ze("div",{class:Ro("accordion",{"collapse-horizontal":o==Ht.HORIZONTAL})},e.map((s,i)=>Ze("div",{class:"accordion-item",key:s.key??`item-${i}`},Ze("h2",{class:"accordion-header"},Ze("button",{class:Ro("accordion-button",{collapsed:!s.opened}),type:"button","aria-expanded":s.opened,onClick:r=>{this.toggle(s)}},s.header)),Ze("div",{class:Ro("accordion-collapse",{collapse:!0,show:s.opened})},Ze("div",{class:"accordion-body"},typeof s.body=="function"?s.body(s,this.$props,this):s.body)))))}};Ge=new WeakSet,Wt=function(e){let{items:o,transitionDuration:s}=this.$props,i=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${i+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(Ri,!e.opened),e.opened?(B.collapse.show(a),this.fire("collapseShow",e)):(B.collapse.hide(a),this.fire("collapseHide",e))},l(ue,"css",()=>v("reboot","utilities","accordion","close","transitions")),l(ue,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:Ht.VERTICAL}),l(ue,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:xt,classNames:Ca}=omii,fe=class extends h{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return xt("nav",{"aria-label":"breadcrumb"},xt("ol",{class:"breadcrumb"},t.map((o,s)=>s!==t.length-1?xt("li",{class:"breadcrumb-item"},typeof e=="object"&&s!=0?e:null,xt("a",{href:o.href},o.label)):xt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&s!=0?e:null,o.label))))}};l(fe,"css",()=>v("reboot","utilities","breadcrumb")),l(fe,"defaultProps",{}),l(fe,"propTypes",{});var os=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:L,classNames:ss,extractClass:Ni}=omii,he=class extends h{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return L(L.f,null,e.visible&&!e.staticPosition&&L("div",{class:ss("modal-backdrop","fade","show")}),L("div",{...Ni(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},L("div",{class:ss("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},L("div",{class:"modal-content"},L("div",{class:"modal-header"},L("slot",{name:"header"},L("h5",{class:"modal-title"},e.title),L("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),L("div",{class:"modal-body"},L("slot",null)),L("div",{class:"modal-footer"},L("slot",{name:"footer"}))))))}};l(he,"css",[()=>v("reboot","modal","utilities","close","scrollbar"),os]),l(he,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(he,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function St(t){return t.split("-")[0]}function Yt(t){return t.split("-")[1]}function Ft(t){return["top","bottom"].includes(St(t))?"x":"y"}function ko(t){return t==="y"?"height":"width"}function is(t,e,o){let{reference:s,floating:i}=t,r=s.x+s.width/2-i.width/2,a=s.y+s.height/2-i.height/2,n=Ft(e),c=ko(n),p=s[c]/2-i[c]/2,f=n==="x",u;switch(St(e)){case"top":u={x:r,y:s.y-i.height};break;case"bottom":u={x:r,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:a};break;case"left":u={x:s.x-i.width,y:a};break;default:u={x:s.x,y:s.y}}switch(Yt(e)){case"start":u[n]-=p*(o&&f?-1:1);break;case"end":u[n]+=p*(o&&f?-1:1)}return u}var as=async(t,e,o)=>{let{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),c=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:f}=is(c,s,n),u=s,b={},y=0;for(let x=0;x<r.length;x++){let{name:F,fn:U}=r[x],{x:R,y:T,data:E,reset:Q}=await U({x:p,y:f,initialPlacement:s,placement:u,strategy:i,middlewareData:b,rects:c,platform:a,elements:{reference:t,floating:e}});p=R??p,f=T??f,b={...b,[F]:{...b[F],...E}},Q&&y<=50&&(y++,typeof Q=="object"&&(Q.placement&&(u=Q.placement),Q.rects&&(c=Q.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):Q.rects),{x:p,y:f}=is(c,u,n)),x=-1)}return{x:p,y:f,placement:u,strategy:i,middlewareData:b}};function ns(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function wt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Oo(t,e){var o;e===void 0&&(e={});let{x:s,y:i,platform:r,rects:a,elements:n,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:y=0}=e,x=ns(y),F=n[b?u==="floating"?"reference":"floating":u],U=wt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(F)))==null||o?F:F.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:f,strategy:c})),R=wt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:s,y:i}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:c}):a[u]);return{top:U.top-R.top+x.top,bottom:R.bottom-U.bottom+x.bottom,left:U.left-R.left+x.left,right:R.right-U.right+x.right}}var ki=Math.min,Oi=Math.max;function No(t,e,o){return Oi(t,ki(e,o))}var To=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:s=0}=t??{},{x:i,y:r,placement:a,rects:n,platform:c}=e;if(o==null)return{};let p=ns(s),f={x:i,y:r},u=Ft(a),b=Yt(a),y=ko(u),x=await c.getDimensions(o),F=u==="y"?"top":"left",U=u==="y"?"bottom":"right",R=n.reference[y]+n.reference[u]-f[u]-n.floating[y],T=f[u]-n.reference[u],E=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o)),Q=E?u==="y"?E.clientHeight||0:E.clientWidth||0:0;Q===0&&(Q=n.floating[y]);let Lt=R/2-T/2,Me=p[F],nt=Q-x[y]-p[U],N=Q/2-x[y]/2+Lt,z=No(Me,N,nt),Xe=(b==="start"?p[F]:p[U])>0&&N!==z&&n.reference[y]<=n.floating[y];return{[u]:f[u]-(Xe?N<Me?Me-N:nt-N:0),data:{[u]:z,centerOffset:N-z}}}}),Ti={left:"right",right:"left",bottom:"top",top:"bottom"};function _t(t){return t.replace(/left|right|bottom|top/g,e=>Ti[e])}function Ei(t,e,o){o===void 0&&(o=!1);let s=Yt(t),i=Ft(t),r=ko(i),a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=_t(a)),{main:a,cross:_t(a)}}var Li={start:"end",end:"start"};function rs(t){return t.replace(/start|end/g,e=>Li[e])}var Ci=["top","right","bottom","left"],Ha=Ci.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Bt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:s,middlewareData:i,rects:r,initialPlacement:a,platform:n,elements:c}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:y=!0,...x}=t,F=St(s),U=u||(F===a||!y?[_t(a)]:function(N){let z=_t(N);return[rs(N),z,rs(z)]}(a)),R=[a,...U],T=await Oo(e,x),E=[],Q=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&E.push(T[F]),f){let{main:N,cross:z}=Ei(s,r,await(n.isRTL==null?void 0:n.isRTL(c.floating)));E.push(T[N],T[z])}if(Q=[...Q,{placement:s,overflows:E}],!E.every(N=>N<=0)){var Lt,Me;let N=((Lt=(Me=i.flip)==null?void 0:Me.index)!=null?Lt:0)+1,z=R[N];if(z)return{data:{index:N,overflows:Q},reset:{placement:z}};let Xe="bottom";switch(b){case"bestFit":{var nt;let Do=(nt=Q.map(Ct=>[Ct,Ct.overflows.filter(lt=>lt>0).reduce((lt,Hs)=>lt+Hs,0)]).sort((Ct,lt)=>Ct[1]-lt[1])[0])==null?void 0:nt[0].placement;Do&&(Xe=Do);break}case"initialPlacement":Xe=a}if(s!==Xe)return{reset:{placement:Xe}}}return{}}}};var Ut=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:s}=e,i=await async function(r,a){let{placement:n,platform:c,elements:p}=r,f=await(c.isRTL==null?void 0:c.isRTL(p.floating)),u=St(n),b=Yt(n),y=Ft(n)==="x",x=["left","top"].includes(u)?-1:1,F=f&&y?-1:1,U=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:T,alignmentAxis:E}=typeof U=="number"?{mainAxis:U,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...U};return b&&typeof E=="number"&&(T=b==="end"?-1*E:E),y?{x:T*F,y:R*x}:{x:R*x,y:T*F}}(e,t);return{x:o+i.x,y:s+i.y,data:i}}}};function Ii(t){return t==="x"?"y":"x"}var Qt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:s,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:U=>{let{x:R,y:T}=U;return{x:R,y:T}}},...c}=t,p={x:o,y:s},f=await Oo(e,c),u=Ft(St(i)),b=Ii(u),y=p[u],x=p[b];if(r){let U=u==="y"?"bottom":"right";y=No(y+f[u==="y"?"top":"left"],y,y-f[U])}if(a){let U=b==="y"?"bottom":"right";x=No(x+f[b==="y"?"top":"left"],x,x-f[U])}let F=n.fn({...e,[u]:y,[b]:x});return{...F,data:{x:F.x-o,y:F.y-s}}}}};function fs(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function oe(t){if(t==null)return window;if(!fs(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function Y(t){return oe(t).getComputedStyle(t)}function te(t){return fs(t)?"":t?(t.nodeName||"").toLowerCase():""}function hs(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function K(t){return t instanceof oe(t).HTMLElement}function qe(t){return t instanceof oe(t).Element}function et(t){return typeof ShadowRoot>"u"?!1:t instanceof oe(t).ShadowRoot||t instanceof ShadowRoot}function Zt(t){let{overflow:e,overflowX:o,overflowY:s}=Y(t);return/auto|scroll|overlay|hidden/.test(e+s+o)}function $i(t){return["table","td","th"].includes(te(t))}function ls(t){let e=/firefox/i.test(hs()),o=Y(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function ms(){return!/^((?!chrome|android).)*safari/i.test(hs())}var cs=Math.min,Rt=Math.max,Kt=Math.round;function Ce(t,e,o){var s,i,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),c=1,p=1;e&&K(t)&&(c=t.offsetWidth>0&&Kt(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&Kt(n.height)/t.offsetHeight||1);let f=qe(t)?oe(t):window,u=!ms()&&o,b=(n.left+(u&&(s=(i=f.visualViewport)==null?void 0:i.offsetLeft)!=null?s:0))/c,y=(n.top+(u&&(r=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/c,F=n.height/p;return{width:x,height:F,top:y,right:b+x,bottom:y+F,left:b,x:b,y}}function me(t){return(e=t,(e instanceof oe(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function Gt(t){return qe(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function gs(t){return Ce(me(t)).left+Gt(t).scrollLeft}function Vi(t,e,o){let s=K(e),i=me(e),r=Ce(t,s&&function(c){let p=Ce(c);return Kt(p.width)!==c.offsetWidth||Kt(p.height)!==c.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(s||!s&&o!=="fixed")if((te(e)!=="body"||Zt(i))&&(a=Gt(e)),K(e)){let c=Ce(e,!0);n.x=c.x+e.clientLeft,n.y=c.y+e.clientTop}else i&&(n.x=gs(i));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function bs(t){return te(t)==="html"?t:t.assignedSlot||t.parentNode||(et(t)?t.host:null)||me(t)}function ds(t){return K(t)&&Y(t).position!=="fixed"?function(e){let{offsetParent:o}=e,s=e,i=!1;for(;s&&s!==o;){let{assignedSlot:r}=s;if(r){let a=r.offsetParent;if(Y(r).display==="contents"){let n=r.hasAttribute("style"),c=r.style.display;r.style.display=Y(s).display,a=r.offsetParent,r.style.display=c,n||r.removeAttribute("style")}s=r,o!==a&&(o=a,i=!0)}else if(et(s)&&s.host&&i)break;s=et(s)&&s.host||s.parentNode}return o}(t):null}function Eo(t){let e=oe(t),o=ds(t);for(;o&&$i(o)&&Y(o).position==="static";)o=ds(o);return o&&(te(o)==="html"||te(o)==="body"&&Y(o).position==="static"&&!ls(o))?e:o||function(s){let i=bs(s);for(et(i)&&(i=i.host);K(i)&&!["html","body"].includes(te(i));){if(ls(i))return i;{let r=i.parentNode;i=et(r)?r.host:r}}return null}(t)||e}function ps(t){if(K(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Ce(t);return{width:e.width,height:e.height}}function vs(t){let e=bs(t);return["html","body","#document"].includes(te(e))?t.ownerDocument.body:K(e)&&Zt(e)?e:vs(e)}function ys(t,e){var o;e===void 0&&(e=[]);let s=vs(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=oe(s),a=i?[r].concat(r.visualViewport||[],Zt(s)?s:[]):s,n=e.concat(a);return i?n:n.concat(ys(a))}function us(t,e,o){return e==="viewport"?wt(function(s,i){let r=oe(s),a=me(s),n=r.visualViewport,c=a.clientWidth,p=a.clientHeight,f=0,u=0;if(n){c=n.width,p=n.height;let b=ms();(b||!b&&i==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:c,height:p,x:f,y:u}}(t,o)):qe(e)?function(s,i){let r=Ce(s,!1,i==="fixed"),a=r.top+s.clientTop,n=r.left+s.clientLeft;return{top:a,left:n,x:n,y:a,right:n+s.clientWidth,bottom:a+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}(e,o):wt(function(s){var i;let r=me(s),a=Gt(s),n=(i=s.ownerDocument)==null?void 0:i.body,c=Rt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=Rt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+gs(s),u=-a.scrollTop;return Y(n||r).direction==="rtl"&&(f+=Rt(r.clientWidth,n?n.clientWidth:0)-c),{width:c,height:p,x:f,y:u}}(me(t)))}function Di(t){let e=ys(t),o=["absolute","fixed"].includes(Y(t).position)&&K(t)?Eo(t):t;return qe(o)?e.filter(s=>qe(s)&&function(i,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(i.contains(r))return!0;if(a&&et(a)){let n=r;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(s,o)&&te(s)!=="body"):[]}var zi={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:s,strategy:i}=t,r=[...o==="clippingAncestors"?Di(e):[].concat(o),s],a=r[0],n=r.reduce((c,p)=>{let f=us(e,p,i);return c.top=Rt(f.top,c.top),c.right=cs(f.right,c.right),c.bottom=cs(f.bottom,c.bottom),c.left=Rt(f.left,c.left),c},us(e,a,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:s}=t,i=K(o),r=me(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((i||!i&&s!=="fixed")&&((te(o)!=="body"||Zt(r))&&(a=Gt(o)),K(o))){let c=Ce(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:qe,getDimensions:ps,getOffsetParent:Eo,getDocumentElement:me,getElementRects:t=>{let{reference:e,floating:o,strategy:s}=t;return{reference:Vi(e,Eo(o),s),floating:{...ps(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Y(t).direction==="rtl"};var qt=(t,e,o)=>as(t,e,{platform:zi,...o});var xs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Ie,classNames:sn,createRef:Ji}=omii,eo,ws,Nt,Lo,$e,Z=class extends h{constructor(){super(...arguments);m(this,eo);m(this,Nt);l(this,"slotRef",Ji());m(this,$e,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props,i=d(this,Nt,Lo);if(i){let r=this.$(`.${this.type}-arrow`);qt(i,this.$element,{strategy:s,placement:e,middleware:[Bt(),Qt(),Ut(o),To({element:r})]}).then(({x:a,y:n,placement:c,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let y=this.$element.dataset;b=="top"?y.popperPlacement="bottom":b=="bottom"?y.popperPlacement="top":b=="left"?y.popperPlacement="right":b=="right"&&(y.popperPlacement="left")})}}show(){g(this,$e,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){g(this,$e,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,$e)?this.hide():this.show()}installed(){let e=d(this,Nt,Lo),{triggerShow:o,triggerHide:s}=this.$props;e&&(o.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),s.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),d(this,$e)&&this.hide()})}))}render(e){let{placement:o,header:s,body:i}=this.$props;return Ie(Ie.f,null,Ie("slot",{ref:this.slotRef,tabIndex:!0}),Ie("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Ie("div",{class:"popover-arrow"}),Ie("slot",{name:"header",class:"popover-header"},s),Ie("slot",{class:"popover-body",name:"body"},i)))}};eo=new WeakSet,ws=function(){return this.slotRef.current},Nt=new WeakSet,Lo=function(){let e=d(this,eo,ws).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},$e=new WeakMap,l(Z,"css",[()=>v("reboot","utilities","transitions","popover"),xs]),l(Z,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(Z,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var Ss=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Fs=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:k,classNames:ji}=omii,Bs=t=>t?.type?.indexOf("image")==0,Pi=t=>Bs(t)?(t.url=t.url??Fs(t.file),k("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):k("div",{className:"file"},k("oi-icon",{"view-box":"1024",name:zt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),k("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),Us=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return k("div",{className:"pictures"},k("div",{class:"row row-cols-auto g-4"},e.map((i,r)=>k("div",{className:"col",key:`file-${r}`},k("div",{class:"card",onClick:()=>{t.open(r)}},Pi(i),k("div",{className:"actions"},k("div",{class:"position-absolute top-50 start-50 translate-middle"},Bs(i)&&k("oi-icon",{name:"search"}),k("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(s||e.length==0)&&k("div",{className:"col selector-col",key:"selector"},k("div",{class:"card selector"},k("label",{class:ji("selector",{multiple:s}),title:o,onClick:()=>{t.open()}},k("oi-icon",{name:"add"}))))))};var{h:P,classNames:bn}=omii,Qs=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return P("div",{className:"files"},P("slot",{name:"actions"},P("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),P("table",{class:"table"},P("tbody",null,e.map(i=>P("tr",null,P("td",null,P("oi-icon",{"view-box":"1024",name:zt(i.ext),type:"file-type"}),i.name,i.ext),P("td",null,lo(i.size)),P("td",null,P("oi-icon",{name:"delete"})))))))};var{h:to,classNames:xn}=omii,Ai={pictures:Us,files:Qs},oo={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Ve,ge=class extends h{constructor(){super(...arguments);m(this,Ve,-1)}static get STATUS(){return oo}open(e=-1){g(this,Ve,e),this.$("#files").click()}remove(e){this.$props.files?.splice(e,1),this.updateSelf()}select(e){let{multiple:o,files:s,autoUpload:i}=this.$props;if(e?.length==0)return!1;if(o||s.splice(0,s.length),d(this,Ve)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Vt(a.name),ext:$t(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.splice(d(this,Ve),1,...r),this.fire("replaced",{index:d(this,Ve),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Vt(a.name),ext:$t(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),i===!0&&this.upload()}refresh(){this.update()}upload(){let{files:e,action:o,withCredentials:s,headers:i}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==oo.NONE||a.status==oo.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=s,typeof i=="function"&&(i=i()),typeof i=="object")for(let c in i)n.setRequestHeader(c,i[c]);n.send(a),n.onreadystatechange=function(c){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=oo.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,c)},n.upload.onprogress=function(c){if(c.lengthComputable){let p=Math.ceil(c.loaded/c.total*100);r.progress=p,this.fire("progress",{file:r,loaded:c.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:s}=this.$props;return to(to.f,null,to("slot",null,Ai[s]),to("input",{id:"files",type:"file",multiple:e,accept:o,onChange:i=>{this.select(i.target.files)}}))}};Ve=new WeakMap,l(ge,"css",[()=>v("reboot","containers","grid","card","utilities","buttons","tables"),Ss]),l(ge,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(ge,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Rs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var Mi="transitionend";var Ns=t=>{t.dispatchEvent(new Event(Mi))},Xi=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var ks=t=>{if(!Xi(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let s=t.closest("summary");if(s&&s.parentNode!==o||s===null)return!1}return e};var{h:V,classNames:Os,extractClass:Hi}=omii;var Wi="carousel-item-end",_i="carousel-item-start",Yi="carousel-item-next",Ki="carousel-item-prev",Zi=".active",Gi=".carousel-item",$n=Zi+Gi,De,se,kt,ve,be=class extends h{constructor(){super(...arguments);m(this,De,0);m(this,se,!1);m(this,kt,[]);m(this,ve,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,De)}get isSliding(){return d(this,se)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,se)&&Ns(this),clearInterval(d(this,ve)),g(this,ve,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(d(this,se))return!1;let{$activeItem:o,$items:s,$props:{duration:i}}=this,r=s.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=s.indexOf(n),e=a>r):typeof e=="number"?(a=(e+s.length)%s.length,n=s[a],e=a>r):(a=(r+1)%s.length,e||(a=(r-1+s.length)%s.length),n=s[a]),d(this,De)==a)return!1;let c=e?_i:Wi,p=e?Yi:Ki;g(this,se,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;$(n,[{classNames:[],duration:f},{classNames:[p],callback:()=>{Dt(n)}},{classNames:[p,c],duration:i},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),$(o,[{classNames:[],duration:f},{classNames:[c,"active"],duration:i},{classNames:[],callback:()=>{g(this,se,!1),g(this,De,a);let u;for(;u=d(this,kt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&ks(this)&&this.slide()}cycle(){d(this,ve)&&clearInterval(d(this,ve)),g(this,ve,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),g(this,De,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,se)?d(this,kt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:s,prevCtrl:i,indicator:r}=this.$props;return V("div",{...Hi(e,"carousel")},V("slot",{class:"carousel-inner"},o.map(a=>V("div",{className:Os("carousel-item"),waiting:a.attributes?.waiting},a))),V("div",{class:"carousel-indicators"},V("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),V("slot",{name:"actions"},typeof s=="function"&&s(this),typeof i=="function"&&i(this)))}};De=new WeakMap,se=new WeakMap,kt=new WeakMap,ve=new WeakMap,l(be,"css",[()=>v("reboot","utilities","carousel"),Rs]),l(be,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>V("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},V("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),V("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>V("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},V("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),V("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>V("button",{type:"button",onClick:s=>o.slide(e),class:Os({active:e==0})})}),l(be,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Co,classNames:zn,extractClass:qi}=omii,ye=class extends h{css(){}render(t){let{text:e,desc:o,position:s}=this.$props,i=s?s.split("-"):[];return Co("span",{...qi(t,"badge",{"position-absolute":s,"top-0":i.includes("top"),"start-100":i.includes("right"),"start-0":i.includes("left"),"top-100":i.includes("bottom"),"translate-middle":s,"rounded-pill":s})},Co("slot",null,e),o&&Co("span",{class:"visually-hidden"},o))}};l(ye,"css",()=>v("reboot","utilities","badge")),l(ye,"defaultProps",{text:"",desc:!1,position:!1}),l(ye,"propTypes",{});var Ts=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:tt,classNames:Xn,extractClass:er}=omii,we,xe=class extends h{constructor(){super(...arguments);m(this,we,!0)}get closed(){return d(this,we)}close(){g(this,we,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){g(this,we,!1),this.update(),B.fade.show(this)}install(){g(this,we,!this.$props.visible)}render(e){return tt("div",{...er(e,"toast",{show:!d(this,we)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},tt("div",{class:"toast-header"},tt("slot",{name:"header"}),tt("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),tt("div",{class:"toast-body"},tt("slot",null)))}};we=new WeakMap,l(xe,"css",[()=>v("reboot","utilities","toasts","close"),Ts]),l(xe,"defaultProps",{visible:!1}),l(xe,"propTypes",{visible:Boolean});var{h:Io,classNames:tr,extractClass:Gn}=omii,Se=class extends h{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:s,max:i,showPercent:r,striped:a,animated:n,style:c,className:p}=this.$props;return Io("div",{class:"progress",style:c},Io("div",{class:tr("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":s,"aria-valuemax":i},r&&Io("span",null,o,"%")))}};l(Se,"css",()=>v("reboot","utilities","progress")),l(Se,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(Se,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Es=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:ot,classNames:il,createRef:rl}=omii,so=class extends Z{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return ot(ot.f,null,ot("slot",{ref:this.slotRef}),ot("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},ot("div",{class:"tooltip-arrow"}),ot("slot",{class:"tooltip-inner",name:"body"},o)))}},ze=so;l(ze,"css",[()=>v("reboot","utilities","transitions","tooltip"),Es]),l(ze,"defaultProps",{...ct(so,so,"defaultProps"),offset:0});var Ls=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:Fe,classNames:pl,createRef:st}=omii,A,ie,M,Je,je,io,Be=class extends h{constructor(){super(...arguments);m(this,A,st());m(this,ie,st());m(this,M,st());m(this,Je,st());m(this,je,st());m(this,io,st())}close(e,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(d(this,M).current),d(this,ie).current.style.height=this.clientHeight-d(this,A).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(d(this,M).current),d(this,ie).current.style.height=this.clientHeight-d(this,A).current.clientHeight-d(this,M).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,M).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,A).current.scrollHeight-d(this,M).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(d(this,Je).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(d(this,Je).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(d(this,je).current)}openRight(){this.$props.openRight=!0,B.collapse.show(d(this,je).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=d(this,A).current.getBoundingClientRect(),s=d(this,M).current.getBoundingClientRect();d(this,ie).current.style.height=e.height-o.height-s.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:s,openRight:i}=this.$props;e||(d(this,M).current.style.height=0),o||(d(this,A).current.style.height=0),s||(d(this,Je).current.style.height=0),i||(d(this,je).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return Fe(Fe.f,null,Fe("slot",{name:"header",ref:d(this,A)}),Fe("main",{ref:d(this,ie)},Fe("slot",{name:"left",ref:d(this,Je),class:"collapse-horizontal"}),Fe("slot",{name:"content",ref:d(this,io)}),Fe("slot",{name:"right",ref:d(this,je),class:"collapse-horizontal"})),Fe("slot",{name:"footer",ref:d(this,M)}))}};A=new WeakMap,ie=new WeakMap,M=new WeakMap,Je=new WeakMap,je=new WeakMap,io=new WeakMap,l(Be,"css",[Ls]),l(Be,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(Be,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Cs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:$o,classNames:xl,uniqueTag:or}=omii,G,Ue=class extends h{constructor(){super(...arguments);m(this,G,void 0)}get $module(){return d(this,G)}load(e,o,s,i){o=o??this.$props.module,s=s??this.$props.loading,i=i??this.$props.loadError,g(this,G,s),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)g(this,G,i);else if(typeof a=="function"){let n=or(a);g(this,G,$o(n,null))}else g(this,G,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),g(this,G,i),this.updateSelf()})}install(){let{src:e,module:o,loading:s,loadError:i}=this.$props;this.load(e,o,s,i)}render(e){return d(this,G)}};G=new WeakMap,l(Ue,"css",[Cs]),l(Ue,"defaultProps",{src:null,module:"default",loading:$o("oi-loading",{size:"6"}),loadError:$o("h1",null,"Module Load Error")}),l(Ue,"propTypes",{src:String,module:String});var Is=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Qe,classNames:Ql,createRef:$s,extractClass:sr}=omii,q,Re=class extends h{constructor(){super(...arguments);l(this,"offcanvasRef",$s());l(this,"backdropRef",$s());m(this,q,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,q))return;g(this,q,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;$(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,q)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,q))return;g(this,q,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;$(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){g(this,q,this.$props.visible)}render(e){let{visible:o,placement:s,position:i,title:r,useBackdrop:a}=this.$props;return Qe(Qe.f,null,Qe("div",{ref:this.offcanvasRef,...sr(e,"offcanvas",`offcanvas-${s}`,`position-${i}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Qe("div",{class:"offcanvas-header"},Qe("slot",{name:"title",class:"offcanvas-title h5"},r),Qe("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Qe("slot",{class:"offcanvas-body"})),a&&d(this,q)&&Qe("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};q=new WeakMap,l(Re,"css",[()=>v("reboot","offcanvas","utilities","close"),Is]),l(Re,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Re,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:Ll,classNames:Cl,extractClass:Il,createRef:$l}=omii;function zs(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let s in e)s!=="valid"&&e[s]===!0&&o.push(s);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function Vs(t){let e=t.currentTarget;e.checkValidity(),zs(t.target),e.classList.add("was-validated")}function Js(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(s=>{zs(s)}),t.classList.add("was-validated"),o.every(s=>s.checkValidity?s.checkValidity():!0)&&e}function Ds(t){let e=t.target;e.removeEventListener("input",Vs),e.addEventListener("input",Vs,!1),Js(e)||(t.preventDefault(),t.stopPropagation())}var it=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",Ds),e.addEventListener("submit",Ds,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return Js(this)}connectedCallback(){this.constructor.validate(this)}};var js=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:ro,classNames:zl,createRef:Ps}=omii,Ae=null;document.addEventListener("click",t=>{Ae&&Ae.hide()});var Ot,Tt,re,Pe,Et,Vo,rt,Ne=class extends h{constructor(){super(...arguments);m(this,re);m(this,Et);m(this,Ot,Ps());m(this,Tt,Ps());m(this,rt,!1)}get $menu(){return d(this,Ot).current}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props;qt(d(this,Et,Vo),this.$menu,{strategy:s,placement:e,middleware:[Bt(),Qt(),Ut(o)]}).then(({x:i,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${i}px`,top:`${r}px`})})}show(){g(this,rt,!0),d(this,re,Pe).focus(),d(this,re,Pe).setAttribute("aria-expanded",!0),d(this,re,Pe).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Ae=this,this.setPosition()}hide(){g(this,rt,!1),d(this,re,Pe).classList.remove("show"),d(this,re,Pe).setAttribute("aria-expanded","false"),Ae=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,rt)?this.hide():this.show()}installed(){d(this,Et,Vo).addEventListener("click",e=>{Ae&&Ae!=this&&Ae.hide(),this.toggle(),e.preventDefault(),e.stopPropagation()}),this.addEventListener("click",e=>{e.stopPropagation()})}render(e){let{menu:o}=this.$props;return ro(ro.f,null,ro("slot",{ref:d(this,Tt)}),ro("slot",{name:"menu",ref:d(this,Ot)},o))}};Ot=new WeakMap,Tt=new WeakMap,re=new WeakSet,Pe=function(){return d(this,Tt).current},Et=new WeakSet,Vo=function(){let e=d(this,re,Pe).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},rt=new WeakMap,l(Ne,"css",[()=>v("reboot","utilities","transitions","dropdown"),js]),l(Ne,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Ne,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var As=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:ir,Component:Wl}=omii,ao,ke=class extends h{constructor(){super(...arguments);m(this,ao,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:s,fontSize:i}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{g(this,ao,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:s,fontSize:i,minimap:{enabled:!1}})})}render(){return ir("div",{class:"coder"})}};ao=new WeakMap,l(ke,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,s=new CSSStyleSheet;return s.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,s],fetch(new URL("./monaco/index.css",e).href).then(i=>i.text())},As]),l(ke,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(ke,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var Ms=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJIn0= */`;var{h:X,classNames:ql,extractClass:ec}=omii,at,Oe=class extends h{constructor(){super(...arguments);m(this,at,!1)}get validity(){let{required:e,values:o,min:s,max:i}=this.$props,r={valid:!0};return e&&(!o||o.length==0)&&(r.valid=!1,r.valueMissing=!0),r.valid&&(s!=0&&s>o.length&&(r.valid=!1,r.rangeUnderflow=!0),i!=0&&i<o.length&&(r.valid=!1,r.rangeOverflow=!0)),r}checkValidity(){g(this,at,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",e=>{this.showOptions()})}render(){let{values:e,options:o,preserveOrder:s,createSelected:i,createOption:r}=this.$props;return r=r.bind(this),i=i.bind(this),e=e??[],s&&e.sort((a,n)=>o.findIndex(c=>c.value==a)-o.findIndex(c=>c.value==n)),o=o??[],X("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},X("div",{class:"selected d-flex",onClick:a=>{a.stopImmediatePropagation()}},"\xA0",X("ul",{class:"values flex-grow-1"},e.map((a,n)=>{let c=o.find(p=>p.value==a);if(c)return i(c,n)})),X("div",{class:"expander",onClick:a=>{this.showOptions()}})),X("ul",{class:"dropdown-menu",slot:"menu"},o.map((a,n)=>X("li",null,r(a,n)))))}};at=new WeakMap,l(Oe,"css",[()=>v("reboot","utilities","forms","scrollbar"),Ms]),l(Oe,"defaultProps",{options:[],values:[],multiple:!0,required:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:s,multiple:i}=this.$props,r={};return i?r.for=`option${o}`:r.onClick=a=>{s.includes(e.value)?s.splice(0,s.length):s.push(e.value)},X("div",{class:"form-check d-flex"},i&&X("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:s.includes(e.value),onChange:a=>{if(a.target.checked)s.includes(e.value)||s.push(e.value);else{let n=s.indexOf(e.value);n!=-1&&s.splice(n,1)}this.updateSelf(),d(this,at)&&this.checkValidity()}}),X("label",{class:"form-check-label flex-grow-1",...r},e.text))},createSelected(e,o){let{values:s}=this.$props;return X("li",{onClick:i=>{i.stopImmediatePropagation()}},e.text,X("oi-bi",{name:"x",onClick:i=>{s.splice(o,1),this.updateSelf(),i.stopPropagation(),d(this,at)&&this.checkValidity()}}))}}),l(Oe,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,min:Number,max:Number});var Xs=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:C,classNames:nc,extractClass:rr}=omii,Te=class extends h{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:s,dataCellFormatter:i,height:r}=this.$props,a=rr(this.$props)?.class??"";return C("div",{className:"table-container",style:{height:r}},C("table",{className:`table ${a}`},C("thead",null,o&&C("tr",null,t?.map(n=>C("th",{style:n.titleStyle,scope:"col"},s(n,t,e,this)))),C("slot",{name:"header"})),C("tbody",null,e?.map((n,c)=>C("tr",null,t.map(p=>C("td",{style:p.style},i(p,n,c,e,this)))))),C("tfoot",null,C("slot",{name:"footer"}))))}};l(Te,"css",[()=>v("reboot","utilities","tables"),Xs]),l(Te,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,s){if(t.type=="checkbox"){t.checked||(t.checked=[]);let i=o?.map(a=>a[t.field])??[],r=i.every(a=>t.checked.includes(a));return C("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...i);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),c=new Set(i.filter(p=>!n.has(p)));t.checked.splice(0,t.checked.length,...c)}await s.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,s,i){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),C("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await i.updateSelf()}});case"radio":return C("input",{type:"radio"});default:return r}},height:"auto"}),l(Te,"propTypes",{showHeader:Boolean});var{define:w}=omii;w("oi-rate",ne);w("oi-tab",ae);w("oi-icon",J);w("oi-bi",H);w("oi-pager",_);w("oi-tree",de);w("oi-loading",ee);w("oi-alert",pe);w("oi-accordion",ue);w("oi-breadcrumb",fe);w("oi-modal",he);w("oi-popover",Z);w("oi-uploader",ge);w("oi-carousel",be);w("oi-badge",ye);w("oi-toast",xe);w("oi-progress",Se);w("oi-tooltip",ze);w("oi-layout",Be);w("oi-import",Ue);w("oi-offcanvas",Re);w("oi-pagination",ce);w("oi-dropdown",Ne);w("oi-coder",ke);w("oi-select",Oe);w("oi-table",Te);customElements.define("oi-form",it,{extends:"form"});var ar=import.meta.url;omii.ui={utils:zo,css:Ko,effect:B,icon:J,tab:ae,rate:ne,pager:_,tree:de,treeNode:vo,loading:ee,alert:pe,accordion:ue,breadcrumb:fe,modal:he,popover:Z,uploader:ge,carousel:be,badge:ye,toast:xe,progress:Se,tooltip:ze,layout:Be,import:Ue,offcanvas:Re,pagination:ce,form:it,dropdown:Ne,coder:ke,select:Oe,table:Te,importURL:ar,sortable:He};export{ue as accordion,pe as alert,H as bicon,fe as breadcrumb,be as carousel,ke as coder,Ko as css,Ne as dropdown,B as effect,it as form,J as icon,Ue as import,ar as importURL,Be as layout,ee as loading,he as modal,Re as offcanvas,_ as pager,ce as pagination,Z as popover,Se as progress,ne as rate,Oe as select,He as sortable,ae as tab,Te as table,xe as toast,ze as tooltip,de as tree,vo as treeNode,ge as uploader,zo as utils};
//# sourceMappingURL=omii-ui.js.map
