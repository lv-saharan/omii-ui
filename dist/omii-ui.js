var Js=Object.defineProperty;var js=Object.getPrototypeOf;var Ps=Reflect.get;var As=(t,e,o)=>e in t?Js(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var c=(t,e,o)=>(As(t,typeof e!="symbol"?e+"":e,o),o),So=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(So(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},h=(t,e,o,i)=>(So(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o),Fo=(t,e,o,i)=>({set _(s){h(t,e,s,o)},get _(){return d(t,e,i)}}),Xt=(t,e,o)=>(So(t,e,"access private method"),o),gt=(t,e,o)=>Ps(js(t),o,e);var Ms=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),_s=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},Xs=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},Ht=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Wt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var Hs=["B","KB","MB","GB","TB","PB"],Uo=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+Hs[o]},Ws=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},Ys=(t,e)=>{window.chrome.extension?t():e()},Yt=t=>{t.offsetHeight},Zs=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],bt=t=>{if(!t)return"file";t=t.toLowerCase();let e=Zs.find(o=>o[0].includes(t));return e==null?"file":e[1]};var ri={tryExtension:Ys,getFileType:bt,downloadUrl:Ws,getName:Wt,getExtension:Ht,cleanHTML:Ms,isToday:_s,isYesterday:Xs,formatSize:Uo};var Ks=import.meta.url,qs="sortable.core.esm.js",ai=new URL("./sortablejs/",Ks).href,J=null,A={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function Gs({autoScroll:t,remove:e,revert:o,multiDrag:i,swap:s}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=ai){J||(J=await import(new URL(qs,r).href)),t&&!A.AutoScroll&&(A.AutoScroll=!0,J.Sortable.mount(new J.AutoScroll));let[a,n]=J.OnSpill;return e&&!A.Remove&&(A.Remove=!0,J.Sortable.mount(a)),e&&!A.Remove&&(A.Remove=!0,J.Sortable.mount(a)),o&&!A.Remove&&(A.Revert=!0,J.Sortable.mount(n)),i&&!A.MultiDrag&&(A.MultiDrag=!0,J.Sortable.mount(new J.MultiDrag)),s&&!A.Swap&&(A.Swap=!0,J.Sortable.mount(new J.Swap)),J.Sortable}function er(t){ai=t}var ot={use:Gs,setRoot:er};var{define:sa,h:ra,Component:tr}=omii,g=class extends tr{};var ni=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:it,Component:pa,classNames:li,render:ua}=omii,fe=class extends g{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},{ignoreAttrs:!0,updateSelf:!0}):this.update$Props({activeIndex:t},{ignoreAttrs:!0,updateSelf:!0}))}get slotPanes(){return this.$("slot")?.assignedElements()}async render(t){let e=this.$props,o=t.items??e.items,i=[],s=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,p=a.pane;s.push(it("div",{key:`pane-${a.key??r}`,className:li("pane",{active:n})},p)),i.push(it("div",{key:`nav-${a.key??r}`,className:li("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return it("div",{class:"tabs"},it("div",{class:"navs"},i),it("div",{class:"panes"},s,it("slot",null)))}};c(fe,"css",ni),c(fe,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),c(fe,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Ae={BUNDLE:"bundle",SINGLE:"single"},vt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:ga,h:di,Component:ba}=omii,yt=Ae.SINGLE,Bo=vt.FILLED,ci=new Map,Qo=async(t,e,o)=>{e=e??Bo,e==vt.FILE_TYPE&&(o=Ae.BUNDLE);try{if((o??yt)==Ae.BUNDLE){let{default:i}=await import(`./icons/${e}.js`);return i[t]}else{let i=`${e}:${t}`,s=ci.get(i);if(s==null){s={icon:!1,resolves:[]},ci.set(i,s);try{let{default:r}=await import(`./icons/${e}/${t}.js`);s.icon=r}catch{s.icon=null}for(let r of s.resolves)r(s.icon);return s.resolves=[],s.icon}return s.icon===!1?new Promise((r,a)=>{s.resolves.push(r)}):s.icon}}catch(i){return console.error("load icon error",t,e,i),null}},or=async(t,e,o,i={})=>{let s=await Qo(t,e,o);return di("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...i},s)},M=class extends g{static useBundleMode(){yt=Ae.BUNDLE}static useSingleMode(){yt=Ae.SINGLE}static get MODES(){return Ae}static get TYPES(){return vt}static get Mode(){return yt}static set Mode(t){yt=t}static get Type(){return Bo}static set Type(t){Bo=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",i=t?`${t}rem`:"var(--oi-icon-width, 1rem)",s=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,i=await Qo(t,e);return di("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${o} ${o}`},i)}};c(M,"updateOnAttributeChanged",!0),c(M,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),c(M,"defaultProps",{name:null,type:vt.FILLED,viewBox:24,size:null,color:null}),c(M,"createSvg",or),c(M,"loadIcon",Qo),c(M,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
  `);var{h:ui}=omii,pi=new Map,Ro=async t=>{try{let e=t,o=pi.get(e);if(o==null){o={icon:!1,resolves:[]},pi.set(e,o);try{let{default:i}=await import(`./bootstrap/icons/${t}.js`);o.icon=i}catch{o.icon=null}for(let i of o.resolves)i(o.icon);return o.resolves=[],o.icon}return o.icon===!1?new Promise((i,s)=>{o.resolves.push(i)}):o.icon}catch{return console.error("load icon error",t),null}},ir=async(t,e={})=>{let o=await Ro(t);return ui("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},W=class extends g{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",i=t?`${t}rem`:"var(--oi-bi-width, 1rem)",s=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await Ro(t);return ui("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};c(W,"updateOnAttributeChanged",!0),c(W,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),c(W,"defaultProps",{name:null,viewBox:16,size:null,color:null}),c(W,"createSvg",ir),c(W,"loadIcon",Ro),c(W,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var fi=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:ka,h:ko,Component:Na,classNames:sr,render:Oa}=omii,No={STAR:"star",HALF:"star_half",BORDER:"star_border"},Y,he=class extends g{constructor(){super(...arguments);m(this,Y,-1)}get rateScore(){return this.$props.score}install(){h(this,Y,this.$props.score)}rate(e){this.fire("rate",e),h(this,Y,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:i,rateable:s,size:r,color:a}=o,n=[],p=d(this,Y);for(let l=0;l<i;l++)p-l>=.5?n.push(No.STAR):p-l>0?n.push(No.HALF):n.push(No.BORDER);return ko("div",{class:sr("rate-wrap","rate-"+d(this,Y))},n.map((l,f)=>s?ko("oi-icon",{name:l,size:r,color:a,className:l,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),h(this,Y,f+1),this.fire("tryRate",d(this,Y)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),h(this,Y,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):ko("oi-icon",{name:l,size:r,color:a,className:l})))}};Y=new WeakMap,c(he,"css",fi),c(he,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),c(he,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var hi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:C,classNames:xt}=omii,Z=class extends g{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&this.update$Props({pageNum:t}).then(()=>{this.fire("paged",t)})}render(t){return t.createLayout(t,this)}};c(Z,"css",hi),c(Z,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean}),c(Z,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:C("oi-icon",{name:"keyboard_arrow_left"}),next:C("oi-icon",{name:"keyboard_arrow_right"}),first:C("oi-icon",{name:"first_page"}),last:C("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:i}=t;return C("div",{class:xt("prev",{disable:o<=1}),onClick:s=>{o>1&&e.goto(o-1)}},i)},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return C("div",{class:xt("next",{disable:o>=s}),onClick:r=>{s>o&&e.goto(o+1)}},i)},createFirst(t,e){let{first:o,pageNum:i}=t;return C("div",{class:xt("first",{disable:i<=1}),onClick:s=>{i!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return C("div",{class:xt("last",{disable:i>=s}),onClick:r=>{i!=s&&e.goto(s)}},o)},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let p=[];a<1&&(a=1);for(let l=a;l<=n;l++)p.push(C("div",{className:xt({active:i==l,page:!0}),onClick:f=>{i!=l&&e.goto(l)}},l));return p},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return C("div",{class:"info"},C("span",{class:"curr"},o),"/",C("span",{class:"total"},i))},createJumper(t,e){return C("div",{class:"jumper"},"\u524D\u5F80",C("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:p}=t;return C("div",{class:"pager"},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),p(t,e))}});var mi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Zt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:rr,define:Ja,h:ar,Component:ja,setTheme:nr}=omii,To="bootstrap";function lr(t){To=t,me=new URL(`./${To}/`,import.meta.url).href}var me=new URL(`./${To}/`,import.meta.url).href;function cr(t){me=t}var Kt=(t,e=me)=>fetch(Eo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),dr=t=>Kt=t,gi=(t,e,o=me)=>{let i=ar("link",{rel:"styleSheet",href:Eo(t,o)});rr(i,e??"body")},pr=(t,e=me)=>{gi("reboot",t,e)},Eo=(t,e=me)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},Oo=new Map,qt=async(t,e=me)=>{let o=`${e}/${t}`,i=Oo.get(o);if(i===void 0){let s=[];Oo.set(o,s),i=new CSSStyleSheet;try{i.replaceSync(await Kt(t,e)),s.forEach(r=>{r(i)}),Oo.set(o,i)}catch(r){console.error("get css stylesheets error",r)}}else if(i instanceof Array)return new Promise(s=>{i.push(s)});return i},y=(...t)=>Promise.all(t.map(e=>qt(e))),bi={};Zt.forEach(t=>{Object.defineProperty(bi,t,{get:function(){return qt(t)}})});var ur=(t=Zt)=>{t.forEach(e=>{qt(e)})},fr=async(t,e=me)=>{let o=await Kt(`theme.${t}`,e);nr(o)},E=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let i=0,s=(r=[])=>{let a=i%e.length,{classNames:n,duration:p=0,delay:l=0,callback:f=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),f&&f(t,n,p,l)},l*1e3),i++,!(Math.floor(i/e.length)>=o)&&setTimeout(()=>{s(n)},(p+l)*1e3)};s()}},vi={StyleSheets:Zt,CSSStyleSheets:bi,setBaseUrl:cr,setBaseRoot:lr,loadStyleSheet:Kt,setStyleSheetLoader:dr,addStyleSheet:gi,addRebootStyleSheet:pr,getStyleSheetUrl:Eo,getCSSStyleSheet:qt,getCSSStyleSheets:y,useTheme:fr,timingClassNames:E,preLoad:ur};var{h:U,classNames:wt,extractClass:hr}=omii,st=class extends Z{},ge=st;c(ge,"css",[()=>y("reboot","pagination","utilities"),mi]),c(ge,"defaultProps",{...gt(st,st,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:i}=t;return U("li",{class:wt("page-item",{disabled:o<=1})},U("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{o>1&&e.goto(o-1),s.preventDefault(),s.stopPropagation()}},U("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return U("li",{class:wt("page-item",{disabled:o>=s})},U("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{s>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},U("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:i}=t;return U("li",{class:wt("page-item",{disabled:i<=1})},U("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{i!=1&&e.goto(1),s.preventDefault(),s.stopPropagation()}},U("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return U("li",{class:wt("page-item",{disabled:i>=s})},U("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{i!=s&&e.goto(s),r.preventDefault(),r.stopPropagation()}},U("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let p=[];a<1&&(a=1);for(let l=a;l<=n;l++)p.push(U("li",{key:`pager-${l}`,className:wt("page-item",{active:i==l,page:!0})},U("a",{class:"page-link",href:"#",onClick:f=>{i!=l&&e.goto(l),f.preventDefault(),f.stopPropagation()}},l)));return p},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return U("li",{class:"info page-item"},U("span",{className:"page-link"},U("span",{class:"curr"},o),"/",U("span",{class:"total"},i)))},createJumper(t,e){return U("li",{class:"jumper page-item mx-2"},U("span",{className:"page-link"},"\u524D\u5F80",U("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:p}=t;return U("nav",null,U("ul",{...hr(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),p(t,e)))}}),c(ge,"propTypes",{...gt(st,st,"propTypes"),align:String});var yi=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var xi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSUo7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUlKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtBQUFBO0VBRUk7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQU9SO0VBQ0k7O0FBUUE7RUFDSTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBOztBQU1SO0VBQ0k7OztBQU1oQjtFQUVJOzs7QUFHSjtFQUNJIn0= */`;var{h:K,classNames:Gt,define:mr,getHost:Lo,throttle:Ga}=omii,rt,St,$o=class extends g{constructor(){super(...arguments);m(this,rt,void 0);m(this,St,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get expander(){return this.node.expander??this.$props.expander??this.tree.$props.expander}get node(){return this.$props.node??{}}get nodes(){return d(this,rt)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=Lo(this);return o instanceof $o?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?K("input",{type:"checkbox",class:"form-check-input",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):K("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?K("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):K("div",{class:"radio-placeholder"}):null}install(){}get Sortable(){return d(this,St)}async installed(){if(this.sortable){let o=await ot.use();h(this,St,o.create(this.$(".children"),{delay:150,handle:".element",fallbackOnBody:!0,invertSwap:!0,group:this.tree.sortGroup,onEnd:i=>{let s=Lo(i.from),r=Lo(i.to),a=s.nodes,n=r.nodes;n||(n=[],r.node.children=n),this.tree.fire("sorted",{fromNode:s.node,fromNodes:a,toNode:r.node,toNodes:n,fromIndex:i.oldIndex,toIndex:i.newIndex})}}))}}async render(o){let{node:i,cssss:s}=o;!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this);let r=i.element??i.label??i.key;typeof r=="function"&&(r=await r(i,o,this));let a=null,n=h(this,rt,i.children);return typeof n=="function"&&this.expanded&&h(this,rt,n=await n(i,o,this)),a=K("div",{class:Gt("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(n instanceof Array?n.map(p=>K("oi-tree-node",{node:p,"node-level":this.level+1,tree:this.tree,cssss:s})):n)),K("div",{class:Gt("node",{expanded:this.expanded,"no-children":this.noChildren})},K("div",{class:Gt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:p=>{p.stopPropagation(),this.selected&&p.ctrlKey===!0?this.unSelect():this.select()}},K("div",{onClick:p=>{p.stopPropagation(),this.toggle()},class:Gt("expander-wrap",{"no-children":this.noChildren})},!this.noChildren&&this.expander),this.$checkbox,this.$radio,K("div",{class:"label"},r)),a)}},Me=$o;rt=new WeakMap,St=new WeakMap,c(Me,"css",xi),c(Me,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0,expander:null}),c(Me,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});mr("oi-tree-node",Me);var Co=Me;var{h:Io,purgeCSSSS:gr,getHost:eo,classNames:br}=omii;var Ft,be=class extends g{constructor(){super(...arguments);m(this,Ft,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKeys(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return d(this,Ft)}isSelected(e){let{multiSelect:o,selectedKey:i,selectedKeys:s}=this.$props;return o?(s??[]).some(r=>r==e):i!=null&&i==e}select(e,o=!0){let{multiSelect:i,selectedKeys:s}=this.$props;i?s.some(r=>r==e)||s.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:i,selectedKeys:s}=this.$props;if(!i)this.$props.selectedKey=null;else{let r=s.indexOf(e);r!=-1&&s.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:i}=this.$props;return o?(i??[]).some(s=>s==e):!1}check(e,o=!0){let{checkboxTree:i,checkedKeys:s}=this.$props;i&&s.indexOf(e)==-1&&s.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:i,checkedKeys:s}=this.$props;if(i){let r=s.indexOf(e);r!=-1&&s.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:i}=this.$props;return o?i!=null&&i==e:!1}radio(e,o=!0){let{radioTree:i}=this.$props;i&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(i=>i==e)}expand(e,o=!0){let{expandedKeys:i}=this.$props;i.indexOf(e)==-1&&i.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:i}=this.$props,s=i.indexOf(e);s!=-1&&i.splice(s,1),o&&this.update()}async installed(){if(this.$props.sortable){let e=await ot.use();h(this,Ft,e.create(this.rootNode,{delay:150,fallbackOnBody:!0,invertSwap:!0,group:this.sortGroup,onEnd:o=>{let i=eo(o.from),s=eo(o.to),r=i.nodes,a=s.nodes;this.fire("sorted",{fromNode:i.node,fromNodes:r,toNode:s.node,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}get nodes(){let e=this.$props.nodes,o=eo(this);return typeof e=="function"&&(e=e.call(o)),e}set nodes(e){this.$props.nodes=e}render(){let e=eo(this),o=gr(this.$props.nodeCss,e);return Io("div",{class:br("tree-container",{sortable:this.sortable})},this.nodes.map(i=>Io("oi-tree-node",{node:i,tree:this,cssss:o})))}};Ft=new WeakMap,c(be,"css",yi),c(be,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[],expander:Io("oi-icon",{name:"keyboard_arrow_right",class:"expander"})}),c(be,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:ln,classNames:cn}=omii,to=new Map,Ut,se=class extends g{constructor(){super(...arguments);m(this,Ut,void 0)}css(){let{size:e,color:o}=this.$props,i="2rem";if(e)i=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?i=`${a.offsetHeight}px`:i="2rem"}let s=`
    :host{
      --oi-loading-size:${i};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,Ut)}
    ${s}
    ${r}
    `}async getLoadingConfig(){let{name:e}=this.$props,o=e,i=to.get(o);if(i==null){i=[],to.set(o,i);try{let{default:s}=await import(`./loadings/${e}.js`);to.set(o,s);for(let{resolve:r}of i)r(s);return s}catch{to.set(o,null);for(let{resolve:s}of i)s(null);return null}}return i instanceof Array?new Promise((s,r)=>{i.push({resolve:s,reject:r})}):i}async render(){let{template:e,css:o}=await this.getLoadingConfig();return h(this,Ut,o),e}};Ut=new WeakMap,c(se,"updateOnAttributeChanged",!0),c(se,"css",`
    :host{
      display:inline-block;
    }
  `),c(se,"defaultProps",{name:"circle",size:null,color:null}),c(se,"propTypes",{name:String,size:Number,color:String});var at={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Vo="show",oo="collapse",Do="collapsing",vr="collapse-horizontal",zo=.35,Jo=(t,e)=>e||(t.classList.contains(vr)?at.HORIZONTAL:at.VERTICAL),wi={show(t,e=zo,o=null){return new Promise(i=>{o=Jo(t,o),E(t,[{classNames:[oo]},{classNames:[Do],duration:e,callback(s){s.style[o==at.VERTICAL?"height":"width"]=`${s[o==at.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[oo,Vo],callback(s){s.style[o==at.VERTICAL?"height":"width"]="",i()}}])})},hide(t,e=zo,o=null){return new Promise(i=>{o=Jo(t,o);let s=o==at.VERTICAL?"height":"width";t.style[s]=`${t.getBoundingClientRect()[s]}px`,Yt(t.offsetHeight),E(t,[{classNames:[Do,oo,Vo]},{classNames:[Do],duration:e,callback(r){r.style[s]=""}},{classNames:[oo],callback:i}])})},toggle(t,e=zo,o=null){return o=Jo(t,o),t.classList.contains(Vo)?this.hide(t,e,o):this.show(t,e,o)}};var Bt="fade",jo="show",Po=.15,Si={show(t,e=Po){return new Promise(o=>{E(t,[{classNames:[Bt]},{classNames:[Bt,jo],duration:e,callback:o}])})},hide(t,e=Po){return new Promise(o=>{E(t,[{classNames:[Bt,jo]},{classNames:[Bt],duration:e,callback:o}])})},toggle(t,e=Po){return t.classList.contains(Bt)&&!t.classList.contains(jo)?this.show(t,e):this.hide(t,e)}};var R={collapse:wi,fade:Si};var{h:Ao,classNames:yr}=omii;var xr="show",Qt,ve=class extends g{constructor(){super(...arguments);m(this,Qt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(xr),h(this,Qt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return d(this,Qt)?null:Ao("div",{className:yr("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},Ao("slot",null),o?Ao("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};Qt=new WeakMap,c(ve,"css",()=>y("reboot","utilities","alert","close","transitions")),c(ve,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),c(ve,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:nt,classNames:Mo}=omii,io={HORIZONTAL:"horizontal",VERTICAL:"vertical"},wr="collapsed",lt,so,ye=class extends g{constructor(){super(...arguments);m(this,lt)}static get DIRECTIONS(){return io}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:i}=this.$props;if(e.length>0&&i&&(e[0].opened=!0),!o){let s=e.filter(r=>r.opened);if(s.length){let r=s.shift();r.opened=!0,s.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==io.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:i}=this.$props;if(i)Xt(this,lt,so).call(this,e);else{let s=o.findIndex(a=>a.opened),r=s==-1?null:o[s];r&&r!=e&&Xt(this,lt,so).call(this,r),Xt(this,lt,so).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return nt("div",{class:Mo("accordion",{"collapse-horizontal":o==io.HORIZONTAL})},e.map((i,s)=>nt("div",{class:"accordion-item",key:i.key??`item-${s}`},nt("h2",{class:"accordion-header"},nt("button",{class:Mo("accordion-button",{collapsed:!i.opened}),type:"button","aria-expanded":i.opened,onClick:r=>{this.toggle(i)}},i.header)),nt("div",{class:Mo("accordion-collapse",{collapse:!0,show:i.opened})},nt("div",{class:"accordion-body"},typeof i.body=="function"?i.body(i,this.$props,this):i.body)))))}};lt=new WeakSet,so=function(e){let{items:o,transitionDuration:i}=this.$props,s=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(wr,!e.opened),e.opened?(R.collapse.show(a),this.fire("collapseShow",e)):(R.collapse.hide(a),this.fire("collapseHide",e))},c(ye,"css",()=>y("reboot","utilities","accordion","close","transitions")),c(ye,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:io.VERTICAL}),c(ye,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:Rt,classNames:On}=omii,xe=class extends g{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return Rt("nav",{"aria-label":"breadcrumb"},Rt("ol",{class:"breadcrumb"},t.map((o,i)=>i!==t.length-1?Rt("li",{class:"breadcrumb-item"},typeof e=="object"&&i!=0?e:null,Rt("a",{href:o.href},o.label)):Rt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&i!=0?e:null,o.label))))}};c(xe,"css",()=>y("reboot","utilities","breadcrumb")),c(xe,"defaultProps",{}),c(xe,"propTypes",{});var Fi=`
.modal .modal-dialog {
  transition: margin-top 0.35s ease;
  margin-top: 0;
}
.modal .modal-dialog.show {
  margin-top: var(--oi-modal-margin);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJO0VBQ0E7O0FBRUE7RUFDSSJ9 */`;var{h:I,classNames:Ui,extractClass:Sr}=omii,we=class extends g{open(){this.update$Props({visible:!0}).then(()=>{E(this.$dialog,[{classNames:"show"}])}),this.fire("open")}close(){E(this.$dialog,[{classNames:"show"},{classNames:"",duration:.15},{classNames:"",callback:()=>{this.update$Props({visible:!1})}}]),this.fire("close")}get $dialog(){return this.$(".modal-dialog")}css(){}render(t){let e=this.$props;return I(I.f,null,e.visible&&!e.staticPosition&&I("div",{class:Ui("modal-backdrop","show")}),I("div",{...Sr(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},I("div",{class:Ui("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},I("div",{class:"modal-content"},I("div",{class:"modal-header"},I("slot",{name:"header"},I("h5",{class:"modal-title"},e.title),I("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),I("div",{class:"modal-body"},I("slot",null)),I("div",{class:"modal-footer"},I("slot",{name:"footer"}))))))}};c(we,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),Fi]),c(we,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),c(we,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function Nt(t){return t.split("-")[0]}function ao(t){return t.split("-")[1]}function Ot(t){return["top","bottom"].includes(Nt(t))?"x":"y"}function Xo(t){return t==="y"?"height":"width"}function Bi(t,e,o){let{reference:i,floating:s}=t,r=i.x+i.width/2-s.width/2,a=i.y+i.height/2-s.height/2,n=Ot(e),p=Xo(n),l=i[p]/2-s[p]/2,f=n==="x",u;switch(Nt(e)){case"top":u={x:r,y:i.y-s.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:a};break;case"left":u={x:i.x-s.width,y:a};break;default:u={x:i.x,y:i.y}}switch(ao(e)){case"start":u[n]-=l*(o&&f?-1:1);break;case"end":u[n]+=l*(o&&f?-1:1)}return u}var Ri=async(t,e,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=r.filter(Boolean),p=await(a.isRTL==null?void 0:a.isRTL(e)),l=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:u}=Bi(l,i,p),b=i,v={},S=0;for(let x=0;x<n.length;x++){let{name:w,fn:k}=n[x],{x:B,y:Q,data:N,reset:$}=await k({x:f,y:u,initialPlacement:i,placement:b,strategy:s,middlewareData:v,rects:l,platform:a,elements:{reference:t,floating:e}});f=B??f,u=Q??u,v={...v,[w]:{...v[w],...N}},$&&S<=50&&(S++,typeof $=="object"&&($.placement&&(b=$.placement),$.rects&&(l=$.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):$.rects),{x:f,y:u}=Bi(l,b,p)),x=-1)}return{x:f,y:u,placement:b,strategy:s,middlewareData:v}};function ki(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function kt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Ho(t,e){var o;e===void 0&&(e={});let{x:i,y:s,platform:r,rects:a,elements:n,strategy:p}=t,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=e,S=ki(v),x=n[b?u==="floating"?"reference":"floating":u],w=kt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(x)))==null||o?x:x.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:l,rootBoundary:f,strategy:p})),k=u==="floating"?{...a.floating,x:i,y:s}:a.reference,B=await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),Q=await(r.isElement==null?void 0:r.isElement(B))&&await(r.getScale==null?void 0:r.getScale(B))||{x:1,y:1},N=kt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:k,offsetParent:B,strategy:p}):k);return{top:(w.top-N.top+S.top)/Q.y,bottom:(N.bottom-w.bottom+S.bottom)/Q.y,left:(w.left-N.left+S.left)/Q.x,right:(N.right-w.right+S.right)/Q.x}}var Fr=Math.min,Ur=Math.max;function _o(t,e,o){return Ur(t,Fr(e,o))}var Wo=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:i=0}=t??{},{x:s,y:r,placement:a,rects:n,platform:p}=e;if(o==null)return{};let l=ki(i),f={x:s,y:r},u=Ot(a),b=ao(a),v=Xo(u),S=await p.getDimensions(o),x=u==="y"?"top":"left",w=u==="y"?"bottom":"right",k=n.reference[v]+n.reference[u]-f[u]-n.floating[v],B=f[u]-n.reference[u],Q=await(p.getOffsetParent==null?void 0:p.getOffsetParent(o)),N=Q?u==="y"?Q.clientHeight||0:Q.clientWidth||0:0;N===0&&(N=n.floating[v]);let $=k/2-B/2,pe=l[x],je=N-S[v]-l[w],O=N/2-S[v]/2+$,z=_o(pe,O,je),ue=(b==="start"?l[x]:l[w])>0&&O!==z&&n.reference[v]<=n.floating[v];return{[u]:f[u]-(ue?O<pe?pe-O:je-O:0),data:{[u]:z,centerOffset:O-z}}}}),Br={left:"right",right:"left",bottom:"top",top:"bottom"};function ro(t){return t.replace(/left|right|bottom|top/g,e=>Br[e])}function Qr(t,e,o){o===void 0&&(o=!1);let i=ao(t),s=Ot(t),r=Xo(s),a=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=ro(a)),{main:a,cross:ro(a)}}var Rr={start:"end",end:"start"};function Qi(t){return t.replace(/start|end/g,e=>Rr[e])}var kr=["top","right","bottom","left"],jn=kr.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Tt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:n,elements:p}=e,{mainAxis:l=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...S}=t,x=Nt(i),w=u||(x===a||!v?[ro(a)]:function(O){let z=ro(O);return[Qi(O),z,Qi(z)]}(a)),k=[a,...w],B=await Ho(e,S),Q=[],N=((o=s.flip)==null?void 0:o.overflows)||[];if(l&&Q.push(B[x]),f){let{main:O,cross:z}=Qr(i,r,await(n.isRTL==null?void 0:n.isRTL(p.floating)));Q.push(B[O],B[z])}if(N=[...N,{placement:i,overflows:Q}],!Q.every(O=>O<=0)){var $,pe;let O=(($=(pe=s.flip)==null?void 0:pe.index)!=null?$:0)+1,z=k[O];if(z)return{data:{index:O,overflows:N},reset:{placement:z}};let ue="bottom";switch(b){case"bestFit":{var je;let _t=(je=N.map(et=>[et,et.overflows.filter(Pe=>Pe>0).reduce((Pe,ii)=>Pe+ii,0)]).sort((et,Pe)=>et[1]-Pe[1])[0])==null?void 0:je[0].placement;_t&&(ue=_t);break}case"initialPlacement":ue=a}if(i!==ue)return{reset:{placement:ue}}}return{}}}};var Et=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:i}=e,s=await async function(r,a){let{placement:n,platform:p,elements:l}=r,f=await(p.isRTL==null?void 0:p.isRTL(l.floating)),u=Nt(n),b=ao(n),v=Ot(n)==="x",S=["left","top"].includes(u)?-1:1,x=f&&v?-1:1,w=typeof a=="function"?a(r):a,{mainAxis:k,crossAxis:B,alignmentAxis:Q}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...w};return b&&typeof Q=="number"&&(B=b==="end"?-1*Q:Q),v?{x:B*x,y:k*S}:{x:k*S,y:B*x}}(e,t);return{x:o+s.x,y:i+s.y,data:s}}}};function Nr(t){return t==="x"?"y":"x"}var Lt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:w=>{let{x:k,y:B}=w;return{x:k,y:B}}},...p}=t,l={x:o,y:i},f=await Ho(e,p),u=Ot(Nt(s)),b=Nr(u),v=l[u],S=l[b];if(r){let w=u==="y"?"bottom":"right";v=_o(v+f[u==="y"?"top":"left"],v,v-f[w])}if(a){let w=b==="y"?"bottom":"right";S=_o(S+f[b==="y"?"top":"left"],S,S-f[w])}let x=n.fn({...e,[u]:v,[b]:S});return{...x,data:{x:x.x-o,y:x.y-i}}}}};function ae(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function q(t){return ae(t).getComputedStyle(t)}function Fe(t){return Ii(t)?(t.nodeName||"").toLowerCase():""}var no;function $i(){if(no)return no;let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(no=t.brands.map(e=>e.brand+"/"+e.version).join(" "),no):navigator.userAgent}function G(t){return t instanceof ae(t).HTMLElement}function re(t){return t instanceof ae(t).Element}function Ii(t){return t instanceof ae(t).Node}function Ni(t){return typeof ShadowRoot>"u"?!1:t instanceof ae(t).ShadowRoot||t instanceof ShadowRoot}function lo(t){let{overflow:e,overflowX:o,overflowY:i,display:s}=q(t);return/auto|scroll|overlay|hidden/.test(e+i+o)&&!["inline","contents"].includes(s)}function Or(t){return["table","td","th"].includes(Fe(t))}function Yo(t){let e=/firefox/i.test($i()),o=q(t),i=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||!!i&&i!=="none"||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"||["transform","perspective"].some(s=>o.willChange.includes(s))||["paint","layout","strict","content"].some(s=>{let r=o.contain;return r!=null&&r.includes(s)})}function Vi(){return!/^((?!chrome|android).)*safari/i.test($i())}function Ko(t){return["html","body","#document"].includes(Fe(t))}var Oi=Math.min,Ct=Math.max,Ti=Math.round,Zo={x:1,y:1};function $t(t){let e=!re(t)&&t.contextElement?t.contextElement:re(t)?t:null;if(!e)return Zo;let o=e.getBoundingClientRect(),i=q(e);if(i.boxSizing!=="border-box")return G(e)?{x:e.offsetWidth>0&&Ti(o.width)/e.offsetWidth||1,y:e.offsetHeight>0&&Ti(o.height)/e.offsetHeight||1}:Zo;let s=o.width/parseFloat(i.width),r=o.height/parseFloat(i.height);return s&&Number.isFinite(s)||(s=1),r&&Number.isFinite(r)||(r=1),{x:s,y:r}}function ct(t,e,o,i){var s,r,a,n;e===void 0&&(e=!1),o===void 0&&(o=!1);let p=t.getBoundingClientRect(),l=Zo;e&&(i?re(i)&&(l=$t(i)):l=$t(t));let f=re(t)?ae(t):window,u=!Vi()&&o,b=(p.left+(u&&(s=(r=f.visualViewport)==null?void 0:r.offsetLeft)!=null?s:0))/l.x,v=(p.top+(u&&(a=(n=f.visualViewport)==null?void 0:n.offsetTop)!=null?a:0))/l.y,S=p.width/l.x,x=p.height/l.y;return{width:S,height:x,top:v,right:b+S,bottom:v+x,left:b,x:b,y:v}}function Se(t){return((Ii(t)?t.ownerDocument:t.document)||window.document).documentElement}function co(t){return re(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Di(t){return ct(Se(t)).left+co(t).scrollLeft}function Tr(t,e,o){let i=G(e),s=Se(e),r=ct(t,!0,o==="fixed",e),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(i||!i&&o!=="fixed")if((Fe(e)!=="body"||lo(s))&&(a=co(e)),G(e)){let p=ct(e,!0);n.x=p.x+e.clientLeft,n.y=p.y+e.clientTop}else s&&(n.x=Di(s));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function It(t){if(Fe(t)==="html")return t;let e=t.assignedSlot||t.parentNode||(Ni(t)?t.host:null)||Se(t);return Ni(e)?e.host:e}function Ei(t){return G(t)&&q(t).position!=="fixed"?t.offsetParent:null}function Li(t){let e=ae(t),o=Ei(t);for(;o&&Or(o)&&q(o).position==="static";)o=Ei(o);return o&&(Fe(o)==="html"||Fe(o)==="body"&&q(o).position==="static"&&!Yo(o))?e:o||function(i){let s=It(i);for(;G(s)&&!Ko(s);){if(Yo(s))return s;s=It(s)}return null}(t)||e}function zi(t){let e=It(t);return Ko(e)?t.ownerDocument.body:G(e)&&lo(e)?e:zi(e)}function Ji(t,e){var o;e===void 0&&(e=[]);let i=zi(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=ae(i);return s?e.concat(r,r.visualViewport||[],lo(i)?i:[]):e.concat(i,Ji(i))}function Ci(t,e,o){return e==="viewport"?kt(function(i,s){let r=ae(i),a=Se(i),n=r.visualViewport,p=a.clientWidth,l=a.clientHeight,f=0,u=0;if(n){p=n.width,l=n.height;let b=Vi();(b||!b&&s==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:p,height:l,x:f,y:u}}(t,o)):re(e)?function(i,s){let r=ct(i,!0,s==="fixed"),a=r.top+i.clientTop,n=r.left+i.clientLeft,p=G(i)?$t(i):{x:1,y:1},l=i.clientWidth*p.x,f=i.clientHeight*p.y,u=n*p.x,b=a*p.y;return{top:b,left:u,right:u+l,bottom:b+f,x:u,y:b,width:l,height:f}}(e,o):kt(function(i){var s;let r=Se(i),a=co(i),n=(s=i.ownerDocument)==null?void 0:s.body,p=Ct(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=Ct(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+Di(i),u=-a.scrollTop;return q(n||r).direction==="rtl"&&(f+=Ct(r.clientWidth,n?n.clientWidth:0)-p),{width:p,height:l,x:f,y:u}}(Se(t)))}var Er={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t,r=o==="clippingAncestors"?function(l,f){let u=f.get(l);if(u)return u;let b=Ji(l).filter(w=>re(w)&&Fe(w)!=="body"),v=null,S=q(l).position==="fixed",x=S?It(l):l;for(;re(x)&&!Ko(x);){let w=q(x),k=Yo(x);(S?k||v:k||w.position!=="static"||!v||!["absolute","fixed"].includes(v.position))?v=w:b=b.filter(B=>B!==x),x=It(x)}return f.set(l,b),b}(e,this._c):[].concat(o),a=[...r,i],n=a[0],p=a.reduce((l,f)=>{let u=Ci(e,f,s);return l.top=Ct(u.top,l.top),l.right=Oi(u.right,l.right),l.bottom=Oi(u.bottom,l.bottom),l.left=Ct(u.left,l.left),l},Ci(e,n,s));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t,s=G(o),r=Se(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:1,y:1},p={x:0,y:0};if((s||!s&&i!=="fixed")&&((Fe(o)!=="body"||lo(r))&&(a=co(o)),G(o))){let l=ct(o);n=$t(o),p.x=l.x+o.clientLeft,p.y=l.y+o.clientTop}return{width:e.width*n.x,height:e.height*n.y,x:e.x*n.x-a.scrollLeft*n.x+p.x,y:e.y*n.y-a.scrollTop*n.y+p.y}},isElement:re,getDimensions:function(t){if(G(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=ct(t);return{width:e.width,height:e.height}},getOffsetParent:Li,getDocumentElement:Se,getScale:$t,async getElementRects(t){let{reference:e,floating:o,strategy:i}=t,s=this.getOffsetParent||Li,r=this.getDimensions;return{reference:Tr(e,await s(o),i),floating:{x:0,y:0,...await r(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>q(t).direction==="rtl"};var po=(t,e,o)=>{let i=new Map,s={platform:Er,...o},r={...s.platform,_c:i};return Ri(t,e,{...s,platform:r})};var ji=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:_e,classNames:qn,createRef:Lr}=omii,uo,Pi,Vt,qo,Xe,ee=class extends g{constructor(){super(...arguments);m(this,uo);m(this,Vt);c(this,"slotRef",Lr());m(this,Xe,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props,s=d(this,Vt,qo);if(s){let r=this.$(`.${this.type}-arrow`);po(s,this.$element,{strategy:i,placement:e,middleware:[Tt(),Lt(),Et(o),Wo({element:r})]}).then(({x:a,y:n,placement:p,middlewareData:l})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=l.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[p.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){h(this,Xe,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),R.fade.show(this.$element)}hide(){h(this,Xe,!1),R.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,Xe)?this.hide():this.show()}installed(){let e=d(this,Vt,qo),{triggerShow:o,triggerHide:i}=this.$props;e&&(o.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),i.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),d(this,Xe)&&this.hide()})}))}render(e){let{placement:o,header:i,body:s}=this.$props;return _e(_e.f,null,_e("slot",{ref:this.slotRef,tabIndex:!0}),_e("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},_e("div",{class:"popover-arrow"}),_e("slot",{name:"header",class:"popover-header"},i),_e("slot",{class:"popover-body",name:"body"},s)))}};uo=new WeakSet,Pi=function(){return this.slotRef.current},Vt=new WeakSet,qo=function(){let e=d(this,uo,Pi).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},Xe=new WeakMap,c(ee,"css",[()=>y("reboot","utilities","transitions","popover"),ji]),c(ee,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),c(ee,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var Ai=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var fo=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:L,classNames:Cr}=omii,Mi=t=>t?.type?.indexOf("image")==0,$r=t=>Mi(t)?(t.url=t.url??fo(t.file),L("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):L("div",{className:"file"},L("oi-icon",{"view-box":"1024",name:bt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),L("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),_i=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return L("div",{className:"pictures"},L("div",{class:"row row-cols-auto g-4"},e.map((s,r)=>L("div",{className:"col",key:`file-${r}`},L("div",{class:"card",onClick:()=>{t.open(r)}},$r(s),L("div",{className:"actions"},L("div",{class:"position-absolute top-50 start-50 translate-middle"},Mi(s)&&L("oi-icon",{name:"search"}),L("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(i||e.length==0)&&L("div",{className:"col selector-col",key:"selector"},L("div",{class:"card selector"},L("label",{class:Cr("selector",{multiple:i}),title:o,onClick:()=>{t.open()}},L("oi-icon",{name:"add"}))))))};var{h:_,classNames:pl}=omii,Xi=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return _("div",{className:"files"},_("slot",{name:"actions"},_("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),_("table",{class:"table"},_("tbody",null,e.map(s=>_("tr",null,_("td",null,_("oi-icon",{"view-box":"1024",name:bt(s.ext),type:"file-type"}),s.name,s.ext),_("td",null,Uo(s.size)),_("td",null,_("oi-icon",{name:"delete"})))))))};var{h:ho,classNames:hl}=omii,Ir={pictures:_i,files:Xi,none:null},mo={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},He,ne=class extends g{constructor(){super(...arguments);m(this,He,-1)}static get STATUS(){return mo}open(e=-1){h(this,He,e),this.$("#files").click(),this.fire("open",{index:e})}remove(e){this.$props.files?.splice(e,1),this.updateSelf(),this.fire("remove",{index:e})}select(e){let{multiple:o,files:i,autoUpload:s}=this.$props;if(e?.length==0)return!1;if(o||i.splice(0,i.length),d(this,He)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Wt(a.name),ext:Ht(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.splice(d(this,He),1,...r),this.fire("replaced",{index:d(this,He),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Wt(a.name),ext:Ht(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.forceUpdate()}upload(){let{files:e,action:o,withCredentials:i,headers:s}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==mo.NONE||a.status==mo.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=i,typeof s=="function"&&(s=s()),typeof s=="object")for(let p in s)n.setRequestHeader(p,s[p]);n.send(a),n.onreadystatechange=p=>{if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let l=n.responseText;try{l=JSON.parse(l)}catch(f){console.error(f)}this.fire("uploaded",{file:r,data:l}),this.refresh()}else r.status=mo.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,p)},n.upload.onprogress=p=>{if(p.lengthComputable){let l=Math.ceil(p.loaded/p.total*100);r.progress=l,this.fire("progress",{file:r,loaded:p.loaded}),console.log(l+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:i}=this.$props;return ho(ho.f,null,ho("slot",null,Ir[i]),ho("input",{id:"files",type:"file",multiple:e,accept:o,onChange:s=>{this.select(s.target.files)}}))}};He=new WeakMap,c(ne,"creatPreviewUrl",fo),c(ne,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),Ai]),c(ne,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),c(ne,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Hi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var Vr="transitionend";var Wi=t=>{t.dispatchEvent(new Event(Vr))},Dr=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Yi=t=>{if(!Dr(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let i=t.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return e};var{h:j,classNames:Zi,extractClass:zr}=omii;var Jr="carousel-item-end",jr="carousel-item-start",Pr="carousel-item-next",Ar="carousel-item-prev",Mr=".active",_r=".carousel-item",Tl=Mr+_r,We,le,Dt,Be,Ue=class extends g{constructor(){super(...arguments);m(this,We,0);m(this,le,!1);m(this,Dt,[]);m(this,Be,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,We)}get isSliding(){return d(this,le)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,le)&&Wi(this),clearInterval(d(this,Be)),h(this,Be,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(d(this,le))return!1;let{$activeItem:o,$items:i,$props:{duration:s}}=this,r=i.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=i.indexOf(n),e=a>r):typeof e=="number"?(a=(e+i.length)%i.length,n=i[a],e=a>r):(a=(r+1)%i.length,e||(a=(r-1+i.length)%i.length),n=i[a]),d(this,We)==a)return!1;let p=e?jr:Jr,l=e?Pr:Ar;h(this,le,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;E(n,[{classNames:[],duration:f},{classNames:[l],callback:()=>{Yt(n)}},{classNames:[l,p],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),E(o,[{classNames:[],duration:f},{classNames:[p,"active"],duration:s},{classNames:[],callback:()=>{h(this,le,!1),h(this,We,a);let u;for(;u=d(this,Dt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Yi(this)&&this.slide()}cycle(){d(this,Be)&&clearInterval(d(this,Be)),h(this,Be,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),h(this,We,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,le)?d(this,Dt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:i,prevCtrl:s,indicator:r}=this.$props;return j("div",{...zr(e,"carousel")},j("slot",{class:"carousel-inner"},o.map(a=>j("div",{className:Zi("carousel-item"),waiting:a.attributes?.waiting},a))),j("div",{class:"carousel-indicators"},j("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),j("slot",{name:"actions"},typeof i=="function"&&i(this),typeof s=="function"&&s(this)))}};We=new WeakMap,le=new WeakMap,Dt=new WeakMap,Be=new WeakMap,c(Ue,"css",[()=>y("reboot","utilities","carousel"),Hi]),c(Ue,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>j("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},j("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),j("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>j("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},j("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),j("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>j("button",{type:"button",onClick:i=>o.slide(e),class:Zi({active:e==0})})}),c(Ue,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Go,classNames:Cl,extractClass:Xr}=omii,Qe=class extends g{css(){}render(t){let{text:e,desc:o,position:i}=this.$props,s=i?i.split("-"):[];return Go("span",{...Xr(t,"badge",{"position-absolute":i,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":i,"rounded-pill":i})},Go("slot",null,e),o&&Go("span",{class:"visually-hidden"},o))}};c(Qe,"css",()=>y("reboot","utilities","badge")),c(Qe,"defaultProps",{text:"",desc:!1,position:!1}),c(Qe,"propTypes",{});var Ki=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:dt,classNames:Jl,extractClass:Hr}=omii,ke,Re=class extends g{constructor(){super(...arguments);m(this,ke,!0)}get closed(){return d(this,ke)}close(){h(this,ke,!0),R.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){h(this,ke,!1),this.update(),R.fade.show(this)}install(){h(this,ke,!this.$props.visible)}render(e){return dt("div",{...Hr(e,"toast",{show:!d(this,ke)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},dt("div",{class:"toast-header"},dt("slot",{name:"header"}),dt("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),dt("div",{class:"toast-body"},dt("slot",null)))}};ke=new WeakMap,c(Re,"css",[()=>y("reboot","utilities","toasts","close"),Ki]),c(Re,"defaultProps",{visible:!1}),c(Re,"propTypes",{visible:Boolean});var{h:ei,classNames:Wr,extractClass:Hl}=omii,Ne=class extends g{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:i,max:s,showPercent:r,striped:a,animated:n,style:p,className:l}=this.$props;return ei("div",{class:"progress",style:p},ei("div",{class:Wr("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":s},r&&ei("span",null,o,"%")))}};c(Ne,"css",()=>y("reboot","utilities","progress")),c(Ne,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),c(Ne,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var qi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:pt,classNames:Gl,createRef:ec}=omii,go=class extends ee{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return pt(pt.f,null,pt("slot",{ref:this.slotRef}),pt("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},pt("div",{class:"tooltip-arrow"}),pt("slot",{class:"tooltip-inner",name:"body"},o)))}},Ye=go;c(Ye,"css",[()=>y("reboot","utilities","transitions","tooltip"),qi]),c(Ye,"defaultProps",{...gt(go,go,"defaultProps"),offset:0});var Gi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:Oe,classNames:ac,createRef:ut}=omii,X,ce,H,Ze,Ke,bo,Te=class extends g{constructor(){super(...arguments);m(this,X,ut());m(this,ce,ut());m(this,H,ut());m(this,Ze,ut());m(this,Ke,ut());m(this,bo,ut())}close(e,o){}closeFooter(){this.$props.openFooter=!1,R.collapse.hide(d(this,H).current),d(this,ce).current.style.height=this.clientHeight-d(this,X).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,R.collapse.show(d(this,H).current),d(this,ce).current.style.height=this.clientHeight-d(this,X).current.clientHeight-d(this,H).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,R.collapse.hide(d(this,X).current),d(this,ce).current.style.height=this.clientHeight-d(this,H).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,R.collapse.show(d(this,X).current),d(this,ce).current.style.height=this.clientHeight-d(this,X).current.scrollHeight-d(this,H).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,R.collapse.hide(d(this,Ze).current)}openLeft(){this.$props.openLeft=!0,R.collapse.show(d(this,Ze).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,R.collapse.hide(d(this,Ke).current)}openRight(){this.$props.openRight=!0,R.collapse.show(d(this,Ke).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=d(this,X).current.getBoundingClientRect(),i=d(this,H).current.getBoundingClientRect();d(this,ce).current.style.height=e.height-o.height-i.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:i,openRight:s}=this.$props;e||(d(this,H).current.style.height=0),o||(d(this,X).current.style.height=0),i||(d(this,Ze).current.style.height=0),s||(d(this,Ke).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return Oe(Oe.f,null,Oe("slot",{name:"header",ref:d(this,X)}),Oe("main",{ref:d(this,ce)},Oe("slot",{name:"left",ref:d(this,Ze),class:"collapse-horizontal"}),Oe("slot",{name:"content",ref:d(this,bo)}),Oe("slot",{name:"right",ref:d(this,Ke),class:"collapse-horizontal"})),Oe("slot",{name:"footer",ref:d(this,H)}))}};X=new WeakMap,ce=new WeakMap,H=new WeakMap,Ze=new WeakMap,Ke=new WeakMap,bo=new WeakMap,c(Te,"css",[Gi]),c(Te,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),c(Te,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var es=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:ti,classNames:mc,uniqueTag:Yr}=omii,te,Ee=class extends g{constructor(){super(...arguments);m(this,te,void 0)}get $module(){return d(this,te)}load(e,o,i,s){o=o??this.$props.module,i=i??this.$props.loading,s=s??this.$props.loadError,h(this,te,i),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)h(this,te,s);else if(typeof a=="function"){let n=Yr(a);h(this,te,ti(n,null))}else h(this,te,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),h(this,te,s),this.updateSelf()})}install(){let{src:e,module:o,loading:i,loadError:s}=this.$props;this.load(e,o,i,s)}render(e){return d(this,te)}};te=new WeakMap,c(Ee,"css",[es]),c(Ee,"defaultProps",{src:null,module:"default",loading:ti("oi-loading",{size:"6"}),loadError:ti("h1",null,"Module Load Error")}),c(Ee,"propTypes",{src:String,module:String});var ts=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Le,classNames:wc,createRef:os,extractClass:Zr}=omii,oe,Ce=class extends g{constructor(){super(...arguments);c(this,"offcanvasRef",os());c(this,"backdropRef",os());m(this,oe,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,oe))return;h(this,oe,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;E(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,oe)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,oe))return;h(this,oe,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;E(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){h(this,oe,this.$props.visible)}render(e){let{visible:o,placement:i,position:s,title:r,useBackdrop:a}=this.$props;return Le(Le.f,null,Le("div",{ref:this.offcanvasRef,...Zr(e,"offcanvas",`offcanvas-${i}`,`position-${s}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Le("div",{class:"offcanvas-header"},Le("slot",{name:"title",class:"offcanvas-title h5"},r),Le("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Le("slot",{class:"offcanvas-body"})),a&&d(this,oe)&&Le("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};oe=new WeakMap,c(Ce,"css",[()=>y("reboot","offcanvas","utilities","close"),ts]),c(Ce,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),c(Ce,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:kc,classNames:Nc,extractClass:Oc,createRef:Tc}=omii;function rs(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let i in e)i!=="valid"&&e[i]===!0&&o.push(i);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function is(t){let e=t.currentTarget;e.checkValidity(),rs(t.target),e.classList.add("was-validated")}function as(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(i=>{rs(i)}),t.classList.add("was-validated"),o.every(i=>i.checkValidity?i.checkValidity():!0)&&e}function ss(t){let e=t.target;e.removeEventListener("input",is),e.addEventListener("input",is,!1),as(e)||(t.preventDefault(),t.stopPropagation())}var ft=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",ss),e.addEventListener("submit",ss,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return as(this)}connectedCallback(){this.constructor.validate(this)}};var ns=`
:host {
  position: relative;
}
:host slot:not([name]) {
  display: inline-block;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBIn0= */`;var{h:vo,classNames:Cc,createRef:ls}=omii,ie=null;document.addEventListener("click",t=>{ie&&ie.hide()});var Jt,jt,de,qe,Ge,zt,ht,$e=class extends g{constructor(){super(...arguments);m(this,de);m(this,Ge);m(this,Jt,ls());m(this,jt,ls());m(this,ht,!1)}get $menu(){return d(this,Jt).current}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props;po(d(this,Ge,zt),this.$menu,{strategy:i,placement:e,middleware:[Tt(),Lt(),Et(o)]}).then(({x:s,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${r}px`})})}show(){h(this,ht,!0),d(this,de,qe).focus(),d(this,de,qe).setAttribute("aria-expanded",!0),d(this,de,qe).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),ie=this,this.setPosition()}hide(){h(this,ht,!1),d(this,de,qe).classList.remove("show"),d(this,de,qe).setAttribute("aria-expanded","false"),ie=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,ht)?this.hide():this.show()}installed(){let{trigger:e}=this.$props;e=="click"?d(this,Ge,zt).addEventListener("click",o=>{ie&&ie!=this&&ie.hide(),o.preventDefault(),o.stopImmediatePropagation(),this.toggle()}):e=="focus"&&(d(this,Ge,zt).addEventListener("focus",o=>{ie&&ie!=this&&ie.hide(),o.preventDefault(),o.stopImmediatePropagation(),this.show()}),d(this,Ge,zt).addEventListener("blur",o=>{o.preventDefault(),o.stopImmediatePropagation(),this.hide()})),this.addEventListener("click",o=>{o.stopImmediatePropagation()})}render(e){let{menu:o}=this.$props;return vo(vo.f,null,vo("slot",{ref:d(this,jt)}),vo("slot",{name:"menu",ref:d(this,Jt)},o))}};Jt=new WeakMap,jt=new WeakMap,de=new WeakSet,qe=function(){return d(this,jt).current},Ge=new WeakSet,zt=function(){let e=d(this,de,qe).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},ht=new WeakMap,c($e,"css",[()=>y("reboot","utilities","transitions","dropdown"),ns]),c($e,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),c($e,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var cs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:Kr,Component:Pc}=omii,yo,Ie=class extends g{constructor(){super(...arguments);m(this,yo,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:i,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{h(this,yo,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:i,fontSize:s,minimap:{enabled:!1}})})}render(){return Kr("div",{class:"coder"})}};yo=new WeakMap,c(Ie,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,i=new CSSStyleSheet;return i.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i],fetch(new URL("./monaco/index.css",e).href).then(s=>s.text())},cs]),c(Ie,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),c(Ie,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var ds=`
:host .selected {
  width: 100%;
}
:host .selected.focus input.value {
  width: 5em !important;
}
:host .selected .value {
  border: none;
  padding: 0;
}
:host .selected .value:focus {
  border: none;
  outline: none;
}
:host .selected oi-bi {
  vertical-align: initial;
}
:host .values {
  margin: 0;
  padding: 0;
}
:host .values li {
  list-style: none;
  margin-bottom: 0.1em;
  padding: 0.1rem 0.5rem;
}
:host .values input.value {
  width: 0;
}
:host .values li:not(.input) {
  background-color: aliceblue;
  margin-right: 0.25em;
  border-radius: 0.5;
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
  max-height: 26em;
  overflow: scroll;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFPSTs7QUFMSTtFQUNJOztBQU1SO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBSVI7RUFDSTs7QUFLUjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7RUFFQTs7QUFVUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0k7RUFDSTs7QUFFQTtFQUNJOztBQUtaO0VBQ0k7RUFFQTs7QUFFQTtFQUNJOztBQUVBO0VBQ0k7O0FBS1I7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSSJ9 */`;var{h:V,classNames:ps,extractClass:Wc}=omii,mt,P,T,Ve=class extends g{constructor(){super(...arguments);m(this,mt,!1);m(this,P,void 0);m(this,T,!1)}get value(){return this.$props.value}set value(e){this.$props.value=e}get values(){return this.$props.values}get validity(){let{required:e,values:o,min:i,max:s,multiple:r}=this.$props,a={valid:!0};return e&&(r&&(!o||o.length==0)||!r&&(this.value==null||this.value==""))&&(a.valid=!1,a.valueMissing=!0),a.valid&&r&&(i!=0&&i>o.length&&(a.valid=!1,a.rangeUnderflow=!0),s!=0&&s<o.length&&(a.valid=!1,a.rangeOverflow=!0)),a}checkValidity(){h(this,mt,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}hideOptions(){this.$("oi-dropdown").hide()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",s=>{this.$("input.value").focus(),this.$(".selected").classList.add("focus")}),this.addEventListener("blur",s=>{this.$(".selected").classList.remove("focus"),h(this,T,!1),h(this,P,null),this.hideOptions(),this.updateSelf()});let{options:e,multiple:o,values:i}=this.$props;this.addEventListener("keydown",s=>{if(["Enter","ArrowUp","ArrowDown"].includes(s.key))s.preventDefault(),s.stopPropagation();else return!1;let a=d(this,P)?this.$$("li.option.match"):this.$$("li.option");if(a.length){a.forEach((p,l)=>{p.classList.contains("active")&&h(this,T,l),p.classList.remove("active")}),s.key=="Enter"?(d(this,T)===!1&&h(this,T,0),h(this,P,null),this.hideOptions()):s.key=="ArrowUp"?d(this,T)===!1?h(this,T,a.length-1):d(this,T)>0&&Fo(this,T)._--:s.key=="ArrowDown"?(d(this,T)===!1?h(this,T,0):d(this,T)<a.length-1&&Fo(this,T)._++,this.showOptions()):s.key=="Backspace";let n=a[d(this,T)];if(n&&(n.classList.add("active"),!o||s.key=="Enter")){let p=e.at(n.dataset.index);this.toggleOption(p,!1)}}})}toggleOption(e,o=!0){let{values:i,multiple:s}=this.$props;if(s){let r=i.indexOf(e.value);r==-1?i.push(e.value):i.splice(r,1)}else this.value=e.value,o&&this.hideOptions();o&&h(this,P,null),this.updateSelf(),d(this,mt)&&this.checkValidity(),this.fire("change",s?{values:i}:{value:this.value})}render(){let{values:e,value:o,searchable:i,options:s,preserveOrder:r,createSelected:a,createOption:n,multiple:p}=this.$props;return n=n.bind(this),a=a.bind(this),e=e??[],r&&p&&e.sort((l,f)=>s.findIndex(u=>u.value==l)-s.findIndex(u=>u.value==f)),s=s??[],V("oi-dropdown",{placement:"bottom-start",css:`
          :host slot:not([name]) {
            display: block;
          }
          :host slot[name="menu"] {
            width:100%;
          }
        `},V("div",{class:"selected d-flex",onClick:l=>{this.$("input.value").focus(),l.stopImmediatePropagation(),this.showOptions()}}," ",p?V("ul",{class:"values d-flex flex-wrap"},e.map((l,f)=>{let u=s.find(b=>b.value==l);if(u)return a(u,f)}),V("li",{className:"input"},V("input",{className:"value",readOnly:!i,value:d(this,P),onInput:l=>{h(this,P,l.target.value),h(this,T,!1),this.updateSelf()}}))):V("input",{className:"value  flex-grow-1",readOnly:!i,value:d(this,P)??s.find(l=>l.value==o)?.text,onInput:l=>{h(this,P,l.target.value),h(this,T,!1),this.updateSelf()}}),V("oi-icon",{class:"expander ms-auto",name:"keyboard_arrow_down",onClick:l=>{this.showOptions()}})),V("ul",{className:ps("dropdown-menu",{searching:d(this,P),multiple:p}),slot:"menu"},s.map((l,f)=>V("li",{"data-index":f,className:ps("option",{match:l.text.includes(d(this,P)),active:p?e.includes(l.value):o==l.value}),onClick:u=>{this.toggleOption(l)}},n(l,f)))))}};mt=new WeakMap,P=new WeakMap,T=new WeakMap,c(Ve,"css",[()=>y("reboot","utilities","forms","scrollbar"),ds]),c(Ve,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,searchable:Boolean,min:Number,max:Number}),c(Ve,"defaultProps",{options:[],values:[],value:null,multiple:!0,required:!1,searchable:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:i,multiple:s}=this.$props;return V("div",{class:"form-check d-flex"},s&&V("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:i.includes(e.value)}),V("label",{class:"form-check-label flex-grow-1"},e.text))},createSelected(e,o){let{values:i,multiple:s}=this.$props;return V("li",null,e.text,V("oi-bi",{name:"x",onClick:r=>{r.preventDefault(),r.stopImmediatePropagation(),i.splice(o,1),this.updateSelf(),d(this,mt)&&this.checkValidity(),this.fire("change",s?{values:i}:{value:this.value})}}))}});var us=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:D,classNames:td,extractClass:qr}=omii,De=class extends g{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:i,dataCellFormatter:s,height:r}=this.$props,a=qr(this.$props)?.class??"";return D("div",{className:"table-container",style:{height:r}},D("table",{className:`table ${a}`},D("thead",null,o&&D("tr",null,t?.map(n=>D("th",{style:n.titleStyle,scope:"col"},i(n,t,e,this)))),D("slot",{name:"header"})),D("tbody",null,e?.map((n,p)=>D("tr",null,t.map(l=>D("td",{style:l.style},s(l,n,p,e,this)))))),D("tfoot",null,D("slot",{name:"footer"}))))}};c(De,"css",[()=>y("reboot","utilities","tables"),us]),c(De,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,i){if(t.type=="checkbox"){t.checked||(t.checked=[]);let s=o?.map(a=>a[t.field])??[],r=s.every(a=>t.checked.includes(a));return D("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...s);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),p=new Set(s.filter(l=>!n.has(l)));t.checked.splice(0,t.checked.length,...p)}await i.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,i,s){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),D("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await s.updateSelf()}});case"radio":return D("input",{type:"radio"});default:return r}},height:"auto"}),c(De,"propTypes",{showHeader:Boolean});var fs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0aW55bWNlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFLSTtFQUNBOztBQUxBO0VBRUk7O0FBTVI7RUFDSSJ9 */`;var{h:oi,classNames:ld,extractClass:cd}=omii,hs=!0,ms=new URL("./tinymce/",import.meta.url).href,gs="./tinymce.js",Pt,xo,wo,At,ze=class extends g{constructor(){super(...arguments);m(this,Pt,void 0);m(this,xo,void 0);m(this,wo,!1);m(this,At,!1)}static get min(){return hs}static set min(e){hs=e}static get root(){return ms}static set root(e){ms=e}static get jsFile(){return gs}static set jsFile(e){gs=e}static async use(){return await import(new URL(this.jsFile,this.root).href)}get value(){return this.$props.value}set value(e){if(this.$props.value=e,this.editor&&d(this,At))try{this.editor.setContent(e)}catch{console.log("editor not init")}}get editor(){return d(this,Pt)}css(){return d(this,xo)}get validity(){let{required:e}=this.$props,o={valid:!0};return e&&value==""&&(o.valid=!1,o.valueMissing=!0),o}checkValidity(){h(this,wo,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}get editorId(){return`editor${this.elementId}`}async installed(){await this.constructor.use();let e=this.$(`#${this.editorId}`),{menu:o,menubar:i,toolbar:s,plugins:r,language:a,toolbarMode:n,baseUrl:p,inline:l,readonly:f,contentStyle:u,contentCss:b,fontFamilyFormats:v,blockFormats:S,fontSizeFormats:x,lineHeightFormats:w,indentUseMargin:k,indentation:B,styleFormats:Q,styleFormatsMerge:N,colorCols:$,colorMap:pe,imagesUploadUrl:je,imagesUploadHandler:O,imagesUploadBasePath:z,imagesUploadCredentials:ue,imagesReuseFilename:_t,imagesFileTypes:et,imageList:Pe,imageBatch:ii,imageAdvtab:ws,imageUploadtab:Ss,imageDimensions:Fs,imageTitle:Us,imagePrependUrl:Bs,automaticUploads:Qs,filePickerTypes:Rs,filePickerCallback:ks,templates:Ns,importcssGroups:Os,importcssAppend:Ts,width:Es,height:Ls,minWidth:Cs,minHeight:$s,maxWidth:Is,maxHeight:Vs,resize:Ds,placeholder:zs}=this.$props;tinymce.init({target:e,promotion:!1,base_url:p??this.constructor.root,menu:o,menubar:i,toolbar:s,toolbar_mode:n,plugins:r,language:a,inline:l,readonly:f,extended_valid_elements:"oi-icon[name|color|size]",custom_elements:"oi-icon",content_css:b,content_style:u,font_family_formats:v,block_formats:S,font_size_formats:x,line_height_formats:w,indent_use_margin:k,indentation:B,style_formats:Q,style_formats_merge:N,color_cols:$,color_map:pe,images_upload_url:je,images_upload_handler:O,images_upload_base_path:z,images_upload_credentials:ue,images_reuse_filename:_t,images_file_types:et,image_list:Pe,image_advtab:ws,image_uploadtab:Ss,image_dimensions:Fs,image_title:Us,image_prepend_url:Bs,automatic_uploads:Qs,file_picker_types:Rs,file_picker_callback:ks,importcss_groups:Os,templates:Ns,importcss_append:Ts,width:Es,height:Ls,min_width:Cs,min_height:$s,max_width:Is,max_height:Vs,resize:Ds,placeholder:zs,setup:tt=>{h(this,Pt,tt),this.fire("setup",{editor:tt}),tt.on("init",si=>{h(this,At,!0),this.fire("ready")}),tt.on("blur",si=>{console.log("editor blur")}),tt.on("change",si=>{this.$props.value=tt.getContent(),this.fire("change",{value:this.value})})}})}render(){let{inline:e}=this.$props;return e?oi("div",null,oi("div",{class:"editor",id:this.editorId},this.value)):oi("textarea",{class:"editor",id:this.editorId,value:this.value,placeholder:this.placeholder})}};Pt=new WeakMap,xo=new WeakMap,wo=new WeakMap,At=new WeakMap,c(ze,"css",[()=>y("reboot","scrollbar"),fs]),c(ze,"propTypes",{value:String,placeholder:String,required:Boolean,inline:Boolean,readonly:Boolean}),c(ze,"defaultProps",{value:"",width:null,height:null,minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,resize:!0,placeholder:"...",readonly:!1,required:!1,language:"zh-Hans",directionality:null,plugins:"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",toolbar:"undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage  quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print",toolbarSticky:!0,toolbarMode:"wrap",menu:null,menubar:!1,inline:!1,contentCss:null,contentStyle:null,blockFormats:"Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",fontFamilyFormats:"\u5B8B\u4F53=\u5B8B\u4F53;\u4EFF\u5B8B=\u4EFF\u5B8B;\u6977\u4F53=\u6977\u4F53;\u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;\u9ED1\u4F53=\u9ED1\u4F53;\u96B6\u4E66=\u96B6\u4E66;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",fontSizeFormats:null,lineHeightFormats:null,indentation:null,indentUseMargin:!1,styleFormatsMerge:!0,styleFormats:null,colorCols:5,colorMap:null,imagesUploadUrl:null,imagesUploadHandler:null,imagesUploadBasePath:null,imagesUploadCredentials:!1,imagesReuseFilename:!1,imagesFileTypes:null,imageList:null,imageAdvtab:!0,imageUploadtab:!1,imageDimensions:!0,imageTitle:!0,imagePrependUrl:null,imageBatch:!1,automaticUploads:!0,filePickerTypes:null,filePickerCallback:null,templates:null,importcssAppend:!0,importcssGroups:[{title:"Table styles",filter:/^(td|tr)\./},{title:"Block styles",filter:/^(div|p)\./},{title:"Other styles"}]});var bs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxlY2hhcnRzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EifQ== */`;var{h:Gr,classNames:gd,extractClass:bd}=omii,vs=new URL("./echarts/",import.meta.url).href,ys="echarts.esm.min.js",xs=null,Mt,Je=class extends g{constructor(){super(...arguments);m(this,Mt,void 0)}static get root(){return vs}static set root(e){vs=e}static get jsFile(){return ys}static set jsFile(e){ys=e}get echart(){return d(this,Mt)}async installed(){let e=xs;e||(e=xs=await import(new URL(this.constructor.jsFile,this.constructor.root).href)),h(this,Mt,e.init(this.$("main"))),this.draw()}draw(){this.echart.setOption(this.$props)}updated(){this.draw()}render(){return Gr("main",null)}};Mt=new WeakMap,c(Je,"css",bs),c(Je,"propTypes",{}),c(Je,"defaultProps",{title:null,tooltip:null,legend:[],xAxis:null,yAxis:null,series:[],width:null,height:null});var{define:F}=omii;F("oi-rate",he);F("oi-tab",fe);F("oi-icon",M);F("oi-bi",W);F("oi-pager",Z);F("oi-tree",be);F("oi-loading",se);F("oi-alert",ve);F("oi-accordion",ye);F("oi-breadcrumb",xe);F("oi-modal",we);F("oi-popover",ee);F("oi-uploader",ne);F("oi-carousel",Ue);F("oi-badge",Qe);F("oi-toast",Re);F("oi-progress",Ne);F("oi-tooltip",Ye);F("oi-layout",Te);F("oi-import",Ee);F("oi-offcanvas",Ce);F("oi-pagination",ge);F("oi-dropdown",$e);F("oi-coder",Ie);F("oi-select",Ve);F("oi-table",De);F("oi-tinymce",ze);F("oi-echarts",Je);customElements.define("oi-form",ft,{extends:"form"});var ea=import.meta.url;omii.ui={utils:ri,css:vi,effect:R,icon:M,tab:fe,rate:he,pager:Z,tree:be,treeNode:Co,loading:se,alert:ve,accordion:ye,breadcrumb:xe,modal:we,popover:ee,uploader:ne,carousel:Ue,badge:Qe,toast:Re,progress:Ne,tooltip:Ye,layout:Te,import:Ee,offcanvas:Ce,pagination:ge,form:ft,dropdown:$e,coder:Ie,select:Ve,table:De,importURL:ea,sortable:ot,tinymce:ze,echarts:Je};export{ye as accordion,ve as alert,W as bicon,xe as breadcrumb,Ue as carousel,Ie as coder,vi as css,$e as dropdown,Je as echarts,R as effect,ft as form,M as icon,Ee as import,ea as importURL,Te as layout,se as loading,we as modal,Ce as offcanvas,Z as pager,ge as pagination,ee as popover,Ne as progress,he as rate,Ve as select,ot as sortable,fe as tab,De as table,ze as tinymce,Re as toast,Ye as tooltip,be as tree,Co as treeNode,ne as uploader,ri as utils};
//# sourceMappingURL=omii-ui.js.map
