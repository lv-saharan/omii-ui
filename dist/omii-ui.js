var Ls=Object.defineProperty;var Cs=Object.getPrototypeOf;var Es=Reflect.get;var $s=(t,e,o)=>e in t?Ls(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>($s(t,typeof e!="symbol"?e+"":e,o),o),xo=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var c=(t,e,o)=>(xo(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},f=(t,e,o,i)=>(xo(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),wo=(t,e,o,i)=>({set _(s){f(t,e,s,o)},get _(){return c(t,e,i)}}),Mt=(t,e,o)=>(xo(t,e,"access private method"),o),bt=(t,e,o)=>Es(Cs(t),o,e);var Is=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),Vs=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},Ds=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},_t=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Xt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var zs=["B","KB","MB","GB","TB","PB"],So=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+zs[o]},Js=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},js=(t,e)=>{window.chrome.extension?t():e()},Ht=t=>{t.offsetHeight},Ps=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],Wt=t=>{if(!t)return"file";t=t.toLowerCase();let e=Ps.find(o=>o[0].includes(t));return e==null?"file":e[1]};var ti={tryExtension:js,downloadUrl:Js,getName:Xt,getExtension:_t,cleanHTML:Is,isToday:Vs,isYesterday:Ds,formatSize:So};var As=import.meta.url,Ms="sortable.core.esm.js",oi=new URL("./sortablejs/",As).href,z=null,j={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function _s({autoScroll:t,remove:e,revert:o,multiDrag:i,swap:s}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=oi){z||(z=await import(new URL(Ms,r).href)),t&&!j.AutoScroll&&(j.AutoScroll=!0,z.Sortable.mount(new z.AutoScroll));let[a,n]=z.OnSpill;return e&&!j.Remove&&(j.Remove=!0,z.Sortable.mount(a)),e&&!j.Remove&&(j.Remove=!0,z.Sortable.mount(a)),o&&!j.Remove&&(j.Revert=!0,z.Sortable.mount(n)),i&&!j.MultiDrag&&(j.MultiDrag=!0,z.Sortable.mount(new z.MultiDrag)),s&&!j.Swap&&(j.Swap=!0,z.Sortable.mount(new z.Swap)),z.Sortable}function Xs(t){oi=t}var ot={use:_s,setRoot:Xs};var{define:Kr,h:Gr,Component:Hs}=omii,g=class extends Hs{};var ii=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:it,Component:sa,classNames:si,render:ra}=omii,ue=class extends g{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},{ignoreAttrs:!0,updateSelf:!0}):this.update$Props({activeIndex:t},{ignoreAttrs:!0,updateSelf:!0}))}get slotPanes(){return this.$("slot")?.assignedElements()}async render(t){let e=this.$props,o=t.items??e.items,i=[],s=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,d=a.pane;s.push(it("div",{key:`pane-${a.key??r}`,className:si("pane",{active:n})},d)),i.push(it("div",{key:`nav-${a.key??r}`,className:si("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return it("div",{class:"tabs"},it("div",{class:"navs"},i),it("div",{class:"panes"},s,it("slot",null)))}};l(ue,"css",ii),l(ue,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(ue,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var je={BUNDLE:"bundle",SINGLE:"single"},vt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:ca,h:ri,Component:da}=omii,yt=je.SINGLE,Fo=vt.FILLED,Uo=async(t,e,o)=>{e=e??Fo,e==vt.FILE_TYPE&&(o=je.BUNDLE);try{if((o??yt)==je.BUNDLE){let{default:i}=await import(`./icons/${e}.js`);return i[t]}else{let{default:i}=await import(`./icons/${e}/${t}.js`);return i}}catch{console.error("load icon error",t,e)}},Ws=async(t,e,o,i={})=>{let s=await Uo(t,e,o);return ri("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...i},s)},P=class extends g{static useBundleMode(){yt=je.BUNDLE}static useSingleMode(){yt=je.SINGLE}static get MODES(){return je}static get TYPES(){return vt}static get Mode(){return yt}static set Mode(t){yt=t}static get Type(){return Fo}static set Type(t){Fo=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",i=t?`${t}rem`:"var(--oi-icon-width, 1rem)",s=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,i=await Uo(t,e);return ri("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},i)}};l(P,"updateOnAttributeChanged",!0),l(P,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(P,"defaultProps",{name:null,type:vt.FILLED,viewBox:24,size:null,color:null}),l(P,"createSvg",Ws),l(P,"loadIcon",Uo),l(P,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
  `);var{h:ai}=omii,Bo=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},Ys=async(t,e={})=>{let o=await Bo(t);return ai("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},H=class extends g{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",i=t?`${t}rem`:"var(--oi-bi-width, 1rem)",s=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await Bo(t);return ai("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(H,"updateOnAttributeChanged",!0),l(H,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(H,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(H,"createSvg",Ys),l(H,"loadIcon",Bo),l(H,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var ni=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:wa,h:Qo,Component:Sa,classNames:Zs,render:Fa}=omii,Ro={STAR:"star",HALF:"star_half",BORDER:"star_border"},W,fe=class extends g{constructor(){super(...arguments);m(this,W,-1)}get rateScore(){return this.$props.score}install(){f(this,W,this.$props.score)}rate(e){this.fire("rate",e),f(this,W,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:i,rateable:s,size:r,color:a}=o,n=[],d=c(this,W);for(let p=0;p<i;p++)d-p>=.5?n.push(Ro.STAR):d-p>0?n.push(Ro.HALF):n.push(Ro.BORDER);return Qo("div",{class:Zs("rate-wrap","rate-"+c(this,W))},n.map((p,h)=>s?Qo("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),f(this,W,h+1),this.fire("tryRate",c(this,W)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),f(this,W,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(h+1)}}):Qo("oi-icon",{name:p,size:r,color:a,className:p})))}};W=new WeakMap,l(fe,"css",ni),l(fe,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(fe,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var li=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:E,classNames:xt}=omii,Y=class extends g{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(Y,"css",li),l(Y,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:E("oi-icon",{name:"keyboard_arrow_left"}),next:E("oi-icon",{name:"keyboard_arrow_right"}),first:E("oi-icon",{name:"first_page"}),last:E("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:i}=t;return E("div",{class:xt("prev",{disable:o<=1}),onClick:s=>{o>1&&e.goto(o-1)}},i)},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return E("div",{class:xt("next",{disable:o>=s}),onClick:r=>{s>o&&e.goto(o+1)}},i)},createFirst(t,e){let{first:o,pageNum:i}=t;return E("div",{class:xt("first",{disable:i<=1}),onClick:s=>{i!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return E("div",{class:xt("last",{disable:i>=s}),onClick:r=>{i!=s&&e.goto(s)}},o)},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let d=[];a<1&&(a=1);for(let p=a;p<=n;p++)d.push(E("div",{className:xt({active:i==p,page:!0}),onClick:h=>{i!=p&&e.goto(p)}},p));return d},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return E("div",{class:"info"},E("span",{class:"curr"},o),"/",E("span",{class:"total"},i))},createJumper(t,e){return E("div",{class:"jumper"},"\u524D\u5F80",E("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:d}=t;return E("div",{class:"pager"},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),d(t,e))}}),l(Y,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var ci=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Yt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:Ks,define:Ca,h:Gs,Component:Ea,setTheme:qs}=omii,No="bootstrap";function er(t){No=t,he=new URL(`./${No}/`,import.meta.url).href}var he=new URL(`./${No}/`,import.meta.url).href;function tr(t){he=t}var Zt=(t,e=he)=>fetch(Oo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),or=t=>Zt=t,di=(t,e,o=he)=>{let i=Gs("link",{rel:"styleSheet",href:Oo(t,o)});Ks(i,e??"body")},ir=(t,e=he)=>{di("reboot",t,e)},Oo=(t,e=he)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},ko=new Map,Kt=async(t,e=he)=>{let o=`${e}/${t}`,i=ko.get(o);if(i===void 0){let s=[];ko.set(o,s),i=new CSSStyleSheet;try{i.replaceSync(await Zt(t,e)),s.forEach(r=>{r(i)}),ko.set(o,i)}catch(r){console.error("get css stylesheets error",r)}}else if(i instanceof Array)return new Promise(s=>{i.push(s)});return i},v=(...t)=>Promise.all(t.map(e=>Kt(e))),pi={};Yt.forEach(t=>{Object.defineProperty(pi,t,{get:function(){return Kt(t)}})});var sr=(t=Yt)=>{t.forEach(e=>{Kt(e)})},rr=async(t,e=he)=>{let o=await Zt(`theme.${t}`,e);qs(o)},L=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let i=0,s=(r=[])=>{let a=i%e.length,{classNames:n,duration:d=0,delay:p=0,callback:h=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),h&&h(t,n,d,p)},p*1e3),i++,!(Math.floor(i/e.length)>=o)&&setTimeout(()=>{s(n)},(d+p)*1e3)};s()}},ui={StyleSheets:Yt,CSSStyleSheets:pi,setBaseUrl:tr,setBaseRoot:er,loadStyleSheet:Zt,setStyleSheetLoader:or,addStyleSheet:di,addRebootStyleSheet:ir,getStyleSheetUrl:Oo,getCSSStyleSheet:Kt,getCSSStyleSheets:v,useTheme:rr,timingClassNames:L,preLoad:sr};var{h:U,classNames:wt,extractClass:ar}=omii,st=class extends Y{},me=st;l(me,"css",[()=>v("reboot","pagination","utilities"),ci]),l(me,"defaultProps",{...bt(st,st,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:i}=t;return U("li",{class:wt("page-item",{disabled:o<=1})},U("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{o>1&&e.goto(o-1),s.preventDefault(),s.stopPropagation()}},U("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return U("li",{class:wt("page-item",{disabled:o>=s})},U("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{s>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},U("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:i}=t;return U("li",{class:wt("page-item",{disabled:i<=1})},U("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{i!=1&&e.goto(1),s.preventDefault(),s.stopPropagation()}},U("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return U("li",{class:wt("page-item",{disabled:i>=s})},U("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{i!=s&&e.goto(s),r.preventDefault(),r.stopPropagation()}},U("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let d=[];a<1&&(a=1);for(let p=a;p<=n;p++)d.push(U("li",{key:`pager-${p}`,className:wt("page-item",{active:i==p,page:!0})},U("a",{class:"page-link",href:"#",onClick:h=>{i!=p&&e.goto(p),h.preventDefault(),h.stopPropagation()}},p)));return d},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return U("li",{class:"info page-item"},U("span",{className:"page-link"},U("span",{class:"curr"},o),"/",U("span",{class:"total"},i)))},createJumper(t,e){return U("li",{class:"jumper page-item mx-2"},U("span",{className:"page-link"},"\u524D\u5F80",U("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:d}=t;return U("nav",null,U("ul",{...ar(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),d(t,e)))}}),l(me,"propTypes",{...bt(st,st,"propTypes"),align:String});var fi=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var hi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSUo7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUlKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtBQUFBO0VBRUk7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQU9SO0VBQ0k7O0FBUUE7RUFDSTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBOztBQU1SO0VBQ0k7OztBQU1oQjtFQUVJOzs7QUFHSjtFQUNJIn0= */`;var{h:Z,classNames:Gt,define:nr,getHost:To,throttle:Xa}=omii,rt,St,Co=class extends g{constructor(){super(...arguments);m(this,rt,void 0);m(this,St,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get expander(){return this.node.expander??this.$props.expander??this.tree.$props.expander}get node(){return this.$props.node??{}}get nodes(){return c(this,rt)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=To(this);return o instanceof Co?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?Z("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):Z("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?Z("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):Z("div",{class:"radio-placeholder"}):null}install(){}get Sortable(){return c(this,St)}async installed(){if(this.sortable){let o=await ot.use();f(this,St,o.create(this.$(".children"),{delay:150,handle:".element",fallbackOnBody:!0,invertSwap:!0,group:this.tree.sortGroup,onEnd:i=>{let s=To(i.from),r=To(i.to),a=s.nodes,n=r.nodes;n||(n=[],r.node.children=n),this.tree.fire("sorted",{fromNode:s.node,fromNodes:a,toNode:r.node,toNodes:n,fromIndex:i.oldIndex,toIndex:i.newIndex})}}))}}async render(o){let{node:i,cssss:s}=o;!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this);let r=i.element??i.label??i.key;typeof r=="function"&&(r=await r(i,o,this));let a=null,n=f(this,rt,i.children);return typeof n=="function"&&this.expanded&&f(this,rt,n=await n(i,o,this)),a=Z("div",{class:Gt("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(n instanceof Array?n.map(d=>Z("oi-tree-node",{node:d,"node-level":this.level+1,tree:this.tree,cssss:s})):n)),Z("div",{class:Gt("node",{expanded:this.expanded,"no-children":this.noChildren})},Z("div",{class:Gt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:d=>{d.stopPropagation(),this.selected&&d.ctrlKey===!0?this.unSelect():this.select()}},Z("div",{onClick:d=>{d.stopPropagation(),this.toggle()},class:Gt("expander-wrap",{"no-children":this.noChildren})},!this.noChildren&&this.expander),this.$checkbox,this.$radio,Z("div",{class:"label"},r)),a)}},Pe=Co;rt=new WeakMap,St=new WeakMap,l(Pe,"css",hi),l(Pe,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0,expander:null}),l(Pe,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});nr("oi-tree-node",Pe);var Lo=Pe;var{h:Eo,purgeCSSSS:lr,getHost:qt,classNames:cr}=omii;var Ft,ge=class extends g{constructor(){super(...arguments);m(this,Ft,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKeys(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return c(this,Ft)}isSelected(e){let{multiSelect:o,selectedKey:i,selectedKeys:s}=this.$props;return o?(s??[]).some(r=>r==e):i!=null&&i==e}select(e,o=!0){let{multiSelect:i,selectedKeys:s}=this.$props;i?s.some(r=>r==e)||s.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:i,selectedKeys:s}=this.$props;if(!i)this.$props.selectedKey=null;else{let r=s.indexOf(e);r!=-1&&s.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:i}=this.$props;return o?(i??[]).some(s=>s==e):!1}check(e,o=!0){let{checkboxTree:i,checkedKeys:s}=this.$props;i&&s.indexOf(e)==-1&&s.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:i,checkedKeys:s}=this.$props;if(i){let r=s.indexOf(e);r!=-1&&s.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:i}=this.$props;return o?i!=null&&i==e:!1}radio(e,o=!0){let{radioTree:i}=this.$props;i&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(i=>i==e)}expand(e,o=!0){let{expandedKeys:i}=this.$props;i.indexOf(e)==-1&&i.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:i}=this.$props,s=i.indexOf(e);s!=-1&&i.splice(s,1),o&&this.update()}async installed(){if(this.$props.sortable){let e=await ot.use();f(this,Ft,e.create(this.rootNode,{delay:150,fallbackOnBody:!0,invertSwap:!0,group:this.sortGroup,onEnd:o=>{let i=qt(o.from),s=qt(o.to),r=i.nodes,a=s.nodes;this.fire("sorted",{fromNode:i.node,fromNodes:r,toNode:s.node,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}get nodes(){let e=this.$props.nodes,o=qt(this);return typeof e=="function"&&(e=e.call(o)),e}set nodes(e){this.$props.nodes=e}render(){let e=qt(this),o=lr(this.$props.nodeCss,e);return Eo("div",{class:cr("tree-container",{sortable:this.sortable})},this.nodes.map(i=>Eo("oi-tree-node",{node:i,tree:this,cssss:o})))}};Ft=new WeakMap,l(ge,"css",fi),l(ge,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[],expander:Eo("oi-icon",{name:"keyboard_arrow_right",class:"expander"})}),l(ge,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:en,classNames:tn}=omii,Ut,ie=class extends g{constructor(){super(...arguments);m(this,Ut,void 0)}css(){let{size:e,color:o}=this.$props,i="2rem";if(e)i=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?i=`${a.offsetHeight}px`:i="2rem"}let s=`
    :host{
      --oi-loading-size:${i};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${c(this,Ut)}
    ${s}
    ${r}
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:i}}=await import(`./loadings/${e}.js`);return f(this,Ut,i),o}};Ut=new WeakMap,l(ie,"updateOnAttributeChanged",!0),l(ie,"css",`
    :host{
      display:inline-block;
    }
  `),l(ie,"defaultProps",{name:"circle",size:null,color:null}),l(ie,"propTypes",{name:String,size:Number,color:String});var at={HORIZONTAL:"horizontal",VERTICAL:"vertical"},$o="show",eo="collapse",Io="collapsing",dr="collapse-horizontal",Vo=.35,Do=(t,e)=>e||(t.classList.contains(dr)?at.HORIZONTAL:at.VERTICAL),mi={show(t,e=Vo,o=null){return new Promise(i=>{o=Do(t,o),L(t,[{classNames:[eo]},{classNames:[Io],duration:e,callback(s){s.style[o==at.VERTICAL?"height":"width"]=`${s[o==at.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[eo,$o],callback(s){s.style[o==at.VERTICAL?"height":"width"]="",i()}}])})},hide(t,e=Vo,o=null){return new Promise(i=>{o=Do(t,o);let s=o==at.VERTICAL?"height":"width";t.style[s]=`${t.getBoundingClientRect()[s]}px`,Ht(t.offsetHeight),L(t,[{classNames:[Io,eo,$o]},{classNames:[Io],duration:e,callback(r){r.style[s]=""}},{classNames:[eo],callback:i}])})},toggle(t,e=Vo,o=null){return o=Do(t,o),t.classList.contains($o)?this.hide(t,e,o):this.show(t,e,o)}};var Bt="fade",zo="show",Jo=.15,gi={show(t,e=Jo){return new Promise(o=>{L(t,[{classNames:[Bt]},{classNames:[Bt,zo],duration:e,callback:o}])})},hide(t,e=Jo){return new Promise(o=>{L(t,[{classNames:[Bt,zo]},{classNames:[Bt],duration:e,callback:o}])})},toggle(t,e=Jo){return t.classList.contains(Bt)&&!t.classList.contains(zo)?this.show(t,e):this.hide(t,e)}};var B={collapse:mi,fade:gi};var{h:jo,classNames:pr}=omii;var ur="show",Qt,be=class extends g{constructor(){super(...arguments);m(this,Qt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(ur),f(this,Qt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return c(this,Qt)?null:jo("div",{className:pr("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},jo("slot",null),o?jo("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};Qt=new WeakMap,l(be,"css",()=>v("reboot","utilities","alert","close","transitions")),l(be,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(be,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:nt,classNames:Po}=omii,to={HORIZONTAL:"horizontal",VERTICAL:"vertical"},fr="collapsed",lt,oo,ve=class extends g{constructor(){super(...arguments);m(this,lt)}static get DIRECTIONS(){return to}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:i}=this.$props;if(e.length>0&&i&&(e[0].opened=!0),!o){let s=e.filter(r=>r.opened);if(s.length){let r=s.shift();r.opened=!0,s.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==to.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:i}=this.$props;if(i)Mt(this,lt,oo).call(this,e);else{let s=o.findIndex(a=>a.opened),r=s==-1?null:o[s];r&&r!=e&&Mt(this,lt,oo).call(this,r),Mt(this,lt,oo).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return nt("div",{class:Po("accordion",{"collapse-horizontal":o==to.HORIZONTAL})},e.map((i,s)=>nt("div",{class:"accordion-item",key:i.key??`item-${s}`},nt("h2",{class:"accordion-header"},nt("button",{class:Po("accordion-button",{collapsed:!i.opened}),type:"button","aria-expanded":i.opened,onClick:r=>{this.toggle(i)}},i.header)),nt("div",{class:Po("accordion-collapse",{collapse:!0,show:i.opened})},nt("div",{class:"accordion-body"},typeof i.body=="function"?i.body(i,this.$props,this):i.body)))))}};lt=new WeakSet,oo=function(e){let{items:o,transitionDuration:i}=this.$props,s=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(fr,!e.opened),e.opened?(B.collapse.show(a),this.fire("collapseShow",e)):(B.collapse.hide(a),this.fire("collapseHide",e))},l(ve,"css",()=>v("reboot","utilities","accordion","close","transitions")),l(ve,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:to.VERTICAL}),l(ve,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:Rt,classNames:Fn}=omii,ye=class extends g{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return Rt("nav",{"aria-label":"breadcrumb"},Rt("ol",{class:"breadcrumb"},t.map((o,i)=>i!==t.length-1?Rt("li",{class:"breadcrumb-item"},typeof e=="object"&&i!=0?e:null,Rt("a",{href:o.href},o.label)):Rt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&i!=0?e:null,o.label))))}};l(ye,"css",()=>v("reboot","utilities","breadcrumb")),l(ye,"defaultProps",{}),l(ye,"propTypes",{});var bi=`
.modal .modal-dialog {
  transition: margin-top 0.35s ease;
  margin-top: 0;
}
.modal .modal-dialog.show {
  margin-top: var(--oi-modal-margin);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJO0VBQ0E7O0FBRUE7RUFDSSJ9 */`;var{h:$,classNames:vi,extractClass:hr}=omii,xe=class extends g{open(){this.update$Props({visible:!0}).then(()=>{L(this.$dialog,[{classNames:"show"}])}),this.fire("open")}close(){L(this.$dialog,[{classNames:"show"},{classNames:"",duration:.15},{classNames:"",callback:()=>{this.update$Props({visible:!1})}}]),this.fire("close")}get $dialog(){return this.$(".modal-dialog")}css(){}render(t){let e=this.$props;return $($.f,null,e.visible&&!e.staticPosition&&$("div",{class:vi("modal-backdrop","show")}),$("div",{...hr(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},$("div",{class:vi("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},$("div",{class:"modal-content"},$("div",{class:"modal-header"},$("slot",{name:"header"},$("h5",{class:"modal-title"},e.title),$("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),$("div",{class:"modal-body"},$("slot",null)),$("div",{class:"modal-footer"},$("slot",{name:"footer"}))))))}};l(xe,"css",[()=>v("reboot","modal","utilities","close","scrollbar"),bi]),l(xe,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(xe,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function Nt(t){return t.split("-")[0]}function so(t){return t.split("-")[1]}function Ot(t){return["top","bottom"].includes(Nt(t))?"x":"y"}function Mo(t){return t==="y"?"height":"width"}function yi(t,e,o){let{reference:i,floating:s}=t,r=i.x+i.width/2-s.width/2,a=i.y+i.height/2-s.height/2,n=Ot(e),d=Mo(n),p=i[d]/2-s[d]/2,h=n==="x",u;switch(Nt(e)){case"top":u={x:r,y:i.y-s.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:a};break;case"left":u={x:i.x-s.width,y:a};break;default:u={x:i.x,y:i.y}}switch(so(e)){case"start":u[n]-=p*(o&&h?-1:1);break;case"end":u[n]+=p*(o&&h?-1:1)}return u}var wi=async(t,e,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),d=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:p,y:h}=yi(d,i,n),u=i,b={},y=0;for(let x=0;x<r.length;x++){let{name:S,fn:F}=r[x],{x:R,y:O,data:T,reset:Q}=await F({x:p,y:h,initialPlacement:i,placement:u,strategy:s,middlewareData:b,rects:d,platform:a,elements:{reference:t,floating:e}});p=R??p,h=O??h,b={...b,[S]:{...b[S],...T}},Q&&y<=50&&(y++,typeof Q=="object"&&(Q.placement&&(u=Q.placement),Q.rects&&(d=Q.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):Q.rects),{x:p,y:h}=yi(d,u,n)),x=-1)}return{x:p,y:h,placement:u,strategy:s,middlewareData:b}};function Si(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function kt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function _o(t,e){var o;e===void 0&&(e={});let{x:i,y:s,platform:r,rects:a,elements:n,strategy:d}=t,{boundary:p="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:b=!1,padding:y=0}=e,x=Si(y),S=n[b?u==="floating"?"reference":"floating":u],F=kt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(S)))==null||o?S:S.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:h,strategy:d})),R=kt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:i,y:s}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:d}):a[u]);return{top:F.top-R.top+x.top,bottom:R.bottom-F.bottom+x.bottom,left:F.left-R.left+x.left,right:R.right-F.right+x.right}}var mr=Math.min,gr=Math.max;function Ao(t,e,o){return gr(t,mr(e,o))}var Xo=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:i=0}=t??{},{x:s,y:r,placement:a,rects:n,platform:d}=e;if(o==null)return{};let p=Si(i),h={x:s,y:r},u=Ot(a),b=so(a),y=Mo(u),x=await d.getDimensions(o),S=u==="y"?"top":"left",F=u==="y"?"bottom":"right",R=n.reference[y]+n.reference[u]-h[u]-n.floating[y],O=h[u]-n.reference[u],T=await(d.getOffsetParent==null?void 0:d.getOffsetParent(o)),Q=T?u==="y"?T.clientHeight||0:T.clientWidth||0:0;Q===0&&(Q=n.floating[y]);let qe=R/2-O/2,de=p[S],ze=Q-x[y]-p[F],k=Q/2-x[y]/2+qe,D=Ao(de,k,ze),pe=(b==="start"?p[S]:p[F])>0&&k!==D&&n.reference[y]<=n.floating[y];return{[u]:h[u]-(pe?k<de?de-k:ze-k:0),data:{[u]:D,centerOffset:k-D}}}}),br={left:"right",right:"left",bottom:"top",top:"bottom"};function io(t){return t.replace(/left|right|bottom|top/g,e=>br[e])}function vr(t,e,o){o===void 0&&(o=!1);let i=so(t),s=Ot(t),r=Mo(s),a=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=io(a)),{main:a,cross:io(a)}}var yr={start:"end",end:"start"};function xi(t){return t.replace(/start|end/g,e=>yr[e])}var xr=["top","right","bottom","left"],En=xr.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Tt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:n,elements:d}=e,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:y=!0,...x}=t,S=Nt(i),F=u||(S===a||!y?[io(a)]:function(k){let D=io(k);return[xi(k),D,xi(D)]}(a)),R=[a,...F],O=await _o(e,x),T=[],Q=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&T.push(O[S]),h){let{main:k,cross:D}=vr(i,r,await(n.isRTL==null?void 0:n.isRTL(d.floating)));T.push(O[k],O[D])}if(Q=[...Q,{placement:i,overflows:T}],!T.every(k=>k<=0)){var qe,de;let k=((qe=(de=s.flip)==null?void 0:de.index)!=null?qe:0)+1,D=R[k];if(D)return{data:{index:k,overflows:Q},reset:{placement:D}};let pe="bottom";switch(b){case"bestFit":{var ze;let At=(ze=Q.map(et=>[et,et.overflows.filter(Je=>Je>0).reduce((Je,qo)=>Je+qo,0)]).sort((et,Je)=>et[1]-Je[1])[0])==null?void 0:ze[0].placement;At&&(pe=At);break}case"initialPlacement":pe=a}if(i!==pe)return{reset:{placement:pe}}}return{}}}};var Lt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:i}=e,s=await async function(r,a){let{placement:n,platform:d,elements:p}=r,h=await(d.isRTL==null?void 0:d.isRTL(p.floating)),u=Nt(n),b=so(n),y=Ot(n)==="x",x=["left","top"].includes(u)?-1:1,S=h&&y?-1:1,F=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:O,alignmentAxis:T}=typeof F=="number"?{mainAxis:F,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...F};return b&&typeof T=="number"&&(O=b==="end"?-1*T:T),y?{x:O*S,y:R*x}:{x:R*x,y:O*S}}(e,t);return{x:o+s.x,y:i+s.y,data:s}}}};function wr(t){return t==="x"?"y":"x"}var Ct=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:F=>{let{x:R,y:O}=F;return{x:R,y:O}}},...d}=t,p={x:o,y:i},h=await _o(e,d),u=Ot(Nt(s)),b=wr(u),y=p[u],x=p[b];if(r){let F=u==="y"?"bottom":"right";y=Ao(y+h[u==="y"?"top":"left"],y,y-h[F])}if(a){let F=b==="y"?"bottom":"right";x=Ao(x+h[b==="y"?"top":"left"],x,x-h[F])}let S=n.fn({...e,[u]:y,[b]:x});return{...S,data:{x:S.x-o,y:S.y-i}}}}};function ki(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function re(t){if(t==null)return window;if(!ki(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){return re(t).getComputedStyle(t)}function se(t){return ki(t)?"":t?(t.nodeName||"").toLowerCase():""}function Ni(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function G(t){return t instanceof re(t).HTMLElement}function ct(t){return t instanceof re(t).Element}function dt(t){return typeof ShadowRoot>"u"?!1:t instanceof re(t).ShadowRoot||t instanceof ShadowRoot}function ao(t){let{overflow:e,overflowX:o,overflowY:i}=K(t);return/auto|scroll|overlay|hidden/.test(e+i+o)}function Sr(t){return["table","td","th"].includes(se(t))}function Fi(t){let e=/firefox/i.test(Ni()),o=K(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function Oi(){return!/^((?!chrome|android).)*safari/i.test(Ni())}var Ui=Math.min,Et=Math.max,ro=Math.round;function Ae(t,e,o){var i,s,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),d=1,p=1;e&&G(t)&&(d=t.offsetWidth>0&&ro(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&ro(n.height)/t.offsetHeight||1);let h=ct(t)?re(t):window,u=!Oi()&&o,b=(n.left+(u&&(i=(s=h.visualViewport)==null?void 0:s.offsetLeft)!=null?i:0))/d,y=(n.top+(u&&(r=(a=h.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/d,S=n.height/p;return{width:x,height:S,top:y,right:b+x,bottom:y+S,left:b,x:b,y}}function we(t){return(e=t,(e instanceof re(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function no(t){return ct(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ti(t){return Ae(we(t)).left+no(t).scrollLeft}function Fr(t,e,o){let i=G(e),s=we(e),r=Ae(t,i&&function(d){let p=Ae(d);return ro(p.width)!==d.offsetWidth||ro(p.height)!==d.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(i||!i&&o!=="fixed")if((se(e)!=="body"||ao(s))&&(a=no(e)),G(e)){let d=Ae(e,!0);n.x=d.x+e.clientLeft,n.y=d.y+e.clientTop}else s&&(n.x=Ti(s));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function Li(t){return se(t)==="html"?t:t.assignedSlot||t.parentNode||(dt(t)?t.host:null)||we(t)}function Bi(t){return G(t)&&K(t).position!=="fixed"?function(e){let{offsetParent:o}=e,i=e,s=!1;for(;i&&i!==o;){let{assignedSlot:r}=i;if(r){let a=r.offsetParent;if(K(r).display==="contents"){let n=r.hasAttribute("style"),d=r.style.display;r.style.display=K(i).display,a=r.offsetParent,r.style.display=d,n||r.removeAttribute("style")}i=r,o!==a&&(o=a,s=!0)}else if(dt(i)&&i.host&&s)break;i=dt(i)&&i.host||i.parentNode}return o}(t):null}function Ho(t){let e=re(t),o=Bi(t);for(;o&&Sr(o)&&K(o).position==="static";)o=Bi(o);return o&&(se(o)==="html"||se(o)==="body"&&K(o).position==="static"&&!Fi(o))?e:o||function(i){let s=Li(i);for(dt(s)&&(s=s.host);G(s)&&!["html","body"].includes(se(s));){if(Fi(s))return s;{let r=s.parentNode;s=dt(r)?r.host:r}}return null}(t)||e}function Qi(t){if(G(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Ae(t);return{width:e.width,height:e.height}}function Ci(t){let e=Li(t);return["html","body","#document"].includes(se(e))?t.ownerDocument.body:G(e)&&ao(e)?e:Ci(e)}function Ei(t,e){var o;e===void 0&&(e=[]);let i=Ci(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=re(i),a=s?[r].concat(r.visualViewport||[],ao(i)?i:[]):i,n=e.concat(a);return s?n:n.concat(Ei(a))}function Ri(t,e,o){return e==="viewport"?kt(function(i,s){let r=re(i),a=we(i),n=r.visualViewport,d=a.clientWidth,p=a.clientHeight,h=0,u=0;if(n){d=n.width,p=n.height;let b=Oi();(b||!b&&s==="fixed")&&(h=n.offsetLeft,u=n.offsetTop)}return{width:d,height:p,x:h,y:u}}(t,o)):ct(e)?function(i,s){let r=Ae(i,!1,s==="fixed"),a=r.top+i.clientTop,n=r.left+i.clientLeft;return{top:a,left:n,x:n,y:a,right:n+i.clientWidth,bottom:a+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(e,o):kt(function(i){var s;let r=we(i),a=no(i),n=(s=i.ownerDocument)==null?void 0:s.body,d=Et(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=Et(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),h=-a.scrollLeft+Ti(i),u=-a.scrollTop;return K(n||r).direction==="rtl"&&(h+=Et(r.clientWidth,n?n.clientWidth:0)-d),{width:d,height:p,x:h,y:u}}(we(t)))}function Ur(t){let e=Ei(t),o=["absolute","fixed"].includes(K(t).position)&&G(t)?Ho(t):t;return ct(o)?e.filter(i=>ct(i)&&function(s,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(s.contains(r))return!0;if(a&&dt(a)){let n=r;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(i,o)&&se(i)!=="body"):[]}var Br={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t,r=[...o==="clippingAncestors"?Ur(e):[].concat(o),i],a=r[0],n=r.reduce((d,p)=>{let h=Ri(e,p,s);return d.top=Et(h.top,d.top),d.right=Ui(h.right,d.right),d.bottom=Ui(h.bottom,d.bottom),d.left=Et(h.left,d.left),d},Ri(e,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t,s=G(o),r=we(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((s||!s&&i!=="fixed")&&((se(o)!=="body"||ao(r))&&(a=no(o)),G(o))){let d=Ae(o,!0);n.x=d.x+o.clientLeft,n.y=d.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:ct,getDimensions:Qi,getOffsetParent:Ho,getDocumentElement:we,getElementRects:t=>{let{reference:e,floating:o,strategy:i}=t;return{reference:Fr(e,Ho(o),i),floating:{...Qi(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>K(t).direction==="rtl"};var lo=(t,e,o)=>wi(t,e,{platform:Br,...o});var $i=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Me,classNames:_n,createRef:Qr}=omii,co,Ii,$t,Wo,_e,q=class extends g{constructor(){super(...arguments);m(this,co);m(this,$t);l(this,"slotRef",Qr());m(this,_e,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props,s=c(this,$t,Wo);if(s){let r=this.$(`.${this.type}-arrow`);lo(s,this.$element,{strategy:i,placement:e,middleware:[Tt(),Ct(),Lt(o),Xo({element:r})]}).then(({x:a,y:n,placement:d,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:h,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[d.split("-")[0]];r&&Object.assign(r.style,{left:h!=null?`${h}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let y=this.$element.dataset;b=="top"?y.popperPlacement="bottom":b=="bottom"?y.popperPlacement="top":b=="left"?y.popperPlacement="right":b=="right"&&(y.popperPlacement="left")})}}show(){f(this,_e,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){f(this,_e,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){c(this,_e)?this.hide():this.show()}installed(){let e=c(this,$t,Wo),{triggerShow:o,triggerHide:i}=this.$props;e&&(o.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),i.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),c(this,_e)&&this.hide()})}))}render(e){let{placement:o,header:i,body:s}=this.$props;return Me(Me.f,null,Me("slot",{ref:this.slotRef,tabIndex:!0}),Me("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Me("div",{class:"popover-arrow"}),Me("slot",{name:"header",class:"popover-header"},i),Me("slot",{class:"popover-body",name:"body"},s)))}};co=new WeakSet,Ii=function(){return this.slotRef.current},$t=new WeakSet,Wo=function(){let e=c(this,co,Ii).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},_e=new WeakMap,l(q,"css",[()=>v("reboot","utilities","transitions","popover"),$i]),l(q,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(q,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var Vi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var po=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:C,classNames:Rr}=omii,Di=t=>t?.type?.indexOf("image")==0,kr=t=>Di(t)?(t.url=t.url??po(t.file),C("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):C("div",{className:"file"},C("oi-icon",{"view-box":"1024",name:Wt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),C("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),zi=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return C("div",{className:"pictures"},C("div",{class:"row row-cols-auto g-4"},e.map((s,r)=>C("div",{className:"col",key:`file-${r}`},C("div",{class:"card",onClick:()=>{t.open(r)}},kr(s),C("div",{className:"actions"},C("div",{class:"position-absolute top-50 start-50 translate-middle"},Di(s)&&C("oi-icon",{name:"search"}),C("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(i||e.length==0)&&C("div",{className:"col selector-col",key:"selector"},C("div",{class:"card selector"},C("label",{class:Rr("selector",{multiple:i}),title:o,onClick:()=>{t.open()}},C("oi-icon",{name:"add"}))))))};var{h:A,classNames:sl}=omii,Ji=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return A("div",{className:"files"},A("slot",{name:"actions"},A("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),A("table",{class:"table"},A("tbody",null,e.map(s=>A("tr",null,A("td",null,A("oi-icon",{"view-box":"1024",name:Wt(s.ext),type:"file-type"}),s.name,s.ext),A("td",null,So(s.size)),A("td",null,A("oi-icon",{name:"delete"})))))))};var{h:uo,classNames:nl}=omii,Nr={pictures:zi,files:Ji},fo={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Xe,ae=class extends g{constructor(){super(...arguments);m(this,Xe,-1)}static get STATUS(){return fo}open(e=-1){f(this,Xe,e),this.$("#files").click(),this.fire("open",{index:e})}remove(e){this.$props.files?.splice(e,1),this.updateSelf(),this.fire("remove",{index:e})}select(e){let{multiple:o,files:i,autoUpload:s}=this.$props;if(e?.length==0)return!1;if(o||i.splice(0,i.length),c(this,Xe)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Xt(a.name),ext:_t(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.splice(c(this,Xe),1,...r),this.fire("replaced",{index:c(this,Xe),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Xt(a.name),ext:_t(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.forceUpdate()}upload(){let{files:e,action:o,withCredentials:i,headers:s}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==fo.NONE||a.status==fo.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=i,typeof s=="function"&&(s=s()),typeof s=="object")for(let d in s)n.setRequestHeader(d,s[d]);n.send(a),n.onreadystatechange=d=>{if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=n.responseText;try{p=JSON.parse(p)}catch(h){console.error(h)}this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=fo.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,d)},n.upload.onprogress=d=>{if(d.lengthComputable){let p=Math.ceil(d.loaded/d.total*100);r.progress=p,this.fire("progress",{file:r,loaded:d.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:i}=this.$props;return uo(uo.f,null,uo("slot",null,Nr[i]),uo("input",{id:"files",type:"file",multiple:e,accept:o,onChange:s=>{this.select(s.target.files)}}))}};Xe=new WeakMap,l(ae,"creatPreviewUrl",po),l(ae,"css",[()=>v("reboot","containers","grid","card","utilities","buttons","tables"),Vi]),l(ae,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(ae,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var ji=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var Or="transitionend";var Pi=t=>{t.dispatchEvent(new Event(Or))},Tr=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Ai=t=>{if(!Tr(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let i=t.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return e};var{h:J,classNames:Mi,extractClass:Lr}=omii;var Cr="carousel-item-end",Er="carousel-item-start",$r="carousel-item-next",Ir="carousel-item-prev",Vr=".active",Dr=".carousel-item",Ul=Vr+Dr,He,ne,It,Fe,Se=class extends g{constructor(){super(...arguments);m(this,He,0);m(this,ne,!1);m(this,It,[]);m(this,Fe,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return c(this,He)}get isSliding(){return c(this,ne)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){c(this,ne)&&Pi(this),clearInterval(c(this,Fe)),f(this,Fe,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(c(this,ne))return!1;let{$activeItem:o,$items:i,$props:{duration:s}}=this,r=i.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=i.indexOf(n),e=a>r):typeof e=="number"?(a=(e+i.length)%i.length,n=i[a],e=a>r):(a=(r+1)%i.length,e||(a=(r-1+i.length)%i.length),n=i[a]),c(this,He)==a)return!1;let d=e?Er:Cr,p=e?$r:Ir;f(this,ne,!0);let h=Number.parseFloat(o.getAttribute("waiting"))??0;L(n,[{classNames:[],duration:h},{classNames:[p],callback:()=>{Ht(n)}},{classNames:[p,d],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),L(o,[{classNames:[],duration:h},{classNames:[d,"active"],duration:s},{classNames:[],callback:()=>{f(this,ne,!1),f(this,He,a);let u;for(;u=c(this,It).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Ai(this)&&this.slide()}cycle(){c(this,Fe)&&clearInterval(c(this,Fe)),f(this,Fe,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),f(this,He,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(c(this,ne)?c(this,It).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:i,prevCtrl:s,indicator:r}=this.$props;return J("div",{...Lr(e,"carousel")},J("slot",{class:"carousel-inner"},o.map(a=>J("div",{className:Mi("carousel-item"),waiting:a.attributes?.waiting},a))),J("div",{class:"carousel-indicators"},J("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),J("slot",{name:"actions"},typeof i=="function"&&i(this),typeof s=="function"&&s(this)))}};He=new WeakMap,ne=new WeakMap,It=new WeakMap,Fe=new WeakMap,l(Se,"css",[()=>v("reboot","utilities","carousel"),ji]),l(Se,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>J("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},J("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),J("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>J("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},J("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),J("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>J("button",{type:"button",onClick:i=>o.slide(e),class:Mi({active:e==0})})}),l(Se,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Yo,classNames:Rl,extractClass:zr}=omii,Ue=class extends g{css(){}render(t){let{text:e,desc:o,position:i}=this.$props,s=i?i.split("-"):[];return Yo("span",{...zr(t,"badge",{"position-absolute":i,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":i,"rounded-pill":i})},Yo("slot",null,e),o&&Yo("span",{class:"visually-hidden"},o))}};l(Ue,"css",()=>v("reboot","utilities","badge")),l(Ue,"defaultProps",{text:"",desc:!1,position:!1}),l(Ue,"propTypes",{});var _i=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:pt,classNames:Cl,extractClass:Jr}=omii,Qe,Be=class extends g{constructor(){super(...arguments);m(this,Qe,!0)}get closed(){return c(this,Qe)}close(){f(this,Qe,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){f(this,Qe,!1),this.update(),B.fade.show(this)}install(){f(this,Qe,!this.$props.visible)}render(e){return pt("div",{...Jr(e,"toast",{show:!c(this,Qe)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},pt("div",{class:"toast-header"},pt("slot",{name:"header"}),pt("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),pt("div",{class:"toast-body"},pt("slot",null)))}};Qe=new WeakMap,l(Be,"css",[()=>v("reboot","utilities","toasts","close"),_i]),l(Be,"defaultProps",{visible:!1}),l(Be,"propTypes",{visible:Boolean});var{h:Zo,classNames:jr,extractClass:Jl}=omii,Re=class extends g{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:i,max:s,showPercent:r,striped:a,animated:n,style:d,className:p}=this.$props;return Zo("div",{class:"progress",style:d},Zo("div",{class:jr("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":s},r&&Zo("span",null,o,"%")))}};l(Re,"css",()=>v("reboot","utilities","progress")),l(Re,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(Re,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Xi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:ut,classNames:Xl,createRef:Hl}=omii,ho=class extends q{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return ut(ut.f,null,ut("slot",{ref:this.slotRef}),ut("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},ut("div",{class:"tooltip-arrow"}),ut("slot",{class:"tooltip-inner",name:"body"},o)))}},We=ho;l(We,"css",[()=>v("reboot","utilities","transitions","tooltip"),Xi]),l(We,"defaultProps",{...bt(ho,ho,"defaultProps"),offset:0});var Hi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:ke,classNames:ql,createRef:ft}=omii,M,le,_,Ye,Ze,mo,Ne=class extends g{constructor(){super(...arguments);m(this,M,ft());m(this,le,ft());m(this,_,ft());m(this,Ye,ft());m(this,Ze,ft());m(this,mo,ft())}close(e,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(c(this,_).current),c(this,le).current.style.height=this.clientHeight-c(this,M).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(c(this,_).current),c(this,le).current.style.height=this.clientHeight-c(this,M).current.clientHeight-c(this,_).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(c(this,M).current),c(this,le).current.style.height=this.clientHeight-c(this,_).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(c(this,M).current),c(this,le).current.style.height=this.clientHeight-c(this,M).current.scrollHeight-c(this,_).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(c(this,Ye).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(c(this,Ye).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(c(this,Ze).current)}openRight(){this.$props.openRight=!0,B.collapse.show(c(this,Ze).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=c(this,M).current.getBoundingClientRect(),i=c(this,_).current.getBoundingClientRect();c(this,le).current.style.height=e.height-o.height-i.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:i,openRight:s}=this.$props;e||(c(this,_).current.style.height=0),o||(c(this,M).current.style.height=0),i||(c(this,Ye).current.style.height=0),s||(c(this,Ze).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return ke(ke.f,null,ke("slot",{name:"header",ref:c(this,M)}),ke("main",{ref:c(this,le)},ke("slot",{name:"left",ref:c(this,Ye),class:"collapse-horizontal"}),ke("slot",{name:"content",ref:c(this,mo)}),ke("slot",{name:"right",ref:c(this,Ze),class:"collapse-horizontal"})),ke("slot",{name:"footer",ref:c(this,_)}))}};M=new WeakMap,le=new WeakMap,_=new WeakMap,Ye=new WeakMap,Ze=new WeakMap,mo=new WeakMap,l(Ne,"css",[Hi]),l(Ne,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(Ne,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Wi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:Ko,classNames:lc,uniqueTag:Pr}=omii,ee,Oe=class extends g{constructor(){super(...arguments);m(this,ee,void 0)}get $module(){return c(this,ee)}load(e,o,i,s){o=o??this.$props.module,i=i??this.$props.loading,s=s??this.$props.loadError,f(this,ee,i),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)f(this,ee,s);else if(typeof a=="function"){let n=Pr(a);f(this,ee,Ko(n,null))}else f(this,ee,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),f(this,ee,s),this.updateSelf()})}install(){let{src:e,module:o,loading:i,loadError:s}=this.$props;this.load(e,o,i,s)}render(e){return c(this,ee)}};ee=new WeakMap,l(Oe,"css",[Wi]),l(Oe,"defaultProps",{src:null,module:"default",loading:Ko("oi-loading",{size:"6"}),loadError:Ko("h1",null,"Module Load Error")}),l(Oe,"propTypes",{src:String,module:String});var Yi=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Te,classNames:hc,createRef:Zi,extractClass:Ar}=omii,te,Le=class extends g{constructor(){super(...arguments);l(this,"offcanvasRef",Zi());l(this,"backdropRef",Zi());m(this,te,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(c(this,te))return;f(this,te,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;L(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){c(this,te)?this.hide():this.show()}open(){this.show()}hide(){if(!c(this,te))return;f(this,te,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;L(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){f(this,te,this.$props.visible)}render(e){let{visible:o,placement:i,position:s,title:r,useBackdrop:a}=this.$props;return Te(Te.f,null,Te("div",{ref:this.offcanvasRef,...Ar(e,"offcanvas",`offcanvas-${i}`,`position-${s}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Te("div",{class:"offcanvas-header"},Te("slot",{name:"title",class:"offcanvas-title h5"},r),Te("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Te("slot",{class:"offcanvas-body"})),a&&c(this,te)&&Te("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};te=new WeakMap,l(Le,"css",[()=>v("reboot","offcanvas","utilities","close"),Yi]),l(Le,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Le,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:wc,classNames:Sc,extractClass:Fc,createRef:Uc}=omii;function qi(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let i in e)i!=="valid"&&e[i]===!0&&o.push(i);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function Ki(t){let e=t.currentTarget;e.checkValidity(),qi(t.target),e.classList.add("was-validated")}function es(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(i=>{qi(i)}),t.classList.add("was-validated"),o.every(i=>i.checkValidity?i.checkValidity():!0)&&e}function Gi(t){let e=t.target;e.removeEventListener("input",Ki),e.addEventListener("input",Ki,!1),es(e)||(t.preventDefault(),t.stopPropagation())}var ht=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",Gi),e.addEventListener("submit",Gi,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return es(this)}connectedCallback(){this.constructor.validate(this)}};var ts=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:go,classNames:Rc,createRef:os}=omii,oe=null;document.addEventListener("click",t=>{oe&&oe.hide()});var Dt,zt,ce,Ke,Ge,Vt,mt,Ce=class extends g{constructor(){super(...arguments);m(this,ce);m(this,Ge);m(this,Dt,os());m(this,zt,os());m(this,mt,!1)}get $menu(){return c(this,Dt).current}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props;lo(c(this,Ge,Vt),this.$menu,{strategy:i,placement:e,middleware:[Tt(),Ct(),Lt(o)]}).then(({x:s,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${r}px`})})}show(){f(this,mt,!0),c(this,ce,Ke).focus(),c(this,ce,Ke).setAttribute("aria-expanded",!0),c(this,ce,Ke).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),oe=this,this.setPosition()}hide(){f(this,mt,!1),c(this,ce,Ke).classList.remove("show"),c(this,ce,Ke).setAttribute("aria-expanded","false"),oe=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){c(this,mt)?this.hide():this.show()}installed(){let{trigger:e}=this.$props;e=="click"?c(this,Ge,Vt).addEventListener("click",o=>{oe&&oe!=this&&oe.hide(),o.preventDefault(),o.stopImmediatePropagation(),this.toggle()}):e=="focus"&&(c(this,Ge,Vt).addEventListener("focus",o=>{oe&&oe!=this&&oe.hide(),o.preventDefault(),o.stopImmediatePropagation(),this.show()}),c(this,Ge,Vt).addEventListener("blur",o=>{o.preventDefault(),o.stopImmediatePropagation(),this.hide()})),this.addEventListener("click",o=>{o.stopImmediatePropagation()})}render(e){let{menu:o}=this.$props;return go(go.f,null,go("slot",{ref:c(this,zt)}),go("slot",{name:"menu",ref:c(this,Dt)},o))}};Dt=new WeakMap,zt=new WeakMap,ce=new WeakSet,Ke=function(){return c(this,zt).current},Ge=new WeakSet,Vt=function(){let e=c(this,ce,Ke).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},mt=new WeakMap,l(Ce,"css",[()=>v("reboot","utilities","transitions","dropdown"),ts]),l(Ce,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Ce,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var is=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:Mr,Component:$c}=omii,bo,Ee=class extends g{constructor(){super(...arguments);m(this,bo,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:i,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{f(this,bo,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:i,fontSize:s,minimap:{enabled:!1}})})}render(){return Mr("div",{class:"coder"})}};bo=new WeakMap,l(Ee,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,i=new CSSStyleSheet;return i.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i],fetch(new URL("./monaco/index.css",e).href).then(s=>s.text())},is]),l(Ee,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(Ee,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var ss=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFFQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBT0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7O0FBRUE7RUFDSTs7QUFLWjtFQUNJO0VBRUE7O0FBRUE7RUFDSTs7QUFFQTtFQUNJOztBQUtSO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0kifQ== */`;var{h:I,classNames:rs,extractClass:jc}=omii,gt,X,N,$e=class extends g{constructor(){super(...arguments);m(this,gt,!1);m(this,X,void 0);m(this,N,!1)}get value(){return this.$props.value}set value(e){this.$props.value=e}get validity(){let{required:e,values:o,min:i,max:s,multiple:r}=this.$props,a={valid:!0};return e&&(r&&(!o||o.length==0)||this.value==null||this.value=="")&&(a.valid=!1,a.valueMissing=!0),a.valid&&r&&(i!=0&&i>o.length&&(a.valid=!1,a.rangeUnderflow=!0),s!=0&&s<o.length&&(a.valid=!1,a.rangeOverflow=!0)),a}checkValidity(){f(this,gt,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}hideOptions(){this.$("oi-dropdown").hide()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",o=>{this.showOptions()}),this.addEventListener("blur",o=>{f(this,N,!1),f(this,X,null),this.hideOptions(),this.updateSelf()});let{options:e}=this.$props;this.addEventListener("keydown",o=>{if(["Enter","ArrowUp","ArrowDown"].includes(o.key))o.preventDefault(),o.stopPropagation();else return!1;let s=c(this,X)?this.$$("li.option.match"):this.$$("li.option");if(s.length){s.forEach((a,n)=>{a.classList.contains("active")&&f(this,N,n),a.classList.remove("active")}),o.key=="Enter"?(c(this,N)===!1&&f(this,N,0),f(this,X,null),this.hideOptions()):o.key=="ArrowUp"?c(this,N)===!1?f(this,N,s.length-1):c(this,N)>0&&wo(this,N)._--:o.key=="ArrowDown"&&(c(this,N)===!1?f(this,N,0):c(this,N)<s.length-1&&wo(this,N)._++);let r=s[c(this,N)];if(r){r.classList.add("active");let a=e.at(r.dataset.index);this.toggleOption(a,!1)}}})}toggleOption(e,o=!0){let{values:i,multiple:s}=this.$props;if(s){let r=i.indexOf(e.value);r==-1?i.push(e.value):i.splice(r,1)}else this.value=e.value,o&&this.hideOptions();f(this,X,null),this.updateSelf(),c(this,gt)&&this.checkValidity(),this.fire("change",s?{value:this.value}:{values:i})}render(){let{values:e,value:o,searchable:i,options:s,preserveOrder:r,createSelected:a,createOption:n,multiple:d}=this.$props;return n=n.bind(this),a=a.bind(this),e=e??[],r&&d&&e.sort((p,h)=>s.findIndex(u=>u.value==p)-s.findIndex(u=>u.value==h)),s=s??[],I("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},d?I("div",{class:"selected d-flex",onClick:p=>{p.stopImmediatePropagation()}},"\xA0",I("ul",{class:"values flex-grow-1"},e.map((p,h)=>{let u=s.find(b=>b.value==p);if(u)return a(u,h)})),I("div",{class:"expander",onClick:p=>{this.showOptions()}})):I("div",{className:"selected d-flex",onClick:p=>{p.stopImmediatePropagation()}},I("input",{className:"value  flex-grow-1",readOnly:!i,value:c(this,X)??s.find(p=>p.value==o)?.text,onFocus:p=>{this.showOptions()},onInput:p=>{f(this,X,p.target.value),f(this,N,!1),this.updateSelf()}}),I("div",{class:"expander",onClick:p=>{this.showOptions()}})),I("ul",{className:rs("dropdown-menu",{searching:c(this,X),multiple:d}),slot:"menu"},s.map((p,h)=>I("li",{"data-index":h,className:rs("option",{match:p.text.includes(c(this,X)),active:d?e.includes(p.value):o==p.value}),onClick:u=>{this.toggleOption(p)}},n(p,h)))))}};gt=new WeakMap,X=new WeakMap,N=new WeakMap,l($e,"css",[()=>v("reboot","utilities","forms","scrollbar"),ss]),l($e,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,searchable:Boolean,min:Number,max:Number}),l($e,"defaultProps",{options:[],values:[],value:null,multiple:!0,required:!1,searchable:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:i,multiple:s}=this.$props;return I("div",{class:"form-check d-flex"},s&&I("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:i.includes(e.value)}),I("label",{class:"form-check-label flex-grow-1"},e.text))},createSelected(e,o){let{values:i}=this.$props;return I("li",{onClick:s=>{s.stopImmediatePropagation()}},e.text,I("oi-bi",{name:"x",onClick:s=>{i.splice(o,1),this.updateSelf(),s.stopPropagation(),c(this,gt)&&this.checkValidity()}}))}});var as=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:V,classNames:Wc,extractClass:_r}=omii,Ie=class extends g{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:i,dataCellFormatter:s,height:r}=this.$props,a=_r(this.$props)?.class??"";return V("div",{className:"table-container",style:{height:r}},V("table",{className:`table ${a}`},V("thead",null,o&&V("tr",null,t?.map(n=>V("th",{style:n.titleStyle,scope:"col"},i(n,t,e,this)))),V("slot",{name:"header"})),V("tbody",null,e?.map((n,d)=>V("tr",null,t.map(p=>V("td",{style:p.style},s(p,n,d,e,this)))))),V("tfoot",null,V("slot",{name:"footer"}))))}};l(Ie,"css",[()=>v("reboot","utilities","tables"),as]),l(Ie,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,i){if(t.type=="checkbox"){t.checked||(t.checked=[]);let s=o?.map(a=>a[t.field])??[],r=s.every(a=>t.checked.includes(a));return V("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...s);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),d=new Set(s.filter(p=>!n.has(p)));t.checked.splice(0,t.checked.length,...d)}await i.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,i,s){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),V("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await s.updateSelf()}});case"radio":return V("input",{type:"radio"});default:return r}},height:"auto"}),l(Ie,"propTypes",{showHeader:Boolean});var ns=`
:host {
  display: block;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
:host .editor {
  border: none;
  outline: none;
}
:host .editor[contentEditable=true]:focus, :host .editor[contentEditable=true]:hover {
  outline: 2px solid #1976D2;
}
:host .tox-statusbar__branding {
  display: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFx0aW55bWNlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFLSTtFQUNBOztBQUxBO0VBRUk7O0FBTVI7RUFDSSJ9 */`;var{h:Go,classNames:td,extractClass:od}=omii,ls=!0,cs=new URL("./tinymce/",import.meta.url).href,ds="./tinymce.js",Jt,vo,yo,jt,Ve=class extends g{constructor(){super(...arguments);m(this,Jt,void 0);m(this,vo,void 0);m(this,yo,!1);m(this,jt,!1)}static get min(){return ls}static set min(e){ls=e}static get root(){return cs}static set root(e){cs=e}static get jsFile(){return ds}static set jsFile(e){ds=e}static async use(){return await import(new URL(this.jsFile,this.root).href)}get value(){return this.$props.value}set value(e){if(this.$props.value=e,this.editor&&c(this,jt))try{this.editor.setContent(e)}catch{console.log("editor not init")}}get editor(){return c(this,Jt)}css(){return c(this,vo)}get validity(){let{required:e}=this.$props,o={valid:!0};return e&&value==""&&(o.valid=!1,o.valueMissing=!0),o}checkValidity(){f(this,yo,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}get editorId(){return`editor${this.elementId}`}async installed(){await this.constructor.use();let e=this.$(`#${this.editorId}`),{menu:o,menubar:i,toolbar:s,plugins:r,language:a,toolbarMode:n,baseUrl:d,inline:p,readonly:h,contentStyle:u,contentCss:b,fontFamilyFormats:y,blockFormats:x,fontSizeFormats:S,lineHeightFormats:F,indentUseMargin:R,indentation:O,styleFormats:T,styleFormatsMerge:Q,colorCols:qe,colorMap:de,imagesUploadUrl:ze,imagesUploadHandler:k,imagesUploadBasePath:D,imagesUploadCredentials:pe,imagesReuseFilename:At,imagesFileTypes:et,imageList:Je,imageBatch:qo,imageAdvtab:hs,imageUploadtab:ms,imageDimensions:gs,imageTitle:bs,imagePrependUrl:vs,automaticUploads:ys,filePickerTypes:xs,filePickerCallback:ws,templates:Ss,importcssGroups:Fs,importcssAppend:Us,width:Bs,height:Qs,minWidth:Rs,minHeight:ks,maxWidth:Ns,maxHeight:Os,resize:Ts}=this.$props;tinymce.init({target:e,promotion:!1,base_url:d??this.constructor.root,menu:o,menubar:i,toolbar:s,toolbar_mode:n,plugins:r,language:a,inline:p,readonly:h,extended_valid_elements:"oi-icon[name|color|size]",custom_elements:"oi-icon",content_css:b,content_style:u,font_family_formats:y,block_formats:x,font_size_formats:S,line_height_formats:F,indent_use_margin:R,indentation:O,style_formats:T,style_formats_merge:Q,color_cols:qe,color_map:de,images_upload_url:ze,images_upload_handler:k,images_upload_base_path:D,images_upload_credentials:pe,images_reuse_filename:At,images_file_types:et,image_list:Je,image_advtab:hs,image_uploadtab:ms,image_dimensions:gs,image_title:bs,image_prepend_url:vs,automatic_uploads:ys,file_picker_types:xs,file_picker_callback:ws,importcss_groups:Fs,templates:Ss,importcss_append:Us,width:Bs,height:Qs,min_width:Rs,min_height:ks,max_width:Ns,max_height:Os,resize:Ts,setup:tt=>{f(this,Jt,tt),this.fire("setup",{editor:tt}),tt.on("init",ei=>{f(this,jt,!0),this.fire("ready")}),tt.on("blur",ei=>{console.log("editor blur")}),tt.on("change",ei=>{this.$props.value=tt.getContent(),this.fire("change",{value:this.value})})}})}render(){let{inline:e}=this.$props;return e?Go("div",null,Go("div",{class:"editor",id:this.editorId},this.value)):Go("textarea",{class:"editor",id:this.editorId,value:this.value,placeholder:this.placeholder})}};Jt=new WeakMap,vo=new WeakMap,yo=new WeakMap,jt=new WeakMap,l(Ve,"css",[()=>v("reboot","scrollbar"),ns]),l(Ve,"propTypes",{value:String,placeholder:String,required:Boolean,inline:Boolean,readonly:Boolean}),l(Ve,"defaultProps",{value:"",width:null,height:null,minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,resize:!0,placeholder:"...",readonly:!1,required:!1,language:"zh-Hans",directionality:null,plugins:"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",toolbar:"undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage  quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print",toolbarSticky:!0,toolbarMode:"wrap",menu:null,menubar:!1,inline:!1,contentCss:null,contentStyle:null,blockFormats:"Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",fontFamilyFormats:"\u5B8B\u4F53=\u5B8B\u4F53;\u4EFF\u5B8B=\u4EFF\u5B8B;\u6977\u4F53=\u6977\u4F53;\u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;\u9ED1\u4F53=\u9ED1\u4F53;\u96B6\u4E66=\u96B6\u4E66;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",fontSizeFormats:null,lineHeightFormats:null,indentation:null,indentUseMargin:!1,styleFormatsMerge:!0,styleFormats:null,colorCols:5,colorMap:null,imagesUploadUrl:null,imagesUploadHandler:null,imagesUploadBasePath:null,imagesUploadCredentials:!1,imagesReuseFilename:!1,imagesFileTypes:null,imageList:null,imageAdvtab:!0,imageUploadtab:!1,imageDimensions:!0,imageTitle:!0,imagePrependUrl:null,imageBatch:!1,automaticUploads:!0,filePickerTypes:null,filePickerCallback:null,templates:null,importcssAppend:!0,importcssGroups:[{title:"Table styles",filter:/^(td|tr)\./},{title:"Block styles",filter:/^(div|p)\./},{title:"Other styles"}]});var ps=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdFxcb21paS11aVxcc3JjXFxlY2hhcnRzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EifQ== */`;var{h:Xr,classNames:cd,extractClass:dd}=omii,us=new URL("./echarts/",import.meta.url).href,fs="echarts.esm.min.js",Pt,De=class extends g{constructor(){super(...arguments);m(this,Pt,void 0)}static get root(){return us}static set root(e){us=e}static get jsFile(){return fs}static set jsFile(e){fs=e}get echart(){return c(this,Pt)}async installed(){let e=await import(new URL(this.constructor.jsFile,this.constructor.root).href);f(this,Pt,e.init(this.$("main"))),this.draw()}draw(){this.echart.setOption(this.$props)}updated(){this.draw()}render(){return Xr("main",null)}};Pt=new WeakMap,l(De,"css",ps),l(De,"propTypes",{}),l(De,"defaultProps",{title:null,tooltip:null,legend:[],xAxis:{},yAxis:{},series:[],width:null,height:null});var{define:w}=omii;w("oi-rate",fe);w("oi-tab",ue);w("oi-icon",P);w("oi-bi",H);w("oi-pager",Y);w("oi-tree",ge);w("oi-loading",ie);w("oi-alert",be);w("oi-accordion",ve);w("oi-breadcrumb",ye);w("oi-modal",xe);w("oi-popover",q);w("oi-uploader",ae);w("oi-carousel",Se);w("oi-badge",Ue);w("oi-toast",Be);w("oi-progress",Re);w("oi-tooltip",We);w("oi-layout",Ne);w("oi-import",Oe);w("oi-offcanvas",Le);w("oi-pagination",me);w("oi-dropdown",Ce);w("oi-coder",Ee);w("oi-select",$e);w("oi-table",Ie);w("oi-tinymce",Ve);w("oi-echarts",De);customElements.define("oi-form",ht,{extends:"form"});var Hr=import.meta.url;omii.ui={utils:ti,css:ui,effect:B,icon:P,tab:ue,rate:fe,pager:Y,tree:ge,treeNode:Lo,loading:ie,alert:be,accordion:ve,breadcrumb:ye,modal:xe,popover:q,uploader:ae,carousel:Se,badge:Ue,toast:Be,progress:Re,tooltip:We,layout:Ne,import:Oe,offcanvas:Le,pagination:me,form:ht,dropdown:Ce,coder:Ee,select:$e,table:Ie,importURL:Hr,sortable:ot,tinymce:Ve,echarts:De};export{ve as accordion,be as alert,H as bicon,ye as breadcrumb,Se as carousel,Ee as coder,ui as css,Ce as dropdown,De as echarts,B as effect,ht as form,P as icon,Oe as import,Hr as importURL,Ne as layout,ie as loading,xe as modal,Le as offcanvas,Y as pager,me as pagination,q as popover,Re as progress,fe as rate,$e as select,ot as sortable,ue as tab,Ie as table,Ve as tinymce,Be as toast,We as tooltip,ge as tree,Lo as treeNode,ae as uploader,ti as utils};
//# sourceMappingURL=omii-ui.js.map
