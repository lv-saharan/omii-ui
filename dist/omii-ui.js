var pi=Object.defineProperty;var ui=Object.getPrototypeOf;var fi=Reflect.get;var hi=(t,e,o)=>e in t?pi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(hi(t,typeof e!="symbol"?e+"":e,o),o),bo=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(bo(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},g=(t,e,o,s)=>(bo(t,e,"write to private field"),s?s.call(t,o):e.set(t,o),o);var Jt=(t,e,o)=>(bo(t,e,"access private method"),o),ft=(t,e,o)=>fi(ui(t),o,e);var mi=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),gi=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},bi=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},jt=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Pt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var vi=["B","KB","MB","GB","TB","PB"],vo=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+vi[o]},yi=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},xi=(t,e)=>{window.chrome.extension?t():e()},At=t=>{t.offsetHeight},wi=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],Mt=t=>{if(!t)return"file";t=t.toLowerCase();let e=wi.find(o=>o[0].includes(t));return e==null?"file":e[1]};var Ho={tryExtension:xi,downloadUrl:yi,getName:Pt,getExtension:jt,cleanHTML:mi,isToday:gi,isYesterday:bi,formatSize:vo};var Si=import.meta.url,Fi="sortable.core.esm.js",Yo=new URL("./sortablejs/",Si).href,I=null,z={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function Bi({autoScroll:t,remove:e,revert:o,multiDrag:s,swap:i}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},r=Yo){I||(I=await import(new URL(Fi,r).href)),t&&!z.AutoScroll&&(z.AutoScroll=!0,I.Sortable.mount(new I.AutoScroll));let[a,n]=I.OnSpill;return e&&!z.Remove&&(z.Remove=!0,I.Sortable.mount(a)),e&&!z.Remove&&(z.Remove=!0,I.Sortable.mount(a)),o&&!z.Remove&&(z.Revert=!0,I.Sortable.mount(n)),s&&!z.MultiDrag&&(z.MultiDrag=!0,I.Sortable.mount(new I.MultiDrag)),i&&!z.Swap&&(z.Swap=!0,I.Sortable.mount(new I.Swap)),I.Sortable}function Ui(t){Yo=t}var qe={use:Bi,setRoot:Ui};var{define:Cr,h:Lr,Component:Qi}=omii,h=class extends Qi{};var Ko=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:ht,Component:zr,classNames:Zo,render:Jr}=omii,le=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},{ignoreAttrs:!0,updateSelf:!0}):this.update$Props({activeIndex:t},{ignoreAttrs:!0,updateSelf:!0}))}async render(t){let e=this.$props,o=t.items??e.items,s=[],i=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,c=a.pane;i.push(ht("div",{key:`pane-${a.key??r}`,className:Zo("pane",{active:n})},c)),s.push(ht("div",{key:`nav-${a.key??r}`,className:Zo("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return ht("div",{class:"tabs"},ht("div",{class:"navs"},s),ht("div",{class:"panes"},i))}};l(le,"css",Ko),l(le,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(le,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var De={BUNDLE:"bundle",SINGLE:"single"},mt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:Mr,h:qo,Component:_r}=omii,gt=De.SINGLE,yo=mt.FILLED,xo=async(t,e,o)=>{e=e??yo,e==mt.FILE_TYPE&&(o=De.BUNDLE);try{if((o??gt)==De.BUNDLE){let{default:s}=await import(`./icons/${e}.js`);return s[t]}else{let{default:s}=await import(`./icons/${e}/${t}.js`);return s}}catch{console.error("load icon error",t,e)}},Ri=async(t,e,o,s={})=>{let i=await xo(t,e,o);return qo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...s},i)},J=class extends h{static useBundleMode(){gt=De.BUNDLE}static useSingleMode(){gt=De.SINGLE}static get MODES(){return De}static get TYPES(){return mt}static get Mode(){return gt}static set Mode(t){gt=t}static get Type(){return yo}static set Type(t){yo=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",s=t?`${t}rem`:"var(--oi-icon-width, 1rem)",i=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,s=await xo(t,e);return qo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},s)}};l(J,"updateOnAttributeChanged",!0),l(J,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(J,"defaultProps",{name:null,type:mt.FILLED,viewBox:24,size:null,color:null}),l(J,"createSvg",Ri),l(J,"loadIcon",xo),l(J,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
    :host svg{
      vertical-align:sub ;
    }
  `);var{h:Go}=omii,wo=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},ki=async(t,e={})=>{let o=await wo(t);return Go("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},_=class extends h{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",s=t?`${t}rem`:"var(--oi-bi-width, 1rem)",i=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${s};
        height: ${i};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await wo(t);return Go("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(_,"updateOnAttributeChanged",!0),l(_,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(_,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(_,"createSvg",ki),l(_,"loadIcon",wo),l(_,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var es=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:oa,h:So,Component:sa,classNames:Ni,render:ia}=omii,Fo={STAR:"star",HALF:"star_half",BORDER:"star_border"},X,ce=class extends h{constructor(){super(...arguments);m(this,X,-1)}get rateScore(){return this.$props.score}install(){g(this,X,this.$props.score)}rate(e){this.fire("rate",e),g(this,X,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:s,rateable:i,size:r,color:a}=o,n=[],c=d(this,X);for(let p=0;p<s;p++)c-p>=.5?n.push(Fo.STAR):c-p>0?n.push(Fo.HALF):n.push(Fo.BORDER);return So("div",{class:Ni("rate-wrap","rate-"+d(this,X))},n.map((p,f)=>i?So("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),g(this,X,f+1),this.fire("tryRate",d(this,X)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),g(this,X,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):So("oi-icon",{name:p,size:r,color:a,className:p})))}};X=new WeakMap,l(ce,"css",es),l(ce,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(ce,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var ts=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:C,classNames:bt}=omii,W=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(W,"css",ts),l(W,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:C("oi-icon",{name:"keyboard_arrow_left"}),next:C("oi-icon",{name:"keyboard_arrow_right"}),first:C("oi-icon",{name:"first_page"}),last:C("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:s}=t;return C("div",{class:bt("prev",{disable:o<=1}),onClick:i=>{o>1&&e.goto(o-1)}},s)},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return C("div",{class:bt("next",{disable:o>=i}),onClick:r=>{i>o&&e.goto(o+1)}},s)},createFirst(t,e){let{first:o,pageNum:s}=t;return C("div",{class:bt("first",{disable:s<=1}),onClick:i=>{s!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return C("div",{class:bt("last",{disable:s>=i}),onClick:r=>{s!=i&&e.goto(i)}},o)},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(C("div",{className:bt({active:s==p,page:!0}),onClick:f=>{s!=p&&e.goto(p)}},p));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return C("div",{class:"info"},C("span",{class:"curr"},o),"/",C("span",{class:"total"},s))},createJumper(t,e){return C("div",{class:"jumper"},"\u524D\u5F80",C("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return C("div",{class:"pager"},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e))}}),l(W,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var os=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var _t=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:Oi,define:ha,h:Ti,Component:ma,setTheme:Ci}=omii,Uo="bootstrap";function Li(t){Uo=t,de=new URL(`./${Uo}/`,import.meta.url).href}var de=new URL(`./${Uo}/`,import.meta.url).href;function Ei(t){de=t}var Xt=(t,e=de)=>fetch(Qo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),Vi=t=>Xt=t,ss=(t,e,o=de)=>{let s=Ti("link",{rel:"styleSheet",href:Qo(t,o)});Oi(s,e??"body")},Ii=(t,e=de)=>{ss("reboot",t,e)},Qo=(t,e=de)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},Bo=new Map,Wt=async(t,e=de)=>{let o=`${e}/${t}`,s=Bo.get(o);if(s===void 0){let i=[];Bo.set(o,i),s=new CSSStyleSheet;try{s.replaceSync(await Xt(t,e)),i.forEach(r=>{r(s)}),Bo.set(o,s)}catch(r){console.error("get css stylesheets error",r)}}else if(s instanceof Array)return new Promise(i=>{s.push(i)});return s},y=(...t)=>Promise.all(t.map(e=>Wt(e))),is={};_t.forEach(t=>{Object.defineProperty(is,t,{get:function(){return Wt(t)}})});var $i=(t=_t)=>{t.forEach(e=>{Wt(e)})},Di=async(t,e=de)=>{let o=await Xt(`theme.${t}`,e);Ci(o)},$=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let s=0,i=(r=[])=>{let a=s%e.length,{classNames:n,duration:c=0,delay:p=0,callback:f=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),f&&f(t,n,c,p)},p*1e3),s++,!(Math.floor(s/e.length)>=o)&&setTimeout(()=>{i(n)},(c+p)*1e3)};i()}},rs={StyleSheets:_t,CSSStyleSheets:is,setBaseUrl:Ei,setBaseRoot:Li,loadStyleSheet:Xt,setStyleSheetLoader:Vi,addStyleSheet:ss,addRebootStyleSheet:Ii,getStyleSheetUrl:Qo,getCSSStyleSheet:Wt,getCSSStyleSheets:y,useTheme:Di,timingClassNames:$,preLoad:$i};var{h:B,classNames:vt,extractClass:zi}=omii,Ge=class extends W{},pe=Ge;l(pe,"css",[()=>y("reboot","pagination","utilities"),os]),l(pe,"defaultProps",{...ft(Ge,Ge,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:s}=t;return B("li",{class:vt("page-item",{disabled:o<=1})},B("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i=>{o>1&&e.goto(o-1),i.preventDefault(),i.stopPropagation()}},B("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:o,next:s}=t,{pageCount:i}=e;return B("li",{class:vt("page-item",{disabled:o>=i})},B("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{i>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},B("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:o,pageNum:s}=t;return B("li",{class:vt("page-item",{disabled:s<=1})},B("a",{class:"page-link",href:"#","aria-label":"First",onClick:i=>{s!=1&&e.goto(1),i.preventDefault(),i.stopPropagation()}},B("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:s}=t,{pageCount:i}=e;return B("li",{class:vt("page-item",{disabled:s>=i})},B("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{s!=i&&e.goto(i),r.preventDefault(),r.stopPropagation()}},B("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:s}=t,{pageCount:i}=e,r=Math.ceil(o/2),a=s>r?s-r:1,n=a+o-1;n>i&&(n=i),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(B("li",{key:`pager-${p}`,className:vt("page-item",{active:s==p,page:!0})},B("a",{class:"page-link",href:"#",onClick:f=>{s!=p&&e.goto(p),f.preventDefault(),f.stopPropagation()}},p)));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:s}=e;return B("li",{class:"info page-item"},B("span",{className:"page-link"},B("span",{class:"curr"},o),"/",B("span",{class:"total"},s)))},createJumper(t,e){return B("li",{class:"jumper page-item mx-2"},B("span",{className:"page-link"},"\u524D\u5F80",B("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let s=o.currentTarget,i=Number(s.value);i>e.pageCount&&(s.value=e.pageCount),i<1&&(s.value=1),i=Number(s.value),e.goto(i)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:s,createPages:i,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return B("nav",null,B("ul",{...zi(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),s(t,e),i(t,e),r(t,e),a(t,e),n(t,e),c(t,e)))}}),l(pe,"propTypes",{...ft(Ge,Ge,"propTypes"),align:String});var as=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var ns=`
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
:host .node .element .label {
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
:host .node.hover .children.empty {
  display: block;
  height: 2em;
  border: #cfe2ff 1px dotted;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBT1I7RUFDSTs7QUFRQTtFQUNJO0VBQ0E7RUFDQTs7QUFNQTtFQUNJO0VBQ0E7O0FBS1I7RUFDSTs7O0FBTWhCO0VBRUk7OztBQUdKO0VBQ0kifQ== */`;var{h:H,classNames:Ht,define:Ji,getHost:Ro,throttle:Ra}=omii,et,yt,No=class extends h{constructor(){super(...arguments);m(this,et,void 0);m(this,yt,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.$props.node??{}}get nodes(){return d(this,et)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=Ro(this);return o instanceof No?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?H("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):H("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?H("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):H("div",{class:"radio-placeholder"}):null}install(){!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}get Sortable(){return d(this,yt)}async installed(){if(this.sortable){let o=await qe.use();g(this,yt,o.create(this.$(".children"),{delay:150,handle:".element",fallbackOnBody:!0,invertSwap:!0,group:this.tree.sortGroup,onEnd:s=>{let i=Ro(s.from),r=Ro(s.to),a=i.nodes,n=r.nodes;n||(n=[],r.node.children=n),this.tree.fire("sorted",{fromNode:i.node,fromNodes:a,toNode:r.node,toNodes:n,fromIndex:s.oldIndex,toIndex:s.newIndex})}}))}}async render(o){let{node:s,cssss:i}=o,r=s.element??s.label??s.key;typeof r=="function"&&(r=await r(s,o,this));let a=null,n=g(this,et,s.children);return typeof n=="function"&&this.expanded&&g(this,et,n=await n(s,o,this)),a=H("div",{class:Ht("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(n instanceof Array?n.map(c=>H("oi-tree-node",{node:c,"node-level":this.level+1,tree:this.tree,cssss:i})):n)),H("div",{class:Ht("node",{expanded:this.expanded,"no-children":this.noChildren})},H("div",{class:Ht("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:c=>{c.stopPropagation(),this.selected&&c.ctrlKey===!0?this.unSelect():this.select()}},H("div",{onClick:c=>{c.stopPropagation(),this.toggle()},class:Ht("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,H("div",{class:"label"},r)),a)}},ze=No;et=new WeakMap,yt=new WeakMap,l(ze,"css",ns),l(ze,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),l(ze,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});Ji("oi-tree-node",ze);var ko=ze;var{h:ls,purgeCSSSS:ji,getHost:Yt,classNames:Pi}=omii;var xt,tt,ue=class extends h{constructor(){super(...arguments);m(this,xt,void 0);m(this,tt,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return d(this,xt)}isSelected(e){let{multiSelect:o,selectedKey:s,selectedKeys:i}=this.$props;return o?(i??[]).some(r=>r==e):s!=null&&s==e}select(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;s?i.some(r=>r==e)||i.push(e):this.$props.selectedKey=e,o&&this.update()}unSelect(e,o=!0){let{multiSelect:s,selectedKeys:i}=this.$props;if(!s)this.$props.selectedKey=null;else{let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isChecked(e){let{checkboxTree:o,checkedKeys:s}=this.$props;return o?(s??[]).some(i=>i==e):!1}check(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;s&&i.indexOf(e)==-1&&i.push(e),o&&this.update()}uncheck(e,o=!0){let{checkboxTree:s,checkedKeys:i}=this.$props;if(s){let r=i.indexOf(e);r!=-1&&i.splice(r,1)}o&&this.update()}isRadioed(e){let{radioTree:o,radioedKey:s}=this.$props;return o?s!=null&&s==e:!1}radio(e,o=!0){let{radioTree:s}=this.$props;s&&(this.$props.radioedKey=e),o&&this.update()}unradio(e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:o}=this.$props;return(o??[]).some(s=>s==e)}expand(e,o=!0){let{expandedKeys:s}=this.$props;s.indexOf(e)!=-1&&s.push(e),o&&this.update()}collapse(e,o=!0){let{expandedKeys:s}=this.$props,i=s.indexOf(e);i!=-1&&s.splice(i,1),o&&this.update()}async installed(){if(this.$props.sortable){let e=await qe.use();g(this,xt,e.create(this.rootNode,{delay:150,fallbackOnBody:!0,invertSwap:!0,group:this.sortGroup,onEnd:o=>{let s=Yt(o.from),i=Yt(o.to),r=s.nodes,a=i.nodes;this.fire("sorted",{fromNode:s.node,fromNodes:r,toNode:i.node,toNodes:a,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}get nodes(){if(!d(this,tt)){let e=this.$props.nodes,o=Yt(this);typeof e=="function"&&(e=e.call(o)),g(this,tt,e)}return d(this,tt)}render(){let e=Yt(this),o=ji(this.$props.nodeCss,e);return ls("div",{class:Pi("tree-container",{sortable:this.sortable})},this.nodes.map(s=>ls("oi-tree-node",{node:s,tree:this,cssss:o})))}};xt=new WeakMap,tt=new WeakMap,l(ue,"css",as),l(ue,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),l(ue,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:Va,classNames:Ia}=omii,wt,ee=class extends h{constructor(){super(...arguments);m(this,wt,void 0)}css(){let{size:e,color:o}=this.$props,s="2rem";if(e)s=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?s=`${a.offsetHeight}px`:s="2rem"}let i=`
    :host{
      --oi-loading-size:${s};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,wt)}
    ${i}
    ${r}
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:s}}=await import(`./loadings/${e}.js`);return g(this,wt,s),o}};wt=new WeakMap,l(ee,"updateOnAttributeChanged",!0),l(ee,"css",`
    :host{
      display:inline-block;
    }
  `),l(ee,"defaultProps",{name:"circle",size:null,color:null}),l(ee,"propTypes",{name:String,size:Number,color:String});var ot={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Oo="show",Kt="collapse",To="collapsing",Ai="collapse-horizontal",Co=.35,Lo=(t,e)=>e||(t.classList.contains(Ai)?ot.HORIZONTAL:ot.VERTICAL),cs={show(t,e=Co,o=null){return new Promise(s=>{o=Lo(t,o),$(t,[{classNames:[Kt]},{classNames:[To],duration:e,callback(i){i.style[o==ot.VERTICAL?"height":"width"]=`${i[o==ot.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Kt,Oo],callback(i){i.style[o==ot.VERTICAL?"height":"width"]="",s()}}])})},hide(t,e=Co,o=null){return new Promise(s=>{o=Lo(t,o);let i=o==ot.VERTICAL?"height":"width";t.style[i]=`${t.getBoundingClientRect()[i]}px`,At(t.offsetHeight),$(t,[{classNames:[To,Kt,Oo]},{classNames:[To],duration:e,callback(r){r.style[i]=""}},{classNames:[Kt],callback:s}])})},toggle(t,e=Co,o=null){return o=Lo(t,o),t.classList.contains(Oo)?this.hide(t,e,o):this.show(t,e,o)}};var St="fade",Eo="show",Vo=.15,ds={show(t,e=Vo){return new Promise(o=>{$(t,[{classNames:[St]},{classNames:[St,Eo],duration:e,callback:o}])})},hide(t,e=Vo){return new Promise(o=>{$(t,[{classNames:[St,Eo]},{classNames:[St],duration:e,callback:o}])})},toggle(t,e=Vo){return t.classList.contains(St)&&!t.classList.contains(Eo)?this.show(t,e):this.hide(t,e)}};var U={collapse:cs,fade:ds};var{h:Io,classNames:Mi}=omii;var _i="show",Ft,fe=class extends h{constructor(){super(...arguments);m(this,Ft,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(_i),g(this,Ft,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return d(this,Ft)?null:Io("div",{className:Mi("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},Io("slot",null),o?Io("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};Ft=new WeakMap,l(fe,"css",()=>y("reboot","utilities","alert","close","transitions")),l(fe,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(fe,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:st,classNames:$o}=omii,Zt={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Xi="collapsed",it,qt,he=class extends h{constructor(){super(...arguments);m(this,it)}static get DIRECTIONS(){return Zt}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:s}=this.$props;if(e.length>0&&s&&(e[0].opened=!0),!o){let i=e.filter(r=>r.opened);if(i.length){let r=i.shift();r.opened=!0,i.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==Zt.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:s}=this.$props;if(s)Jt(this,it,qt).call(this,e);else{let i=o.findIndex(a=>a.opened),r=i==-1?null:o[i];r&&r!=e&&Jt(this,it,qt).call(this,r),Jt(this,it,qt).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return st("div",{class:$o("accordion",{"collapse-horizontal":o==Zt.HORIZONTAL})},e.map((s,i)=>st("div",{class:"accordion-item",key:s.key??`item-${i}`},st("h2",{class:"accordion-header"},st("button",{class:$o("accordion-button",{collapsed:!s.opened}),type:"button","aria-expanded":s.opened,onClick:r=>{this.toggle(s)}},s.header)),st("div",{class:$o("accordion-collapse",{collapse:!0,show:s.opened})},st("div",{class:"accordion-body"},typeof s.body=="function"?s.body(s,this.$props,this):s.body)))))}};it=new WeakSet,qt=function(e){let{items:o,transitionDuration:s}=this.$props,i=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${i+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(Xi,!e.opened),e.opened?(U.collapse.show(a),this.fire("collapseShow",e)):(U.collapse.hide(a),this.fire("collapseHide",e))},l(he,"css",()=>y("reboot","utilities","accordion","close","transitions")),l(he,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:Zt.VERTICAL}),l(he,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:Bt,classNames:sn}=omii,me=class extends h{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return Bt("nav",{"aria-label":"breadcrumb"},Bt("ol",{class:"breadcrumb"},t.map((o,s)=>s!==t.length-1?Bt("li",{class:"breadcrumb-item"},typeof e=="object"&&s!=0?e:null,Bt("a",{href:o.href},o.label)):Bt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&s!=0?e:null,o.label))))}};l(me,"css",()=>y("reboot","utilities","breadcrumb")),l(me,"defaultProps",{}),l(me,"propTypes",{});var ps=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:L,classNames:us,extractClass:Wi}=omii,ge=class extends h{open(){this.update$Props({visible:!0}),this.fire("open")}close(){U.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return L(L.f,null,e.visible&&!e.staticPosition&&L("div",{class:us("modal-backdrop","fade","show")}),L("div",{...Wi(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},L("div",{class:us("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},L("div",{class:"modal-content"},L("div",{class:"modal-header"},L("slot",{name:"header"},L("h5",{class:"modal-title"},e.title),L("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),L("div",{class:"modal-body"},L("slot",null)),L("div",{class:"modal-footer"},L("slot",{name:"footer"}))))))}};l(ge,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),ps]),l(ge,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(ge,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function Qt(t){return t.split("-")[0]}function eo(t){return t.split("-")[1]}function Rt(t){return["top","bottom"].includes(Qt(t))?"x":"y"}function zo(t){return t==="y"?"height":"width"}function fs(t,e,o){let{reference:s,floating:i}=t,r=s.x+s.width/2-i.width/2,a=s.y+s.height/2-i.height/2,n=Rt(e),c=zo(n),p=s[c]/2-i[c]/2,f=n==="x",u;switch(Qt(e)){case"top":u={x:r,y:s.y-i.height};break;case"bottom":u={x:r,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:a};break;case"left":u={x:s.x-i.width,y:a};break;default:u={x:s.x,y:s.y}}switch(eo(e)){case"start":u[n]-=p*(o&&f?-1:1);break;case"end":u[n]+=p*(o&&f?-1:1)}return u}var ms=async(t,e,o)=>{let{placement:s="bottom",strategy:i="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),c=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:f}=fs(c,s,n),u=s,b={},v=0;for(let x=0;x<r.length;x++){let{name:S,fn:F}=r[x],{x:R,y:N,data:O,reset:Q}=await F({x:p,y:f,initialPlacement:s,placement:u,strategy:i,middlewareData:b,rects:c,platform:a,elements:{reference:t,floating:e}});p=R??p,f=N??f,b={...b,[S]:{...b[S],...O}},Q&&v<=50&&(v++,typeof Q=="object"&&(Q.placement&&(u=Q.placement),Q.rects&&(c=Q.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):Q.rects),{x:p,y:f}=fs(c,u,n)),x=-1)}return{x:p,y:f,placement:u,strategy:i,middlewareData:b}};function gs(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function Ut(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Jo(t,e){var o;e===void 0&&(e={});let{x:s,y:i,platform:r,rects:a,elements:n,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=e,x=gs(v),S=n[b?u==="floating"?"reference":"floating":u],F=Ut(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(S)))==null||o?S:S.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:f,strategy:c})),R=Ut(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:s,y:i}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:c}):a[u]);return{top:F.top-R.top+x.top,bottom:R.bottom-F.bottom+x.bottom,left:F.left-R.left+x.left,right:R.right-F.right+x.right}}var Hi=Math.min,Yi=Math.max;function Do(t,e,o){return Yi(t,Hi(e,o))}var jo=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:s=0}=t??{},{x:i,y:r,placement:a,rects:n,platform:c}=e;if(o==null)return{};let p=gs(s),f={x:i,y:r},u=Rt(a),b=eo(a),v=zo(u),x=await c.getDimensions(o),S=u==="y"?"top":"left",F=u==="y"?"bottom":"right",R=n.reference[v]+n.reference[u]-f[u]-n.floating[v],N=f[u]-n.reference[u],O=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o)),Q=O?u==="y"?O.clientHeight||0:O.clientWidth||0:0;Q===0&&(Q=n.floating[v]);let Ke=R/2-N/2,ae=p[S],Ie=Q-x[v]-p[F],k=Q/2-x[v]/2+Ke,V=Do(ae,k,Ie),ne=(b==="start"?p[S]:p[F])>0&&k!==V&&n.reference[v]<=n.floating[v];return{[u]:f[u]-(ne?k<ae?ae-k:Ie-k:0),data:{[u]:V,centerOffset:k-V}}}}),Ki={left:"right",right:"left",bottom:"top",top:"bottom"};function Gt(t){return t.replace(/left|right|bottom|top/g,e=>Ki[e])}function Zi(t,e,o){o===void 0&&(o=!1);let s=eo(t),i=Rt(t),r=zo(i),a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Gt(a)),{main:a,cross:Gt(a)}}var qi={start:"end",end:"start"};function hs(t){return t.replace(/start|end/g,e=>qi[e])}var Gi=["top","right","bottom","left"],gn=Gi.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var kt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:s,middlewareData:i,rects:r,initialPlacement:a,platform:n,elements:c}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...x}=t,S=Qt(s),F=u||(S===a||!v?[Gt(a)]:function(k){let V=Gt(k);return[hs(k),V,hs(V)]}(a)),R=[a,...F],N=await Jo(e,x),O=[],Q=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&O.push(N[S]),f){let{main:k,cross:V}=Zi(s,r,await(n.isRTL==null?void 0:n.isRTL(c.floating)));O.push(N[k],N[V])}if(Q=[...Q,{placement:s,overflows:O}],!O.every(k=>k<=0)){var Ke,ae;let k=((Ke=(ae=i.flip)==null?void 0:ae.index)!=null?Ke:0)+1,V=R[k];if(V)return{data:{index:k,overflows:Q},reset:{placement:V}};let ne="bottom";switch(b){case"bestFit":{var Ie;let zt=(Ie=Q.map(Ze=>[Ze,Ze.overflows.filter($e=>$e>0).reduce(($e,mo)=>$e+mo,0)]).sort((Ze,$e)=>Ze[1]-$e[1])[0])==null?void 0:Ie[0].placement;zt&&(ne=zt);break}case"initialPlacement":ne=a}if(s!==ne)return{reset:{placement:ne}}}return{}}}};var Nt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:s}=e,i=await async function(r,a){let{placement:n,platform:c,elements:p}=r,f=await(c.isRTL==null?void 0:c.isRTL(p.floating)),u=Qt(n),b=eo(n),v=Rt(n)==="x",x=["left","top"].includes(u)?-1:1,S=f&&v?-1:1,F=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:N,alignmentAxis:O}=typeof F=="number"?{mainAxis:F,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...F};return b&&typeof O=="number"&&(N=b==="end"?-1*O:O),v?{x:N*S,y:R*x}:{x:R*x,y:N*S}}(e,t);return{x:o+i.x,y:s+i.y,data:i}}}};function er(t){return t==="x"?"y":"x"}var Ot=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:s,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:F=>{let{x:R,y:N}=F;return{x:R,y:N}}},...c}=t,p={x:o,y:s},f=await Jo(e,c),u=Rt(Qt(i)),b=er(u),v=p[u],x=p[b];if(r){let F=u==="y"?"bottom":"right";v=Do(v+f[u==="y"?"top":"left"],v,v-f[F])}if(a){let F=b==="y"?"bottom":"right";x=Do(x+f[b==="y"?"top":"left"],x,x-f[F])}let S=n.fn({...e,[u]:v,[b]:x});return{...S,data:{x:S.x-o,y:S.y-s}}}}};function Ss(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function oe(t){if(t==null)return window;if(!Ss(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function Y(t){return oe(t).getComputedStyle(t)}function te(t){return Ss(t)?"":t?(t.nodeName||"").toLowerCase():""}function Fs(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function K(t){return t instanceof oe(t).HTMLElement}function rt(t){return t instanceof oe(t).Element}function at(t){return typeof ShadowRoot>"u"?!1:t instanceof oe(t).ShadowRoot||t instanceof ShadowRoot}function oo(t){let{overflow:e,overflowX:o,overflowY:s}=Y(t);return/auto|scroll|overlay|hidden/.test(e+s+o)}function tr(t){return["table","td","th"].includes(te(t))}function bs(t){let e=/firefox/i.test(Fs()),o=Y(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function Bs(){return!/^((?!chrome|android).)*safari/i.test(Fs())}var vs=Math.min,Tt=Math.max,to=Math.round;function Je(t,e,o){var s,i,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),c=1,p=1;e&&K(t)&&(c=t.offsetWidth>0&&to(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&to(n.height)/t.offsetHeight||1);let f=rt(t)?oe(t):window,u=!Bs()&&o,b=(n.left+(u&&(s=(i=f.visualViewport)==null?void 0:i.offsetLeft)!=null?s:0))/c,v=(n.top+(u&&(r=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/c,S=n.height/p;return{width:x,height:S,top:v,right:b+x,bottom:v+S,left:b,x:b,y:v}}function be(t){return(e=t,(e instanceof oe(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function so(t){return rt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Us(t){return Je(be(t)).left+so(t).scrollLeft}function or(t,e,o){let s=K(e),i=be(e),r=Je(t,s&&function(c){let p=Je(c);return to(p.width)!==c.offsetWidth||to(p.height)!==c.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(s||!s&&o!=="fixed")if((te(e)!=="body"||oo(i))&&(a=so(e)),K(e)){let c=Je(e,!0);n.x=c.x+e.clientLeft,n.y=c.y+e.clientTop}else i&&(n.x=Us(i));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function Qs(t){return te(t)==="html"?t:t.assignedSlot||t.parentNode||(at(t)?t.host:null)||be(t)}function ys(t){return K(t)&&Y(t).position!=="fixed"?function(e){let{offsetParent:o}=e,s=e,i=!1;for(;s&&s!==o;){let{assignedSlot:r}=s;if(r){let a=r.offsetParent;if(Y(r).display==="contents"){let n=r.hasAttribute("style"),c=r.style.display;r.style.display=Y(s).display,a=r.offsetParent,r.style.display=c,n||r.removeAttribute("style")}s=r,o!==a&&(o=a,i=!0)}else if(at(s)&&s.host&&i)break;s=at(s)&&s.host||s.parentNode}return o}(t):null}function Po(t){let e=oe(t),o=ys(t);for(;o&&tr(o)&&Y(o).position==="static";)o=ys(o);return o&&(te(o)==="html"||te(o)==="body"&&Y(o).position==="static"&&!bs(o))?e:o||function(s){let i=Qs(s);for(at(i)&&(i=i.host);K(i)&&!["html","body"].includes(te(i));){if(bs(i))return i;{let r=i.parentNode;i=at(r)?r.host:r}}return null}(t)||e}function xs(t){if(K(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Je(t);return{width:e.width,height:e.height}}function Rs(t){let e=Qs(t);return["html","body","#document"].includes(te(e))?t.ownerDocument.body:K(e)&&oo(e)?e:Rs(e)}function ks(t,e){var o;e===void 0&&(e=[]);let s=Rs(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=oe(s),a=i?[r].concat(r.visualViewport||[],oo(s)?s:[]):s,n=e.concat(a);return i?n:n.concat(ks(a))}function ws(t,e,o){return e==="viewport"?Ut(function(s,i){let r=oe(s),a=be(s),n=r.visualViewport,c=a.clientWidth,p=a.clientHeight,f=0,u=0;if(n){c=n.width,p=n.height;let b=Bs();(b||!b&&i==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:c,height:p,x:f,y:u}}(t,o)):rt(e)?function(s,i){let r=Je(s,!1,i==="fixed"),a=r.top+s.clientTop,n=r.left+s.clientLeft;return{top:a,left:n,x:n,y:a,right:n+s.clientWidth,bottom:a+s.clientHeight,width:s.clientWidth,height:s.clientHeight}}(e,o):Ut(function(s){var i;let r=be(s),a=so(s),n=(i=s.ownerDocument)==null?void 0:i.body,c=Tt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=Tt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+Us(s),u=-a.scrollTop;return Y(n||r).direction==="rtl"&&(f+=Tt(r.clientWidth,n?n.clientWidth:0)-c),{width:c,height:p,x:f,y:u}}(be(t)))}function sr(t){let e=ks(t),o=["absolute","fixed"].includes(Y(t).position)&&K(t)?Po(t):t;return rt(o)?e.filter(s=>rt(s)&&function(i,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(i.contains(r))return!0;if(a&&at(a)){let n=r;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(s,o)&&te(s)!=="body"):[]}var ir={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:s,strategy:i}=t,r=[...o==="clippingAncestors"?sr(e):[].concat(o),s],a=r[0],n=r.reduce((c,p)=>{let f=ws(e,p,i);return c.top=Tt(f.top,c.top),c.right=vs(f.right,c.right),c.bottom=vs(f.bottom,c.bottom),c.left=Tt(f.left,c.left),c},ws(e,a,i));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:s}=t,i=K(o),r=be(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((i||!i&&s!=="fixed")&&((te(o)!=="body"||oo(r))&&(a=so(o)),K(o))){let c=Je(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:rt,getDimensions:xs,getOffsetParent:Po,getDocumentElement:be,getElementRects:t=>{let{reference:e,floating:o,strategy:s}=t;return{reference:or(e,Po(o),s),floating:{...xs(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Y(t).direction==="rtl"};var io=(t,e,o)=>ms(t,e,{platform:ir,...o});var Ns=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:je,classNames:Rn,createRef:rr}=omii,ro,Os,Ct,Ao,Pe,Z=class extends h{constructor(){super(...arguments);m(this,ro);m(this,Ct);l(this,"slotRef",rr());m(this,Pe,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props,i=d(this,Ct,Ao);if(i){let r=this.$(`.${this.type}-arrow`);io(i,this.$element,{strategy:s,placement:e,middleware:[kt(),Ot(),Nt(o),jo({element:r})]}).then(({x:a,y:n,placement:c,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){g(this,Pe,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),U.fade.show(this.$element)}hide(){g(this,Pe,!1),U.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,Pe)?this.hide():this.show()}installed(){let e=d(this,Ct,Ao),{triggerShow:o,triggerHide:s}=this.$props;e&&(o.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),s.split(" ").forEach(i=>{i&&e.addEventListener(i,r=>{r.preventDefault(),r.stopPropagation(),d(this,Pe)&&this.hide()})}))}render(e){let{placement:o,header:s,body:i}=this.$props;return je(je.f,null,je("slot",{ref:this.slotRef,tabIndex:!0}),je("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},je("div",{class:"popover-arrow"}),je("slot",{name:"header",class:"popover-header"},s),je("slot",{class:"popover-body",name:"body"},i)))}};ro=new WeakSet,Os=function(){return this.slotRef.current},Ct=new WeakSet,Ao=function(){let e=d(this,ro,Os).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},Pe=new WeakMap,l(Z,"css",[()=>y("reboot","utilities","transitions","popover"),Ns]),l(Z,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(Z,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var Ts=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Cs=(t,e=2048)=>{if(!(t instanceof File))return null;let o=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(o)},e),o};var{h:T,classNames:ar}=omii,Ls=t=>t?.type?.indexOf("image")==0,nr=t=>Ls(t)?(t.url=t.url??Cs(t.file),T("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):T("div",{className:"file"},T("oi-icon",{"view-box":"1024",name:Mt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),T("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),Es=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return T("div",{className:"pictures"},T("div",{class:"row row-cols-auto g-4"},e.map((i,r)=>T("div",{className:"col",key:`file-${r}`},T("div",{class:"card",onClick:()=>{t.open(r)}},nr(i),T("div",{className:"actions"},T("div",{class:"position-absolute top-50 start-50 translate-middle"},Ls(i)&&T("oi-icon",{name:"search"}),T("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(s||e.length==0)&&T("div",{className:"col selector-col",key:"selector"},T("div",{class:"card selector"},T("label",{class:ar("selector",{multiple:s}),title:o,onClick:()=>{t.open()}},T("oi-icon",{name:"add"}))))))};var{h:j,classNames:Jn}=omii,Vs=({component:t})=>{let{files:e,selectText:o,multiple:s}=t.$props;return j("div",{className:"files"},j("slot",{name:"actions"},j("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),j("table",{class:"table"},j("tbody",null,e.map(i=>j("tr",null,j("td",null,j("oi-icon",{"view-box":"1024",name:Mt(i.ext),type:"file-type"}),i.name,i.ext),j("td",null,vo(i.size)),j("td",null,j("oi-icon",{name:"delete"})))))))};var{h:ao,classNames:An}=omii,lr={pictures:Es,files:Vs},no={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Ae,ve=class extends h{constructor(){super(...arguments);m(this,Ae,-1)}static get STATUS(){return no}open(e=-1){g(this,Ae,e),this.$("#files").click()}remove(e){this.$props.files?.splice(e,1),this.updateSelf()}select(e){let{multiple:o,files:s,autoUpload:i}=this.$props;if(e?.length==0)return!1;if(o||s.splice(0,s.length),d(this,Ae)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Pt(a.name),ext:jt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.splice(d(this,Ae),1,...r),this.fire("replaced",{index:d(this,Ae),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Pt(a.name),ext:jt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));s.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),i===!0&&this.upload()}refresh(){this.update()}upload(){let{files:e,action:o,withCredentials:s,headers:i}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==no.NONE||a.status==no.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=s,typeof i=="function"&&(i=i()),typeof i=="object")for(let c in i)n.setRequestHeader(c,i[c]);n.send(a),n.onreadystatechange=function(c){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=no.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,c)},n.upload.onprogress=function(c){if(c.lengthComputable){let p=Math.ceil(c.loaded/c.total*100);r.progress=p,this.fire("progress",{file:r,loaded:c.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:s}=this.$props;return ao(ao.f,null,ao("slot",null,lr[s]),ao("input",{id:"files",type:"file",multiple:e,accept:o,onChange:i=>{this.select(i.target.files)}}))}};Ae=new WeakMap,l(ve,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),Ts]),l(ve,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(ve,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Is=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var cr="transitionend";var $s=t=>{t.dispatchEvent(new Event(cr))},dr=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Ds=t=>{if(!dr(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let s=t.closest("summary");if(s&&s.parentNode!==o||s===null)return!1}return e};var{h:D,classNames:zs,extractClass:pr}=omii;var ur="carousel-item-end",fr="carousel-item-start",hr="carousel-item-next",mr="carousel-item-prev",gr=".active",br=".carousel-item",rl=gr+br,Me,se,Lt,xe,ye=class extends h{constructor(){super(...arguments);m(this,Me,0);m(this,se,!1);m(this,Lt,[]);m(this,xe,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,Me)}get isSliding(){return d(this,se)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,se)&&$s(this),clearInterval(d(this,xe)),g(this,xe,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(d(this,se))return!1;let{$activeItem:o,$items:s,$props:{duration:i}}=this,r=s.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=s.indexOf(n),e=a>r):typeof e=="number"?(a=(e+s.length)%s.length,n=s[a],e=a>r):(a=(r+1)%s.length,e||(a=(r-1+s.length)%s.length),n=s[a]),d(this,Me)==a)return!1;let c=e?fr:ur,p=e?hr:mr;g(this,se,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;$(n,[{classNames:[],duration:f},{classNames:[p],callback:()=>{At(n)}},{classNames:[p,c],duration:i},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),$(o,[{classNames:[],duration:f},{classNames:[c,"active"],duration:i},{classNames:[],callback:()=>{g(this,se,!1),g(this,Me,a);let u;for(;u=d(this,Lt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Ds(this)&&this.slide()}cycle(){d(this,xe)&&clearInterval(d(this,xe)),g(this,xe,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),g(this,Me,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,se)?d(this,Lt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:s,prevCtrl:i,indicator:r}=this.$props;return D("div",{...pr(e,"carousel")},D("slot",{class:"carousel-inner"},o.map(a=>D("div",{className:zs("carousel-item"),waiting:a.attributes?.waiting},a))),D("div",{class:"carousel-indicators"},D("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),D("slot",{name:"actions"},typeof s=="function"&&s(this),typeof i=="function"&&i(this)))}};Me=new WeakMap,se=new WeakMap,Lt=new WeakMap,xe=new WeakMap,l(ye,"css",[()=>y("reboot","utilities","carousel"),Is]),l(ye,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>D("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},D("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),D("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>D("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},D("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),D("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>D("button",{type:"button",onClick:s=>o.slide(e),class:zs({active:e==0})})}),l(ye,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Mo,classNames:ll,extractClass:vr}=omii,we=class extends h{css(){}render(t){let{text:e,desc:o,position:s}=this.$props,i=s?s.split("-"):[];return Mo("span",{...vr(t,"badge",{"position-absolute":s,"top-0":i.includes("top"),"start-100":i.includes("right"),"start-0":i.includes("left"),"top-100":i.includes("bottom"),"translate-middle":s,"rounded-pill":s})},Mo("slot",null,e),o&&Mo("span",{class:"visually-hidden"},o))}};l(we,"css",()=>y("reboot","utilities","badge")),l(we,"defaultProps",{text:"",desc:!1,position:!1}),l(we,"propTypes",{});var Js=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:nt,classNames:hl,extractClass:yr}=omii,Fe,Se=class extends h{constructor(){super(...arguments);m(this,Fe,!0)}get closed(){return d(this,Fe)}close(){g(this,Fe,!0),U.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){g(this,Fe,!1),this.update(),U.fade.show(this)}install(){g(this,Fe,!this.$props.visible)}render(e){return nt("div",{...yr(e,"toast",{show:!d(this,Fe)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},nt("div",{class:"toast-header"},nt("slot",{name:"header"}),nt("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),nt("div",{class:"toast-body"},nt("slot",null)))}};Fe=new WeakMap,l(Se,"css",[()=>y("reboot","utilities","toasts","close"),Js]),l(Se,"defaultProps",{visible:!1}),l(Se,"propTypes",{visible:Boolean});var{h:_o,classNames:xr,extractClass:wl}=omii,Be=class extends h{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:s,max:i,showPercent:r,striped:a,animated:n,style:c,className:p}=this.$props;return _o("div",{class:"progress",style:c},_o("div",{class:xr("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":s,"aria-valuemax":i},r&&_o("span",null,o,"%")))}};l(Be,"css",()=>y("reboot","utilities","progress")),l(Be,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(Be,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var js=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:lt,classNames:Rl,createRef:kl}=omii,lo=class extends Z{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return lt(lt.f,null,lt("slot",{ref:this.slotRef}),lt("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},lt("div",{class:"tooltip-arrow"}),lt("slot",{class:"tooltip-inner",name:"body"},o)))}},_e=lo;l(_e,"css",[()=>y("reboot","utilities","transitions","tooltip"),js]),l(_e,"defaultProps",{...ft(lo,lo,"defaultProps"),offset:0});var Ps=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:Ue,classNames:El,createRef:ct}=omii,P,ie,A,Xe,We,co,Qe=class extends h{constructor(){super(...arguments);m(this,P,ct());m(this,ie,ct());m(this,A,ct());m(this,Xe,ct());m(this,We,ct());m(this,co,ct())}close(e,o){}closeFooter(){this.$props.openFooter=!1,U.collapse.hide(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,U.collapse.show(d(this,A).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.clientHeight-d(this,A).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,U.collapse.hide(d(this,P).current),d(this,ie).current.style.height=this.clientHeight-d(this,A).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,U.collapse.show(d(this,P).current),d(this,ie).current.style.height=this.clientHeight-d(this,P).current.scrollHeight-d(this,A).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,U.collapse.hide(d(this,Xe).current)}openLeft(){this.$props.openLeft=!0,U.collapse.show(d(this,Xe).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,U.collapse.hide(d(this,We).current)}openRight(){this.$props.openRight=!0,U.collapse.show(d(this,We).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=d(this,P).current.getBoundingClientRect(),s=d(this,A).current.getBoundingClientRect();d(this,ie).current.style.height=e.height-o.height-s.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:s,openRight:i}=this.$props;e||(d(this,A).current.style.height=0),o||(d(this,P).current.style.height=0),s||(d(this,Xe).current.style.height=0),i||(d(this,We).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return Ue(Ue.f,null,Ue("slot",{name:"header",ref:d(this,P)}),Ue("main",{ref:d(this,ie)},Ue("slot",{name:"left",ref:d(this,Xe),class:"collapse-horizontal"}),Ue("slot",{name:"content",ref:d(this,co)}),Ue("slot",{name:"right",ref:d(this,We),class:"collapse-horizontal"})),Ue("slot",{name:"footer",ref:d(this,A)}))}};P=new WeakMap,ie=new WeakMap,A=new WeakMap,Xe=new WeakMap,We=new WeakMap,co=new WeakMap,l(Qe,"css",[Ps]),l(Qe,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(Qe,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var As=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:Xo,classNames:Al,uniqueTag:wr}=omii,q,Re=class extends h{constructor(){super(...arguments);m(this,q,void 0)}get $module(){return d(this,q)}load(e,o,s,i){o=o??this.$props.module,s=s??this.$props.loading,i=i??this.$props.loadError,g(this,q,s),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)g(this,q,i);else if(typeof a=="function"){let n=wr(a);g(this,q,Xo(n,null))}else g(this,q,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),g(this,q,i),this.updateSelf()})}install(){let{src:e,module:o,loading:s,loadError:i}=this.$props;this.load(e,o,s,i)}render(e){return d(this,q)}};q=new WeakMap,l(Re,"css",[As]),l(Re,"defaultProps",{src:null,module:"default",loading:Xo("oi-loading",{size:"6"}),loadError:Xo("h1",null,"Module Load Error")}),l(Re,"propTypes",{src:String,module:String});var Ms=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:ke,classNames:Yl,createRef:_s,extractClass:Sr}=omii,G,Ne=class extends h{constructor(){super(...arguments);l(this,"offcanvasRef",_s());l(this,"backdropRef",_s());m(this,G,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,G))return;g(this,G,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;$(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,G)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,G))return;g(this,G,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;$(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){g(this,G,this.$props.visible)}render(e){let{visible:o,placement:s,position:i,title:r,useBackdrop:a}=this.$props;return ke(ke.f,null,ke("div",{ref:this.offcanvasRef,...Sr(e,"offcanvas",`offcanvas-${s}`,`position-${i}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},ke("div",{class:"offcanvas-header"},ke("slot",{name:"title",class:"offcanvas-title h5"},r),ke("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),ke("slot",{class:"offcanvas-body"})),a&&d(this,G)&&ke("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};G=new WeakMap,l(Ne,"css",[()=>y("reboot","offcanvas","utilities","close"),Ms]),l(Ne,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Ne,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:oc,classNames:sc,extractClass:ic,createRef:rc}=omii;function Hs(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let s in e)s!=="valid"&&e[s]===!0&&o.push(s);o.length&&(t.dataset.invalid=o.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function Xs(t){let e=t.currentTarget;e.checkValidity(),Hs(t.target),e.classList.add("was-validated")}function Ys(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(s=>{Hs(s)}),t.classList.add("was-validated"),o.every(s=>s.checkValidity?s.checkValidity():!0)&&e}function Ws(t){let e=t.target;e.removeEventListener("input",Xs),e.addEventListener("input",Xs,!1),Ys(e)||(t.preventDefault(),t.stopPropagation())}var dt=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",Ws),e.addEventListener("submit",Ws,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return Ys(this)}connectedCallback(){this.constructor.validate(this)}};var Ks=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:po,classNames:lc,createRef:Zs}=omii,Ye=null;document.addEventListener("click",t=>{Ye&&Ye.hide()});var Et,Vt,re,He,It,Wo,pt,Oe=class extends h{constructor(){super(...arguments);m(this,re);m(this,It);m(this,Et,Zs());m(this,Vt,Zs());m(this,pt,!1)}get $menu(){return d(this,Et).current}setPosition(){let{placement:e,offset:o,strategy:s}=this.$props;io(d(this,It,Wo),this.$menu,{strategy:s,placement:e,middleware:[kt(),Ot(),Nt(o)]}).then(({x:i,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${i}px`,top:`${r}px`})})}show(){g(this,pt,!0),d(this,re,He).focus(),d(this,re,He).setAttribute("aria-expanded",!0),d(this,re,He).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Ye=this,this.setPosition()}hide(){g(this,pt,!1),d(this,re,He).classList.remove("show"),d(this,re,He).setAttribute("aria-expanded","false"),Ye=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,pt)?this.hide():this.show()}installed(){d(this,It,Wo).addEventListener("click",e=>{Ye&&Ye!=this&&Ye.hide(),this.toggle(),e.preventDefault(),e.stopPropagation()}),this.addEventListener("click",e=>{e.stopPropagation()})}render(e){let{menu:o}=this.$props;return po(po.f,null,po("slot",{ref:d(this,Vt)}),po("slot",{name:"menu",ref:d(this,Et)},o))}};Et=new WeakMap,Vt=new WeakMap,re=new WeakSet,He=function(){return d(this,Vt).current},It=new WeakSet,Wo=function(){let e=d(this,re,He).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},pt=new WeakMap,l(Oe,"css",[()=>y("reboot","utilities","transitions","dropdown"),Ks]),l(Oe,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Oe,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var qs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:Fr,Component:gc}=omii,uo,Te=class extends h{constructor(){super(...arguments);m(this,uo,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:s,fontSize:i}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{g(this,uo,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:s,fontSize:i,minimap:{enabled:!1}})})}render(){return Fr("div",{class:"coder"})}};uo=new WeakMap,l(Te,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,s=new CSSStyleSheet;return s.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,s],fetch(new URL("./monaco/index.css",e).href).then(i=>i.text())},qs]),l(Te,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(Te,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var Gs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJIn0= */`;var{h:M,classNames:Sc,extractClass:Fc}=omii,ut,Ce=class extends h{constructor(){super(...arguments);m(this,ut,!1)}get validity(){let{required:e,values:o,min:s,max:i}=this.$props,r={valid:!0};return e&&(!o||o.length==0)&&(r.valid=!1,r.valueMissing=!0),r.valid&&(s!=0&&s>o.length&&(r.valid=!1,r.rangeUnderflow=!0),i!=0&&i<o.length&&(r.valid=!1,r.rangeOverflow=!0)),r}checkValidity(){g(this,ut,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",e=>{this.showOptions()})}render(){let{values:e,options:o,preserveOrder:s,createSelected:i,createOption:r,multiple:a}=this.$props;return r=r.bind(this),i=i.bind(this),e=e??[],s&&a&&e.sort((n,c)=>o.findIndex(p=>p.value==n)-o.findIndex(p=>p.value==c)),o=o??[],M("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},M("div",{class:"selected d-flex",onClick:n=>{n.stopImmediatePropagation()}},"\xA0",M("ul",{class:"values flex-grow-1"},e.map((n,c)=>{let p=o.find(f=>f.value==n);if(p)return i(p,c)})),M("div",{class:"expander",onClick:n=>{this.showOptions()}})),M("ul",{class:"dropdown-menu",slot:"menu"},o.map((n,c)=>M("li",null,r(n,c)))))}};ut=new WeakMap,l(Ce,"css",[()=>y("reboot","utilities","forms","scrollbar"),Gs]),l(Ce,"defaultProps",{options:[],values:[],multiple:!0,required:!1,min:0,max:0,preserveOrder:!0,createOption(e,o){let{values:s,multiple:i}=this.$props,r={};return i?r.for=`option${o}`:r.onClick=a=>{s.includes(e.value)?s.splice(0,s.length):s.push(e.value)},M("div",{class:"form-check d-flex"},i&&M("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${o}`,checked:s.includes(e.value),onChange:a=>{if(a.target.checked)s.includes(e.value)||s.push(e.value);else{let n=s.indexOf(e.value);n!=-1&&s.splice(n,1)}this.updateSelf(),d(this,ut)&&this.checkValidity()}}),M("label",{class:"form-check-label flex-grow-1",...r},e.text))},createSelected(e,o){let{values:s}=this.$props;return M("li",{onClick:i=>{i.stopImmediatePropagation()}},e.text,M("oi-bi",{name:"x",onClick:i=>{s.splice(o,1),this.updateSelf(),i.stopPropagation(),d(this,ut)&&this.checkValidity()}}))}}),l(Ce,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,min:Number,max:Number});var ei=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:E,classNames:Oc,extractClass:Br}=omii,Le=class extends h{render(){let{columns:t,rows:e,showHeader:o,titleCellFormatter:s,dataCellFormatter:i,height:r}=this.$props,a=Br(this.$props)?.class??"";return E("div",{className:"table-container",style:{height:r}},E("table",{className:`table ${a}`},E("thead",null,o&&E("tr",null,t?.map(n=>E("th",{style:n.titleStyle,scope:"col"},s(n,t,e,this)))),E("slot",{name:"header"})),E("tbody",null,e?.map((n,c)=>E("tr",null,t.map(p=>E("td",{style:p.style},i(p,n,c,e,this)))))),E("tfoot",null,E("slot",{name:"footer"}))))}};l(Le,"css",[()=>y("reboot","utilities","tables"),ei]),l(Le,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,o,s){if(t.type=="checkbox"){t.checked||(t.checked=[]);let i=o?.map(a=>a[t.field])??[],r=i.every(a=>t.checked.includes(a));return E("input",{type:"checkbox","data-field":t.field,checked:r,onChange:async a=>{if(a.target.checked){t.checked.push(...i);let n=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...n)}else{let n=new Set(t.checked),c=new Set(i.filter(p=>!n.has(p)));t.checked.splice(0,t.checked.length,...c)}await s.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,o,s,i){let r=e[t.field];switch(t.type){case"index":return o+1;case"checkbox":return t.checked||(t.checked=[]),E("input",{type:"checkbox",checked:t.checked?.includes(r),onChange:async a=>{let n=t.checked.indexOf(r);n==-1?t.checked.push(r):t.checked.splice(n,1),await i.updateSelf()}});case"radio":return E("input",{type:"radio"});default:return r}},height:"auto"}),l(Le,"propTypes",{showHeader:Boolean});var ti=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0aW55bWNlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVKO0VBQ0kifQ== */`;var{h:Ur,classNames:$c,extractClass:Dc}=omii,oi=!0,si=new URL("./tinymce/",import.meta.url).href,ii="./tinymce.js",$t,fo,ho,Ee=class extends h{constructor(){super(...arguments);m(this,$t,void 0);m(this,fo,void 0);m(this,ho,!1)}static get min(){return oi}static set min(e){oi=e}static get root(){return si}static set root(e){si=e}static get jsFile(){return ii}static set jsFile(e){ii=e}get value(){return this.$props.value}set value(e){this.$props.value=e,this.editor&&this.editor.setContent(e)}get editor(){return d(this,$t)}css(){return d(this,fo)}get validity(){let{required:e}=this.$props,o={valid:!0};return e&&value==""&&(o.valid=!1,o.valueMissing=!0),o}checkValidity(){g(this,ho,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}async installed(){await import(new URL(this.constructor.jsFile,this.constructor.root).href);let e=this.$("#editor"),{menu:o,menubar:s,toolbar:i,plugins:r,language:a,toolbarMode:n,baseUrl:c,inline:p,contentStyle:f,contentCss:u,fontFamilyFormats:b,blockFormats:v,fontSizeFormats:x,lineHeightFormats:S,indentUseMargin:F,indentation:R,styleFormats:N,styleFormatsMerge:O,colorCols:Q,colorMap:Ke,imagesUploadUrl:ae,imagesUploadHandler:Ie,imagesUploadBasePath:k,imagesUploadCredentials:V,imagesReuseFilename:ne,imagesFileTypes:zt,automaticUploads:Ze,filePickerTypes:$e,filePickerCallback:mo,templates:li,importcssGroups:ci,importcssAppend:di}=this.$props;tinymce.init({target:e,promotion:!1,base_url:c??this.constructor.root,menu:o,menubar:s,toolbar:i,toolbar_mode:n,plugins:r,language:a,inline:p,extended_valid_elements:"oi-icon[name|color|size]",custom_elements:"oi-icon",content_css:u,content_style:f,font_family_formats:b,block_formats:v,font_size_formats:x,line_height_formats:S,indent_use_margin:F,indentation:R,style_formats:N,style_formats_merge:O,color_cols:Q,color_map:Ke,images_upload_url:ae,images_upload_handler:Ie,images_upload_base_path:k,images_upload_credentials:V,images_reuse_filename:ne,images_file_types:zt,automatic_uploads:Ze,file_picker_types:$e,file_picker_callback:mo,importcss_groups:ci,templates:li,importcss_append:di,setup:go=>{g(this,$t,go),go.on("change",kr=>{this.$props.value=go.getContent(),this.fire("change",{value:this.value})})}})}render(){return Ur("textarea",{id:"editor",value:this.value,placeholder:this.placeholder})}};$t=new WeakMap,fo=new WeakMap,ho=new WeakMap,l(Ee,"css",ti),l(Ee,"propTypes",{value:String,placeholder:String,required:Boolean,inline:Boolean}),l(Ee,"defaultProps",{value:"",placeholder:"...",required:!1,language:"zh-Hans",directionality:null,plugins:"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",toolbar:"undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage  quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print",toolbarSticky:!0,toolbarMode:"wrap",menu:null,menubar:!1,inline:!1,contentCss:null,contentStyle:null,blockFormats:"Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",fontFamilyFormats:"\u5B8B\u4F53=\u5B8B\u4F53;\u4EFF\u5B8B=\u4EFF\u5B8B;\u6977\u4F53=\u6977\u4F53;\u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;\u9ED1\u4F53=\u9ED1\u4F53;\u96B6\u4E66=\u96B6\u4E66;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",fontSizeFormats:null,lineHeightFormats:null,indentation:null,indentUseMargin:!1,styleFormatsMerge:!0,styleFormats:null,colorCols:5,colorMap:null,imagesUploadUrl:null,imagesUploadHandler:null,imagesUploadBasePath:null,imagesUploadCredentials:!1,imagesReuseFilename:!1,imagesFileTypes:null,automaticUploads:!0,filePickerTypes:null,filePickerCallback:null,templates:null,importcssAppend:!0,importcssGroups:[{title:"Table styles",filter:/^(td|tr)\./},{title:"Block styles",filter:/^(div|p)\./},{title:"Other styles"}]});var ri=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxlY2hhcnRzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EifQ== */`;var{h:Qr,classNames:Mc,extractClass:_c}=omii,ai=new URL("./echarts/",import.meta.url).href,ni="echarts.esm.min.js",Dt,Ve=class extends h{constructor(){super(...arguments);m(this,Dt,void 0)}static get root(){return ai}static set root(e){ai=e}static get jsFile(){return ni}static set jsFile(e){ni=e}get echart(){return d(this,Dt)}async installed(){let e=await import(new URL(this.constructor.jsFile,this.constructor.root).href);g(this,Dt,e.init(this.$("main"))),this.draw()}draw(){this.echart.setOption(this.$props)}updated(){this.draw()}render(){return Qr("main",null)}};Dt=new WeakMap,l(Ve,"css",ri),l(Ve,"propTypes",{}),l(Ve,"defaultProps",{title:null,tooltip:null,legend:[],xAxis:{},yAxis:{},series:[],width:null,height:null});var{define:w}=omii;w("oi-rate",ce);w("oi-tab",le);w("oi-icon",J);w("oi-bi",_);w("oi-pager",W);w("oi-tree",ue);w("oi-loading",ee);w("oi-alert",fe);w("oi-accordion",he);w("oi-breadcrumb",me);w("oi-modal",ge);w("oi-popover",Z);w("oi-uploader",ve);w("oi-carousel",ye);w("oi-badge",we);w("oi-toast",Se);w("oi-progress",Be);w("oi-tooltip",_e);w("oi-layout",Qe);w("oi-import",Re);w("oi-offcanvas",Ne);w("oi-pagination",pe);w("oi-dropdown",Oe);w("oi-coder",Te);w("oi-select",Ce);w("oi-table",Le);w("oi-tinymce",Ee);w("oi-echarts",Ve);customElements.define("oi-form",dt,{extends:"form"});var Rr=import.meta.url;omii.ui={utils:Ho,css:rs,effect:U,icon:J,tab:le,rate:ce,pager:W,tree:ue,treeNode:ko,loading:ee,alert:fe,accordion:he,breadcrumb:me,modal:ge,popover:Z,uploader:ve,carousel:ye,badge:we,toast:Se,progress:Be,tooltip:_e,layout:Qe,import:Re,offcanvas:Ne,pagination:pe,form:dt,dropdown:Oe,coder:Te,select:Ce,table:Le,importURL:Rr,sortable:qe,tinymce:Ee,echarts:Ve};export{he as accordion,fe as alert,_ as bicon,me as breadcrumb,ye as carousel,Te as coder,rs as css,Oe as dropdown,Ve as echarts,U as effect,dt as form,J as icon,Re as import,Rr as importURL,Qe as layout,ee as loading,ge as modal,Ne as offcanvas,W as pager,pe as pagination,Z as popover,Be as progress,ce as rate,Ce as select,qe as sortable,le as tab,Le as table,Ee as tinymce,Se as toast,_e as tooltip,ue as tree,ko as treeNode,ve as uploader,Ho as utils};
//# sourceMappingURL=omii-ui.js.map
