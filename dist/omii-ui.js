var Xi=Object.defineProperty;var Wi=Object.getPrototypeOf;var Hi=Reflect.get;var _i=(t,e,o)=>e in t?Xi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var l=(t,e,o)=>(_i(t,typeof e!="symbol"?e+"":e,o),o),qt=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(qt(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},g=(t,e,o,i)=>(qt(t,e,"write to private field"),i?i.call(t,o):e.set(t,o),o);var Rt=(t,e,o)=>(qt(t,e,"access private method"),o),ot=(t,e,o)=>Hi(Wi(t),o,e);var{define:cr,h:dr,Component:Yi}=omii,h=class extends Yi{};var Eo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSJ9 */`;var{h:it,Component:gr,classNames:Co,render:br}=omii,ie=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},o=null){(o==null||o==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},!0,!0):this.update$Props({activeIndex:t},!0,!0))}async render(t){let e=this.$props,o=t.items??e.items,i=[],s=[];for(let r=0;r<(o??[]).length;r++){let a=o[r],n=this.activeKey?this.activeKey==a.key:r==this.activeIndex,c=a.pane;s.push(it("div",{key:`pane-${a.key??r}`,className:Co("pane",{active:n})},c)),i.push(it("div",{key:`nav-${a.key??r}`,className:Co("nav",{active:n}),onMouseEnter:()=>this.active({index:r,key:a.key},"hover"),onclick:()=>this.active({index:r,key:a.key},"click")},a.nav??a.name??a.key))}return it("div",{class:"tabs"},it("div",{class:"navs"},i),it("div",{class:"panes"},s))}};l(ie,"css",Eo),l(ie,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),l(ie,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Re={BUNDLE:"bundle",SINGLE:"single"},st={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:wr,h:Vo,Component:Sr}=omii,rt=Re.SINGLE,Gt=st.FILLED,eo=async(t,e,o)=>{e=e??Gt,e==st.FILE_TYPE&&(o=Re.BUNDLE);try{if((o??rt)==Re.BUNDLE){let{default:i}=await import(`./icons/${e}.js`);return i[t]}else{let{default:i}=await import(`./icons/${e}/${t}.js`);return i}}catch{console.error("load icon error",t,e)}},Ki=async(t,e,o,i={})=>{let s=await eo(t,e,o);return Vo("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...i},s)},$=class extends h{static useBundleMode(){rt=Re.BUNDLE}static useSingleMode(){rt=Re.SINGLE}static get MODES(){return Re}static get TYPES(){return st}static get Mode(){return rt}static set Mode(t){rt=t}static get Type(){return Gt}static set Type(t){Gt=t}css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-icon-color)",i=t?`${t}rem`:"var(--oi-icon-width, 1rem)",s=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:t,type:e,viewBox:o}=this.$props,i=await eo(t,e);return Vo("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+o+" "+o},i)}};l($,"updateOnAttributeChanged",!0),l($,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),l($,"defaultProps",{name:null,type:st.FILLED,viewBox:24,size:null,color:null}),l($,"createSvg",Ki),l($,"loadIcon",eo),l($,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
      
    }
  `);var{h:Io}=omii,to=async t=>{try{let{default:e}=await import(`./bootstrap/icons/${t}.js`);return e}catch{console.error("load icon error",t,type)}},Zi=async(t,e={})=>{let o=await to(t);return Io("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},o)},A=class extends h{css(){let{size:t,color:e}=this.$props,o=e||"var(--oi-bi-color)",i=t?`${t}rem`:"var(--oi-bi-width, 1rem)",s=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${o} ;
        width: ${i};
        height: ${s};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,o=await to(t);return Io("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},o)}};l(A,"updateOnAttributeChanged",!0),l(A,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),l(A,"defaultProps",{name:null,viewBox:16,size:null,color:null}),l(A,"createSvg",Zi),l(A,"loadIcon",to),l(A,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var $o=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kifQ== */`;var{define:Er,h:oo,Component:Cr,classNames:qi,render:Vr}=omii,io={STAR:"star",HALF:"star_half",BORDER:"star_border"},M,se=class extends h{constructor(){super(...arguments);m(this,M,-1)}get rateScore(){return this.$props.score}install(){g(this,M,this.$props.score)}rate(e){this.fire("rate",e),g(this,M,e),this.update$Props({score:e})}render(e){let o=this.$props,{maxScore:i,rateable:s,size:r,color:a}=o,n=[],c=d(this,M);for(let p=0;p<i;p++)c-p>=.5?n.push(io.STAR):c-p>0?n.push(io.HALF):n.push(io.BORDER);return oo("div",{class:qi("rate-wrap","rate-"+d(this,M))},n.map((p,f)=>s?oo("oi-icon",{name:p,size:r,color:a,className:p,onmouseenter:u=>{u.preventDefault(),u.stopPropagation(),g(this,M,f+1),this.fire("tryRate",d(this,M)),this.lazyUpdate()},onmouseleave:u=>{u.preventDefault(),u.stopPropagation(),g(this,M,this.rateScore),this.lazyUpdate()},onclick:u=>{u.preventDefault(),u.stopPropagation(),this.rate(f+1)}}):oo("oi-icon",{name:p,size:r,color:a,className:p})))}};M=new WeakMap,l(se,"css",$o),l(se,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),l(se,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Do=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:T,classNames:at}=omii,X=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:o}=this.$props;return t&&e?Math.ceil(t/e):o}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&(this.update$Props({pageNum:t}),this.fire("paged",t))}render(t){return t.createLayout(t,this)}};l(X,"css",Do),l(X,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:T("oi-icon",{name:"keyboard_arrow_left"}),next:T("oi-icon",{name:"keyboard_arrow_right"}),first:T("oi-icon",{name:"first_page"}),last:T("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:o,prev:i}=t;return T("div",{class:at("prev",{disable:o<=1}),onClick:s=>{o>1&&e.goto(o-1)}},i)},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return T("div",{class:at("next",{disable:o>=s}),onClick:r=>{s>o&&e.goto(o+1)}},i)},createFirst(t,e){let{first:o,pageNum:i}=t;return T("div",{class:at("first",{disable:i<=1}),onClick:s=>{i!=1&&e.goto(1)}},o)},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return T("div",{class:at("last",{disable:i>=s}),onClick:r=>{i!=s&&e.goto(s)}},o)},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(T("div",{className:at({active:i==p,page:!0}),onClick:f=>{i!=p&&e.goto(p)}},p));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return T("div",{class:"info"},T("span",{class:"curr"},o),"/",T("span",{class:"total"},i))},createJumper(t,e){return T("div",{class:"jumper"},"\u524D\u5F80",T("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875")},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return T("div",{class:"pager"},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),c(t,e))}}),l(X,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean});var zo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBS1o7RUFDSTs7QUFFQTtFQUNJO0VBQ0EifQ== */`;var Nt=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:Gi,define:Xr,h:es,Component:Wr,setTheme:ts}=omii,ro="bootstrap";function os(t){ro=t,re=new URL(`./${ro}/`,import.meta.url).href}var re=new URL(`./${ro}/`,import.meta.url).href;function is(t){re=t}var Ot=(t,e=re)=>fetch(ao(t,e)).then(o=>{if(o.ok)return o.text();console.error(`load stylesheet ${t} error`,o)}).catch(o=>(console.error(`load stylesheet ${t} error`,o),null)),ss=t=>Ot=t,Jo=(t,e,o=re)=>{let i=es("link",{rel:"styleSheet",href:ao(t,o)});Gi(i,e??"body")},rs=(t,e=re)=>{Jo("reboot",t,e)},ao=(t,e=re)=>{try{return new URL(`./${t}.css`,e).href}catch(o){console.error(o,t,e)}},so=new Map,Tt=async(t,e=re)=>{let o=`${e}/${t}`,i=so.get(o);if(i===void 0){let s=[];so.set(o,s),i=new CSSStyleSheet;try{i.replaceSync(await Ot(t,e)),s.forEach(r=>{r(i)}),so.set(o,i)}catch(r){console.error("get css stylesheets error",r)}}else if(i instanceof Array)return new Promise(s=>{i.push(s)});return i},y=(...t)=>Promise.all(t.map(e=>Tt(e))),Po={};Nt.forEach(t=>{Object.defineProperty(Po,t,{get:function(){return Tt(t)}})});var as=(t=Nt)=>{t.forEach(e=>{Tt(e)})},ns=async(t,e=re)=>{let o=await Ot(`theme.${t}`,e);ts(o)},C=(t,e,o=1)=>{if(e instanceof Array&&e.length&&typeof o=="number"&&t.classList){let i=0,s=(r=[])=>{let a=i%e.length,{classNames:n,duration:c=0,delay:p=0,callback:f=null}=e[a];setTimeout(()=>{typeof n=="string"&&(n=n.split(" ").filter(b=>b!="")),t.classList.remove(...r),t.classList.add(...n),f&&f(t,n,c,p)},p*1e3),i++,!(Math.floor(i/e.length)>=o)&&setTimeout(()=>{s(n)},(c+p)*1e3)};s()}},jo={StyleSheets:Nt,CSSStyleSheets:Po,setBaseUrl:is,setBaseRoot:os,loadStyleSheet:Ot,setStyleSheetLoader:ss,addStyleSheet:Jo,addRebootStyleSheet:rs,getStyleSheetUrl:ao,getCSSStyleSheet:Tt,getCSSStyleSheets:y,useTheme:ns,timingClassNames:C,preLoad:as};var{h:S,classNames:nt,extractClass:ls}=omii,je=class extends X{},ae=je;l(ae,"css",[()=>y("reboot","pagination","utilities"),zo]),l(ae,"defaultProps",{...ot(je,je,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:o,prev:i}=t;return S("li",{class:nt("page-item",{disabled:o<=1})},S("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{o>1&&e.goto(o-1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"},"<")))},createNext(t,e){let{pageNum:o,next:i}=t,{pageCount:s}=e;return S("li",{class:nt("page-item",{disabled:o>=s})},S("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r=>{s>o&&e.goto(o+1),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},">")))},createFirst(t,e){let{first:o,pageNum:i}=t;return S("li",{class:nt("page-item",{disabled:i<=1})},S("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{i!=1&&e.goto(1),s.preventDefault(),s.stopPropagation()}},S("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:o,pageNum:i}=t,{pageCount:s}=e;return S("li",{class:nt("page-item",{disabled:i>=s})},S("a",{class:"page-link",href:"#","aria-label":"Last",onClick:r=>{i!=s&&e.goto(s),r.preventDefault(),r.stopPropagation()}},S("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:o,pageNum:i}=t,{pageCount:s}=e,r=Math.ceil(o/2),a=i>r?i-r:1,n=a+o-1;n>s&&(n=s),a=n-o+1;let c=[];a<1&&(a=1);for(let p=a;p<=n;p++)c.push(S("li",{key:`pager-${p}`,className:nt("page-item",{active:i==p,page:!0})},S("a",{class:"page-link",href:"#",onClick:f=>{i!=p&&e.goto(p),f.preventDefault(),f.stopPropagation()}},p)));return c},createInfo(t,e){let{pageNum:o}=t,{pageCount:i}=e;return S("li",{class:"info page-item"},S("span",{className:"page-link"},S("span",{class:"curr"},o),"/",S("span",{class:"total"},i)))},createJumper(t,e){return S("li",{class:"jumper page-item"},S("span",{className:"page-link"},"\u524D\u5F80",S("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:o=>{let i=o.currentTarget,s=Number(i.value);s>e.pageCount&&(i.value=e.pageCount),s<1&&(i.value=1),s=Number(i.value),e.goto(s)}}),"\u9875"))},createLayout(t,e){let{createFirst:o,createPrev:i,createPages:s,createNext:r,createLast:a,createJumper:n,createInfo:c}=t;return S("nav",null,S("ul",{...ls(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},o(t,e),i(t,e),s(t,e),r(t,e),a(t,e),n(t,e),c(t,e)))}}),l(ae,"propTypes",{...ot(je,je,"propTypes"),align:String});var Ao=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kifQ== */`;var Mo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJOztBQUlKO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0FBQUE7RUFFSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBSVI7RUFDSTs7QUFLSTtFQUNJO0VBQ0E7O0FBS1I7RUFDSSJ9 */`;var{h:D,classNames:kt,define:cs,getHost:ds}=omii,lt,lo=class extends h{constructor(){super(...arguments);m(this,lt,!1)}get tree(){return this.props.tree}get checkboxTree(){return this.tree.props.checkboxTree}get radioTree(){return this.tree.props.radioTree}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get node(){return this.props.node??{}}get path(){let o=this.parentTreeNode;return(o?o.path:"")+"/"+this.key}get parentTreeNode(){let o=ds(this);return o instanceof lo?o:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}get noChildren(){return!this.node.children}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?D("input",{type:"checkbox",disabled:this.node.disabled===!0,checked:this.checked,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.check():this.uncheck()}}):D("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?D("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:o=>{o.stopPropagation()},onChange:o=>{o.currentTarget.checked?this.radio():this.unradio()}}):D("div",{class:"radio-placeholder"}):null}install(){!this.tree.props.multiSelect&&this.selected&&(this.tree.__selectedNode=this)}async render(o){let{node:i,cssss:s}=o,r=i.element??i.label??i.key;typeof r=="function"&&(r=await r(i,o,this));let a=null,n=i.children;return typeof n=="function"&&this.expanded&&(n=await n(i,o,this)),n&&this.expanded&&(a=D("div",{class:kt("children",{expanded:this.expanded})},n instanceof Array?n.map(c=>D("oi-tree-node",{node:c,"node-level":this.level+1,tree:this.tree,cssss:s})):n)),D("div",{class:kt("node",{expanded:this.expanded,"loading-children":d(this,lt),"no-children":this.noChildren})},D("div",{class:kt("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:c=>{c.stopPropagation(),this.selected&&c.ctrlKey===!0?this.unSelect():this.select()}},D("div",{onClick:c=>{c.stopPropagation(),this.toggle()},class:kt("expander",{"no-children":this.noChildren})}),this.$checkbox,this.$radio,D("div",{class:"text"},r),d(this,lt)?D("oi-loading",null):null),a)}},Ne=lo;lt=new WeakMap,l(Ne,"css",Mo),l(Ne,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0}),l(Ne,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});cs("oi-tree-node",Ne);var no=Ne;var{h:co,purgeCSSSS:ps,getHost:us}=omii;var ne=class extends h{get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKyes(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}isSelected(t){let{multiSelect:e,selectedKey:o,selectedKeys:i}=this.$props;return e?(i??[]).some(s=>s==t):o!=null&&o==t}select(t,e=!0){let{multiSelect:o,selectedKeys:i}=this.$props;o?i.some(s=>s==t)||i.push(t):this.$props.selectedKey=t,e&&this.update()}unSelect(t,e=!0){let{multiSelect:o,selectedKeys:i}=this.$props;if(!o)this.$props.selectedKey=null;else{let s=i.indexOf(t);s!=-1&&i.splice(s,1)}e&&this.update()}isChecked(t){let{checkboxTree:e,checkedKeys:o}=this.$props;return e?(o??[]).some(i=>i==t):!1}check(t,e=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;o&&i.indexOf(t)==-1&&i.push(t),e&&this.update()}uncheck(t,e=!0){let{checkboxTree:o,checkedKeys:i}=this.$props;if(o){let s=i.indexOf(t);s!=-1&&i.splice(s,1)}e&&this.update()}isRadioed(t){let{radioTree:e,radioedKey:o}=this.$props;return e?o!=null&&o==t:!1}radio(t,e=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=t),e&&this.update()}unradio(t=!0){let{radioTree:e}=this.$props;e&&(this.$props.radioedKey=null),t&&this.update()}isExpanded(t){let{expandedKeys:e}=this.$props;return(e??[]).some(o=>o==t)}expand(t,e=!0){let{expandedKeys:o}=this.$props;o.indexOf(t)!=-1&&o.push(t),e&&this.update()}collapse(t,e=!0){let{expandedKeys:o}=this.$props,i=o.indexOf(t);i!=-1&&o.splice(i,1),e&&this.update()}render(t){let e=t.nodes??this.$props.nodes,o=us(this);typeof e=="function"&&(e=e.call(o));let i=ps(this.$props.nodeCss,o);return co(co.f,null,e.map(s=>co("oi-tree-node",{node:s,tree:this,cssss:i})))}};l(ne,"css",Ao),l(ne,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[]}),l(ne,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:ca,classNames:da}=omii,ct,Z=class extends h{constructor(){super(...arguments);m(this,ct,void 0)}css(){let{size:e,color:o}=this.$props,i="2rem";if(e)i=`${e}rem`;else{let a=this.parentNode?.host??this.parentNode;a?i=`${a.offsetHeight}px`:i="2rem"}let s=`
    :host{
      --oi-loading-size:${i};
    }
    `,r="";return o&&(r=`
      :host {
        --oi-loading-color:${o};
      }
      `),`
    ${d(this,ct)}
    ${s}
    ${r}
    `}async render(){let{name:e}=this.$props,{default:{template:o,css:i}}=await import(`./loadings/${e}.js`);return g(this,ct,i),o}};ct=new WeakMap,l(Z,"updateOnAttributeChanged",!0),l(Z,"css",`
    :host{
      display:inline-block;
    }
  `),l(Z,"defaultProps",{name:"circle",size:null,color:null}),l(Z,"propTypes",{name:String,size:Number,color:String});var fs=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),hs=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},ms=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},Lt=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Et=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var gs=["B","KB","MB","GB","TB","PB"],po=t=>{t=Number.parseInt(t);let e=t,o=0;for(;e>1024;)e/=1024,o++;return e.toFixed(o==0?0:2)+gs[o]},bs=(t,e)=>{let o=document.createElement("a");o.download=e,o.href=t,o.target="_blank",o.click()},vs=(t,e)=>{window.chrome.extension?t():e()},Ct=t=>{t.offsetHeight},ys=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],Vt=t=>{if(!t)return"file";t=t.toLowerCase();let e=ys.find(o=>o[0].includes(t));return e==null?"file":e[1]};var Xo={tryExtension:vs,downloadUrl:bs,getName:Et,getExtension:Lt,cleanHTML:fs,isToday:hs,isYesterday:ms,formatSize:po};var Ae={HORIZONTAL:"horizontal",VERTICAL:"vertical"},uo="show",It="collapse",fo="collapsing",xs="collapse-horizontal",ho=.35,mo=(t,e)=>e||(t.classList.contains(xs)?Ae.HORIZONTAL:Ae.VERTICAL),Wo={show(t,e=ho,o=null){return new Promise(i=>{o=mo(t,o),C(t,[{classNames:[It]},{classNames:[fo],duration:e,callback(s){s.style[o==Ae.VERTICAL?"height":"width"]=`${s[o==Ae.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[It,uo],callback(s){s.style[o==Ae.VERTICAL?"height":"width"]="",i()}}])})},hide(t,e=ho,o=null){return new Promise(i=>{o=mo(t,o);let s=o==Ae.VERTICAL?"height":"width";t.style[s]=`${t.getBoundingClientRect()[s]}px`,Ct(t.offsetHeight),C(t,[{classNames:[fo,It,uo]},{classNames:[fo],duration:e,callback(r){r.style[s]=""}},{classNames:[It],callback:i}])})},toggle(t,e=ho,o=null){return o=mo(t,o),t.classList.contains(uo)?this.hide(t,e,o):this.show(t,e,o)}};var dt="fade",go="show",bo=.15,Ho={show(t,e=bo){return new Promise(o=>{C(t,[{classNames:[dt]},{classNames:[dt,go],duration:e,callback:o}])})},hide(t,e=bo){return new Promise(o=>{C(t,[{classNames:[dt,go]},{classNames:[dt],duration:e,callback:o}])})},toggle(t,e=bo){return t.classList.contains(dt)&&!t.classList.contains(go)?this.show(t,e):this.hide(t,e)}};var B={collapse:Wo,fade:Ho};var{h:vo,classNames:ws}=omii;var Ss="show",pt,le=class extends h{constructor(){super(...arguments);m(this,pt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(Ss),g(this,pt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:o}=this.$props;return d(this,pt)?null:vo("div",{className:ws("alert",`alert-${e}`,{"alert-dismissible":o,fade:o,show:o}),role:"alert"},vo("slot",null),o?vo("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};pt=new WeakMap,l(le,"css",()=>y("reboot","utilities","alert","close","transitions")),l(le,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),l(le,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:Me,classNames:yo}=omii,$t={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Fs="collapsed",Xe,Dt,ce=class extends h{constructor(){super(...arguments);m(this,Xe)}static get DIRECTIONS(){return $t}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:o,firstOpen:i}=this.$props;if(e.length>0&&i&&(e[0].opened=!0),!o){let s=e.filter(r=>r.opened);if(s.length){let r=s.shift();r.opened=!0,s.forEach(a=>a.opened=!1)}}}get dimension(){return this.setting.direction==$t.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:o,alwayOpen:i}=this.$props;if(i)Rt(this,Xe,Dt).call(this,e);else{let s=o.findIndex(a=>a.opened),r=s==-1?null:o[s];r&&r!=e&&Rt(this,Xe,Dt).call(this,r),Rt(this,Xe,Dt).call(this,e)}}render(){let{items:e,direction:o}=this.$props;return Me("div",{class:yo("accordion",{"collapse-horizontal":o==$t.HORIZONTAL})},e.map((i,s)=>Me("div",{class:"accordion-item",key:i.key??`item-${s}`},Me("h2",{class:"accordion-header"},Me("button",{class:yo("accordion-button",{collapsed:!i.opened}),type:"button","aria-expanded":i.opened,onClick:r=>{this.toggle(i)}},i.header)),Me("div",{class:yo("accordion-collapse",{collapse:!0,show:i.opened})},Me("div",{class:"accordion-body"},typeof i.body=="function"?i.body(i,this.$props,this):i.body)))))}};Xe=new WeakSet,Dt=function(e){let{items:o,transitionDuration:i}=this.$props,s=o.indexOf(e),r=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),a=r.querySelector(".accordion-collapse"),n=r.querySelector(".accordion-button");e.opened=!e.opened,n.classList.toggle(Fs,!e.opened),e.opened?(B.collapse.show(a),this.fire("collapseShow",e)):(B.collapse.hide(a),this.fire("collapseHide",e))},l(ce,"css",()=>y("reboot","utilities","accordion","close","transitions")),l(ce,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:$t.VERTICAL}),l(ce,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:ut,classNames:La}=omii,de=class extends h{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return ut("nav",{"aria-label":"breadcrumb"},ut("ol",{class:"breadcrumb"},t.map((o,i)=>i!==t.length-1?ut("li",{class:"breadcrumb-item"},typeof e=="object"&&i!=0?e:null,ut("a",{href:o.href},o.label)):ut("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&i!=0?e:null,o.label))))}};l(de,"css",()=>y("reboot","utilities","breadcrumb")),l(de,"defaultProps",{}),l(de,"propTypes",{});var _o=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0= */`;var{h:E,classNames:Yo,extractClass:Bs}=omii,pe=class extends h{open(){this.update$Props({visible:!0}),this.fire("open")}close(){B.fade.hide(this.$(".modal-backdrop")).then(()=>{this.update$Props({visible:!1}),this.fire("close")})}css(){}render(t){let e=this.$props;return E(E.f,null,e.visible&&!e.staticPosition&&E("div",{class:Yo("modal-backdrop","fade","show")}),E("div",{...Bs(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible,fade:!0,show:!0}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:o=>{if(o.target===o.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},E("div",{class:Yo("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},E("div",{class:"modal-content"},E("div",{class:"modal-header"},E("slot",{name:"header"},E("h5",{class:"modal-title"},e.title),E("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>this.close()}))),E("div",{class:"modal-body"},E("slot",null)),E("div",{class:"modal-footer"},E("slot",{name:"footer"}))))))}};l(pe,"css",[()=>y("reboot","modal","utilities","close","scrollbar"),_o]),l(pe,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),l(pe,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function ht(t){return t.split("-")[0]}function Jt(t){return t.split("-")[1]}function mt(t){return["top","bottom"].includes(ht(t))?"x":"y"}function wo(t){return t==="y"?"height":"width"}function Ko(t,e,o){let{reference:i,floating:s}=t,r=i.x+i.width/2-s.width/2,a=i.y+i.height/2-s.height/2,n=mt(e),c=wo(n),p=i[c]/2-s[c]/2,f=n==="x",u;switch(ht(e)){case"top":u={x:r,y:i.y-s.height};break;case"bottom":u={x:r,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:a};break;case"left":u={x:i.x-s.width,y:a};break;default:u={x:i.x,y:i.y}}switch(Jt(e)){case"start":u[n]-=p*(o&&f?-1:1);break;case"end":u[n]+=p*(o&&f?-1:1)}return u}var qo=async(t,e,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=await(a.isRTL==null?void 0:a.isRTL(e)),c=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:p,y:f}=Ko(c,i,n),u=i,b={},v=0;for(let x=0;x<r.length;x++){let{name:F,fn:Q}=r[x],{x:R,y:k,data:L,reset:U}=await Q({x:p,y:f,initialPlacement:i,placement:u,strategy:s,middlewareData:b,rects:c,platform:a,elements:{reference:t,floating:e}});p=R??p,f=k??f,b={...b,[F]:{...b[F],...L}},U&&v<=50&&(v++,typeof U=="object"&&(U.placement&&(u=U.placement),U.rects&&(c=U.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):U.rects),{x:p,y:f}=Ko(c,u,n)),x=-1)}return{x:p,y:f,placement:u,strategy:s,middlewareData:b}};function Go(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function ft(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function So(t,e){var o;e===void 0&&(e={});let{x:i,y:s,platform:r,rects:a,elements:n,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:b=!1,padding:v=0}=e,x=Go(v),F=n[b?u==="floating"?"reference":"floating":u],Q=ft(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(F)))==null||o?F:F.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(n.floating)),boundary:p,rootBoundary:f,strategy:c})),R=ft(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u==="floating"?{...a.floating,x:i,y:s}:a.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(n.floating)),strategy:c}):a[u]);return{top:Q.top-R.top+x.top,bottom:R.bottom-Q.bottom+x.bottom,left:Q.left-R.left+x.left,right:R.right-Q.right+x.right}}var Qs=Math.min,Us=Math.max;function xo(t,e,o){return Us(t,Qs(e,o))}var Fo=t=>({name:"arrow",options:t,async fn(e){let{element:o,padding:i=0}=t??{},{x:s,y:r,placement:a,rects:n,platform:c}=e;if(o==null)return{};let p=Go(i),f={x:s,y:r},u=mt(a),b=Jt(a),v=wo(u),x=await c.getDimensions(o),F=u==="y"?"top":"left",Q=u==="y"?"bottom":"right",R=n.reference[v]+n.reference[u]-f[u]-n.floating[v],k=f[u]-n.reference[u],L=await(c.getOffsetParent==null?void 0:c.getOffsetParent(o)),U=L?u==="y"?L.clientHeight||0:L.clientWidth||0:0;U===0&&(U=n.floating[v]);let Qt=R/2-k/2,Je=p[F],et=U-x[v]-p[Q],N=U/2-x[v]/2+Qt,I=xo(Je,N,et),Pe=(b==="start"?p[F]:p[Q])>0&&N!==I&&n.reference[v]<=n.floating[v];return{[u]:f[u]-(Pe?N<Je?Je-N:et-N:0),data:{[u]:I,centerOffset:N-I}}}}),Rs={left:"right",right:"left",bottom:"top",top:"bottom"};function zt(t){return t.replace(/left|right|bottom|top/g,e=>Rs[e])}function Ns(t,e,o){o===void 0&&(o=!1);let i=Jt(t),s=mt(t),r=wo(s),a=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=zt(a)),{main:a,cross:zt(a)}}var Os={start:"end",end:"start"};function Zo(t){return t.replace(/start|end/g,e=>Os[e])}var Ts=["top","right","bottom","left"],Ma=Ts.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var gt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;let{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:n,elements:c}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:b="bestFit",flipAlignment:v=!0,...x}=t,F=ht(i),Q=u||(F===a||!v?[zt(a)]:function(N){let I=zt(N);return[Zo(N),I,Zo(I)]}(a)),R=[a,...Q],k=await So(e,x),L=[],U=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&L.push(k[F]),f){let{main:N,cross:I}=Ns(i,r,await(n.isRTL==null?void 0:n.isRTL(c.floating)));L.push(k[N],k[I])}if(U=[...U,{placement:i,overflows:L}],!L.every(N=>N<=0)){var Qt,Je;let N=((Qt=(Je=s.flip)==null?void 0:Je.index)!=null?Qt:0)+1,I=R[N];if(I)return{data:{index:N,overflows:U},reset:{placement:I}};let Pe="bottom";switch(b){case"bestFit":{var et;let Lo=(et=U.map(Ut=>[Ut,Ut.overflows.filter(tt=>tt>0).reduce((tt,Mi)=>tt+Mi,0)]).sort((Ut,tt)=>Ut[1]-tt[1])[0])==null?void 0:et[0].placement;Lo&&(Pe=Lo);break}case"initialPlacement":Pe=a}if(i!==Pe)return{reset:{placement:Pe}}}return{}}}};var bt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:i}=e,s=await async function(r,a){let{placement:n,platform:c,elements:p}=r,f=await(c.isRTL==null?void 0:c.isRTL(p.floating)),u=ht(n),b=Jt(n),v=mt(n)==="x",x=["left","top"].includes(u)?-1:1,F=f&&v?-1:1,Q=typeof a=="function"?a(r):a,{mainAxis:R,crossAxis:k,alignmentAxis:L}=typeof Q=="number"?{mainAxis:Q,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...Q};return b&&typeof L=="number"&&(k=b==="end"?-1*L:L),v?{x:k*F,y:R*x}:{x:R*x,y:k*F}}(e,t);return{x:o+s.x,y:i+s.y,data:s}}}};function ks(t){return t==="x"?"y":"x"}var vt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:n={fn:Q=>{let{x:R,y:k}=Q;return{x:R,y:k}}},...c}=t,p={x:o,y:i},f=await So(e,c),u=mt(ht(s)),b=ks(u),v=p[u],x=p[b];if(r){let Q=u==="y"?"bottom":"right";v=xo(v+f[u==="y"?"top":"left"],v,v-f[Q])}if(a){let Q=b==="y"?"bottom":"right";x=xo(x+f[b==="y"?"top":"left"],x,x-f[Q])}let F=n.fn({...e,[u]:v,[b]:x});return{...F,data:{x:F.x-o,y:F.y-i}}}}};function ri(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function G(t){if(t==null)return window;if(!ri(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function W(t){return G(t).getComputedStyle(t)}function q(t){return ri(t)?"":t?(t.nodeName||"").toLowerCase():""}function ai(){let t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function H(t){return t instanceof G(t).HTMLElement}function We(t){return t instanceof G(t).Element}function He(t){return typeof ShadowRoot>"u"?!1:t instanceof G(t).ShadowRoot||t instanceof ShadowRoot}function jt(t){let{overflow:e,overflowX:o,overflowY:i}=W(t);return/auto|scroll|overlay|hidden/.test(e+i+o)}function Ls(t){return["table","td","th"].includes(q(t))}function ei(t){let e=/firefox/i.test(ai()),o=W(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function ni(){return!/^((?!chrome|android).)*safari/i.test(ai())}var ti=Math.min,yt=Math.max,Pt=Math.round;function Oe(t,e,o){var i,s,r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);let n=t.getBoundingClientRect(),c=1,p=1;e&&H(t)&&(c=t.offsetWidth>0&&Pt(n.width)/t.offsetWidth||1,p=t.offsetHeight>0&&Pt(n.height)/t.offsetHeight||1);let f=We(t)?G(t):window,u=!ni()&&o,b=(n.left+(u&&(i=(s=f.visualViewport)==null?void 0:s.offsetLeft)!=null?i:0))/c,v=(n.top+(u&&(r=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?r:0))/p,x=n.width/c,F=n.height/p;return{width:x,height:F,top:v,right:b+x,bottom:v+F,left:b,x:b,y:v}}function ue(t){return(e=t,(e instanceof G(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function At(t){return We(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function li(t){return Oe(ue(t)).left+At(t).scrollLeft}function Es(t,e,o){let i=H(e),s=ue(e),r=Oe(t,i&&function(c){let p=Oe(c);return Pt(p.width)!==c.offsetWidth||Pt(p.height)!==c.offsetHeight}(e),o==="fixed"),a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if(i||!i&&o!=="fixed")if((q(e)!=="body"||jt(s))&&(a=At(e)),H(e)){let c=Oe(e,!0);n.x=c.x+e.clientLeft,n.y=c.y+e.clientTop}else s&&(n.x=li(s));return{x:r.left+a.scrollLeft-n.x,y:r.top+a.scrollTop-n.y,width:r.width,height:r.height}}function ci(t){return q(t)==="html"?t:t.assignedSlot||t.parentNode||(He(t)?t.host:null)||ue(t)}function oi(t){return H(t)&&W(t).position!=="fixed"?function(e){let{offsetParent:o}=e,i=e,s=!1;for(;i&&i!==o;){let{assignedSlot:r}=i;if(r){let a=r.offsetParent;if(W(r).display==="contents"){let n=r.hasAttribute("style"),c=r.style.display;r.style.display=W(i).display,a=r.offsetParent,r.style.display=c,n||r.removeAttribute("style")}i=r,o!==a&&(o=a,s=!0)}else if(He(i)&&i.host&&s)break;i=He(i)&&i.host||i.parentNode}return o}(t):null}function Bo(t){let e=G(t),o=oi(t);for(;o&&Ls(o)&&W(o).position==="static";)o=oi(o);return o&&(q(o)==="html"||q(o)==="body"&&W(o).position==="static"&&!ei(o))?e:o||function(i){let s=ci(i);for(He(s)&&(s=s.host);H(s)&&!["html","body"].includes(q(s));){if(ei(s))return s;{let r=s.parentNode;s=He(r)?r.host:r}}return null}(t)||e}function ii(t){if(H(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=Oe(t);return{width:e.width,height:e.height}}function di(t){let e=ci(t);return["html","body","#document"].includes(q(e))?t.ownerDocument.body:H(e)&&jt(e)?e:di(e)}function pi(t,e){var o;e===void 0&&(e=[]);let i=di(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=G(i),a=s?[r].concat(r.visualViewport||[],jt(i)?i:[]):i,n=e.concat(a);return s?n:n.concat(pi(a))}function si(t,e,o){return e==="viewport"?ft(function(i,s){let r=G(i),a=ue(i),n=r.visualViewport,c=a.clientWidth,p=a.clientHeight,f=0,u=0;if(n){c=n.width,p=n.height;let b=ni();(b||!b&&s==="fixed")&&(f=n.offsetLeft,u=n.offsetTop)}return{width:c,height:p,x:f,y:u}}(t,o)):We(e)?function(i,s){let r=Oe(i,!1,s==="fixed"),a=r.top+i.clientTop,n=r.left+i.clientLeft;return{top:a,left:n,x:n,y:a,right:n+i.clientWidth,bottom:a+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(e,o):ft(function(i){var s;let r=ue(i),a=At(i),n=(s=i.ownerDocument)==null?void 0:s.body,c=yt(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=yt(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),f=-a.scrollLeft+li(i),u=-a.scrollTop;return W(n||r).direction==="rtl"&&(f+=yt(r.clientWidth,n?n.clientWidth:0)-c),{width:c,height:p,x:f,y:u}}(ue(t)))}function Cs(t){let e=pi(t),o=["absolute","fixed"].includes(W(t).position)&&H(t)?Bo(t):t;return We(o)?e.filter(i=>We(i)&&function(s,r){let a=r.getRootNode==null?void 0:r.getRootNode();if(s.contains(r))return!0;if(a&&He(a)){let n=r;do{if(n&&s===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(i,o)&&q(i)!=="body"):[]}var Vs={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t,r=[...o==="clippingAncestors"?Cs(e):[].concat(o),i],a=r[0],n=r.reduce((c,p)=>{let f=si(e,p,s);return c.top=yt(f.top,c.top),c.right=ti(f.right,c.right),c.bottom=ti(f.bottom,c.bottom),c.left=yt(f.left,c.left),c},si(e,a,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t,s=H(o),r=ue(o);if(o===r)return e;let a={scrollLeft:0,scrollTop:0},n={x:0,y:0};if((s||!s&&i!=="fixed")&&((q(o)!=="body"||jt(r))&&(a=At(o)),H(o))){let c=Oe(o,!0);n.x=c.x+o.clientLeft,n.y=c.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+n.x,y:e.y-a.scrollTop+n.y}},isElement:We,getDimensions:ii,getOffsetParent:Bo,getDocumentElement:ue,getElementRects:t=>{let{reference:e,floating:o,strategy:i}=t;return{reference:Es(e,Bo(o),i),floating:{...ii(o),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>W(t).direction==="rtl"};var Mt=(t,e,o)=>qo(t,e,{platform:Vs,...o});var ui=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIn0= */`;var{h:Te,classNames:tn,createRef:Is}=omii,Xt,fi,xt,Qo,ke,_=class extends h{constructor(){super(...arguments);m(this,Xt);m(this,xt);l(this,"slotRef",Is());m(this,ke,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props,s=d(this,xt,Qo);if(s){let r=this.$(`.${this.type}-arrow`);Mt(s,this.$element,{strategy:i,placement:e,middleware:[gt(),vt(),bt(o),Fo({element:r})]}).then(({x:a,y:n,placement:c,middlewareData:p})=>{Object.assign(this.$element.style,{left:`${a}px`,top:`${n}px`});let{x:f,y:u}=p.arrow,b={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];r&&Object.assign(r.style,{left:f!=null?`${f}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:""});let v=this.$element.dataset;b=="top"?v.popperPlacement="bottom":b=="bottom"?v.popperPlacement="top":b=="left"?v.popperPlacement="right":b=="right"&&(v.popperPlacement="left")})}}show(){g(this,ke,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),B.fade.show(this.$element)}hide(){g(this,ke,!1),B.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){d(this,ke)?this.hide():this.show()}installed(){let e=d(this,xt,Qo),{triggerShow:o,triggerHide:i}=this.$props;e&&(o.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),this.show()})}),i.split(" ").forEach(s=>{s&&e.addEventListener(s,r=>{r.preventDefault(),r.stopPropagation(),d(this,ke)&&this.hide()})}))}render(e){let{placement:o,header:i,body:s}=this.$props;return Te(Te.f,null,Te("slot",{ref:this.slotRef,tabIndex:!0}),Te("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":o},Te("div",{class:"popover-arrow"}),Te("slot",{name:"header",class:"popover-header"},i),Te("slot",{class:"popover-body",name:"body"},s)))}};Xt=new WeakSet,fi=function(){return this.slotRef.current},xt=new WeakSet,Qo=function(){let e=d(this,Xt,fi).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},ke=new WeakMap,l(_,"css",[()=>y("reboot","utilities","transitions","popover"),ui]),l(_,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),l(_,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var hi=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kifQ== */`;var $s=async t=>new Promise(e=>{let o=new FileReader;o.readAsDataURL(t),o.onload=i=>{e(i.target.result)}}),Ds=async t=>t.split(";base64,")[1],zs=t=>new Promise(e=>{let o=new Image;o.crossOrigin="anonymous",o.src=t,o.onload=()=>{e(Uo(o))}}),Js=t=>new Promise((e,o)=>{try{fetch(t).then(async i=>{if(i.status==200){let s=new Image,r=await i.blob();s.crossOrigin="anonymous",s.src=URL.createObjectURL(r),s.onload=()=>{URL.revokeObjectURL(s.src),e(mi(s))},s.onerror=a=>{o(a)}}else o(new Error(i.status))})}catch(i){o(i)}}),mi=(t,e="image.png")=>vi(gi(t),e,"image/png"),gi=t=>bi(Uo(t)),Uo=(t,e="image/png",o=.8)=>{let i=document.createElement("canvas"),s=i.getContext("2d");return i.width=t.naturalWidth,i.height=t.naturalHeight,s.drawImage(t,0,0),i.toDataURL(e,o)},bi=t=>{let e=t.split(";base64,"),o=e[0].split(":")[1],i=window.atob(e[1]),s=i.length,r=new Uint8Array(s);for(let a=0;a<s;++a)r[a]=i.charCodeAt(a);return new Blob([r],{type:o})},vi=(t,e,o)=>new File([t],e,{type:o,lastModified:Date.now()}),yi=(t,e,o,i,s,r="image/png",a=.8)=>{let n=i>e?e:i,c=n*o/e;c>s&&(c=s,n=c*e/o);let p=document.createElement("canvas"),f=p.getContext("2d");return p.width=n,p.height=c,f.drawImage(t,0,0,e,o,0,0,n,c),p.toDataURL(r,a)},xi=(t,e,o,i="image/png",s=.8)=>yi(t,t.naturalWidth,t.naturalHeight,e,o,i,s),Ps=async(t,e,o,i="image/png",s=.8)=>new Promise(r=>{let a=new Image;a.src=window.URL.createObjectURL(t),a.onload=()=>{window.URL.revokeObjectURL(a.src),r(xi(a,e,o,i,s))}}),js=(t,e=100,o=100,i="image/jpeg",s=.8)=>new Promise((r,a)=>{try{let n=document.createElement("video");n.src=window.URL.createObjectURL(t),n.preload="auto",n.onloadeddata=()=>{r(wi(n,e,o,i,s)),window.URL.revokeObjectURL(n.src)},n.onerror=c=>{window.URL.revokeObjectURL(n.src),a(c)}}catch(n){a(n)}}),wi=(t,e=100,o=100,i="image/jpeg",s=.8)=>yi(t,t.videoWidth,t.videoHeight,e,o,i,s),Ro=t=>{if(!(t instanceof File)||t.type.indexOf("image/")!=0)return null;let e=new Image;return e.src=URL.createObjectURL(t),e.onload=()=>{URL.revokeObjectURL(e.src)},e.src};var Si={convertImageUrlToBase64:zs,createVideoThumb:wi,createVideoFileThumb:js,convertImageUrlToFile:Js,convertBase64ToBlob:bi,convertBlobToFile:vi,convertImageToBase64:Uo,convertImageToBlob:gi,convertImageToFile:mi,splitBase64:Ds,readFileAsBase64:$s,createImageFileThumb:Ps,createImageThumb:xi,getPreviewUrl:Ro};var{h:O,classNames:As}=omii,Fi=t=>t?.type?.indexOf("image")==0,Ms=t=>Fi(t)?(t.url=t.url??Ro(t.file),O("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):O("div",{className:"file"},O("oi-icon",{"view-box":"1024",name:Vt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),O("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),Bi=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return O("div",{className:"pictures"},O("div",{class:"row row-cols-auto g-4"},e.map((s,r)=>O("div",{className:"col",key:`file-${r}`},O("div",{class:"card",onClick:()=>{t.open(r)}},Ms(s),O("div",{className:"actions"},O("div",{class:"position-absolute top-50 start-50 translate-middle"},Fi(s)&&O("oi-icon",{name:"search"}),O("oi-icon",{name:"delete_forever",onClick:a=>{a.preventDefault(),a.stopPropagation(),t.remove(r)}})))))),(i||e.length==0)&&O("div",{className:"col selector-col",key:"selector"},O("div",{class:"card selector"},O("label",{class:As("selector",{multiple:i}),title:o,onClick:()=>{t.open()}},O("oi-icon",{name:"add"}))))))};var{h:z,classNames:mn}=omii,Qi=({component:t})=>{let{files:e,selectText:o,multiple:i}=t.$props;return z("div",{className:"files"},z("slot",{name:"actions"},z("button",{className:"btn btn-primary",onClick:()=>{t.open()}},o)),z("table",{class:"table"},z("tbody",null,e.map(s=>z("tr",null,z("td",null,z("oi-icon",{"view-box":"1024",name:Vt(s.ext),type:"file-type"}),s.name,s.ext),z("td",null,po(s.size)),z("td",null,z("oi-icon",{name:"delete"})))))))};var{h:Wt,classNames:vn}=omii,Xs={pictures:Bi,files:Qi},Ht={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Le,fe=class extends h{constructor(){super(...arguments);m(this,Le,-1)}static get STATUS(){return Ht}open(e=-1){g(this,Le,e),this.$("#files").click()}remove(e){this.$props.files?.splice(e,1),this.updateSelf()}select(e){let{multiple:o,files:i,autoUpload:s}=this.$props;if(e?.length==0)return!1;if(o||i.splice(0,i.length),d(this,Le)!=-1&&e.length>=1){let r=Array.from(e).map(a=>({id:null,name:Et(a.name),ext:Lt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.splice(d(this,Le),1,...r),this.fire("replaced",{index:d(this,Le),replaceFiles:r})}else{let r=Array.from(e).map(a=>({id:null,name:Et(a.name),ext:Lt(a.name),size:a.size,type:a.type,lastModified:a.lastModified,file:a}));i.push(...r),this.fire("selected",{selected:r})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.update()}upload(){let{files:e,action:o,withCredentials:i,headers:s}=this.$props;o||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");for(let r of e.filter(a=>a.file&&(!a.status||a.status==Ht.NONE||a.status==Ht.ERROR))){let a=new FormData;a.append("file",r.file);let n=new XMLHttpRequest;if(n.open("POST",o),n.withCredentials=i,typeof s=="function"&&(s=s()),typeof s=="object")for(let c in s)n.setRequestHeader(c,s[c]);n.send(a),n.onreadystatechange=function(c){if(n.readyState===4&&n.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let p=JSON.parse(n.responseText);Object.assign(r,p),this.fire("uploaded",{file:r,data:p}),this.refresh()}else r.status=Ht.ERROR,console.log("\u4E0A\u4F20\u5931\u8D25",n,c)},n.upload.onprogress=function(c){if(c.lengthComputable){let p=Math.ceil(c.loaded/c.total*100);r.progress=p,this.fire("progress",{file:r,loaded:c.loaded}),console.log(p+"%"),this.refresh()}}}}render(){let{multiple:e,accept:o,template:i}=this.$props;return Wt(Wt.f,null,Wt("slot",null,Xs[i]),Wt("input",{id:"files",type:"file",multiple:e,accept:o,onChange:s=>{this.select(s.target.files)}}))}};Le=new WeakMap,l(fe,"css",[()=>y("reboot","containers","grid","card","utilities","buttons","tables"),hi]),l(fe,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),l(fe,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Ui=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIn0= */`;var Ws="transitionend";var Ri=t=>{t.dispatchEvent(new Event(Ws))},Hs=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Ni=t=>{if(!Hs(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return e;if(o!==t){let i=t.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return e};var{h:V,classNames:Oi,extractClass:_s}=omii;var Ys="carousel-item-end",Ks="carousel-item-start",Zs="carousel-item-next",qs="carousel-item-prev",Gs=".active",er=".carousel-item",Cn=Gs+er,Ee,ee,wt,me,he=class extends h{constructor(){super(...arguments);m(this,Ee,0);m(this,ee,!1);m(this,wt,[]);m(this,me,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return d(this,Ee)}get isSliding(){return d(this,ee)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){d(this,ee)&&Ri(this),clearInterval(d(this,me)),g(this,me,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(d(this,ee))return!1;let{$activeItem:o,$items:i,$props:{duration:s}}=this,r=i.indexOf(o),a,n;if(e instanceof HTMLElement?(n=e,a=i.indexOf(n),e=a>r):typeof e=="number"?(a=(e+i.length)%i.length,n=i[a],e=a>r):(a=(r+1)%i.length,e||(a=(r-1+i.length)%i.length),n=i[a]),d(this,Ee)==a)return!1;let c=e?Ks:Ys,p=e?Zs:qs;g(this,ee,!0);let f=Number.parseFloat(o.getAttribute("waiting"))??0;C(n,[{classNames:[],duration:f},{classNames:[p],callback:()=>{Ct(n)}},{classNames:[p,c],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((u,b)=>{a==b?u.classList.add("active"):u.classList.remove("active")})}}]),C(o,[{classNames:[],duration:f},{classNames:[c,"active"],duration:s},{classNames:[],callback:()=>{g(this,ee,!1),g(this,Ee,a);let u;for(;u=d(this,wt).pop();)u()}}])}nextWhenVisible(){!document.hidden&&Ni(this)&&this.slide()}cycle(){d(this,me)&&clearInterval(d(this,me)),g(this,me,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),g(this,Ee,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(d(this,ee)?d(this,wt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:o,nextCtrl:i,prevCtrl:s,indicator:r}=this.$props;return V("div",{..._s(e,"carousel")},V("slot",{class:"carousel-inner"},o.map(a=>V("div",{className:Oi("carousel-item"),waiting:a.attributes?.waiting},a))),V("div",{class:"carousel-indicators"},V("slot",{name:"indicators"},typeof r=="function"&&o.map((a,n)=>r({item:a,index:n,host:this})))),V("slot",{name:"actions"},typeof i=="function"&&i(this),typeof s=="function"&&s(this)))}};Ee=new WeakMap,ee=new WeakMap,wt=new WeakMap,me=new WeakMap,l(he,"css",[()=>y("reboot","utilities","carousel"),Ui]),l(he,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>V("button",{class:"carousel-control-prev",type:"button",onClick:o=>{e.slide(!1)}},V("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),V("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>V("button",{class:"carousel-control-next",type:"button",onClick:o=>{e.slide()}},V("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),V("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:o})=>V("button",{type:"button",onClick:i=>o.slide(e),class:Oi({active:e==0})})}),l(he,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:No,classNames:$n,extractClass:tr}=omii,ge=class extends h{css(){}render(t){let{text:e,desc:o,position:i}=this.$props,s=i?i.split("-"):[];return No("span",{...tr(t,"badge",{"position-absolute":i,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":i,"rounded-pill":i})},No("slot",null,e),o&&No("span",{class:"visually-hidden"},o))}};l(ge,"css",()=>y("reboot","utilities","badge")),l(ge,"defaultProps",{text:"",desc:!1,position:!1}),l(ge,"propTypes",{});var Ti=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EifQ== */`;var{h:_e,classNames:An,extractClass:or}=omii,ve,be=class extends h{constructor(){super(...arguments);m(this,ve,!0)}get closed(){return d(this,ve)}close(){g(this,ve,!0),B.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){g(this,ve,!1),this.update(),B.fade.show(this)}install(){g(this,ve,!this.$props.visible)}render(e){return _e("div",{...or(e,"toast",{show:!d(this,ve)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},_e("div",{class:"toast-header"},_e("slot",{name:"header"}),_e("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:o=>{this.close()}})),_e("div",{class:"toast-body"},_e("slot",null)))}};ve=new WeakMap,l(be,"css",[()=>y("reboot","utilities","toasts","close"),Ti]),l(be,"defaultProps",{visible:!1}),l(be,"propTypes",{visible:Boolean});var{h:Oo,classNames:ir,extractClass:Kn}=omii,ye=class extends h{setValue(t){this.$props.value=value,this.update()}css(){}render(t){let{label:e,value:o,min:i,max:s,showPercent:r,striped:a,animated:n,style:c,className:p}=this.$props;return Oo("div",{class:"progress",style:c},Oo("div",{class:ir("progress-bar",t.class??t.className,{"progress-bar-striped":a,"progress-bar-animated":n}),role:"progressbar","aria-label":e,style:{width:`${o}%`},"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":s},r&&Oo("span",null,o,"%")))}};l(ye,"css",()=>y("reboot","utilities","progress")),l(ye,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1}),l(ye,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean});var ki=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSJ9 */`;var{h:Ye,classNames:ol,createRef:il}=omii,_t=class extends _{get type(){return"tooltip"}render(t){let{placement:e,body:o}=this.$props;return Ye(Ye.f,null,Ye("slot",{ref:this.slotRef}),Ye("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},Ye("div",{class:"tooltip-arrow"}),Ye("slot",{class:"tooltip-inner",name:"body"},o)))}},Ce=_t;l(Ce,"css",[()=>y("reboot","utilities","transitions","tooltip"),ki]),l(Ce,"defaultProps",{...ot(_t,_t,"defaultProps"),offset:0});var Li=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSJ9 */`;var{h:xe,classNames:cl,createRef:Ke}=omii,J,te,P,Ve,Ie,Yt,we=class extends h{constructor(){super(...arguments);m(this,J,Ke());m(this,te,Ke());m(this,P,Ke());m(this,Ve,Ke());m(this,Ie,Ke());m(this,Yt,Ke())}close(e,o){}closeFooter(){this.$props.openFooter=!1,B.collapse.hide(d(this,P).current),d(this,te).current.style.height=this.clientHeight-d(this,J).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,B.collapse.show(d(this,P).current),d(this,te).current.style.height=this.clientHeight-d(this,J).current.clientHeight-d(this,P).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,B.collapse.hide(d(this,J).current),d(this,te).current.style.height=this.clientHeight-d(this,P).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,B.collapse.show(d(this,J).current),d(this,te).current.style.height=this.clientHeight-d(this,J).current.scrollHeight-d(this,P).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,B.collapse.hide(d(this,Ve).current)}openLeft(){this.$props.openLeft=!0,B.collapse.show(d(this,Ve).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,B.collapse.hide(d(this,Ie).current)}openRight(){this.$props.openRight=!0,B.collapse.show(d(this,Ie).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),o=d(this,J).current.getBoundingClientRect(),i=d(this,P).current.getBoundingClientRect();d(this,te).current.style.height=e.height-o.height-i.height+"px"}installed(){let{openFooter:e,openHeader:o,openLeft:i,openRight:s}=this.$props;e||(d(this,P).current.style.height=0),o||(d(this,J).current.style.height=0),i||(d(this,Ve).current.style.height=0),s||(d(this,Ie).current.style.height=0),this.resize(),window.addEventListener("resize",r=>{this.resize()},!0)}render(e){return xe(xe.f,null,xe("slot",{name:"header",ref:d(this,J)}),xe("main",{ref:d(this,te)},xe("slot",{name:"left",ref:d(this,Ve),class:"collapse-horizontal"}),xe("slot",{name:"content",ref:d(this,Yt)}),xe("slot",{name:"right",ref:d(this,Ie),class:"collapse-horizontal"})),xe("slot",{name:"footer",ref:d(this,P)}))}};J=new WeakMap,te=new WeakMap,P=new WeakMap,Ve=new WeakMap,Ie=new WeakMap,Yt=new WeakMap,l(we,"css",[Li]),l(we,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),l(we,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var Ei=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EifQ== */`;var{h:To,classNames:vl,uniqueTag:sr}=omii,Y,Se=class extends h{constructor(){super(...arguments);m(this,Y,void 0)}get $module(){return d(this,Y)}load(e,o,i,s){o=o??this.$props.module,i=i??this.$props.loading,s=s??this.$props.loadError,g(this,Y,i),e&&o&&import(e).then(r=>{let a=r[o];if(a==null)g(this,Y,s);else if(typeof a=="function"){let n=sr(a);g(this,Y,To(n,null))}else g(this,Y,a);this.updateSelf()}).catch(r=>{console.error("import module error\uFF01",e,o,r),g(this,Y,s),this.updateSelf()})}install(){let{src:e,module:o,loading:i,loadError:s}=this.$props;this.load(e,o,i,s)}render(e){return d(this,Y)}};Y=new WeakMap,l(Se,"css",[Ei]),l(Se,"defaultProps",{src:null,module:"default",loading:To("oi-loading",{size:"6"}),loadError:To("h1",null,"Module Load Error")}),l(Se,"propTypes",{src:String,module:String});var Ci=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kifQ== */`;var{h:Fe,classNames:Bl,createRef:Vi,extractClass:rr}=omii,K,Be=class extends h{constructor(){super(...arguments);l(this,"offcanvasRef",Vi());l(this,"backdropRef",Vi());m(this,K,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(d(this,K))return;g(this,K,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:o}=this.$props;C(e,[{classNames:"showing",duration:o},{classNames:"show"}])}toggle(){d(this,K)?this.hide():this.show()}open(){this.show()}hide(){if(!d(this,K))return;g(this,K,!1);let e=this.offcanvasRef.current;e.blur();let{duration:o}=this.$props;C(e,[{classNames:"hiding show",duration:o},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){g(this,K,this.$props.visible)}render(e){let{visible:o,placement:i,position:s,title:r,useBackdrop:a}=this.$props;return Fe(Fe.f,null,Fe("div",{ref:this.offcanvasRef,...rr(e,"offcanvas",`offcanvas-${i}`,`position-${s}`,{show:o}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Fe("div",{class:"offcanvas-header"},Fe("slot",{name:"title",class:"offcanvas-title h5"},r),Fe("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:n=>this.close()})),Fe("slot",{class:"offcanvas-body"})),a&&d(this,K)&&Fe("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:n=>{this.hide()}}))}};K=new WeakMap,l(Be,"css",[()=>y("reboot","offcanvas","utilities","close"),Ci]),l(Be,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),l(Be,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:kl,classNames:Ll,extractClass:El,createRef:Cl}=omii;function Di(t){let{validity:e}=t;if(!!e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let o=[];for(let i in e)i!=="valid"&&e[i]===!0&&o.push(i);t.dataset.invalid=o.join(" "),t.dataset.validationMessage=t.validationMessage}}function Ii(t){let e=t.currentTarget;e.checkValidity(),Di(t.target),e.classList.add("was-validated")}function zi(t){let e=t.checkValidity(),o=[...t.querySelectorAll("[data-validate")];return[...t.elements,...o].forEach(i=>{Di(i)}),t.classList.add("was-validated"),o.every(i=>i.checkValidity?i.checkValidity():!0)&&e}function $i(t){let e=t.target;e.removeEventListener("input",Ii),e.addEventListener("input",Ii,!1),zi(e)||(t.preventDefault(),t.stopPropagation())}var Ze=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",$i),e.addEventListener("submit",$i,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return zi(this)}connectedCallback(){this.constructor.validate(this)}};var Ji=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQSJ9 */`;var{h:Kt,classNames:$l,createRef:Pi}=omii,De=null;document.addEventListener("click",t=>{De&&De.hide()});var St,Ft,oe,$e,Bt,ko,qe,Qe=class extends h{constructor(){super(...arguments);m(this,oe);m(this,Bt);m(this,St,Pi());m(this,Ft,Pi());m(this,qe,!1)}get $menu(){return d(this,St).current}setPosition(){let{placement:e,offset:o,strategy:i}=this.$props;Mt(d(this,Bt,ko),this.$menu,{strategy:i,placement:e,middleware:[gt(),vt(),bt(o)]}).then(({x:s,y:r,placement:a})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${r}px`})})}show(){g(this,qe,!0),d(this,oe,$e).focus(),d(this,oe,$e).setAttribute("aria-expanded",!0),d(this,oe,$e).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),De=this,this.setPosition()}hide(){g(this,qe,!1),d(this,oe,$e).classList.remove("show"),d(this,oe,$e).setAttribute("aria-expanded","false"),De=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){d(this,qe)?this.hide():this.show()}installed(){d(this,Bt,ko).addEventListener("click",e=>{De&&De!=this&&De.hide(),this.toggle(),e.preventDefault(),e.stopPropagation()}),this.addEventListener("click",e=>{e.stopPropagation()})}render(e){let{menu:o}=this.$props;return Kt(Kt.f,null,Kt("slot",{ref:d(this,Ft)}),Kt("slot",{name:"menu",ref:d(this,St)},o))}};St=new WeakMap,Ft=new WeakMap,oe=new WeakSet,$e=function(){return d(this,Ft).current},Bt=new WeakSet,ko=function(){let e=d(this,oe,$e).assignedElements();if(e.length===0){let{reference:o}=this.$props;return typeof o=="string"?this.getRootNode()?.querySelector(o):o?.current??o}else return e.at(0)},qe=new WeakMap,l(Qe,"css",[()=>y("reboot","utilities","transitions","dropdown"),Ji]),l(Qe,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),l(Qe,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var ji=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSJ9 */`;var{h:ar,Component:Xl}=omii,Zt,Ue=class extends h{constructor(){super(...arguments);m(this,Zt,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:o,automaticLayout:i,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:r})=>{g(this,Zt,r),this.editor=r.editor.create(this.$(".coder"),{value:e,language:o,automaticLayout:i,fontSize:s,minimap:{enabled:!1}})})}render(){return ar("div",{class:"coder"})}};Zt=new WeakMap,l(Ue,"css",[()=>{let e=import.meta.url,o=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,i=new CSSStyleSheet;return i.replace(o),document.adoptedStyleSheets=[...document.adoptedStyleSheets,i],fetch(new URL("./monaco/index.css",e).href).then(s=>s.text())},ji]),l(Ue,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),l(Ue,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var Ai=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXEdJVFxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUo7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQVFSO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlBO0VBQ0k7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJIn0= */`;var{h:j,classNames:Zl,extractClass:ql}=omii,Ge,ze=class extends h{constructor(){super(...arguments);m(this,Ge,!1)}get validity(){let{required:e,values:o}=this.$props,i=!0;return e&&(!o||o.length==0)&&(i=!1),{valid:i}}checkValidity(){g(this,Ge,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}receiveProps(e,o){e.values!=o.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",e=>{this.showOptions()})}render(){let{values:e,options:o}=this.$props;return e=e??[],o=o??[],j("oi-dropdown",{placement:"bottom-start",css:`
          slot[name="menu"] {
            width: 100%;
          }
        `},j("div",{class:"selected d-flex",onClick:i=>{i.stopImmediatePropagation()}},"\xA0",j("ul",{class:"values flex-grow-1"},e.map((i,s)=>{let r=o.find(a=>a.value==i);if(r)return j("li",{onClick:a=>{a.stopImmediatePropagation()}},r.text,j("oi-bi",{name:"x",onClick:a=>{e.splice(s,1),this.updateSelf(),a.stopPropagation(),d(this,Ge)&&this.checkValidity()}}))})),j("div",{class:"expander",onClick:i=>{this.showOptions()}})),j("ul",{class:"dropdown-menu",slot:"menu"},o.map((i,s)=>j("li",null,j("div",{class:"form-check d-flex"},j("input",{class:"form-check-input",type:"checkbox",value:i.value,id:`option${s}`,checked:e.includes(i.value),onChange:r=>{if(r.target.checked)e.includes(i.value)||e.push(i.value);else{let a=e.indexOf(i.value);a!=-1&&e.splice(a,1)}this.updateSelf(),d(this,Ge)&&this.checkValidity()}}),j("label",{class:"form-check-label flex-grow-1",for:`option${s}`},i.text))))))}};Ge=new WeakMap,l(ze,"css",[()=>y("reboot","utilities","forms","scrollbar"),Ai]),l(ze,"defaultProps",{options:[],values:[],multiple:!0,required:!1}),l(ze,"propTypes",{multiple:Boolean,required:Boolean});var{define:w}=omii;w("oi-rate",se);w("oi-tab",ie);w("oi-icon",$);w("oi-bi",A);w("oi-pager",X);w("oi-tree",ne);w("oi-loading",Z);w("oi-alert",le);w("oi-accordion",ce);w("oi-breadcrumb",de);w("oi-modal",pe);w("oi-popover",_);w("oi-uploader",fe);w("oi-carousel",he);w("oi-badge",ge);w("oi-toast",be);w("oi-progress",ye);w("oi-tooltip",Ce);w("oi-layout",we);w("oi-import",Se);w("oi-offcanvas",Be);w("oi-pagination",ae);w("oi-dropdown",Qe);w("oi-coder",Ue);w("oi-select",ze);customElements.define("oi-form",Ze,{extends:"form"});var nr=import.meta.url;omii.ui={utils:Xo,vision:Si,css:jo,effect:B,icon:$,tab:ie,rate:se,pager:X,tree:ne,treeNode:no,loading:Z,alert:le,accordion:ce,breadcrumb:de,modal:pe,popover:_,uploader:fe,carousel:he,badge:ge,toast:be,progress:ye,tooltip:Ce,layout:we,import:Se,offcanvas:Be,pagination:ae,form:Ze,dropdown:Qe,coder:Ue,importURL:nr};export{ce as accordion,le as alert,A as bicon,de as breadcrumb,he as carousel,Ue as coder,jo as css,Qe as dropdown,B as effect,Ze as form,$ as icon,Se as import,nr as importURL,we as layout,Z as loading,pe as modal,Be as offcanvas,X as pager,ae as pagination,_ as popover,ye as progress,se as rate,ie as tab,be as toast,Ce as tooltip,ne as tree,no as treeNode,fe as uploader,Xo as utils,Si as vision};
//# sourceMappingURL=omii-ui.js.map
