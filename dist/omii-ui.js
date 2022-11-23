var mi=Object.defineProperty;var gi=Object.getPrototypeOf;var bi=Reflect.get;var vi=(t,e,o)=>e in t?mi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(vi(t,typeof e!="symbol"?e+"":e,o),o),yo=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var c=(t,e,o)=>(yo(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},f=(t,e,o,s)=>(yo(t,e,"write to private field"),s?s.call(t,o):e.set(t,o),o),xo=(t,e,o,s)=>({set _(i){f(t,e,i,o)},get _(){return c(t,e,s)}}),Pt=(t,e,o)=>(yo(t,e,"access private method"),o),mt=(t,e,o)=>bi(gi(t),o,e);var yi=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),xi=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},wi=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},At=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Mt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var Si=["B","KB","MB","GB","TB","PB"],wo=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+Si[o]},Fi=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},Bi=(t,e)=>{window.chrome.extension?t():e()},_t=t=>{t.offsetHeight},Ui=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],Xt=t=>{if(!t)return"file";t=t.toLowerCase();let e=Ui.find(o=>o[0].includes(t));return e==null?"file":e[1]};var Go={tryExtension:Bi,downloadUrl:Fi,getName:Mt,getExtension:At,cleanHTML:yi,isToday:xi,isYesterday:wi,formatSize:wo};var Qi=import.meta.url,Ri="sortable.core.esm.js",qo=new URL("./sortablejs/",Qi).href,D=null,j={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function ki({autoScroll:t,remove:e,revert:o,multiDrag:s,swap:i}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=qo){D||(D=await import(new URL(Ri,r).href)),t&&!j.AutoScroll&&(j.AutoScroll=!0,D.Sortable.mount(new D.AutoScroll));let[a,n]=D.OnSpill;return e&&!j.Remove&&(j.Remove=!0,D.Sortable.mount(a)),e&&!j.Remove&&(j.Remove=!0,D.Sortable.mount(a)),o&&!j.Remove&&(j.Revert=!0,D.Sortable.mount(n)),s&&!j.MultiDrag&&(j.MultiDrag=!0,D.Sortable.mount(new D.MultiDrag)),i&&!j.Swap&&(j.Swap=!0,D.Sortable.mount(new D.Swap)),D.Sortable}function Ni(t){qo=t}var et={use:ki,setRoot:Ni};var{define:$r,h:Vr,Component:Oi}=omii,g=class extends Oi{};var es=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:gt,Component:Ar,classNames:ts,render:Mr}=omii,de=class extends g{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},{ignoreAttrs:!0,updateSelf:!0}):this.update$Props({activeIndex:t},{ignoreAttrs:!0,updateSelf:!0}))}async render(t){let e=this.$props,o=t.items??e.items,s=[],i=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,d=a.pane;i.push(gt("div",{key:`pane-${a.key??r}`,className:ts("pane",{active:n})},d)),s.push(gt("div",{key:`nav-${a.key??r}`,className:ts("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return gt("div",{class:"tabs"},gt("div",{class:"navs"},s),gt("div",{class:"panes"},i))}};l(de,"css",es),l(de,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(de,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Je={BUNDLE:"bundle",SINGLE:"single"},bt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:Hr,h:os,Component:Yr}=omii,vt=Je.SINGLE,So=bt.FILLED,Fo=async(t,e,o)=>{e=e??So,e==bt.FILE_TYPE&&(o=Je.BUNDLE);try{if((o??vt)==Je.BUNDLE){let{default:s}=await import(`./icons/${e}.js`);return s[t]}else{let{default:s}=await import(`./icons/${e}/${t}.js`);return s}}catch{console.error("load icon error",t,e)}},Ti=async(t,e,o,s={})=>{let i=await Fo(t,e,o);return os("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...s},i)},P=class extends g{static useBundleMode(){vt=Je.BUNDLE}static useSingleMode(){vt=Je.SINGLE}static get MODES(){return Je}static get TYPES(){return bt}static get Mode(){return vt}static set Mode(t){vt=t}static get Type(){return So}static set Type(t){So=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",s=t?`${t}rem`:"var(--oi-icon-width, 1rem)",i=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,s=await Fo(t,e);return os("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},s)}};l(P,"updateOnAttributeChanged",!0),l(P,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(P,"defaultProps",{name:null,type:bt.FILLED,viewBox:24,size:null,color:null}),l(P,"createSvg",Ti),l(P,"loadIcon",Fo),l(P,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
  `);var{h:ss}=omii,Bo=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},Li=async(t,e={})=>{let o=await Bo(t);return ss("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},X=class extends g{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",s=t?`${t}rem`:"var(--oi-bi-width, 1rem)",i=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await Bo(t);return ss("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(X,"updateOnAttributeChanged",!0),l(X,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(X,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(X,"createSvg",Li),l(X,"loadIcon",Bo),l(X,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var is=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:aa,h:Uo,Component:na,classNames:Ci,render:la}=omii,Qo={STAR:"star",HALF:"star_half",BORDER:"star_border"},W,pe=class extends g{constructor(){super(...arguments);m(this,W,-1)}get rateScore(){return this.$props.score}install(){f(this,W,this.$props.score)}rate(e){this.fire("rate",e),f(this,W,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:s,rateable:i,size:r,color:a}=o,n=[],d=c(this,W);for(let p=0;p<s;p++)d-p>=.5?n.push(Qo.STAR):d-p>0?n.push(Qo.HALF):n.push(Qo.BORDER);return Uo("div",{class:Ci("rate-wrap","rate-"+c(this,W))},n.map((p,h)=>i?Uo("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),f(this,W,h+1),this.fire("tryRate",c(this,W)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),f(this,W,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(h+1)}}):Uo("oi-icon",{name:p,size:r,color:a,className:p})))}};W=new WeakMap,l(pe,"css",is),l(pe,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(pe,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var rs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:L,classNames:yt}=omii,H=class extends g{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(H,"css",rs),l(H,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:L("oi-icon",{name:"keyboard_arrow_left"}),next:L("oi-icon",{name:"keyboard_arrow_right"}),first:L("oi-icon",{name:"first_page"}),last:L("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:s}=t;return L("div",{class:yt("prev",{disable:o<=1}),onClick:i=>{o>1&&e.goto(o-1)}},s)},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return L("div",{class:yt("next",{disable:o>=i}),onClick:r=>{i>o&&e.goto(o+1)}},s)},createFirst(t,e){let{first:o,pageNum:s}=t;return L("div",{class:yt("first",{disable:s<=1}),onClick:i=>{s!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return L("div",{class:yt("last",{disable:s>=i}),onClick:r=>{s!=i&&e.goto(i)}},o)},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let d=[];a<1&&(a=1);for(let p=a;p<=n;p++)d.push(L("div",{className:yt({active:s==p,page:!0}),onClick:h=>{s!=p&&e.goto(p)}},p));return d},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return L("div",{class:"info"},L("span",{class:"curr"},o),"/",L("span",{class:"total"},s))},createJumper(t,e){return L("div",{class:"jumper"},"\u524D\u5F80",L("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:d}=t;return L("div",{class:"pager"},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),d(t,e))}}),l(H,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var as=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Wt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:Ei,define:va,h:Ii,Component:ya,setTheme:$i}=omii,ko="bootstrap";function Vi(t){ko=t,ue=new URL(`./${ko}/`,import.meta.url).href}var ue=new URL(`./${ko}/`,import.meta.url).href;function Di(t){ue=t}var Ht=(t,e=ue)=>fetch(No(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),zi=t=>Ht=t,ns=(t,e,o=ue)=>{let s=Ii("link",{rel:"styleSheet",href:No(t,o)});Ei(s,e??"body")},Ji=(t,e=ue)=>{ns("reboot",t,e)},No=(t,e=ue)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},Ro=new Map,Yt=async(t,e=ue)=>{let o=`${e}/${t}`,s=Ro.get(o);if(s===void 0){let i=[];Ro.set(o,i),s=new CSSStyleSheet;try{s.replaceSync(await Ht(t,e)),i.forEach(r=>{r(s)}),Ro.set(o,s)}catch(r){console.error("get css stylesheets error",r)}}else if(s instanceof Array)return new Promise(i=>{s.push(i)});return s},y=(...t)=>Promise.all(t.map(e=>Yt(e))),ls={};Wt.forEach(t=>{Object.defineProperty(ls,t,{get:function(){return Yt(t)}})});var ji=(t=Wt)=>{t.forEach(e=>{Yt(e)})},Pi=async(t,e=ue)=>{let o=await Ht(`theme.${t}`,e);$i(o)},z=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let s=0,i=(r=[])=>{let a=s%e.length,{classNames:n,duration:d=0,delay:p=0,callback:h=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),h&&h(t,n,d,p)},p*1e3),s++,!(Math.floor(s/e.length)>=o)&&setTimeout(()=>{i(n)},(d+p)*1e3)};i()}},cs={StyleSheets:Wt,CSSStyleSheets:ls,setBaseUrl:Di,setBaseRoot:Vi,loadStyleSheet:Ht,setStyleSheetLoader:zi,addStyleSheet:ns,addRebootStyleSheet:Ji,getStyleSheetUrl:No,getCSSStyleSheet:Yt,getCSSStyleSheets:y,useTheme:Pi,timingClassNames:z,preLoad:ji};var{h:B,classNames:xt,extractClass:Ai}=omii,tt=class extends H{},fe=tt;l(fe,"css",[()=>y("reboot","pagination","utilities"),as]),l(fe,"defaultProps",{...mt(tt,tt,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:s}=t;return B("li",{class:xt("page-item",{disabled:o<=1})},B("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i=>{o>1&&e.goto(o-1),i.preventDefault(),i.stopPropagation()}},B("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return B("li",{class:xt("page-item",{disabled:o>=i})},B("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{i>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},B("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:s}=t;return B("li",{class:xt("page-item",{disabled:s<=1})},B("a",{class:"page-link",href:"#","aria-label":"First",onClick:i=>{s!=1&&e.goto(1),i.preventDefault(),i.stopPropagation()}},B("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return B("li",{class:xt("page-item",{disabled:s>=i})},B("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{s!=i&&e.goto(i),r.preventDefault(),r.stopPropagation()}},B("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let d=[];a<1&&(a=1);for(let p=a;p<=n;p++)d.push(B("li",{key:`pager-${p}`,className:xt("page-item",{active:s==p,page:!0})},B("a",{class:"page-link",href:"#",onClick:h=>{s!=p&&e.goto(p),h.preventDefault(),h.stopPropagation()}},p)));return d},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return B("li",{class:"info page-item"},B("span",{className:"page-link"},B("span",{class:"curr"},o),"/",B("span",{class:"total"},s)))},createJumper(t,e){return B("li",{class:"jumper page-item mx-2"},B("span",{className:"page-link"},"\u524D\u5F80",B("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:d}=t;return B("nav",null,B("ul",{...Ai(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),d(t,e)))}}),l(fe,"propTypes",{...mt(tt,tt,"propTypes"),align:String});var ds=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var ps=`
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
  margin-right: 0.3rem;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBT1I7RUFDSTs7QUFRQTtFQUNJO0VBQ0E7RUFDQTs7QUFNQTtFQUNJO0VBQ0E7O0FBTVI7RUFDSTs7O0FBTWhCO0VBRUk7OztBQUdKO0VBQ0kifQ== */`;var{h:Y,classNames:Kt,define:Mi,getHost:Oo,throttle:Ta}=omii,ot,wt,Lo=class extends g{constructor(){super(...arguments);m(this,ot,void 0);m(this,wt,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get expander(){return this.node.expander??this.$props.expander??this.tree.$props.expander}get node(){return this.$props.node??{}}get nodes(){return c(this,ot)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=Oo(this);return o instanceof Lo?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?Y("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):Y("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?Y("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):Y("div",{class:"radio-placeholder"}):null}install(){!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}get Sortable(){return c(this,wt)}async installed(){if(this.sortable){let o=await et.use();f(this,wt,o.create(this.$(".children"),{delay:150,handle:".element",fallbackOnBody:!0,invertSwap:!0,group:this.tree.sortGroup,onEnd:s=>{let i=Oo(s.from),r=Oo(s.to),a=i.nodes,n=r.nodes;n||(n=[],r.node.children=n),this.tree.fire("sorted",{fromNode:i.node,fromNodes:a,toNode:r.node,toNodes:n,fromIndex:s.oldIndex,toIndex:s.newIndex})}}))}}async render(o){let{node:s,cssss:i}=o,r=s.element??s.label??s.key;typeof r=="function"&&(r=await r(s,o,this));let a=null,n=f(this,ot,s.children);return typeof n=="function"&&this.expanded&&f(this,ot,n=await n(s,o,this)),a=Y("div",{class:Kt("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(n instanceof Array?n.map(d=>Y("oi-tree-node",{node:d,"node-level":this.level+1,tree:this.tree,cssss:i})):n)),Y("div",{class:Kt("node",{expanded:this.expanded,"no-children":this.noChildren})},Y("div",{class:Kt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:d=>{d.stopPropagation(),this.selected&&d.ctrlKey===!0?this.unSelect():this.select()}},Y("div",{onClick:d=>{d.stopPropagation(),this.toggle()},class:Kt("expander-wrap",{"no-children":this.noChildren})},!this.noChildren&&this.expander),this.$checkbox,this.$radio,Y("div",{class:"label"},r)),a)}},je=Lo;ot=new WeakMap,wt=new WeakMap,l(je,"css",ps),l(je,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0,expander:null}),l(je,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});Mi("oi-tree-node",je);var To=je;var{h:Co,purgeCSSSS:_i,getHost:Zt,classNames:Xi}=omii;var St,st,he=class extends g{constructor(){super(...arguments);m(this,St,void 0);m(this,st,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return c(this,St)}isSelected(e){let{multiSelect:o,selectedKey:s,selectedKeys:i}=this.$props;return o?(i??[]).some(r=>r==e):s!=null&&s==e}select(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;s?i.some(r=>r==e)||i.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;if(!s)this.$props.selectedKey=null;else{let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:s}=this.$props;return o?(s??[]).some(i=>i==e):!1}check(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;s&&i.indexOf(e)==-1&&i.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;if(s){let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:s}=this.$props;return o?s!=null&&s==e:!1}radio(e,o=!0){let{radioTree:s}=this.$props;s&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(s=>s==e)}expand(e,o=!0){let{expandedKeys:s}=this.$props;s.indexOf(e)!=-1&&s.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:s}=this.$props,i=s.indexOf(e);i!=-1&&s.splice(i,1),o&&this.update()}async installed(){if(this.$props.sortable){let e=await et.use();f(this,St,e.create(this.rootNode,{delay:150,fallbackOnBody:!0,invertSwap:!0,group:this.sortGroup,onEnd:o=>{let s=Zt(o.from),i=Zt(o.to),r=s.nodes,a=i.nodes;this.fire("sorted",{fromNode:s.node,fromNodes:r,toNode:i.node,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}get nodes(){if(!c(this,st)){let e=this.$props.nodes,o=Zt(this);typeof e=="function"&&(e=e.call(o)),f(this,st,e)}return c(this,st)}render(){let e=Zt(this),o=_i(this.$props.nodeCss,e);return Co("div",{class:Xi("tree-container",{sortable:this.sortable})},this.nodes.map(s=>Co("oi-tree-node",{node:s,tree:this,cssss:o})))}};St=new WeakMap,st=new WeakMap,l(he,"css",ds),l(he,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[],expander:Co("oi-icon",{name:"keyboard_arrow_right",class:"expander"})}),l(he,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:za,classNames:Ja}=omii,Ft,oe=class extends g{constructor(){super(...arguments);m(this,Ft,void 0)}css(){let{size:e,color:o}=this.$props,s="2rem";if(e)s=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?s=`${a.offsetHeight}px`:s="2rem"}let i=`
    :host{
      --oi-loading-size:${s};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${c(this,Ft)}
    ${i}
    ${r}
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:s}}=await import(`./loadings/${e}.js`);return f(this,Ft,s),o}};Ft=new WeakMap,l(oe,"updateOnAttributeChanged",!0),l(oe,"css",`
    :host{
      display:inline-block;
    }
  `),l(oe,"defaultProps",{name:"circle",size:null,color:null}),l(oe,"propTypes",{name:String,size:Number,color:String});var it={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Eo="show",Gt="collapse",Io="collapsing",Wi="collapse-horizontal",$o=.35,Vo=(t,e)=>e||(t.classList.contains(Wi)?it.HORIZONTAL:it.VERTICAL),us={show(t,e=$o,o=null){return new Promise(s=>{o=Vo(t,o),z(t,[{classNames:[Gt]},{classNames:[Io],duration:e,callback(i){i.style[o==it.VERTICAL?"height":"width"]=`${i[o==it.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Gt,Eo],callback(i){i.style[o==it.VERTICAL?"height":"width"]="",s()}}])})},hide(t,e=$o,o=null){return new Promise(s=>{o=Vo(t,o);let i=o==it.VERTICAL?"height":"width";t.style[i]=`${t.getBoundingClientRect()[i]}px`,_t(t.offsetHeight),z(t,[{classNames:[Io,Gt,Eo]},{classNames:[Io],duration:e,callback(r){r.style[i]=""}},{classNames:[Gt],callback:s}])})},toggle(t,e=$o,o=null){return o=Vo(t,o),t.classList.contains(Eo)?this.hide(t,e,o):this.show(t,e,o)}};var Bt="fade",Do="show",zo=.15,fs={show(t,e=zo){return new Promise(o=>{z(t,[{classNames:[Bt]},{classNames:[Bt,Do],duration:e,callback:o}])})},hide(t,e=zo){return new Promise(o=>{z(t,[{classNames:[Bt,Do]},{classNames:[Bt],duration:e,callback:o}])})},toggle(t,e=zo){return t.classList.contains(Bt)&&!t.classList.contains(Do)?this.show(t,e):this.hide(t,e)}};var U={collapse:us,fade:fs};var{h:Jo,classNames:Hi}=omii;var Yi="show",Ut,me=class extends g{constructor(){super(...arguments);m(this,Ut,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(Yi),f(this,Ut,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return c(this,Ut)?null:Jo("div",{className:Hi("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},Jo("slot",null),o?Jo("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};Ut=new WeakMap,l(me,"css",()=>y("reboot","utilities","alert","close","transitions")),l(me,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(me,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:rt,classNames:jo}=omii,qt={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Ki="collapsed",at,eo,ge=class extends g{constructor(){super(...arguments);m(this,at)}static get DIRECTIONS(){return qt}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:s}=this.$props;if(e.length>0&&s&&(e[0].opened=!0),!o){let i=e.filter(r=>r.opened);if(i.length){let r=i.shift();r.opened=!0,i.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==qt.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:s}=this.$props;if(s)Pt(this,at,eo).call(this,e);else{let i=o.findIndex(a=>a.opened),r=i==-1?null:o[i];r&&r!=e&&Pt(this,at,eo).call(this,r),Pt(this,at,eo).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return rt("div",{class:jo("accordion",{"collapse-horizontal":o==qt.HORIZONTAL})},e.map((s,i)=>rt("div",{class:"accordion-item",key:s.key??`item-${i}`},rt("h2",{class:"accordion-header"},rt("button",{class:jo("accordion-button",{collapsed:!s.opened}),type:"button","aria-expanded":s.opened,onClick:r=>{this.toggle(s)}},s.header)),rt("div",{class:jo("accordion-collapse",{collapse:!0,show:s.opened})},rt("div",{class:"accordion-body"},typeof s.body=="function"?s.body(s,this.$props,this):s.body)))))}};at=new WeakSet,eo=function(e){let{items:o,transitionDuration:s}=this.$props,i=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${i+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(Ki,!e.opened),e.opened?(U.collapse.show(a),this.fire("collapseShow",e)):(U.collapse.hide(a),this.fire("collapseHide",e))},l(ge,"css",()=>y("reboot","utilities","accordion","close","transitions")),l(ge,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:qt.VERTICAL}),l(ge,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:Qt,classNames:ln}=omii,be=class extends g{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return Qt("nav",{"aria-label":"breadcrumb"},Qt("ol",{class:"breadcrumb"},t.map((o,s)=>s!==t.length-1?Qt("li",{class:"breadcrumb-item"},typeof e=="object"&&s!=0?e:null,Qt("a",{href:o.href},o.label)):Qt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&s!=0?e:null,o.label))))}};l(be,"css",()=>y("reboot","utilities","breadcrumb")),l(be,"defaultProps",{}),l(be,"propTypes",{});var hs=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:E,classNames:ms,extractClass:Zi}=omii,ve=class extends g{open(){this.update$Props({visible:!0}),this.fire("open")}close(){U.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return E(E.f,null,e.visible&&!e.staticPosition&&E("div",{class:ms("modal-backdrop","fade","show")}),E("div",{...Zi(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},E("div",{class:ms("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},E("div",{class:"modal-content"},E("div",{class:"modal-header"},E("slot",{name:"header"},E("h5",{class:"modal-title"},e.title),E("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),E("div",{class:"modal-body"},E("slot",null)),E("div",{class:"modal-footer"},E("slot",{name:"footer"}))))))}};l(ve,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),hs]),l(ve,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(ve,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function kt(t){return t.split("-")[0]}function oo(t){return t.split("-")[1]}function Nt(t){return["top","bottom"].includes(kt(t))?"x":"y"}function Ao(t){return t==="y"?"height":"width"}function gs(t,e,o){let{reference:s,floating:i}=t,r=s.x+s.width/2-i.width/2,a=s.y+s.height/2-i.height/2,n=Nt(e),d=Ao(n),p=s[d]/2-i[d]/2,h=n==="x",u;switch(kt(e)){case"top":u={x:r,y:s.y-i.height};break;case"bottom":u={x:r,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:a};break;case"left":u={x:s.x-i.width,y:a};break;default:u={x:s.x,y:s.y}}switch(oo(e)){case"start":u[n]-=p*(o&&h?-1:1);break;case"end":u[n]+=p*(o&&h?-1:1)}return u}var vs=async(t,e,o)=>{let{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),d=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:h}=gs(d,s,n),u=s,b={},v=0;for(let x=0;x<r.length;x++){let{name:S,fn:F}=r[x],{x:R,y:N,data:O,reset:Q}=await F({x:p,y:h,initialPlacement:s,placement:u,strategy:i,middlewareData:b,rects:d,platform:a,elements:{reference:t,floating:e}});p=R??p,h=N??h,b={...b,[S]:{...b[S],...O}},Q&&v<=50&&(v++,typeof Q=="object"&&(Q.placement&&(u=Q.placement),Q.rects&&(d=Q.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):Q.rects),{x:p,y:h}=gs(d,u,n)),x=-1)}return{x:p,y:h,placement:u,strategy:i,middlewareData:b}};function ys(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function Rt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Mo(t,e){var o;e===void 0&&(e={});let{x:s,y:i,platform:r,rects:a,elements:n,strategy:d}=t,{boundary:p="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=e,x=ys(v),S=n[b?u==="floating"?"reference":"floating":u],F=Rt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(S)))==null||o?S:S.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:h,strategy:d})),R=Rt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:s,y:i}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:d}):a[u]);return{top:F.top-R.top+x.top,bottom:R.bottom-F.bottom+x.bottom,left:F.left-R.left+x.left,right:R.right-F.right+x.right}}var Gi=Math.min,qi=Math.max;function Po(t,e,o){return qi(t,Gi(e,o))}var _o=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:s=0}=t??{},{x:i,y:r,placement:a,rects:n,platform:d}=e;if(o==null)return{};let p=ys(s),h={x:i,y:r},u=Nt(a),b=oo(a),v=Ao(u),x=await d.getDimensions(o),S=u==="y"?"top":"left",F=u==="y"?"bottom":"right",R=n.reference[v]+n.reference[u]-h[u]-n.floating[v],N=h[u]-n.reference[u],O=await(d.getOffsetParent==null?void 0:d.getOffsetParent(o)),Q=O?u==="y"?O.clientHeight||0:O.clientWidth||0:0;Q===0&&(Q=n.floating[v]);let Ge=R/2-N/2,le=p[S],De=Q-x[v]-p[F],k=Q/2-x[v]/2+Ge,V=Po(le,k,De),ce=(b==="start"?p[S]:p[F])>0&&k!==V&&n.reference[v]<=n.floating[v];return{[u]:h[u]-(ce?k<le?le-k:De-k:0),data:{[u]:V,centerOffset:k-V}}}}),er={left:"right",right:"left",bottom:"top",top:"bottom"};function to(t){return t.replace(/left|right|bottom|top/g,e=>er[e])}function tr(t,e,o){o===void 0&&(o=!1);let s=oo(t),i=Nt(t),r=Ao(i),a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=to(a)),{main:a,cross:to(a)}}var or={start:"end",end:"start"};function bs(t){return t.replace(/start|end/g,e=>or[e])}var sr=["top","right","bottom","left"],xn=sr.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Ot=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:s,middlewareData:i,rects:r,initialPlacement:a,platform:n,elements:d}=e,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...x}=t,S=kt(s),F=u||(S===a||!v?[to(a)]:function(k){let V=to(k);return[bs(k),V,bs(V)]}(a)),R=[a,...F],N=await Mo(e,x),O=[],Q=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&O.push(N[S]),h){let{main:k,cross:V}=tr(s,r,await(n.isRTL==null?void 0:n.isRTL(d.floating)));O.push(N[k],N[V])}if(Q=[...Q,{placement:s,overflows:O}],!O.every(k=>k<=0)){var Ge,le;let k=((Ge=(le=i.flip)==null?void 0:le.index)!=null?Ge:0)+1,V=R[k];if(V)return{data:{index:k,overflows:Q},reset:{placement:V}};let ce="bottom";switch(b){case"bestFit":{var De;let jt=(De=Q.map(qe=>[qe,qe.overflows.filter(ze=>ze>0).reduce((ze,bo)=>ze+bo,0)]).sort((qe,ze)=>qe[1]-ze[1])[0])==null?void 0:De[0].placement;jt&&(ce=jt);break}case"initialPlacement":ce=a}if(s!==ce)return{reset:{placement:ce}}}return{}}}};var Tt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:s}=e,i=await async function(r,a){let{placement:n,platform:d,elements:p}=r,h=await(d.isRTL==null?void 0:d.isRTL(p.floating)),u=kt(n),b=oo(n),v=Nt(n)==="x",x=["left","top"].includes(u)?-1:1,S=h&&v?-1:1,F=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:N,alignmentAxis:O}=typeof F=="number"?{mainAxis:F,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...F};return b&&typeof O=="number"&&(N=b==="end"?-1*O:O),v?{x:N*S,y:R*x}:{x:R*x,y:N*S}}(e,t);return{x:o+i.x,y:s+i.y,data:i}}}};function ir(t){return t==="x"?"y":"x"}var Lt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:s,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:F=>{let{x:R,y:N}=F;return{x:R,y:N}}},...d}=t,p={x:o,y:s},h=await Mo(e,d),u=Nt(kt(i)),b=ir(u),v=p[u],x=p[b];if(r){let F=u==="y"?"bottom":"right";v=Po(v+h[u==="y"?"top":"left"],v,v-h[F])}if(a){let F=b==="y"?"bottom":"right";x=Po(x+h[b==="y"?"top":"left"],x,x-h[F])}let S=n.fn({...e,[u]:v,[b]:x});return{...S,data:{x:S.x-o,y:S.y-s}}}}};function Us(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function ie(t){if(t==null)return window;if(!Us(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){return ie(t).getComputedStyle(t)}function se(t){return Us(t)?"":t?(t.nodeName||"").toLowerCase():""}function Qs(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function Z(t){return t instanceof ie(t).HTMLElement}function nt(t){return t instanceof ie(t).Element}function lt(t){return typeof ShadowRoot>"u"?!1:t instanceof ie(t).ShadowRoot||t instanceof ShadowRoot}function io(t){let{overflow:e,overflowX:o,overflowY:s}=K(t);return/auto|scroll|overlay|hidden/.test(e+s+o)}function rr(t){return["table","td","th"].includes(se(t))}function xs(t){let e=/firefox/i.test(Qs()),o=K(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function Rs(){return!/^((?!chrome|android).)*safari/i.test(Qs())}var ws=Math.min,Ct=Math.max,so=Math.round;function Pe(t,e,o){var s,i,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),d=1,p=1;e&&Z(t)&&(d=t.offsetWidth>0&&so(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&so(n.height)/t.offsetHeight||1);let h=nt(t)?ie(t):window,u=!Rs()&&o,b=(n.left+(u&&(s=(i=h.visualViewport)==null?void 0:i.offsetLeft)!=null?s:0))/d,v=(n.top+(u&&(r=(a=h.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/d,S=n.height/p;return{width:x,height:S,top:v,right:b+x,bottom:v+S,left:b,x:b,y:v}}function ye(t){return(e=t,(e instanceof ie(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function ro(t){return nt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ks(t){return Pe(ye(t)).left+ro(t).scrollLeft}function ar(t,e,o){let s=Z(e),i=ye(e),r=Pe(t,s&&function(d){let p=Pe(d);return so(p.width)!==d.offsetWidth||so(p.height)!==d.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(s||!s&&o!=="fixed")if((se(e)!=="body"||io(i))&&(a=ro(e)),Z(e)){let d=Pe(e,!0);n.x=d.x+e.clientLeft,n.y=d.y+e.clientTop}else i&&(n.x=ks(i));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function Ns(t){return se(t)==="html"?t:t.assignedSlot||t.parentNode||(lt(t)?t.host:null)||ye(t)}function Ss(t){return Z(t)&&K(t).position!=="fixed"?function(e){let{offsetParent:o}=e,s=e,i=!1;for(;s&&s!==o;){let{assignedSlot:r}=s;if(r){let a=r.offsetParent;if(K(r).display==="contents"){let n=r.hasAttribute("style"),d=r.style.display;r.style.display=K(s).display,a=r.offsetParent,r.style.display=d,n||r.removeAttribute("style")}s=r,o!==a&&(o=a,i=!0)}else if(lt(s)&&s.host&&i)break;s=lt(s)&&s.host||s.parentNode}return o}(t):null}function Xo(t){let e=ie(t),o=Ss(t);for(;o&&rr(o)&&K(o).position==="static";)o=Ss(o);return o&&(se(o)==="html"||se(o)==="body"&&K(o).position==="static"&&!xs(o))?e:o||function(s){let i=Ns(s);for(lt(i)&&(i=i.host);Z(i)&&!["html","body"].includes(se(i));){if(xs(i))return i;{let r=i.parentNode;i=lt(r)?r.host:r}}return null}(t)||e}function Fs(t){if(Z(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Pe(t);return{width:e.width,height:e.height}}function Os(t){let e=Ns(t);return["html","body","#document"].includes(se(e))?t.ownerDocument.body:Z(e)&&io(e)?e:Os(e)}function Ts(t,e){var o;e===void 0&&(e=[]);let s=Os(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=ie(s),a=i?[r].concat(r.visualViewport||[],io(s)?s:[]):s,n=e.concat(a);return i?n:n.concat(Ts(a))}function Bs(t,e,o){return e==="viewport"?Rt(function(s,i){let r=ie(s),a=ye(s),n=r.visualViewport,d=a.clientWidth,p=a.clientHeight,h=0,u=0;if(n){d=n.width,p=n.height;let b=Rs();(b||!b&&i==="fixed")&&(h=n.offsetLeft,u=n.offsetTop)}return{width:d,height:p,x:h,y:u}}(t,o)):nt(e)?function(s,i){let r=Pe(s,!1,i==="fixed"),a=r.top+s.clientTop,n=r.left+s.clientLeft;return{top:a,left:n,x:n,y:a,right:n+s.clientWidth,bottom:a+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}(e,o):Rt(function(s){var i;let r=ye(s),a=ro(s),n=(i=s.ownerDocument)==null?void 0:i.body,d=Ct(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=Ct(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),h=-a.scrollLeft+ks(s),u=-a.scrollTop;return K(n||r).direction==="rtl"&&(h+=Ct(r.clientWidth,n?n.clientWidth:0)-d),{width:d,height:p,x:h,y:u}}(ye(t)))}function nr(t){let e=Ts(t),o=["absolute","fixed"].includes(K(t).position)&&Z(t)?Xo(t):t;return nt(o)?e.filter(s=>nt(s)&&function(i,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(i.contains(r))return!0;if(a&&lt(a)){let n=r;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(s,o)&&se(s)!=="body"):[]}var lr={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:s,strategy:i}=t,r=[...o==="clippingAncestors"?nr(e):[].concat(o),s],a=r[0],n=r.reduce((d,p)=>{let h=Bs(e,p,i);return d.top=Ct(h.top,d.top),d.right=ws(h.right,d.right),d.bottom=ws(h.bottom,d.bottom),d.left=Ct(h.left,d.left),d},Bs(e,a,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:s}=t,i=Z(o),r=ye(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((i||!i&&s!=="fixed")&&((se(o)!=="body"||io(r))&&(a=ro(o)),Z(o))){let d=Pe(o,!0);n.x=d.x+o.clientLeft,n.y=d.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:nt,getDimensions:Fs,getOffsetParent:Xo,getDocumentElement:ye,getElementRects:t=>{let{reference:e,floating:o,strategy:s}=t;return{reference:ar(e,Xo(o),s),floating:{...Fs(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>K(t).direction==="rtl"};var ao=(t,e,o)=>vs(t,e,{platform:lr,...o});var Ls=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Ae,classNames:Tn,createRef:cr}=omii,no,Cs,Et,Wo,Me,G=class extends g{constructor(){super(...arguments);m(this,no);m(this,Et);l(this,"slotRef",cr());m(this,Me,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props,i=c(this,Et,Wo);if(i){let r=this.$(`.${this.type}-arrow`);ao(i,this.$element,{strategy:s,placement:e,middleware:[Ot(),Lt(),Tt(o),_o({element:r})]}).then(({x:a,y:n,placement:d,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:h,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[d.split("-")[0]];r&&Object.assign(r.style,{left:h!=null?`${h}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){f(this,Me,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),U.fade.show(this.$element)}hide(){f(this,Me,!1),U.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){c(this,Me)?this.hide():this.show()}installed(){let e=c(this,Et,Wo),{triggerShow:o,triggerHide:s}=this.$props;e&&(o.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),s.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),c(this,Me)&&this.hide()})}))}render(e){let{placement:o,header:s,body:i}=this.$props;return Ae(Ae.f,null,Ae("slot",{ref:this.slotRef,tabIndex:!0}),Ae("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Ae("div",{class:"popover-arrow"}),Ae("slot",{name:"header",class:"popover-header"},s),Ae("slot",{class:"popover-body",name:"body"},i)))}};no=new WeakSet,Cs=function(){return this.slotRef.current},Et=new WeakSet,Wo=function(){let e=c(this,no,Cs).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},Me=new WeakMap,l(G,"css",[()=>y("reboot","utilities","transitions","popover"),Ls]),l(G,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(G,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var Es=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Is=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:T,classNames:dr}=omii,$s=t=>t?.type?.indexOf("image")==0,pr=t=>$s(t)?(t.url=t.url??Is(t.file),T("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):T("div",{className:"file"},T("oi-icon",{"view-box":"1024",name:Xt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),T("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),Vs=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return T("div",{className:"pictures"},T("div",{class:"row row-cols-auto g-4"},e.map((i,r)=>T("div",{className:"col",key:`file-${r}`},T("div",{class:"card",onClick:()=>{t.open(r)}},pr(i),T("div",{className:"actions"},T("div",{class:"position-absolute top-50 start-50 translate-middle"},$s(i)&&T("oi-icon",{name:"search"}),T("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(s||e.length==0)&&T("div",{className:"col selector-col",key:"selector"},T("div",{class:"card selector"},T("label",{class:dr("selector",{multiple:s}),title:o,onClick:()=>{t.open()}},T("oi-icon",{name:"add"}))))))};var{h:A,classNames:Mn}=omii,Ds=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return A("div",{className:"files"},A("slot",{name:"actions"},A("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),A("table",{class:"table"},A("tbody",null,e.map(i=>A("tr",null,A("td",null,A("oi-icon",{"view-box":"1024",name:Xt(i.ext),type:"file-type"}),i.name,i.ext),A("td",null,wo(i.size)),A("td",null,A("oi-icon",{name:"delete"})))))))};var{h:lo,classNames:Wn}=omii,ur={pictures:Vs,files:Ds},co={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},_e,xe=class extends g{constructor(){super(...arguments);m(this,_e,-1)}static get STATUS(){return co}open(e=-1){f(this,_e,e),this.$("#files").click()}remove(e){this.$props.files?.splice(e,1),this.updateSelf()}select(e){let{multiple:o,files:s,autoUpload:i}=this.$props;if(e?.length==0)return!1;if(o||s.splice(0,s.length),c(this,_e)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Mt(a.name),ext:At(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.splice(c(this,_e),1,...r),this.fire("replaced",{index:c(this,_e),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Mt(a.name),ext:At(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),i===!0&&this.upload()}refresh(){this.update()}upload(){let{files:e,action:o,withCredentials:s,headers:i}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==co.NONE||a.status==co.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=s,typeof i=="function"&&(i=i()),typeof i=="object")for(let d in i)n.setRequestHeader(d,i[d]);n.send(a),n.onreadystatechange=function(d){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=co.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,d)},n.upload.onprogress=function(d){if(d.lengthComputable){let p=Math.ceil(d.loaded/d.total*100);r.progress=p,this.fire("progress",{file:r,loaded:d.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:s}=this.$props;return lo(lo.f,null,lo("slot",null,ur[s]),lo("input",{id:"files",type:"file",multiple:e,accept:o,onChange:i=>{this.select(i.target.files)}}))}};_e=new WeakMap,l(xe,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),Es]),l(xe,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(xe,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var zs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var fr="transitionend";var Js=t=>{t.dispatchEvent(new Event(fr))},hr=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var js=t=>{if(!hr(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let s=t.closest("summary");if(s&&s.parentNode!==o||s===null)return!1}return e};var{h:J,classNames:Ps,extractClass:mr}=omii;var gr="carousel-item-end",br="carousel-item-start",vr="carousel-item-next",yr="carousel-item-prev",xr=".active",wr=".carousel-item",cl=xr+wr,Xe,re,It,Se,we=class extends g{constructor(){super(...arguments);m(this,Xe,0);m(this,re,!1);m(this,It,[]);m(this,Se,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return c(this,Xe)}get isSliding(){return c(this,re)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){c(this,re)&&Js(this),clearInterval(c(this,Se)),f(this,Se,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(c(this,re))return!1;let{$activeItem:o,$items:s,$props:{duration:i}}=this,r=s.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=s.indexOf(n),e=a>r):typeof e=="number"?(a=(e+s.length)%s.length,n=s[a],e=a>r):(a=(r+1)%s.length,e||(a=(r-1+s.length)%s.length),n=s[a]),c(this,Xe)==a)return!1;let d=e?br:gr,p=e?vr:yr;f(this,re,!0);let h=Number.parseFloat(o.getAttribute("waiting"))??0;z(n,[{classNames:[],duration:h},{classNames:[p],callback:()=>{_t(n)}},{classNames:[p,d],duration:i},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),z(o,[{classNames:[],duration:h},{classNames:[d,"active"],duration:i},{classNames:[],callback:()=>{f(this,re,!1),f(this,Xe,a);let u;for(;u=c(this,It).pop();)u()}}])}nextWhenVisible(){!document.hidden&&js(this)&&this.slide()}cycle(){c(this,Se)&&clearInterval(c(this,Se)),f(this,Se,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),f(this,Xe,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(c(this,re)?c(this,It).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:s,prevCtrl:i,indicator:r}=this.$props;return J("div",{...mr(e,"carousel")},J("slot",{class:"carousel-inner"},o.map(a=>J("div",{className:Ps("carousel-item"),waiting:a.attributes?.waiting},a))),J("div",{class:"carousel-indicators"},J("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),J("slot",{name:"actions"},typeof s=="function"&&s(this),typeof i=="function"&&i(this)))}};Xe=new WeakMap,re=new WeakMap,It=new WeakMap,Se=new WeakMap,l(we,"css",[()=>y("reboot","utilities","carousel"),zs]),l(we,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>J("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},J("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),J("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>J("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},J("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),J("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>J("button",{type:"button",onClick:s=>o.slide(e),class:Ps({active:e==0})})}),l(we,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Ho,classNames:ul,extractClass:Sr}=omii,Fe=class extends g{css(){}render(t){let{text:e,desc:o,position:s}=this.$props,i=s?s.split("-"):[];return Ho("span",{...Sr(t,"badge",{"position-absolute":s,"top-0":i.includes("top"),"start-100":i.includes("right"),"start-0":i.includes("left"),"top-100":i.includes("bottom"),"translate-middle":s,"rounded-pill":s})},Ho("slot",null,e),o&&Ho("span",{class:"visually-hidden"},o))}};l(Fe,"css",()=>y("reboot","utilities","badge")),l(Fe,"defaultProps",{text:"",desc:!1,position:!1}),l(Fe,"propTypes",{});var As=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:ct,classNames:vl,extractClass:Fr}=omii,Ue,Be=class extends g{constructor(){super(...arguments);m(this,Ue,!0)}get closed(){return c(this,Ue)}close(){f(this,Ue,!0),U.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){f(this,Ue,!1),this.update(),U.fade.show(this)}install(){f(this,Ue,!this.$props.visible)}render(e){return ct("div",{...Fr(e,"toast",{show:!c(this,Ue)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},ct("div",{class:"toast-header"},ct("slot",{name:"header"}),ct("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),ct("div",{class:"toast-body"},ct("slot",null)))}};Ue=new WeakMap,l(Be,"css",[()=>y("reboot","utilities","toasts","close"),As]),l(Be,"defaultProps",{visible:!1}),l(Be,"propTypes",{visible:Boolean});var{h:Yo,classNames:Br,extractClass:Ul}=omii,Qe=class extends g{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:s,max:i,showPercent:r,striped:a,animated:n,style:d,className:p}=this.$props;return Yo("div",{class:"progress",style:d},Yo("div",{class:Br("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":s,"aria-valuemax":i},r&&Yo("span",null,o,"%")))}};l(Qe,"css",()=>y("reboot","utilities","progress")),l(Qe,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(Qe,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Ms=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:dt,classNames:Tl,createRef:Ll}=omii,po=class extends G{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return dt(dt.f,null,dt("slot",{ref:this.slotRef}),dt("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},dt("div",{class:"tooltip-arrow"}),dt("slot",{class:"tooltip-inner",name:"body"},o)))}},We=po;l(We,"css",[()=>y("reboot","utilities","transitions","tooltip"),Ms]),l(We,"defaultProps",{...mt(po,po,"defaultProps"),offset:0});var _s=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:Re,classNames:Dl,createRef:pt}=omii,M,ae,_,He,Ye,uo,ke=class extends g{constructor(){super(...arguments);m(this,M,pt());m(this,ae,pt());m(this,_,pt());m(this,He,pt());m(this,Ye,pt());m(this,uo,pt())}close(e,o){}closeFooter(){this.$props.openFooter=!1,U.collapse.hide(c(this,_).current),c(this,ae).current.style.height=this.clientHeight-c(this,M).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,U.collapse.show(c(this,_).current),c(this,ae).current.style.height=this.clientHeight-c(this,M).current.clientHeight-c(this,_).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,U.collapse.hide(c(this,M).current),c(this,ae).current.style.height=this.clientHeight-c(this,_).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,U.collapse.show(c(this,M).current),c(this,ae).current.style.height=this.clientHeight-c(this,M).current.scrollHeight-c(this,_).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,U.collapse.hide(c(this,He).current)}openLeft(){this.$props.openLeft=!0,U.collapse.show(c(this,He).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,U.collapse.hide(c(this,Ye).current)}openRight(){this.$props.openRight=!0,U.collapse.show(c(this,Ye).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=c(this,M).current.getBoundingClientRect(),s=c(this,_).current.getBoundingClientRect();c(this,ae).current.style.height=e.height-o.height-s.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:s,openRight:i}=this.$props;e||(c(this,_).current.style.height=0),o||(c(this,M).current.style.height=0),s||(c(this,He).current.style.height=0),i||(c(this,Ye).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return Re(Re.f,null,Re("slot",{name:"header",ref:c(this,M)}),Re("main",{ref:c(this,ae)},Re("slot",{name:"left",ref:c(this,He),class:"collapse-horizontal"}),Re("slot",{name:"content",ref:c(this,uo)}),Re("slot",{name:"right",ref:c(this,Ye),class:"collapse-horizontal"})),Re("slot",{name:"footer",ref:c(this,_)}))}};M=new WeakMap,ae=new WeakMap,_=new WeakMap,He=new WeakMap,Ye=new WeakMap,uo=new WeakMap,l(ke,"css",[_s]),l(ke,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(ke,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Xs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:Ko,classNames:Wl,uniqueTag:Ur}=omii,q,Ne=class extends g{constructor(){super(...arguments);m(this,q,void 0)}get $module(){return c(this,q)}load(e,o,s,i){o=o??this.$props.module,s=s??this.$props.loading,i=i??this.$props.loadError,f(this,q,s),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)f(this,q,i);else if(typeof a=="function"){let n=Ur(a);f(this,q,Ko(n,null))}else f(this,q,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),f(this,q,i),this.updateSelf()})}install(){let{src:e,module:o,loading:s,loadError:i}=this.$props;this.load(e,o,s,i)}render(e){return c(this,q)}};q=new WeakMap,l(Ne,"css",[Xs]),l(Ne,"defaultProps",{src:null,module:"default",loading:Ko("oi-loading",{size:"6"}),loadError:Ko("h1",null,"Module Load Error")}),l(Ne,"propTypes",{src:String,module:String});var Ws=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Oe,classNames:ql,createRef:Hs,extractClass:Qr}=omii,ee,Te=class extends g{constructor(){super(...arguments);l(this,"offcanvasRef",Hs());l(this,"backdropRef",Hs());m(this,ee,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(c(this,ee))return;f(this,ee,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;z(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){c(this,ee)?this.hide():this.show()}open(){this.show()}hide(){if(!c(this,ee))return;f(this,ee,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;z(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){f(this,ee,this.$props.visible)}render(e){let{visible:o,placement:s,position:i,title:r,useBackdrop:a}=this.$props;return Oe(Oe.f,null,Oe("div",{ref:this.offcanvasRef,...Qr(e,"offcanvas",`offcanvas-${s}`,`position-${i}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Oe("div",{class:"offcanvas-header"},Oe("slot",{name:"title",class:"offcanvas-title h5"},r),Oe("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Oe("slot",{class:"offcanvas-body"})),a&&c(this,ee)&&Oe("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};ee=new WeakMap,l(Te,"css",[()=>y("reboot","offcanvas","utilities","close"),Ws]),l(Te,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Te,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:ac,classNames:nc,extractClass:lc,createRef:cc}=omii;function Zs(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let s in e)s!=="valid"&&e[s]===!0&&o.push(s);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function Ys(t){let e=t.currentTarget;e.checkValidity(),Zs(t.target),e.classList.add("was-validated")}function Gs(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(s=>{Zs(s)}),t.classList.add("was-validated"),o.every(s=>s.checkValidity?s.checkValidity():!0)&&e}function Ks(t){let e=t.target;e.removeEventListener("input",Ys),e.addEventListener("input",Ys,!1),Gs(e)||(t.preventDefault(),t.stopPropagation())}var ut=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",Ks),e.addEventListener("submit",Ks,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return Gs(this)}connectedCallback(){this.constructor.validate(this)}};var qs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:fo,classNames:uc,createRef:ei}=omii,Ze=null;document.addEventListener("click",t=>{Ze&&Ze.hide()});var $t,Vt,ne,Ke,Dt,Zo,ft,Le=class extends g{constructor(){super(...arguments);m(this,ne);m(this,Dt);m(this,$t,ei());m(this,Vt,ei());m(this,ft,!1)}get $menu(){return c(this,$t).current}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props;ao(c(this,Dt,Zo),this.$menu,{strategy:s,placement:e,middleware:[Ot(),Lt(),Tt(o)]}).then(({x:i,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${i}px`,top:`${r}px`})})}show(){f(this,ft,!0),c(this,ne,Ke).focus(),c(this,ne,Ke).setAttribute("aria-expanded",!0),c(this,ne,Ke).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Ze=this,this.setPosition()}hide(){f(this,ft,!1),c(this,ne,Ke).classList.remove("show"),c(this,ne,Ke).setAttribute("aria-expanded","false"),Ze=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){c(this,ft)?this.hide():this.show()}installed(){c(this,Dt,Zo).addEventListener("click",e=>{Ze&&Ze!=this&&Ze.hide(),this.toggle(),e.preventDefault(),e.stopPropagation()}),this.addEventListener("click",e=>{e.stopPropagation()})}render(e){let{menu:o}=this.$props;return fo(fo.f,null,fo("slot",{ref:c(this,Vt)}),fo("slot",{name:"menu",ref:c(this,$t)},o))}};$t=new WeakMap,Vt=new WeakMap,ne=new WeakSet,Ke=function(){return c(this,Vt).current},Dt=new WeakSet,Zo=function(){let e=c(this,ne,Ke).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},ft=new WeakMap,l(Le,"css",[()=>y("reboot","utilities","transitions","dropdown"),qs]),l(Le,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Le,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var ti=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:Rr,Component:xc}=omii,ho,Ce=class extends g{constructor(){super(...arguments);m(this,ho,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:s,fontSize:i}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{f(this,ho,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:s,fontSize:i,minimap:{enabled:!1}})})}render(){return Rr("div",{class:"coder"})}};ho=new WeakMap,l(Ce,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,s=new CSSStyleSheet;return s.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,s],fetch(new URL("./monaco/index.css",e).href).then(i=>i.text())},ti]),l(Ce,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(Ce,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var oi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFFQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBT0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7O0FBRUE7RUFDSTs7QUFLWjtFQUNJO0VBRUE7O0FBRUE7RUFDSTs7QUFFQTtFQUNJOztBQUtSO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0kifQ== */`;var{h:I,classNames:si,extractClass:Qc}=omii,ht,te,C,Ee=class extends g{constructor(){super(...arguments);m(this,ht,!1);m(this,te,void 0);m(this,C,!1)}get value(){return this.$props.value}set value(e){this.$props.value=e}get validity(){let{required:e,values:o,min:s,max:i}=this.$props,r={valid:!0};return e&&(!o||o.length==0)&&(r.valid=!1,r.valueMissing=!0),r.valid&&(s!=0&&s>o.length&&(r.valid=!1,r.rangeUnderflow=!0),i!=0&&i<o.length&&(r.valid=!1,r.rangeOverflow=!0)),r}checkValidity(){f(this,ht,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}hideOptions(){this.$("oi-dropdown").hide()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",o=>{this.showOptions()});let{options:e}=this.$props;this.addEventListener("keydown",o=>{["Enter","ArrowUp","ArrowDown"].includes(o.key)&&(o.preventDefault(),o.stopPropagation());let i=c(this,te)?this.$$("li.option.match"):this.$$("li.option");if(i.length){i.forEach((a,n)=>{a.classList.contains("active")&&f(this,C,n),a.classList.remove("active")}),o.key=="Enter"?this.hideOptions():o.key=="ArrowUp"?c(this,C)===!1?f(this,C,i.length-1):c(this,C)>0&&xo(this,C)._--:o.key=="ArrowDown"&&(c(this,C)===!1?f(this,C,0):c(this,C)<i.length-1&&xo(this,C)._++);let r=i[c(this,C)];if(r){r.classList.add("active");let a=e.at(r.dataset.index);this.value=a?.value,this.updateSelf()}}})}toggleOption(e){let{values:o,multiple:s}=this.$props;if(s){let i=o.indexOf(e.value);i==-1?o.push(e.value):o.splice(i,1)}else this.value=e.value,this.hideOptions();f(this,te,null),this.updateSelf(),c(this,ht)&&this.checkValidity()}render(){let{values:e,value:o,searchable:s,options:i,preserveOrder:r,createSelected:a,createOption:n,multiple:d}=this.$props;return n=n.bind(this),a=a.bind(this),e=e??[],r&&d&&e.sort((p,h)=>i.findIndex(u=>u.value==p)-i.findIndex(u=>u.value==h)),i=i??[],I("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},d?I("div",{class:"selected d-flex",onClick:p=>{p.stopImmediatePropagation()}},"\xA0",I("ul",{class:"values flex-grow-1"},e.map((p,h)=>{let u=i.find(b=>b.value==p);if(u)return a(u,h)})),I("div",{class:"expander",onClick:p=>{this.showOptions()}})):I("div",{className:"selected d-flex",onClick:p=>{p.stopImmediatePropagation()}},I("input",{className:"value  flex-grow-1",readOnly:!s,value:c(this,te)??i.find(p=>p.value==o)?.text,onFocus:p=>{this.showOptions()},onBlur:p=>{f(this,C,!1),f(this,te,null),this.updateSelf()},onInput:p=>{f(this,te,p.target.value),f(this,C,!1),this.updateSelf()}}),I("div",{class:"expander",onClick:p=>{this.showOptions()}})),I("ul",{className:si("dropdown-menu",{searching:c(this,te),multiple:d}),slot:"menu"},i.map((p,h)=>I("li",{"data-index":h,className:si("option",{match:p.text.includes(c(this,te)),active:d?e.includes(p.value):o==p.value}),onClick:u=>{this.toggleOption(p)}},n(p,h)))))}};ht=new WeakMap,te=new WeakMap,C=new WeakMap,l(Ee,"css",[()=>y("reboot","utilities","forms","scrollbar"),oi]),l(Ee,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,searchable:Boolean,min:Number,max:Number}),l(Ee,"defaultProps",{options:[],values:[],value:null,multiple:!0,required:!1,searchable:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:s,multiple:i}=this.$props;return I("div",{class:"form-check d-flex"},i&&I("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:s.includes(e.value)}),I("label",{class:"form-check-label flex-grow-1"},e.text))},createSelected(e,o){let{values:s}=this.$props;return I("li",{onClick:i=>{i.stopImmediatePropagation()}},e.text,I("oi-bi",{name:"x",onClick:i=>{s.splice(o,1),this.updateSelf(),i.stopPropagation(),c(this,ht)&&this.checkValidity()}}))}});var ii=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:$,classNames:Cc,extractClass:kr}=omii,Ie=class extends g{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:s,dataCellFormatter:i,height:r}=this.$props,a=kr(this.$props)?.class??"";return $("div",{className:"table-container",style:{height:r}},$("table",{className:`table ${a}`},$("thead",null,o&&$("tr",null,t?.map(n=>$("th",{style:n.titleStyle,scope:"col"},s(n,t,e,this)))),$("slot",{name:"header"})),$("tbody",null,e?.map((n,d)=>$("tr",null,t.map(p=>$("td",{style:p.style},i(p,n,d,e,this)))))),$("tfoot",null,$("slot",{name:"footer"}))))}};l(Ie,"css",[()=>y("reboot","utilities","tables"),ii]),l(Ie,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,s){if(t.type=="checkbox"){t.checked||(t.checked=[]);let i=o?.map(a=>a[t.field])??[],r=i.every(a=>t.checked.includes(a));return $("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...i);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),d=new Set(i.filter(p=>!n.has(p)));t.checked.splice(0,t.checked.length,...d)}await s.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,s,i){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),$("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await i.updateSelf()}});case"radio":return $("input",{type:"radio"});default:return r}},height:"auto"}),l(Ie,"propTypes",{showHeader:Boolean});var ri=`
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
:host .tox-statusbar__branding {
  display: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0aW55bWNlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVKO0VBQ0kifQ== */`;var{h:Nr,classNames:Jc,extractClass:jc}=omii,ai=!0,ni=new URL("./tinymce/",import.meta.url).href,li="./tinymce.js",zt,mo,go,$e=class extends g{constructor(){super(...arguments);m(this,zt,void 0);m(this,mo,void 0);m(this,go,!1)}static get min(){return ai}static set min(e){ai=e}static get root(){return ni}static set root(e){ni=e}static get jsFile(){return li}static set jsFile(e){li=e}get value(){return this.$props.value}set value(e){this.$props.value=e,this.editor&&this.editor.setContent(e)}get editor(){return c(this,zt)}css(){return c(this,mo)}get validity(){let{required:e}=this.$props,o={valid:!0};return e&&value==""&&(o.valid=!1,o.valueMissing=!0),o}checkValidity(){f(this,go,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}async installed(){await import(new URL(this.constructor.jsFile,this.constructor.root).href);let e=this.$("#editor"),{menu:o,menubar:s,toolbar:i,plugins:r,language:a,toolbarMode:n,baseUrl:d,inline:p,contentStyle:h,contentCss:u,fontFamilyFormats:b,blockFormats:v,fontSizeFormats:x,lineHeightFormats:S,indentUseMargin:F,indentation:R,styleFormats:N,styleFormatsMerge:O,colorCols:Q,colorMap:Ge,imagesUploadUrl:le,imagesUploadHandler:De,imagesUploadBasePath:k,imagesUploadCredentials:V,imagesReuseFilename:ce,imagesFileTypes:jt,automaticUploads:qe,filePickerTypes:ze,filePickerCallback:bo,templates:ui,importcssGroups:fi,importcssAppend:hi}=this.$props;tinymce.init({target:e,promotion:!1,base_url:d??this.constructor.root,menu:o,menubar:s,toolbar:i,toolbar_mode:n,plugins:r,language:a,inline:p,extended_valid_elements:"oi-icon[name|color|size]",custom_elements:"oi-icon",content_css:u,content_style:h,font_family_formats:b,block_formats:v,font_size_formats:x,line_height_formats:S,indent_use_margin:F,indentation:R,style_formats:N,style_formats_merge:O,color_cols:Q,color_map:Ge,images_upload_url:le,images_upload_handler:De,images_upload_base_path:k,images_upload_credentials:V,images_reuse_filename:ce,images_file_types:jt,automatic_uploads:qe,file_picker_types:ze,file_picker_callback:bo,importcss_groups:fi,templates:ui,importcss_append:hi,setup:vo=>{f(this,zt,vo),vo.on("change",Lr=>{this.$props.value=vo.getContent(),this.fire("change",{value:this.value})})}})}render(){return Nr("textarea",{id:"editor",value:this.value,placeholder:this.placeholder})}};zt=new WeakMap,mo=new WeakMap,go=new WeakMap,l($e,"css",ri),l($e,"propTypes",{value:String,placeholder:String,required:Boolean,inline:Boolean}),l($e,"defaultProps",{value:"",placeholder:"...",required:!1,language:"zh-Hans",directionality:null,plugins:"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",toolbar:"undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage  quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print",toolbarSticky:!0,toolbarMode:"wrap",menu:null,menubar:!1,inline:!1,contentCss:null,contentStyle:null,blockFormats:"Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",fontFamilyFormats:"\u5B8B\u4F53=\u5B8B\u4F53;\u4EFF\u5B8B=\u4EFF\u5B8B;\u6977\u4F53=\u6977\u4F53;\u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;\u9ED1\u4F53=\u9ED1\u4F53;\u96B6\u4E66=\u96B6\u4E66;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",fontSizeFormats:null,lineHeightFormats:null,indentation:null,indentUseMargin:!1,styleFormatsMerge:!0,styleFormats:null,colorCols:5,colorMap:null,imagesUploadUrl:null,imagesUploadHandler:null,imagesUploadBasePath:null,imagesUploadCredentials:!1,imagesReuseFilename:!1,imagesFileTypes:null,automaticUploads:!0,filePickerTypes:null,filePickerCallback:null,templates:null,importcssAppend:!0,importcssGroups:[{title:"Table styles",filter:/^(td|tr)\./},{title:"Block styles",filter:/^(div|p)\./},{title:"Other styles"}]});var ci=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxlY2hhcnRzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EifQ== */`;var{h:Or,classNames:Wc,extractClass:Hc}=omii,di=new URL("./echarts/",import.meta.url).href,pi="echarts.esm.min.js",Jt,Ve=class extends g{constructor(){super(...arguments);m(this,Jt,void 0)}static get root(){return di}static set root(e){di=e}static get jsFile(){return pi}static set jsFile(e){pi=e}get echart(){return c(this,Jt)}async installed(){let e=await import(new URL(this.constructor.jsFile,this.constructor.root).href);f(this,Jt,e.init(this.$("main"))),this.draw()}draw(){this.echart.setOption(this.$props)}updated(){this.draw()}render(){return Or("main",null)}};Jt=new WeakMap,l(Ve,"css",ci),l(Ve,"propTypes",{}),l(Ve,"defaultProps",{title:null,tooltip:null,legend:[],xAxis:{},yAxis:{},series:[],width:null,height:null});var{define:w}=omii;w("oi-rate",pe);w("oi-tab",de);w("oi-icon",P);w("oi-bi",X);w("oi-pager",H);w("oi-tree",he);w("oi-loading",oe);w("oi-alert",me);w("oi-accordion",ge);w("oi-breadcrumb",be);w("oi-modal",ve);w("oi-popover",G);w("oi-uploader",xe);w("oi-carousel",we);w("oi-badge",Fe);w("oi-toast",Be);w("oi-progress",Qe);w("oi-tooltip",We);w("oi-layout",ke);w("oi-import",Ne);w("oi-offcanvas",Te);w("oi-pagination",fe);w("oi-dropdown",Le);w("oi-coder",Ce);w("oi-select",Ee);w("oi-table",Ie);w("oi-tinymce",$e);w("oi-echarts",Ve);customElements.define("oi-form",ut,{extends:"form"});var Tr=import.meta.url;omii.ui={utils:Go,css:cs,effect:U,icon:P,tab:de,rate:pe,pager:H,tree:he,treeNode:To,loading:oe,alert:me,accordion:ge,breadcrumb:be,modal:ve,popover:G,uploader:xe,carousel:we,badge:Fe,toast:Be,progress:Qe,tooltip:We,layout:ke,import:Ne,offcanvas:Te,pagination:fe,form:ut,dropdown:Le,coder:Ce,select:Ee,table:Ie,importURL:Tr,sortable:et,tinymce:$e,echarts:Ve};export{ge as accordion,me as alert,X as bicon,be as breadcrumb,we as carousel,Ce as coder,cs as css,Le as dropdown,Ve as echarts,U as effect,ut as form,P as icon,Ne as import,Tr as importURL,ke as layout,oe as loading,ve as modal,Te as offcanvas,H as pager,fe as pagination,G as popover,Qe as progress,pe as rate,Ee as select,et as sortable,de as tab,Ie as table,$e as tinymce,Be as toast,We as tooltip,he as tree,To as treeNode,xe as uploader,Go as utils};
//# sourceMappingURL=omii-ui.js.map
