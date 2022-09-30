var $i=Object.defineProperty;var Di=Object.getPrototypeOf;var Vi=Reflect.get;var zi=(t,e,o)=>e in t?$i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var c=(t,e,o)=>(zi(t,typeof e!="symbol"?e+"":e,o),o),Yt=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(Yt(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},g=(t,e,o,i)=>(Yt(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o);var Ve=(t,e,o)=>(Yt(t,e,"access private method"),o),qe=(t,e,o)=>Vi(Di(t),o,e);var{define:qs,h:er,Component:Ji}=omii,h=class extends Ji{};var Qo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcdGFiIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFHSTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS1o7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJOztBQUlSO0VBQ0k7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:et,Component:ar,classNames:To,render:nr}=omii,te=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},!0,!0):this.update$Props({activeIndex:t},!0,!0))}async render(t){let e=this.$props,o=t.items??e.items,i=[],s=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,l=a.pane;s.push(et("div",{key:`pane-${a.key??r}`,className:To("pane",{active:n})},l)),i.push(et("div",{key:`nav-${a.key??r}`,className:To("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return et("div",{class:"tabs"},et("div",{class:"navs"},i),et("div",{class:"panes"},s))}};c(te,"css",Qo),c(te,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),c(te,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Re={BUNDLE:"bundle",SINGLE:"single"},tt={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:pr,h:Oo,Component:ur}=omii,ot=Re.SINGLE,Zt=tt.FILLED,Kt=async(t,e,o)=>{e=e??Zt,e==tt.FILE_TYPE&&(o=Re.BUNDLE);try{if((o??ot)==Re.BUNDLE){let{default:i}=await import(`./icons/${e}.js`);return i[t]}else{let{default:i}=await import(`./icons/${e}/${t}.js`);return i}}catch{console.error("load icon error",t,e)}},Pi=async(t,e,o,i={})=>{let s=await Kt(t,e,o);return Oo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...i},s)},D=class extends h{static useBundleMode(){ot=Re.BUNDLE}static useSingleMode(){ot=Re.SINGLE}static get MODES(){return Re}static get TYPES(){return tt}static get Mode(){return ot}static set Mode(t){ot=t}static get Type(){return Zt}static set Type(t){Zt=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",i=t?`${t}rem`:"var(--oi-icon-width, 1rem)",s=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,i=await Kt(t,e);return Oo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},i)}};c(D,"updateOnAttributeChanged",!0),c(D,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),c(D,"defaultProps",{name:null,type:tt.FILLED,viewBox:24,size:null,color:null}),c(D,"createSvg",Pi),c(D,"loadIcon",Kt),c(D,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var ko=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xccmF0ZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSztFQUNJIn0= */`;var{define:xr,h:Gt,Component:Sr,classNames:Ai,render:wr}=omii,qt={STAR:"star",HALF:"star_half",BORDER:"star_border"},J,oe=class extends h{constructor(){super(...arguments);m(this,J,-1)}get rateScore(){return this.$props.score}install(){g(this,J,this.$props.score)}rate(e){this.fire("rate",e),g(this,J,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:i,rateable:s,size:r,color:a}=o,n=[],l=d(this,J);for(let p=0;p<i;p++)l-p>=.5?n.push(qt.STAR):l-p>0?n.push(qt.HALF):n.push(qt.BORDER);return Gt("div",{class:Ai("rate-wrap","rate-"+d(this,J))},n.map((p,f)=>s?Gt("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),g(this,J,f+1),this.fire("tryRate",d(this,J)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),g(this,J,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):Gt("oi-icon",{name:p,size:r,color:a,className:p})))}};J=new WeakMap,c(oe,"css",ko),c(oe,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),c(oe,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Lo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xccGFnZXIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7O0FBR0o7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUtKO0FBQUE7QUFBQTtBQUFBO0VBU0k7O0FBTEE7QUFBQTtBQUFBO0FBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFDQTtFQUNJOztBQUlSO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQU1SO0VBQ0k7RUFDQTs7QUFJSjtFQUNJO0VBQ0EifQ== */`;var{h:O,classNames:it}=omii,P=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return t&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};c(P,"css",Lo),c(P,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:O("oi-icon",{name:"keyboard_arrow_left"}),next:O("oi-icon",{name:"keyboard_arrow_right"}),first:O("oi-icon",{name:"first_page"}),last:O("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:i}=t;return O("div",{class:it("prev",{disable:o<=1}),onClick:s=>{o>1&&e.goto(o-1)}},i)},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return O("div",{class:it("next",{disable:o>=s}),onClick:r=>{s>o&&e.goto(o+1)}},i)},createFirst(t,e){let{first:o,pageNum:i}=t;return O("div",{class:it("first",{disable:i<=1}),onClick:s=>{i!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return O("div",{class:it("last",{disable:i>=s}),onClick:r=>{i!=s&&e.goto(s)}},o)},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let l=[];a<1&&(a=1);for(let p=a;p<=n;p++)l.push(O("div",{className:it({active:i==p,page:!0}),onClick:f=>{i!=p&&e.goto(p)}},p));return l},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return O("div",{class:"info"},O("span",{class:"curr"},o),"/",O("span",{class:"total"},i))},createJumper(t,e){return O("div",{class:"jumper"},"\u524D\u5F80",O("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:l}=t;return O("div",{class:"pager"},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),l(t,e))}}),c(P,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var Eo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xccGFnaW5hdGlvbiIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJOztBQUNBO0VBQ0k7OztBQUtaO0VBQ0k7O0FBRUE7RUFDSTtFQUNBIn0= */`;var Nt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:ji,define:Lr,h:Mi,Component:Er,setTheme:Hi}=omii,to="bootstrap";function Xi(t){to=t,ie=new URL(`./${to}/`,import.meta.url).href}var ie=new URL(`./${to}/`,import.meta.url).href;function Wi(t){ie=t}var Rt=(t,e=ie)=>fetch(oo(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),_i=t=>Rt=t,Co=(t,e,o=ie)=>{let i=Mi("link",{rel:"styleSheet",href:oo(t,o)});ji(i,e??"body")},Yi=(t,e=ie)=>{Co("reboot",t,e)},oo=(t,e=ie)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},eo=new Map,Ut=async(t,e=ie)=>{let o=`${e}/${t}`,i=eo.get(o);if(i===void 0){let s=[];eo.set(o,s),i=new CSSStyleSheet;try{i.replaceSync(await Rt(t,e)),s.forEach(r=>{r(i)}),eo.set(o,i)}catch(r){console.error("get css stylesheets error",r)}}else if(i instanceof Array)return new Promise(s=>{i.push(s)});return i},y=(...t)=>Promise.all(t.map(e=>Ut(e))),Io={};Nt.forEach(t=>{Object.defineProperty(Io,t,{get:function(){return Ut(t)}})});var Zi=(t=Nt)=>{t.forEach(e=>{Ut(e)})},Ki=async(t,e=ie)=>{let o=await Rt(`theme.${t}`,e);Hi(o)},C=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let i=0,s=(r=[])=>{let a=i%e.length,{classNames:n,duration:l=0,delay:p=0,callback:f=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),f&&f(t,n,l,p)},p*1e3),i++,!(Math.floor(i/e.length)>=o)&&setTimeout(()=>{s(n)},(l+p)*1e3)};s()}},$o={StyleSheets:Nt,CSSStyleSheets:Io,setBaseUrl:Wi,setBaseRoot:Xi,loadStyleSheet:Rt,setStyleSheetLoader:_i,addStyleSheet:Co,addRebootStyleSheet:Yi,getStyleSheetUrl:oo,getCSSStyleSheet:Ut,getCSSStyleSheets:y,useTheme:Ki,timingClassNames:C,preLoad:Zi};var{h:S,classNames:st,extractClass:Gi}=omii,ze=class extends P{},se=ze;c(se,"css",[()=>y("reboot","pagination","utilities"),Eo]),c(se,"defaultProps",{...qe(ze,ze,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:i}=t;return S("li",{class:st("page-item",{disabled:o<=1})},S("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{o>1&&e.goto(o-1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"},"<")))},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return S("li",{class:st("page-item",{disabled:o>=s})},S("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{s>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},">")))},createFirst(t,e){let{first:o,pageNum:i}=t;return S("li",{class:st("page-item",{disabled:i<=1})},S("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{i!=1&&e.goto(1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return S("li",{class:st("page-item",{disabled:i>=s})},S("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{i!=s&&e.goto(s),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let l=[];a<1&&(a=1);for(let p=a;p<=n;p++)l.push(S("li",{key:`pager-${p}`,className:st("page-item",{active:i==p,page:!0})},S("a",{class:"page-link",href:"#",onClick:f=>{i!=p&&e.goto(p),f.preventDefault(),f.stopPropagation()}},p)));return l},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return S("li",{class:"info page-item"},S("span",{className:"page-link"},S("span",{class:"curr"},o),"/",S("span",{class:"total"},i)))},createJumper(t,e){return S("li",{class:"jumper page-item"},S("span",{className:"page-link"},"\u524D\u5F80",S("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:l}=t;return S("nav",null,S("ul",{...Gi(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),l(t,e)))}}),c(se,"propTypes",{...qe(ze,ze,"propTypes"),align:String});var Do=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcdHJlZSIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJIn0= */`;var Vo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcdHJlZSIsInNvdXJjZXMiOlsibm9kZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUlKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtBQUFBO0VBRUk7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUlSO0VBQ0k7O0FBS0k7RUFDSTtFQUNBOztBQUtSO0VBQ0kifQ== */`;var{h:V,classNames:Ft,define:qi,getHost:es}=omii,rt,so=class extends h{constructor(){super(...arguments);m(this,rt,!1)}get tree(){return this.props.tree}get checkboxTree(){return this.tree.props.checkboxTree}get radioTree(){return this.tree.props.radioTree}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.props.node??{}}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=es(this);return o instanceof so?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}get noChildren(){return!this.node.children}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?V("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):V("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?V("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):V("div",{class:"radio-placeholder"}):null}install(){!this.tree.props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}async render(o){let{node:i,cssss:s}=o,r=i.element??i.label??i.key;typeof r=="function"&&(r=await r(i,o,this));let a=null,n=i.children;return typeof n=="function"&&this.expanded&&(n=await n(i,o,this)),n&&this.expanded&&(a=V("div",{class:Ft("children",{expanded:this.expanded})},n instanceof Array?n.map(l=>V("oi-tree-node",{node:l,"node-level":this.level+1,tree:this.tree,cssss:s})):n)),V("div",{class:Ft("node",{expanded:this.expanded,"loading-children":d(this,rt),"no-children":this.noChildren})},V("div",{class:Ft("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:l=>{l.stopPropagation(),this.selected&&l.ctrlKey===!0?this.unSelect():this.select()}},V("div",{onClick:l=>{l.stopPropagation(),this.toggle()},class:Ft("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,V("div",{class:"text"},r),d(this,rt)?V("oi-loading",null):null),a)}},Ue=so;rt=new WeakMap,c(Ue,"css",Vo),c(Ue,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),c(Ue,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});qi("oi-tree-node",Ue);var io=Ue;var{h:ro,purgeCSSSS:ts,getHost:os}=omii;var re=class extends h{get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}isSelected(t){let{multiSelect:e,selectedKey:o,selectedKeys:i}=this.$props;return e?(i??[]).some(s=>s==t):o!=null&&o==t}select(t,e=!0){let{multiSelect:o,selectedKeys:i}=this.$props;o?i.some(s=>s==t)||i.push(t):this.$props.selectedKey=t,e&&this.update()}unSelect(t,e=!0){let{multiSelect:o,selectedKeys:i}=this.$props;if(!o)this.$props.selectedKey=null;else{let s=i.indexOf(t);s!=-1&&i.splice(s,1)}e&&this.update()}isChecked(t){let{checkboxTree:e,checkedKeys:o}=this.$props;return e?(o??[]).some(i=>i==t):!1}check(t,e=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;o&&i.indexOf(t)==-1&&i.push(t),e&&this.update()}uncheck(t,e=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;if(o){let s=i.indexOf(t);s!=-1&&i.splice(s,1)}e&&this.update()}isRadioed(t){let{radioTree:e,radioedKey:o}=this.$props;return e?o!=null&&o==t:!1}radio(t,e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=t),e&&this.update()}unradio(t=!0){let{radioTree:e}=this.$props;e&&(this.$props.radioedKey=null),t&&this.update()}isExpanded(t){let{expandedKeys:e}=this.$props;return(e??[]).some(o=>o==t)}expand(t,e=!0){let{expandedKeys:o}=this.$props;o.indexOf(t)!=-1&&o.push(t),e&&this.update()}collapse(t,e=!0){let{expandedKeys:o}=this.$props,i=o.indexOf(t);i!=-1&&o.splice(i,1),e&&this.update()}render(t){let e=t.nodes??this.$props.nodes,o=ts(this.$props.nodeCss,os(this));return ro(ro.f,null,e.map(i=>ro("oi-tree-node",{node:i,tree:this,cssss:o})))}};c(re,"css",Do),c(re,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),c(re,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:Zr,classNames:Kr}=omii,at,_=class extends h{constructor(){super(...arguments);m(this,at,void 0)}css(){let{size:e,color:o}=this.$props,i="2rem";if(e)i=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?i=`${a.offsetHeight}px`:i="2rem"}let s=`
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
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:i}}=await import(`./loadings/${e}.js`);return g(this,at,i),o}};at=new WeakMap,c(_,"updateOnAttributeChanged",!0),c(_,"css",`
    :host{
      display:inline-block;
    }
  `),c(_,"defaultProps",{name:"circle",size:null,color:null}),c(_,"propTypes",{name:String,size:Number,color:String});var is=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),ss=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},rs=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},Qt=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Tt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var as=["B","KB","MB","GB","TB","PB"],ao=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+as[o]},ns=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},ls=(t,e)=>{window.chrome.extension?t():e()},Ot=t=>{t.offsetHeight},cs=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],kt=t=>{if(!t)return"file";t=t.toLowerCase();let e=cs.find(o=>o[0].includes(t));return e==null?"file":e[1]};var zo={tryExtension:ls,downloadUrl:ns,getName:Tt,getExtension:Qt,cleanHTML:is,isToday:ss,isYesterday:rs,formatSize:ao};var Je={HORIZONTAL:"horizontal",VERTICAL:"vertical"},no="show",Lt="collapse",lo="collapsing",ds="collapse-horizontal",co=.35,po=(t,e)=>e||(t.classList.contains(ds)?Je.HORIZONTAL:Je.VERTICAL),Jo={show(t,e=co,o=null){return new Promise(i=>{o=po(t,o),C(t,[{classNames:[Lt]},{classNames:[lo],duration:e,callback(s){s.style[o==Je.VERTICAL?"height":"width"]=`${s[o==Je.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[Lt,no],callback(s){s.style[o==Je.VERTICAL?"height":"width"]="",i()}}])})},hide(t,e=co,o=null){return new Promise(i=>{o=po(t,o);let s=o==Je.VERTICAL?"height":"width";t.style[s]=`${t.getBoundingClientRect()[s]}px`,Ot(t.offsetHeight),C(t,[{classNames:[lo,Lt,no]},{classNames:[lo],duration:e,callback(r){r.style[s]=""}},{classNames:[Lt],callback:i}])})},toggle(t,e=co,o=null){return o=po(t,o),t.classList.contains(no)?this.hide(t,e,o):this.show(t,e,o)}};var nt="fade",uo="show",fo=.15,Po={show(t,e=fo){return new Promise(o=>{C(t,[{classNames:[nt]},{classNames:[nt,uo],duration:e,callback:o}])})},hide(t,e=fo){return new Promise(o=>{C(t,[{classNames:[nt,uo]},{classNames:[nt],duration:e,callback:o}])})},toggle(t,e=fo){return t.classList.contains(nt)&&!t.classList.contains(uo)?this.show(t,e):this.hide(t,e)}};var N={collapse:Jo,fade:Po};var{h:ho,classNames:ps}=omii;var us="show",lt,ae=class extends h{constructor(){super(...arguments);m(this,lt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(us),g(this,lt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return d(this,lt)?null:ho("div",{className:ps("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},ho("slot",null),o?ho("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};lt=new WeakMap,c(ae,"css",()=>y("reboot","utilities","alert","close","transitions")),c(ae,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),c(ae,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:Pe,classNames:mo}=omii,Et={HORIZONTAL:"horizontal",VERTICAL:"vertical"},fs="collapsed",Ae,Ct,ne=class extends h{constructor(){super(...arguments);m(this,Ae)}static get DIRECTIONS(){return Et}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:i}=this.$props;if(e.length>0&&i&&(e[0].opened=!0),!o){let s=e.filter(r=>r.opened);if(s.length){let r=s.shift();r.opened=!0,s.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==Et.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:i}=this.$props;if(i)Ve(this,Ae,Ct).call(this,e);else{let s=o.findIndex(a=>a.opened),r=s==-1?null:o[s];r&&r!=e&&Ve(this,Ae,Ct).call(this,r),Ve(this,Ae,Ct).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return Pe("div",{class:mo("accordion",{"collapse-horizontal":o==Et.HORIZONTAL})},e.map((i,s)=>Pe("div",{class:"accordion-item",key:i.key??`item-${s}`},Pe("h2",{class:"accordion-header"},Pe("button",{class:mo("accordion-button",{collapsed:!i.opened}),type:"button","aria-expanded":i.opened,onClick:r=>{this.toggle(i)}},i.header)),Pe("div",{class:mo("accordion-collapse",{collapse:!0,show:i.opened})},Pe("div",{class:"accordion-body"},typeof i.body=="function"?i.body(i,this.$props,this):i.body)))))}};Ae=new WeakSet,Ct=function(e){let{items:o,transitionDuration:i}=this.$props,s=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(fs,!e.opened),e.opened?(N.collapse.show(a),this.fire("collapseShow",e)):(N.collapse.hide(a),this.fire("collapseHide",e))},c(ne,"css",()=>y("reboot","utilities","accordion","close","transitions")),c(ne,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:Et.VERTICAL}),c(ne,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:ct,classNames:ya}=omii,le=class extends h{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return ct("nav",{"aria-label":"breadcrumb"},ct("ol",{class:"breadcrumb"},t.map((o,i)=>i!==t.length-1?ct("li",{class:"breadcrumb-item"},typeof e=="object"&&i!=0?e:null,ct("a",{href:o.href},o.label)):ct("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&i!=0?e:null,o.label))))}};c(le,"css",()=>y("reboot","utilities","breadcrumb")),c(le,"defaultProps",{}),c(le,"propTypes",{});var Ao=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcbW9kYWwiLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9 */`;var{h:E,classNames:jo,extractClass:hs}=omii,ce=class extends h{open(){this.update$Props({visible:!0}),this.fire("open")}close(){N.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return E(E.f,null,e.visible&&!e.staticPosition&&E("div",{class:jo("modal-backdrop","fade","show")}),E("div",{...hs(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},E("div",{class:jo("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},E("div",{class:"modal-content"},E("div",{class:"modal-header"},E("slot",{name:"header"},E("h5",{class:"modal-title"},e.title),E("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),E("div",{class:"modal-body"},E("slot",null)),E("div",{class:"modal-footer"},E("slot",{name:"footer"}))))))}};c(ce,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),Ao]),c(ce,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),c(ce,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function pt(t){return t.split("-")[0]}function $t(t){return t.split("-")[1]}function ut(t){return["top","bottom"].includes(pt(t))?"x":"y"}function bo(t){return t==="y"?"height":"width"}function Mo(t,e,o){let{reference:i,floating:s}=t,r=i.x+i.width/2-s.width/2,a=i.y+i.height/2-s.height/2,n=ut(e),l=bo(n),p=i[l]/2-s[l]/2,f=n==="x",u;switch(pt(e)){case"top":u={x:r,y:i.y-s.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:a};break;case"left":u={x:i.x-s.width,y:a};break;default:u={x:i.x,y:i.y}}switch($t(e)){case"start":u[n]-=p*(o&&f?-1:1);break;case"end":u[n]+=p*(o&&f?-1:1)}return u}var Xo=async(t,e,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),l=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:p,y:f}=Mo(l,i,n),u=i,b={},v=0;for(let x=0;x<r.length;x++){let{name:B,fn:R}=r[x],{x:F,y:k,data:L,reset:U}=await R({x:p,y:f,initialPlacement:i,placement:u,strategy:s,middlewareData:b,rects:l,platform:a,elements:{reference:t,floating:e}});p=F??p,f=k??f,b={...b,[B]:{...b[B],...L}},U&&v<=50&&(v++,typeof U=="object"&&(U.placement&&(u=U.placement),U.rects&&(l=U.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):U.rects),{x:p,y:f}=Mo(l,u,n)),x=-1)}return{x:p,y:f,placement:u,strategy:s,middlewareData:b}};function Wo(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function dt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function vo(t,e){var o;e===void 0&&(e={});let{x:i,y:s,platform:r,rects:a,elements:n,strategy:l}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=e,x=Wo(v),B=n[b?u==="floating"?"reference":"floating":u],R=dt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(B)))==null||o?B:B.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:f,strategy:l})),F=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:i,y:s}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:l}):a[u]);return{top:R.top-F.top+x.top,bottom:F.bottom-R.bottom+x.bottom,left:R.left-F.left+x.left,right:F.right-R.right+x.right}}var ms=Math.min,gs=Math.max;function go(t,e,o){return gs(t,ms(e,o))}var yo=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:i=0}=t??{},{x:s,y:r,placement:a,rects:n,platform:l}=e;if(o==null)return{};let p=Wo(i),f={x:s,y:r},u=ut(a),b=$t(a),v=bo(u),x=await l.getDimensions(o),B=u==="y"?"top":"left",R=u==="y"?"bottom":"right",F=n.reference[v]+n.reference[u]-f[u]-n.floating[v],k=f[u]-n.reference[u],L=await(l.getOffsetParent==null?void 0:l.getOffsetParent(o)),U=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0;U===0&&(U=n.floating[v]);let wt=F/2-k/2,$e=p[B],Ke=U-x[v]-p[R],Q=U/2-x[v]/2+wt,$=go($e,Q,Ke),De=(b==="start"?p[B]:p[R])>0&&Q!==$&&n.reference[v]<=n.floating[v];return{[u]:f[u]-(De?Q<$e?$e-Q:Ke-Q:0),data:{[u]:$,centerOffset:Q-$}}}}),bs={left:"right",right:"left",bottom:"top",top:"bottom"};function It(t){return t.replace(/left|right|bottom|top/g,e=>bs[e])}function vs(t,e,o){o===void 0&&(o=!1);let i=$t(t),s=ut(t),r=bo(s),a=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=It(a)),{main:a,cross:It(a)}}var ys={start:"end",end:"start"};function Ho(t){return t.replace(/start|end/g,e=>ys[e])}var xs=["top","right","bottom","left"],ka=xs.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var ft=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:n,elements:l}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...x}=t,B=pt(i),R=u||(B===a||!v?[It(a)]:function(Q){let $=It(Q);return[Ho(Q),$,Ho($)]}(a)),F=[a,...R],k=await vo(e,x),L=[],U=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&L.push(k[B]),f){let{main:Q,cross:$}=vs(i,r,await(n.isRTL==null?void 0:n.isRTL(l.floating)));L.push(k[Q],k[$])}if(U=[...U,{placement:i,overflows:L}],!L.every(Q=>Q<=0)){var wt,$e;let Q=((wt=($e=s.flip)==null?void 0:$e.index)!=null?wt:0)+1,$=F[Q];if($)return{data:{index:Q,overflows:U},reset:{placement:$}};let De="bottom";switch(b){case"bestFit":{var Ke;let Fo=(Ke=U.map(Bt=>[Bt,Bt.overflows.filter(Ge=>Ge>0).reduce((Ge,Ii)=>Ge+Ii,0)]).sort((Bt,Ge)=>Bt[1]-Ge[1])[0])==null?void 0:Ke[0].placement;Fo&&(De=Fo);break}case"initialPlacement":De=a}if(i!==De)return{reset:{placement:De}}}return{}}}};var ht=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:i}=e,s=await async function(r,a){let{placement:n,platform:l,elements:p}=r,f=await(l.isRTL==null?void 0:l.isRTL(p.floating)),u=pt(n),b=$t(n),v=ut(n)==="x",x=["left","top"].includes(u)?-1:1,B=f&&v?-1:1,R=typeof a=="function"?a(r):a,{mainAxis:F,crossAxis:k,alignmentAxis:L}=typeof R=="number"?{mainAxis:R,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...R};return b&&typeof L=="number"&&(k=b==="end"?-1*L:L),v?{x:k*B,y:F*x}:{x:F*x,y:k*B}}(e,t);return{x:o+s.x,y:i+s.y,data:s}}}};function Ss(t){return t==="x"?"y":"x"}var mt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:R=>{let{x:F,y:k}=R;return{x:F,y:k}}},...l}=t,p={x:o,y:i},f=await vo(e,l),u=ut(pt(s)),b=Ss(u),v=p[u],x=p[b];if(r){let R=u==="y"?"bottom":"right";v=go(v+f[u==="y"?"top":"left"],v,v-f[R])}if(a){let R=b==="y"?"bottom":"right";x=go(x+f[b==="y"?"top":"left"],x,x-f[R])}let B=n.fn({...e,[u]:v,[b]:x});return{...B,data:{x:B.x-o,y:B.y-i}}}}};function qo(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function Z(t){if(t==null)return window;if(!qo(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function A(t){return Z(t).getComputedStyle(t)}function Y(t){return qo(t)?"":t?(t.nodeName||"").toLowerCase():""}function ei(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function j(t){return t instanceof Z(t).HTMLElement}function je(t){return t instanceof Z(t).Element}function Me(t){return typeof ShadowRoot>"u"?!1:t instanceof Z(t).ShadowRoot||t instanceof ShadowRoot}function Vt(t){let{overflow:e,overflowX:o,overflowY:i}=A(t);return/auto|scroll|overlay|hidden/.test(e+i+o)}function ws(t){return["table","td","th"].includes(Y(t))}function _o(t){let e=/firefox/i.test(ei()),o=A(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function ti(){return!/^((?!chrome|android).)*safari/i.test(ei())}var Yo=Math.min,gt=Math.max,Dt=Math.round;function Fe(t,e,o){var i,s,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),l=1,p=1;e&&j(t)&&(l=t.offsetWidth>0&&Dt(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&Dt(n.height)/t.offsetHeight||1);let f=je(t)?Z(t):window,u=!ti()&&o,b=(n.left+(u&&(i=(s=f.visualViewport)==null?void 0:s.offsetLeft)!=null?i:0))/l,v=(n.top+(u&&(r=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/l,B=n.height/p;return{width:x,height:B,top:v,right:b+x,bottom:v+B,left:b,x:b,y:v}}function de(t){return(e=t,(e instanceof Z(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function zt(t){return je(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function oi(t){return Fe(de(t)).left+zt(t).scrollLeft}function Bs(t,e,o){let i=j(e),s=de(e),r=Fe(t,i&&function(l){let p=Fe(l);return Dt(p.width)!==l.offsetWidth||Dt(p.height)!==l.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(i||!i&&o!=="fixed")if((Y(e)!=="body"||Vt(s))&&(a=zt(e)),j(e)){let l=Fe(e,!0);n.x=l.x+e.clientLeft,n.y=l.y+e.clientTop}else s&&(n.x=oi(s));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function ii(t){return Y(t)==="html"?t:t.assignedSlot||t.parentNode||(Me(t)?t.host:null)||de(t)}function Zo(t){return j(t)&&A(t).position!=="fixed"?function(e){let{offsetParent:o}=e,i=e,s=!1;for(;i&&i!==o;){let{assignedSlot:r}=i;if(r){let a=r.offsetParent;if(A(r).display==="contents"){let n=r.hasAttribute("style"),l=r.style.display;r.style.display=A(i).display,a=r.offsetParent,r.style.display=l,n||r.removeAttribute("style")}i=r,o!==a&&(o=a,s=!0)}else if(Me(i)&&i.host&&s)break;i=Me(i)&&i.host||i.parentNode}return o}(t):null}function xo(t){let e=Z(t),o=Zo(t);for(;o&&ws(o)&&A(o).position==="static";)o=Zo(o);return o&&(Y(o)==="html"||Y(o)==="body"&&A(o).position==="static"&&!_o(o))?e:o||function(i){let s=ii(i);for(Me(s)&&(s=s.host);j(s)&&!["html","body"].includes(Y(s));){if(_o(s))return s;{let r=s.parentNode;s=Me(r)?r.host:r}}return null}(t)||e}function Ko(t){if(j(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Fe(t);return{width:e.width,height:e.height}}function si(t){let e=ii(t);return["html","body","#document"].includes(Y(e))?t.ownerDocument.body:j(e)&&Vt(e)?e:si(e)}function ri(t,e){var o;e===void 0&&(e=[]);let i=si(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=Z(i),a=s?[r].concat(r.visualViewport||[],Vt(i)?i:[]):i,n=e.concat(a);return s?n:n.concat(ri(a))}function Go(t,e,o){return e==="viewport"?dt(function(i,s){let r=Z(i),a=de(i),n=r.visualViewport,l=a.clientWidth,p=a.clientHeight,f=0,u=0;if(n){l=n.width,p=n.height;let b=ti();(b||!b&&s==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:l,height:p,x:f,y:u}}(t,o)):je(e)?function(i,s){let r=Fe(i,!1,s==="fixed"),a=r.top+i.clientTop,n=r.left+i.clientLeft;return{top:a,left:n,x:n,y:a,right:n+i.clientWidth,bottom:a+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(e,o):dt(function(i){var s;let r=de(i),a=zt(i),n=(s=i.ownerDocument)==null?void 0:s.body,l=gt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=gt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+oi(i),u=-a.scrollTop;return A(n||r).direction==="rtl"&&(f+=gt(r.clientWidth,n?n.clientWidth:0)-l),{width:l,height:p,x:f,y:u}}(de(t)))}function Ns(t){let e=ri(t),o=["absolute","fixed"].includes(A(t).position)&&j(t)?xo(t):t;return je(o)?e.filter(i=>je(i)&&function(s,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(s.contains(r))return!0;if(a&&Me(a)){let n=r;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(i,o)&&Y(i)!=="body"):[]}var Rs={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t,r=[...o==="clippingAncestors"?Ns(e):[].concat(o),i],a=r[0],n=r.reduce((l,p)=>{let f=Go(e,p,s);return l.top=gt(f.top,l.top),l.right=Yo(f.right,l.right),l.bottom=Yo(f.bottom,l.bottom),l.left=gt(f.left,l.left),l},Go(e,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t,s=j(o),r=de(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((s||!s&&i!=="fixed")&&((Y(o)!=="body"||Vt(r))&&(a=zt(o)),j(o))){let l=Fe(o,!0);n.x=l.x+o.clientLeft,n.y=l.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:je,getDimensions:Ko,getOffsetParent:xo,getDocumentElement:de,getElementRects:t=>{let{reference:e,floating:o,strategy:i}=t;return{reference:Bs(e,xo(o),i),floating:{...Ko(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>A(t).direction==="rtl"};var Jt=(t,e,o)=>Xo(t,e,{platform:Rs,...o});var ai=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xccG9wb3ZlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSSJ9 */`;var{h:Qe,classNames:Aa,createRef:Us}=omii,Pt,ni,bt,So,Te,M=class extends h{constructor(){super(...arguments);m(this,Pt);m(this,bt);c(this,"slotRef",Us());m(this,Te,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props,s=d(this,bt,So);if(s){let r=this.$(`.${this.type}-arrow`);Jt(s,this.$element,{strategy:i,placement:e,middleware:[ft(),mt(),ht(o),yo({element:r})]}).then(({x:a,y:n,placement:l,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){g(this,Te,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),N.fade.show(this.$element)}hide(){g(this,Te,!1),N.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,Te)?this.hide():this.show()}installed(){let e=d(this,bt,So),{triggerShow:o,triggerHide:i}=this.$props;e&&(o.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),i.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),d(this,Te)&&this.hide()})}))}render(e){let{placement:o,header:i,body:s}=this.$props;return Qe(Qe.f,null,Qe("slot",{ref:this.slotRef,tabIndex:!0}),Qe("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Qe("div",{class:"popover-arrow"}),Qe("slot",{name:"header",class:"popover-header"},i),Qe("slot",{class:"popover-body",name:"body"},s)))}};Pt=new WeakSet,ni=function(){return this.slotRef.current},bt=new WeakSet,So=function(){let e=d(this,Pt,ni).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},Te=new WeakMap,c(M,"css",[()=>y("reboot","utilities","transitions","popover"),ai]),c(M,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),c(M,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var li=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcdXBsb2FkZXIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVdBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQU1BO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJIn0= */`;var Fs=async t=>new Promise(e=>{let o=new FileReader;o.readAsDataURL(t),o.onload=i=>{e(i.target.result)}}),Qs=async t=>t.split(";base64,")[1],Ts=t=>new Promise(e=>{let o=new Image;o.crossOrigin="anonymous",o.src=t,o.onload=()=>{e(wo(o))}}),Os=t=>new Promise((e,o)=>{try{fetch(t).then(async i=>{if(i.status==200){let s=new Image,r=await i.blob();s.crossOrigin="anonymous",s.src=URL.createObjectURL(r),s.onload=()=>{URL.revokeObjectURL(s.src),e(ci(s))},s.onerror=a=>{o(a)}}else o(new Error(i.status))})}catch(i){o(i)}}),ci=(t,e="image.png")=>ui(di(t),e,"image/png"),di=t=>pi(wo(t)),wo=(t,e="image/png",o=.8)=>{let i=document.createElement("canvas"),s=i.getContext("2d");return i.width=t.naturalWidth,i.height=t.naturalHeight,s.drawImage(t,0,0),i.toDataURL(e,o)},pi=t=>{let e=t.split(";base64,"),o=e[0].split(":")[1],i=window.atob(e[1]),s=i.length,r=new Uint8Array(s);for(let a=0;a<s;++a)r[a]=i.charCodeAt(a);return new Blob([r],{type:o})},ui=(t,e,o)=>new File([t],e,{type:o,lastModified:Date.now()}),fi=(t,e,o,i,s,r="image/png",a=.8)=>{let n=i>e?e:i,l=n*o/e;l>s&&(l=s,n=l*e/o);let p=document.createElement("canvas"),f=p.getContext("2d");return p.width=n,p.height=l,f.drawImage(t,0,0,e,o,0,0,n,l),p.toDataURL(r,a)},hi=(t,e,o,i="image/png",s=.8)=>fi(t,t.naturalWidth,t.naturalHeight,e,o,i,s),ks=async(t,e,o,i="image/png",s=.8)=>new Promise(r=>{let a=new Image;a.src=window.URL.createObjectURL(t),a.onload=()=>{window.URL.revokeObjectURL(a.src),r(hi(a,e,o,i,s))}}),Ls=(t,e=100,o=100,i="image/jpeg",s=.8)=>new Promise((r,a)=>{try{let n=document.createElement("video");n.src=window.URL.createObjectURL(t),n.preload="auto",n.onloadeddata=()=>{r(mi(n,e,o,i,s)),window.URL.revokeObjectURL(n.src)},n.onerror=l=>{window.URL.revokeObjectURL(n.src),a(l)}}catch(n){a(n)}}),mi=(t,e=100,o=100,i="image/jpeg",s=.8)=>fi(t,t.videoWidth,t.videoHeight,e,o,i,s),Bo=t=>{if(!(t instanceof File)||t.type.indexOf("image/")!=0)return null;let e=new Image;return e.src=URL.createObjectURL(t),e.onload=()=>{URL.revokeObjectURL(e.src)},e.src};var gi={convertImageUrlToBase64:Ts,createVideoThumb:mi,createVideoFileThumb:Ls,convertImageUrlToFile:Os,convertBase64ToBlob:pi,convertBlobToFile:ui,convertImageToBase64:wo,convertImageToBlob:di,convertImageToFile:ci,splitBase64:Qs,readFileAsBase64:Fs,createImageFileThumb:ks,createImageThumb:hi,getPreviewUrl:Bo};var{h:T,classNames:Es}=omii,bi=t=>t?.type?.indexOf("image")==0,Cs=t=>bi(t)?(t.url=t.url??Bo(t.file),T("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):T("div",{className:"file"},T("oi-icon",{"view-box":"1024",name:kt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),T("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),vi=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return T("div",{className:"pictures"},T("div",{class:"row row-cols-auto g-4"},e.map((s,r)=>T("div",{className:"col",key:`file-${r}`},T("div",{class:"card",onClick:()=>{t.open(r)}},Cs(s),T("div",{className:"actions"},T("div",{class:"position-absolute top-50 start-50 translate-middle"},bi(s)&&T("oi-icon",{name:"search"}),T("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(i||e.length==0)&&T("div",{className:"col selector-col",key:"selector"},T("div",{class:"card selector"},T("label",{class:Es("selector",{multiple:i}),title:o,onClick:()=>{t.open()}},T("oi-icon",{name:"add"}))))))};var{h:z,classNames:tn}=omii,yi=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return z("div",{className:"files"},z("slot",{name:"actions"},z("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),z("table",{class:"table"},z("tbody",null,e.map(s=>z("tr",null,z("td",null,z("oi-icon",{"view-box":"1024",name:kt(s.ext),type:"file-type"}),s.name,s.ext),z("td",null,ao(s.size)),z("td",null,z("oi-icon",{name:"delete"})))))))};var{h:At,classNames:rn}=omii,Is={pictures:vi,files:yi},jt={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Oe,pe=class extends h{constructor(){super(...arguments);m(this,Oe,-1)}static get STATUS(){return jt}open(e=-1){g(this,Oe,e),this.$("#files").click()}remove(e){this.$props.files?.splice(e,1),this.updateSelf()}select(e){let{multiple:o,files:i,autoUpload:s}=this.$props;if(e?.length==0)return!1;if(o||i.splice(0,i.length),d(this,Oe)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Tt(a.name),ext:Qt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.splice(d(this,Oe),1,...r),this.fire("replaced",{index:d(this,Oe),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Tt(a.name),ext:Qt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.update()}upload(){let{files:e,action:o,withCredentials:i,headers:s}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==jt.NONE||a.status==jt.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=i,typeof s=="function"&&(s=s()),typeof s=="object")for(let l in s)n.setRequestHeader(l,s[l]);n.send(a),n.onreadystatechange=function(l){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=jt.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,l)},n.upload.onprogress=function(l){if(l.lengthComputable){let p=Math.ceil(l.loaded/l.total*100);r.progress=p,this.fire("progress",{file:r,loaded:l.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:i}=this.$props;return At(At.f,null,At("slot",null,Is[i]),At("input",{id:"files",type:"file",multiple:e,accept:o,onChange:s=>{this.select(s.target.files)}}))}};Oe=new WeakMap,c(pe,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),li]),c(pe,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),c(pe,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var xi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcY2Fyb3VzZWwiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7QUFFQTtFQUNJOztBQUlBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSSJ9 */`;var $s="transitionend";var Si=t=>{t.dispatchEvent(new Event($s))},Ds=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var wi=t=>{if(!Ds(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let i=t.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return e};var{h:I,classNames:Bi,extractClass:Vs}=omii;var zs="carousel-item-end",Js="carousel-item-start",Ps="carousel-item-next",As="carousel-item-prev",js=".active",Ms=".carousel-item",Sn=js+Ms,ke,K,vt,fe,ue=class extends h{constructor(){super(...arguments);m(this,ke,0);m(this,K,!1);m(this,vt,[]);m(this,fe,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,ke)}get isSliding(){return d(this,K)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,K)&&Si(this),clearInterval(d(this,fe)),g(this,fe,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(d(this,K))return!1;let{$activeItem:o,$items:i,$props:{duration:s}}=this,r=i.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=i.indexOf(n),e=a>r):typeof e=="number"?(a=(e+i.length)%i.length,n=i[a],e=a>r):(a=(r+1)%i.length,e||(a=(r-1+i.length)%i.length),n=i[a]),d(this,ke)==a)return!1;let l=e?Js:zs,p=e?Ps:As;g(this,K,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;C(n,[{classNames:[],duration:f},{classNames:[p],callback:()=>{Ot(n)}},{classNames:[p,l],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),C(o,[{classNames:[],duration:f},{classNames:[l,"active"],duration:s},{classNames:[],callback:()=>{g(this,K,!1),g(this,ke,a);let u;for(;u=d(this,vt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&wi(this)&&this.slide()}cycle(){d(this,fe)&&clearInterval(d(this,fe)),g(this,fe,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),g(this,ke,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,K)?d(this,vt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:i,prevCtrl:s,indicator:r}=this.$props;return I("div",{...Vs(e,"carousel")},I("slot",{class:"carousel-inner"},o.map(a=>I("div",{className:Bi("carousel-item"),waiting:a.attributes?.waiting},a))),I("div",{class:"carousel-indicators"},I("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),I("slot",{name:"actions"},typeof i=="function"&&i(this),typeof s=="function"&&s(this)))}};ke=new WeakMap,K=new WeakMap,vt=new WeakMap,fe=new WeakMap,c(ue,"css",[()=>y("reboot","utilities","carousel"),xi]),c(ue,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>I("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},I("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>I("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},I("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),I("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>I("button",{type:"button",onClick:i=>o.slide(e),class:Bi({active:e==0})})}),c(ue,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:No,classNames:Nn,extractClass:Hs}=omii,he=class extends h{css(){}render(t){let{text:e,desc:o,position:i}=this.$props,s=i?i.split("-"):[];return No("span",{...Hs(t,"badge",{"position-absolute":i,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":i,"rounded-pill":i})},No("slot",null,e),o&&No("span",{class:"visually-hidden"},o))}};c(he,"css",()=>y("reboot","utilities","badge")),c(he,"defaultProps",{text:"",desc:!1,position:!1}),c(he,"propTypes",{});var Ni=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcdG9hc3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSTtFQUNBIn0= */`;var{h:He,classNames:On,extractClass:Xs}=omii,ge,me=class extends h{constructor(){super(...arguments);m(this,ge,!0)}get closed(){return d(this,ge)}close(){g(this,ge,!0),N.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){g(this,ge,!1),this.update(),N.fade.show(this)}install(){g(this,ge,!this.$props.visible)}render(e){return He("div",{...Xs(e,"toast",{show:!d(this,ge)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},He("div",{class:"toast-header"},He("slot",{name:"header"}),He("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),He("div",{class:"toast-body"},He("slot",null)))}};ge=new WeakMap,c(me,"css",[()=>y("reboot","utilities","toasts","close"),Ni]),c(me,"defaultProps",{visible:!1}),c(me,"propTypes",{visible:Boolean});var{h:Ro,classNames:Ws,extractClass:Dn}=omii,be=class extends h{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:i,max:s,showPercent:r,striped:a,animated:n,style:l,className:p}=this.$props;return Ro("div",{class:"progress",style:l},Ro("div",{class:Ws("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":s},r&&Ro("span",null,o,"%")))}};c(be,"css",()=>y("reboot","utilities","progress")),c(be,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),c(be,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var Ri=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcdG9vbHRpcCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFJSjtFQUNJO0VBQ0EifQ== */`;var{h:Xe,classNames:jn,createRef:Mn}=omii,Mt=class extends M{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return Xe(Xe.f,null,Xe("slot",{ref:this.slotRef}),Xe("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},Xe("div",{class:"tooltip-arrow"}),Xe("slot",{class:"tooltip-inner",name:"body"},o)))}},Le=Mt;c(Le,"css",[()=>y("reboot","utilities","transitions","tooltip"),Ri]),c(Le,"defaultProps",{...qe(Mt,Mt,"defaultProps"),offset:0});var Ui=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcbGF5b3V0Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7QUFJSjtFQUNJOztBQU9SO0VBQ0k7RUFDQTtFQUNBOztBQUlKO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtJQUNJOzs7QUFJUjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0lBQ0kifQ== */`;var{h:ve,classNames:Zn,createRef:We}=omii,H,G,X,_e,Ye,Ht,ye=class extends h{constructor(){super(...arguments);m(this,H,We());m(this,G,We());m(this,X,We());m(this,_e,We());m(this,Ye,We());m(this,Ht,We())}close(e,o){}closeFooter(){this.$props.openFooter=!1,N.collapse.hide(d(this,X).current),d(this,G).current.style.height=this.clientHeight-d(this,H).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,N.collapse.show(d(this,X).current),d(this,G).current.style.height=this.clientHeight-d(this,H).current.clientHeight-d(this,X).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,N.collapse.hide(d(this,H).current),d(this,G).current.style.height=this.clientHeight-d(this,X).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,N.collapse.show(d(this,H).current),d(this,G).current.style.height=this.clientHeight-d(this,H).current.scrollHeight-d(this,X).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,N.collapse.hide(d(this,_e).current)}openLeft(){this.$props.openLeft=!0,N.collapse.show(d(this,_e).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,N.collapse.hide(d(this,Ye).current)}openRight(){this.$props.openRight=!0,N.collapse.show(d(this,Ye).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=d(this,H).current.getBoundingClientRect(),i=d(this,X).current.getBoundingClientRect();d(this,G).current.style.height=e.height-o.height-i.height+"px"}installed(){this.resize(),window.addEventListener("resize",e=>{this.resize()},!0)}render(e){return ve(ve.f,null,ve("slot",{name:"header",ref:d(this,H)}),ve("main",{ref:d(this,G)},ve("slot",{name:"left",ref:d(this,_e),class:"collapse-horizontal"}),ve("slot",{name:"content",ref:d(this,Ht)}),ve("slot",{name:"right",ref:d(this,Ye),class:"collapse-horizontal"})),ve("slot",{name:"footer",ref:d(this,X)}))}};H=new WeakMap,G=new WeakMap,X=new WeakMap,_e=new WeakMap,Ye=new WeakMap,Ht=new WeakMap,c(ye,"css",[Ui]),c(ye,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),c(ye,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Fi=`
:host {
  display: block;
}
:host oi-loading {
  margin: auto;
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcaW1wb3J0Iiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7O0FBQ0E7RUFDSTtFQUNBIn0= */`;var{h:Qi,classNames:rl,uniqueTag:_s}=omii,Ee,Xt,Ti,xe=class extends h{constructor(){super(...arguments);m(this,Xt);m(this,Ee,void 0)}install(){Ve(this,Xt,Ti).call(this)}render(e){return d(this,Ee)}};Ee=new WeakMap,Xt=new WeakSet,Ti=function(){let{src:e,module:o,loading:i}=this.$props;g(this,Ee,i),e&&o&&import(e).then(s=>{let r=s[o];if(typeof r=="function"){let a=_s(r);g(this,Ee,Qi(a,null))}else g(this,Ee,r);this.updateSelf()}).catch(s=>{console.error("import module error\uFF01",e,o,s)})},c(xe,"css",[Fi]),c(xe,"defaultProps",{src:null,module:"default",loading:Qi("oi-loading",{size:"6"})}),c(xe,"propTypes",{src:String,module:String});var Oi=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcb2ZmY2FudmFzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJIn0= */`;var{h:Se,classNames:pl,createRef:ki,extractClass:Ys}=omii,W,we=class extends h{constructor(){super(...arguments);c(this,"offcanvasRef",ki());c(this,"backdropRef",ki());m(this,W,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,W))return;g(this,W,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;C(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,W)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,W))return;g(this,W,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;C(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){g(this,W,this.$props.visible)}render(e){let{visible:o,placement:i,position:s,title:r,useBackdrop:a}=this.$props;return Se(Se.f,null,Se("div",{ref:this.offcanvasRef,...Ys(e,"offcanvas",`offcanvas-${i}`,`position-${s}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Se("div",{class:"offcanvas-header"},Se("slot",{name:"title",class:"offcanvas-title h5"},r),Se("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Se("slot",{class:"offcanvas-body"})),a&&d(this,W)&&Se("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};W=new WeakMap,c(we,"css",[()=>y("reboot","offcanvas","utilities","close"),Oi]),c(we,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),c(we,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:vl,classNames:yl,extractClass:xl,createRef:Sl}=omii,q=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",this.submitHandler),e.addEventListener("submit",this.submitHandler,!1),e.removeEventListener("input",this.inputingHandler),e.addEventListener("input",this.inputingHandler,!1)}static validateElement(e){let{validity:o}=e;if(o.valid)delete e.dataset.invalid,delete e.dataset.validationMessage;else{let i=[];for(let s in o)s!=="valid"&&o[s]===!0&&i.push(s);e.dataset.invalid=i.join(" "),e.dataset.validationMessage=e.validationMessage}}static inputingHandler(e){let o=e.currentTarget;o.checkValidity(),q.validateElement(e.target),o.classList.add("was-validated")}static submitHandler(e){let o=e.target;o.checkValidity()||(e.preventDefault(),e.stopPropagation()),Array.from(o.elements).forEach(i=>{q.validateElement(i)}),o.classList.add("was-validated")}connectedCallback(){this.constructor.validate(this)}};var Li=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcZHJvcGRvd24iLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7QUFFQTtFQUNJOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:Wt,classNames:Nl,createRef:Ei}=omii,Ie=null;document.addEventListener("click",t=>{Ie&&Ie.hide()});var yt,xt,ee,Ce,St,Uo,Ze,Be=class extends h{constructor(){super(...arguments);m(this,ee);m(this,St);m(this,yt,Ei());m(this,xt,Ei());m(this,Ze,!1)}get $menu(){return d(this,yt).current}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props;Jt(d(this,St,Uo),this.$menu,{strategy:i,placement:e,middleware:[ft(),mt(),ht(o)]}).then(({x:s,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${r}px`})})}show(){g(this,Ze,!0),d(this,ee,Ce).focus(),d(this,ee,Ce).setAttribute("aria-expanded",!0),d(this,ee,Ce).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),Ie=this,this.setPosition()}hide(){g(this,Ze,!1),d(this,ee,Ce).classList.remove("show"),d(this,ee,Ce).setAttribute("aria-expanded","false"),Ie=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,Ze)?this.hide():this.show()}installed(){d(this,St,Uo).addEventListener("click",e=>{Ie&&Ie!=this&&Ie.hide(),this.toggle(),e.preventDefault(),e.stopPropagation()}),this.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation()})}render(e){let{menu:o}=this.$props;return Wt(Wt.f,null,Wt("slot",{ref:d(this,xt)}),Wt("slot",{name:"menu",ref:d(this,yt)},o))}};yt=new WeakMap,xt=new WeakMap,ee=new WeakSet,Ce=function(){return d(this,xt).current},St=new WeakSet,Uo=function(){let e=d(this,ee,Ce).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},Ze=new WeakMap,c(Be,"css",[()=>y("reboot","utilities","transitions","dropdown"),Li]),c(Be,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),c(Be,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var Ci=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXOmhueebrlxcT01JSVxcdWlcXHNyY1xcY29kZXIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EifQ== */`;var{h:Zs,Component:Ll}=omii,_t,Ne=class extends h{constructor(){super(...arguments);m(this,_t,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:i,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{g(this,_t,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:i,fontSize:s,minimap:{enabled:!1}})})}render(){return Zs("div",{class:"coder"})}};_t=new WeakMap,c(Ne,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,i=new CSSStyleSheet;return i.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i],fetch(new URL("./monaco/index.css",e).href).then(s=>s.text())},Ci]),c(Ne,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),c(Ne,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var{define:w}=omii;w("oi-rate",oe);w("oi-tab",te);w("oi-icon",D);w("oi-pager",P);w("oi-tree",re);w("oi-loading",_);w("oi-alert",ae);w("oi-accordion",ne);w("oi-breadcrumb",le);w("oi-modal",ce);w("oi-popover",M);w("oi-uploader",pe);w("oi-carousel",ue);w("oi-badge",he);w("oi-toast",me);w("oi-progress",be);w("oi-tooltip",Le);w("oi-layout",ye);w("oi-import",xe);w("oi-offcanvas",we);w("oi-pagination",se);w("oi-dropdown",Be);w("oi-coder",Ne);customElements.define("oi-form",q,{extends:"form"});var Ks=import.meta.url;omii.ui={utils:zo,vision:gi,css:$o,effect:N,icon:D,tab:te,rate:oe,pager:P,tree:re,treeNode:io,loading:_,alert:ae,accordion:ne,breadcrumb:le,modal:ce,popover:M,uploader:pe,carousel:ue,badge:he,toast:me,progress:be,tooltip:Le,layout:ye,import:xe,offcanvas:we,pagination:se,form:q,dropdown:Be,coder:Ne,importURL:Ks};export{ne as accordion,ae as alert,le as breadcrumb,ue as carousel,Ne as coder,$o as css,Be as dropdown,N as effect,q as form,D as icon,xe as import,Ks as importURL,ye as layout,_ as loading,ce as modal,we as offcanvas,P as pager,se as pagination,M as popover,be as progress,oe as rate,te as tab,me as toast,Le as tooltip,re as tree,io as treeNode,pe as uploader,zo as utils,gi as vision};
//# sourceMappingURL=omii-ui.js.map
