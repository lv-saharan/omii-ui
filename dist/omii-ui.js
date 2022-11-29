var bi=Object.defineProperty;var vi=Object.getPrototypeOf;var yi=Reflect.get;var xi=(t,e,o)=>e in t?bi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(xi(t,typeof e!="symbol"?e+"":e,o),o),So=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var c=(t,e,o)=>(So(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},f=(t,e,o,s)=>(So(t,e,"write to private field"),s?s.call(t,o):e.set(t,o),o),Fo=(t,e,o,s)=>({set _(i){f(t,e,i,o)},get _(){return c(t,e,s)}}),_t=(t,e,o)=>(So(t,e,"access private method"),o),gt=(t,e,o)=>yi(vi(t),o,e);var wi=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),Si=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},Fi=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},Xt=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Ht=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var Ui=["B","KB","MB","GB","TB","PB"],Uo=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+Ui[o]},Bi=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},Qi=(t,e)=>{window.chrome.extension?t():e()},Wt=t=>{t.offsetHeight},Ri=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],Yt=t=>{if(!t)return"file";t=t.toLowerCase();let e=Ri.find(o=>o[0].includes(t));return e==null?"file":e[1]};var es={tryExtension:Qi,downloadUrl:Bi,getName:Ht,getExtension:Xt,cleanHTML:wi,isToday:Si,isYesterday:Fi,formatSize:Uo};var ki=import.meta.url,Ni="sortable.core.esm.js",ts=new URL("./sortablejs/",ki).href,D=null,j={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function Oi({autoScroll:t,remove:e,revert:o,multiDrag:s,swap:i}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=ts){D||(D=await import(new URL(Ni,r).href)),t&&!j.AutoScroll&&(j.AutoScroll=!0,D.Sortable.mount(new D.AutoScroll));let[a,n]=D.OnSpill;return e&&!j.Remove&&(j.Remove=!0,D.Sortable.mount(a)),e&&!j.Remove&&(j.Remove=!0,D.Sortable.mount(a)),o&&!j.Remove&&(j.Revert=!0,D.Sortable.mount(n)),s&&!j.MultiDrag&&(j.MultiDrag=!0,D.Sortable.mount(new D.MultiDrag)),i&&!j.Swap&&(j.Swap=!0,D.Sortable.mount(new D.Swap)),D.Sortable}function Ti(t){ts=t}var ot={use:Oi,setRoot:Ti};var{define:Vr,h:Dr,Component:Li}=omii,g=class extends Li{};var os=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:bt,Component:Mr,classNames:ss,render:_r}=omii,ue=class extends g{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},{ignoreAttrs:!0,updateSelf:!0}):this.update$Props({activeIndex:t},{ignoreAttrs:!0,updateSelf:!0}))}async render(t){let e=this.$props,o=t.items??e.items,s=[],i=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,d=a.pane;i.push(bt("div",{key:`pane-${a.key??r}`,className:ss("pane",{active:n})},d)),s.push(bt("div",{key:`nav-${a.key??r}`,className:ss("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return bt("div",{class:"tabs"},bt("div",{class:"navs"},s),bt("div",{class:"panes"},i))}};l(ue,"css",os),l(ue,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(ue,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var je={BUNDLE:"bundle",SINGLE:"single"},vt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:Yr,h:is,Component:Kr}=omii,yt=je.SINGLE,Bo=vt.FILLED,Qo=async(t,e,o)=>{e=e??Bo,e==vt.FILE_TYPE&&(o=je.BUNDLE);try{if((o??yt)==je.BUNDLE){let{default:s}=await import(`./icons/${e}.js`);return s[t]}else{let{default:s}=await import(`./icons/${e}/${t}.js`);return s}}catch{console.error("load icon error",t,e)}},Ci=async(t,e,o,s={})=>{let i=await Qo(t,e,o);return is("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...s},i)},P=class extends g{static useBundleMode(){yt=je.BUNDLE}static useSingleMode(){yt=je.SINGLE}static get MODES(){return je}static get TYPES(){return vt}static get Mode(){return yt}static set Mode(t){yt=t}static get Type(){return Bo}static set Type(t){Bo=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",s=t?`${t}rem`:"var(--oi-icon-width, 1rem)",i=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,s=await Qo(t,e);return is("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},s)}};l(P,"updateOnAttributeChanged",!0),l(P,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(P,"defaultProps",{name:null,type:vt.FILLED,viewBox:24,size:null,color:null}),l(P,"createSvg",Ci),l(P,"loadIcon",Qo),l(P,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
  `);var{h:rs}=omii,Ro=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},Ii=async(t,e={})=>{let o=await Ro(t);return rs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},H=class extends g{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",s=t?`${t}rem`:"var(--oi-bi-width, 1rem)",i=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await Ro(t);return rs("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(H,"updateOnAttributeChanged",!0),l(H,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(H,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(H,"createSvg",Ii),l(H,"loadIcon",Ro),l(H,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var as=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:na,h:ko,Component:la,classNames:Ei,render:ca}=omii,No={STAR:"star",HALF:"star_half",BORDER:"star_border"},W,fe=class extends g{constructor(){super(...arguments);m(this,W,-1)}get rateScore(){return this.$props.score}install(){f(this,W,this.$props.score)}rate(e){this.fire("rate",e),f(this,W,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:s,rateable:i,size:r,color:a}=o,n=[],d=c(this,W);for(let p=0;p<s;p++)d-p>=.5?n.push(No.STAR):d-p>0?n.push(No.HALF):n.push(No.BORDER);return ko("div",{class:Ei("rate-wrap","rate-"+c(this,W))},n.map((p,h)=>i?ko("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),f(this,W,h+1),this.fire("tryRate",c(this,W)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),f(this,W,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(h+1)}}):ko("oi-icon",{name:p,size:r,color:a,className:p})))}};W=new WeakMap,l(fe,"css",as),l(fe,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(fe,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var ns=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:C,classNames:xt}=omii,Y=class extends g{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(Y,"css",ns),l(Y,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:C("oi-icon",{name:"keyboard_arrow_left"}),next:C("oi-icon",{name:"keyboard_arrow_right"}),first:C("oi-icon",{name:"first_page"}),last:C("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:s}=t;return C("div",{class:xt("prev",{disable:o<=1}),onClick:i=>{o>1&&e.goto(o-1)}},s)},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return C("div",{class:xt("next",{disable:o>=i}),onClick:r=>{i>o&&e.goto(o+1)}},s)},createFirst(t,e){let{first:o,pageNum:s}=t;return C("div",{class:xt("first",{disable:s<=1}),onClick:i=>{s!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return C("div",{class:xt("last",{disable:s>=i}),onClick:r=>{s!=i&&e.goto(i)}},o)},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let d=[];a<1&&(a=1);for(let p=a;p<=n;p++)d.push(C("div",{className:xt({active:s==p,page:!0}),onClick:h=>{s!=p&&e.goto(p)}},p));return d},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return C("div",{class:"info"},C("span",{class:"curr"},o),"/",C("span",{class:"total"},s))},createJumper(t,e){return C("div",{class:"jumper"},"\u524D\u5F80",C("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:d}=t;return C("div",{class:"pager"},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),d(t,e))}}),l(Y,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var ls=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Kt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:$i,define:ya,h:Vi,Component:xa,setTheme:Di}=omii,To="bootstrap";function zi(t){To=t,he=new URL(`./${To}/`,import.meta.url).href}var he=new URL(`./${To}/`,import.meta.url).href;function Ji(t){he=t}var Zt=(t,e=he)=>fetch(Lo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),ji=t=>Zt=t,cs=(t,e,o=he)=>{let s=Vi("link",{rel:"styleSheet",href:Lo(t,o)});$i(s,e??"body")},Pi=(t,e=he)=>{cs("reboot",t,e)},Lo=(t,e=he)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},Oo=new Map,Gt=async(t,e=he)=>{let o=`${e}/${t}`,s=Oo.get(o);if(s===void 0){let i=[];Oo.set(o,i),s=new CSSStyleSheet;try{s.replaceSync(await Zt(t,e)),i.forEach(r=>{r(s)}),Oo.set(o,s)}catch(r){console.error("get css stylesheets error",r)}}else if(s instanceof Array)return new Promise(i=>{s.push(i)});return s},y=(...t)=>Promise.all(t.map(e=>Gt(e))),ds={};Kt.forEach(t=>{Object.defineProperty(ds,t,{get:function(){return Gt(t)}})});var Ai=(t=Kt)=>{t.forEach(e=>{Gt(e)})},Mi=async(t,e=he)=>{let o=await Zt(`theme.${t}`,e);Di(o)},z=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let s=0,i=(r=[])=>{let a=s%e.length,{classNames:n,duration:d=0,delay:p=0,callback:h=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),h&&h(t,n,d,p)},p*1e3),s++,!(Math.floor(s/e.length)>=o)&&setTimeout(()=>{i(n)},(d+p)*1e3)};i()}},ps={StyleSheets:Kt,CSSStyleSheets:ds,setBaseUrl:Ji,setBaseRoot:zi,loadStyleSheet:Zt,setStyleSheetLoader:ji,addStyleSheet:cs,addRebootStyleSheet:Pi,getStyleSheetUrl:Lo,getCSSStyleSheet:Gt,getCSSStyleSheets:y,useTheme:Mi,timingClassNames:z,preLoad:Ai};var{h:U,classNames:wt,extractClass:_i}=omii,st=class extends Y{},me=st;l(me,"css",[()=>y("reboot","pagination","utilities"),ls]),l(me,"defaultProps",{...gt(st,st,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:s}=t;return U("li",{class:wt("page-item",{disabled:o<=1})},U("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i=>{o>1&&e.goto(o-1),i.preventDefault(),i.stopPropagation()}},U("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return U("li",{class:wt("page-item",{disabled:o>=i})},U("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{i>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},U("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:s}=t;return U("li",{class:wt("page-item",{disabled:s<=1})},U("a",{class:"page-link",href:"#","aria-label":"First",onClick:i=>{s!=1&&e.goto(1),i.preventDefault(),i.stopPropagation()}},U("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return U("li",{class:wt("page-item",{disabled:s>=i})},U("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{s!=i&&e.goto(i),r.preventDefault(),r.stopPropagation()}},U("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let d=[];a<1&&(a=1);for(let p=a;p<=n;p++)d.push(U("li",{key:`pager-${p}`,className:wt("page-item",{active:s==p,page:!0})},U("a",{class:"page-link",href:"#",onClick:h=>{s!=p&&e.goto(p),h.preventDefault(),h.stopPropagation()}},p)));return d},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return U("li",{class:"info page-item"},U("span",{className:"page-link"},U("span",{class:"curr"},o),"/",U("span",{class:"total"},s)))},createJumper(t,e){return U("li",{class:"jumper page-item mx-2"},U("span",{className:"page-link"},"\u524D\u5F80",U("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:d}=t;return U("nav",null,U("ul",{..._i(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),d(t,e)))}}),l(me,"propTypes",{...gt(st,st,"propTypes"),align:String});var us=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var fs=`
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
  align-items: center;
  font: var(--oi-tree-node-font);
}
:host .node .element .label {
  display: inline-block;
}
:host .node .element .expander-wrap {
  width: 1.2rem;
  align-items: center;
  display: flex;
}
:host .node .element .expander-wrap > oi-icon {
  display: flex;
  transition: transform 0.35s ease;
}
:host .node .element:hover {
  background-color: var(--oi-tree-node-hover-bgcolor, #cfe2ff);
  color: var(--oi-tree-node-hover-color, black);
  --oi-tree-node-expander-wrap-color: black;
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
:host .node.hover .children.empty {
  display: block;
  height: 2em;
  border: #cfe2ff 1px dotted;
}
:host .node.expanded .expander-wrap > oi-icon {
  transform: rotate(90deg);
  transform-origin: center center;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSUo7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUlKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtBQUFBO0VBRUk7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQU9SO0VBQ0k7O0FBUUE7RUFDSTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBOztBQU1SO0VBQ0k7OztBQU1oQjtFQUVJOzs7QUFHSjtFQUNJIn0= */`;var{h:K,classNames:qt,define:Xi,getHost:Co,throttle:La}=omii,it,St,Eo=class extends g{constructor(){super(...arguments);m(this,it,void 0);m(this,St,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get expander(){return this.node.expander??this.$props.expander??this.tree.$props.expander}get node(){return this.$props.node??{}}get nodes(){return c(this,it)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=Co(this);return o instanceof Eo?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?K("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):K("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?K("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):K("div",{class:"radio-placeholder"}):null}install(){!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}get Sortable(){return c(this,St)}async installed(){if(this.sortable){let o=await ot.use();f(this,St,o.create(this.$(".children"),{delay:150,handle:".element",fallbackOnBody:!0,invertSwap:!0,group:this.tree.sortGroup,onEnd:s=>{let i=Co(s.from),r=Co(s.to),a=i.nodes,n=r.nodes;n||(n=[],r.node.children=n),this.tree.fire("sorted",{fromNode:i.node,fromNodes:a,toNode:r.node,toNodes:n,fromIndex:s.oldIndex,toIndex:s.newIndex})}}))}}async render(o){let{node:s,cssss:i}=o,r=s.element??s.label??s.key;typeof r=="function"&&(r=await r(s,o,this));let a=null,n=f(this,it,s.children);return typeof n=="function"&&this.expanded&&f(this,it,n=await n(s,o,this)),a=K("div",{class:qt("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(n instanceof Array?n.map(d=>K("oi-tree-node",{node:d,"node-level":this.level+1,tree:this.tree,cssss:i})):n)),K("div",{class:qt("node",{expanded:this.expanded,"no-children":this.noChildren})},K("div",{class:qt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:d=>{d.stopPropagation(),this.selected&&d.ctrlKey===!0?this.unSelect():this.select()}},K("div",{onClick:d=>{d.stopPropagation(),this.toggle()},class:qt("expander-wrap",{"no-children":this.noChildren})},!this.noChildren&&this.expander),this.$checkbox,this.$radio,K("div",{class:"label"},r)),a)}},Pe=Eo;it=new WeakMap,St=new WeakMap,l(Pe,"css",fs),l(Pe,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0,expander:null}),l(Pe,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});Xi("oi-tree-node",Pe);var Io=Pe;var{h:$o,purgeCSSSS:Hi,getHost:eo,classNames:Wi}=omii;var Ft,Ae,ge=class extends g{constructor(){super(...arguments);m(this,Ft,void 0);m(this,Ae,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKeys(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return c(this,Ft)}isSelected(e){let{multiSelect:o,selectedKey:s,selectedKeys:i}=this.$props;return o?(i??[]).some(r=>r==e):s!=null&&s==e}select(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;s?i.some(r=>r==e)||i.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;if(!s)this.$props.selectedKey=null;else{let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:s}=this.$props;return o?(s??[]).some(i=>i==e):!1}check(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;s&&i.indexOf(e)==-1&&i.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;if(s){let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:s}=this.$props;return o?s!=null&&s==e:!1}radio(e,o=!0){let{radioTree:s}=this.$props;s&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(s=>s==e)}expand(e,o=!0){let{expandedKeys:s}=this.$props;s.indexOf(e)==-1&&s.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:s}=this.$props,i=s.indexOf(e);i!=-1&&s.splice(i,1),o&&this.update()}async installed(){if(this.$props.sortable){let e=await ot.use();f(this,Ft,e.create(this.rootNode,{delay:150,fallbackOnBody:!0,invertSwap:!0,group:this.sortGroup,onEnd:o=>{let s=eo(o.from),i=eo(o.to),r=s.nodes,a=i.nodes;this.fire("sorted",{fromNode:s.node,fromNodes:r,toNode:i.node,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}get nodes(){if(!c(this,Ae)){let e=this.$props.nodes,o=eo(this);typeof e=="function"&&(e=e.call(o)),f(this,Ae,e)}return c(this,Ae)}set nodes(e){f(this,Ae,e)}render(){let e=eo(this),o=Hi(this.$props.nodeCss,e);return $o("div",{class:Wi("tree-container",{sortable:this.sortable})},this.nodes.map(s=>$o("oi-tree-node",{node:s,tree:this,cssss:o})))}};Ft=new WeakMap,Ae=new WeakMap,l(ge,"css",us),l(ge,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[],expander:$o("oi-icon",{name:"keyboard_arrow_right",class:"expander"})}),l(ge,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:Ja,classNames:ja}=omii,Ut,se=class extends g{constructor(){super(...arguments);m(this,Ut,void 0)}css(){let{size:e,color:o}=this.$props,s="2rem";if(e)s=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?s=`${a.offsetHeight}px`:s="2rem"}let i=`
    :host{
      --oi-loading-size:${s};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${c(this,Ut)}
    ${i}
    ${r}
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:s}}=await import(`./loadings/${e}.js`);return f(this,Ut,s),o}};Ut=new WeakMap,l(se,"updateOnAttributeChanged",!0),l(se,"css",`
    :host{
      display:inline-block;
    }
  `),l(se,"defaultProps",{name:"circle",size:null,color:null}),l(se,"propTypes",{name:String,size:Number,color:String});var rt={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Vo="show",to="collapse",Do="collapsing",Yi="collapse-horizontal",zo=.35,Jo=(t,e)=>e||(t.classList.contains(Yi)?rt.HORIZONTAL:rt.VERTICAL),hs={show(t,e=zo,o=null){return new Promise(s=>{o=Jo(t,o),z(t,[{classNames:[to]},{classNames:[Do],duration:e,callback(i){i.style[o==rt.VERTICAL?"height":"width"]=`${i[o==rt.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[to,Vo],callback(i){i.style[o==rt.VERTICAL?"height":"width"]="",s()}}])})},hide(t,e=zo,o=null){return new Promise(s=>{o=Jo(t,o);let i=o==rt.VERTICAL?"height":"width";t.style[i]=`${t.getBoundingClientRect()[i]}px`,Wt(t.offsetHeight),z(t,[{classNames:[Do,to,Vo]},{classNames:[Do],duration:e,callback(r){r.style[i]=""}},{classNames:[to],callback:s}])})},toggle(t,e=zo,o=null){return o=Jo(t,o),t.classList.contains(Vo)?this.hide(t,e,o):this.show(t,e,o)}};var Bt="fade",jo="show",Po=.15,ms={show(t,e=Po){return new Promise(o=>{z(t,[{classNames:[Bt]},{classNames:[Bt,jo],duration:e,callback:o}])})},hide(t,e=Po){return new Promise(o=>{z(t,[{classNames:[Bt,jo]},{classNames:[Bt],duration:e,callback:o}])})},toggle(t,e=Po){return t.classList.contains(Bt)&&!t.classList.contains(jo)?this.show(t,e):this.hide(t,e)}};var B={collapse:hs,fade:ms};var{h:Ao,classNames:Ki}=omii;var Zi="show",Qt,be=class extends g{constructor(){super(...arguments);m(this,Qt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(Zi),f(this,Qt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return c(this,Qt)?null:Ao("div",{className:Ki("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},Ao("slot",null),o?Ao("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};Qt=new WeakMap,l(be,"css",()=>y("reboot","utilities","alert","close","transitions")),l(be,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(be,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:at,classNames:Mo}=omii,oo={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Gi="collapsed",nt,so,ve=class extends g{constructor(){super(...arguments);m(this,nt)}static get DIRECTIONS(){return oo}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:s}=this.$props;if(e.length>0&&s&&(e[0].opened=!0),!o){let i=e.filter(r=>r.opened);if(i.length){let r=i.shift();r.opened=!0,i.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==oo.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:s}=this.$props;if(s)_t(this,nt,so).call(this,e);else{let i=o.findIndex(a=>a.opened),r=i==-1?null:o[i];r&&r!=e&&_t(this,nt,so).call(this,r),_t(this,nt,so).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return at("div",{class:Mo("accordion",{"collapse-horizontal":o==oo.HORIZONTAL})},e.map((s,i)=>at("div",{class:"accordion-item",key:s.key??`item-${i}`},at("h2",{class:"accordion-header"},at("button",{class:Mo("accordion-button",{collapsed:!s.opened}),type:"button","aria-expanded":s.opened,onClick:r=>{this.toggle(s)}},s.header)),at("div",{class:Mo("accordion-collapse",{collapse:!0,show:s.opened})},at("div",{class:"accordion-body"},typeof s.body=="function"?s.body(s,this.$props,this):s.body)))))}};nt=new WeakSet,so=function(e){let{items:o,transitionDuration:s}=this.$props,i=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${i+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(Gi,!e.opened),e.opened?(B.collapse.show(a),this.fire("collapseShow",e)):(B.collapse.hide(a),this.fire("collapseHide",e))},l(ve,"css",()=>y("reboot","utilities","accordion","close","transitions")),l(ve,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:oo.VERTICAL}),l(ve,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:Rt,classNames:cn}=omii,ye=class extends g{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return Rt("nav",{"aria-label":"breadcrumb"},Rt("ol",{class:"breadcrumb"},t.map((o,s)=>s!==t.length-1?Rt("li",{class:"breadcrumb-item"},typeof e=="object"&&s!=0?e:null,Rt("a",{href:o.href},o.label)):Rt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&s!=0?e:null,o.label))))}};l(ye,"css",()=>y("reboot","utilities","breadcrumb")),l(ye,"defaultProps",{}),l(ye,"propTypes",{});var gs=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:I,classNames:bs,extractClass:qi}=omii,xe=class extends g{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return I(I.f,null,e.visible&&!e.staticPosition&&I("div",{class:bs("modal-backdrop","fade","show")}),I("div",{...qi(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},I("div",{class:bs("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},I("div",{class:"modal-content"},I("div",{class:"modal-header"},I("slot",{name:"header"},I("h5",{class:"modal-title"},e.title),I("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),I("div",{class:"modal-body"},I("slot",null)),I("div",{class:"modal-footer"},I("slot",{name:"footer"}))))))}};l(xe,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),gs]),l(xe,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(xe,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function Nt(t){return t.split("-")[0]}function ro(t){return t.split("-")[1]}function Ot(t){return["top","bottom"].includes(Nt(t))?"x":"y"}function Xo(t){return t==="y"?"height":"width"}function vs(t,e,o){let{reference:s,floating:i}=t,r=s.x+s.width/2-i.width/2,a=s.y+s.height/2-i.height/2,n=Ot(e),d=Xo(n),p=s[d]/2-i[d]/2,h=n==="x",u;switch(Nt(e)){case"top":u={x:r,y:s.y-i.height};break;case"bottom":u={x:r,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:a};break;case"left":u={x:s.x-i.width,y:a};break;default:u={x:s.x,y:s.y}}switch(ro(e)){case"start":u[n]-=p*(o&&h?-1:1);break;case"end":u[n]+=p*(o&&h?-1:1)}return u}var xs=async(t,e,o)=>{let{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),d=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:h}=vs(d,s,n),u=s,b={},v=0;for(let x=0;x<r.length;x++){let{name:S,fn:F}=r[x],{x:R,y:O,data:T,reset:Q}=await F({x:p,y:h,initialPlacement:s,placement:u,strategy:i,middlewareData:b,rects:d,platform:a,elements:{reference:t,floating:e}});p=R??p,h=O??h,b={...b,[S]:{...b[S],...T}},Q&&v<=50&&(v++,typeof Q=="object"&&(Q.placement&&(u=Q.placement),Q.rects&&(d=Q.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):Q.rects),{x:p,y:h}=vs(d,u,n)),x=-1)}return{x:p,y:h,placement:u,strategy:i,middlewareData:b}};function ws(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function kt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Ho(t,e){var o;e===void 0&&(e={});let{x:s,y:i,platform:r,rects:a,elements:n,strategy:d}=t,{boundary:p="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=e,x=ws(v),S=n[b?u==="floating"?"reference":"floating":u],F=kt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(S)))==null||o?S:S.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:h,strategy:d})),R=kt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:s,y:i}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:d}):a[u]);return{top:F.top-R.top+x.top,bottom:R.bottom-F.bottom+x.bottom,left:F.left-R.left+x.left,right:R.right-F.right+x.right}}var er=Math.min,tr=Math.max;function _o(t,e,o){return tr(t,er(e,o))}var Wo=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:s=0}=t??{},{x:i,y:r,placement:a,rects:n,platform:d}=e;if(o==null)return{};let p=ws(s),h={x:i,y:r},u=Ot(a),b=ro(a),v=Xo(u),x=await d.getDimensions(o),S=u==="y"?"top":"left",F=u==="y"?"bottom":"right",R=n.reference[v]+n.reference[u]-h[u]-n.floating[v],O=h[u]-n.reference[u],T=await(d.getOffsetParent==null?void 0:d.getOffsetParent(o)),Q=T?u==="y"?T.clientHeight||0:T.clientWidth||0:0;Q===0&&(Q=n.floating[v]);let et=R/2-O/2,de=p[S],ze=Q-x[v]-p[F],k=Q/2-x[v]/2+et,V=_o(de,k,ze),pe=(b==="start"?p[S]:p[F])>0&&k!==V&&n.reference[v]<=n.floating[v];return{[u]:h[u]-(pe?k<de?de-k:ze-k:0),data:{[u]:V,centerOffset:k-V}}}}),or={left:"right",right:"left",bottom:"top",top:"bottom"};function io(t){return t.replace(/left|right|bottom|top/g,e=>or[e])}function sr(t,e,o){o===void 0&&(o=!1);let s=ro(t),i=Ot(t),r=Xo(i),a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=io(a)),{main:a,cross:io(a)}}var ir={start:"end",end:"start"};function ys(t){return t.replace(/start|end/g,e=>ir[e])}var rr=["top","right","bottom","left"],wn=rr.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Tt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:s,middlewareData:i,rects:r,initialPlacement:a,platform:n,elements:d}=e,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...x}=t,S=Nt(s),F=u||(S===a||!v?[io(a)]:function(k){let V=io(k);return[ys(k),V,ys(V)]}(a)),R=[a,...F],O=await Ho(e,x),T=[],Q=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&T.push(O[S]),h){let{main:k,cross:V}=sr(s,r,await(n.isRTL==null?void 0:n.isRTL(d.floating)));T.push(O[k],O[V])}if(Q=[...Q,{placement:s,overflows:T}],!T.every(k=>k<=0)){var et,de;let k=((et=(de=i.flip)==null?void 0:de.index)!=null?et:0)+1,V=R[k];if(V)return{data:{index:k,overflows:Q},reset:{placement:V}};let pe="bottom";switch(b){case"bestFit":{var ze;let At=(ze=Q.map(tt=>[tt,tt.overflows.filter(Je=>Je>0).reduce((Je,wo)=>Je+wo,0)]).sort((tt,Je)=>tt[1]-Je[1])[0])==null?void 0:ze[0].placement;At&&(pe=At);break}case"initialPlacement":pe=a}if(s!==pe)return{reset:{placement:pe}}}return{}}}};var Lt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:s}=e,i=await async function(r,a){let{placement:n,platform:d,elements:p}=r,h=await(d.isRTL==null?void 0:d.isRTL(p.floating)),u=Nt(n),b=ro(n),v=Ot(n)==="x",x=["left","top"].includes(u)?-1:1,S=h&&v?-1:1,F=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:O,alignmentAxis:T}=typeof F=="number"?{mainAxis:F,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...F};return b&&typeof T=="number"&&(O=b==="end"?-1*T:T),v?{x:O*S,y:R*x}:{x:R*x,y:O*S}}(e,t);return{x:o+i.x,y:s+i.y,data:i}}}};function ar(t){return t==="x"?"y":"x"}var Ct=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:s,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:F=>{let{x:R,y:O}=F;return{x:R,y:O}}},...d}=t,p={x:o,y:s},h=await Ho(e,d),u=Ot(Nt(i)),b=ar(u),v=p[u],x=p[b];if(r){let F=u==="y"?"bottom":"right";v=_o(v+h[u==="y"?"top":"left"],v,v-h[F])}if(a){let F=b==="y"?"bottom":"right";x=_o(x+h[b==="y"?"top":"left"],x,x-h[F])}let S=n.fn({...e,[u]:v,[b]:x});return{...S,data:{x:S.x-o,y:S.y-s}}}}};function Rs(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function re(t){if(t==null)return window;if(!Rs(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function Z(t){return re(t).getComputedStyle(t)}function ie(t){return Rs(t)?"":t?(t.nodeName||"").toLowerCase():""}function ks(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function G(t){return t instanceof re(t).HTMLElement}function lt(t){return t instanceof re(t).Element}function ct(t){return typeof ShadowRoot>"u"?!1:t instanceof re(t).ShadowRoot||t instanceof ShadowRoot}function no(t){let{overflow:e,overflowX:o,overflowY:s}=Z(t);return/auto|scroll|overlay|hidden/.test(e+s+o)}function nr(t){return["table","td","th"].includes(ie(t))}function Ss(t){let e=/firefox/i.test(ks()),o=Z(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function Ns(){return!/^((?!chrome|android).)*safari/i.test(ks())}var Fs=Math.min,It=Math.max,ao=Math.round;function Me(t,e,o){var s,i,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),d=1,p=1;e&&G(t)&&(d=t.offsetWidth>0&&ao(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&ao(n.height)/t.offsetHeight||1);let h=lt(t)?re(t):window,u=!Ns()&&o,b=(n.left+(u&&(s=(i=h.visualViewport)==null?void 0:i.offsetLeft)!=null?s:0))/d,v=(n.top+(u&&(r=(a=h.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/d,S=n.height/p;return{width:x,height:S,top:v,right:b+x,bottom:v+S,left:b,x:b,y:v}}function we(t){return(e=t,(e instanceof re(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function lo(t){return lt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Os(t){return Me(we(t)).left+lo(t).scrollLeft}function lr(t,e,o){let s=G(e),i=we(e),r=Me(t,s&&function(d){let p=Me(d);return ao(p.width)!==d.offsetWidth||ao(p.height)!==d.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(s||!s&&o!=="fixed")if((ie(e)!=="body"||no(i))&&(a=lo(e)),G(e)){let d=Me(e,!0);n.x=d.x+e.clientLeft,n.y=d.y+e.clientTop}else i&&(n.x=Os(i));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function Ts(t){return ie(t)==="html"?t:t.assignedSlot||t.parentNode||(ct(t)?t.host:null)||we(t)}function Us(t){return G(t)&&Z(t).position!=="fixed"?function(e){let{offsetParent:o}=e,s=e,i=!1;for(;s&&s!==o;){let{assignedSlot:r}=s;if(r){let a=r.offsetParent;if(Z(r).display==="contents"){let n=r.hasAttribute("style"),d=r.style.display;r.style.display=Z(s).display,a=r.offsetParent,r.style.display=d,n||r.removeAttribute("style")}s=r,o!==a&&(o=a,i=!0)}else if(ct(s)&&s.host&&i)break;s=ct(s)&&s.host||s.parentNode}return o}(t):null}function Yo(t){let e=re(t),o=Us(t);for(;o&&nr(o)&&Z(o).position==="static";)o=Us(o);return o&&(ie(o)==="html"||ie(o)==="body"&&Z(o).position==="static"&&!Ss(o))?e:o||function(s){let i=Ts(s);for(ct(i)&&(i=i.host);G(i)&&!["html","body"].includes(ie(i));){if(Ss(i))return i;{let r=i.parentNode;i=ct(r)?r.host:r}}return null}(t)||e}function Bs(t){if(G(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Me(t);return{width:e.width,height:e.height}}function Ls(t){let e=Ts(t);return["html","body","#document"].includes(ie(e))?t.ownerDocument.body:G(e)&&no(e)?e:Ls(e)}function Cs(t,e){var o;e===void 0&&(e=[]);let s=Ls(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=re(s),a=i?[r].concat(r.visualViewport||[],no(s)?s:[]):s,n=e.concat(a);return i?n:n.concat(Cs(a))}function Qs(t,e,o){return e==="viewport"?kt(function(s,i){let r=re(s),a=we(s),n=r.visualViewport,d=a.clientWidth,p=a.clientHeight,h=0,u=0;if(n){d=n.width,p=n.height;let b=Ns();(b||!b&&i==="fixed")&&(h=n.offsetLeft,u=n.offsetTop)}return{width:d,height:p,x:h,y:u}}(t,o)):lt(e)?function(s,i){let r=Me(s,!1,i==="fixed"),a=r.top+s.clientTop,n=r.left+s.clientLeft;return{top:a,left:n,x:n,y:a,right:n+s.clientWidth,bottom:a+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}(e,o):kt(function(s){var i;let r=we(s),a=lo(s),n=(i=s.ownerDocument)==null?void 0:i.body,d=It(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=It(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),h=-a.scrollLeft+Os(s),u=-a.scrollTop;return Z(n||r).direction==="rtl"&&(h+=It(r.clientWidth,n?n.clientWidth:0)-d),{width:d,height:p,x:h,y:u}}(we(t)))}function cr(t){let e=Cs(t),o=["absolute","fixed"].includes(Z(t).position)&&G(t)?Yo(t):t;return lt(o)?e.filter(s=>lt(s)&&function(i,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(i.contains(r))return!0;if(a&&ct(a)){let n=r;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(s,o)&&ie(s)!=="body"):[]}var dr={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:s,strategy:i}=t,r=[...o==="clippingAncestors"?cr(e):[].concat(o),s],a=r[0],n=r.reduce((d,p)=>{let h=Qs(e,p,i);return d.top=It(h.top,d.top),d.right=Fs(h.right,d.right),d.bottom=Fs(h.bottom,d.bottom),d.left=It(h.left,d.left),d},Qs(e,a,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:s}=t,i=G(o),r=we(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((i||!i&&s!=="fixed")&&((ie(o)!=="body"||no(r))&&(a=lo(o)),G(o))){let d=Me(o,!0);n.x=d.x+o.clientLeft,n.y=d.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:lt,getDimensions:Bs,getOffsetParent:Yo,getDocumentElement:we,getElementRects:t=>{let{reference:e,floating:o,strategy:s}=t;return{reference:lr(e,Yo(o),s),floating:{...Bs(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Z(t).direction==="rtl"};var co=(t,e,o)=>xs(t,e,{platform:dr,...o});var Is=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:_e,classNames:Ln,createRef:pr}=omii,po,Es,Et,Ko,Xe,q=class extends g{constructor(){super(...arguments);m(this,po);m(this,Et);l(this,"slotRef",pr());m(this,Xe,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props,i=c(this,Et,Ko);if(i){let r=this.$(`.${this.type}-arrow`);co(i,this.$element,{strategy:s,placement:e,middleware:[Tt(),Ct(),Lt(o),Wo({element:r})]}).then(({x:a,y:n,placement:d,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:h,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[d.split("-")[0]];r&&Object.assign(r.style,{left:h!=null?`${h}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){f(this,Xe,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){f(this,Xe,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){c(this,Xe)?this.hide():this.show()}installed(){let e=c(this,Et,Ko),{triggerShow:o,triggerHide:s}=this.$props;e&&(o.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),s.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),c(this,Xe)&&this.hide()})}))}render(e){let{placement:o,header:s,body:i}=this.$props;return _e(_e.f,null,_e("slot",{ref:this.slotRef,tabIndex:!0}),_e("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},_e("div",{class:"popover-arrow"}),_e("slot",{name:"header",class:"popover-header"},s),_e("slot",{class:"popover-body",name:"body"},i)))}};po=new WeakSet,Es=function(){return this.slotRef.current},Et=new WeakSet,Ko=function(){let e=c(this,po,Es).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},Xe=new WeakMap,l(q,"css",[()=>y("reboot","utilities","transitions","popover"),Is]),l(q,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(q,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var $s=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var uo=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:L,classNames:ur}=omii,Vs=t=>t?.type?.indexOf("image")==0,fr=t=>Vs(t)?(t.url=t.url??uo(t.file),L("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):L("div",{className:"file"},L("oi-icon",{"view-box":"1024",name:Yt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),L("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),Ds=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return L("div",{className:"pictures"},L("div",{class:"row row-cols-auto g-4"},e.map((i,r)=>L("div",{className:"col",key:`file-${r}`},L("div",{class:"card",onClick:()=>{t.open(r)}},fr(i),L("div",{className:"actions"},L("div",{class:"position-absolute top-50 start-50 translate-middle"},Vs(i)&&L("oi-icon",{name:"search"}),L("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(s||e.length==0)&&L("div",{className:"col selector-col",key:"selector"},L("div",{class:"card selector"},L("label",{class:ur("selector",{multiple:s}),title:o,onClick:()=>{t.open()}},L("oi-icon",{name:"add"}))))))};var{h:A,classNames:_n}=omii,zs=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return A("div",{className:"files"},A("slot",{name:"actions"},A("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),A("table",{class:"table"},A("tbody",null,e.map(i=>A("tr",null,A("td",null,A("oi-icon",{"view-box":"1024",name:Yt(i.ext),type:"file-type"}),i.name,i.ext),A("td",null,Uo(i.size)),A("td",null,A("oi-icon",{name:"delete"})))))))};var{h:fo,classNames:Wn}=omii,hr={pictures:Ds,files:zs},ho={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},He,ae=class extends g{constructor(){super(...arguments);m(this,He,-1)}static get STATUS(){return ho}open(e=-1){f(this,He,e),this.$("#files").click(),this.fire("open",{index:e})}remove(e){this.$props.files?.splice(e,1),this.updateSelf(),this.fire("remove",{index:e})}select(e){let{multiple:o,files:s,autoUpload:i}=this.$props;if(e?.length==0)return!1;if(o||s.splice(0,s.length),c(this,He)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Ht(a.name),ext:Xt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.splice(c(this,He),1,...r),this.fire("replaced",{index:c(this,He),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Ht(a.name),ext:Xt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),i===!0&&this.upload()}refresh(){this.forceUpdate()}upload(){let{files:e,action:o,withCredentials:s,headers:i}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==ho.NONE||a.status==ho.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=s,typeof i=="function"&&(i=i()),typeof i=="object")for(let d in i)n.setRequestHeader(d,i[d]);n.send(a),n.onreadystatechange=d=>{if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=n.responseText;try{p=JSON.parse(p)}catch(h){console.error(h)}this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=ho.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,d)},n.upload.onprogress=d=>{if(d.lengthComputable){let p=Math.ceil(d.loaded/d.total*100);r.progress=p,this.fire("progress",{file:r,loaded:d.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:s}=this.$props;return fo(fo.f,null,fo("slot",null,hr[s]),fo("input",{id:"files",type:"file",multiple:e,accept:o,onChange:i=>{this.select(i.target.files)}}))}};He=new WeakMap,l(ae,"creatPreviewUrl",uo),l(ae,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),$s]),l(ae,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(ae,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Js=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var mr="transitionend";var js=t=>{t.dispatchEvent(new Event(mr))},gr=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Ps=t=>{if(!gr(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let s=t.closest("summary");if(s&&s.parentNode!==o||s===null)return!1}return e};var{h:J,classNames:As,extractClass:br}=omii;var vr="carousel-item-end",yr="carousel-item-start",xr="carousel-item-next",wr="carousel-item-prev",Sr=".active",Fr=".carousel-item",pl=Sr+Fr,We,ne,$t,Fe,Se=class extends g{constructor(){super(...arguments);m(this,We,0);m(this,ne,!1);m(this,$t,[]);m(this,Fe,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return c(this,We)}get isSliding(){return c(this,ne)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){c(this,ne)&&js(this),clearInterval(c(this,Fe)),f(this,Fe,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(c(this,ne))return!1;let{$activeItem:o,$items:s,$props:{duration:i}}=this,r=s.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=s.indexOf(n),e=a>r):typeof e=="number"?(a=(e+s.length)%s.length,n=s[a],e=a>r):(a=(r+1)%s.length,e||(a=(r-1+s.length)%s.length),n=s[a]),c(this,We)==a)return!1;let d=e?yr:vr,p=e?xr:wr;f(this,ne,!0);let h=Number.parseFloat(o.getAttribute("waiting"))??0;z(n,[{classNames:[],duration:h},{classNames:[p],callback:()=>{Wt(n)}},{classNames:[p,d],duration:i},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),z(o,[{classNames:[],duration:h},{classNames:[d,"active"],duration:i},{classNames:[],callback:()=>{f(this,ne,!1),f(this,We,a);let u;for(;u=c(this,$t).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Ps(this)&&this.slide()}cycle(){c(this,Fe)&&clearInterval(c(this,Fe)),f(this,Fe,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),f(this,We,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(c(this,ne)?c(this,$t).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:s,prevCtrl:i,indicator:r}=this.$props;return J("div",{...br(e,"carousel")},J("slot",{class:"carousel-inner"},o.map(a=>J("div",{className:As("carousel-item"),waiting:a.attributes?.waiting},a))),J("div",{class:"carousel-indicators"},J("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),J("slot",{name:"actions"},typeof s=="function"&&s(this),typeof i=="function"&&i(this)))}};We=new WeakMap,ne=new WeakMap,$t=new WeakMap,Fe=new WeakMap,l(Se,"css",[()=>y("reboot","utilities","carousel"),Js]),l(Se,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>J("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},J("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),J("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>J("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},J("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),J("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>J("button",{type:"button",onClick:s=>o.slide(e),class:As({active:e==0})})}),l(Se,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Zo,classNames:hl,extractClass:Ur}=omii,Ue=class extends g{css(){}render(t){let{text:e,desc:o,position:s}=this.$props,i=s?s.split("-"):[];return Zo("span",{...Ur(t,"badge",{"position-absolute":s,"top-0":i.includes("top"),"start-100":i.includes("right"),"start-0":i.includes("left"),"top-100":i.includes("bottom"),"translate-middle":s,"rounded-pill":s})},Zo("slot",null,e),o&&Zo("span",{class:"visually-hidden"},o))}};l(Ue,"css",()=>y("reboot","utilities","badge")),l(Ue,"defaultProps",{text:"",desc:!1,position:!1}),l(Ue,"propTypes",{});var Ms=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:dt,classNames:xl,extractClass:Br}=omii,Qe,Be=class extends g{constructor(){super(...arguments);m(this,Qe,!0)}get closed(){return c(this,Qe)}close(){f(this,Qe,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){f(this,Qe,!1),this.update(),B.fade.show(this)}install(){f(this,Qe,!this.$props.visible)}render(e){return dt("div",{...Br(e,"toast",{show:!c(this,Qe)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},dt("div",{class:"toast-header"},dt("slot",{name:"header"}),dt("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),dt("div",{class:"toast-body"},dt("slot",null)))}};Qe=new WeakMap,l(Be,"css",[()=>y("reboot","utilities","toasts","close"),Ms]),l(Be,"defaultProps",{visible:!1}),l(Be,"propTypes",{visible:Boolean});var{h:Go,classNames:Qr,extractClass:Rl}=omii,Re=class extends g{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:s,max:i,showPercent:r,striped:a,animated:n,style:d,className:p}=this.$props;return Go("div",{class:"progress",style:d},Go("div",{class:Qr("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":s,"aria-valuemax":i},r&&Go("span",null,o,"%")))}};l(Re,"css",()=>y("reboot","utilities","progress")),l(Re,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(Re,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var _s=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:pt,classNames:Cl,createRef:Il}=omii,mo=class extends q{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return pt(pt.f,null,pt("slot",{ref:this.slotRef}),pt("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},pt("div",{class:"tooltip-arrow"}),pt("slot",{class:"tooltip-inner",name:"body"},o)))}},Ye=mo;l(Ye,"css",[()=>y("reboot","utilities","transitions","tooltip"),_s]),l(Ye,"defaultProps",{...gt(mo,mo,"defaultProps"),offset:0});var Xs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:ke,classNames:Jl,createRef:ut}=omii,M,le,_,Ke,Ze,go,Ne=class extends g{constructor(){super(...arguments);m(this,M,ut());m(this,le,ut());m(this,_,ut());m(this,Ke,ut());m(this,Ze,ut());m(this,go,ut())}close(e,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(c(this,_).current),c(this,le).current.style.height=this.clientHeight-c(this,M).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(c(this,_).current),c(this,le).current.style.height=this.clientHeight-c(this,M).current.clientHeight-c(this,_).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(c(this,M).current),c(this,le).current.style.height=this.clientHeight-c(this,_).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(c(this,M).current),c(this,le).current.style.height=this.clientHeight-c(this,M).current.scrollHeight-c(this,_).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(c(this,Ke).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(c(this,Ke).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(c(this,Ze).current)}openRight(){this.$props.openRight=!0,B.collapse.show(c(this,Ze).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=c(this,M).current.getBoundingClientRect(),s=c(this,_).current.getBoundingClientRect();c(this,le).current.style.height=e.height-o.height-s.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:s,openRight:i}=this.$props;e||(c(this,_).current.style.height=0),o||(c(this,M).current.style.height=0),s||(c(this,Ke).current.style.height=0),i||(c(this,Ze).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return ke(ke.f,null,ke("slot",{name:"header",ref:c(this,M)}),ke("main",{ref:c(this,le)},ke("slot",{name:"left",ref:c(this,Ke),class:"collapse-horizontal"}),ke("slot",{name:"content",ref:c(this,go)}),ke("slot",{name:"right",ref:c(this,Ze),class:"collapse-horizontal"})),ke("slot",{name:"footer",ref:c(this,_)}))}};M=new WeakMap,le=new WeakMap,_=new WeakMap,Ke=new WeakMap,Ze=new WeakMap,go=new WeakMap,l(Ne,"css",[Xs]),l(Ne,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(Ne,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Hs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:qo,classNames:Yl,uniqueTag:Rr}=omii,ee,Oe=class extends g{constructor(){super(...arguments);m(this,ee,void 0)}get $module(){return c(this,ee)}load(e,o,s,i){o=o??this.$props.module,s=s??this.$props.loading,i=i??this.$props.loadError,f(this,ee,s),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)f(this,ee,i);else if(typeof a=="function"){let n=Rr(a);f(this,ee,qo(n,null))}else f(this,ee,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),f(this,ee,i),this.updateSelf()})}install(){let{src:e,module:o,loading:s,loadError:i}=this.$props;this.load(e,o,s,i)}render(e){return c(this,ee)}};ee=new WeakMap,l(Oe,"css",[Hs]),l(Oe,"defaultProps",{src:null,module:"default",loading:qo("oi-loading",{size:"6"}),loadError:qo("h1",null,"Module Load Error")}),l(Oe,"propTypes",{src:String,module:String});var Ws=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Te,classNames:tc,createRef:Ys,extractClass:kr}=omii,te,Le=class extends g{constructor(){super(...arguments);l(this,"offcanvasRef",Ys());l(this,"backdropRef",Ys());m(this,te,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(c(this,te))return;f(this,te,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;z(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){c(this,te)?this.hide():this.show()}open(){this.show()}hide(){if(!c(this,te))return;f(this,te,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;z(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){f(this,te,this.$props.visible)}render(e){let{visible:o,placement:s,position:i,title:r,useBackdrop:a}=this.$props;return Te(Te.f,null,Te("div",{ref:this.offcanvasRef,...kr(e,"offcanvas",`offcanvas-${s}`,`position-${i}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Te("div",{class:"offcanvas-header"},Te("slot",{name:"title",class:"offcanvas-title h5"},r),Te("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Te("slot",{class:"offcanvas-body"})),a&&c(this,te)&&Te("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};te=new WeakMap,l(Le,"css",[()=>y("reboot","offcanvas","utilities","close"),Ws]),l(Le,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Le,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:lc,classNames:cc,extractClass:dc,createRef:pc}=omii;function Gs(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let s in e)s!=="valid"&&e[s]===!0&&o.push(s);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function Ks(t){let e=t.currentTarget;e.checkValidity(),Gs(t.target),e.classList.add("was-validated")}function qs(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(s=>{Gs(s)}),t.classList.add("was-validated"),o.every(s=>s.checkValidity?s.checkValidity():!0)&&e}function Zs(t){let e=t.target;e.removeEventListener("input",Ks),e.addEventListener("input",Ks,!1),qs(e)||(t.preventDefault(),t.stopPropagation())}var ft=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",Zs),e.addEventListener("submit",Zs,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return qs(this)}connectedCallback(){this.constructor.validate(this)}};var ei=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:bo,classNames:hc,createRef:ti}=omii,oe=null;document.addEventListener("click",t=>{oe&&oe.hide()});var Dt,zt,ce,Ge,qe,Vt,ht,Ce=class extends g{constructor(){super(...arguments);m(this,ce);m(this,qe);m(this,Dt,ti());m(this,zt,ti());m(this,ht,!1)}get $menu(){return c(this,Dt).current}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props;co(c(this,qe,Vt),this.$menu,{strategy:s,placement:e,middleware:[Tt(),Ct(),Lt(o)]}).then(({x:i,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${i}px`,top:`${r}px`})})}show(){f(this,ht,!0),c(this,ce,Ge).focus(),c(this,ce,Ge).setAttribute("aria-expanded",!0),c(this,ce,Ge).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),oe=this,this.setPosition()}hide(){f(this,ht,!1),c(this,ce,Ge).classList.remove("show"),c(this,ce,Ge).setAttribute("aria-expanded","false"),oe=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){c(this,ht)?this.hide():this.show()}installed(){let{trigger:e}=this.$props;e=="click"?c(this,qe,Vt).addEventListener("click",o=>{oe&&oe!=this&&oe.hide(),o.preventDefault(),o.stopImmediatePropagation(),this.toggle()}):e=="focus"&&(c(this,qe,Vt).addEventListener("focus",o=>{oe&&oe!=this&&oe.hide(),o.preventDefault(),o.stopImmediatePropagation(),this.show()}),c(this,qe,Vt).addEventListener("blur",o=>{o.preventDefault(),o.stopImmediatePropagation(),this.hide()})),this.addEventListener("click",o=>{o.stopImmediatePropagation()})}render(e){let{menu:o}=this.$props;return bo(bo.f,null,bo("slot",{ref:c(this,zt)}),bo("slot",{name:"menu",ref:c(this,Dt)},o))}};Dt=new WeakMap,zt=new WeakMap,ce=new WeakSet,Ge=function(){return c(this,zt).current},qe=new WeakSet,Vt=function(){let e=c(this,ce,Ge).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},ht=new WeakMap,l(Ce,"css",[()=>y("reboot","utilities","transitions","dropdown"),ei]),l(Ce,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Ce,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var oi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:Nr,Component:Sc}=omii,vo,Ie=class extends g{constructor(){super(...arguments);m(this,vo,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:s,fontSize:i}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{f(this,vo,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:s,fontSize:i,minimap:{enabled:!1}})})}render(){return Nr("div",{class:"coder"})}};vo=new WeakMap,l(Ie,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,s=new CSSStyleSheet;return s.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,s],fetch(new URL("./monaco/index.css",e).href).then(i=>i.text())},oi]),l(Ie,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(Ie,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var si=`
:host .selected {
  width: 100%;
}
:host .selected .value {
  border: none;
}
:host .selected .value:focus {
  border: none;
  outline: none;
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
:host .dropdown-menu.searching li {
  display: none;
}
:host .dropdown-menu.searching li.match {
  display: block;
}
:host .dropdown-menu li {
  list-style: none;
  border-bottom: solid 1px #ccc;
}
:host .dropdown-menu li > div.form-check {
  padding: 0.375em 0 0.375em 2em;
}
:host .dropdown-menu li > div.form-check .form-check-input {
  margin-top: 0.45em;
}
:host .dropdown-menu li:last-child {
  border-bottom: none;
}
:host .dropdown-menu li.active {
  background-color: aliceblue;
}
:host .dropdown-menu li:hover {
  background-color: aliceblue;
}
:host .dropdown-menu li .form-check-label {
  margin-left: 0.5rem;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFFQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBT0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7O0FBRUE7RUFDSTs7QUFLWjtFQUNJO0VBRUE7O0FBRUE7RUFDSTs7QUFFQTtFQUNJOztBQUtSO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0kifQ== */`;var{h:E,classNames:ii,extractClass:kc}=omii,mt,X,N,Ee=class extends g{constructor(){super(...arguments);m(this,mt,!1);m(this,X,void 0);m(this,N,!1)}get value(){return this.$props.value}set value(e){this.$props.value=e}get validity(){let{required:e,values:o,min:s,max:i,multiple:r}=this.$props,a={valid:!0};return e&&(r&&(!o||o.length==0)||this.value==null||this.value=="")&&(a.valid=!1,a.valueMissing=!0),a.valid&&r&&(s!=0&&s>o.length&&(a.valid=!1,a.rangeUnderflow=!0),i!=0&&i<o.length&&(a.valid=!1,a.rangeOverflow=!0)),a}checkValidity(){f(this,mt,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}hideOptions(){this.$("oi-dropdown").hide()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",o=>{this.showOptions()}),this.addEventListener("blur",o=>{f(this,N,!1),f(this,X,null),this.hideOptions(),this.updateSelf()});let{options:e}=this.$props;this.addEventListener("keydown",o=>{if(["Enter","ArrowUp","ArrowDown"].includes(o.key))o.preventDefault(),o.stopPropagation();else return!1;let i=c(this,X)?this.$$("li.option.match"):this.$$("li.option");if(i.length){i.forEach((a,n)=>{a.classList.contains("active")&&f(this,N,n),a.classList.remove("active")}),o.key=="Enter"?(c(this,N)===!1&&f(this,N,0),f(this,X,null),this.hideOptions()):o.key=="ArrowUp"?c(this,N)===!1?f(this,N,i.length-1):c(this,N)>0&&Fo(this,N)._--:o.key=="ArrowDown"&&(c(this,N)===!1?f(this,N,0):c(this,N)<i.length-1&&Fo(this,N)._++);let r=i[c(this,N)];if(r){r.classList.add("active");let a=e.at(r.dataset.index);this.toggleOption(a,!1)}}})}toggleOption(e,o=!0){let{values:s,multiple:i}=this.$props;if(i){let r=s.indexOf(e.value);r==-1?s.push(e.value):s.splice(r,1)}else this.value=e.value,o&&this.hideOptions();f(this,X,null),this.updateSelf(),c(this,mt)&&this.checkValidity(),this.fire("change",i?{value:this.value}:{values:s})}render(){let{values:e,value:o,searchable:s,options:i,preserveOrder:r,createSelected:a,createOption:n,multiple:d}=this.$props;return n=n.bind(this),a=a.bind(this),e=e??[],r&&d&&e.sort((p,h)=>i.findIndex(u=>u.value==p)-i.findIndex(u=>u.value==h)),i=i??[],E("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},d?E("div",{class:"selected d-flex",onClick:p=>{p.stopImmediatePropagation()}},"\xA0",E("ul",{class:"values flex-grow-1"},e.map((p,h)=>{let u=i.find(b=>b.value==p);if(u)return a(u,h)})),E("div",{class:"expander",onClick:p=>{this.showOptions()}})):E("div",{className:"selected d-flex",onClick:p=>{p.stopImmediatePropagation()}},E("input",{className:"value  flex-grow-1",readOnly:!s,value:c(this,X)??i.find(p=>p.value==o)?.text,onFocus:p=>{this.showOptions()},onInput:p=>{f(this,X,p.target.value),f(this,N,!1),this.updateSelf()}}),E("div",{class:"expander",onClick:p=>{this.showOptions()}})),E("ul",{className:ii("dropdown-menu",{searching:c(this,X),multiple:d}),slot:"menu"},i.map((p,h)=>E("li",{"data-index":h,className:ii("option",{match:p.text.includes(c(this,X)),active:d?e.includes(p.value):o==p.value}),onClick:u=>{this.toggleOption(p)}},n(p,h)))))}};mt=new WeakMap,X=new WeakMap,N=new WeakMap,l(Ee,"css",[()=>y("reboot","utilities","forms","scrollbar"),si]),l(Ee,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,searchable:Boolean,min:Number,max:Number}),l(Ee,"defaultProps",{options:[],values:[],value:null,multiple:!0,required:!1,searchable:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:s,multiple:i}=this.$props;return E("div",{class:"form-check d-flex"},i&&E("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:s.includes(e.value)}),E("label",{class:"form-check-label flex-grow-1"},e.text))},createSelected(e,o){let{values:s}=this.$props;return E("li",{onClick:i=>{i.stopImmediatePropagation()}},e.text,E("oi-bi",{name:"x",onClick:i=>{s.splice(o,1),this.updateSelf(),i.stopPropagation(),c(this,mt)&&this.checkValidity()}}))}});var ri=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:$,classNames:Ec,extractClass:Or}=omii,$e=class extends g{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:s,dataCellFormatter:i,height:r}=this.$props,a=Or(this.$props)?.class??"";return $("div",{className:"table-container",style:{height:r}},$("table",{className:`table ${a}`},$("thead",null,o&&$("tr",null,t?.map(n=>$("th",{style:n.titleStyle,scope:"col"},s(n,t,e,this)))),$("slot",{name:"header"})),$("tbody",null,e?.map((n,d)=>$("tr",null,t.map(p=>$("td",{style:p.style},i(p,n,d,e,this)))))),$("tfoot",null,$("slot",{name:"footer"}))))}};l($e,"css",[()=>y("reboot","utilities","tables"),ri]),l($e,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,s){if(t.type=="checkbox"){t.checked||(t.checked=[]);let i=o?.map(a=>a[t.field])??[],r=i.every(a=>t.checked.includes(a));return $("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...i);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),d=new Set(i.filter(p=>!n.has(p)));t.checked.splice(0,t.checked.length,...d)}await s.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,s,i){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),$("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await i.updateSelf()}});case"radio":return $("input",{type:"radio"});default:return r}},height:"auto"}),l($e,"propTypes",{showHeader:Boolean});var ai=`
:host {
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
}
:host .editor {
  height: 100%;
  width: 100%;
}
:host .tox-statusbar__branding {
  display: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0aW55bWNlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVKO0VBQ0kifQ== */`;var{h:Tr,classNames:Pc,extractClass:Ac}=omii,ni=!0,li=new URL("./tinymce/",import.meta.url).href,ci="./tinymce.js",Jt,yo,xo,jt,Ve=class extends g{constructor(){super(...arguments);m(this,Jt,void 0);m(this,yo,void 0);m(this,xo,!1);m(this,jt,!1)}static get min(){return ni}static set min(e){ni=e}static get root(){return li}static set root(e){li=e}static get jsFile(){return ci}static set jsFile(e){ci=e}get value(){return this.$props.value}set value(e){if(this.$props.value=e,this.editor&&c(this,jt))try{this.editor.setContent(e)}catch{console.log("editor not init")}}get editor(){return c(this,Jt)}css(){return c(this,yo)}get validity(){let{required:e}=this.$props,o={valid:!0};return e&&value==""&&(o.valid=!1,o.valueMissing=!0),o}checkValidity(){f(this,xo,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}get editorId(){return`editor${this.elementId}`}async installed(){await import(new URL(this.constructor.jsFile,this.constructor.root).href);let e=this.$(`#${this.editorId}`),{menu:o,menubar:s,toolbar:i,plugins:r,language:a,toolbarMode:n,baseUrl:d,inline:p,contentStyle:h,contentCss:u,fontFamilyFormats:b,blockFormats:v,fontSizeFormats:x,lineHeightFormats:S,indentUseMargin:F,indentation:R,styleFormats:O,styleFormatsMerge:T,colorCols:Q,colorMap:et,imagesUploadUrl:de,imagesUploadHandler:ze,imagesUploadBasePath:k,imagesUploadCredentials:V,imagesReuseFilename:pe,imagesFileTypes:At,automaticUploads:tt,filePickerTypes:Je,filePickerCallback:wo,templates:fi,importcssGroups:hi,importcssAppend:mi}=this.$props;tinymce.init({target:e,promotion:!1,base_url:d??this.constructor.root,menu:o,menubar:s,toolbar:i,toolbar_mode:n,plugins:r,language:a,inline:p,extended_valid_elements:"oi-icon[name|color|size]",custom_elements:"oi-icon",content_css:u,content_style:h,font_family_formats:b,block_formats:v,font_size_formats:x,line_height_formats:S,indent_use_margin:F,indentation:R,style_formats:O,style_formats_merge:T,color_cols:Q,color_map:et,images_upload_url:de,images_upload_handler:ze,images_upload_base_path:k,images_upload_credentials:V,images_reuse_filename:pe,images_file_types:At,automatic_uploads:tt,file_picker_types:Je,file_picker_callback:wo,importcss_groups:hi,templates:fi,importcss_append:mi,setup:Mt=>{f(this,Jt,Mt),Mt.on("init",gi=>{f(this,jt,!0)}),Mt.on("change",gi=>{this.$props.value=Mt.getContent(),this.fire("change",{value:this.value})})}})}render(){return Tr("textarea",{class:"editor",id:this.editorId,value:this.value,placeholder:this.placeholder})}};Jt=new WeakMap,yo=new WeakMap,xo=new WeakMap,jt=new WeakMap,l(Ve,"css",ai),l(Ve,"propTypes",{value:String,placeholder:String,required:Boolean,inline:Boolean}),l(Ve,"defaultProps",{value:"",placeholder:"...",required:!1,language:"zh-Hans",directionality:null,plugins:"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",toolbar:"undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage  quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print",toolbarSticky:!0,toolbarMode:"wrap",menu:null,menubar:!1,inline:!1,contentCss:null,contentStyle:null,blockFormats:"Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",fontFamilyFormats:"\u5B8B\u4F53=\u5B8B\u4F53;\u4EFF\u5B8B=\u4EFF\u5B8B;\u6977\u4F53=\u6977\u4F53;\u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;\u9ED1\u4F53=\u9ED1\u4F53;\u96B6\u4E66=\u96B6\u4E66;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",fontSizeFormats:null,lineHeightFormats:null,indentation:null,indentUseMargin:!1,styleFormatsMerge:!0,styleFormats:null,colorCols:5,colorMap:null,imagesUploadUrl:null,imagesUploadHandler:null,imagesUploadBasePath:null,imagesUploadCredentials:!1,imagesReuseFilename:!1,imagesFileTypes:null,automaticUploads:!0,filePickerTypes:null,filePickerCallback:null,templates:null,importcssAppend:!0,importcssGroups:[{title:"Table styles",filter:/^(td|tr)\./},{title:"Block styles",filter:/^(div|p)\./},{title:"Other styles"}]});var di=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxlY2hhcnRzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EifQ== */`;var{h:Lr,classNames:Yc,extractClass:Kc}=omii,pi=new URL("./echarts/",import.meta.url).href,ui="echarts.esm.min.js",Pt,De=class extends g{constructor(){super(...arguments);m(this,Pt,void 0)}static get root(){return pi}static set root(e){pi=e}static get jsFile(){return ui}static set jsFile(e){ui=e}get echart(){return c(this,Pt)}async installed(){let e=await import(new URL(this.constructor.jsFile,this.constructor.root).href);f(this,Pt,e.init(this.$("main"))),this.draw()}draw(){this.echart.setOption(this.$props)}updated(){this.draw()}render(){return Lr("main",null)}};Pt=new WeakMap,l(De,"css",di),l(De,"propTypes",{}),l(De,"defaultProps",{title:null,tooltip:null,legend:[],xAxis:{},yAxis:{},series:[],width:null,height:null});var{define:w}=omii;w("oi-rate",fe);w("oi-tab",ue);w("oi-icon",P);w("oi-bi",H);w("oi-pager",Y);w("oi-tree",ge);w("oi-loading",se);w("oi-alert",be);w("oi-accordion",ve);w("oi-breadcrumb",ye);w("oi-modal",xe);w("oi-popover",q);w("oi-uploader",ae);w("oi-carousel",Se);w("oi-badge",Ue);w("oi-toast",Be);w("oi-progress",Re);w("oi-tooltip",Ye);w("oi-layout",Ne);w("oi-import",Oe);w("oi-offcanvas",Le);w("oi-pagination",me);w("oi-dropdown",Ce);w("oi-coder",Ie);w("oi-select",Ee);w("oi-table",$e);w("oi-tinymce",Ve);w("oi-echarts",De);customElements.define("oi-form",ft,{extends:"form"});var Cr=import.meta.url;omii.ui={utils:es,css:ps,effect:B,icon:P,tab:ue,rate:fe,pager:Y,tree:ge,treeNode:Io,loading:se,alert:be,accordion:ve,breadcrumb:ye,modal:xe,popover:q,uploader:ae,carousel:Se,badge:Ue,toast:Be,progress:Re,tooltip:Ye,layout:Ne,import:Oe,offcanvas:Le,pagination:me,form:ft,dropdown:Ce,coder:Ie,select:Ee,table:$e,importURL:Cr,sortable:ot,tinymce:Ve,echarts:De};export{ve as accordion,be as alert,H as bicon,ye as breadcrumb,Se as carousel,Ie as coder,ps as css,Ce as dropdown,De as echarts,B as effect,ft as form,P as icon,Oe as import,Cr as importURL,Ne as layout,se as loading,xe as modal,Le as offcanvas,Y as pager,me as pagination,q as popover,Re as progress,fe as rate,Ee as select,ot as sortable,ue as tab,$e as table,Ve as tinymce,Be as toast,Ye as tooltip,ge as tree,Io as treeNode,ae as uploader,es as utils};
//# sourceMappingURL=omii-ui.js.map
