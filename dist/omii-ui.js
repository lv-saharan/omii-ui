var Di=Object.defineProperty;var zi=Object.getPrototypeOf;var Ji=Reflect.get;var Pi=(e,t,o)=>t in e?Di(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var c=(e,t,o)=>(Pi(e,typeof t!="symbol"?t+"":t,o),o),Yt=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var d=(e,t,o)=>(Yt(e,t,"read from private field"),o?o.call(e):t.get(e)),m=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},g=(e,t,o,i)=>(Yt(e,t,"write to private field"),i?i.call(e,o):t.set(e,o),o);var Bt=(e,t,o)=>(Yt(e,t,"access private method"),o),Ge=(e,t,o)=>Ji(zi(e),o,t);var{define:tr,h:or,Component:Ai}=omii,h=class extends Ai{};var No=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:qe,Component:lr,classNames:To,render:cr}=omii,te=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:e,key:t},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:t},!0,!0):this.update$Props({activeIndex:e},!0,!0))}async render(e){let t=this.$props,o=e.items??t.items,i=[],s=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,l=a.pane;s.push(qe("div",{key:`pane-${a.key??r}`,className:To("pane",{active:n})},l)),i.push(qe("div",{key:`nav-${a.key??r}`,className:To("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return qe("div",{class:"tabs"},qe("div",{class:"navs"},i),qe("div",{class:"panes"},s))}};c(te,"css",No),c(te,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),c(te,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Ue={BUNDLE:"bundle",SINGLE:"single"},et={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:fr,h:Oo,Component:hr}=omii,tt=Ue.SINGLE,Kt=et.FILLED,Zt=async(e,t,o)=>{t=t??Kt,t==et.FILE_TYPE&&(o=Ue.BUNDLE);try{if((o??tt)==Ue.BUNDLE){let{default:i}=await import(`./icons/${t}.js`);return i[e]}else{let{default:i}=await import(`./icons/${t}/${e}.js`);return i}}catch{console.error("load icon error",e,t)}},ji=async(e,t,o,i={})=>{let s=await Zt(e,t,o);return Oo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...i},s)},$=class extends h{static useBundleMode(){tt=Ue.BUNDLE}static useSingleMode(){tt=Ue.SINGLE}static get MODES(){return Ue}static get TYPES(){return et}static get Mode(){return tt}static set Mode(e){tt=e}static get Type(){return Kt}static set Type(e){Kt=e}css(){let{size:e,color:t}=this.$props,o=t||"var(--oi-icon-color)",i=e?`${e}rem`:"var(--oi-icon-width, 1rem)",s=e?`${e}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:e,type:t,viewBox:o}=this.$props,i=await Zt(e,t);return Oo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},i)}};c($,"updateOnAttributeChanged",!0),c($,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),c($,"defaultProps",{name:null,type:et.FILLED,viewBox:24,size:null,color:null}),c($,"createSvg",ji),c($,"loadIcon",Zt),c($,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var ko=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:Sr,h:Gt,Component:Fr,classNames:Mi,render:Br}=omii,qt={STAR:"star",HALF:"star_half",BORDER:"star_border"},A,oe=class extends h{constructor(){super(...arguments);m(this,A,-1)}get rateScore(){return this.$props.score}install(){g(this,A,this.$props.score)}rate(t){this.fire("rate",t),g(this,A,t),this.update$Props({score:t})}render(t){let o=this.$props,{maxScore:i,rateable:s,size:r,color:a}=o,n=[],l=d(this,A);for(let p=0;p<i;p++)l-p>=.5?n.push(qt.STAR):l-p>0?n.push(qt.HALF):n.push(qt.BORDER);return Gt("div",{class:Mi("rate-wrap","rate-"+d(this,A))},n.map((p,f)=>s?Gt("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),g(this,A,f+1),this.fire("tryRate",d(this,A)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),g(this,A,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):Gt("oi-icon",{name:p,size:r,color:a,className:p})))}};A=new WeakMap,c(oe,"css",ko),c(oe,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),c(oe,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Eo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:O,classNames:ot}=omii,j=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:e,pageSize:t,pageCount:o}=this.$props;return e&&t?Math.ceil(e/t):o}goto(e){let{pageCount:t}=this.$props;(e>=1||e<t)&&(this.update$Props({pageNum:e}),this.fire("paged",e))}render(e){return e.createLayout(e,this)}};c(j,"css",Eo),c(j,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:O("oi-icon",{name:"keyboard_arrow_left"}),next:O("oi-icon",{name:"keyboard_arrow_right"}),first:O("oi-icon",{name:"first_page"}),last:O("oi-icon",{name:"last_page"}),createPrev(e,t){let{pageNum:o,prev:i}=e;return O("div",{class:ot("prev",{disable:o<=1}),onClick:s=>{o>1&&t.goto(o-1)}},i)},createNext(e,t){let{pageNum:o,next:i}=e,{pageCount:s}=t;return O("div",{class:ot("next",{disable:o>=s}),onClick:r=>{s>o&&t.goto(o+1)}},i)},createFirst(e,t){let{first:o,pageNum:i}=e;return O("div",{class:ot("first",{disable:i<=1}),onClick:s=>{i!=1&&t.goto(1)}},o)},createLast(e,t){let{last:o,pageNum:i}=e,{pageCount:s}=t;return O("div",{class:ot("last",{disable:i>=s}),onClick:r=>{i!=s&&t.goto(s)}},o)},createPages(e,t){let{linksCount:o,pageNum:i}=e,{pageCount:s}=t,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let l=[];a<1&&(a=1);for(let p=a;p<=n;p++)l.push(O("div",{className:ot({active:i==p,page:!0}),onClick:f=>{i!=p&&t.goto(p)}},p));return l},createInfo(e,t){let{pageNum:o}=e,{pageCount:i}=t;return O("div",{class:"info"},O("span",{class:"curr"},o),"/",O("span",{class:"total"},i))},createJumper(e,t){return O("div",{class:"jumper"},"\u524D\u5F80",O("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${t.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:t.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>t.pageCount&&(i.value=t.pageCount),s<1&&(i.value=1),s=Number(i.value),t.goto(s)}}),"\u9875")},createLayout(e,t){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:l}=e;return O("div",{class:"pager"},o(e,t),i(e,t),s(e,t),r(e,t),a(e,t),n(e,t),l(e,t))}}),c(j,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var Lo=`
.info .page-link {
  border-color: transparent;
}
.info .page-link .total {
  color: var(--oi-gray-dark);
}

.jumper {
  margin: 0 0.5rem;
}
.jumper .page-link {
  padding: 0;
  border-color: transparent;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBS1o7RUFDSTs7QUFFQTtFQUNJO0VBQ0EifQ== */`;var Ut=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:Xi,define:Cr,h:Hi,Component:Ir,setTheme:Wi}=omii,to="bootstrap";function _i(e){to=e,ie=new URL(`./${to}/`,import.meta.url).href}var ie=new URL(`./${to}/`,import.meta.url).href;function Yi(e){ie=e}var Rt=(e,t=ie)=>fetch(oo(e,t)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${e} error`,o)}).catch(o=>(console.error(`load stylesheet ${e} error`,o),null)),Ki=e=>Rt=e,Co=(e,t,o=ie)=>{let i=Hi("link",{rel:"styleSheet",href:oo(e,o)});Xi(i,t??"body")},Zi=(e,t=ie)=>{Co("reboot",e,t)},oo=(e,t=ie)=>{try{return new URL(`./${e}.css`,t).href}catch(o){console.error(o,e,t)}},eo=new Map,Qt=async(e,t=ie)=>{let o=`${t}/${e}`,i=eo.get(o);if(i===void 0){let s=[];eo.set(o,s),i=new CSSStyleSheet;try{i.replaceSync(await Rt(e,t)),s.forEach(r=>{r(i)}),eo.set(o,i)}catch(r){console.error("get css stylesheets error",r)}}else if(i instanceof Array)return new Promise(s=>{i.push(s)});return i},y=(...e)=>Promise.all(e.map(t=>Qt(t))),Io={};Ut.forEach(e=>{Object.defineProperty(Io,e,{get:function(){return Qt(e)}})});var Gi=(e=Ut)=>{e.forEach(t=>{Qt(t)})},qi=async(e,t=ie)=>{let o=await Rt(`theme.${e}`,t);Wi(o)},C=(e,t,o=1)=>{if(t instanceof Array&&t.length&&typeof o=="number"&&e.classList){let i=0,s=(r=[])=>{let a=i%t.length,{classNames:n,duration:l=0,delay:p=0,callback:f=null}=t[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),e.classList.remove(...r),e.classList.add(...n),f&&f(e,n,l,p)},p*1e3),i++,!(Math.floor(i/t.length)>=o)&&setTimeout(()=>{s(n)},(l+p)*1e3)};s()}},Vo={StyleSheets:Ut,CSSStyleSheets:Io,setBaseUrl:Yi,setBaseRoot:_i,loadStyleSheet:Rt,setStyleSheetLoader:Ki,addStyleSheet:Co,addRebootStyleSheet:Zi,getStyleSheetUrl:oo,getCSSStyleSheet:Qt,getCSSStyleSheets:y,useTheme:qi,timingClassNames:C,preLoad:Gi};var{h:w,classNames:it,extractClass:es}=omii,ze=class extends j{},se=ze;c(se,"css",[()=>y("reboot","pagination","utilities"),Lo]),c(se,"defaultProps",{...Ge(ze,ze,"defaultProps"),align:"left",createPrev(e,t){let{pageNum:o,prev:i}=e;return w("li",{class:it("page-item",{disabled:o<=1})},w("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{o>1&&t.goto(o-1),s.preventDefault(),s.stopPropagation()}},w("span",{"aria-hidden":"true"},"<")))},createNext(e,t){let{pageNum:o,next:i}=e,{pageCount:s}=t;return w("li",{class:it("page-item",{disabled:o>=s})},w("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{s>o&&t.goto(o+1),r.preventDefault(),r.stopPropagation()}},w("span",{"aria-hidden":"true"},">")))},createFirst(e,t){let{first:o,pageNum:i}=e;return w("li",{class:it("page-item",{disabled:i<=1})},w("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{i!=1&&t.goto(1),s.preventDefault(),s.stopPropagation()}},w("span",{"aria-hidden":"true"}," \xAB")))},createLast(e,t){let{last:o,pageNum:i}=e,{pageCount:s}=t;return w("li",{class:it("page-item",{disabled:i>=s})},w("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{i!=s&&t.goto(s),r.preventDefault(),r.stopPropagation()}},w("span",{"aria-hidden":"true"},"\xBB")))},createPages(e,t){let{linksCount:o,pageNum:i}=e,{pageCount:s}=t,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let l=[];a<1&&(a=1);for(let p=a;p<=n;p++)l.push(w("li",{key:`pager-${p}`,className:it("page-item",{active:i==p,page:!0})},w("a",{class:"page-link",href:"#",onClick:f=>{i!=p&&t.goto(p),f.preventDefault(),f.stopPropagation()}},p)));return l},createInfo(e,t){let{pageNum:o}=e,{pageCount:i}=t;return w("li",{class:"info page-item"},w("span",{className:"page-link"},w("span",{class:"curr"},o),"/",w("span",{class:"total"},i)))},createJumper(e,t){return w("li",{class:"jumper page-item"},w("span",{className:"page-link"},"\u524D\u5F80",w("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${t.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:t.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>t.pageCount&&(i.value=t.pageCount),s<1&&(i.value=1),s=Number(i.value),t.goto(s)}}),"\u9875"))},createLayout(e,t){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:l}=e;return w("nav",null,w("ul",{...es(e,"pagination",{"justify-content-end":e.align=="right","justify-content-center":e.align=="center"})},o(e,t),i(e,t),s(e,t),r(e,t),a(e,t),n(e,t),l(e,t)))}}),c(se,"propTypes",{...Ge(ze,ze,"propTypes"),align:String});var $o=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var Do=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTs7QUFLSTtFQUNJO0VBQ0E7O0FBS1I7RUFDSSJ9 */`;var{h:D,classNames:Nt,define:ts,getHost:os}=omii,st,so=class extends h{constructor(){super(...arguments);m(this,st,!1)}get tree(){return this.props.tree}get checkboxTree(){return this.tree.props.checkboxTree}get radioTree(){return this.tree.props.radioTree}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.props.node??{}}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=os(this);return o instanceof so?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}get noChildren(){return!this.node.children}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?D("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):D("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?D("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):D("div",{class:"radio-placeholder"}):null}install(){!this.tree.props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}async render(o){let{node:i,cssss:s}=o,r=i.element??i.label??i.key;typeof r=="function"&&(r=await r(i,o,this));let a=null,n=i.children;return typeof n=="function"&&this.expanded&&(n=await n(i,o,this)),n&&this.expanded&&(a=D("div",{class:Nt("children",{expanded:this.expanded})},n instanceof Array?n.map(l=>D("oi-tree-node",{node:l,"node-level":this.level+1,tree:this.tree,cssss:s})):n)),D("div",{class:Nt("node",{expanded:this.expanded,"loading-children":d(this,st),"no-children":this.noChildren})},D("div",{class:Nt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:l=>{l.stopPropagation(),this.selected&&l.ctrlKey===!0?this.unSelect():this.select()}},D("div",{onClick:l=>{l.stopPropagation(),this.toggle()},class:Nt("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,D("div",{class:"text"},r),d(this,st)?D("oi-loading",null):null),a)}},Re=so;st=new WeakMap,c(Re,"css",Do),c(Re,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),c(Re,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});ts("oi-tree-node",Re);var io=Re;var{h:ro,purgeCSSSS:is,getHost:ss}=omii;var re=class extends h{get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}isSelected(e){let{multiSelect:t,selectedKey:o,selectedKeys:i}=this.$props;return t?(i??[]).some(s=>s==e):o!=null&&o==e}select(e,t=!0){let{multiSelect:o,selectedKeys:i}=this.$props;o?i.some(s=>s==e)||i.push(e):this.$props.selectedKey=e,t&&this.update()}unSelect(e,t=!0){let{multiSelect:o,selectedKeys:i}=this.$props;if(!o)this.$props.selectedKey=null;else{let s=i.indexOf(e);s!=-1&&i.splice(s,1)}t&&this.update()}isChecked(e){let{checkboxTree:t,checkedKeys:o}=this.$props;return t?(o??[]).some(i=>i==e):!1}check(e,t=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;o&&i.indexOf(e)==-1&&i.push(e),t&&this.update()}uncheck(e,t=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;if(o){let s=i.indexOf(e);s!=-1&&i.splice(s,1)}t&&this.update()}isRadioed(e){let{radioTree:t,radioedKey:o}=this.$props;return t?o!=null&&o==e:!1}radio(e,t=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=e),t&&this.update()}unradio(e=!0){let{radioTree:t}=this.$props;t&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:t}=this.$props;return(t??[]).some(o=>o==e)}expand(e,t=!0){let{expandedKeys:o}=this.$props;o.indexOf(e)!=-1&&o.push(e),t&&this.update()}collapse(e,t=!0){let{expandedKeys:o}=this.$props,i=o.indexOf(e);i!=-1&&o.splice(i,1),t&&this.update()}render(e){let t=e.nodes??this.$props.nodes,o=ss(this);typeof t=="function"&&(t=t.call(o));let i=is(this.$props.nodeCss,o);return ro(ro.f,null,t.map(s=>ro("oi-tree-node",{node:s,tree:this,cssss:i})))}};c(re,"css",$o),c(re,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),c(re,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:Gr,classNames:qr}=omii,rt,Y=class extends h{constructor(){super(...arguments);m(this,rt,void 0)}css(){let{size:t,color:o}=this.$props,i="2rem";if(t)i=`${t}rem`;else{let a=this.parentNode?.host??this.parentNode;a?i=`${a.offsetHeight}px`:i="2rem"}let s=`
    :host{
      --oi-loading-size:${i};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,rt)}
    ${s}
    ${r}
    `}async render(){let{name:t}=this.$props,{default:{template:o,css:i}}=await import(`./loadings/${t}.js`);return g(this,rt,i),o}};rt=new WeakMap,c(Y,"updateOnAttributeChanged",!0),c(Y,"css",`
    :host{
      display:inline-block;
    }
  `),c(Y,"defaultProps",{name:"circle",size:null,color:null}),c(Y,"propTypes",{name:String,size:Number,color:String});var rs=(e,t=!1)=>(e=e.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),t&&(e=e.replace(/\n/ig,"")),e),as=e=>{let t=new Date;return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()},ns=e=>{let t=new Date;return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()+1},Tt=e=>{if(!e)return null;let t=e.match(/\.\w+$/);return t?t.toString().toLowerCase():null},Ot=e=>{if(!e)return null;let t=e.lastIndexOf(".");return t==-1?e:e.substring(0,t)};var ls=["B","KB","MB","GB","TB","PB"],ao=e=>{e=Number.parseInt(e);let t=e,o=0;for(;t>1024;)t/=1024,o++;return t.toFixed(o==0?0:2)+ls[o]},cs=(e,t)=>{let o=document.createElement("a");o.download=t,o.href=e,o.target="_blank",o.click()},ds=(e,t)=>{window.chrome.extension?e():t()},kt=e=>{e.offsetHeight},ps=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],Et=e=>{if(!e)return"file";e=e.toLowerCase();let t=ps.find(o=>o[0].includes(e));return t==null?"file":t[1]};var zo={tryExtension:ds,downloadUrl:cs,getName:Ot,getExtension:Tt,cleanHTML:rs,isToday:as,isYesterday:ns,formatSize:ao};var Je={HORIZONTAL:"horizontal",VERTICAL:"vertical"},no="show",Lt="collapse",lo="collapsing",us="collapse-horizontal",co=.35,po=(e,t)=>t||(e.classList.contains(us)?Je.HORIZONTAL:Je.VERTICAL),Jo={show(e,t=co,o=null){return new Promise(i=>{o=po(e,o),C(e,[{classNames:[Lt]},{classNames:[lo],duration:t,callback(s){s.style[o==Je.VERTICAL?"height":"width"]=`${s[o==Je.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Lt,no],callback(s){s.style[o==Je.VERTICAL?"height":"width"]="",i()}}])})},hide(e,t=co,o=null){return new Promise(i=>{o=po(e,o);let s=o==Je.VERTICAL?"height":"width";e.style[s]=`${e.getBoundingClientRect()[s]}px`,kt(e.offsetHeight),C(e,[{classNames:[lo,Lt,no]},{classNames:[lo],duration:t,callback(r){r.style[s]=""}},{classNames:[Lt],callback:i}])})},toggle(e,t=co,o=null){return o=po(e,o),e.classList.contains(no)?this.hide(e,t,o):this.show(e,t,o)}};var at="fade",uo="show",fo=.15,Po={show(e,t=fo){return new Promise(o=>{C(e,[{classNames:[at]},{classNames:[at,uo],duration:t,callback:o}])})},hide(e,t=fo){return new Promise(o=>{C(e,[{classNames:[at,uo]},{classNames:[at],duration:t,callback:o}])})},toggle(e,t=fo){return e.classList.contains(at)&&!e.classList.contains(uo)?this.show(e,t):this.hide(e,t)}};var B={collapse:Jo,fade:Po};var{h:ho,classNames:fs}=omii;var hs="show",nt,ae=class extends h{constructor(){super(...arguments);m(this,nt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(hs),g(this,nt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:t,closeable:o}=this.$props;return d(this,nt)?null:ho("div",{className:fs("alert",`alert-${t}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},ho("slot",null),o?ho("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};nt=new WeakMap,c(ae,"css",()=>y("reboot","utilities","alert","close","transitions")),c(ae,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),c(ae,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:Pe,classNames:mo}=omii,Ct={HORIZONTAL:"horizontal",VERTICAL:"vertical"},ms="collapsed",Ae,It,ne=class extends h{constructor(){super(...arguments);m(this,Ae)}static get DIRECTIONS(){return Ct}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:t,alwayOpen:o,firstOpen:i}=this.$props;if(t.length>0&&i&&(t[0].opened=!0),!o){let s=t.filter(r=>r.opened);if(s.length){let r=s.shift();r.opened=!0,s.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==Ct.HORIZONTAL?WIDTH:HEIGHT}toggle(t){let{items:o,alwayOpen:i}=this.$props;if(i)Bt(this,Ae,It).call(this,t);else{let s=o.findIndex(a=>a.opened),r=s==-1?null:o[s];r&&r!=t&&Bt(this,Ae,It).call(this,r),Bt(this,Ae,It).call(this,t)}}render(){let{items:t,direction:o}=this.$props;return Pe("div",{class:mo("accordion",{"collapse-horizontal":o==Ct.HORIZONTAL})},t.map((i,s)=>Pe("div",{class:"accordion-item",key:i.key??`item-${s}`},Pe("h2",{class:"accordion-header"},Pe("button",{class:mo("accordion-button",{collapsed:!i.opened}),type:"button","aria-expanded":i.opened,onClick:r=>{this.toggle(i)}},i.header)),Pe("div",{class:mo("accordion-collapse",{collapse:!0,show:i.opened})},Pe("div",{class:"accordion-body"},typeof i.body=="function"?i.body(i,this.$props,this):i.body)))))}};Ae=new WeakSet,It=function(t){let{items:o,transitionDuration:i}=this.$props,s=o.indexOf(t),r=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");t.opened=!t.opened,n.classList.toggle(ms,!t.opened),t.opened?(B.collapse.show(a),this.fire("collapseShow",t)):(B.collapse.hide(a),this.fire("collapseHide",t))},c(ne,"css",()=>y("reboot","utilities","accordion","close","transitions")),c(ne,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:Ct.VERTICAL}),c(ne,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:lt,classNames:wa}=omii,le=class extends h{css(){let{divider:e}=this.$props;if(typeof e=="string")return`:host{--oi-breadcrumb-divider:'${e}'}`;if(typeof e=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:e,divider:t}=this.$props;return lt("nav",{"aria-label":"breadcrumb"},lt("ol",{class:"breadcrumb"},e.map((o,i)=>i!==e.length-1?lt("li",{class:"breadcrumb-item"},typeof t=="object"&&i!=0?t:null,lt("a",{href:o.href},o.label)):lt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof t=="object"&&i!=0?t:null,o.label))))}};c(le,"css",()=>y("reboot","utilities","breadcrumb")),c(le,"defaultProps",{}),c(le,"propTypes",{});var Ao=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:L,classNames:jo,extractClass:gs}=omii,ce=class extends h{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(e){let t=this.$props;return L(L.f,null,t.visible&&!t.staticPosition&&L("div",{class:jo("modal-backdrop","fade","show")}),L("div",{...gs(e,"modal",{"position-static":t.staticPosition,"d-block":t.staticPosition||t.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(t.staticBackdrop)return!1;this.close()}}},L("div",{class:jo("modal-dialog",t.size?`modal-${t.size}`:!1,{"modal-fullscreen":t.fullscreen,"modal-dialog-scrollable":t.scrollable,"modal-dialog-centered":t.vcentered})},L("div",{class:"modal-content"},L("div",{class:"modal-header"},L("slot",{name:"header"},L("h5",{class:"modal-title"},t.title),L("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),L("div",{class:"modal-body"},L("slot",null)),L("div",{class:"modal-footer"},L("slot",{name:"footer"}))))))}};c(ce,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),Ao]),c(ce,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),c(ce,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function dt(e){return e.split("-")[0]}function $t(e){return e.split("-")[1]}function pt(e){return["top","bottom"].includes(dt(e))?"x":"y"}function bo(e){return e==="y"?"height":"width"}function Mo(e,t,o){let{reference:i,floating:s}=e,r=i.x+i.width/2-s.width/2,a=i.y+i.height/2-s.height/2,n=pt(t),l=bo(n),p=i[l]/2-s[l]/2,f=n==="x",u;switch(dt(t)){case"top":u={x:r,y:i.y-s.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:a};break;case"left":u={x:i.x-s.width,y:a};break;default:u={x:i.x,y:i.y}}switch($t(t)){case"start":u[n]-=p*(o&&f?-1:1);break;case"end":u[n]+=p*(o&&f?-1:1)}return u}var Ho=async(e,t,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(t)),l=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:f}=Mo(l,i,n),u=i,b={},v=0;for(let x=0;x<r.length;x++){let{name:F,fn:U}=r[x],{x:Q,y:k,data:E,reset:R}=await U({x:p,y:f,initialPlacement:i,placement:u,strategy:s,middlewareData:b,rects:l,platform:a,elements:{reference:e,floating:t}});p=Q??p,f=k??f,b={...b,[F]:{...b[F],...E}},R&&v<=50&&(v++,typeof R=="object"&&(R.placement&&(u=R.placement),R.rects&&(l=R.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):R.rects),{x:p,y:f}=Mo(l,u,n)),x=-1)}return{x:p,y:f,placement:u,strategy:s,middlewareData:b}};function Wo(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function ct(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function vo(e,t){var o;t===void 0&&(t={});let{x:i,y:s,platform:r,rects:a,elements:n,strategy:l}=e,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=t,x=Wo(v),F=n[b?u==="floating"?"reference":"floating":u],U=ct(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(F)))==null||o?F:F.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:f,strategy:l})),Q=ct(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:i,y:s}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:l}):a[u]);return{top:U.top-Q.top+x.top,bottom:Q.bottom-U.bottom+x.bottom,left:U.left-Q.left+x.left,right:Q.right-U.right+x.right}}var bs=Math.min,vs=Math.max;function go(e,t,o){return vs(e,bs(t,o))}var yo=e=>({name:"arrow",options:e,async fn(t){let{element:o,padding:i=0}=e??{},{x:s,y:r,placement:a,rects:n,platform:l}=t;if(o==null)return{};let p=Wo(i),f={x:s,y:r},u=pt(a),b=$t(a),v=bo(u),x=await l.getDimensions(o),F=u==="y"?"top":"left",U=u==="y"?"bottom":"right",Q=n.reference[v]+n.reference[u]-f[u]-n.floating[v],k=f[u]-n.reference[u],E=await(l.getOffsetParent==null?void 0:l.getOffsetParent(o)),R=E?u==="y"?E.clientHeight||0:E.clientWidth||0:0;R===0&&(R=n.floating[v]);let St=Q/2-k/2,$e=p[F],Ke=R-x[v]-p[U],N=R/2-x[v]/2+St,V=go($e,N,Ke),De=(b==="start"?p[F]:p[U])>0&&N!==V&&n.reference[v]<=n.floating[v];return{[u]:f[u]-(De?N<$e?$e-N:Ke-N:0),data:{[u]:V,centerOffset:N-V}}}}),ys={left:"right",right:"left",bottom:"top",top:"bottom"};function Vt(e){return e.replace(/left|right|bottom|top/g,t=>ys[t])}function xs(e,t,o){o===void 0&&(o=!1);let i=$t(e),s=pt(e),r=bo(s),a=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Vt(a)),{main:a,cross:Vt(a)}}var ws={start:"end",end:"start"};function Xo(e){return e.replace(/start|end/g,t=>ws[t])}var Ss=["top","right","bottom","left"],La=Ss.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var ut=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o;let{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:n,elements:l}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...x}=e,F=dt(i),U=u||(F===a||!v?[Vt(a)]:function(N){let V=Vt(N);return[Xo(N),V,Xo(V)]}(a)),Q=[a,...U],k=await vo(t,x),E=[],R=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&E.push(k[F]),f){let{main:N,cross:V}=xs(i,r,await(n.isRTL==null?void 0:n.isRTL(l.floating)));E.push(k[N],k[V])}if(R=[...R,{placement:i,overflows:E}],!E.every(N=>N<=0)){var St,$e;let N=((St=($e=s.flip)==null?void 0:$e.index)!=null?St:0)+1,V=Q[N];if(V)return{data:{index:N,overflows:R},reset:{placement:V}};let De="bottom";switch(b){case"bestFit":{var Ke;let Qo=(Ke=R.map(Ft=>[Ft,Ft.overflows.filter(Ze=>Ze>0).reduce((Ze,$i)=>Ze+$i,0)]).sort((Ft,Ze)=>Ft[1]-Ze[1])[0])==null?void 0:Ke[0].placement;Qo&&(De=Qo);break}case"initialPlacement":De=a}if(i!==De)return{reset:{placement:De}}}return{}}}};var ft=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){let{x:o,y:i}=t,s=await async function(r,a){let{placement:n,platform:l,elements:p}=r,f=await(l.isRTL==null?void 0:l.isRTL(p.floating)),u=dt(n),b=$t(n),v=pt(n)==="x",x=["left","top"].includes(u)?-1:1,F=f&&v?-1:1,U=typeof a=="function"?a(r):a,{mainAxis:Q,crossAxis:k,alignmentAxis:E}=typeof U=="number"?{mainAxis:U,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...U};return b&&typeof E=="number"&&(k=b==="end"?-1*E:E),v?{x:k*F,y:Q*x}:{x:Q*x,y:k*F}}(t,e);return{x:o+s.x,y:i+s.y,data:s}}}};function Fs(e){return e==="x"?"y":"x"}var ht=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:o,y:i,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:U=>{let{x:Q,y:k}=U;return{x:Q,y:k}}},...l}=e,p={x:o,y:i},f=await vo(t,l),u=pt(dt(s)),b=Fs(u),v=p[u],x=p[b];if(r){let U=u==="y"?"bottom":"right";v=go(v+f[u==="y"?"top":"left"],v,v-f[U])}if(a){let U=b==="y"?"bottom":"right";x=go(x+f[b==="y"?"top":"left"],x,x-f[U])}let F=n.fn({...t,[u]:v,[b]:x});return{...F,data:{x:F.x-o,y:F.y-i}}}}};function qo(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function Z(e){if(e==null)return window;if(!qo(e)){let t=e.ownerDocument;return t&&t.defaultView||window}return e}function M(e){return Z(e).getComputedStyle(e)}function K(e){return qo(e)?"":e?(e.nodeName||"").toLowerCase():""}function ei(){let e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function X(e){return e instanceof Z(e).HTMLElement}function je(e){return e instanceof Z(e).Element}function Me(e){return typeof ShadowRoot>"u"?!1:e instanceof Z(e).ShadowRoot||e instanceof ShadowRoot}function zt(e){let{overflow:t,overflowX:o,overflowY:i}=M(e);return/auto|scroll|overlay|hidden/.test(t+i+o)}function Bs(e){return["table","td","th"].includes(K(e))}function _o(e){let t=/firefox/i.test(ei()),o=M(e);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||t&&o.willChange==="filter"||t&&!!o.filter&&o.filter!=="none"}function ti(){return!/^((?!chrome|android).)*safari/i.test(ei())}var Yo=Math.min,mt=Math.max,Dt=Math.round;function Qe(e,t,o){var i,s,r,a;t===void 0&&(t=!1),o===void 0&&(o=!1);let n=e.getBoundingClientRect(),l=1,p=1;t&&X(e)&&(l=e.offsetWidth>0&&Dt(n.width)/e.offsetWidth||1,p=e.offsetHeight>0&&Dt(n.height)/e.offsetHeight||1);let f=je(e)?Z(e):window,u=!ti()&&o,b=(n.left+(u&&(i=(s=f.visualViewport)==null?void 0:s.offsetLeft)!=null?i:0))/l,v=(n.top+(u&&(r=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/l,F=n.height/p;return{width:x,height:F,top:v,right:b+x,bottom:v+F,left:b,x:b,y:v}}function de(e){return(t=e,(t instanceof Z(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function Jt(e){return je(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function oi(e){return Qe(de(e)).left+Jt(e).scrollLeft}function Us(e,t,o){let i=X(t),s=de(t),r=Qe(e,i&&function(l){let p=Qe(l);return Dt(p.width)!==l.offsetWidth||Dt(p.height)!==l.offsetHeight}(t),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(i||!i&&o!=="fixed")if((K(t)!=="body"||zt(s))&&(a=Jt(t)),X(t)){let l=Qe(t,!0);n.x=l.x+t.clientLeft,n.y=l.y+t.clientTop}else s&&(n.x=oi(s));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function ii(e){return K(e)==="html"?e:e.assignedSlot||e.parentNode||(Me(e)?e.host:null)||de(e)}function Ko(e){return X(e)&&M(e).position!=="fixed"?function(t){let{offsetParent:o}=t,i=t,s=!1;for(;i&&i!==o;){let{assignedSlot:r}=i;if(r){let a=r.offsetParent;if(M(r).display==="contents"){let n=r.hasAttribute("style"),l=r.style.display;r.style.display=M(i).display,a=r.offsetParent,r.style.display=l,n||r.removeAttribute("style")}i=r,o!==a&&(o=a,s=!0)}else if(Me(i)&&i.host&&s)break;i=Me(i)&&i.host||i.parentNode}return o}(e):null}function xo(e){let t=Z(e),o=Ko(e);for(;o&&Bs(o)&&M(o).position==="static";)o=Ko(o);return o&&(K(o)==="html"||K(o)==="body"&&M(o).position==="static"&&!_o(o))?t:o||function(i){let s=ii(i);for(Me(s)&&(s=s.host);X(s)&&!["html","body"].includes(K(s));){if(_o(s))return s;{let r=s.parentNode;s=Me(r)?r.host:r}}return null}(e)||t}function Zo(e){if(X(e))return{width:e.offsetWidth,height:e.offsetHeight};let t=Qe(e);return{width:t.width,height:t.height}}function si(e){let t=ii(e);return["html","body","#document"].includes(K(t))?e.ownerDocument.body:X(t)&&zt(t)?t:si(t)}function ri(e,t){var o;t===void 0&&(t=[]);let i=si(e),s=i===((o=e.ownerDocument)==null?void 0:o.body),r=Z(i),a=s?[r].concat(r.visualViewport||[],zt(i)?i:[]):i,n=t.concat(a);return s?n:n.concat(ri(a))}function Go(e,t,o){return t==="viewport"?ct(function(i,s){let r=Z(i),a=de(i),n=r.visualViewport,l=a.clientWidth,p=a.clientHeight,f=0,u=0;if(n){l=n.width,p=n.height;let b=ti();(b||!b&&s==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:l,height:p,x:f,y:u}}(e,o)):je(t)?function(i,s){let r=Qe(i,!1,s==="fixed"),a=r.top+i.clientTop,n=r.left+i.clientLeft;return{top:a,left:n,x:n,y:a,right:n+i.clientWidth,bottom:a+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(t,o):ct(function(i){var s;let r=de(i),a=Jt(i),n=(s=i.ownerDocument)==null?void 0:s.body,l=mt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=mt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+oi(i),u=-a.scrollTop;return M(n||r).direction==="rtl"&&(f+=mt(r.clientWidth,n?n.clientWidth:0)-l),{width:l,height:p,x:f,y:u}}(de(e)))}function Rs(e){let t=ri(e),o=["absolute","fixed"].includes(M(e).position)&&X(e)?xo(e):e;return je(o)?t.filter(i=>je(i)&&function(s,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(s.contains(r))return!0;if(a&&Me(a)){let n=r;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(i,o)&&K(i)!=="body"):[]}var Qs={getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e,r=[...o==="clippingAncestors"?Rs(t):[].concat(o),i],a=r[0],n=r.reduce((l,p)=>{let f=Go(t,p,s);return l.top=mt(f.top,l.top),l.right=Yo(f.right,l.right),l.bottom=Yo(f.bottom,l.bottom),l.left=mt(f.left,l.left),l},Go(t,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:i}=e,s=X(o),r=de(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((s||!s&&i!=="fixed")&&((K(o)!=="body"||zt(r))&&(a=Jt(o)),X(o))){let l=Qe(o,!0);n.x=l.x+o.clientLeft,n.y=l.y+o.clientTop}return{...t,x:t.x-a.scrollLeft+n.x,y:t.y-a.scrollTop+n.y}},isElement:je,getDimensions:Zo,getOffsetParent:xo,getDocumentElement:de,getElementRects:e=>{let{reference:t,floating:o,strategy:i}=e;return{reference:Us(t,xo(o),i),floating:{...Zo(o),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>M(e).direction==="rtl"};var Pt=(e,t,o)=>Ho(e,t,{platform:Qs,...o});var ai=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Ne,classNames:Ma,createRef:Ns}=omii,At,ni,gt,wo,Te,H=class extends h{constructor(){super(...arguments);m(this,At);m(this,gt);c(this,"slotRef",Ns());m(this,Te,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:t,offset:o,strategy:i}=this.$props,s=d(this,gt,wo);if(s){let r=this.$(`.${this.type}-arrow`);Pt(s,this.$element,{strategy:i,placement:t,middleware:[ut(),ht(),ft(o),yo({element:r})]}).then(({x:a,y:n,placement:l,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){g(this,Te,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){g(this,Te,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,Te)?this.hide():this.show()}installed(){let t=d(this,gt,wo),{triggerShow:o,triggerHide:i}=this.$props;t&&(o.split(" ").forEach(s=>{s&&t.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),i.split(" ").forEach(s=>{s&&t.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),d(this,Te)&&this.hide()})}))}render(t){let{placement:o,header:i,body:s}=this.$props;return Ne(Ne.f,null,Ne("slot",{ref:this.slotRef,tabIndex:!0}),Ne("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Ne("div",{class:"popover-arrow"}),Ne("slot",{name:"header",class:"popover-header"},i),Ne("slot",{class:"popover-body",name:"body"},s)))}};At=new WeakSet,ni=function(){return this.slotRef.current},gt=new WeakSet,wo=function(){let t=d(this,At,ni).assignedElements();if(t.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return t.at(0)},Te=new WeakMap,c(H,"css",[()=>y("reboot","utilities","transitions","popover"),ai]),c(H,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),c(H,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var li=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Ts=async e=>new Promise(t=>{let o=new FileReader;o.readAsDataURL(e),o.onload=i=>{t(i.target.result)}}),Os=async e=>e.split(";base64,")[1],ks=e=>new Promise(t=>{let o=new Image;o.crossOrigin="anonymous",o.src=e,o.onload=()=>{t(So(o))}}),Es=e=>new Promise((t,o)=>{try{fetch(e).then(async i=>{if(i.status==200){let s=new Image,r=await i.blob();s.crossOrigin="anonymous",s.src=URL.createObjectURL(r),s.onload=()=>{URL.revokeObjectURL(s.src),t(ci(s))},s.onerror=a=>{o(a)}}else o(new Error(i.status))})}catch(i){o(i)}}),ci=(e,t="image.png")=>ui(di(e),t,"image/png"),di=e=>pi(So(e)),So=(e,t="image/png",o=.8)=>{let i=document.createElement("canvas"),s=i.getContext("2d");return i.width=e.naturalWidth,i.height=e.naturalHeight,s.drawImage(e,0,0),i.toDataURL(t,o)},pi=e=>{let t=e.split(";base64,"),o=t[0].split(":")[1],i=window.atob(t[1]),s=i.length,r=new Uint8Array(s);for(let a=0;a<s;++a)r[a]=i.charCodeAt(a);return new Blob([r],{type:o})},ui=(e,t,o)=>new File([e],t,{type:o,lastModified:Date.now()}),fi=(e,t,o,i,s,r="image/png",a=.8)=>{let n=i>t?t:i,l=n*o/t;l>s&&(l=s,n=l*t/o);let p=document.createElement("canvas"),f=p.getContext("2d");return p.width=n,p.height=l,f.drawImage(e,0,0,t,o,0,0,n,l),p.toDataURL(r,a)},hi=(e,t,o,i="image/png",s=.8)=>fi(e,e.naturalWidth,e.naturalHeight,t,o,i,s),Ls=async(e,t,o,i="image/png",s=.8)=>new Promise(r=>{let a=new Image;a.src=window.URL.createObjectURL(e),a.onload=()=>{window.URL.revokeObjectURL(a.src),r(hi(a,t,o,i,s))}}),Cs=(e,t=100,o=100,i="image/jpeg",s=.8)=>new Promise((r,a)=>{try{let n=document.createElement("video");n.src=window.URL.createObjectURL(e),n.preload="auto",n.onloadeddata=()=>{r(mi(n,t,o,i,s)),window.URL.revokeObjectURL(n.src)},n.onerror=l=>{window.URL.revokeObjectURL(n.src),a(l)}}catch(n){a(n)}}),mi=(e,t=100,o=100,i="image/jpeg",s=.8)=>fi(e,e.videoWidth,e.videoHeight,t,o,i,s),Fo=e=>{if(!(e instanceof File)||e.type.indexOf("image/")!=0)return null;let t=new Image;return t.src=URL.createObjectURL(e),t.onload=()=>{URL.revokeObjectURL(t.src)},t.src};var gi={convertImageUrlToBase64:ks,createVideoThumb:mi,createVideoFileThumb:Cs,convertImageUrlToFile:Es,convertBase64ToBlob:pi,convertBlobToFile:ui,convertImageToBase64:So,convertImageToBlob:di,convertImageToFile:ci,splitBase64:Os,readFileAsBase64:Ts,createImageFileThumb:Ls,createImageThumb:hi,getPreviewUrl:Fo};var{h:T,classNames:Is}=omii,bi=e=>e?.type?.indexOf("image")==0,Vs=e=>bi(e)?(e.url=e.url??Fo(e.file),T("div",{title:e.name,class:"image",style:{backgroundImage:`url(${e.url})`}})):T("div",{className:"file"},T("oi-icon",{"view-box":"1024",name:Et(e.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),T("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},e.name,e.ext)),vi=({component:e})=>{let{files:t,selectText:o,multiple:i}=e.$props;return T("div",{className:"pictures"},T("div",{class:"row row-cols-auto g-4"},t.map((s,r)=>T("div",{className:"col",key:`file-${r}`},T("div",{class:"card",onClick:()=>{e.open(r)}},Vs(s),T("div",{className:"actions"},T("div",{class:"position-absolute top-50 start-50 translate-middle"},bi(s)&&T("oi-icon",{name:"search"}),T("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),e.remove(r)}})))))),(i||t.length==0)&&T("div",{className:"col selector-col",key:"selector"},T("div",{class:"card selector"},T("label",{class:Is("selector",{multiple:i}),title:o,onClick:()=>{e.open()}},T("oi-icon",{name:"add"}))))))};var{h:z,classNames:sn}=omii,yi=({component:e})=>{let{files:t,selectText:o,multiple:i}=e.$props;return z("div",{className:"files"},z("slot",{name:"actions"},z("button",{className:"btn btn-primary",onClick:()=>{e.open()}},o)),z("table",{class:"table"},z("tbody",null,t.map(s=>z("tr",null,z("td",null,z("oi-icon",{"view-box":"1024",name:Et(s.ext),type:"file-type"}),s.name,s.ext),z("td",null,ao(s.size)),z("td",null,z("oi-icon",{name:"delete"})))))))};var{h:jt,classNames:nn}=omii,$s={pictures:vi,files:yi},Mt={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Oe,pe=class extends h{constructor(){super(...arguments);m(this,Oe,-1)}static get STATUS(){return Mt}open(t=-1){g(this,Oe,t),this.$("#files").click()}remove(t){this.$props.files?.splice(t,1),this.updateSelf()}select(t){let{multiple:o,files:i,autoUpload:s}=this.$props;if(t?.length==0)return!1;if(o||i.splice(0,i.length),d(this,Oe)!=-1&&t.length>=1){let r=Array.from(t).map(a=>({id:null,name:Ot(a.name),ext:Tt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.splice(d(this,Oe),1,...r),this.fire("replaced",{index:d(this,Oe),replaceFiles:r})}else{let r=Array.from(t).map(a=>({id:null,name:Ot(a.name),ext:Tt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.update()}upload(){let{files:t,action:o,withCredentials:i,headers:s}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of t.filter(a=>a.file&&(!a.status||a.status==Mt.NONE||a.status==Mt.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=i,typeof s=="function"&&(s=s()),typeof s=="object")for(let l in s)n.setRequestHeader(l,s[l]);n.send(a),n.onreadystatechange=function(l){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=Mt.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,l)},n.upload.onprogress=function(l){if(l.lengthComputable){let p=Math.ceil(l.loaded/l.total*100);r.progress=p,this.fire("progress",{file:r,loaded:l.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:t,accept:o,template:i}=this.$props;return jt(jt.f,null,jt("slot",null,$s[i]),jt("input",{id:"files",type:"file",multiple:t,accept:o,onChange:s=>{this.select(s.target.files)}}))}};Oe=new WeakMap,c(pe,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),li]),c(pe,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),c(pe,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var xi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var Ds="transitionend";var wi=e=>{e.dispatchEvent(new Event(Ds))},zs=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u");var Si=e=>{if(!zs(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue("visibility")==="visible",o=e.closest("details:not([open])");if(!o)return t;if(o!==e){let i=e.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return t};var{h:I,classNames:Fi,extractClass:Js}=omii;var Ps="carousel-item-end",As="carousel-item-start",js="carousel-item-next",Ms="carousel-item-prev",Xs=".active",Hs=".carousel-item",Fn=Xs+Hs,ke,G,bt,fe,ue=class extends h{constructor(){super(...arguments);m(this,ke,0);m(this,G,!1);m(this,bt,[]);m(this,fe,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,ke)}get isSliding(){return d(this,G)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,G)&&wi(this),clearInterval(d(this,fe)),g(this,fe,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(t=!0){if(d(this,G))return!1;let{$activeItem:o,$items:i,$props:{duration:s}}=this,r=i.indexOf(o),a,n;if(t instanceof HTMLElement?(n=t,a=i.indexOf(n),t=a>r):typeof t=="number"?(a=(t+i.length)%i.length,n=i[a],t=a>r):(a=(r+1)%i.length,t||(a=(r-1+i.length)%i.length),n=i[a]),d(this,ke)==a)return!1;let l=t?As:Ps,p=t?js:Ms;g(this,G,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;C(n,[{classNames:[],duration:f},{classNames:[p],callback:()=>{kt(n)}},{classNames:[p,l],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),C(o,[{classNames:[],duration:f},{classNames:[l,"active"],duration:s},{classNames:[],callback:()=>{g(this,G,!1),g(this,ke,a);let u;for(;u=d(this,bt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Si(this)&&this.slide()}cycle(){d(this,fe)&&clearInterval(d(this,fe)),g(this,fe,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let t=this.$items;!this.$activeItem&&t.length>0&&t[0].classList.add("active"),g(this,ke,t.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,G)?d(this,bt).push(()=>{this.cycle()}):this.cycle())})}render(t){let{items:o,nextCtrl:i,prevCtrl:s,indicator:r}=this.$props;return I("div",{...Js(t,"carousel")},I("slot",{class:"carousel-inner"},o.map(a=>I("div",{className:Fi("carousel-item"),waiting:a.attributes?.waiting},a))),I("div",{class:"carousel-indicators"},I("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),I("slot",{name:"actions"},typeof i=="function"&&i(this),typeof s=="function"&&s(this)))}};ke=new WeakMap,G=new WeakMap,bt=new WeakMap,fe=new WeakMap,c(ue,"css",[()=>y("reboot","utilities","carousel"),xi]),c(ue,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:t=>I("button",{class:"carousel-control-prev",type:"button",onClick:o=>{t.slide(!1)}},I("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Previous")),nextCtrl:t=>I("button",{class:"carousel-control-next",type:"button",onClick:o=>{t.slide()}},I("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Next")),indicator:({index:t,host:o})=>I("button",{type:"button",onClick:i=>o.slide(t),class:Fi({active:t==0})})}),c(ue,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Bo,classNames:Rn,extractClass:Ws}=omii,he=class extends h{css(){}render(e){let{text:t,desc:o,position:i}=this.$props,s=i?i.split("-"):[];return Bo("span",{...Ws(e,"badge",{"position-absolute":i,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":i,"rounded-pill":i})},Bo("slot",null,t),o&&Bo("span",{class:"visually-hidden"},o))}};c(he,"css",()=>y("reboot","utilities","badge")),c(he,"defaultProps",{text:"",desc:!1,position:!1}),c(he,"propTypes",{});var Bi=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:Xe,classNames:En,extractClass:_s}=omii,ge,me=class extends h{constructor(){super(...arguments);m(this,ge,!0)}get closed(){return d(this,ge)}close(){g(this,ge,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){g(this,ge,!1),this.update(),B.fade.show(this)}install(){g(this,ge,!this.$props.visible)}render(t){return Xe("div",{..._s(t,"toast",{show:!d(this,ge)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},Xe("div",{class:"toast-header"},Xe("slot",{name:"header"}),Xe("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),Xe("div",{class:"toast-body"},Xe("slot",null)))}};ge=new WeakMap,c(me,"css",[()=>y("reboot","utilities","toasts","close"),Bi]),c(me,"defaultProps",{visible:!1}),c(me,"propTypes",{visible:Boolean});var{h:Uo,classNames:Ys,extractClass:zn}=omii,be=class extends h{setValue(e){this.$props.value=value,this.update()}css(){}render(e){let{label:t,value:o,min:i,max:s,showPercent:r,striped:a,animated:n,style:l,className:p}=this.$props;return Uo("div",{class:"progress",style:l},Uo("div",{class:Ys("progress-bar",e.class??e.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":t,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":s},r&&Uo("span",null,o,"%")))}};c(be,"css",()=>y("reboot","utilities","progress")),c(be,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),c(be,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Ui=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:He,classNames:Xn,createRef:Hn}=omii,Xt=class extends H{get type(){return"tooltip"}render(e){let{placement:t,body:o}=this.$props;return He(He.f,null,He("slot",{ref:this.slotRef}),He("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":t},He("div",{class:"tooltip-arrow"}),He("slot",{class:"tooltip-inner",name:"body"},o)))}},Ee=Xt;c(Ee,"css",[()=>y("reboot","utilities","transitions","tooltip"),Ui]),c(Ee,"defaultProps",{...Ge(Xt,Xt,"defaultProps"),offset:0});var Ri=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:ve,classNames:Gn,createRef:We}=omii,J,q,P,Le,Ce,Ht,ye=class extends h{constructor(){super(...arguments);m(this,J,We());m(this,q,We());m(this,P,We());m(this,Le,We());m(this,Ce,We());m(this,Ht,We())}close(t,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(d(this,P).current),d(this,q).current.style.height=this.clientHeight-d(this,J).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(d(this,P).current),d(this,q).current.style.height=this.clientHeight-d(this,J).current.clientHeight-d(this,P).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(d(this,J).current),d(this,q).current.style.height=this.clientHeight-d(this,P).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(d(this,J).current),d(this,q).current.style.height=this.clientHeight-d(this,J).current.scrollHeight-d(this,P).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(d(this,Le).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(d(this,Le).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(d(this,Ce).current)}openRight(){this.$props.openRight=!0,B.collapse.show(d(this,Ce).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let t=this.getBoundingClientRect(),o=d(this,J).current.getBoundingClientRect(),i=d(this,P).current.getBoundingClientRect();d(this,q).current.style.height=t.height-o.height-i.height+"px"}installed(){let{openFooter:t,openHeader:o,openLeft:i,openRight:s}=this.$props;t||(d(this,P).current.style.height=0),o||(d(this,J).current.style.height=0),i||(d(this,Le).current.style.height=0),s||(d(this,Ce).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(t){return ve(ve.f,null,ve("slot",{name:"header",ref:d(this,J)}),ve("main",{ref:d(this,q)},ve("slot",{name:"left",ref:d(this,Le),class:"collapse-horizontal"}),ve("slot",{name:"content",ref:d(this,Ht)}),ve("slot",{name:"right",ref:d(this,Ce),class:"collapse-horizontal"})),ve("slot",{name:"footer",ref:d(this,P)}))}};J=new WeakMap,q=new WeakMap,P=new WeakMap,Le=new WeakMap,Ce=new WeakMap,Ht=new WeakMap,c(ye,"css",[Ri]),c(ye,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),c(ye,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Qi=`
:host {
  display: block;
}
:host oi-loading {
  margin: auto;
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7QUFDQTtFQUNJO0VBQ0EifQ== */`;var{h:vt,classNames:nl,uniqueTag:Ks}=omii,W,xe=class extends h{constructor(){super(...arguments);m(this,W,void 0)}get $module(){return d(this,W)}load(t,o="default",i=vt("oi-loading",{size:"6"}),s=vt("h1",null,"Load Error")){g(this,W,i),t&&o&&import(t).then(r=>{let a=r[o];if(a==null)g(this,W,s);else if(typeof a=="function"){let n=Ks(a);g(this,W,vt(n,null))}else g(this,W,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",t,o,r),g(this,W,s)})}install(){let{src:t,module:o,loading:i,loadError:s}=this.$props;this.load(t,o,i,s)}render(t){return d(this,W)}};W=new WeakMap,c(xe,"css",[Qi]),c(xe,"defaultProps",{src:null,module:"default",loading:vt("oi-loading",{size:"6"}),loadError:vt("h1",null,"Load Error")}),c(xe,"propTypes",{src:String,module:String});var Ni=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:we,classNames:fl,createRef:Ti,extractClass:Zs}=omii,_,Se=class extends h{constructor(){super(...arguments);c(this,"offcanvasRef",Ti());c(this,"backdropRef",Ti());m(this,_,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,_))return;g(this,_,!0),await this.update(!0,!0);let t=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),t.setAttribute("aria-modal",!0),t.setAttribute("role","dialog");let{duration:o}=this.$props;C(t,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,_)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,_))return;g(this,_,!1);let t=this.offcanvasRef.current;t.blur();let{duration:o}=this.$props;C(t,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{t.removeAttribute("aria-modal"),t.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){g(this,_,this.$props.visible)}render(t){let{visible:o,placement:i,position:s,title:r,useBackdrop:a}=this.$props;return we(we.f,null,we("div",{ref:this.offcanvasRef,...Zs(t,"offcanvas",`offcanvas-${i}`,`position-${s}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},we("div",{class:"offcanvas-header"},we("slot",{name:"title",class:"offcanvas-title h5"},r),we("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),we("slot",{class:"offcanvas-body"})),a&&d(this,_)&&we("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};_=new WeakMap,c(Se,"css",[()=>y("reboot","offcanvas","utilities","close"),Ni]),c(Se,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),c(Se,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:xl,classNames:wl,extractClass:Sl,createRef:Fl}=omii;function Ei(e){let{validity:t}=e;if(t.valid)delete e.dataset.invalid,delete e.dataset.validationMessage;else{let o=[];for(let i in t)i!=="valid"&&t[i]===!0&&o.push(i);e.dataset.invalid=o.join(" "),e.dataset.validationMessage=e.validationMessage}}function Oi(e){let t=e.currentTarget;t.checkValidity(),Ei(e.target),t.classList.add("was-validated")}function Li(e){let t=e.checkValidity();return Array.from(e.elements).forEach(o=>{Ei(o)}),e.classList.add("was-validated"),t}function ki(e){let t=e.target;t.removeEventListener("input",Oi),t.addEventListener("input",Oi,!1),Li(t)||(e.preventDefault(),e.stopPropagation())}var _e=class extends HTMLFormElement{static validate(t){t.noValidate=!0,t.removeEventListener("submit",ki),t.addEventListener("submit",ki,!0)}validate(){return Li(this)}connectedCallback(){this.constructor.validate(this)}};var Ci=`
:host {
  position: relative;
}
:host slot:not([name=menu]) {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBIn0= */`;var{h:Wt,classNames:Rl,createRef:Ii}=omii,Ve=null;document.addEventListener("click",e=>{Ve&&Ve.hide()});var yt,xt,ee,Ie,wt,Ro,Ye,Fe=class extends h{constructor(){super(...arguments);m(this,ee);m(this,wt);m(this,yt,Ii());m(this,xt,Ii());m(this,Ye,!1)}get $menu(){return d(this,yt).current}setPosition(){let{placement:t,offset:o,strategy:i}=this.$props;Pt(d(this,wt,Ro),this.$menu,{strategy:i,placement:t,middleware:[ut(),ht(),ft(o)]}).then(({x:s,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${r}px`})})}show(){g(this,Ye,!0),d(this,ee,Ie).focus(),d(this,ee,Ie).setAttribute("aria-expanded",!0),d(this,ee,Ie).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Ve=this,this.setPosition()}hide(){g(this,Ye,!1),d(this,ee,Ie).classList.remove("show"),d(this,ee,Ie).setAttribute("aria-expanded","false"),Ve=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,Ye)?this.hide():this.show()}installed(){d(this,wt,Ro).addEventListener("click",t=>{Ve&&Ve!=this&&Ve.hide(),this.toggle(),t.preventDefault(),t.stopPropagation()}),this.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation()})}render(t){let{menu:o}=this.$props;return Wt(Wt.f,null,Wt("slot",{ref:d(this,xt)}),Wt("slot",{name:"menu",ref:d(this,yt)},o))}};yt=new WeakMap,xt=new WeakMap,ee=new WeakSet,Ie=function(){return d(this,xt).current},wt=new WeakSet,Ro=function(){let t=d(this,ee,Ie).assignedElements();if(t.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return t.at(0)},Ye=new WeakMap,c(Fe,"css",[()=>y("reboot","utilities","transitions","dropdown"),Ci]),c(Fe,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),c(Fe,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var Vi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:Gs,Component:Cl}=omii,_t,Be=class extends h{constructor(){super(...arguments);m(this,_t,void 0)}get value(){return this.editor?.getValue()}set value(t){this.editor?.setValue(t)}installed(){let{codes:t,language:o,automaticLayout:i,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{g(this,_t,r),this.editor=r.editor.create(this.$(".coder"),{value:t,language:o,automaticLayout:i,fontSize:s,minimap:{enabled:!1}})})}render(){return Gs("div",{class:"coder"})}};_t=new WeakMap,c(Be,"css",[()=>{let t=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",t).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,i=new CSSStyleSheet;return i.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i],fetch(new URL("./monaco/index.css",t).href).then(s=>s.text())},Vi]),c(Be,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),c(Be,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var{define:S}=omii;S("oi-rate",oe);S("oi-tab",te);S("oi-icon",$);S("oi-pager",j);S("oi-tree",re);S("oi-loading",Y);S("oi-alert",ae);S("oi-accordion",ne);S("oi-breadcrumb",le);S("oi-modal",ce);S("oi-popover",H);S("oi-uploader",pe);S("oi-carousel",ue);S("oi-badge",he);S("oi-toast",me);S("oi-progress",be);S("oi-tooltip",Ee);S("oi-layout",ye);S("oi-import",xe);S("oi-offcanvas",Se);S("oi-pagination",se);S("oi-dropdown",Fe);S("oi-coder",Be);customElements.define("oi-form",_e,{extends:"form"});var qs=import.meta.url;omii.ui={utils:zo,vision:gi,css:Vo,effect:B,icon:$,tab:te,rate:oe,pager:j,tree:re,treeNode:io,loading:Y,alert:ae,accordion:ne,breadcrumb:le,modal:ce,popover:H,uploader:pe,carousel:ue,badge:he,toast:me,progress:be,tooltip:Ee,layout:ye,import:xe,offcanvas:Se,pagination:se,form:_e,dropdown:Fe,coder:Be,importURL:qs};export{ne as accordion,ae as alert,le as breadcrumb,ue as carousel,Be as coder,Vo as css,Fe as dropdown,B as effect,_e as form,$ as icon,xe as import,qs as importURL,ye as layout,Y as loading,ce as modal,Se as offcanvas,j as pager,se as pagination,H as popover,be as progress,oe as rate,te as tab,me as toast,Ee as tooltip,re as tree,io as treeNode,pe as uploader,zo as utils,gi as vision};
//# sourceMappingURL=omii-ui.js.map
