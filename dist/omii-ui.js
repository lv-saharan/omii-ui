var _i=Object.defineProperty;var Yi=Object.getPrototypeOf;var Ki=Reflect.get;var Zi=(e,t,o)=>t in e?_i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(Zi(e,typeof t!="symbol"?t+"":t,o),o),eo=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var d=(e,t,o)=>(eo(e,t,"read from private field"),o?o.call(e):t.get(e)),m=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},g=(e,t,o,i)=>(eo(e,t,"write to private field"),i?i.call(e,o):t.set(e,o),o);var kt=(e,t,o)=>(eo(e,t,"access private method"),o),st=(e,t,o)=>Ki(Yi(e),o,t);var{define:fr,h:hr,Component:qi}=omii,h=class extends qi{};var Vo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:rt,Component:xr,classNames:Io,render:wr}=omii,se=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:e,key:t},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:t},!0,!0):this.update$Props({activeIndex:e},!0,!0))}async render(e){let t=this.$props,o=e.items??t.items,i=[],s=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,c=a.pane;s.push(rt("div",{key:`pane-${a.key??r}`,className:Io("pane",{active:n})},c)),i.push(rt("div",{key:`nav-${a.key??r}`,className:Io("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return rt("div",{class:"tabs"},rt("div",{class:"navs"},i),rt("div",{class:"panes"},s))}};l(se,"css",Vo),l(se,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(se,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Oe={BUNDLE:"bundle",SINGLE:"single"},at={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:Qr,h:$o,Component:Ur}=omii,nt=Oe.SINGLE,to=at.FILLED,oo=async(e,t,o)=>{t=t??to,t==at.FILE_TYPE&&(o=Oe.BUNDLE);try{if((o??nt)==Oe.BUNDLE){let{default:i}=await import(`./icons/${t}.js`);return i[e]}else{let{default:i}=await import(`./icons/${t}/${e}.js`);return i}}catch{console.error("load icon error",e,t)}},Gi=async(e,t,o,i={})=>{let s=await oo(e,t,o);return $o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...i},s)},D=class extends h{static useBundleMode(){nt=Oe.BUNDLE}static useSingleMode(){nt=Oe.SINGLE}static get MODES(){return Oe}static get TYPES(){return at}static get Mode(){return nt}static set Mode(e){nt=e}static get Type(){return to}static set Type(e){to=e}css(){let{size:e,color:t}=this.$props,o=t||"var(--oi-icon-color)",i=e?`${e}rem`:"var(--oi-icon-width, 1rem)",s=e?`${e}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:e,type:t,viewBox:o}=this.$props,i=await oo(e,t);return $o("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},i)}};l(D,"updateOnAttributeChanged",!0),l(D,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(D,"defaultProps",{name:null,type:at.FILLED,viewBox:24,size:null,color:null}),l(D,"createSvg",Gi),l(D,"loadIcon",oo),l(D,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var{h:Do}=omii,io=async e=>{try{let{default:t}=await import(`./bootstrap/icons/${e}.js`);return t}catch{console.error("load icon error",e,type)}},es=async(e,t={})=>{let o=await io(e);return Do("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...t},o)},M=class extends h{css(){let{size:e,color:t}=this.$props,o=t||"var(--oi-bi-color)",i=e?`${e}rem`:"var(--oi-bi-width, 1rem)",s=e?`${e}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:e,viewBox:t}=this.$props,o=await io(e);return Do("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t+" "+t},o)}};l(M,"updateOnAttributeChanged",!0),l(M,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(M,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(M,"createSvg",es),l(M,"loadIcon",io),l(M,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var zo=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:$r,h:so,Component:Dr,classNames:ts,render:zr}=omii,ro={STAR:"star",HALF:"star_half",BORDER:"star_border"},X,re=class extends h{constructor(){super(...arguments);m(this,X,-1)}get rateScore(){return this.$props.score}install(){g(this,X,this.$props.score)}rate(t){this.fire("rate",t),g(this,X,t),this.update$Props({score:t})}render(t){let o=this.$props,{maxScore:i,rateable:s,size:r,color:a}=o,n=[],c=d(this,X);for(let p=0;p<i;p++)c-p>=.5?n.push(ro.STAR):c-p>0?n.push(ro.HALF):n.push(ro.BORDER);return so("div",{class:ts("rate-wrap","rate-"+d(this,X))},n.map((p,f)=>s?so("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),g(this,X,f+1),this.fire("tryRate",d(this,X)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),g(this,X,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):so("oi-icon",{name:p,size:r,color:a,className:p})))}};X=new WeakMap,l(re,"css",zo),l(re,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(re,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Jo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:O,classNames:lt}=omii,W=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:e,pageSize:t,pageCount:o}=this.$props;return(e||e===0)&&t?Math.ceil(e/t):o}goto(e){let{pageCount:t}=this.$props;(e>=1||e<t)&&(this.update$Props({pageNum:e}),this.fire("paged",e))}render(e){return e.createLayout(e,this)}};l(W,"css",Jo),l(W,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:O("oi-icon",{name:"keyboard_arrow_left"}),next:O("oi-icon",{name:"keyboard_arrow_right"}),first:O("oi-icon",{name:"first_page"}),last:O("oi-icon",{name:"last_page"}),createPrev(e,t){let{pageNum:o,prev:i}=e;return O("div",{class:lt("prev",{disable:o<=1}),onClick:s=>{o>1&&t.goto(o-1)}},i)},createNext(e,t){let{pageNum:o,next:i}=e,{pageCount:s}=t;return O("div",{class:lt("next",{disable:o>=s}),onClick:r=>{s>o&&t.goto(o+1)}},i)},createFirst(e,t){let{first:o,pageNum:i}=e;return O("div",{class:lt("first",{disable:i<=1}),onClick:s=>{i!=1&&t.goto(1)}},o)},createLast(e,t){let{last:o,pageNum:i}=e,{pageCount:s}=t;return O("div",{class:lt("last",{disable:i>=s}),onClick:r=>{i!=s&&t.goto(s)}},o)},createPages(e,t){let{linksCount:o,pageNum:i}=e,{pageCount:s}=t,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(O("div",{className:lt({active:i==p,page:!0}),onClick:f=>{i!=p&&t.goto(p)}},p));return c},createInfo(e,t){let{pageNum:o}=e,{pageCount:i}=t;return O("div",{class:"info"},O("span",{class:"curr"},o),"/",O("span",{class:"total"},i))},createJumper(e,t){return O("div",{class:"jumper"},"\u524D\u5F80",O("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${t.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:t.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>t.pageCount&&(i.value=t.pageCount),s<1&&(i.value=1),s=Number(i.value),t.goto(s)}}),"\u9875")},createLayout(e,t){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:c}=e;return O("div",{class:"pager"},o(e,t),i(e,t),s(e,t),r(e,t),a(e,t),n(e,t),c(e,t))}}),l(W,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var jo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSJ9 */`;var Ot=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:os,define:Yr,h:is,Component:Kr,setTheme:ss}=omii,no="bootstrap";function rs(e){no=e,ae=new URL(`./${no}/`,import.meta.url).href}var ae=new URL(`./${no}/`,import.meta.url).href;function as(e){ae=e}var Tt=(e,t=ae)=>fetch(lo(e,t)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${e} error`,o)}).catch(o=>(console.error(`load stylesheet ${e} error`,o),null)),ns=e=>Tt=e,Po=(e,t,o=ae)=>{let i=is("link",{rel:"styleSheet",href:lo(e,o)});os(i,t??"body")},ls=(e,t=ae)=>{Po("reboot",e,t)},lo=(e,t=ae)=>{try{return new URL(`./${e}.css`,t).href}catch(o){console.error(o,e,t)}},ao=new Map,Lt=async(e,t=ae)=>{let o=`${t}/${e}`,i=ao.get(o);if(i===void 0){let s=[];ao.set(o,s),i=new CSSStyleSheet;try{i.replaceSync(await Tt(e,t)),s.forEach(r=>{r(i)}),ao.set(o,i)}catch(r){console.error("get css stylesheets error",r)}}else if(i instanceof Array)return new Promise(s=>{i.push(s)});return i},v=(...e)=>Promise.all(e.map(t=>Lt(t))),Ao={};Ot.forEach(e=>{Object.defineProperty(Ao,e,{get:function(){return Lt(e)}})});var cs=(e=Ot)=>{e.forEach(t=>{Lt(t)})},ds=async(e,t=ae)=>{let o=await Tt(`theme.${e}`,t);ss(o)},V=(e,t,o=1)=>{if(t instanceof Array&&t.length&&typeof o=="number"&&e.classList){let i=0,s=(r=[])=>{let a=i%t.length,{classNames:n,duration:c=0,delay:p=0,callback:f=null}=t[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),e.classList.remove(...r),e.classList.add(...n),f&&f(e,n,c,p)},p*1e3),i++,!(Math.floor(i/t.length)>=o)&&setTimeout(()=>{s(n)},(c+p)*1e3)};s()}},Mo={StyleSheets:Ot,CSSStyleSheets:Ao,setBaseUrl:as,setBaseRoot:rs,loadStyleSheet:Tt,setStyleSheetLoader:ns,addStyleSheet:Po,addRebootStyleSheet:ls,getStyleSheetUrl:lo,getCSSStyleSheet:Lt,getCSSStyleSheets:v,useTheme:ds,timingClassNames:V,preLoad:cs};var{h:S,classNames:ct,extractClass:ps}=omii,Me=class extends W{},ne=Me;l(ne,"css",[()=>v("reboot","pagination","utilities"),jo]),l(ne,"defaultProps",{...st(Me,Me,"defaultProps"),align:"left",createPrev(e,t){let{pageNum:o,prev:i}=e;return S("li",{class:ct("page-item",{disabled:o<=1})},S("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{o>1&&t.goto(o-1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u2039")))},createNext(e,t){let{pageNum:o,next:i}=e,{pageCount:s}=t;return S("li",{class:ct("page-item",{disabled:o>=s})},S("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{s>o&&t.goto(o+1),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\u203A")))},createFirst(e,t){let{first:o,pageNum:i}=e;return S("li",{class:ct("page-item",{disabled:i<=1})},S("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{i!=1&&t.goto(1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"}," \xAB")))},createLast(e,t){let{last:o,pageNum:i}=e,{pageCount:s}=t;return S("li",{class:ct("page-item",{disabled:i>=s})},S("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{i!=s&&t.goto(s),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\xBB")))},createPages(e,t){let{linksCount:o,pageNum:i}=e,{pageCount:s}=t,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(S("li",{key:`pager-${p}`,className:ct("page-item",{active:i==p,page:!0})},S("a",{class:"page-link",href:"#",onClick:f=>{i!=p&&t.goto(p),f.preventDefault(),f.stopPropagation()}},p)));return c},createInfo(e,t){let{pageNum:o}=e,{pageCount:i}=t;return S("li",{class:"info page-item"},S("span",{className:"page-link"},S("span",{class:"curr"},o),"/",S("span",{class:"total"},i)))},createJumper(e,t){return S("li",{class:"jumper page-item mx-2"},S("span",{className:"page-link"},"\u524D\u5F80",S("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${t.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:t.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>t.pageCount&&(i.value=t.pageCount),s<1&&(i.value=1),s=Number(i.value),t.goto(s)}}),"\u9875"))},createLayout(e,t){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:c}=e;return S("nav",null,S("ul",{...ps(e,"pagination",{"justify-content-end":e.align=="right","justify-content-center":e.align=="center"})},o(e,t),i(e,t),s(e,t),r(e,t),a(e,t),n(e,t),c(e,t)))}}),l(ne,"propTypes",{...st(Me,Me,"propTypes"),align:String});var Xo=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var Wo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTs7QUFLSTtFQUNJO0VBQ0E7O0FBS1I7RUFDSSJ9 */`;var{h:z,classNames:Et,define:us,getHost:fs}=omii,dt,po=class extends h{constructor(){super(...arguments);m(this,dt,!1)}get tree(){return this.props.tree}get checkboxTree(){return this.tree.props.checkboxTree}get radioTree(){return this.tree.props.radioTree}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.props.node??{}}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=fs(this);return o instanceof po?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}get noChildren(){return!this.node.children}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?z("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):z("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?z("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):z("div",{class:"radio-placeholder"}):null}install(){!this.tree.props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}async render(o){let{node:i,cssss:s}=o,r=i.element??i.label??i.key;typeof r=="function"&&(r=await r(i,o,this));let a=null,n=i.children;return typeof n=="function"&&this.expanded&&(n=await n(i,o,this)),n&&this.expanded&&(a=z("div",{class:Et("children",{expanded:this.expanded})},n instanceof Array?n.map(c=>z("oi-tree-node",{node:c,"node-level":this.level+1,tree:this.tree,cssss:s})):n)),z("div",{class:Et("node",{expanded:this.expanded,"loading-children":d(this,dt),"no-children":this.noChildren})},z("div",{class:Et("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:c=>{c.stopPropagation(),this.selected&&c.ctrlKey===!0?this.unSelect():this.select()}},z("div",{onClick:c=>{c.stopPropagation(),this.toggle()},class:Et("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,z("div",{class:"text"},r),d(this,dt)?z("oi-loading",null):null),a)}},Te=po;dt=new WeakMap,l(Te,"css",Wo),l(Te,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),l(Te,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});us("oi-tree-node",Te);var co=Te;var{h:uo,purgeCSSSS:hs,getHost:ms}=omii;var le=class extends h{get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}isSelected(e){let{multiSelect:t,selectedKey:o,selectedKeys:i}=this.$props;return t?(i??[]).some(s=>s==e):o!=null&&o==e}select(e,t=!0){let{multiSelect:o,selectedKeys:i}=this.$props;o?i.some(s=>s==e)||i.push(e):this.$props.selectedKey=e,t&&this.update()}unSelect(e,t=!0){let{multiSelect:o,selectedKeys:i}=this.$props;if(!o)this.$props.selectedKey=null;else{let s=i.indexOf(e);s!=-1&&i.splice(s,1)}t&&this.update()}isChecked(e){let{checkboxTree:t,checkedKeys:o}=this.$props;return t?(o??[]).some(i=>i==e):!1}check(e,t=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;o&&i.indexOf(e)==-1&&i.push(e),t&&this.update()}uncheck(e,t=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;if(o){let s=i.indexOf(e);s!=-1&&i.splice(s,1)}t&&this.update()}isRadioed(e){let{radioTree:t,radioedKey:o}=this.$props;return t?o!=null&&o==e:!1}radio(e,t=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=e),t&&this.update()}unradio(e=!0){let{radioTree:t}=this.$props;t&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:t}=this.$props;return(t??[]).some(o=>o==e)}expand(e,t=!0){let{expandedKeys:o}=this.$props;o.indexOf(e)!=-1&&o.push(e),t&&this.update()}collapse(e,t=!0){let{expandedKeys:o}=this.$props,i=o.indexOf(e);i!=-1&&o.splice(i,1),t&&this.update()}render(e){let t=e.nodes??this.$props.nodes,o=ms(this);typeof t=="function"&&(t=t.call(o));let i=hs(this.$props.nodeCss,o);return uo(uo.f,null,t.map(s=>uo("oi-tree-node",{node:s,tree:this,cssss:i})))}};l(le,"css",Xo),l(le,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),l(le,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:fa,classNames:ha}=omii,pt,q=class extends h{constructor(){super(...arguments);m(this,pt,void 0)}css(){let{size:t,color:o}=this.$props,i="2rem";if(t)i=`${t}rem`;else{let a=this.parentNode?.host??this.parentNode;a?i=`${a.offsetHeight}px`:i="2rem"}let s=`
    :host{
      --oi-loading-size:${i};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,pt)}
    ${s}
    ${r}
    `}async render(){let{name:t}=this.$props,{default:{template:o,css:i}}=await import(`./loadings/${t}.js`);return g(this,pt,i),o}};pt=new WeakMap,l(q,"updateOnAttributeChanged",!0),l(q,"css",`
    :host{
      display:inline-block;
    }
  `),l(q,"defaultProps",{name:"circle",size:null,color:null}),l(q,"propTypes",{name:String,size:Number,color:String});var gs=(e,t=!1)=>(e=e.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),t&&(e=e.replace(/\n/ig,"")),e),bs=e=>{let t=new Date;return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()},vs=e=>{let t=new Date;return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()+1},Ct=e=>{if(!e)return null;let t=e.match(/\.\w+$/);return t?t.toString().toLowerCase():null},Vt=e=>{if(!e)return null;let t=e.lastIndexOf(".");return t==-1?e:e.substring(0,t)};var ys=["B","KB","MB","GB","TB","PB"],fo=e=>{e=Number.parseInt(e);let t=e,o=0;for(;t>1024;)t/=1024,o++;return t.toFixed(o==0?0:2)+ys[o]},xs=(e,t)=>{let o=document.createElement("a");o.download=t,o.href=e,o.target="_blank",o.click()},ws=(e,t)=>{window.chrome.extension?e():t()},It=e=>{e.offsetHeight},Ss=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],$t=e=>{if(!e)return"file";e=e.toLowerCase();let t=Ss.find(o=>o[0].includes(e));return t==null?"file":t[1]};var Ho={tryExtension:ws,downloadUrl:xs,getName:Vt,getExtension:Ct,cleanHTML:gs,isToday:bs,isYesterday:vs,formatSize:fo};var Xe={HORIZONTAL:"horizontal",VERTICAL:"vertical"},ho="show",Dt="collapse",mo="collapsing",Fs="collapse-horizontal",go=.35,bo=(e,t)=>t||(e.classList.contains(Fs)?Xe.HORIZONTAL:Xe.VERTICAL),_o={show(e,t=go,o=null){return new Promise(i=>{o=bo(e,o),V(e,[{classNames:[Dt]},{classNames:[mo],duration:t,callback(s){s.style[o==Xe.VERTICAL?"height":"width"]=`${s[o==Xe.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Dt,ho],callback(s){s.style[o==Xe.VERTICAL?"height":"width"]="",i()}}])})},hide(e,t=go,o=null){return new Promise(i=>{o=bo(e,o);let s=o==Xe.VERTICAL?"height":"width";e.style[s]=`${e.getBoundingClientRect()[s]}px`,It(e.offsetHeight),V(e,[{classNames:[mo,Dt,ho]},{classNames:[mo],duration:t,callback(r){r.style[s]=""}},{classNames:[Dt],callback:i}])})},toggle(e,t=go,o=null){return o=bo(e,o),e.classList.contains(ho)?this.hide(e,t,o):this.show(e,t,o)}};var ut="fade",vo="show",yo=.15,Yo={show(e,t=yo){return new Promise(o=>{V(e,[{classNames:[ut]},{classNames:[ut,vo],duration:t,callback:o}])})},hide(e,t=yo){return new Promise(o=>{V(e,[{classNames:[ut,vo]},{classNames:[ut],duration:t,callback:o}])})},toggle(e,t=yo){return e.classList.contains(ut)&&!e.classList.contains(vo)?this.show(e,t):this.hide(e,t)}};var B={collapse:_o,fade:Yo};var{h:xo,classNames:Bs}=omii;var Qs="show",ft,ce=class extends h{constructor(){super(...arguments);m(this,ft,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(Qs),g(this,ft,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:t,closeable:o}=this.$props;return d(this,ft)?null:xo("div",{className:Bs("alert",`alert-${t}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},xo("slot",null),o?xo("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};ft=new WeakMap,l(ce,"css",()=>v("reboot","utilities","alert","close","transitions")),l(ce,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(ce,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:We,classNames:wo}=omii,zt={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Us="collapsed",He,Jt,de=class extends h{constructor(){super(...arguments);m(this,He)}static get DIRECTIONS(){return zt}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:t,alwayOpen:o,firstOpen:i}=this.$props;if(t.length>0&&i&&(t[0].opened=!0),!o){let s=t.filter(r=>r.opened);if(s.length){let r=s.shift();r.opened=!0,s.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==zt.HORIZONTAL?WIDTH:HEIGHT}toggle(t){let{items:o,alwayOpen:i}=this.$props;if(i)kt(this,He,Jt).call(this,t);else{let s=o.findIndex(a=>a.opened),r=s==-1?null:o[s];r&&r!=t&&kt(this,He,Jt).call(this,r),kt(this,He,Jt).call(this,t)}}render(){let{items:t,direction:o}=this.$props;return We("div",{class:wo("accordion",{"collapse-horizontal":o==zt.HORIZONTAL})},t.map((i,s)=>We("div",{class:"accordion-item",key:i.key??`item-${s}`},We("h2",{class:"accordion-header"},We("button",{class:wo("accordion-button",{collapsed:!i.opened}),type:"button","aria-expanded":i.opened,onClick:r=>{this.toggle(i)}},i.header)),We("div",{class:wo("accordion-collapse",{collapse:!0,show:i.opened})},We("div",{class:"accordion-body"},typeof i.body=="function"?i.body(i,this.$props,this):i.body)))))}};He=new WeakSet,Jt=function(t){let{items:o,transitionDuration:i}=this.$props,s=o.indexOf(t),r=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");t.opened=!t.opened,n.classList.toggle(Us,!t.opened),t.opened?(B.collapse.show(a),this.fire("collapseShow",t)):(B.collapse.hide(a),this.fire("collapseHide",t))},l(de,"css",()=>v("reboot","utilities","accordion","close","transitions")),l(de,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:zt.VERTICAL}),l(de,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:ht,classNames:Ia}=omii,pe=class extends h{css(){let{divider:e}=this.$props;if(typeof e=="string")return`:host{--oi-breadcrumb-divider:'${e}'}`;if(typeof e=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:e,divider:t}=this.$props;return ht("nav",{"aria-label":"breadcrumb"},ht("ol",{class:"breadcrumb"},e.map((o,i)=>i!==e.length-1?ht("li",{class:"breadcrumb-item"},typeof t=="object"&&i!=0?t:null,ht("a",{href:o.href},o.label)):ht("li",{class:"breadcrumb-item active","aria-current":"page"},typeof t=="object"&&i!=0?t:null,o.label))))}};l(pe,"css",()=>v("reboot","utilities","breadcrumb")),l(pe,"defaultProps",{}),l(pe,"propTypes",{});var Ko=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:E,classNames:Zo,extractClass:Rs}=omii,ue=class extends h{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(e){let t=this.$props;return E(E.f,null,t.visible&&!t.staticPosition&&E("div",{class:Zo("modal-backdrop","fade","show")}),E("div",{...Rs(e,"modal",{"position-static":t.staticPosition,"d-block":t.staticPosition||t.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(t.staticBackdrop)return!1;this.close()}}},E("div",{class:Zo("modal-dialog",t.size?`modal-${t.size}`:!1,{"modal-fullscreen":t.fullscreen,"modal-dialog-scrollable":t.scrollable,"modal-dialog-centered":t.vcentered})},E("div",{class:"modal-content"},E("div",{class:"modal-header"},E("slot",{name:"header"},E("h5",{class:"modal-title"},t.title),E("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),E("div",{class:"modal-body"},E("slot",null)),E("div",{class:"modal-footer"},E("slot",{name:"footer"}))))))}};l(ue,"css",[()=>v("reboot","modal","utilities","close","scrollbar"),Ko]),l(ue,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(ue,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function gt(e){return e.split("-")[0]}function Pt(e){return e.split("-")[1]}function bt(e){return["top","bottom"].includes(gt(e))?"x":"y"}function Fo(e){return e==="y"?"height":"width"}function qo(e,t,o){let{reference:i,floating:s}=e,r=i.x+i.width/2-s.width/2,a=i.y+i.height/2-s.height/2,n=bt(t),c=Fo(n),p=i[c]/2-s[c]/2,f=n==="x",u;switch(gt(t)){case"top":u={x:r,y:i.y-s.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:a};break;case"left":u={x:i.x-s.width,y:a};break;default:u={x:i.x,y:i.y}}switch(Pt(t)){case"start":u[n]-=p*(o&&f?-1:1);break;case"end":u[n]+=p*(o&&f?-1:1)}return u}var ei=async(e,t,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(t)),c=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:f}=qo(c,i,n),u=i,b={},y=0;for(let x=0;x<r.length;x++){let{name:F,fn:Q}=r[x],{x:R,y:T,data:L,reset:U}=await Q({x:p,y:f,initialPlacement:i,placement:u,strategy:s,middlewareData:b,rects:c,platform:a,elements:{reference:e,floating:t}});p=R??p,f=T??f,b={...b,[F]:{...b[F],...L}},U&&y<=50&&(y++,typeof U=="object"&&(U.placement&&(u=U.placement),U.rects&&(c=U.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):U.rects),{x:p,y:f}=qo(c,u,n)),x=-1)}return{x:p,y:f,placement:u,strategy:s,middlewareData:b}};function ti(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function mt(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Bo(e,t){var o;t===void 0&&(t={});let{x:i,y:s,platform:r,rects:a,elements:n,strategy:c}=e,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:y=0}=t,x=ti(y),F=n[b?u==="floating"?"reference":"floating":u],Q=mt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(F)))==null||o?F:F.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:f,strategy:c})),R=mt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:i,y:s}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:c}):a[u]);return{top:Q.top-R.top+x.top,bottom:R.bottom-Q.bottom+x.bottom,left:Q.left-R.left+x.left,right:R.right-Q.right+x.right}}var Ns=Math.min,ks=Math.max;function So(e,t,o){return ks(e,Ns(t,o))}var Qo=e=>({name:"arrow",options:e,async fn(t){let{element:o,padding:i=0}=e??{},{x:s,y:r,placement:a,rects:n,platform:c}=t;if(o==null)return{};let p=ti(i),f={x:s,y:r},u=bt(a),b=Pt(a),y=Fo(u),x=await c.getDimensions(o),F=u==="y"?"top":"left",Q=u==="y"?"bottom":"right",R=n.reference[y]+n.reference[u]-f[u]-n.floating[y],T=f[u]-n.reference[u],L=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o)),U=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0;U===0&&(U=n.floating[y]);let Rt=R/2-T/2,Pe=p[F],ot=U-x[y]-p[Q],N=U/2-x[y]/2+Rt,$=So(Pe,N,ot),Ae=(b==="start"?p[F]:p[Q])>0&&N!==$&&n.reference[y]<=n.floating[y];return{[u]:f[u]-(Ae?N<Pe?Pe-N:ot-N:0),data:{[u]:$,centerOffset:N-$}}}}),Os={left:"right",right:"left",bottom:"top",top:"bottom"};function jt(e){return e.replace(/left|right|bottom|top/g,t=>Os[t])}function Ts(e,t,o){o===void 0&&(o=!1);let i=Pt(e),s=bt(e),r=Fo(s),a=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=jt(a)),{main:a,cross:jt(a)}}var Ls={start:"end",end:"start"};function Go(e){return e.replace(/start|end/g,t=>Ls[t])}var Es=["top","right","bottom","left"],_a=Es.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var vt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o;let{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:n,elements:c}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:y=!0,...x}=e,F=gt(i),Q=u||(F===a||!y?[jt(a)]:function(N){let $=jt(N);return[Go(N),$,Go($)]}(a)),R=[a,...Q],T=await Bo(t,x),L=[],U=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&L.push(T[F]),f){let{main:N,cross:$}=Ts(i,r,await(n.isRTL==null?void 0:n.isRTL(c.floating)));L.push(T[N],T[$])}if(U=[...U,{placement:i,overflows:L}],!L.every(N=>N<=0)){var Rt,Pe;let N=((Rt=(Pe=s.flip)==null?void 0:Pe.index)!=null?Rt:0)+1,$=R[N];if($)return{data:{index:N,overflows:U},reset:{placement:$}};let Ae="bottom";switch(b){case"bestFit":{var ot;let Co=(ot=U.map(Nt=>[Nt,Nt.overflows.filter(it=>it>0).reduce((it,Hi)=>it+Hi,0)]).sort((Nt,it)=>Nt[1]-it[1])[0])==null?void 0:ot[0].placement;Co&&(Ae=Co);break}case"initialPlacement":Ae=a}if(i!==Ae)return{reset:{placement:Ae}}}return{}}}};var yt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){let{x:o,y:i}=t,s=await async function(r,a){let{placement:n,platform:c,elements:p}=r,f=await(c.isRTL==null?void 0:c.isRTL(p.floating)),u=gt(n),b=Pt(n),y=bt(n)==="x",x=["left","top"].includes(u)?-1:1,F=f&&y?-1:1,Q=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:T,alignmentAxis:L}=typeof Q=="number"?{mainAxis:Q,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...Q};return b&&typeof L=="number"&&(T=b==="end"?-1*L:L),y?{x:T*F,y:R*x}:{x:R*x,y:T*F}}(t,e);return{x:o+s.x,y:i+s.y,data:s}}}};function Cs(e){return e==="x"?"y":"x"}var xt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:o,y:i,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:Q=>{let{x:R,y:T}=Q;return{x:R,y:T}}},...c}=e,p={x:o,y:i},f=await Bo(t,c),u=bt(gt(s)),b=Cs(u),y=p[u],x=p[b];if(r){let Q=u==="y"?"bottom":"right";y=So(y+f[u==="y"?"top":"left"],y,y-f[Q])}if(a){let Q=b==="y"?"bottom":"right";x=So(x+f[b==="y"?"top":"left"],x,x-f[Q])}let F=n.fn({...t,[u]:y,[b]:x});return{...F,data:{x:F.x-o,y:F.y-i}}}}};function ni(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function ee(e){if(e==null)return window;if(!ni(e)){let t=e.ownerDocument;return t&&t.defaultView||window}return e}function H(e){return ee(e).getComputedStyle(e)}function G(e){return ni(e)?"":e?(e.nodeName||"").toLowerCase():""}function li(){let e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function _(e){return e instanceof ee(e).HTMLElement}function _e(e){return e instanceof ee(e).Element}function Ye(e){return typeof ShadowRoot>"u"?!1:e instanceof ee(e).ShadowRoot||e instanceof ShadowRoot}function Mt(e){let{overflow:t,overflowX:o,overflowY:i}=H(e);return/auto|scroll|overlay|hidden/.test(t+i+o)}function Vs(e){return["table","td","th"].includes(G(e))}function oi(e){let t=/firefox/i.test(li()),o=H(e);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||t&&o.willChange==="filter"||t&&!!o.filter&&o.filter!=="none"}function ci(){return!/^((?!chrome|android).)*safari/i.test(li())}var ii=Math.min,wt=Math.max,At=Math.round;function Le(e,t,o){var i,s,r,a;t===void 0&&(t=!1),o===void 0&&(o=!1);let n=e.getBoundingClientRect(),c=1,p=1;t&&_(e)&&(c=e.offsetWidth>0&&At(n.width)/e.offsetWidth||1,p=e.offsetHeight>0&&At(n.height)/e.offsetHeight||1);let f=_e(e)?ee(e):window,u=!ci()&&o,b=(n.left+(u&&(i=(s=f.visualViewport)==null?void 0:s.offsetLeft)!=null?i:0))/c,y=(n.top+(u&&(r=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/c,F=n.height/p;return{width:x,height:F,top:y,right:b+x,bottom:y+F,left:b,x:b,y}}function fe(e){return(t=e,(t instanceof ee(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function Xt(e){return _e(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function di(e){return Le(fe(e)).left+Xt(e).scrollLeft}function Is(e,t,o){let i=_(t),s=fe(t),r=Le(e,i&&function(c){let p=Le(c);return At(p.width)!==c.offsetWidth||At(p.height)!==c.offsetHeight}(t),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(i||!i&&o!=="fixed")if((G(t)!=="body"||Mt(s))&&(a=Xt(t)),_(t)){let c=Le(t,!0);n.x=c.x+t.clientLeft,n.y=c.y+t.clientTop}else s&&(n.x=di(s));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function pi(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(Ye(e)?e.host:null)||fe(e)}function si(e){return _(e)&&H(e).position!=="fixed"?function(t){let{offsetParent:o}=t,i=t,s=!1;for(;i&&i!==o;){let{assignedSlot:r}=i;if(r){let a=r.offsetParent;if(H(r).display==="contents"){let n=r.hasAttribute("style"),c=r.style.display;r.style.display=H(i).display,a=r.offsetParent,r.style.display=c,n||r.removeAttribute("style")}i=r,o!==a&&(o=a,s=!0)}else if(Ye(i)&&i.host&&s)break;i=Ye(i)&&i.host||i.parentNode}return o}(e):null}function Uo(e){let t=ee(e),o=si(e);for(;o&&Vs(o)&&H(o).position==="static";)o=si(o);return o&&(G(o)==="html"||G(o)==="body"&&H(o).position==="static"&&!oi(o))?t:o||function(i){let s=pi(i);for(Ye(s)&&(s=s.host);_(s)&&!["html","body"].includes(G(s));){if(oi(s))return s;{let r=s.parentNode;s=Ye(r)?r.host:r}}return null}(e)||t}function ri(e){if(_(e))return{width:e.offsetWidth,height:e.offsetHeight};let t=Le(e);return{width:t.width,height:t.height}}function ui(e){let t=pi(e);return["html","body","#document"].includes(G(t))?e.ownerDocument.body:_(t)&&Mt(t)?t:ui(t)}function fi(e,t){var o;t===void 0&&(t=[]);let i=ui(e),s=i===((o=e.ownerDocument)==null?void 0:o.body),r=ee(i),a=s?[r].concat(r.visualViewport||[],Mt(i)?i:[]):i,n=t.concat(a);return s?n:n.concat(fi(a))}function ai(e,t,o){return t==="viewport"?mt(function(i,s){let r=ee(i),a=fe(i),n=r.visualViewport,c=a.clientWidth,p=a.clientHeight,f=0,u=0;if(n){c=n.width,p=n.height;let b=ci();(b||!b&&s==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:c,height:p,x:f,y:u}}(e,o)):_e(t)?function(i,s){let r=Le(i,!1,s==="fixed"),a=r.top+i.clientTop,n=r.left+i.clientLeft;return{top:a,left:n,x:n,y:a,right:n+i.clientWidth,bottom:a+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(t,o):mt(function(i){var s;let r=fe(i),a=Xt(i),n=(s=i.ownerDocument)==null?void 0:s.body,c=wt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=wt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+di(i),u=-a.scrollTop;return H(n||r).direction==="rtl"&&(f+=wt(r.clientWidth,n?n.clientWidth:0)-c),{width:c,height:p,x:f,y:u}}(fe(e)))}function $s(e){let t=fi(e),o=["absolute","fixed"].includes(H(e).position)&&_(e)?Uo(e):e;return _e(o)?t.filter(i=>_e(i)&&function(s,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(s.contains(r))return!0;if(a&&Ye(a)){let n=r;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(i,o)&&G(i)!=="body"):[]}var Ds={getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e,r=[...o==="clippingAncestors"?$s(t):[].concat(o),i],a=r[0],n=r.reduce((c,p)=>{let f=ai(t,p,s);return c.top=wt(f.top,c.top),c.right=ii(f.right,c.right),c.bottom=ii(f.bottom,c.bottom),c.left=wt(f.left,c.left),c},ai(t,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:i}=e,s=_(o),r=fe(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((s||!s&&i!=="fixed")&&((G(o)!=="body"||Mt(r))&&(a=Xt(o)),_(o))){let c=Le(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return{...t,x:t.x-a.scrollLeft+n.x,y:t.y-a.scrollTop+n.y}},isElement:_e,getDimensions:ri,getOffsetParent:Uo,getDocumentElement:fe,getElementRects:e=>{let{reference:t,floating:o,strategy:i}=e;return{reference:Is(t,Uo(o),i),floating:{...ri(o),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>H(e).direction==="rtl"};var Wt=(e,t,o)=>ei(e,t,{platform:Ds,...o});var hi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Ee,classNames:an,createRef:zs}=omii,Ht,mi,St,Ro,Ce,Y=class extends h{constructor(){super(...arguments);m(this,Ht);m(this,St);l(this,"slotRef",zs());m(this,Ce,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:t,offset:o,strategy:i}=this.$props,s=d(this,St,Ro);if(s){let r=this.$(`.${this.type}-arrow`);Wt(s,this.$element,{strategy:i,placement:t,middleware:[vt(),xt(),yt(o),Qo({element:r})]}).then(({x:a,y:n,placement:c,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let y=this.$element.dataset;b=="top"?y.popperPlacement="bottom":b=="bottom"?y.popperPlacement="top":b=="left"?y.popperPlacement="right":b=="right"&&(y.popperPlacement="left")})}}show(){g(this,Ce,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){g(this,Ce,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,Ce)?this.hide():this.show()}installed(){let t=d(this,St,Ro),{triggerShow:o,triggerHide:i}=this.$props;t&&(o.split(" ").forEach(s=>{s&&t.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),i.split(" ").forEach(s=>{s&&t.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),d(this,Ce)&&this.hide()})}))}render(t){let{placement:o,header:i,body:s}=this.$props;return Ee(Ee.f,null,Ee("slot",{ref:this.slotRef,tabIndex:!0}),Ee("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Ee("div",{class:"popover-arrow"}),Ee("slot",{name:"header",class:"popover-header"},i),Ee("slot",{class:"popover-body",name:"body"},s)))}};Ht=new WeakSet,mi=function(){return this.slotRef.current},St=new WeakSet,Ro=function(){let t=d(this,Ht,mi).assignedElements();if(t.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return t.at(0)},Ce=new WeakMap,l(Y,"css",[()=>v("reboot","utilities","transitions","popover"),hi]),l(Y,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(Y,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var gi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Js=async e=>new Promise(t=>{let o=new FileReader;o.readAsDataURL(e),o.onload=i=>{t(i.target.result)}}),js=async e=>e.split(";base64,")[1],Ps=e=>new Promise(t=>{let o=new Image;o.crossOrigin="anonymous",o.src=e,o.onload=()=>{t(No(o))}}),As=e=>new Promise((t,o)=>{try{fetch(e).then(async i=>{if(i.status==200){let s=new Image,r=await i.blob();s.crossOrigin="anonymous",s.src=URL.createObjectURL(r),s.onload=()=>{URL.revokeObjectURL(s.src),t(bi(s))},s.onerror=a=>{o(a)}}else o(new Error(i.status))})}catch(i){o(i)}}),bi=(e,t="image.png")=>xi(vi(e),t,"image/png"),vi=e=>yi(No(e)),No=(e,t="image/png",o=.8)=>{let i=document.createElement("canvas"),s=i.getContext("2d");return i.width=e.naturalWidth,i.height=e.naturalHeight,s.drawImage(e,0,0),i.toDataURL(t,o)},yi=e=>{let t=e.split(";base64,"),o=t[0].split(":")[1],i=window.atob(t[1]),s=i.length,r=new Uint8Array(s);for(let a=0;a<s;++a)r[a]=i.charCodeAt(a);return new Blob([r],{type:o})},xi=(e,t,o)=>new File([e],t,{type:o,lastModified:Date.now()}),wi=(e,t,o,i,s,r="image/png",a=.8)=>{let n=i>t?t:i,c=n*o/t;c>s&&(c=s,n=c*t/o);let p=document.createElement("canvas"),f=p.getContext("2d");return p.width=n,p.height=c,f.drawImage(e,0,0,t,o,0,0,n,c),p.toDataURL(r,a)},Si=(e,t,o,i="image/png",s=.8)=>wi(e,e.naturalWidth,e.naturalHeight,t,o,i,s),Ms=async(e,t,o,i="image/png",s=.8)=>new Promise(r=>{let a=new Image;a.src=window.URL.createObjectURL(e),a.onload=()=>{window.URL.revokeObjectURL(a.src),r(Si(a,t,o,i,s))}}),Xs=(e,t=100,o=100,i="image/jpeg",s=.8)=>new Promise((r,a)=>{try{let n=document.createElement("video");n.src=window.URL.createObjectURL(e),n.preload="auto",n.onloadeddata=()=>{r(Fi(n,t,o,i,s)),window.URL.revokeObjectURL(n.src)},n.onerror=c=>{window.URL.revokeObjectURL(n.src),a(c)}}catch(n){a(n)}}),Fi=(e,t=100,o=100,i="image/jpeg",s=.8)=>wi(e,e.videoWidth,e.videoHeight,t,o,i,s),ko=e=>{if(!(e instanceof File)||e.type.indexOf("image/")!=0)return null;let t=new Image;return t.src=URL.createObjectURL(e),t.onload=()=>{URL.revokeObjectURL(t.src)},t.src};var Bi={convertImageUrlToBase64:Ps,createVideoThumb:Fi,createVideoFileThumb:Xs,convertImageUrlToFile:As,convertBase64ToBlob:yi,convertBlobToFile:xi,convertImageToBase64:No,convertImageToBlob:vi,convertImageToFile:bi,splitBase64:js,readFileAsBase64:Js,createImageFileThumb:Ms,createImageThumb:Si,getPreviewUrl:ko};var{h:k,classNames:Ws}=omii,Qi=e=>e?.type?.indexOf("image")==0,Hs=e=>Qi(e)?(e.url=e.url??ko(e.file),k("div",{title:e.name,class:"image",style:{backgroundImage:`url(${e.url})`}})):k("div",{className:"file"},k("oi-icon",{"view-box":"1024",name:$t(e.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),k("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},e.name,e.ext)),Ui=({component:e})=>{let{files:t,selectText:o,multiple:i}=e.$props;return k("div",{className:"pictures"},k("div",{class:"row row-cols-auto g-4"},t.map((s,r)=>k("div",{className:"col",key:`file-${r}`},k("div",{class:"card",onClick:()=>{e.open(r)}},Hs(s),k("div",{className:"actions"},k("div",{class:"position-absolute top-50 start-50 translate-middle"},Qi(s)&&k("oi-icon",{name:"search"}),k("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),e.remove(r)}})))))),(i||t.length==0)&&k("div",{className:"col selector-col",key:"selector"},k("div",{class:"card selector"},k("label",{class:Ws("selector",{multiple:i}),title:o,onClick:()=>{e.open()}},k("oi-icon",{name:"add"}))))))};var{h:J,classNames:yn}=omii,Ri=({component:e})=>{let{files:t,selectText:o,multiple:i}=e.$props;return J("div",{className:"files"},J("slot",{name:"actions"},J("button",{className:"btn btn-primary",onClick:()=>{e.open()}},o)),J("table",{class:"table"},J("tbody",null,t.map(s=>J("tr",null,J("td",null,J("oi-icon",{"view-box":"1024",name:$t(s.ext),type:"file-type"}),s.name,s.ext),J("td",null,fo(s.size)),J("td",null,J("oi-icon",{name:"delete"})))))))};var{h:_t,classNames:Sn}=omii,_s={pictures:Ui,files:Ri},Yt={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Ve,he=class extends h{constructor(){super(...arguments);m(this,Ve,-1)}static get STATUS(){return Yt}open(t=-1){g(this,Ve,t),this.$("#files").click()}remove(t){this.$props.files?.splice(t,1),this.updateSelf()}select(t){let{multiple:o,files:i,autoUpload:s}=this.$props;if(t?.length==0)return!1;if(o||i.splice(0,i.length),d(this,Ve)!=-1&&t.length>=1){let r=Array.from(t).map(a=>({id:null,name:Vt(a.name),ext:Ct(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.splice(d(this,Ve),1,...r),this.fire("replaced",{index:d(this,Ve),replaceFiles:r})}else{let r=Array.from(t).map(a=>({id:null,name:Vt(a.name),ext:Ct(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.update()}upload(){let{files:t,action:o,withCredentials:i,headers:s}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of t.filter(a=>a.file&&(!a.status||a.status==Yt.NONE||a.status==Yt.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=i,typeof s=="function"&&(s=s()),typeof s=="object")for(let c in s)n.setRequestHeader(c,s[c]);n.send(a),n.onreadystatechange=function(c){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=Yt.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,c)},n.upload.onprogress=function(c){if(c.lengthComputable){let p=Math.ceil(c.loaded/c.total*100);r.progress=p,this.fire("progress",{file:r,loaded:c.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:t,accept:o,template:i}=this.$props;return _t(_t.f,null,_t("slot",null,_s[i]),_t("input",{id:"files",type:"file",multiple:t,accept:o,onChange:s=>{this.select(s.target.files)}}))}};Ve=new WeakMap,l(he,"css",[()=>v("reboot","containers","grid","card","utilities","buttons","tables"),gi]),l(he,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(he,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Ni=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var Ys="transitionend";var ki=e=>{e.dispatchEvent(new Event(Ys))},Ks=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u");var Oi=e=>{if(!Ks(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue("visibility")==="visible",o=e.closest("details:not([open])");if(!o)return t;if(o!==e){let i=e.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return t};var{h:I,classNames:Ti,extractClass:Zs}=omii;var qs="carousel-item-end",Gs="carousel-item-start",er="carousel-item-next",tr="carousel-item-prev",or=".active",ir=".carousel-item",Dn=or+ir,Ie,te,Ft,ge,me=class extends h{constructor(){super(...arguments);m(this,Ie,0);m(this,te,!1);m(this,Ft,[]);m(this,ge,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,Ie)}get isSliding(){return d(this,te)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,te)&&ki(this),clearInterval(d(this,ge)),g(this,ge,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(t=!0){if(d(this,te))return!1;let{$activeItem:o,$items:i,$props:{duration:s}}=this,r=i.indexOf(o),a,n;if(t instanceof HTMLElement?(n=t,a=i.indexOf(n),t=a>r):typeof t=="number"?(a=(t+i.length)%i.length,n=i[a],t=a>r):(a=(r+1)%i.length,t||(a=(r-1+i.length)%i.length),n=i[a]),d(this,Ie)==a)return!1;let c=t?Gs:qs,p=t?er:tr;g(this,te,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;V(n,[{classNames:[],duration:f},{classNames:[p],callback:()=>{It(n)}},{classNames:[p,c],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),V(o,[{classNames:[],duration:f},{classNames:[c,"active"],duration:s},{classNames:[],callback:()=>{g(this,te,!1),g(this,Ie,a);let u;for(;u=d(this,Ft).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Oi(this)&&this.slide()}cycle(){d(this,ge)&&clearInterval(d(this,ge)),g(this,ge,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let t=this.$items;!this.$activeItem&&t.length>0&&t[0].classList.add("active"),g(this,Ie,t.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,te)?d(this,Ft).push(()=>{this.cycle()}):this.cycle())})}render(t){let{items:o,nextCtrl:i,prevCtrl:s,indicator:r}=this.$props;return I("div",{...Zs(t,"carousel")},I("slot",{class:"carousel-inner"},o.map(a=>I("div",{className:Ti("carousel-item"),waiting:a.attributes?.waiting},a))),I("div",{class:"carousel-indicators"},I("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),I("slot",{name:"actions"},typeof i=="function"&&i(this),typeof s=="function"&&s(this)))}};Ie=new WeakMap,te=new WeakMap,Ft=new WeakMap,ge=new WeakMap,l(me,"css",[()=>v("reboot","utilities","carousel"),Ni]),l(me,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:t=>I("button",{class:"carousel-control-prev",type:"button",onClick:o=>{t.slide(!1)}},I("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Previous")),nextCtrl:t=>I("button",{class:"carousel-control-next",type:"button",onClick:o=>{t.slide()}},I("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Next")),indicator:({index:t,host:o})=>I("button",{type:"button",onClick:i=>o.slide(t),class:Ti({active:t==0})})}),l(me,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Oo,classNames:jn,extractClass:sr}=omii,be=class extends h{css(){}render(e){let{text:t,desc:o,position:i}=this.$props,s=i?i.split("-"):[];return Oo("span",{...sr(e,"badge",{"position-absolute":i,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":i,"rounded-pill":i})},Oo("slot",null,t),o&&Oo("span",{class:"visually-hidden"},o))}};l(be,"css",()=>v("reboot","utilities","badge")),l(be,"defaultProps",{text:"",desc:!1,position:!1}),l(be,"propTypes",{});var Li=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:Ke,classNames:Hn,extractClass:rr}=omii,ye,ve=class extends h{constructor(){super(...arguments);m(this,ye,!0)}get closed(){return d(this,ye)}close(){g(this,ye,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){g(this,ye,!1),this.update(),B.fade.show(this)}install(){g(this,ye,!this.$props.visible)}render(t){return Ke("div",{...rr(t,"toast",{show:!d(this,ye)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},Ke("div",{class:"toast-header"},Ke("slot",{name:"header"}),Ke("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),Ke("div",{class:"toast-body"},Ke("slot",null)))}};ye=new WeakMap,l(ve,"css",[()=>v("reboot","utilities","toasts","close"),Li]),l(ve,"defaultProps",{visible:!1}),l(ve,"propTypes",{visible:Boolean});var{h:To,classNames:ar,extractClass:el}=omii,xe=class extends h{setValue(e){this.$props.value=value,this.update()}css(){}render(e){let{label:t,value:o,min:i,max:s,showPercent:r,striped:a,animated:n,style:c,className:p}=this.$props;return To("div",{class:"progress",style:c},To("div",{class:ar("progress-bar",e.class??e.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":t,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":s},r&&To("span",null,o,"%")))}};l(xe,"css",()=>v("reboot","utilities","progress")),l(xe,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(xe,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Ei=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:Ze,classNames:al,createRef:nl}=omii,Kt=class extends Y{get type(){return"tooltip"}render(e){let{placement:t,body:o}=this.$props;return Ze(Ze.f,null,Ze("slot",{ref:this.slotRef}),Ze("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":t},Ze("div",{class:"tooltip-arrow"}),Ze("slot",{class:"tooltip-inner",name:"body"},o)))}},$e=Kt;l($e,"css",[()=>v("reboot","utilities","transitions","tooltip"),Ei]),l($e,"defaultProps",{...st(Kt,Kt,"defaultProps"),offset:0});var Ci=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:we,classNames:fl,createRef:qe}=omii,j,oe,P,De,ze,Zt,Se=class extends h{constructor(){super(...arguments);m(this,j,qe());m(this,oe,qe());m(this,P,qe());m(this,De,qe());m(this,ze,qe());m(this,Zt,qe())}close(t,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(d(this,P).current),d(this,oe).current.style.height=this.clientHeight-d(this,j).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(d(this,P).current),d(this,oe).current.style.height=this.clientHeight-d(this,j).current.clientHeight-d(this,P).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(d(this,j).current),d(this,oe).current.style.height=this.clientHeight-d(this,P).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(d(this,j).current),d(this,oe).current.style.height=this.clientHeight-d(this,j).current.scrollHeight-d(this,P).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(d(this,De).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(d(this,De).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(d(this,ze).current)}openRight(){this.$props.openRight=!0,B.collapse.show(d(this,ze).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let t=this.getBoundingClientRect(),o=d(this,j).current.getBoundingClientRect(),i=d(this,P).current.getBoundingClientRect();d(this,oe).current.style.height=t.height-o.height-i.height+"px"}installed(){let{openFooter:t,openHeader:o,openLeft:i,openRight:s}=this.$props;t||(d(this,P).current.style.height=0),o||(d(this,j).current.style.height=0),i||(d(this,De).current.style.height=0),s||(d(this,ze).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(t){return we(we.f,null,we("slot",{name:"header",ref:d(this,j)}),we("main",{ref:d(this,oe)},we("slot",{name:"left",ref:d(this,De),class:"collapse-horizontal"}),we("slot",{name:"content",ref:d(this,Zt)}),we("slot",{name:"right",ref:d(this,ze),class:"collapse-horizontal"})),we("slot",{name:"footer",ref:d(this,P)}))}};j=new WeakMap,oe=new WeakMap,P=new WeakMap,De=new WeakMap,ze=new WeakMap,Zt=new WeakMap,l(Se,"css",[Ci]),l(Se,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(Se,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Vi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:Lo,classNames:Sl,uniqueTag:nr}=omii,K,Fe=class extends h{constructor(){super(...arguments);m(this,K,void 0)}get $module(){return d(this,K)}load(t,o,i,s){o=o??this.$props.module,i=i??this.$props.loading,s=s??this.$props.loadError,g(this,K,i),t&&o&&import(t).then(r=>{let a=r[o];if(a==null)g(this,K,s);else if(typeof a=="function"){let n=nr(a);g(this,K,Lo(n,null))}else g(this,K,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",t,o,r),g(this,K,s),this.updateSelf()})}install(){let{src:t,module:o,loading:i,loadError:s}=this.$props;this.load(t,o,i,s)}render(t){return d(this,K)}};K=new WeakMap,l(Fe,"css",[Vi]),l(Fe,"defaultProps",{src:null,module:"default",loading:Lo("oi-loading",{size:"6"}),loadError:Lo("h1",null,"Module Load Error")}),l(Fe,"propTypes",{src:String,module:String});var Ii=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Be,classNames:Nl,createRef:$i,extractClass:lr}=omii,Z,Qe=class extends h{constructor(){super(...arguments);l(this,"offcanvasRef",$i());l(this,"backdropRef",$i());m(this,Z,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,Z))return;g(this,Z,!0),await this.update(!0,!0);let t=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),t.setAttribute("aria-modal",!0),t.setAttribute("role","dialog");let{duration:o}=this.$props;V(t,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,Z)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,Z))return;g(this,Z,!1);let t=this.offcanvasRef.current;t.blur();let{duration:o}=this.$props;V(t,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{t.removeAttribute("aria-modal"),t.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){g(this,Z,this.$props.visible)}render(t){let{visible:o,placement:i,position:s,title:r,useBackdrop:a}=this.$props;return Be(Be.f,null,Be("div",{ref:this.offcanvasRef,...lr(t,"offcanvas",`offcanvas-${i}`,`position-${s}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Be("div",{class:"offcanvas-header"},Be("slot",{name:"title",class:"offcanvas-title h5"},r),Be("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Be("slot",{class:"offcanvas-body"})),a&&d(this,Z)&&Be("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};Z=new WeakMap,l(Qe,"css",[()=>v("reboot","offcanvas","utilities","close"),Ii]),l(Qe,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Qe,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:Vl,classNames:Il,extractClass:$l,createRef:Dl}=omii;function Ji(e){let{validity:t}=e;if(!!t)if(t.valid)delete e.dataset.invalid,delete e.dataset.validationMessage;else{let o=[];for(let i in t)i!=="valid"&&t[i]===!0&&o.push(i);e.dataset.invalid=o.join(" "),e.dataset.validationMessage=e.validationMessage}}function Di(e){let t=e.currentTarget;t.checkValidity(),Ji(e.target),t.classList.add("was-validated")}function ji(e){let t=e.checkValidity(),o=[...e.querySelectorAll("[data-validate")];return[...e.elements,...o].forEach(i=>{Ji(i)}),e.classList.add("was-validated"),o.every(i=>i.checkValidity?i.checkValidity():!0)&&t}function zi(e){let t=e.target;t.removeEventListener("input",Di),t.addEventListener("input",Di,!1),ji(t)||(e.preventDefault(),e.stopPropagation())}var Ge=class extends HTMLFormElement{static validate(t){t.noValidate=!0,t.removeEventListener("submit",zi),t.addEventListener("submit",zi,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return ji(this)}connectedCallback(){this.constructor.validate(this)}};var Pi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:qt,classNames:jl,createRef:Ai}=omii,je=null;document.addEventListener("click",e=>{je&&je.hide()});var Bt,Qt,ie,Je,Ut,Eo,et,Ue=class extends h{constructor(){super(...arguments);m(this,ie);m(this,Ut);m(this,Bt,Ai());m(this,Qt,Ai());m(this,et,!1)}get $menu(){return d(this,Bt).current}setPosition(){let{placement:t,offset:o,strategy:i}=this.$props;Wt(d(this,Ut,Eo),this.$menu,{strategy:i,placement:t,middleware:[vt(),xt(),yt(o)]}).then(({x:s,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${r}px`})})}show(){g(this,et,!0),d(this,ie,Je).focus(),d(this,ie,Je).setAttribute("aria-expanded",!0),d(this,ie,Je).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),je=this,this.setPosition()}hide(){g(this,et,!1),d(this,ie,Je).classList.remove("show"),d(this,ie,Je).setAttribute("aria-expanded","false"),je=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,et)?this.hide():this.show()}installed(){d(this,Ut,Eo).addEventListener("click",t=>{je&&je!=this&&je.hide(),this.toggle(),t.preventDefault(),t.stopPropagation()}),this.addEventListener("click",t=>{t.stopPropagation()})}render(t){let{menu:o}=this.$props;return qt(qt.f,null,qt("slot",{ref:d(this,Qt)}),qt("slot",{name:"menu",ref:d(this,Bt)},o))}};Bt=new WeakMap,Qt=new WeakMap,ie=new WeakSet,Je=function(){return d(this,Qt).current},Ut=new WeakSet,Eo=function(){let t=d(this,ie,Je).assignedElements();if(t.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return t.at(0)},et=new WeakMap,l(Ue,"css",[()=>v("reboot","utilities","transitions","dropdown"),Pi]),l(Ue,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Ue,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var Mi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:cr,Component:Yl}=omii,Gt,Re=class extends h{constructor(){super(...arguments);m(this,Gt,void 0)}get value(){return this.editor?.getValue()}set value(t){this.editor?.setValue(t)}installed(){let{codes:t,language:o,automaticLayout:i,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{g(this,Gt,r),this.editor=r.editor.create(this.$(".coder"),{value:t,language:o,automaticLayout:i,fontSize:s,minimap:{enabled:!1}})})}render(){return cr("div",{class:"coder"})}};Gt=new WeakMap,l(Re,"css",[()=>{let t=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",t).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,i=new CSSStyleSheet;return i.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i],fetch(new URL("./monaco/index.css",t).href).then(s=>s.text())},Mi]),l(Re,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(Re,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var Xi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJIn0= */`;var{h:A,classNames:tc,extractClass:oc}=omii,tt,Ne=class extends h{constructor(){super(...arguments);m(this,tt,!1)}get validity(){let{required:t,values:o}=this.$props,i=!0;return t&&(!o||o.length==0)&&(i=!1),{valid:i}}checkValidity(){g(this,tt,!0);let t=this.validity.valid;return t?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),t}showOptions(){this.$("oi-dropdown").show()}receiveProps(t,o){t.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",t=>{this.showOptions()})}render(){let{values:t,options:o,preserveOrder:i,createSelected:s,createOption:r}=this.$props;return r=r.bind(this),s=s.bind(this),t=t??[],i&&t.sort((a,n)=>o.findIndex(c=>c.value==a)-o.findIndex(c=>c.value==n)),o=o??[],A("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},A("div",{class:"selected d-flex",onClick:a=>{a.stopImmediatePropagation()}},"\xA0",A("ul",{class:"values flex-grow-1"},t.map((a,n)=>{let c=o.find(p=>p.value==a);if(c)return s(c,n)})),A("div",{class:"expander",onClick:a=>{this.showOptions()}})),A("ul",{class:"dropdown-menu",slot:"menu"},o.map((a,n)=>A("li",null,r(a,n)))))}};tt=new WeakMap,l(Ne,"css",[()=>v("reboot","utilities","forms","scrollbar"),Xi]),l(Ne,"defaultProps",{options:[],values:[],multiple:!0,required:!1,preserveOrder:!0,createOption(t,o){let{values:i,multiple:s}=this.$props,r={};return s?r.for=`option${o}`:r.onClick=a=>{i.includes(t.value)?i.splice(0,i.length):i.push(t.value)},A("div",{class:"form-check d-flex"},s&&A("input",{class:"form-check-input",type:"checkbox",value:t.value,id:`option${o}`,checked:i.includes(t.value),onChange:a=>{if(a.target.checked)i.includes(t.value)||i.push(t.value);else{let n=i.indexOf(t.value);n!=-1&&i.splice(n,1)}this.updateSelf(),d(this,tt)&&this.checkValidity()}}),A("label",{class:"form-check-label flex-grow-1",...r},t.text))},createSelected(t,o){let{values:i}=this.$props;return A("li",{onClick:s=>{s.stopImmediatePropagation()}},t.text,A("oi-bi",{name:"x",onClick:s=>{i.splice(o,1),this.updateSelf(),s.stopPropagation(),d(this,tt)&&this.checkValidity()}}))}}),l(Ne,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean});var Wi=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:C,classNames:cc,extractClass:dr}=omii,ke=class extends h{render(){let{columns:e,rows:t,showHeader:o,titleCellFormatter:i,dataCellFormatter:s,height:r}=this.$props,a=dr(this.$props)?.class??"";return C("div",{className:"table-container",style:{height:r}},C("table",{className:`table ${a}`},C("thead",null,o&&C("tr",null,e?.map(n=>C("th",{style:n.titleStyle,scope:"col"},i(n,e,t,this)))),C("slot",{name:"header"})),C("tbody",null,t?.map((n,c)=>C("tr",null,e.map(p=>C("td",{style:p.style},s(p,n,c,t,this)))))),C("tfoot",null,C("slot",{name:"footer"}))))}};l(ke,"css",[()=>v("reboot","utilities","tables"),Wi]),l(ke,"defaultProps",{rows:null,columns:[],showHeader:!0,titleCellFormatter(e,t,o,i){if(e.type=="checkbox"){e.checked||(e.checked=[]);let s=o?.map(a=>a[e.field])??[],r=s.every(a=>e.checked.includes(a));return C("input",{type:"checkbox","data-field":e.field,checked:r,onChange:async a=>{if(a.target.checked){e.checked.push(...s);let n=[...new Set(e.checked)];e.checked.splice(0,e.checked.length,...n)}else{let n=new Set(e.checked),c=new Set(s.filter(p=>!n.has(p)));e.checked.splice(0,e.checked.length,...c)}await i.updateSelf()}})}return e.title??e.field},dataCellFormatter(e,t,o,i,s){let r=t[e.field];switch(e.type){case"index":return o+1;case"checkbox":return e.checked||(e.checked=[]),C("input",{type:"checkbox",checked:e.checked?.includes(r),onChange:async a=>{let n=e.checked.indexOf(r);n==-1?e.checked.push(r):e.checked.splice(n,1),await s.updateSelf()}});case"radio":return C("input",{type:"radio"});default:return r}},height:"auto"}),l(ke,"propTypes",{showHeader:Boolean});var{define:w}=omii;w("oi-rate",re);w("oi-tab",se);w("oi-icon",D);w("oi-bi",M);w("oi-pager",W);w("oi-tree",le);w("oi-loading",q);w("oi-alert",ce);w("oi-accordion",de);w("oi-breadcrumb",pe);w("oi-modal",ue);w("oi-popover",Y);w("oi-uploader",he);w("oi-carousel",me);w("oi-badge",be);w("oi-toast",ve);w("oi-progress",xe);w("oi-tooltip",$e);w("oi-layout",Se);w("oi-import",Fe);w("oi-offcanvas",Qe);w("oi-pagination",ne);w("oi-dropdown",Ue);w("oi-coder",Re);w("oi-select",Ne);w("oi-table",ke);customElements.define("oi-form",Ge,{extends:"form"});var pr=import.meta.url;omii.ui={utils:Ho,vision:Bi,css:Mo,effect:B,icon:D,tab:se,rate:re,pager:W,tree:le,treeNode:co,loading:q,alert:ce,accordion:de,breadcrumb:pe,modal:ue,popover:Y,uploader:he,carousel:me,badge:be,toast:ve,progress:xe,tooltip:$e,layout:Se,import:Fe,offcanvas:Qe,pagination:ne,form:Ge,dropdown:Ue,coder:Re,select:Ne,table:ke,importURL:pr};export{de as accordion,ce as alert,M as bicon,pe as breadcrumb,me as carousel,Re as coder,Mo as css,Ue as dropdown,B as effect,Ge as form,D as icon,Fe as import,pr as importURL,Se as layout,q as loading,ue as modal,Qe as offcanvas,W as pager,ne as pagination,Y as popover,xe as progress,re as rate,Ne as select,se as tab,ke as table,ve as toast,$e as tooltip,le as tree,co as treeNode,he as uploader,Ho as utils,Bi as vision};
//# sourceMappingURL=omii-ui.js.map
