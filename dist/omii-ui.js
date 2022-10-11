var Pi=Object.defineProperty;var Ai=Object.getPrototypeOf;var ji=Reflect.get;var Mi=(e,t,o)=>t in e?Pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>(Mi(e,typeof t!="symbol"?t+"":t,o),o),Kt=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var d=(e,t,o)=>(Kt(e,t,"read from private field"),o?o.call(e):t.get(e)),m=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},g=(e,t,o,i)=>(Kt(e,t,"write to private field"),i?i.call(e,o):t.set(e,o),o);var Ut=(e,t,o)=>(Kt(e,t,"access private method"),o),qe=(e,t,o)=>ji(Ai(e),o,t);var{define:rr,h:ar,Component:Xi}=omii,h=class extends Xi{};var Oo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:et,Component:ur,classNames:ko,render:fr}=omii,oe=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:e,key:t},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:t},!0,!0):this.update$Props({activeIndex:e},!0,!0))}async render(e){let t=this.$props,o=e.items??t.items,i=[],s=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,c=a.pane;s.push(et("div",{key:`pane-${a.key??r}`,className:ko("pane",{active:n})},c)),i.push(et("div",{key:`nav-${a.key??r}`,className:ko("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return et("div",{class:"tabs"},et("div",{class:"navs"},i),et("div",{class:"panes"},s))}};l(oe,"css",Oo),l(oe,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(oe,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Re={BUNDLE:"bundle",SINGLE:"single"},tt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:br,h:Lo,Component:vr}=omii,ot=Re.SINGLE,Zt=tt.FILLED,Gt=async(e,t,o)=>{t=t??Zt,t==tt.FILE_TYPE&&(o=Re.BUNDLE);try{if((o??ot)==Re.BUNDLE){let{default:i}=await import(`./icons/${t}.js`);return i[e]}else{let{default:i}=await import(`./icons/${t}/${e}.js`);return i}}catch{console.error("load icon error",e,t)}},Hi=async(e,t,o,i={})=>{let s=await Gt(e,t,o);return Lo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...i},s)},V=class extends h{static useBundleMode(){ot=Re.BUNDLE}static useSingleMode(){ot=Re.SINGLE}static get MODES(){return Re}static get TYPES(){return tt}static get Mode(){return ot}static set Mode(e){ot=e}static get Type(){return Zt}static set Type(e){Zt=e}css(){let{size:e,color:t}=this.$props,o=t||"var(--oi-icon-color)",i=e?`${e}rem`:"var(--oi-icon-width, 1rem)",s=e?`${e}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:e,type:t,viewBox:o}=this.$props,i=await Gt(e,t);return Lo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},i)}};l(V,"updateOnAttributeChanged",!0),l(V,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l(V,"defaultProps",{name:null,type:tt.FILLED,viewBox:24,size:null,color:null}),l(V,"createSvg",Hi),l(V,"loadIcon",Gt),l(V,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var{h:Eo}=omii,qt=async e=>{try{let{default:t}=await import(`./bootstrap/icons/${e}.js`);return t}catch{console.error("load icon error",e,type)}},Wi=async(e,t={})=>{let o=await qt(e);return Eo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...t},o)},A=class extends h{css(){let{size:e,color:t}=this.$props,o=t||"var(--oi-bicon-color)",i=e?`${e}rem`:"var(--oi-bicon-width, 1rem)",s=e?`${e}rem`:"var(--oi-bicon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:e,viewBox:t}=this.$props,o=await qt(e);return Eo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t+" "+t},o)}};l(A,"updateOnAttributeChanged",!0),l(A,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(A,"defaultProps",{name:null,viewBox:24,size:null,color:null}),l(A,"createSvg",Wi),l(A,"loadIcon",qt),l(A,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var Co=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:Tr,h:eo,Component:Or,classNames:_i,render:kr}=omii,to={STAR:"star",HALF:"star_half",BORDER:"star_border"},j,ie=class extends h{constructor(){super(...arguments);m(this,j,-1)}get rateScore(){return this.$props.score}install(){g(this,j,this.$props.score)}rate(t){this.fire("rate",t),g(this,j,t),this.update$Props({score:t})}render(t){let o=this.$props,{maxScore:i,rateable:s,size:r,color:a}=o,n=[],c=d(this,j);for(let p=0;p<i;p++)c-p>=.5?n.push(to.STAR):c-p>0?n.push(to.HALF):n.push(to.BORDER);return eo("div",{class:_i("rate-wrap","rate-"+d(this,j))},n.map((p,f)=>s?eo("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),g(this,j,f+1),this.fire("tryRate",d(this,j)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),g(this,j,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):eo("oi-icon",{name:p,size:r,color:a,className:p})))}};j=new WeakMap,l(ie,"css",Co),l(ie,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(ie,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Io=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:O,classNames:it}=omii,M=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:e,pageSize:t,pageCount:o}=this.$props;return e&&t?Math.ceil(e/t):o}goto(e){let{pageCount:t}=this.$props;(e>=1||e<t)&&(this.update$Props({pageNum:e}),this.fire("paged",e))}render(e){return e.createLayout(e,this)}};l(M,"css",Io),l(M,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:O("oi-icon",{name:"keyboard_arrow_left"}),next:O("oi-icon",{name:"keyboard_arrow_right"}),first:O("oi-icon",{name:"first_page"}),last:O("oi-icon",{name:"last_page"}),createPrev(e,t){let{pageNum:o,prev:i}=e;return O("div",{class:it("prev",{disable:o<=1}),onClick:s=>{o>1&&t.goto(o-1)}},i)},createNext(e,t){let{pageNum:o,next:i}=e,{pageCount:s}=t;return O("div",{class:it("next",{disable:o>=s}),onClick:r=>{s>o&&t.goto(o+1)}},i)},createFirst(e,t){let{first:o,pageNum:i}=e;return O("div",{class:it("first",{disable:i<=1}),onClick:s=>{i!=1&&t.goto(1)}},o)},createLast(e,t){let{last:o,pageNum:i}=e,{pageCount:s}=t;return O("div",{class:it("last",{disable:i>=s}),onClick:r=>{i!=s&&t.goto(s)}},o)},createPages(e,t){let{linksCount:o,pageNum:i}=e,{pageCount:s}=t,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(O("div",{className:it({active:i==p,page:!0}),onClick:f=>{i!=p&&t.goto(p)}},p));return c},createInfo(e,t){let{pageNum:o}=e,{pageCount:i}=t;return O("div",{class:"info"},O("span",{class:"curr"},o),"/",O("span",{class:"total"},i))},createJumper(e,t){return O("div",{class:"jumper"},"\u524D\u5F80",O("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${t.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:t.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>t.pageCount&&(i.value=t.pageCount),s<1&&(i.value=1),s=Number(i.value),t.goto(s)}}),"\u9875")},createLayout(e,t){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:c}=e;return O("div",{class:"pager"},o(e,t),i(e,t),s(e,t),r(e,t),a(e,t),n(e,t),c(e,t))}}),l(M,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var $o=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBS1o7RUFDSTs7QUFFQTtFQUNJO0VBQ0EifQ== */`;var Rt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:Yi,define:Pr,h:Ki,Component:Ar,setTheme:Zi}=omii,io="bootstrap";function Gi(e){io=e,se=new URL(`./${io}/`,import.meta.url).href}var se=new URL(`./${io}/`,import.meta.url).href;function qi(e){se=e}var Qt=(e,t=se)=>fetch(so(e,t)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${e} error`,o)}).catch(o=>(console.error(`load stylesheet ${e} error`,o),null)),es=e=>Qt=e,Vo=(e,t,o=se)=>{let i=Ki("link",{rel:"styleSheet",href:so(e,o)});Yi(i,t??"body")},ts=(e,t=se)=>{Vo("reboot",e,t)},so=(e,t=se)=>{try{return new URL(`./${e}.css`,t).href}catch(o){console.error(o,e,t)}},oo=new Map,Nt=async(e,t=se)=>{let o=`${t}/${e}`,i=oo.get(o);if(i===void 0){let s=[];oo.set(o,s),i=new CSSStyleSheet;try{i.replaceSync(await Qt(e,t)),s.forEach(r=>{r(i)}),oo.set(o,i)}catch(r){console.error("get css stylesheets error",r)}}else if(i instanceof Array)return new Promise(s=>{i.push(s)});return i},y=(...e)=>Promise.all(e.map(t=>Nt(t))),Do={};Rt.forEach(e=>{Object.defineProperty(Do,e,{get:function(){return Nt(e)}})});var os=(e=Rt)=>{e.forEach(t=>{Nt(t)})},is=async(e,t=se)=>{let o=await Qt(`theme.${e}`,t);Zi(o)},C=(e,t,o=1)=>{if(t instanceof Array&&t.length&&typeof o=="number"&&e.classList){let i=0,s=(r=[])=>{let a=i%t.length,{classNames:n,duration:c=0,delay:p=0,callback:f=null}=t[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),e.classList.remove(...r),e.classList.add(...n),f&&f(e,n,c,p)},p*1e3),i++,!(Math.floor(i/t.length)>=o)&&setTimeout(()=>{s(n)},(c+p)*1e3)};s()}},zo={StyleSheets:Rt,CSSStyleSheets:Do,setBaseUrl:qi,setBaseRoot:Gi,loadStyleSheet:Qt,setStyleSheetLoader:es,addStyleSheet:Vo,addRebootStyleSheet:ts,getStyleSheetUrl:so,getCSSStyleSheet:Nt,getCSSStyleSheets:y,useTheme:is,timingClassNames:C,preLoad:os};var{h:S,classNames:st,extractClass:ss}=omii,Je=class extends M{},re=Je;l(re,"css",[()=>y("reboot","pagination","utilities"),$o]),l(re,"defaultProps",{...qe(Je,Je,"defaultProps"),align:"left",createPrev(e,t){let{pageNum:o,prev:i}=e;return S("li",{class:st("page-item",{disabled:o<=1})},S("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{o>1&&t.goto(o-1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"},"<")))},createNext(e,t){let{pageNum:o,next:i}=e,{pageCount:s}=t;return S("li",{class:st("page-item",{disabled:o>=s})},S("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{s>o&&t.goto(o+1),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},">")))},createFirst(e,t){let{first:o,pageNum:i}=e;return S("li",{class:st("page-item",{disabled:i<=1})},S("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{i!=1&&t.goto(1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"}," \xAB")))},createLast(e,t){let{last:o,pageNum:i}=e,{pageCount:s}=t;return S("li",{class:st("page-item",{disabled:i>=s})},S("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{i!=s&&t.goto(s),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\xBB")))},createPages(e,t){let{linksCount:o,pageNum:i}=e,{pageCount:s}=t,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(S("li",{key:`pager-${p}`,className:st("page-item",{active:i==p,page:!0})},S("a",{class:"page-link",href:"#",onClick:f=>{i!=p&&t.goto(p),f.preventDefault(),f.stopPropagation()}},p)));return c},createInfo(e,t){let{pageNum:o}=e,{pageCount:i}=t;return S("li",{class:"info page-item"},S("span",{className:"page-link"},S("span",{class:"curr"},o),"/",S("span",{class:"total"},i)))},createJumper(e,t){return S("li",{class:"jumper page-item"},S("span",{className:"page-link"},"\u524D\u5F80",S("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${t.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:t.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>t.pageCount&&(i.value=t.pageCount),s<1&&(i.value=1),s=Number(i.value),t.goto(s)}}),"\u9875"))},createLayout(e,t){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:c}=e;return S("nav",null,S("ul",{...ss(e,"pagination",{"justify-content-end":e.align=="right","justify-content-center":e.align=="center"})},o(e,t),i(e,t),s(e,t),r(e,t),a(e,t),n(e,t),c(e,t)))}}),l(re,"propTypes",{...qe(Je,Je,"propTypes"),align:String});var Jo=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var Po=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTs7QUFLSTtFQUNJO0VBQ0E7O0FBS1I7RUFDSSJ9 */`;var{h:D,classNames:Tt,define:rs,getHost:as}=omii,rt,ao=class extends h{constructor(){super(...arguments);m(this,rt,!1)}get tree(){return this.props.tree}get checkboxTree(){return this.tree.props.checkboxTree}get radioTree(){return this.tree.props.radioTree}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.props.node??{}}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=as(this);return o instanceof ao?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}get noChildren(){return!this.node.children}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?D("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):D("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?D("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):D("div",{class:"radio-placeholder"}):null}install(){!this.tree.props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}async render(o){let{node:i,cssss:s}=o,r=i.element??i.label??i.key;typeof r=="function"&&(r=await r(i,o,this));let a=null,n=i.children;return typeof n=="function"&&this.expanded&&(n=await n(i,o,this)),n&&this.expanded&&(a=D("div",{class:Tt("children",{expanded:this.expanded})},n instanceof Array?n.map(c=>D("oi-tree-node",{node:c,"node-level":this.level+1,tree:this.tree,cssss:s})):n)),D("div",{class:Tt("node",{expanded:this.expanded,"loading-children":d(this,rt),"no-children":this.noChildren})},D("div",{class:Tt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:c=>{c.stopPropagation(),this.selected&&c.ctrlKey===!0?this.unSelect():this.select()}},D("div",{onClick:c=>{c.stopPropagation(),this.toggle()},class:Tt("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,D("div",{class:"text"},r),d(this,rt)?D("oi-loading",null):null),a)}},Qe=ao;rt=new WeakMap,l(Qe,"css",Po),l(Qe,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),l(Qe,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});rs("oi-tree-node",Qe);var ro=Qe;var{h:no,purgeCSSSS:ns,getHost:ls}=omii;var ae=class extends h{get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}isSelected(e){let{multiSelect:t,selectedKey:o,selectedKeys:i}=this.$props;return t?(i??[]).some(s=>s==e):o!=null&&o==e}select(e,t=!0){let{multiSelect:o,selectedKeys:i}=this.$props;o?i.some(s=>s==e)||i.push(e):this.$props.selectedKey=e,t&&this.update()}unSelect(e,t=!0){let{multiSelect:o,selectedKeys:i}=this.$props;if(!o)this.$props.selectedKey=null;else{let s=i.indexOf(e);s!=-1&&i.splice(s,1)}t&&this.update()}isChecked(e){let{checkboxTree:t,checkedKeys:o}=this.$props;return t?(o??[]).some(i=>i==e):!1}check(e,t=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;o&&i.indexOf(e)==-1&&i.push(e),t&&this.update()}uncheck(e,t=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;if(o){let s=i.indexOf(e);s!=-1&&i.splice(s,1)}t&&this.update()}isRadioed(e){let{radioTree:t,radioedKey:o}=this.$props;return t?o!=null&&o==e:!1}radio(e,t=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=e),t&&this.update()}unradio(e=!0){let{radioTree:t}=this.$props;t&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:t}=this.$props;return(t??[]).some(o=>o==e)}expand(e,t=!0){let{expandedKeys:o}=this.$props;o.indexOf(e)!=-1&&o.push(e),t&&this.update()}collapse(e,t=!0){let{expandedKeys:o}=this.$props,i=o.indexOf(e);i!=-1&&o.splice(i,1),t&&this.update()}render(e){let t=e.nodes??this.$props.nodes,o=ls(this);typeof t=="function"&&(t=t.call(o));let i=ns(this.$props.nodeCss,o);return no(no.f,null,t.map(s=>no("oi-tree-node",{node:s,tree:this,cssss:i})))}};l(ae,"css",Jo),l(ae,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),l(ae,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:ra,classNames:aa}=omii,at,K=class extends h{constructor(){super(...arguments);m(this,at,void 0)}css(){let{size:t,color:o}=this.$props,i="2rem";if(t)i=`${t}rem`;else{let a=this.parentNode?.host??this.parentNode;a?i=`${a.offsetHeight}px`:i="2rem"}let s=`
    :host{
      --oi-loading-size:${i};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,at)}
    ${s}
    ${r}
    `}async render(){let{name:t}=this.$props,{default:{template:o,css:i}}=await import(`./loadings/${t}.js`);return g(this,at,i),o}};at=new WeakMap,l(K,"updateOnAttributeChanged",!0),l(K,"css",`
    :host{
      display:inline-block;
    }
  `),l(K,"defaultProps",{name:"circle",size:null,color:null}),l(K,"propTypes",{name:String,size:Number,color:String});var cs=(e,t=!1)=>(e=e.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),t&&(e=e.replace(/\n/ig,"")),e),ds=e=>{let t=new Date;return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()},ps=e=>{let t=new Date;return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()+1},Ot=e=>{if(!e)return null;let t=e.match(/\.\w+$/);return t?t.toString().toLowerCase():null},kt=e=>{if(!e)return null;let t=e.lastIndexOf(".");return t==-1?e:e.substring(0,t)};var us=["B","KB","MB","GB","TB","PB"],lo=e=>{e=Number.parseInt(e);let t=e,o=0;for(;t>1024;)t/=1024,o++;return t.toFixed(o==0?0:2)+us[o]},fs=(e,t)=>{let o=document.createElement("a");o.download=t,o.href=e,o.target="_blank",o.click()},hs=(e,t)=>{window.chrome.extension?e():t()},Lt=e=>{e.offsetHeight},ms=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],Et=e=>{if(!e)return"file";e=e.toLowerCase();let t=ms.find(o=>o[0].includes(e));return t==null?"file":t[1]};var Ao={tryExtension:hs,downloadUrl:fs,getName:kt,getExtension:Ot,cleanHTML:cs,isToday:ds,isYesterday:ps,formatSize:lo};var Pe={HORIZONTAL:"horizontal",VERTICAL:"vertical"},co="show",Ct="collapse",po="collapsing",gs="collapse-horizontal",uo=.35,fo=(e,t)=>t||(e.classList.contains(gs)?Pe.HORIZONTAL:Pe.VERTICAL),jo={show(e,t=uo,o=null){return new Promise(i=>{o=fo(e,o),C(e,[{classNames:[Ct]},{classNames:[po],duration:t,callback(s){s.style[o==Pe.VERTICAL?"height":"width"]=`${s[o==Pe.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Ct,co],callback(s){s.style[o==Pe.VERTICAL?"height":"width"]="",i()}}])})},hide(e,t=uo,o=null){return new Promise(i=>{o=fo(e,o);let s=o==Pe.VERTICAL?"height":"width";e.style[s]=`${e.getBoundingClientRect()[s]}px`,Lt(e.offsetHeight),C(e,[{classNames:[po,Ct,co]},{classNames:[po],duration:t,callback(r){r.style[s]=""}},{classNames:[Ct],callback:i}])})},toggle(e,t=uo,o=null){return o=fo(e,o),e.classList.contains(co)?this.hide(e,t,o):this.show(e,t,o)}};var nt="fade",ho="show",mo=.15,Mo={show(e,t=mo){return new Promise(o=>{C(e,[{classNames:[nt]},{classNames:[nt,ho],duration:t,callback:o}])})},hide(e,t=mo){return new Promise(o=>{C(e,[{classNames:[nt,ho]},{classNames:[nt],duration:t,callback:o}])})},toggle(e,t=mo){return e.classList.contains(nt)&&!e.classList.contains(ho)?this.show(e,t):this.hide(e,t)}};var B={collapse:jo,fade:Mo};var{h:go,classNames:bs}=omii;var vs="show",lt,ne=class extends h{constructor(){super(...arguments);m(this,lt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(vs),g(this,lt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:t,closeable:o}=this.$props;return d(this,lt)?null:go("div",{className:bs("alert",`alert-${t}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},go("slot",null),o?go("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};lt=new WeakMap,l(ne,"css",()=>y("reboot","utilities","alert","close","transitions")),l(ne,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(ne,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:Ae,classNames:bo}=omii,It={HORIZONTAL:"horizontal",VERTICAL:"vertical"},ys="collapsed",je,$t,le=class extends h{constructor(){super(...arguments);m(this,je)}static get DIRECTIONS(){return It}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:t,alwayOpen:o,firstOpen:i}=this.$props;if(t.length>0&&i&&(t[0].opened=!0),!o){let s=t.filter(r=>r.opened);if(s.length){let r=s.shift();r.opened=!0,s.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==It.HORIZONTAL?WIDTH:HEIGHT}toggle(t){let{items:o,alwayOpen:i}=this.$props;if(i)Ut(this,je,$t).call(this,t);else{let s=o.findIndex(a=>a.opened),r=s==-1?null:o[s];r&&r!=t&&Ut(this,je,$t).call(this,r),Ut(this,je,$t).call(this,t)}}render(){let{items:t,direction:o}=this.$props;return Ae("div",{class:bo("accordion",{"collapse-horizontal":o==It.HORIZONTAL})},t.map((i,s)=>Ae("div",{class:"accordion-item",key:i.key??`item-${s}`},Ae("h2",{class:"accordion-header"},Ae("button",{class:bo("accordion-button",{collapsed:!i.opened}),type:"button","aria-expanded":i.opened,onClick:r=>{this.toggle(i)}},i.header)),Ae("div",{class:bo("accordion-collapse",{collapse:!0,show:i.opened})},Ae("div",{class:"accordion-body"},typeof i.body=="function"?i.body(i,this.$props,this):i.body)))))}};je=new WeakSet,$t=function(t){let{items:o,transitionDuration:i}=this.$props,s=o.indexOf(t),r=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");t.opened=!t.opened,n.classList.toggle(ys,!t.opened),t.opened?(B.collapse.show(a),this.fire("collapseShow",t)):(B.collapse.hide(a),this.fire("collapseHide",t))},l(le,"css",()=>y("reboot","utilities","accordion","close","transitions")),l(le,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:It.VERTICAL}),l(le,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:ct,classNames:Na}=omii,ce=class extends h{css(){let{divider:e}=this.$props;if(typeof e=="string")return`:host{--oi-breadcrumb-divider:'${e}'}`;if(typeof e=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:e,divider:t}=this.$props;return ct("nav",{"aria-label":"breadcrumb"},ct("ol",{class:"breadcrumb"},e.map((o,i)=>i!==e.length-1?ct("li",{class:"breadcrumb-item"},typeof t=="object"&&i!=0?t:null,ct("a",{href:o.href},o.label)):ct("li",{class:"breadcrumb-item active","aria-current":"page"},typeof t=="object"&&i!=0?t:null,o.label))))}};l(ce,"css",()=>y("reboot","utilities","breadcrumb")),l(ce,"defaultProps",{}),l(ce,"propTypes",{});var Xo=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:E,classNames:Ho,extractClass:xs}=omii,de=class extends h{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(e){let t=this.$props;return E(E.f,null,t.visible&&!t.staticPosition&&E("div",{class:Ho("modal-backdrop","fade","show")}),E("div",{...xs(e,"modal",{"position-static":t.staticPosition,"d-block":t.staticPosition||t.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(t.staticBackdrop)return!1;this.close()}}},E("div",{class:Ho("modal-dialog",t.size?`modal-${t.size}`:!1,{"modal-fullscreen":t.fullscreen,"modal-dialog-scrollable":t.scrollable,"modal-dialog-centered":t.vcentered})},E("div",{class:"modal-content"},E("div",{class:"modal-header"},E("slot",{name:"header"},E("h5",{class:"modal-title"},t.title),E("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),E("div",{class:"modal-body"},E("slot",null)),E("div",{class:"modal-footer"},E("slot",{name:"footer"}))))))}};l(de,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),Xo]),l(de,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(de,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function pt(e){return e.split("-")[0]}function Dt(e){return e.split("-")[1]}function ut(e){return["top","bottom"].includes(pt(e))?"x":"y"}function yo(e){return e==="y"?"height":"width"}function Wo(e,t,o){let{reference:i,floating:s}=e,r=i.x+i.width/2-s.width/2,a=i.y+i.height/2-s.height/2,n=ut(t),c=yo(n),p=i[c]/2-s[c]/2,f=n==="x",u;switch(pt(t)){case"top":u={x:r,y:i.y-s.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:a};break;case"left":u={x:i.x-s.width,y:a};break;default:u={x:i.x,y:i.y}}switch(Dt(t)){case"start":u[n]-=p*(o&&f?-1:1);break;case"end":u[n]+=p*(o&&f?-1:1)}return u}var Yo=async(e,t,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(t)),c=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:f}=Wo(c,i,n),u=i,b={},v=0;for(let x=0;x<r.length;x++){let{name:F,fn:U}=r[x],{x:Q,y:k,data:L,reset:R}=await U({x:p,y:f,initialPlacement:i,placement:u,strategy:s,middlewareData:b,rects:c,platform:a,elements:{reference:e,floating:t}});p=Q??p,f=k??f,b={...b,[F]:{...b[F],...L}},R&&v<=50&&(v++,typeof R=="object"&&(R.placement&&(u=R.placement),R.rects&&(c=R.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):R.rects),{x:p,y:f}=Wo(c,u,n)),x=-1)}return{x:p,y:f,placement:u,strategy:s,middlewareData:b}};function Ko(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function dt(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function xo(e,t){var o;t===void 0&&(t={});let{x:i,y:s,platform:r,rects:a,elements:n,strategy:c}=e,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=t,x=Ko(v),F=n[b?u==="floating"?"reference":"floating":u],U=dt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(F)))==null||o?F:F.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:f,strategy:c})),Q=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:i,y:s}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:c}):a[u]);return{top:U.top-Q.top+x.top,bottom:Q.bottom-U.bottom+x.bottom,left:U.left-Q.left+x.left,right:Q.right-U.right+x.right}}var ws=Math.min,Ss=Math.max;function vo(e,t,o){return Ss(e,ws(t,o))}var wo=e=>({name:"arrow",options:e,async fn(t){let{element:o,padding:i=0}=e??{},{x:s,y:r,placement:a,rects:n,platform:c}=t;if(o==null)return{};let p=Ko(i),f={x:s,y:r},u=ut(a),b=Dt(a),v=yo(u),x=await c.getDimensions(o),F=u==="y"?"top":"left",U=u==="y"?"bottom":"right",Q=n.reference[v]+n.reference[u]-f[u]-n.floating[v],k=f[u]-n.reference[u],L=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o)),R=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0;R===0&&(R=n.floating[v]);let Ft=Q/2-k/2,De=p[F],Ze=R-x[v]-p[U],N=R/2-x[v]/2+Ft,$=vo(De,N,Ze),ze=(b==="start"?p[F]:p[U])>0&&N!==$&&n.reference[v]<=n.floating[v];return{[u]:f[u]-(ze?N<De?De-N:Ze-N:0),data:{[u]:$,centerOffset:N-$}}}}),Fs={left:"right",right:"left",bottom:"top",top:"bottom"};function Vt(e){return e.replace(/left|right|bottom|top/g,t=>Fs[t])}function Bs(e,t,o){o===void 0&&(o=!1);let i=Dt(e),s=ut(e),r=yo(s),a=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Vt(a)),{main:a,cross:Vt(a)}}var Us={start:"end",end:"start"};function _o(e){return e.replace(/start|end/g,t=>Us[t])}var Rs=["top","right","bottom","left"],Ja=Rs.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var ft=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o;let{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:n,elements:c}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...x}=e,F=pt(i),U=u||(F===a||!v?[Vt(a)]:function(N){let $=Vt(N);return[_o(N),$,_o($)]}(a)),Q=[a,...U],k=await xo(t,x),L=[],R=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&L.push(k[F]),f){let{main:N,cross:$}=Bs(i,r,await(n.isRTL==null?void 0:n.isRTL(c.floating)));L.push(k[N],k[$])}if(R=[...R,{placement:i,overflows:L}],!L.every(N=>N<=0)){var Ft,De;let N=((Ft=(De=s.flip)==null?void 0:De.index)!=null?Ft:0)+1,$=Q[N];if($)return{data:{index:N,overflows:R},reset:{placement:$}};let ze="bottom";switch(b){case"bestFit":{var Ze;let To=(Ze=R.map(Bt=>[Bt,Bt.overflows.filter(Ge=>Ge>0).reduce((Ge,Ji)=>Ge+Ji,0)]).sort((Bt,Ge)=>Bt[1]-Ge[1])[0])==null?void 0:Ze[0].placement;To&&(ze=To);break}case"initialPlacement":ze=a}if(i!==ze)return{reset:{placement:ze}}}return{}}}};var ht=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){let{x:o,y:i}=t,s=await async function(r,a){let{placement:n,platform:c,elements:p}=r,f=await(c.isRTL==null?void 0:c.isRTL(p.floating)),u=pt(n),b=Dt(n),v=ut(n)==="x",x=["left","top"].includes(u)?-1:1,F=f&&v?-1:1,U=typeof a=="function"?a(r):a,{mainAxis:Q,crossAxis:k,alignmentAxis:L}=typeof U=="number"?{mainAxis:U,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...U};return b&&typeof L=="number"&&(k=b==="end"?-1*L:L),v?{x:k*F,y:Q*x}:{x:Q*x,y:k*F}}(t,e);return{x:o+s.x,y:i+s.y,data:s}}}};function Qs(e){return e==="x"?"y":"x"}var mt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:o,y:i,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:U=>{let{x:Q,y:k}=U;return{x:Q,y:k}}},...c}=e,p={x:o,y:i},f=await xo(t,c),u=ut(pt(s)),b=Qs(u),v=p[u],x=p[b];if(r){let U=u==="y"?"bottom":"right";v=vo(v+f[u==="y"?"top":"left"],v,v-f[U])}if(a){let U=b==="y"?"bottom":"right";x=vo(x+f[b==="y"?"top":"left"],x,x-f[U])}let F=n.fn({...t,[u]:v,[b]:x});return{...F,data:{x:F.x-o,y:F.y-i}}}}};function oi(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function G(e){if(e==null)return window;if(!oi(e)){let t=e.ownerDocument;return t&&t.defaultView||window}return e}function X(e){return G(e).getComputedStyle(e)}function Z(e){return oi(e)?"":e?(e.nodeName||"").toLowerCase():""}function ii(){let e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function H(e){return e instanceof G(e).HTMLElement}function Me(e){return e instanceof G(e).Element}function Xe(e){return typeof ShadowRoot>"u"?!1:e instanceof G(e).ShadowRoot||e instanceof ShadowRoot}function Jt(e){let{overflow:t,overflowX:o,overflowY:i}=X(e);return/auto|scroll|overlay|hidden/.test(t+i+o)}function Ns(e){return["table","td","th"].includes(Z(e))}function Zo(e){let t=/firefox/i.test(ii()),o=X(e);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||t&&o.willChange==="filter"||t&&!!o.filter&&o.filter!=="none"}function si(){return!/^((?!chrome|android).)*safari/i.test(ii())}var Go=Math.min,gt=Math.max,zt=Math.round;function Ne(e,t,o){var i,s,r,a;t===void 0&&(t=!1),o===void 0&&(o=!1);let n=e.getBoundingClientRect(),c=1,p=1;t&&H(e)&&(c=e.offsetWidth>0&&zt(n.width)/e.offsetWidth||1,p=e.offsetHeight>0&&zt(n.height)/e.offsetHeight||1);let f=Me(e)?G(e):window,u=!si()&&o,b=(n.left+(u&&(i=(s=f.visualViewport)==null?void 0:s.offsetLeft)!=null?i:0))/c,v=(n.top+(u&&(r=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/c,F=n.height/p;return{width:x,height:F,top:v,right:b+x,bottom:v+F,left:b,x:b,y:v}}function pe(e){return(t=e,(t instanceof G(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function Pt(e){return Me(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ri(e){return Ne(pe(e)).left+Pt(e).scrollLeft}function Ts(e,t,o){let i=H(t),s=pe(t),r=Ne(e,i&&function(c){let p=Ne(c);return zt(p.width)!==c.offsetWidth||zt(p.height)!==c.offsetHeight}(t),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(i||!i&&o!=="fixed")if((Z(t)!=="body"||Jt(s))&&(a=Pt(t)),H(t)){let c=Ne(t,!0);n.x=c.x+t.clientLeft,n.y=c.y+t.clientTop}else s&&(n.x=ri(s));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function ai(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(Xe(e)?e.host:null)||pe(e)}function qo(e){return H(e)&&X(e).position!=="fixed"?function(t){let{offsetParent:o}=t,i=t,s=!1;for(;i&&i!==o;){let{assignedSlot:r}=i;if(r){let a=r.offsetParent;if(X(r).display==="contents"){let n=r.hasAttribute("style"),c=r.style.display;r.style.display=X(i).display,a=r.offsetParent,r.style.display=c,n||r.removeAttribute("style")}i=r,o!==a&&(o=a,s=!0)}else if(Xe(i)&&i.host&&s)break;i=Xe(i)&&i.host||i.parentNode}return o}(e):null}function So(e){let t=G(e),o=qo(e);for(;o&&Ns(o)&&X(o).position==="static";)o=qo(o);return o&&(Z(o)==="html"||Z(o)==="body"&&X(o).position==="static"&&!Zo(o))?t:o||function(i){let s=ai(i);for(Xe(s)&&(s=s.host);H(s)&&!["html","body"].includes(Z(s));){if(Zo(s))return s;{let r=s.parentNode;s=Xe(r)?r.host:r}}return null}(e)||t}function ei(e){if(H(e))return{width:e.offsetWidth,height:e.offsetHeight};let t=Ne(e);return{width:t.width,height:t.height}}function ni(e){let t=ai(e);return["html","body","#document"].includes(Z(t))?e.ownerDocument.body:H(t)&&Jt(t)?t:ni(t)}function li(e,t){var o;t===void 0&&(t=[]);let i=ni(e),s=i===((o=e.ownerDocument)==null?void 0:o.body),r=G(i),a=s?[r].concat(r.visualViewport||[],Jt(i)?i:[]):i,n=t.concat(a);return s?n:n.concat(li(a))}function ti(e,t,o){return t==="viewport"?dt(function(i,s){let r=G(i),a=pe(i),n=r.visualViewport,c=a.clientWidth,p=a.clientHeight,f=0,u=0;if(n){c=n.width,p=n.height;let b=si();(b||!b&&s==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:c,height:p,x:f,y:u}}(e,o)):Me(t)?function(i,s){let r=Ne(i,!1,s==="fixed"),a=r.top+i.clientTop,n=r.left+i.clientLeft;return{top:a,left:n,x:n,y:a,right:n+i.clientWidth,bottom:a+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(t,o):dt(function(i){var s;let r=pe(i),a=Pt(i),n=(s=i.ownerDocument)==null?void 0:s.body,c=gt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=gt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+ri(i),u=-a.scrollTop;return X(n||r).direction==="rtl"&&(f+=gt(r.clientWidth,n?n.clientWidth:0)-c),{width:c,height:p,x:f,y:u}}(pe(e)))}function Os(e){let t=li(e),o=["absolute","fixed"].includes(X(e).position)&&H(e)?So(e):e;return Me(o)?t.filter(i=>Me(i)&&function(s,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(s.contains(r))return!0;if(a&&Xe(a)){let n=r;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(i,o)&&Z(i)!=="body"):[]}var ks={getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e,r=[...o==="clippingAncestors"?Os(t):[].concat(o),i],a=r[0],n=r.reduce((c,p)=>{let f=ti(t,p,s);return c.top=gt(f.top,c.top),c.right=Go(f.right,c.right),c.bottom=Go(f.bottom,c.bottom),c.left=gt(f.left,c.left),c},ti(t,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:i}=e,s=H(o),r=pe(o);if(o===r)return t;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((s||!s&&i!=="fixed")&&((Z(o)!=="body"||Jt(r))&&(a=Pt(o)),H(o))){let c=Ne(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return{...t,x:t.x-a.scrollLeft+n.x,y:t.y-a.scrollTop+n.y}},isElement:Me,getDimensions:ei,getOffsetParent:So,getDocumentElement:pe,getElementRects:e=>{let{reference:t,floating:o,strategy:i}=e;return{reference:Ts(t,So(o),i),floating:{...ei(o),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>X(e).direction==="rtl"};var At=(e,t,o)=>Yo(e,t,{platform:ks,...o});var ci=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Te,classNames:Za,createRef:Ls}=omii,jt,di,bt,Fo,Oe,W=class extends h{constructor(){super(...arguments);m(this,jt);m(this,bt);l(this,"slotRef",Ls());m(this,Oe,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:t,offset:o,strategy:i}=this.$props,s=d(this,bt,Fo);if(s){let r=this.$(`.${this.type}-arrow`);At(s,this.$element,{strategy:i,placement:t,middleware:[ft(),mt(),ht(o),wo({element:r})]}).then(({x:a,y:n,placement:c,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){g(this,Oe,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){g(this,Oe,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,Oe)?this.hide():this.show()}installed(){let t=d(this,bt,Fo),{triggerShow:o,triggerHide:i}=this.$props;t&&(o.split(" ").forEach(s=>{s&&t.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),i.split(" ").forEach(s=>{s&&t.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),d(this,Oe)&&this.hide()})}))}render(t){let{placement:o,header:i,body:s}=this.$props;return Te(Te.f,null,Te("slot",{ref:this.slotRef,tabIndex:!0}),Te("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Te("div",{class:"popover-arrow"}),Te("slot",{name:"header",class:"popover-header"},i),Te("slot",{class:"popover-body",name:"body"},s)))}};jt=new WeakSet,di=function(){return this.slotRef.current},bt=new WeakSet,Fo=function(){let t=d(this,jt,di).assignedElements();if(t.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return t.at(0)},Oe=new WeakMap,l(W,"css",[()=>y("reboot","utilities","transitions","popover"),ci]),l(W,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(W,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var pi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var Es=async e=>new Promise(t=>{let o=new FileReader;o.readAsDataURL(e),o.onload=i=>{t(i.target.result)}}),Cs=async e=>e.split(";base64,")[1],Is=e=>new Promise(t=>{let o=new Image;o.crossOrigin="anonymous",o.src=e,o.onload=()=>{t(Bo(o))}}),$s=e=>new Promise((t,o)=>{try{fetch(e).then(async i=>{if(i.status==200){let s=new Image,r=await i.blob();s.crossOrigin="anonymous",s.src=URL.createObjectURL(r),s.onload=()=>{URL.revokeObjectURL(s.src),t(ui(s))},s.onerror=a=>{o(a)}}else o(new Error(i.status))})}catch(i){o(i)}}),ui=(e,t="image.png")=>mi(fi(e),t,"image/png"),fi=e=>hi(Bo(e)),Bo=(e,t="image/png",o=.8)=>{let i=document.createElement("canvas"),s=i.getContext("2d");return i.width=e.naturalWidth,i.height=e.naturalHeight,s.drawImage(e,0,0),i.toDataURL(t,o)},hi=e=>{let t=e.split(";base64,"),o=t[0].split(":")[1],i=window.atob(t[1]),s=i.length,r=new Uint8Array(s);for(let a=0;a<s;++a)r[a]=i.charCodeAt(a);return new Blob([r],{type:o})},mi=(e,t,o)=>new File([e],t,{type:o,lastModified:Date.now()}),gi=(e,t,o,i,s,r="image/png",a=.8)=>{let n=i>t?t:i,c=n*o/t;c>s&&(c=s,n=c*t/o);let p=document.createElement("canvas"),f=p.getContext("2d");return p.width=n,p.height=c,f.drawImage(e,0,0,t,o,0,0,n,c),p.toDataURL(r,a)},bi=(e,t,o,i="image/png",s=.8)=>gi(e,e.naturalWidth,e.naturalHeight,t,o,i,s),Vs=async(e,t,o,i="image/png",s=.8)=>new Promise(r=>{let a=new Image;a.src=window.URL.createObjectURL(e),a.onload=()=>{window.URL.revokeObjectURL(a.src),r(bi(a,t,o,i,s))}}),Ds=(e,t=100,o=100,i="image/jpeg",s=.8)=>new Promise((r,a)=>{try{let n=document.createElement("video");n.src=window.URL.createObjectURL(e),n.preload="auto",n.onloadeddata=()=>{r(vi(n,t,o,i,s)),window.URL.revokeObjectURL(n.src)},n.onerror=c=>{window.URL.revokeObjectURL(n.src),a(c)}}catch(n){a(n)}}),vi=(e,t=100,o=100,i="image/jpeg",s=.8)=>gi(e,e.videoWidth,e.videoHeight,t,o,i,s),Uo=e=>{if(!(e instanceof File)||e.type.indexOf("image/")!=0)return null;let t=new Image;return t.src=URL.createObjectURL(e),t.onload=()=>{URL.revokeObjectURL(t.src)},t.src};var yi={convertImageUrlToBase64:Is,createVideoThumb:vi,createVideoFileThumb:Ds,convertImageUrlToFile:$s,convertBase64ToBlob:hi,convertBlobToFile:mi,convertImageToBase64:Bo,convertImageToBlob:fi,convertImageToFile:ui,splitBase64:Cs,readFileAsBase64:Es,createImageFileThumb:Vs,createImageThumb:bi,getPreviewUrl:Uo};var{h:T,classNames:zs}=omii,xi=e=>e?.type?.indexOf("image")==0,Js=e=>xi(e)?(e.url=e.url??Uo(e.file),T("div",{title:e.name,class:"image",style:{backgroundImage:`url(${e.url})`}})):T("div",{className:"file"},T("oi-icon",{"view-box":"1024",name:Et(e.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),T("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},e.name,e.ext)),wi=({component:e})=>{let{files:t,selectText:o,multiple:i}=e.$props;return T("div",{className:"pictures"},T("div",{class:"row row-cols-auto g-4"},t.map((s,r)=>T("div",{className:"col",key:`file-${r}`},T("div",{class:"card",onClick:()=>{e.open(r)}},Js(s),T("div",{className:"actions"},T("div",{class:"position-absolute top-50 start-50 translate-middle"},xi(s)&&T("oi-icon",{name:"search"}),T("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),e.remove(r)}})))))),(i||t.length==0)&&T("div",{className:"col selector-col",key:"selector"},T("div",{class:"card selector"},T("label",{class:zs("selector",{multiple:i}),title:o,onClick:()=>{e.open()}},T("oi-icon",{name:"add"}))))))};var{h:z,classNames:pn}=omii,Si=({component:e})=>{let{files:t,selectText:o,multiple:i}=e.$props;return z("div",{className:"files"},z("slot",{name:"actions"},z("button",{className:"btn btn-primary",onClick:()=>{e.open()}},o)),z("table",{class:"table"},z("tbody",null,t.map(s=>z("tr",null,z("td",null,z("oi-icon",{"view-box":"1024",name:Et(s.ext),type:"file-type"}),s.name,s.ext),z("td",null,lo(s.size)),z("td",null,z("oi-icon",{name:"delete"})))))))};var{h:Mt,classNames:hn}=omii,Ps={pictures:wi,files:Si},Xt={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},ke,ue=class extends h{constructor(){super(...arguments);m(this,ke,-1)}static get STATUS(){return Xt}open(t=-1){g(this,ke,t),this.$("#files").click()}remove(t){this.$props.files?.splice(t,1),this.updateSelf()}select(t){let{multiple:o,files:i,autoUpload:s}=this.$props;if(t?.length==0)return!1;if(o||i.splice(0,i.length),d(this,ke)!=-1&&t.length>=1){let r=Array.from(t).map(a=>({id:null,name:kt(a.name),ext:Ot(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.splice(d(this,ke),1,...r),this.fire("replaced",{index:d(this,ke),replaceFiles:r})}else{let r=Array.from(t).map(a=>({id:null,name:kt(a.name),ext:Ot(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.update()}upload(){let{files:t,action:o,withCredentials:i,headers:s}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of t.filter(a=>a.file&&(!a.status||a.status==Xt.NONE||a.status==Xt.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=i,typeof s=="function"&&(s=s()),typeof s=="object")for(let c in s)n.setRequestHeader(c,s[c]);n.send(a),n.onreadystatechange=function(c){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=Xt.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,c)},n.upload.onprogress=function(c){if(c.lengthComputable){let p=Math.ceil(c.loaded/c.total*100);r.progress=p,this.fire("progress",{file:r,loaded:c.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:t,accept:o,template:i}=this.$props;return Mt(Mt.f,null,Mt("slot",null,Ps[i]),Mt("input",{id:"files",type:"file",multiple:t,accept:o,onChange:s=>{this.select(s.target.files)}}))}};ke=new WeakMap,l(ue,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),pi]),l(ue,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(ue,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Fi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var As="transitionend";var Bi=e=>{e.dispatchEvent(new Event(As))},js=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u");var Ui=e=>{if(!js(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue("visibility")==="visible",o=e.closest("details:not([open])");if(!o)return t;if(o!==e){let i=e.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return t};var{h:I,classNames:Ri,extractClass:Ms}=omii;var Xs="carousel-item-end",Hs="carousel-item-start",Ws="carousel-item-next",_s="carousel-item-prev",Ys=".active",Ks=".carousel-item",On=Ys+Ks,Le,q,vt,he,fe=class extends h{constructor(){super(...arguments);m(this,Le,0);m(this,q,!1);m(this,vt,[]);m(this,he,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,Le)}get isSliding(){return d(this,q)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,q)&&Bi(this),clearInterval(d(this,he)),g(this,he,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(t=!0){if(d(this,q))return!1;let{$activeItem:o,$items:i,$props:{duration:s}}=this,r=i.indexOf(o),a,n;if(t instanceof HTMLElement?(n=t,a=i.indexOf(n),t=a>r):typeof t=="number"?(a=(t+i.length)%i.length,n=i[a],t=a>r):(a=(r+1)%i.length,t||(a=(r-1+i.length)%i.length),n=i[a]),d(this,Le)==a)return!1;let c=t?Hs:Xs,p=t?Ws:_s;g(this,q,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;C(n,[{classNames:[],duration:f},{classNames:[p],callback:()=>{Lt(n)}},{classNames:[p,c],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),C(o,[{classNames:[],duration:f},{classNames:[c,"active"],duration:s},{classNames:[],callback:()=>{g(this,q,!1),g(this,Le,a);let u;for(;u=d(this,vt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Ui(this)&&this.slide()}cycle(){d(this,he)&&clearInterval(d(this,he)),g(this,he,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let t=this.$items;!this.$activeItem&&t.length>0&&t[0].classList.add("active"),g(this,Le,t.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,q)?d(this,vt).push(()=>{this.cycle()}):this.cycle())})}render(t){let{items:o,nextCtrl:i,prevCtrl:s,indicator:r}=this.$props;return I("div",{...Ms(t,"carousel")},I("slot",{class:"carousel-inner"},o.map(a=>I("div",{className:Ri("carousel-item"),waiting:a.attributes?.waiting},a))),I("div",{class:"carousel-indicators"},I("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),I("slot",{name:"actions"},typeof i=="function"&&i(this),typeof s=="function"&&s(this)))}};Le=new WeakMap,q=new WeakMap,vt=new WeakMap,he=new WeakMap,l(fe,"css",[()=>y("reboot","utilities","carousel"),Fi]),l(fe,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:t=>I("button",{class:"carousel-control-prev",type:"button",onClick:o=>{t.slide(!1)}},I("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Previous")),nextCtrl:t=>I("button",{class:"carousel-control-next",type:"button",onClick:o=>{t.slide()}},I("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Next")),indicator:({index:t,host:o})=>I("button",{type:"button",onClick:i=>o.slide(t),class:Ri({active:t==0})})}),l(fe,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Ro,classNames:En,extractClass:Zs}=omii,me=class extends h{css(){}render(e){let{text:t,desc:o,position:i}=this.$props,s=i?i.split("-"):[];return Ro("span",{...Zs(e,"badge",{"position-absolute":i,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":i,"rounded-pill":i})},Ro("slot",null,t),o&&Ro("span",{class:"visually-hidden"},o))}};l(me,"css",()=>y("reboot","utilities","badge")),l(me,"defaultProps",{text:"",desc:!1,position:!1}),l(me,"propTypes",{});var Qi=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:He,classNames:zn,extractClass:Gs}=omii,be,ge=class extends h{constructor(){super(...arguments);m(this,be,!0)}get closed(){return d(this,be)}close(){g(this,be,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){g(this,be,!1),this.update(),B.fade.show(this)}install(){g(this,be,!this.$props.visible)}render(t){return He("div",{...Gs(t,"toast",{show:!d(this,be)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},He("div",{class:"toast-header"},He("slot",{name:"header"}),He("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),He("div",{class:"toast-body"},He("slot",null)))}};be=new WeakMap,l(ge,"css",[()=>y("reboot","utilities","toasts","close"),Qi]),l(ge,"defaultProps",{visible:!1}),l(ge,"propTypes",{visible:Boolean});var{h:Qo,classNames:qs,extractClass:Hn}=omii,ve=class extends h{setValue(e){this.$props.value=value,this.update()}css(){}render(e){let{label:t,value:o,min:i,max:s,showPercent:r,striped:a,animated:n,style:c,className:p}=this.$props;return Qo("div",{class:"progress",style:c},Qo("div",{class:qs("progress-bar",e.class??e.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":t,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":s},r&&Qo("span",null,o,"%")))}};l(ve,"css",()=>y("reboot","utilities","progress")),l(ve,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(ve,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Ni=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:We,classNames:Gn,createRef:qn}=omii,Ht=class extends W{get type(){return"tooltip"}render(e){let{placement:t,body:o}=this.$props;return We(We.f,null,We("slot",{ref:this.slotRef}),We("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":t},We("div",{class:"tooltip-arrow"}),We("slot",{class:"tooltip-inner",name:"body"},o)))}},Ee=Ht;l(Ee,"css",[()=>y("reboot","utilities","transitions","tooltip"),Ni]),l(Ee,"defaultProps",{...qe(Ht,Ht,"defaultProps"),offset:0});var Ti=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:ye,classNames:rl,createRef:_e}=omii,J,ee,P,Ce,Ie,Wt,xe=class extends h{constructor(){super(...arguments);m(this,J,_e());m(this,ee,_e());m(this,P,_e());m(this,Ce,_e());m(this,Ie,_e());m(this,Wt,_e())}close(t,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(d(this,P).current),d(this,ee).current.style.height=this.clientHeight-d(this,J).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(d(this,P).current),d(this,ee).current.style.height=this.clientHeight-d(this,J).current.clientHeight-d(this,P).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(d(this,J).current),d(this,ee).current.style.height=this.clientHeight-d(this,P).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(d(this,J).current),d(this,ee).current.style.height=this.clientHeight-d(this,J).current.scrollHeight-d(this,P).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(d(this,Ce).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(d(this,Ce).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(d(this,Ie).current)}openRight(){this.$props.openRight=!0,B.collapse.show(d(this,Ie).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let t=this.getBoundingClientRect(),o=d(this,J).current.getBoundingClientRect(),i=d(this,P).current.getBoundingClientRect();d(this,ee).current.style.height=t.height-o.height-i.height+"px"}installed(){let{openFooter:t,openHeader:o,openLeft:i,openRight:s}=this.$props;t||(d(this,P).current.style.height=0),o||(d(this,J).current.style.height=0),i||(d(this,Ce).current.style.height=0),s||(d(this,Ie).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(t){return ye(ye.f,null,ye("slot",{name:"header",ref:d(this,J)}),ye("main",{ref:d(this,ee)},ye("slot",{name:"left",ref:d(this,Ce),class:"collapse-horizontal"}),ye("slot",{name:"content",ref:d(this,Wt)}),ye("slot",{name:"right",ref:d(this,Ie),class:"collapse-horizontal"})),ye("slot",{name:"footer",ref:d(this,P)}))}};J=new WeakMap,ee=new WeakMap,P=new WeakMap,Ce=new WeakMap,Ie=new WeakMap,Wt=new WeakMap,l(xe,"css",[Ti]),l(xe,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(xe,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Oi=`
:host {
  display: block;
}
:host oi-loading {
  margin: auto;
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7QUFDQTtFQUNJO0VBQ0EifQ== */`;var{h:yt,classNames:hl,uniqueTag:er}=omii,_,we=class extends h{constructor(){super(...arguments);m(this,_,void 0)}get $module(){return d(this,_)}load(t,o="default",i=yt("oi-loading",{size:"6"}),s=yt("h1",null,"Load Error")){g(this,_,i),t&&o&&import(t).then(r=>{let a=r[o];if(a==null)g(this,_,s);else if(typeof a=="function"){let n=er(a);g(this,_,yt(n,null))}else g(this,_,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",t,o,r),g(this,_,s)})}install(){let{src:t,module:o,loading:i,loadError:s}=this.$props;this.load(t,o,i,s)}render(t){return d(this,_)}};_=new WeakMap,l(we,"css",[Oi]),l(we,"defaultProps",{src:null,module:"default",loading:yt("oi-loading",{size:"6"}),loadError:yt("h1",null,"Load Error")}),l(we,"propTypes",{src:String,module:String});var ki=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Se,classNames:xl,createRef:Li,extractClass:tr}=omii,Y,Fe=class extends h{constructor(){super(...arguments);l(this,"offcanvasRef",Li());l(this,"backdropRef",Li());m(this,Y,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,Y))return;g(this,Y,!0),await this.update(!0,!0);let t=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),t.setAttribute("aria-modal",!0),t.setAttribute("role","dialog");let{duration:o}=this.$props;C(t,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,Y)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,Y))return;g(this,Y,!1);let t=this.offcanvasRef.current;t.blur();let{duration:o}=this.$props;C(t,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{t.removeAttribute("aria-modal"),t.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){g(this,Y,this.$props.visible)}render(t){let{visible:o,placement:i,position:s,title:r,useBackdrop:a}=this.$props;return Se(Se.f,null,Se("div",{ref:this.offcanvasRef,...tr(t,"offcanvas",`offcanvas-${i}`,`position-${s}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Se("div",{class:"offcanvas-header"},Se("slot",{name:"title",class:"offcanvas-title h5"},r),Se("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Se("slot",{class:"offcanvas-body"})),a&&d(this,Y)&&Se("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};Y=new WeakMap,l(Fe,"css",[()=>y("reboot","offcanvas","utilities","close"),ki]),l(Fe,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Fe,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:Ql,classNames:Nl,extractClass:Tl,createRef:Ol}=omii;function Ii(e){let{validity:t}=e;if(t.valid)delete e.dataset.invalid,delete e.dataset.validationMessage;else{let o=[];for(let i in t)i!=="valid"&&t[i]===!0&&o.push(i);e.dataset.invalid=o.join(" "),e.dataset.validationMessage=e.validationMessage}}function Ei(e){let t=e.currentTarget;t.checkValidity(),Ii(e.target),t.classList.add("was-validated")}function $i(e){let t=e.checkValidity();return Array.from(e.elements).forEach(o=>{Ii(o)}),e.classList.add("was-validated"),t}function Ci(e){let t=e.target;t.removeEventListener("input",Ei),t.addEventListener("input",Ei,!1),$i(t)||(e.preventDefault(),e.stopPropagation())}var Ye=class extends HTMLFormElement{static validate(t){t.noValidate=!0,t.removeEventListener("submit",Ci),t.addEventListener("submit",Ci,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return $i(this)}connectedCallback(){this.constructor.validate(this)}};var Vi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBIn0= */`;var{h:_t,classNames:El,createRef:Di}=omii,Ve=null;document.addEventListener("click",e=>{Ve&&Ve.hide()});var xt,wt,te,$e,St,No,Ke,Be=class extends h{constructor(){super(...arguments);m(this,te);m(this,St);m(this,xt,Di());m(this,wt,Di());m(this,Ke,!1)}get $menu(){return d(this,xt).current}setPosition(){let{placement:t,offset:o,strategy:i}=this.$props;At(d(this,St,No),this.$menu,{strategy:i,placement:t,middleware:[ft(),mt(),ht(o)]}).then(({x:s,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${r}px`})})}show(){g(this,Ke,!0),d(this,te,$e).focus(),d(this,te,$e).setAttribute("aria-expanded",!0),d(this,te,$e).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Ve=this,this.setPosition()}hide(){g(this,Ke,!1),d(this,te,$e).classList.remove("show"),d(this,te,$e).setAttribute("aria-expanded","false"),Ve=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,Ke)?this.hide():this.show()}installed(){d(this,St,No).addEventListener("click",t=>{Ve&&Ve!=this&&Ve.hide(),this.toggle(),t.preventDefault(),t.stopPropagation()}),this.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation()})}render(t){let{menu:o}=this.$props;return _t(_t.f,null,_t("slot",{ref:d(this,wt)}),_t("slot",{name:"menu",ref:d(this,xt)},o))}};xt=new WeakMap,wt=new WeakMap,te=new WeakSet,$e=function(){return d(this,wt).current},St=new WeakSet,No=function(){let t=d(this,te,$e).assignedElements();if(t.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return t.at(0)},Ke=new WeakMap,l(Be,"css",[()=>y("reboot","utilities","transitions","dropdown"),Vi]),l(Be,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Be,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var zi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:or,Component:Pl}=omii,Yt,Ue=class extends h{constructor(){super(...arguments);m(this,Yt,void 0)}get value(){return this.editor?.getValue()}set value(t){this.editor?.setValue(t)}installed(){let{codes:t,language:o,automaticLayout:i,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{g(this,Yt,r),this.editor=r.editor.create(this.$(".coder"),{value:t,language:o,automaticLayout:i,fontSize:s,minimap:{enabled:!1}})})}render(){return or("div",{class:"coder"})}};Yt=new WeakMap,l(Ue,"css",[()=>{let t=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",t).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,i=new CSSStyleSheet;return i.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i],fetch(new URL("./monaco/index.css",t).href).then(s=>s.text())},zi]),l(Ue,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(Ue,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var{define:w}=omii;w("oi-rate",ie);w("oi-tab",oe);w("oi-icon",V);w("oi-bi",A);w("oi-pager",M);w("oi-tree",ae);w("oi-loading",K);w("oi-alert",ne);w("oi-accordion",le);w("oi-breadcrumb",ce);w("oi-modal",de);w("oi-popover",W);w("oi-uploader",ue);w("oi-carousel",fe);w("oi-badge",me);w("oi-toast",ge);w("oi-progress",ve);w("oi-tooltip",Ee);w("oi-layout",xe);w("oi-import",we);w("oi-offcanvas",Fe);w("oi-pagination",re);w("oi-dropdown",Be);w("oi-coder",Ue);customElements.define("oi-form",Ye,{extends:"form"});var ir=import.meta.url;omii.ui={utils:Ao,vision:yi,css:zo,effect:B,icon:V,tab:oe,rate:ie,pager:M,tree:ae,treeNode:ro,loading:K,alert:ne,accordion:le,breadcrumb:ce,modal:de,popover:W,uploader:ue,carousel:fe,badge:me,toast:ge,progress:ve,tooltip:Ee,layout:xe,import:we,offcanvas:Fe,pagination:re,form:Ye,dropdown:Be,coder:Ue,importURL:ir};export{le as accordion,ne as alert,A as bicon,ce as breadcrumb,fe as carousel,Ue as coder,zo as css,Be as dropdown,B as effect,Ye as form,V as icon,we as import,ir as importURL,xe as layout,K as loading,de as modal,Fe as offcanvas,M as pager,re as pagination,W as popover,ve as progress,ie as rate,oe as tab,ge as toast,Ee as tooltip,ae as tree,ro as treeNode,ue as uploader,Ao as utils,yi as vision};
//# sourceMappingURL=omii-ui.js.map
