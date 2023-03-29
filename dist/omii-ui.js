var Qs=Object.defineProperty;var Ys=Object.getPrototypeOf;var Ts=Reflect.get;var Ds=(t,e,i)=>e in t?Qs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var c=(t,e,i)=>(Ds(t,typeof e!="symbol"?e+"":e,i),i),xi=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var g=(t,e,i)=>(xi(t,e,"read from private field"),i?i.call(t):e.get(t)),C=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},I=(t,e,i,o)=>(xi(t,e,"write to private field"),o?o.call(t,i):e.set(t,i),i),yi=(t,e,i,o)=>({set _(s){I(t,e,s,i)},get _(){return g(t,e,o)}}),Et=(t,e,i)=>(xi(t,e,"access private method"),i),ht=(t,e,i)=>Ts(Ys(t),i,e);var zs=(t,e=!1)=>(t=t.replace(/\n/g,"").replace(/<br\/?>/gi,`
`).replace(/<div[^>]*>/gi,`
`).replace(/<[^>]*\/?>/gi,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"'),e&&(t=t.replace(/\n/ig,"")),t),js=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()},Es=t=>{let e=new Date;return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()+1},$t=t=>{if(!t)return null;let e=t.match(/\.\w+$/);return e?e.toString().toLowerCase():null},Mt=t=>{if(!t)return null;let e=t.lastIndexOf(".");return e==-1?t:t.substring(0,e)};var $s=["B","KB","MB","GB","TB","PB"],vi=t=>{t=Number.parseInt(t);let e=t,i=0;for(;e>1024;)e/=1024,i++;return e.toFixed(i==0?0:2)+$s[i]},Ms=(t,e)=>{let i=document.createElement("a");i.download=e,i.href=t,i.target="_blank",i.click()},Ps=(t,e)=>{window.chrome.extension?t():e()},Pt=t=>{t.offsetHeight},_s=[[[".doc",".docx"],"word"],[[".ppt",".pptx"],"powerpoint"],[[".xls",".xlsx"],"excel"],[[".zip",".rar"],"zip"],[[".pdf"],"pdf"]],mt=t=>{if(!t)return"file";t=t.toLowerCase();let e=_s.find(i=>i[0].includes(t));return e==null?"file":e[1]};var so={tryExtension:Ps,getFileType:mt,downloadUrl:Ms,getName:Mt,getExtension:$t,cleanHTML:zs,isToday:js,isYesterday:Es,formatSize:vi};var Ks=import.meta.url,qs="sortable.core.esm.js",ao=new URL("./sortablejs/",Ks).href,U=null,T={AutoScroll:!1,Remove:!1,Revert:!1,MultiDrag:!1,Swap:!1};async function ea({autoScroll:t,remove:e,revert:i,multiDrag:o,swap:s}={autoScroll:!0,remove:!0,revert:!0,multiDrag:!1,swap:!1},a=ao){U||(U=await import(new URL(qs,a).href)),t&&!T.AutoScroll&&(T.AutoScroll=!0,U.Sortable.mount(new U.AutoScroll));let[l,r]=U.OnSpill;return e&&!T.Remove&&(T.Remove=!0,U.Sortable.mount(l)),e&&!T.Remove&&(T.Remove=!0,U.Sortable.mount(l)),i&&!T.Remove&&(T.Revert=!0,U.Sortable.mount(r)),o&&!T.MultiDrag&&(T.MultiDrag=!0,U.Sortable.mount(new U.MultiDrag)),s&&!T.Swap&&(T.Swap=!0,U.Sortable.mount(new U.Swap)),U.Sortable}function ta(t){ao=t}var it={use:ea,setRoot:ta};var{define:al,h:ll,Component:ia}=omii,h=class extends ia{};var lo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx0YWIiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOzs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUdJO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFLWjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUVBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGFicyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5uYXZzIHtcclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1vaS10YWItbmF2LXBhZGRpbmcsIDAuM3JlbSAxcmVtKTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLW9pLXRhYi1uYXYtbGluZS1oZWlnaHQsIDEuMik7XHJcbiAgICAgICAgICAgIGZvbnQ6IHZhcigtLW9pLXRhYi1uYXYtZm9udCwgMS4ycmVtIGFyaWFsLCBzYW5zLXNlcmlmKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW9pLXRhYi1uYXYtY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC4ycmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHZhcigtLW9pLXRhYi1uYXYtYm9yZGVyLXRvcCwgMXB4IHNvbGlkIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1vaS10YWItbmF2LWJvcmRlci1yaWdodCwgMXB4IHNvbGlkIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tb2ktdGFiLW5hdi1ib3JkZXItYm90dG9tLCAxcHggc29saWQgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tb2ktdGFiLW5hdi1ib3JkZXItbGVmdCwgMXB4IHNvbGlkIHRyYW5zcGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IHZhcigtLW9pLXRhYi1uYXYtYWN0aXZlLWJvcmRlci10b3AsIDFweCBzb2xpZCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9pLXRhYi1uYXYtYWN0aXZlLWJvcmRlci1yaWdodCwgMXB4IHNvbGlkIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLW9pLXRhYi1uYXYtYWN0aXZlLWJvcmRlci1ib3R0b20sIDFweCBzb2xpZCAjMGQ2ZWZkKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiB2YXIoLS1vaS10YWItbmF2LWFjdGl2ZS1ib3JkZXItbGVmdCwgMXB4IHNvbGlkIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLW9pLXRhYi1uYXYtYWN0aXZlLWZvbnQsIGJvbGQgMS4ycmVtIGFyaWFsLCBzYW5zLXNlcmlmKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1vaS10YWItbmF2LWFjdGl2ZS1jb2xvciwgdmFyKC0tb2ktcHJpbWFyeSkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1vaS10YWItbmF2LWhvdmVyLWJvcmRlci10b3AsIDFweCBzb2xpZCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IHZhcigtLW9pLXRhYi1uYXYtaG92ZXItYm9yZGVyLXJpZ2h0LCAxcHggc29saWQgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tb2ktdGFiLW5hdi1ob3Zlci1ib3JkZXItYm90dG9tLCAxcHggc29saWQgIzBkNmVmZCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tb2ktdGFiLW5hdi1ob3Zlci1ib3JkZXItbGVmdCwgMXB4IHNvbGlkIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHZhcigtLW9pLXRhYi1uYXYtaG92ZXItZm9udCwgYm9sZCAxLjJyZW0gYXJpYWwsIHNhbnMtc2VyaWYpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW9pLXRhYi1uYXYtaG92ZXItY29sb3IsIHZhcigtLW9pLXByaW1hcnkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGFuZXMge1xyXG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW9pLXRhYi1uYXYtcGFuZXMtcGFkZGluZywgMHJlbSk7XHJcblxyXG4gICAgICAgIC5wYW5lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9pLWxvYWRpbmcge1xyXG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tb2ktdGFiLWxvYWRpbmctc2l6ZSwgM3JlbSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tb2ktdGFiLWxvYWRpbmctc2l6ZSwgM3JlbSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */`;var{h:ot,Component:pl,classNames:ro,render:ul}=omii,Ie=class extends h{get activeIndex(){return this.$props.activeIndex??0}get activeKey(){return this.$props.activeKey}async active({index:t,key:e},i=null){(i==null||i==this.$props.activeEvent)&&(this.activeKey?this.update$Props({activeKey:e},{ignoreAttrs:!0,updateSelf:!0}):this.update$Props({activeIndex:t},{ignoreAttrs:!0,updateSelf:!0}))}get slotPanes(){return this.$("slot")?.assignedElements()}async render(t){let e=this.$props,i=t.items??e.items,o=[],s=[];for(let a=0;a<(i??[]).length;a++){let l=i[a],r=this.activeKey?this.activeKey==l.key:a==this.activeIndex,d=l.pane;s.push(ot("div",{key:`pane-${l.key??a}`,className:ro("pane",{active:r})},d)),o.push(ot("div",{key:`nav-${l.key??a}`,className:ro("nav",{active:r}),onMouseEnter:()=>this.active({index:a,key:l.key},"hover"),onclick:()=>this.active({index:a,key:l.key},"click")},l.nav??l.name??l.key))}return ot("div",{class:"tabs"},ot("div",{class:"navs"},o),ot("div",{class:"panes"},s,ot("slot",null)))}};c(Ie,"css",lo),c(Ie,"defaultProps",{activeIndex:null,activeKey:null,activeEvent:"click"}),c(Ie,"propTypes",{activeIndex:Number,activeKey:String,activeEvent:String});var Te={BUNDLE:"bundle",SINGLE:"single"},At={FILLED:"filled",OUTLINED:"outlined",ROUND:"round",SHARP:"sharp",TWO_TONE:"two-tone",FILE_TYPE:"file-type"};var{define:Al,h:co,Component:bl}=omii,bt=Te.SINGLE,Xi=At.FILLED,no=new Map,Gi=async(t,e,i)=>{e=e??Xi,e==At.FILE_TYPE&&(i=Te.BUNDLE);try{if((i??bt)==Te.BUNDLE){let{default:o}=await import(`./icons/${e}.js`);return o[t]}else{let o=`${e}:${t}`,s=no.get(o);if(s==null){s={icon:!1,resolves:[]},no.set(o,s);try{let{default:a}=await import(`./icons/${e}/${t}.js`);s.icon=a}catch{s.icon=null}for(let a of s.resolves)a(s.icon);return s.resolves=[],s.icon}return s.icon===!1?new Promise((a,l)=>{s.resolves.push(a)}):s.icon}}catch(o){return console.error("load icon error",t,e,o),null}},oa=async(t,e,i,o={})=>{let s=await Gi(t,e,i);return co("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...o},s)},D=class extends h{static useBundleMode(){bt=Te.BUNDLE}static useSingleMode(){bt=Te.SINGLE}static get MODES(){return Te}static get TYPES(){return At}static get Mode(){return bt}static set Mode(t){bt=t}static get Type(){return Xi}static set Type(t){Xi=t}css(){let{size:t,color:e}=this.$props,i=e||"var(--oi-icon-color)",o=t?`${t}rem`:"var(--oi-icon-width, 1rem)",s=t?`${t}rem`:"var(--oi-icon-height, 1rem);";return`
      :host svg{
        fill: ${i} ;
        width: ${o};
        height: ${s};
      }
    `}async render(){let{name:t,type:e,viewBox:i}=this.$props,o=await Gi(t,e);return co("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${i} ${i}`},o)}};c(D,"updateOnAttributeChanged",!0),c(D,"propTypes",{name:String,type:String,viewBox:Number,size:Number,color:String}),c(D,"defaultProps",{name:null,type:At.FILLED,viewBox:24,size:null,color:null}),c(D,"createSvg",oa),c(D,"loadIcon",Gi),c(D,"css",`
    :host{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-icon-valign,middle) ;
    }
  `);var{h:po}=omii,go=new Map,Bi=async t=>{try{let e=t,i=go.get(e);if(i==null){i={icon:!1,resolves:[]},go.set(e,i);try{let{default:o}=await import(`./bootstrap/icons/${t}.js`);i.icon=o}catch{i.icon=null}for(let o of i.resolves)o(i.icon);return i.resolves=[],i.icon}return i.icon===!1?new Promise((o,s)=>{i.resolves.push(o)}):i.icon}catch{return console.error("load icon error",t),null}},sa=async(t,e={})=>{let i=await Bi(t);return po("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",part:"svg",...e},i)},$=class extends h{css(){let{size:t,color:e}=this.$props,i=e||"var(--oi-bi-color)",o=t?`${t}rem`:"var(--oi-bi-width, 1rem)",s=t?`${t}rem`:"var(--oi-bi-height, 1rem);";return`
      :host svg{
        fill: ${i} ;
        width: ${o};
        height: ${s};
      }
    `}async render(){let{name:t,viewBox:e}=this.$props,i=await Bi(t);return po("svg",{part:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e+" "+e},i)}};c($,"updateOnAttributeChanged",!0),c($,"propTypes",{name:String,viewBox:Number,size:Number,color:String}),c($,"defaultProps",{name:null,viewBox:16,size:null,color:null}),c($,"createSvg",sa),c($,"loadIcon",Bi),c($,"css",`
    :host{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
    svg{
      vertical-align:var(--oi-bicon-valign,middle) ;
    }
  `);var uo=`
:host .rate-wrap {
  display: inline;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxyYXRlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNLO0VBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xyXG4gICAgIC5yYXRlLXdyYXAge1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gfSJdfQ== */`;var{define:Rl,h:wi,Component:Ol,classNames:aa,render:Nl}=omii,Ji={STAR:"star",HALF:"star_half",BORDER:"star_border"},M,Ce=class extends h{constructor(){super(...arguments);C(this,M,-1)}get rateScore(){return this.$props.score}install(){I(this,M,this.$props.score)}rate(e){this.fire("rate",e),I(this,M,e),this.update$Props({score:e})}render(e){let i=this.$props,{maxScore:o,rateable:s,size:a,color:l}=i,r=[],d=g(this,M);for(let n=0;n<o;n++)d-n>=.5?r.push(Ji.STAR):d-n>0?r.push(Ji.HALF):r.push(Ji.BORDER);return wi("div",{class:aa("rate-wrap","rate-"+g(this,M))},r.map((n,u)=>s?wi("oi-icon",{name:n,size:a,color:l,className:n,onmouseenter:p=>{p.preventDefault(),p.stopPropagation(),I(this,M,u+1),this.fire("tryRate",g(this,M)),this.lazyUpdate()},onmouseleave:p=>{p.preventDefault(),p.stopPropagation(),I(this,M,this.rateScore),this.lazyUpdate()},onclick:p=>{p.preventDefault(),p.stopPropagation(),this.rate(u+1)}}):wi("oi-icon",{name:n,size:a,color:l,className:n})))}};M=new WeakMap,c(Ce,"css",uo),c(Ce,"defaultProps",{rateable:!1,maxScore:5,score:0,color:null,size:1}),c(Ce,"propTypes",{rateable:Boolean,maxScore:Number,score:Number,size:Number,color:String});var Io=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxwYWdlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7QUFHSjtFQUNJOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7QUFBQTtBQUFBO0FBQUE7RUFTSTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFNUjtFQUNJO0VBQ0E7RUFDQTtFQUNBOztBQUNBO0VBQ0k7O0FBSVI7RUFDSTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBTVI7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGFnZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1vaS1wYWdlci1wYWdlLXBhZGRpbmcsIDAuMzc1cmVtIDAuNzVyZW0pO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1vaS1wYWdlci1wYWdlLWxpbmUtaGVpZ2h0LCAxLjIpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vaS1wYWdlci1wYWdlLWJnY29sb3IsICNmZmYpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1vaS1wYWdlci1wYWdlLWNvbG9yLCBibGFjayk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM3JlbTtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuZmlyc3QsXHJcbiAgICAubGFzdCxcclxuICAgIC5wcmV2LFxyXG4gICAgLm5leHQge1xyXG4gICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1vaS1wYWdlci1kaXNhYmxlLWNvbG9yLCAjY2NjKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgLS1vaS1pY29uLWNvbG9yOiB2YXIoLS1vaS1wYWdlci1kaXNhYmxlLWNvbG9yLCAjY2NjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9udC1zaXplOjA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW9pLXBhZ2VyLWluZm8tY29sb3IsICMwZDZlZmQpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9pLXBhZ2VyLWluZm8tYmdjb2xvciwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIC5jdXJyIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW9pLXBhZ2VyLWluZm8tY3Vyci1jb2xvciwgcmVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmp1bXBlciB7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMTc1cmVtO1xyXG5cclxuICAgICAgICAuanVtcC10byB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDptaW4tY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9pLXBhZ2VyLXBhZ2UtYWN0aXZlLWJnY29sb3IsICMwZDZlZmQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1vaS1wYWdlci1wYWdlLWFjdGl2ZS1jb2xvciwgI2ZmZik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vaS1wYWdlci1wYWdlLWhvdmVyLWJnY29sb3IsICM2ZjlhYjgpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1vaS1wYWdlci1wYWdlLWhvdmVyLWNvbG9yLCAjZmZmKTtcclxuICAgIH1cclxufSJdfQ== */`;var{h:N,classNames:ft}=omii,P=class extends h{get currPageNum(){return this.$props.pageNum}get pageCount(){let{total:t,pageSize:e,pageCount:i}=this.$props;return(t||t===0)&&e?Math.ceil(t/e):i}goto(t){let{pageCount:e}=this.$props;(t>=1||t<e)&&this.update$Props({pageNum:t}).then(()=>{this.fire("paged",t)})}render(t){return t.createLayout(t,this)}};c(P,"css",Io),c(P,"propTypes",{pageNum:Number,pageCount:Number,pageSize:Number,total:Number,showMore:Boolean}),c(P,"defaultProps",{pageNum:1,pageCount:10,pageSize:10,linksCount:10,showMore:!0,prev:N("oi-icon",{name:"keyboard_arrow_left"}),next:N("oi-icon",{name:"keyboard_arrow_right"}),first:N("oi-icon",{name:"first_page"}),last:N("oi-icon",{name:"last_page"}),createPrev(t,e){let{pageNum:i,prev:o}=t;return N("div",{class:ft("prev",{disable:i<=1}),onClick:s=>{i>1&&e.goto(i-1)}},o)},createNext(t,e){let{pageNum:i,next:o}=t,{pageCount:s}=e;return N("div",{class:ft("next",{disable:i>=s}),onClick:a=>{s>i&&e.goto(i+1)}},o)},createFirst(t,e){let{first:i,pageNum:o}=t;return N("div",{class:ft("first",{disable:o<=1}),onClick:s=>{o!=1&&e.goto(1)}},i)},createLast(t,e){let{last:i,pageNum:o}=t,{pageCount:s}=e;return N("div",{class:ft("last",{disable:o>=s}),onClick:a=>{o!=s&&e.goto(s)}},i)},createPages(t,e){let{linksCount:i,pageNum:o}=t,{pageCount:s}=e,a=Math.ceil(i/2),l=o>a?o-a:1,r=l+i-1;r>s&&(r=s),l=r-i+1;let d=[];l<1&&(l=1);for(let n=l;n<=r;n++)d.push(N("div",{className:ft({active:o==n,page:!0}),onClick:u=>{o!=n&&e.goto(n)}},n));return d},createInfo(t,e){let{pageNum:i}=t,{pageCount:o}=e;return N("div",{class:"info"},N("span",{class:"curr"},i),"/",N("span",{class:"total"},o))},createJumper(t,e){return N("div",{class:"jumper"},"\u524D\u5F80",N("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:i=>{let o=i.currentTarget,s=Number(o.value);s>e.pageCount&&(o.value=e.pageCount),s<1&&(o.value=1),s=Number(o.value),e.goto(s)}}),"\u9875")},createLayout(t,e){let{createFirst:i,createPrev:o,createPages:s,createNext:a,createLast:l,createJumper:r,createInfo:d}=t;return N("div",{class:"pager"},i(t,e),o(t,e),s(t,e),a(t,e),l(t,e),r(t,e),d(t,e))}});var Co=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxwYWdpbmF0aW9uIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0k7O0FBQ0E7RUFDSTs7O0FBTVI7RUFDSTs7O0FBSVI7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7O0FBRUo7RUFDSSIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvIHtcclxuICAgIC5wYWdlLWxpbmsge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLnRvdGFse1xyXG4gICAgICAgICAgICBjb2xvcjp2YXIoLS1vaS1ncmF5LWRhcmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmp1bXBlciB7XHJcbiAgICAucGFnZS1saW5rIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIH1cclxufVxyXG4uanVtcC10b3tcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTp2YXIoLS1vaS1ncmF5LWRhcmspIHNvbGlkIDFweFxyXG59XHJcbi5wYWdpbmF0aW9ue1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */`;var _t=["accordion","alert","badge","breadcrumb","button-group","buttons","card","carousel","close","containers","dropdown","forms","grid","images","list-group","modal","nav","navbar","offcanvas","pagination","placeholders","popover","progress","reboot","root","scrollbar","spinners","tables","toasts","tooltip","transitions","utilities"];var{render:la,define:jl,h:ra,Component:El,setTheme:na}=omii,Si="bootstrap";function ca(t){Si=t,he=new URL(`./${Si}/`,import.meta.url).href}var he=new URL(`./${Si}/`,import.meta.url).href;function ga(t){he=t}var Kt=(t,e=he)=>fetch(Hi(t,e)).then(i=>{if(i.ok)return i.text();console.error(`load stylesheet ${t} error`,i)}).catch(i=>(console.error(`load stylesheet ${t} error`,i),null)),da=t=>Kt=t,ho=(t,e,i=he)=>{let o=ra("link",{rel:"styleSheet",href:Hi(t,i)});la(o,e??"body")},pa=(t,e=he)=>{ho("reboot",t,e)},Hi=(t,e=he)=>{try{return new URL(`./${t}.css`,e).href}catch(i){console.error(i,t,e)}},Fi=new Map,qt=async(t,e=he)=>{let i=`${e}/${t}`,o=Fi.get(i);if(o===void 0){let s=[];Fi.set(i,s),o=new CSSStyleSheet;try{o.replaceSync(await Kt(t,e)),s.forEach(a=>{a(o)}),Fi.set(i,o)}catch(a){console.error("get css stylesheets error",a)}}else if(o instanceof Array)return new Promise(s=>{o.push(s)});return o},b=(...t)=>Promise.all(t.map(e=>qt(e))),mo={};_t.forEach(t=>{Object.defineProperty(mo,t,{get:function(){return qt(t)}})});var ua=(t=_t)=>{t.forEach(e=>{qt(e)})},Ia=async(t,e=he)=>{let i=await Kt(`theme.${t}`,e);na(i)},R=(t,e,i=1)=>{if(e instanceof Array&&e.length&&typeof i=="number"&&t.classList){let o=0,s=(a=[])=>{let l=o%e.length,{classNames:r,duration:d=0,delay:n=0,callback:u=null}=e[l];setTimeout(()=>{typeof r=="string"&&(r=r.split(" ").filter(m=>m!="")),t.classList.remove(...a),t.classList.add(...r),u&&u(t,r,d,n)},n*1e3),o++,!(Math.floor(o/e.length)>=i)&&setTimeout(()=>{s(r)},(d+n)*1e3)};s()}},Ao={StyleSheets:_t,CSSStyleSheets:mo,setBaseUrl:ga,setBaseRoot:ca,loadStyleSheet:Kt,setStyleSheetLoader:da,addStyleSheet:ho,addRebootStyleSheet:pa,getStyleSheetUrl:Hi,getCSSStyleSheet:qt,getCSSStyleSheets:b,useTheme:Ia,timingClassNames:R,preLoad:ua};var{h:X,classNames:xt,extractClass:Ca}=omii,st=class extends P{},me=st;c(me,"css",[()=>b("reboot","pagination","utilities"),Co]),c(me,"defaultProps",{...ht(st,st,"defaultProps"),align:"left",createPrev(t,e){let{pageNum:i,prev:o}=t;return X("li",{class:xt("page-item",{disabled:i<=1})},X("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s=>{i>1&&e.goto(i-1),s.preventDefault(),s.stopPropagation()}},X("span",{"aria-hidden":"true"},"\u2039")))},createNext(t,e){let{pageNum:i,next:o}=t,{pageCount:s}=e;return X("li",{class:xt("page-item",{disabled:i>=s})},X("a",{class:"page-link",href:"#","aria-label":"Next",onClick:a=>{s>i&&e.goto(i+1),a.preventDefault(),a.stopPropagation()}},X("span",{"aria-hidden":"true"},"\u203A")))},createFirst(t,e){let{first:i,pageNum:o}=t;return X("li",{class:xt("page-item",{disabled:o<=1})},X("a",{class:"page-link",href:"#","aria-label":"First",onClick:s=>{o!=1&&e.goto(1),s.preventDefault(),s.stopPropagation()}},X("span",{"aria-hidden":"true"}," \xAB")))},createLast(t,e){let{last:i,pageNum:o}=t,{pageCount:s}=e;return X("li",{class:xt("page-item",{disabled:o>=s})},X("a",{class:"page-link",href:"#","aria-label":"Last",onClick:a=>{o!=s&&e.goto(s),a.preventDefault(),a.stopPropagation()}},X("span",{"aria-hidden":"true"},"\xBB")))},createPages(t,e){let{linksCount:i,pageNum:o}=t,{pageCount:s}=e,a=Math.ceil(i/2),l=o>a?o-a:1,r=l+i-1;r>s&&(r=s),l=r-i+1;let d=[];l<1&&(l=1);for(let n=l;n<=r;n++)d.push(X("li",{key:`pager-${n}`,className:xt("page-item",{active:o==n,page:!0})},X("a",{class:"page-link",href:"#",onClick:u=>{o!=n&&e.goto(n),u.preventDefault(),u.stopPropagation()}},n)));return d},createInfo(t,e){let{pageNum:i}=t,{pageCount:o}=e;return X("li",{class:"info page-item"},X("span",{className:"page-link"},X("span",{class:"curr"},i),"/",X("span",{class:"total"},o)))},createJumper(t,e){return X("li",{class:"jumper page-item mx-2"},X("span",{className:"page-link"},"\u524D\u5F80",X("input",{class:"jump-to",title:`\u8BF7\u8F93\u51651-${e.pageCount}\u7684\u6570\u5B57`,type:"number",min:"1",max:e.pageCount,onChange:i=>{let o=i.currentTarget,s=Number(o.value);s>e.pageCount&&(o.value=e.pageCount),s<1&&(o.value=1),s=Number(o.value),e.goto(s)}}),"\u9875"))},createLayout(t,e){let{createFirst:i,createPrev:o,createPages:s,createNext:a,createLast:l,createJumper:r,createInfo:d}=t;return X("nav",null,X("ul",{...Ca(t,"pagination",{"justify-content-end":t.align=="right","justify-content-center":t.align=="center"})},i(t,e),o(t,e),s(t,e),a(t,e),l(t,e),r(t,e),d(t,e)))}}),c(me,"propTypes",{...ht(st,st,"propTypes"),align:String});var bo=`
:host {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */`;var fo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx0cmVlIiwic291cmNlcyI6WyJub2RlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBSUo7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBOztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUlKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtBQUFBO0VBRUk7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBOztBQU9SO0VBQ0k7O0FBUUE7RUFDSTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBOztBQU1SO0VBQ0k7OztBQU1oQjtFQUVJOzs7QUFHSjtFQUNJIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IC4zcmVtIDA7XHJcbiAgICBjb2xvcjogdmFyKC0tb2ktdHJlZS1ub2RlLWNvbG9yLCBibGFjayk7XHJcblxyXG4gICAgLm5vZGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmVsZW1lbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQ6IHZhcigtLW9pLXRyZWUtbm9kZS1mb250KTtcclxuXHJcbiAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuZXhwYW5kZXItd3JhcCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgPm9pLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vaS10cmVlLW5vZGUtaG92ZXItYmdjb2xvciwgI2NmZTJmZik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tb2ktdHJlZS1ub2RlLWhvdmVyLWNvbG9yLCBibGFjayk7XHJcbiAgICAgICAgICAgICAgICAtLW9pLXRyZWUtbm9kZS1leHBhbmRlci13cmFwLWNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ktdHJlZS1ub2RlLXNlbGVjdGVkLWJnY29sb3IsICM5ZWM1ZmUpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW9pLXRyZWUtbm9kZS1zZWxlY3RlZC1jb2xvciwgYmxhY2spXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9pLWxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdLFxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jaGVja2JveC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmFkaW8tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkcmVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIC8vICYuc29ydGFibGU6aG92ZXIge1xyXG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NmZTJmZjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5ob3ZlciB7XHJcbiAgICAgICAgICAgIC5jaGlsZHJlbi5lbXB0eSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAjY2ZlMmZmIDFweCBkb3R0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZXhwYW5kZWQge1xyXG4gICAgICAgICAgICAuZXhwYW5kZXItd3JhcCB7XHJcbiAgICAgICAgICAgICAgICA+b2ktaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNoaWxkcmVuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCguc29ydGFibGUtZ2hvc3QpIHtcclxuICAgIC8v6Ziy5q2i54i26IqC54K55o+S5YWl5a2Q6IqC54K5XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuOmhvc3QoLnNvcnRhYmxlLWRyYWcpIHtcclxuICAgIGJvcmRlcjogZG90dGVkIDFweCAjOWVjNWZlO1xyXG59Il19 */`;var{h:_,classNames:ei,define:ha,getHost:Ri,throttle:lr}=omii,at,yt,Ni=class extends h{constructor(){super(...arguments);C(this,at,void 0);C(this,yt,void 0)}get tree(){return this.$props.tree}get checkboxTree(){return this.tree.$props.checkboxTree}get radioTree(){return this.tree.$props.radioTree}get sortable(){return this.tree.$props.sortable}get selected(){return this.node.selected??this.tree.isSelected(this.key)}get checked(){return this.node.checked??this.tree.isChecked(this.key)}get radioed(){return this.node.radioed??this.tree.isRadioed(this.key)}get expanded(){return this.node.expanded??this.tree.isExpanded(this.key)}get expander(){return this.node.expander??this.$props.expander??this.tree.$props.expander}get node(){return this.$props.node??{}}get nodes(){return g(this,at)}get noChildren(){return!this.nodes||this.nodes.length==0}get path(){let i=this.parentTreeNode;return(i?i.path:"")+"/"+this.key}get parentTreeNode(){let i=Ri(this);return i instanceof Ni?i:null}get key(){return this.node.key??`node-${this.elementId}`}get level(){return this.$props.nodeLevel??0}expand(){this.tree.expand(this.key,!1),this.node.expanded=!0,this.updateSelf(),this.tree.fire("nodeExpand",{node:this.node,treeNode:this})}collapse(){this.tree.collapse(this.key,!1),this.node.expanded=!1,this.updateSelf(),this.tree.fire("nodeCollapse",{node:this.node,treeNode:this})}select(){this.tree.select(this.key,!1),this.tree.$props.multiSelect?this.updateSelf():(this.tree.__selectedNode&&this.tree.__selectedNode.updateSelf(),this.tree.__selectedNode=this,this.updateSelf()),this.tree.fire("nodeSelect",{node:this.node,treeNode:this})}unSelect(){this.tree.unSelect(this.key,!1),this.updateSelf(),this.tree.fire("nodeUnSelect",{node:this.node,treeNode:this})}check(){this.tree.check(this.key,!1),this.tree.fire("nodeCheck",{node:this.node,treeNode:this})}uncheck(){this.tree.uncheck(this.key,!1),this.tree.fire("nodeUnCheck",{node:this.node,treeNode:this})}radio(){this.tree.radio(this.key,!1),this.tree.fire("nodeRadio",{node:this.node,treeNode:this}),this.tree.__radioedNode&&this.tree.__radioedNode.updateSelf(),this.tree.__radioedNode=this}unradio(){this.tree.unradio(this.key,!1),this.tree.fire("nodeUnRadio",{node:this.node,treeNode:this})}toggle(){this.expanded?this.collapse():this.expand()}get $checkbox(){return this.checkboxTree?this.node.allowCheck!==!1?_("input",{type:"checkbox",class:"form-check-input",disabled:this.node.disabled===!0,checked:this.checked,onClick:i=>{i.stopPropagation()},onChange:i=>{i.currentTarget.checked?this.check():this.uncheck()}}):_("div",{class:"checkbox-placeholder"}):null}get $radio(){return this.radioed&&(this.tree.__radioedNode=this),this.radioTree?this.node.allowCheck!==!1?_("input",{type:"radio",disabled:this.node.disabled===!0,checked:this.radioed,onClick:i=>{i.stopPropagation()},onChange:i=>{i.currentTarget.checked?this.radio():this.unradio()}}):_("div",{class:"radio-placeholder"}):null}install(){}get Sortable(){return g(this,yt)}async installed(){if(this.sortable){let i=await it.use();I(this,yt,i.create(this.$(".children"),{delay:150,handle:".element",fallbackOnBody:!0,invertSwap:!0,group:this.tree.sortGroup,onEnd:o=>{let s=Ri(o.from),a=Ri(o.to),l=s.nodes,r=a.nodes;r||(r=[],a.node.children=r),this.tree.fire("sorted",{fromNode:s.node,fromNodes:l,toNode:a.node,toNodes:r,fromIndex:o.oldIndex,toIndex:o.newIndex})}}))}}async render(i){let{node:o,cssss:s}=i;!this.tree.$props.multiSelect&&this.selected&&(this.tree.__selectedNode=this);let a=o.element??o.label??o.key;typeof a=="function"&&(a=await a(o,i,this));let l=null,r=I(this,at,o.children);return typeof r=="function"&&this.expanded&&I(this,at,r=await r(o,i,this)),l=_("div",{class:ei("children",{expanded:this.expanded,sortable:this.sortable,empty:this.noChildren})},this.expanded&&(r instanceof Array?r.map(d=>_("oi-tree-node",{node:d,"node-level":this.level+1,tree:this.tree,cssss:s})):r)),_("div",{class:ei("node",{expanded:this.expanded,"no-children":this.noChildren})},_("div",{class:ei("element",{selected:this.selected}),style:`padding-left:calc(${this.level} * var(--oi-tree-node-indent,1rem))`,onClick:d=>{d.stopPropagation(),this.selected&&d.ctrlKey===!0?this.unSelect():this.select()}},_("div",{onClick:d=>{d.stopPropagation(),this.toggle()},class:ei("expander-wrap",{"no-children":this.noChildren})},!this.noChildren&&this.expander),this.$checkbox,this.$radio,_("div",{class:"label"},a)),l)}},De=Ni;at=new WeakMap,yt=new WeakMap,c(De,"css",fo),c(De,"defaultProps",{cssss:null,nodeLevel:0,ignoreAttrs:!0,expander:null}),c(De,"propTypes",{nodeLevel:Number,ignoreAttrs:Boolean});ha("oi-tree-node",De);var Oi=De;var{h:ki,purgeCSSSS:ma,getHost:ti,classNames:Aa}=omii;var vt,Ae=class extends h{constructor(){super(...arguments);C(this,vt,void 0)}get sortGroup(){return this.$props.sortGroup??`sort-${this.elementId}`}get selectedKeys(){return this.$props.selectedKeys}get selectedKey(){return this.$props.selectedKey}get expandedKeys(){return this.$props.expandedKeys}get checkedKeys(){return this.$props.checkedKeys}get radioedKey(){return this.$props.radioedKey}get Sortable(){return g(this,vt)}isSelected(e){let{multiSelect:i,selectedKey:o,selectedKeys:s}=this.$props;return i?(s??[]).some(a=>a==e):o!=null&&o==e}select(e,i=!0){let{multiSelect:o,selectedKeys:s}=this.$props;o?s.some(a=>a==e)||s.push(e):this.$props.selectedKey=e,i&&this.update()}unSelect(e,i=!0){let{multiSelect:o,selectedKeys:s}=this.$props;if(!o)this.$props.selectedKey=null;else{let a=s.indexOf(e);a!=-1&&s.splice(a,1)}i&&this.update()}isChecked(e){let{checkboxTree:i,checkedKeys:o}=this.$props;return i?(o??[]).some(s=>s==e):!1}check(e,i=!0){let{checkboxTree:o,checkedKeys:s}=this.$props;o&&s.indexOf(e)==-1&&s.push(e),i&&this.update()}uncheck(e,i=!0){let{checkboxTree:o,checkedKeys:s}=this.$props;if(o){let a=s.indexOf(e);a!=-1&&s.splice(a,1)}i&&this.update()}isRadioed(e){let{radioTree:i,radioedKey:o}=this.$props;return i?o!=null&&o==e:!1}radio(e,i=!0){let{radioTree:o}=this.$props;o&&(this.$props.radioedKey=e),i&&this.update()}unradio(e=!0){let{radioTree:i}=this.$props;i&&(this.$props.radioedKey=null),e&&this.update()}isExpanded(e){let{expandedKeys:i}=this.$props;return(i??[]).some(o=>o==e)}expand(e,i=!0){let{expandedKeys:o}=this.$props;o.indexOf(e)==-1&&o.push(e),i&&this.update()}collapse(e,i=!0){let{expandedKeys:o}=this.$props,s=o.indexOf(e);s!=-1&&o.splice(s,1),i&&this.update()}async installed(){if(this.$props.sortable){let e=await it.use();I(this,vt,e.create(this.rootNode,{delay:150,fallbackOnBody:!0,invertSwap:!0,group:this.sortGroup,onEnd:i=>{let o=ti(i.from),s=ti(i.to),a=o.nodes,l=s.nodes;this.fire("sorted",{fromNode:o.node,fromNodes:a,toNode:s.node,toNodes:l,fromIndex:i.oldIndex,toIndex:i.newIndex})}}))}}get nodes(){let e=this.$props.nodes,i=ti(this);return typeof e=="function"&&(e=e.call(i)),e}set nodes(e){this.$props.nodes=e}render(){let e=ti(this),i=ma(this.$props.nodeCss,e);return ki("div",{class:Aa("tree-container",{sortable:this.sortable})},this.nodes.map(o=>ki("oi-tree-node",{node:o,tree:this,cssss:i})))}};vt=new WeakMap,c(Ae,"css",bo),c(Ae,"defaultProps",{nodeCss:null,radioTree:!1,checkboxTree:!1,multiSelect:!1,sortable:!1,sortGroup:null,ignoreAttrs:!0,selectedKey:null,selectedKeys:[],expandedKeys:[],checkedKeys:[],radioedKey:null,nodes:[],expander:ki("oi-icon",{name:"keyboard_arrow_right",class:"expander"})}),c(Ae,"propTypes",{ignoreAttrs:Boolean,multiSelect:Boolean,sortable:Boolean,selectedKey:String,selectedKeys:Array,expandedKeys:Array,checkedKeys:Array,radioedKey:String,nodes:Array});var{h:hr,classNames:mr}=omii,ii=new Map,Xt,se=class extends h{constructor(){super(...arguments);C(this,Xt,void 0)}css(){let{size:e,color:i}=this.$props,o="2rem";if(e)o=`${e}rem`;else{let l=this.parentNode?.host??this.parentNode;l?o=`${l.offsetHeight}px`:o="2rem"}let s=`
    :host{
      --oi-loading-size:${o};
    }
    `,a="";return i&&(a=`
      :host {
        --oi-loading-color:${i};
      }
      `),`
    ${g(this,Xt)}
    ${s}
    ${a}
    `}async getLoadingConfig(){let{name:e}=this.$props,i=e,o=ii.get(i);if(o==null){o=[],ii.set(i,o);try{let{default:s}=await import(`./loadings/${e}.js`);ii.set(i,s);for(let{resolve:a}of o)a(s);return s}catch{ii.set(i,null);for(let{resolve:s}of o)s(null);return null}}return o instanceof Array?new Promise((s,a)=>{o.push({resolve:s,reject:a})}):o}async render(){let{template:e,css:i}=await this.getLoadingConfig();return I(this,Xt,i),e}};Xt=new WeakMap,c(se,"updateOnAttributeChanged",!0),c(se,"css",`
    :host{
      display:inline-block;
    }
  `),c(se,"defaultProps",{name:"circle",size:null,color:null}),c(se,"propTypes",{name:String,size:Number,color:String});var lt={HORIZONTAL:"horizontal",VERTICAL:"vertical"},Wi="show",oi="collapse",Zi="collapsing",ba="collapse-horizontal",Li=.35,Vi=(t,e)=>e||(t.classList.contains(ba)?lt.HORIZONTAL:lt.VERTICAL),xo={show(t,e=Li,i=null){return new Promise(o=>{i=Vi(t,i),R(t,[{classNames:[oi]},{classNames:[Zi],duration:e,callback(s){s.style[i==lt.VERTICAL?"height":"width"]=`${s[i==lt.VERTICAL?"scrollHeight":"scrollWidth"]}px`}},{classNames:[oi,Wi],callback(s){s.style[i==lt.VERTICAL?"height":"width"]="",o()}}])})},hide(t,e=Li,i=null){return new Promise(o=>{i=Vi(t,i);let s=i==lt.VERTICAL?"height":"width";t.style[s]=`${t.getBoundingClientRect()[s]}px`,Pt(t.offsetHeight),R(t,[{classNames:[Zi,oi,Wi]},{classNames:[Zi],duration:e,callback(a){a.style[s]=""}},{classNames:[oi],callback:o}])})},toggle(t,e=Li,i=null){return i=Vi(t,i),t.classList.contains(Wi)?this.hide(t,e,i):this.show(t,e,i)}};var Gt="fade",Ui="show",Qi=.15,yo={show(t,e=Qi){return new Promise(i=>{R(t,[{classNames:[Gt]},{classNames:[Gt,Ui],duration:e,callback:i}])})},hide(t,e=Qi){return new Promise(i=>{R(t,[{classNames:[Gt,Ui]},{classNames:[Gt],duration:e,callback:i}])})},toggle(t,e=Qi){return t.classList.contains(Gt)&&!t.classList.contains(Ui)?this.show(t,e):this.hide(t,e)}};var w={collapse:xo,fade:yo};var{h:Yi,classNames:fa}=omii;var xa="show",Bt,be=class extends h{constructor(){super(...arguments);C(this,Bt,!1)}css(){return`
    .fade {
        transition: opacity ${this.$props.transitionDuration}s linear
    }`}close(){this.$("div.alert").classList.remove(xa),I(this,Bt,!0),setTimeout(()=>{this.update(!0,!0)},this.$props.transitionDuration*1e3)}render(){let{themeColor:e,closeable:i}=this.$props;return g(this,Bt)?null:Yi("div",{className:fa("alert",`alert-${e}`,{"alert-dismissible":i,fade:i,show:i}),role:"alert"},Yi("slot",null),i?Yi("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:()=>{this.close()}}):null)}};Bt=new WeakMap,c(be,"css",()=>b("reboot","utilities","alert","close","transitions")),c(be,"defaultProps",{themeColor:"primary",closeable:!1,transitionDuration:.15}),c(be,"propTypes",{themeColor:String,closeable:Boolean,transitionDuration:Number});var{h:rt,classNames:Ti}=omii,si={HORIZONTAL:"horizontal",VERTICAL:"vertical"},ya="collapsed",nt,ai,fe=class extends h{constructor(){super(...arguments);C(this,nt)}static get DIRECTIONS(){return si}css(){return`
      .collapsing {
          transition-duration: ${this.$props.transitionDuration}s ;
      }`}install(){let{items:e,alwayOpen:i,firstOpen:o}=this.$props;if(e.length>0&&o&&(e[0].opened=!0),!i){let s=e.filter(a=>a.opened);if(s.length){let a=s.shift();a.opened=!0,s.forEach(l=>l.opened=!1)}}}get dimension(){return this.setting.direction==si.HORIZONTAL?WIDTH:HEIGHT}toggle(e){let{items:i,alwayOpen:o}=this.$props;if(o)Et(this,nt,ai).call(this,e);else{let s=i.findIndex(l=>l.opened),a=s==-1?null:i[s];a&&a!=e&&Et(this,nt,ai).call(this,a),Et(this,nt,ai).call(this,e)}}render(){let{items:e,direction:i}=this.$props;return rt("div",{class:Ti("accordion",{"collapse-horizontal":i==si.HORIZONTAL})},e.map((o,s)=>rt("div",{class:"accordion-item",key:o.key??`item-${s}`},rt("h2",{class:"accordion-header"},rt("button",{class:Ti("accordion-button",{collapsed:!o.opened}),type:"button","aria-expanded":o.opened,onClick:a=>{this.toggle(o)}},o.header)),rt("div",{class:Ti("accordion-collapse",{collapse:!0,show:o.opened})},rt("div",{class:"accordion-body"},typeof o.body=="function"?o.body(o,this.$props,this):o.body)))))}};nt=new WeakSet,ai=function(e){let{items:i,transitionDuration:o}=this.$props,s=i.indexOf(e),a=this.$(`.accordion>.accordion-item:nth-child(${s+1})`),l=a.querySelector(".accordion-collapse"),r=a.querySelector(".accordion-button");e.opened=!e.opened,r.classList.toggle(ya,!e.opened),e.opened?(w.collapse.show(l),this.fire("collapseShow",e)):(w.collapse.hide(l),this.fire("collapseHide",e))},c(fe,"css",()=>b("reboot","utilities","accordion","close","transitions")),c(fe,"defaultProps",{alwayOpen:!1,firstOpen:!1,transitionDuration:.35,direction:si.VERTICAL}),c(fe,"propTypes",{alwayOpen:Boolean,firstOpen:Boolean,transitionDuration:Number,direction:String});var{h:wt,classNames:Qr}=omii,xe=class extends h{css(){let{divider:t}=this.$props;if(typeof t=="string")return`:host{--oi-breadcrumb-divider:'${t}'}`;if(typeof t=="object")return".breadcrumb-item + .breadcrumb-item::before{display:none}"}render(){let{items:t,divider:e}=this.$props;return wt("nav",{"aria-label":"breadcrumb"},wt("ol",{class:"breadcrumb"},t.map((i,o)=>o!==t.length-1?wt("li",{class:"breadcrumb-item"},typeof e=="object"&&o!=0?e:null,wt("a",{href:i.href},i.label)):wt("li",{class:"breadcrumb-item active","aria-current":"page"},typeof e=="object"&&o!=0?e:null,i.label))))}};c(xe,"css",()=>b("reboot","utilities","breadcrumb")),c(xe,"defaultProps",{}),c(xe,"propTypes",{});var vo=`
.modal .modal-dialog {
  transition: margin-top 0.35s ease;
  margin-top: 0;
}
.modal .modal-dialog.show {
  margin-top: var(--oi-modal-margin);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxtb2RhbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJO0VBQ0E7O0FBRUE7RUFDSSIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcbiAgICAmLnBvc2l0aW9uLXN0YXRpYyB7XHJcbiAgICAgICAgLm1vZGFsLWRpYWxvZyB7fVxyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi10b3AgLjM1cyBlYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLW9pLW1vZGFsLW1hcmdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */`;var{h:W,classNames:Xo,extractClass:va}=omii,ye=class extends h{open(){this.update$Props({visible:!0}).then(()=>{R(this.$dialog,[{classNames:"show"}])}),this.fire("open")}close(){R(this.$dialog,[{classNames:"show"},{classNames:"",duration:.15},{classNames:"",callback:()=>{this.update$Props({visible:!1})}}]),this.fire("close")}get $dialog(){return this.$(".modal-dialog")}css(){}render(t){let e=this.$props;return W(W.f,null,e.visible&&!e.staticPosition&&W("div",{class:Xo("modal-backdrop","show")}),W("div",{...va(t,"modal",{"position-static":e.staticPosition,"d-block":e.staticPosition||e.visible}),tabindex:"-1",role:"dialog","aria-modal":"true",onClick:i=>{if(i.target===i.currentTarget){if(e.staticBackdrop)return!1;this.close()}}},W("div",{class:Xo("modal-dialog",e.size?`modal-${e.size}`:!1,{"modal-fullscreen":e.fullscreen,"modal-dialog-scrollable":e.scrollable,"modal-dialog-centered":e.vcentered})},W("div",{class:"modal-content"},W("div",{class:"modal-header"},W("slot",{name:"header"},W("h5",{class:"modal-title"},e.title),W("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:i=>this.close()}))),W("div",{class:"modal-body"},W("slot",null)),W("div",{class:"modal-footer"},W("slot",{name:"footer"}))))))}};c(ye,"css",[()=>b("reboot","modal","utilities","close","scrollbar"),vo]),c(ye,"defaultProps",{staticPosition:!1,staticBackdrop:!1,vcentered:!1,visible:!1,title:null,scrollable:!1,fullscreen:!1,size:null}),c(ye,"propTypes",{staticPosition:Boolean,staticBackdrop:Boolean,vcentered:Boolean,visible:Boolean,scrollable:Boolean,size:String,fullscreen:Boolean});function Ft(t){return t.split("-")[0]}function ri(t){return t.split("-")[1]}function St(t){return["top","bottom"].includes(Ft(t))?"x":"y"}function zi(t){return t==="y"?"height":"width"}function Go(t,e,i){let{reference:o,floating:s}=t,a=o.x+o.width/2-s.width/2,l=o.y+o.height/2-s.height/2,r=St(e),d=zi(r),n=o[d]/2-s[d]/2,u=r==="x",p;switch(Ft(e)){case"top":p={x:a,y:o.y-s.height};break;case"bottom":p={x:a,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:l};break;case"left":p={x:o.x-s.width,y:l};break;default:p={x:o.x,y:o.y}}switch(ri(e)){case"start":p[r]-=n*(i&&u?-1:1);break;case"end":p[r]+=n*(i&&u?-1:1)}return p}var wo=async(t,e,i)=>{let{placement:o="bottom",strategy:s="absolute",middleware:a=[],platform:l}=i,r=a.filter(Boolean),d=await(l.isRTL==null?void 0:l.isRTL(e)),n=await l.getElementRects({reference:t,floating:e,strategy:s}),{x:u,y:p}=Go(n,o,d),m=o,A={},y=0;for(let f=0;f<r.length;f++){let{name:x,fn:J}=r[f],{x:G,y:B,data:F,reset:k}=await J({x:u,y:p,initialPlacement:o,placement:m,strategy:s,middlewareData:A,rects:n,platform:l,elements:{reference:t,floating:e}});u=G??u,p=B??p,A={...A,[x]:{...A[x],...F}},k&&y<=50&&(y++,typeof k=="object"&&(k.placement&&(m=k.placement),k.rects&&(n=k.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:s}):k.rects),{x:u,y:p}=Go(n,m,d)),f=-1)}return{x:u,y:p,placement:m,strategy:s,middlewareData:A}};function Jo(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function Jt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function ji(t,e){var i;e===void 0&&(e={});let{x:o,y:s,platform:a,rects:l,elements:r,strategy:d}=t,{boundary:n="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:m=!1,padding:A=0}=e,y=Jo(A),f=r[m?p==="floating"?"reference":"floating":p],x=Jt(await a.getClippingRect({element:(i=await(a.isElement==null?void 0:a.isElement(f)))==null||i?f:f.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(r.floating)),boundary:n,rootBoundary:u,strategy:d})),J=p==="floating"?{...l.floating,x:o,y:s}:l.reference,G=await(a.getOffsetParent==null?void 0:a.getOffsetParent(r.floating)),B=await(a.isElement==null?void 0:a.isElement(G))&&await(a.getScale==null?void 0:a.getScale(G))||{x:1,y:1},F=Jt(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:J,offsetParent:G,strategy:d}):J);return{top:(x.top-F.top+y.top)/B.y,bottom:(F.bottom-x.bottom+y.bottom)/B.y,left:(x.left-F.left+y.left)/B.x,right:(F.right-x.right+y.right)/B.x}}var Xa=Math.min,Ga=Math.max;function Di(t,e,i){return Ga(t,Xa(e,i))}var Ei=t=>({name:"arrow",options:t,async fn(e){let{element:i,padding:o=0}=t??{},{x:s,y:a,placement:l,rects:r,platform:d}=e;if(i==null)return{};let n=Jo(o),u={x:s,y:a},p=St(l),m=ri(l),A=zi(p),y=await d.getDimensions(i),f=p==="y"?"top":"left",x=p==="y"?"bottom":"right",J=r.reference[A]+r.reference[p]-u[p]-r.floating[A],G=u[p]-r.reference[p],B=await(d.getOffsetParent==null?void 0:d.getOffsetParent(i)),F=B?p==="y"?B.clientHeight||0:B.clientWidth||0:0;F===0&&(F=r.floating[A]);let k=J/2-G/2,pe=n[f],Qe=F-y[A]-n[x],S=F/2-y[A]/2+k,V=Di(pe,S,Qe),ue=(m==="start"?n[f]:n[x])>0&&S!==V&&r.reference[A]<=r.floating[A];return{[p]:u[p]-(ue?S<pe?pe-S:Qe-S:0),data:{[p]:V,centerOffset:S-V}}}}),Ba={left:"right",right:"left",bottom:"top",top:"bottom"};function li(t){return t.replace(/left|right|bottom|top/g,e=>Ba[e])}function wa(t,e,i){i===void 0&&(i=!1);let o=ri(t),s=St(t),a=zi(s),l=s==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(l=li(l)),{main:l,cross:li(l)}}var Ja={start:"end",end:"start"};function Bo(t){return t.replace(/start|end/g,e=>Ja[e])}var Fa=["top","right","bottom","left"],en=Fa.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var Ht=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i;let{placement:o,middlewareData:s,rects:a,initialPlacement:l,platform:r,elements:d}=e,{mainAxis:n=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",flipAlignment:A=!0,...y}=t,f=Ft(o),x=p||(f===l||!A?[li(l)]:function(S){let V=li(S);return[Bo(S),V,Bo(V)]}(l)),J=[l,...x],G=await ji(e,y),B=[],F=((i=s.flip)==null?void 0:i.overflows)||[];if(n&&B.push(G[f]),u){let{main:S,cross:V}=wa(o,a,await(r.isRTL==null?void 0:r.isRTL(d.floating)));B.push(G[S],G[V])}if(F=[...F,{placement:o,overflows:B}],!B.every(S=>S<=0)){var k,pe;let S=((k=(pe=s.flip)==null?void 0:pe.index)!=null?k:0)+1,V=J[S];if(V)return{data:{index:S,overflows:F},reset:{placement:V}};let ue="bottom";switch(m){case"bestFit":{var Qe;let jt=(Qe=F.map(et=>[et,et.overflows.filter(Ye=>Ye>0).reduce((Ye,io)=>Ye+io,0)]).sort((et,Ye)=>et[1]-Ye[1])[0])==null?void 0:Qe[0].placement;jt&&(ue=jt);break}case"initialPlacement":ue=l}if(o!==ue)return{reset:{placement:ue}}}return{}}}};var Rt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:i,y:o}=e,s=await async function(a,l){let{placement:r,platform:d,elements:n}=a,u=await(d.isRTL==null?void 0:d.isRTL(n.floating)),p=Ft(r),m=ri(r),A=St(r)==="x",y=["left","top"].includes(p)?-1:1,f=u&&A?-1:1,x=typeof l=="function"?l(a):l,{mainAxis:J,crossAxis:G,alignmentAxis:B}=typeof x=="number"?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...x};return m&&typeof B=="number"&&(G=m==="end"?-1*B:B),A?{x:G*f,y:J*y}:{x:J*y,y:G*f}}(e,t);return{x:i+s.x,y:o+s.y,data:s}}}};function Sa(t){return t==="x"?"y":"x"}var Ot=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:i,y:o,placement:s}=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:r={fn:x=>{let{x:J,y:G}=x;return{x:J,y:G}}},...d}=t,n={x:i,y:o},u=await ji(e,d),p=St(Ft(s)),m=Sa(p),A=n[p],y=n[m];if(a){let x=p==="y"?"bottom":"right";A=Di(A+u[p==="y"?"top":"left"],A,A-u[x])}if(l){let x=m==="y"?"bottom":"right";y=Di(y+u[m==="y"?"top":"left"],y,y-u[x])}let f=r.fn({...e,[p]:A,[m]:y});return{...f,data:{x:f.x-i,y:f.y-o}}}}};function le(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function K(t){return le(t).getComputedStyle(t)}function Xe(t){return Wo(t)?(t.nodeName||"").toLowerCase():""}var ni;function ko(){if(ni)return ni;let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(ni=t.brands.map(e=>e.brand+"/"+e.version).join(" "),ni):navigator.userAgent}function q(t){return t instanceof le(t).HTMLElement}function ae(t){return t instanceof le(t).Element}function Wo(t){return t instanceof le(t).Node}function Fo(t){return typeof ShadowRoot>"u"?!1:t instanceof le(t).ShadowRoot||t instanceof ShadowRoot}function ci(t){let{overflow:e,overflowX:i,overflowY:o,display:s}=K(t);return/auto|scroll|overlay|hidden/.test(e+o+i)&&!["inline","contents"].includes(s)}function Ha(t){return["table","td","th"].includes(Xe(t))}function $i(t){let e=/firefox/i.test(ko()),i=K(t),o=i.backdropFilter||i.WebkitBackdropFilter;return i.transform!=="none"||i.perspective!=="none"||!!o&&o!=="none"||e&&i.willChange==="filter"||e&&!!i.filter&&i.filter!=="none"||["transform","perspective"].some(s=>i.willChange.includes(s))||["paint","layout","strict","content"].some(s=>{let a=i.contain;return a!=null&&a.includes(s)})}function Zo(){return!/^((?!chrome|android).)*safari/i.test(ko())}function Pi(t){return["html","body","#document"].includes(Xe(t))}var So=Math.min,Nt=Math.max,Ho=Math.round,Mi={x:1,y:1};function kt(t){let e=!ae(t)&&t.contextElement?t.contextElement:ae(t)?t:null;if(!e)return Mi;let i=e.getBoundingClientRect(),o=K(e);if(o.boxSizing!=="border-box")return q(e)?{x:e.offsetWidth>0&&Ho(i.width)/e.offsetWidth||1,y:e.offsetHeight>0&&Ho(i.height)/e.offsetHeight||1}:Mi;let s=i.width/parseFloat(o.width),a=i.height/parseFloat(o.height);return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}function ct(t,e,i,o){var s,a,l,r;e===void 0&&(e=!1),i===void 0&&(i=!1);let d=t.getBoundingClientRect(),n=Mi;e&&(o?ae(o)&&(n=kt(o)):n=kt(t));let u=ae(t)?le(t):window,p=!Zo()&&i,m=(d.left+(p&&(s=(a=u.visualViewport)==null?void 0:a.offsetLeft)!=null?s:0))/n.x,A=(d.top+(p&&(l=(r=u.visualViewport)==null?void 0:r.offsetTop)!=null?l:0))/n.y,y=d.width/n.x,f=d.height/n.y;return{width:y,height:f,top:A,right:m+y,bottom:A+f,left:m,x:m,y:A}}function ve(t){return((Wo(t)?t.ownerDocument:t.document)||window.document).documentElement}function gi(t){return ae(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Lo(t){return ct(ve(t)).left+gi(t).scrollLeft}function Ra(t,e,i){let o=q(e),s=ve(e),a=ct(t,!0,i==="fixed",e),l={scrollLeft:0,scrollTop:0},r={x:0,y:0};if(o||!o&&i!=="fixed")if((Xe(e)!=="body"||ci(s))&&(l=gi(e)),q(e)){let d=ct(e,!0);r.x=d.x+e.clientLeft,r.y=d.y+e.clientTop}else s&&(r.x=Lo(s));return{x:a.left+l.scrollLeft-r.x,y:a.top+l.scrollTop-r.y,width:a.width,height:a.height}}function Wt(t){if(Xe(t)==="html")return t;let e=t.assignedSlot||t.parentNode||(Fo(t)?t.host:null)||ve(t);return Fo(e)?e.host:e}function Ro(t){return q(t)&&K(t).position!=="fixed"?t.offsetParent:null}function Oo(t){let e=le(t),i=Ro(t);for(;i&&Ha(i)&&K(i).position==="static";)i=Ro(i);return i&&(Xe(i)==="html"||Xe(i)==="body"&&K(i).position==="static"&&!$i(i))?e:i||function(o){let s=Wt(o);for(;q(s)&&!Pi(s);){if($i(s))return s;s=Wt(s)}return null}(t)||e}function Vo(t){let e=Wt(t);return Pi(e)?t.ownerDocument.body:q(e)&&ci(e)?e:Vo(e)}function Uo(t,e){var i;e===void 0&&(e=[]);let o=Vo(t),s=o===((i=t.ownerDocument)==null?void 0:i.body),a=le(o);return s?e.concat(a,a.visualViewport||[],ci(o)?o:[]):e.concat(o,Uo(o))}function No(t,e,i){return e==="viewport"?Jt(function(o,s){let a=le(o),l=ve(o),r=a.visualViewport,d=l.clientWidth,n=l.clientHeight,u=0,p=0;if(r){d=r.width,n=r.height;let m=Zo();(m||!m&&s==="fixed")&&(u=r.offsetLeft,p=r.offsetTop)}return{width:d,height:n,x:u,y:p}}(t,i)):ae(e)?function(o,s){let a=ct(o,!0,s==="fixed"),l=a.top+o.clientTop,r=a.left+o.clientLeft,d=q(o)?kt(o):{x:1,y:1},n=o.clientWidth*d.x,u=o.clientHeight*d.y,p=r*d.x,m=l*d.y;return{top:m,left:p,right:p+n,bottom:m+u,x:p,y:m,width:n,height:u}}(e,i):Jt(function(o){var s;let a=ve(o),l=gi(o),r=(s=o.ownerDocument)==null?void 0:s.body,d=Nt(a.scrollWidth,a.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),n=Nt(a.scrollHeight,a.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-l.scrollLeft+Lo(o),p=-l.scrollTop;return K(r||a).direction==="rtl"&&(u+=Nt(a.clientWidth,r?r.clientWidth:0)-d),{width:d,height:n,x:u,y:p}}(ve(t)))}var Oa={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:s}=t,a=i==="clippingAncestors"?function(n,u){let p=u.get(n);if(p)return p;let m=Uo(n).filter(x=>ae(x)&&Xe(x)!=="body"),A=null,y=K(n).position==="fixed",f=y?Wt(n):n;for(;ae(f)&&!Pi(f);){let x=K(f),J=$i(f);(y?J||A:J||x.position!=="static"||!A||!["absolute","fixed"].includes(A.position))?A=x:m=m.filter(G=>G!==f),f=Wt(f)}return u.set(n,m),m}(e,this._c):[].concat(i),l=[...a,o],r=l[0],d=l.reduce((n,u)=>{let p=No(e,u,s);return n.top=Nt(p.top,n.top),n.right=So(p.right,n.right),n.bottom=So(p.bottom,n.bottom),n.left=Nt(p.left,n.left),n},No(e,r,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:o}=t,s=q(i),a=ve(i);if(i===a)return e;let l={scrollLeft:0,scrollTop:0},r={x:1,y:1},d={x:0,y:0};if((s||!s&&o!=="fixed")&&((Xe(i)!=="body"||ci(a))&&(l=gi(i)),q(i))){let n=ct(i);r=kt(i),d.x=n.x+i.clientLeft,d.y=n.y+i.clientTop}return{width:e.width*r.x,height:e.height*r.y,x:e.x*r.x-l.scrollLeft*r.x+d.x,y:e.y*r.y-l.scrollTop*r.y+d.y}},isElement:ae,getDimensions:function(t){if(q(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=ct(t);return{width:e.width,height:e.height}},getOffsetParent:Oo,getDocumentElement:ve,getScale:kt,async getElementRects(t){let{reference:e,floating:i,strategy:o}=t,s=this.getOffsetParent||Oo,a=this.getDimensions;return{reference:Ra(e,await s(i),o),floating:{x:0,y:0,...await a(i)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>K(t).direction==="rtl"};var di=(t,e,i)=>{let o=new Map,s={platform:Oa,...i},a={...s.platform,_c:o};return wo(t,e,{...s,platform:a})};var Qo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxwb3BvdmVyIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTs7QUFJUjtFQUNJIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1vaS1oZWFkaW5nLWNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBzbG90Om5vdChbbmFtZV0pIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIHNsb3RbbmFtZT1oZWFkZXJdOm5vdCg6ZW1wdHkpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBzbG90W25hbWU9Ym9keV0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvcG92ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgLnBvcG92ZXItYXJyb3cge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wb3BvdmVyLnNob3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */`;var{h:ze,classNames:pn,createRef:Na}=omii,pi,Yo,Zt,_i,je,ee=class extends h{constructor(){super(...arguments);C(this,pi);C(this,Zt);c(this,"slotRef",Na());C(this,je,!1)}get type(){return"popover"}get $element(){return this.$(`.${this.type}`)}setPosition(){let{placement:e,offset:i,strategy:o}=this.$props,s=g(this,Zt,_i);if(s){let a=this.$(`.${this.type}-arrow`);di(s,this.$element,{strategy:o,placement:e,middleware:[Ht(),Ot(),Rt(i),Ei({element:a})]}).then(({x:l,y:r,placement:d,middlewareData:n})=>{Object.assign(this.$element.style,{left:`${l}px`,top:`${r}px`});let{x:u,y:p}=n.arrow,m={top:"bottom",right:"left",bottom:"top",left:"right"}[d.split("-")[0]];a&&Object.assign(a.style,{left:u!=null?`${u}px`:"",top:p!=null?`${p}px`:"",right:"",bottom:""});let A=this.$element.dataset;m=="top"?A.popperPlacement="bottom":m=="bottom"?A.popperPlacement="top":m=="left"?A.popperPlacement="right":m=="right"&&(A.popperPlacement="left")})}}show(){I(this,je,!0),Object.assign(this.$element.style,{display:"block",position:this.$props.strategy}),this.setPosition(),w.fade.show(this.$element)}hide(){I(this,je,!1),w.fade.hide(this.$element),Object.assign(this.$element.style,{display:"none"})}toggle(){g(this,je)?this.hide():this.show()}installed(){let e=g(this,Zt,_i),{triggerShow:i,triggerHide:o}=this.$props;e&&(i.split(" ").forEach(s=>{s&&e.addEventListener(s,a=>{a.preventDefault(),a.stopPropagation(),this.show()})}),o.split(" ").forEach(s=>{s&&e.addEventListener(s,a=>{a.preventDefault(),a.stopPropagation(),g(this,je)&&this.hide()})}))}render(e){let{placement:i,header:o,body:s}=this.$props;return ze(ze.f,null,ze("slot",{ref:this.slotRef,tabIndex:!0}),ze("div",{class:"popover bs-popover-auto fade",role:"tooltip","data-popper-placement":i},ze("div",{class:"popover-arrow"}),ze("slot",{name:"header",class:"popover-header"},o),ze("slot",{class:"popover-body",name:"body"},s)))}};pi=new WeakSet,Yo=function(){return this.slotRef.current},Zt=new WeakSet,_i=function(){let e=g(this,pi,Yo).assignedElements();if(e.length===0){let{reference:i}=this.$props;return typeof i=="string"?this.getRootNode()?.querySelector(i):i?.current??i}else return e.at(0)},je=new WeakMap,c(ee,"css",[()=>b("reboot","utilities","transitions","popover"),Qo]),c(ee,"defaultProps",{header:null,body:null,reference:null,strategy:"fixed",placement:"bottom",triggerShow:"mouseenter focus",triggerHide:"mouseleave blur",offset:6}),c(ee,"propTypes",{strategy:String,placement:String,trigger:String,offset:Number});var To=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx1cGxvYWRlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7OztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBV0E7RUFDSTtFQUNBOztBQUlBO0VBQ0k7RUFDQTs7QUFJQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJUjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBTUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdKO0VBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGxlZnQ6IC0xMDAwcHg7XHJcbn1cclxuXHJcbi5waWN0dXJlcyB7XHJcbiAgICAuc2VsZWN0b3ItY29sIHtcclxuICAgICAgICAvLyAuaW1hZ2V7XHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuXHJcblxyXG5cclxuICAgICAgICAuZmlsZSB7XHJcbiAgICAgICAgICAgIC0tb2ktaWNvbi13aWR0aDogOHJlbTtcclxuICAgICAgICAgICAgLS1vaS1pY29uLWhlaWdodDogOHJlbTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWxlY3RvciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIC0tb2ktaWNvbi13aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgLS1vaS1pY29uLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAmOm5vdCguc2VsZWN0b3IpOmhvdmVyIHtcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vaS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */`;var ui=(t,e=2048)=>{if(!(t instanceof File))return null;let i=URL.createObjectURL(t);return setTimeout(()=>{URL.revokeObjectURL(i)},e),i};var{h:O,classNames:ka}=omii,Do=t=>t?.type?.indexOf("image")==0,Wa=t=>Do(t)?(t.url=t.url??ui(t.file),O("div",{title:t.name,class:"image",style:{backgroundImage:`url(${t.url})`}})):O("div",{className:"file"},O("oi-icon",{"view-box":"1024",name:mt(t.ext),type:"file-type",class:"position-absolute top-0 start-50 translate-middle-x"}),O("label",{class:"position-absolute bottom-0 start-50 translate-middle-x"},t.name,t.ext)),zo=({component:t})=>{let{files:e,selectText:i,multiple:o}=t.$props;return O("div",{className:"pictures"},O("div",{class:"row row-cols-auto g-4"},e.map((s,a)=>O("div",{className:"col",key:`file-${a}`},O("div",{class:"card",onClick:()=>{t.open(a)}},Wa(s),O("div",{className:"actions"},O("div",{class:"position-absolute top-50 start-50 translate-middle"},Do(s)&&O("oi-icon",{name:"search"}),O("oi-icon",{name:"delete_forever",onClick:l=>{l.preventDefault(),l.stopPropagation(),t.remove(a)}})))))),(o||e.length==0)&&O("div",{className:"col selector-col",key:"selector"},O("div",{class:"card selector"},O("label",{class:ka("selector",{multiple:o}),title:i,onClick:()=>{t.open()}},O("oi-icon",{name:"add"}))))))};var{h:z,classNames:Bn}=omii,jo=({component:t})=>{let{files:e,selectText:i,multiple:o}=t.$props;return z("div",{className:"files"},z("slot",{name:"actions"},z("button",{className:"btn btn-primary",onClick:()=>{t.open()}},i)),z("table",{class:"table"},z("tbody",null,e.map(s=>z("tr",null,z("td",null,z("oi-icon",{"view-box":"1024",name:mt(s.ext),type:"file-type"}),s.name,s.ext),z("td",null,vi(s.size)),z("td",null,z("oi-icon",{name:"delete"})))))))};var{h:Ii,classNames:Fn}=omii,Za={pictures:zo,files:jo,none:null},Lt={NONE:"NONE",UPLOADING:"UPLOADING",UPLOADED:"UPLOADED",ERROR:"ERROR"},Ee,re=class extends h{constructor(){super(...arguments);C(this,Ee,-1)}static get STATUS(){return Lt}open(e=-1){I(this,Ee,e),this.$("#files").click(),this.fire("open",{index:e})}remove(e){this.$props.files?.splice(e,1),this.updateSelf(),this.fire("remove",{index:e})}select(e){let{multiple:i,files:o,autoUpload:s}=this.$props;if(e?.length==0)return!1;if(i||o.splice(0,o.length),g(this,Ee)!=-1&&e.length>=1){let a=Array.from(e).map(l=>({id:null,name:Mt(l.name),ext:$t(l.name),size:l.size,type:l.type,lastModified:l.lastModified,file:l}));o.splice(g(this,Ee),1,...a),this.fire("replaced",{index:g(this,Ee),replaceFiles:a})}else{let a=Array.from(e).map(l=>({id:null,name:Mt(l.name),ext:$t(l.name),size:l.size,type:l.type,lastModified:l.lastModified,file:l,status:Lt.NONE}));o.push(...a),this.fire("selected",{selected:a})}this.updateSelf(),s===!0&&this.upload()}refresh(){this.forceUpdate()}upload(){let{files:e,action:i,withCredentials:o,headers:s}=this.$props;i||alert("\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u4F20\u5730\u5740");let a=0;for(let l of e.filter(r=>r.file&&(!r.status||r.status==Lt.NONE))){l.index=a++;let r=new FormData;r.append("file",l.file);let d=new XMLHttpRequest;if(d.withCredentials=o,d.open("POST",i),typeof s=="function"&&(s=s()),typeof s=="object")for(let n in s)d.setRequestHeader(n,s[n]);l.status=Lt.UPLOADING,d.onreadystatechange=n=>{if(d.readyState===4&&d.status===200){console.log("\u4E0A\u4F20\u6210\u529F");let u=d.responseText;try{u=JSON.parse(u)}catch(p){console.error(p)}l.status=Lt.UPLOADED,this.fire("uploaded",{file:l,data:u,uploader:this}),this.refresh()}},d.upload.onprogress=n=>{if(n.lengthComputable){let u=Math.ceil(n.loaded/n.total*100);l.progress=u,this.fire("progress",{file:l,loaded:n.loaded,uploader:this}),console.log(u+"%"),this.refresh()}},d.send(r)}}render(){let{multiple:e,accept:i,template:o}=this.$props;return Ii(Ii.f,null,Ii("slot",null,Za[o]),Ii("input",{id:"files",type:"file",multiple:e,accept:i,onChange:s=>{this.select(s.target.files),s.target.value=null}}))}};Ee=new WeakMap,c(re,"creatPreviewUrl",ui),c(re,"css",[()=>b("reboot","containers","grid","card","utilities","buttons","tables"),To]),c(re,"defaultProps",{accept:"",action:"",selectText:"\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20",headers:null,multiple:!1,autoUpload:!1,allowSort:!1,limit:!1,withCredentials:!1,template:"pictures",files:[]}),c(re,"propTypes",{accept:String,action:String,selectText:String,multiple:Boolean,autoUpload:Boolean,allowSort:Boolean,limit:Number,withCredentials:Boolean});var Eo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxjYXJvdXNlbCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBSUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgc2xvdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgc2xvdFtuYW1lPWluZGljYXRvcnNdIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuMnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgLjJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOjA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjM2cztcclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */`;var La="transitionend";var $o=t=>{t.dispatchEvent(new Event(La))},Va=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u");var Mo=t=>{if(!Va(t)||t.getClientRects().length===0)return!1;let e=getComputedStyle(t).getPropertyValue("visibility")==="visible",i=t.closest("details:not([open])");if(!i)return e;if(i!==t){let o=t.closest("summary");if(o&&o.parentNode!==i||o===null)return!1}return e};var{h:Q,classNames:Po,extractClass:Ua}=omii;var Qa="carousel-item-end",Ya="carousel-item-start",Ta="carousel-item-next",Da="carousel-item-prev",za=".active",ja=".carousel-item",En=za+ja,$e,ne,Vt,Be,Ge=class extends h{constructor(){super(...arguments);C(this,$e,0);C(this,ne,!1);C(this,Vt,[]);C(this,Be,void 0)}css(){return`
    .carousel-item {
      transition-duration: ${this.$props.duration}s;
    }
    `}get activeIndex(){return g(this,$e)}get isSliding(){return g(this,ne)}get $items(){return this.$$(".carousel-item")}get $activeItem(){return this.$(".carousel-item.active")}pause(){g(this,ne)&&$o(this),clearInterval(g(this,Be)),I(this,Be,null)}get indicators(){return[...this.$("slot[name=indicators]").children]}slide(e=!0){if(g(this,ne))return!1;let{$activeItem:i,$items:o,$props:{duration:s}}=this,a=o.indexOf(i),l,r;if(e instanceof HTMLElement?(r=e,l=o.indexOf(r),e=l>a):typeof e=="number"?(l=(e+o.length)%o.length,r=o[l],e=l>a):(l=(a+1)%o.length,e||(l=(a-1+o.length)%o.length),r=o[l]),g(this,$e)==l)return!1;let d=e?Ya:Qa,n=e?Ta:Da;I(this,ne,!0);let u=Number.parseFloat(i.getAttribute("waiting"))??0;R(r,[{classNames:[],duration:u},{classNames:[n],callback:()=>{Pt(r)}},{classNames:[n,d],duration:s},{classNames:["active"],callback:()=>{this.indicators.forEach((p,m)=>{l==m?p.classList.add("active"):p.classList.remove("active")})}}]),R(i,[{classNames:[],duration:u},{classNames:[d,"active"],duration:s},{classNames:[],callback:()=>{I(this,ne,!1),I(this,$e,l);let p;for(;p=g(this,Vt).pop();)p()}}])}nextWhenVisible(){!document.hidden&&Mo(this)&&this.slide()}cycle(){g(this,Be)&&clearInterval(g(this,Be)),I(this,Be,setInterval(()=>this.nextWhenVisible(),this.$props.interval*1e3))}installed(){let e=this.$items;!this.$activeItem&&e.length>0&&e[0].classList.add("active"),I(this,$e,e.indexOf(this.$activeItem)),this.$props.autoSlide&&this.$activeItem&&this.cycle(),this.addEventListener("mouseenter",()=>{this.pause()}),this.addEventListener("mouseleave",()=>{this.$props.autoSlide&&(g(this,ne)?g(this,Vt).push(()=>{this.cycle()}):this.cycle())})}render(e){let{items:i,nextCtrl:o,prevCtrl:s,indicator:a}=this.$props;return Q("div",{...Ua(e,"carousel")},Q("slot",{class:"carousel-inner"},i.map(l=>Q("div",{className:Po("carousel-item"),waiting:l.attributes?.waiting},l))),Q("div",{class:"carousel-indicators"},Q("slot",{name:"indicators"},typeof a=="function"&&i.map((l,r)=>a({item:l,index:r,host:this})))),Q("slot",{name:"actions"},typeof o=="function"&&o(this),typeof s=="function"&&s(this)))}};$e=new WeakMap,ne=new WeakMap,Vt=new WeakMap,Be=new WeakMap,c(Ge,"css",[()=>b("reboot","utilities","carousel"),Eo]),c(Ge,"defaultProps",{autoSlide:!0,pauseEvent:"hover",interval:2.3,duration:.6,items:[],prevCtrl:e=>Q("button",{class:"carousel-control-prev",type:"button",onClick:i=>{e.slide(!1)}},Q("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Q("span",{class:"visually-hidden"},"Previous")),nextCtrl:e=>Q("button",{class:"carousel-control-next",type:"button",onClick:i=>{e.slide()}},Q("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Q("span",{class:"visually-hidden"},"Next")),indicator:({index:e,host:i})=>Q("button",{type:"button",onClick:o=>i.slide(e),class:Po({active:e==0})})}),c(Ge,"propTypes",{autoSlide:Boolean,interval:Number,duration:Number,pauseEvent:String});var{h:Ki,classNames:_n,extractClass:Ea}=omii,we=class extends h{css(){}render(t){let{text:e,desc:i,position:o}=this.$props,s=o?o.split("-"):[];return Ki("span",{...Ea(t,"badge",{"position-absolute":o,"top-0":s.includes("top"),"start-100":s.includes("right"),"start-0":s.includes("left"),"top-100":s.includes("bottom"),"translate-middle":o,"rounded-pill":o})},Ki("slot",null,e),i&&Ki("span",{class:"visually-hidden"},i))}};c(we,"css",()=>b("reboot","utilities","badge")),c(we,"defaultProps",{text:"",desc:!1,position:!1}),c(we,"propTypes",{});var _o=`
:host slot[name=header] {
  display: block;
  flex: 1;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx0b2FzdCIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBzbG90W25hbWU9aGVhZGVyXSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZmxleDoxO1xyXG4gICAgfVxyXG59Il19 */`;var{h:gt,classNames:sc,extractClass:$a}=omii,Fe,Je=class extends h{constructor(){super(...arguments);C(this,Fe,!0)}get closed(){return g(this,Fe)}close(){I(this,Fe,!0),w.fade.hide(this).then(()=>{this.update()})}show(){this.open()}open(){I(this,Fe,!1),this.update(),w.fade.show(this)}install(){I(this,Fe,!this.$props.visible)}render(e){return gt("div",{...$a(e,"toast",{show:!g(this,Fe)}),role:"alert","aria-live":"assertive","aria-atomic":"true"},gt("div",{class:"toast-header"},gt("slot",{name:"header"}),gt("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:i=>{this.close()}})),gt("div",{class:"toast-body"},gt("slot",null)))}};Fe=new WeakMap,c(Je,"css",[()=>b("reboot","utilities","toasts","close"),_o]),c(Je,"defaultProps",{visible:!1}),c(Je,"propTypes",{visible:Boolean});var{h:qi,classNames:Ma,extractClass:pc}=omii,ce=class extends h{set value(t){this.$props.value=t,this.update()}get value(){return this.$props.value}setValue(t){this.$props.value=t,this.update()}css(){}render(t){let{label:e,value:i,min:o,max:s,showPercent:a,striped:l,animated:r,style:d,className:n}=this.$props;return qi("div",{class:"progress",style:d},qi("div",{class:Ma("progress-bar",t.class??t.className,{"progress-bar-striped":l,"progress-bar-animated":r}),role:"progressbar","aria-label":e,style:{width:`${i}%`},"aria-valuenow":i,"aria-valuemin":o,"aria-valuemax":s},a&&qi("span",null,i,"%")))}};c(ce,"updateOnAttributeChanged",!0),c(ce,"css",()=>b("reboot","utilities","progress")),c(ce,"defaultProps",{label:!1,value:0,min:0,max:100,height:!1,showPercent:!1,striped:!1,animated:!1,className:null}),c(ce,"propTypes",{label:String,value:Number,min:Number,max:Number,height:String,showPercent:Boolean,striped:Boolean,animated:Boolean,className:String});var Ko=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx0b29sdGlwIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSTtFQUNBOztBQUlKO0VBQ0k7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tb2ktaGVhZGluZy1jb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnRvb2x0aXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudG9vbHRpcC5zaG93IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAudG9vbHRpcC1hcnJvdyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNsb3Q6bm90KFtuYW1lXSkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNsb3RbbmFtZT1ib2R5XSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdfQ== */`;var{h:dt,classNames:bc,createRef:fc}=omii,Ci=class extends ee{get type(){return"tooltip"}render(t){let{placement:e,body:i}=this.$props;return dt(dt.f,null,dt("slot",{ref:this.slotRef}),dt("div",{class:"tooltip bs-tooltip-auto fade",role:"tooltip","data-popper-placement":e},dt("div",{class:"tooltip-arrow"}),dt("slot",{class:"tooltip-inner",name:"body"},i)))}},Me=Ci;c(Me,"css",[()=>b("reboot","utilities","transitions","tooltip"),Ko]),c(Me,"defaultProps",{...ht(Ci,Ci,"defaultProps"),offset:0});var qo=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxsYXlvdXQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTs7QUFHSjtFQUNJO0VBQ0E7RUFDQTs7QUFHSjtFQUNJOztBQUlKO0VBQ0k7O0FBT1I7RUFDSTtFQUNBO0VBQ0E7O0FBSUo7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7RUFDQTs7QUFHSjtFQUNJO0lBQ0k7OztBQUlSO0VBQ0k7RUFDQTtFQUNBOztBQUdKO0VBQ0k7SUFDSSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLS1vaS1sYXlvdXQtZHVyYXRpb246IC4zNnM7XHJcblxyXG4gICAgc2xvdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAmW25hbWU9aGVhZGVyXSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhbCgtLW9pLWxheW91dC1oZWFkZXItcGFkZGluZywgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmW25hbWU9Zm9vdGVyXSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhbCgtLW9pLWxheW91dC1mb290ZXItcGFkZGluZywgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmW25hbWU9Y29udGVudF0ge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhbCgtLW9pLWxheW91dC1jb250ZW50LXBhZGRpbmcsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJltuYW1lPWxlZnRdIHtcclxuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tb2ktbGF5b3V0LWxlZnQtcGFkZGluZywgMCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJltuYW1lPXJpZ2h0XSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhbCgtLW9pLWxheW91dC1yaWdodC1wYWRkaW5nLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tb2ktbGF5b3V0LWR1cmF0aW9uKSBlYXNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuY29sbGFwc2U6bm90KC5zaG93LCAuY29sbGFwc2UtaG9yaXpvbnRhbCkge1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sbGFwc2UuY29sbGFwc2UtaG9yaXpvbnRhbDpub3QoLnNob3cpIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sbGFwc2luZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCB2YXIoLS1vaS1sYXlvdXQtZHVyYXRpb24pIGVhc2VcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gICAgICAgIC5jb2xsYXBzaW5nIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sbGFwc2luZy5jb2xsYXBzZS1ob3Jpem9udGFsIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggdmFyKC0tb2ktbGF5b3V0LWR1cmF0aW9uKSBlYXNlXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAgICAgICAuY29sbGFwc2luZy5jb2xsYXBzZS1ob3Jpem9udGFsIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */`;var{h:Se,classNames:wc,createRef:pt}=omii,j,ge,E,Pe,_e,hi,He=class extends h{constructor(){super(...arguments);C(this,j,pt());C(this,ge,pt());C(this,E,pt());C(this,Pe,pt());C(this,_e,pt());C(this,hi,pt())}close(e,i){}closeFooter(){this.$props.openFooter=!1,w.collapse.hide(g(this,E).current),g(this,ge).current.style.height=this.clientHeight-g(this,j).current.clientHeight+"px"}openFooter(){this.$props.openFooter=!0,w.collapse.show(g(this,E).current),g(this,ge).current.style.height=this.clientHeight-g(this,j).current.clientHeight-g(this,E).current.scrollHeight+"px"}toggleFooter(){this.$props.openFooter?this.closeFooter():this.openFooter()}closeHeader(){this.$props.openHeader=!1,w.collapse.hide(g(this,j).current),g(this,ge).current.style.height=this.clientHeight-g(this,E).current.clientHeight+"px"}openHeader(){this.$props.openHeader=!0,w.collapse.show(g(this,j).current),g(this,ge).current.style.height=this.clientHeight-g(this,j).current.scrollHeight-g(this,E).current.clientHeight+"px"}toggleHeader(){this.$props.openHeader?this.closeHeader():this.openHeader()}closeLeft(){this.$props.openLeft=!1,w.collapse.hide(g(this,Pe).current)}openLeft(){this.$props.openLeft=!0,w.collapse.show(g(this,Pe).current)}toggleLeft(){this.$props.openLeft?this.closeLeft():this.openLeft()}closeRight(){this.$props.openRight=!1,w.collapse.hide(g(this,_e).current)}openRight(){this.$props.openRight=!0,w.collapse.show(g(this,_e).current)}toggleRight(){this.$props.openRight?this.closeRight():this.openRight()}resize(){let e=this.getBoundingClientRect(),i=g(this,j).current.getBoundingClientRect(),o=g(this,E).current.getBoundingClientRect();g(this,ge).current.style.height=e.height-i.height-o.height+"px"}installed(){let{openFooter:e,openHeader:i,openLeft:o,openRight:s}=this.$props;e||(g(this,E).current.style.height=0),i||(g(this,j).current.style.height=0),o||(g(this,Pe).current.style.height=0),s||(g(this,_e).current.style.height=0),this.resize(),window.addEventListener("resize",a=>{this.resize()},!0)}render(e){return Se(Se.f,null,Se("slot",{name:"header",ref:g(this,j)}),Se("main",{ref:g(this,ge)},Se("slot",{name:"left",ref:g(this,Pe),class:"collapse-horizontal"}),Se("slot",{name:"content",ref:g(this,hi)}),Se("slot",{name:"right",ref:g(this,_e),class:"collapse-horizontal"})),Se("slot",{name:"footer",ref:g(this,E)}))}};j=new WeakMap,ge=new WeakMap,E=new WeakMap,Pe=new WeakMap,_e=new WeakMap,hi=new WeakMap,c(He,"css",[qo]),c(He,"defaultProps",{openFooter:!0,openHeader:!0,openLeft:!0,openRight:!0,duration:.35}),c(He,"propTypes",{openFooter:Boolean,openHeader:Boolean,openLeft:Boolean,openRight:Boolean});var es=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxpbXBvcnQiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIG9pLWxvYWRpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */`;var{h:eo,classNames:Zc,uniqueTag:Pa}=omii,te,Re=class extends h{constructor(){super(...arguments);C(this,te,void 0)}get $module(){return g(this,te)}load(e,i,o,s){i=i??this.$props.module,o=o??this.$props.loading,s=s??this.$props.loadError,I(this,te,o),e&&i&&import(e).then(a=>{let l=a[i];if(l==null)I(this,te,s);else if(typeof l=="function"){let r=Pa(l);I(this,te,eo(r,null))}else I(this,te,l);this.updateSelf()}).catch(a=>{console.error("import module error\uFF01",e,i,a),I(this,te,s),this.updateSelf()})}install(){let{src:e,module:i,loading:o,loadError:s}=this.$props;this.load(e,i,o,s)}render(e){return g(this,te)}};te=new WeakMap,c(Re,"css",[es]),c(Re,"defaultProps",{src:null,module:"default",loading:eo("oi-loading",{size:"6"}),loadError:eo("h1",null,"Module Load Error")}),c(Re,"propTypes",{src:String,module:String});var ts=`
:host {
  display: block;
  width: fit-content;
}
:host slot[name=title] {
  display: block;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxvZmZjYW52YXMiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtFQUNBOztBQUVBO0VBQ0kiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICBzbG90W25hbWU9dGl0bGVdIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSJdfQ== */`;var{h:Oe,classNames:Dc,createRef:is,extractClass:_a}=omii,ie,Ne=class extends h{constructor(){super(...arguments);c(this,"offcanvasRef",is());c(this,"backdropRef",is());C(this,ie,void 0)}css(){return`
    .offcanvas,.offcanvas-sm,.offcanvas-md,.offcanvas-lg,.offcanvas-xl,.offcanvas-xxl {
      transition-duration: ${this.$props.duration}s
   } `}async show(){if(g(this,ie))return;I(this,ie,!0),await this.update(!0,!0);let e=this.offcanvasRef.current;this.backdropRef.current?.classList.add("show"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog");let{duration:i}=this.$props;R(e,[{classNames:"showing",duration:i},{classNames:"show"}])}toggle(){g(this,ie)?this.hide():this.show()}open(){this.show()}hide(){if(!g(this,ie))return;I(this,ie,!1);let e=this.offcanvasRef.current;e.blur();let{duration:i}=this.$props;R(e,[{classNames:"hiding show",duration:i},{classNames:"",callback:()=>{e.removeAttribute("aria-modal"),e.removeAttribute("role"),this.backdropRef.current?.classList.remove("show"),this.updateSelf()}}])}close(){this.hide()}installed(){I(this,ie,this.$props.visible)}render(e){let{visible:i,placement:o,position:s,title:a,useBackdrop:l}=this.$props;return Oe(Oe.f,null,Oe("div",{ref:this.offcanvasRef,..._a(e,"offcanvas",`offcanvas-${o}`,`position-${s}`,{show:i}),tabindex:"-1","aria-labelledby":"offcanvasLabel"},Oe("div",{class:"offcanvas-header"},Oe("slot",{name:"title",class:"offcanvas-title h5"},a),Oe("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:r=>this.close()})),Oe("slot",{class:"offcanvas-body"})),l&&g(this,ie)&&Oe("div",{ref:this.backdropRef,class:"offcanvas-backdrop fade",onClick:r=>{this.hide()}}))}};ie=new WeakMap,c(Ne,"css",[()=>b("reboot","offcanvas","utilities","close"),ts]),c(Ne,"defaultProps",{visible:!1,title:null,placement:"start",duration:.3,position:"fixed",useBackdrop:!0}),c(Ne,"propTypes",{visible:Boolean,placement:String,duration:Number,position:String,useBackdrop:Boolean});var{h:Kc,classNames:qc,extractClass:eg,createRef:tg}=omii;function as(t){let{validity:e}=t;if(e)if(e.valid)delete t.dataset.invalid,delete t.dataset.validationMessage;else{let i=[];for(let o in e)o!=="valid"&&e[o]===!0&&i.push(o);i.length&&(t.dataset.invalid=i.join(" ")),t.validationMessage&&(t.dataset.validationMessage=t.validationMessage)}}function os(t){let e=t.currentTarget;e.checkValidity(),as(t.target),e.classList.add("was-validated")}function ls(t){let e=t.checkValidity(),i=[...t.querySelectorAll("[data-validate")];return[...t.elements,...i].forEach(o=>{as(o)}),t.classList.add("was-validated"),i.every(o=>o.checkValidity?o.checkValidity():!0)&&e}function ss(t){let e=t.target;e.removeEventListener("input",os),e.addEventListener("input",os,!1),ls(e)||(t.preventDefault(),t.stopPropagation())}var ut=class extends HTMLFormElement{static validate(e){e.noValidate=!0,e.removeEventListener("submit",ss),e.addEventListener("submit",ss,!0)}reset(){super.reset(),this.classList.remove("was-validated")}validate(){return ls(this)}connectedCallback(){this.constructor.validate(this)}};var rs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxkcm9wZG93biIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOztBQUVBO0VBQ0k7O0FBR0o7RUFDSTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHNsb3Q6bm90KFtuYW1lXSkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBzbG90W25hbWU9bWVudV0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuXHJcbiAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0= */`;var{h:mi,classNames:sg,createRef:ns}=omii,oe=null;document.addEventListener("click",t=>{oe&&oe.hide()});var Qt,Yt,de,Ke,qe,Ut,It,ke=class extends h{constructor(){super(...arguments);C(this,de);C(this,qe);C(this,Qt,ns());C(this,Yt,ns());C(this,It,!1)}get $menu(){return g(this,Qt).current}setPosition(){let{placement:e,offset:i,strategy:o}=this.$props;di(g(this,qe,Ut),this.$menu,{strategy:o,placement:e,middleware:[Ht(),Ot(),Rt(i)]}).then(({x:s,y:a,placement:l})=>{Object.assign(this.$menu.style,{left:`${s}px`,top:`${a}px`})})}show(){I(this,It,!0),g(this,de,Ke).focus(),g(this,de,Ke).setAttribute("aria-expanded",!0),g(this,de,Ke).classList.add("show"),Object.assign(this.$menu.style,{display:"block",position:this.$props.strategy}),oe=this,this.setPosition()}hide(){I(this,It,!1),g(this,de,Ke).classList.remove("show"),g(this,de,Ke).setAttribute("aria-expanded","false"),oe=null,Object.assign(this.$menu.style,{display:"none"})}toggle(){g(this,It)?this.hide():this.show()}installed(){let{trigger:e}=this.$props;e=="click"?g(this,qe,Ut).addEventListener("click",i=>{oe&&oe!=this&&oe.hide(),i.preventDefault(),i.stopImmediatePropagation(),this.toggle()}):e=="focus"&&(g(this,qe,Ut).addEventListener("focus",i=>{oe&&oe!=this&&oe.hide(),i.preventDefault(),i.stopImmediatePropagation(),this.show()}),g(this,qe,Ut).addEventListener("blur",i=>{i.preventDefault(),i.stopImmediatePropagation(),this.hide()})),this.addEventListener("click",i=>{i.stopImmediatePropagation()})}render(e){let{menu:i}=this.$props;return mi(mi.f,null,mi("slot",{ref:g(this,Yt)}),mi("slot",{name:"menu",ref:g(this,Qt)},i))}};Qt=new WeakMap,Yt=new WeakMap,de=new WeakSet,Ke=function(){return g(this,Yt).current},qe=new WeakSet,Ut=function(){let e=g(this,de,Ke).assignedElements();if(e.length===0){let{reference:i}=this.$props;return typeof i=="string"?this.getRootNode()?.querySelector(i):i?.current??i}else return e.at(0)},It=new WeakMap,c(ke,"css",[()=>b("reboot","utilities","transitions","dropdown"),rs]),c(ke,"defaultProps",{placement:"bottom",strategy:"absolute",trigger:"click",offset:0,menu:null,reference:null}),c(ke,"propTypes",{placement:String,strategy:String,trigger:String,offset:Number});var cs=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxjb2RlciIsInNvdXJjZXMiOlsiaW5kZXguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0VBQ0E7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmNvZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */`;var{h:Ka,Component:ug}=omii,Ai,We=class extends h{constructor(){super(...arguments);C(this,Ai,void 0)}get value(){return this.editor?.getValue()}set value(e){this.editor?.setValue(e)}installed(){let{codes:e,language:i,automaticLayout:o,fontSize:s}=this.$props;import(new URL("./monaco/index.js",import.meta.url).href).then(({monaco:a})=>{I(this,Ai,a),this.editor=a.editor.create(this.$(".coder"),{value:e,language:i,automaticLayout:o,fontSize:s,minimap:{enabled:!1}})})}render(){return Ka("div",{class:"coder"})}};Ai=new WeakMap,c(We,"css",[()=>{let e=import.meta.url,i=`@font-face {
        font-family: "codicon";
        font-display: block;
        src: url(${new URL("./monaco",e).href}/codicon-BEBTMDKB.ttf) format("truetype");
      }`,o=new CSSStyleSheet;return o.replace(i),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o],fetch(new URL("./monaco/index.css",e).href).then(s=>s.text())},cs]),c(We,"defaultProps",{codes:"",language:"javascript",automaticLayout:!0,fontSize:12}),c(We,"propTypes",{codes:String,language:String,fontSize:Number,automaticLayout:Boolean});var gs=`
:host .selected {
  width: 100%;
}
:host .selected.focus .values input.value {
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
:host .selected .values {
  margin: 0;
  padding: 0;
}
:host .selected .values li {
  list-style: none;
  margin-bottom: 0.1em;
  padding: 0.1rem 0.5rem;
}
:host .selected .values input.value {
  width: 0;
}
:host .selected .values li:not(.input) {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxzZWxlY3QiLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFVSTs7QUFQUTtFQUNJOztBQVFaO0VBQ0k7RUFDQTs7QUFFQTtFQUNJO0VBQ0E7O0FBSVI7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0E7O0FBR0o7RUFDSTs7QUFJSjtFQUNJO0VBQ0E7RUFFQTs7QUFXWjtFQUNJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0k7RUFDSTs7QUFFQTtFQUNJOztBQUtaO0VBQ0k7RUFFQTs7QUFFQTtFQUNJOztBQUVBO0VBQ0k7O0FBS1I7RUFDSTs7QUFHSjtFQUNJOztBQUdKO0VBQ0k7O0FBR0o7RUFDSSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcblxyXG4gICAgLnNlbGVjdGVkIHtcclxuICAgICAgICAmLmZvY3VzIHtcclxuICAgICAgICAgICAgLnZhbHVlcyB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2ktYmkge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAudmFsdWVzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC4xZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgbGk6bm90KC5pbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGFuZGVyIHt9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjVlbTtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAjY2RjZmNmO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2RjZmNmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuMzc1cmVtO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDI2ZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuXHJcbiAgICAgICAgJi5zZWFyY2hpbmcge1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICYubWF0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuXHJcbiAgICAgICAgICAgID5kaXYuZm9ybS1jaGVjayB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMzc1ZW0gMCAuMzc1ZW0gMmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjQ1ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */`;var{h:Z,classNames:ds,extractClass:fg}=omii,Ct,Y,H,Ze=class extends h{constructor(){super(...arguments);C(this,Ct,!1);C(this,Y,void 0);C(this,H,!1)}get value(){return this.$props.value}set value(e){this.$props.value=e}get values(){return this.$props.values}get validity(){let{required:e,values:i,min:o,max:s,multiple:a}=this.$props,l={valid:!0};return e&&(a&&(!i||i.length==0)||!a&&(this.value==null||this.value==""))&&(l.valid=!1,l.valueMissing=!0),l.valid&&a&&(o!=0&&o>i.length&&(l.valid=!1,l.rangeUnderflow=!0),s!=0&&s<i.length&&(l.valid=!1,l.rangeOverflow=!0)),l}checkValidity(){I(this,Ct,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}showOptions(){this.$("oi-dropdown").show()}hideOptions(){this.$("oi-dropdown").hide()}receiveProps(e,i){e.values!=i.values&&this.classList.remove("is-invalid")}installed(){this.dataset.validate=!0,this.setAttribute("tabIndex",0),this.addEventListener("focus",s=>{this.$("input.value").focus(),this.$(".selected").classList.add("focus")}),this.addEventListener("blur",s=>{this.$(".selected").classList.remove("focus"),I(this,H,!1),I(this,Y,null),this.hideOptions(),this.updateSelf()});let{options:e,multiple:i,values:o}=this.$props;this.addEventListener("keydown",s=>{if(["Enter","ArrowUp","ArrowDown"].includes(s.key))s.preventDefault(),s.stopPropagation();else return!1;let l=g(this,Y)?this.$$("li.option.match"):this.$$("li.option");if(l.length){l.forEach((d,n)=>{d.classList.contains("active")&&I(this,H,n),d.classList.remove("active")}),s.key=="Enter"?(g(this,H)===!1&&I(this,H,0),I(this,Y,null),this.hideOptions()):s.key=="ArrowUp"?g(this,H)===!1?I(this,H,l.length-1):g(this,H)>0&&yi(this,H)._--:s.key=="ArrowDown"?(g(this,H)===!1?I(this,H,0):g(this,H)<l.length-1&&yi(this,H)._++,this.showOptions()):s.key=="Backspace";let r=l[g(this,H)];if(r&&(r.classList.add("active"),!i||s.key=="Enter")){let d=e.at(r.dataset.index);this.toggleOption(d,!1)}}})}toggleOption(e,i=!0){let{values:o,multiple:s}=this.$props;if(s){let a=o.indexOf(e.value);a==-1?o.push(e.value):o.splice(a,1)}else this.value=e.value,i&&this.hideOptions();i&&I(this,Y,null),this.updateSelf(),g(this,Ct)&&this.checkValidity(),this.fire("change",s?{values:o}:{value:this.value})}render(){let{values:e,value:i,searchable:o,options:s,preserveOrder:a,createSelected:l,createOption:r,multiple:d}=this.$props;return r=r.bind(this),l=l.bind(this),e=e??[],a&&d&&e.sort((n,u)=>s.findIndex(p=>p.value==n)-s.findIndex(p=>p.value==u)),s=s??[],Z("oi-dropdown",{placement:"bottom-start",css:`
          :host slot:not([name]) {
            display: block;
          }
          :host slot[name="menu"] {
            width: 100%;
          }
        `},Z("div",{class:"selected d-flex",onClick:n=>{this.$("input.value").focus(),n.stopImmediatePropagation(),this.showOptions()}},d?Z("ul",{class:"values d-flex flex-wrap"},e.map((n,u)=>{let p=s.find(m=>m.value==n);if(p)return l(p,u)}),Z("li",{className:"input"},Z("input",{className:"value",readOnly:!o,value:g(this,Y),onInput:n=>{I(this,Y,n.target.value),I(this,H,!1),this.updateSelf()}}))):Z("input",{className:"value w-100",readOnly:!o,value:g(this,Y)??s.find(n=>n.value==i)?.text,onInput:n=>{I(this,Y,n.target.value),I(this,H,!1),this.updateSelf()}}),Z("oi-icon",{class:"expander ms-auto",name:"keyboard_arrow_down",onClick:n=>{this.showOptions()}})),Z("ul",{className:ds("dropdown-menu",{searching:g(this,Y),multiple:d}),slot:"menu"},s.map((n,u)=>Z("li",{"data-index":u,className:ds("option",{match:n.text.includes(g(this,Y)),active:d?e.includes(n.value):i==n.value}),onClick:p=>{this.toggleOption(n)}},r(n,u)))))}};Ct=new WeakMap,Y=new WeakMap,H=new WeakMap,c(Ze,"css",[()=>b("reboot","utilities","forms","scrollbar"),gs]),c(Ze,"propTypes",{multiple:Boolean,preserveOrder:Boolean,required:Boolean,searchable:Boolean,min:Number,max:Number}),c(Ze,"defaultProps",{options:[],values:[],value:null,multiple:!0,required:!1,searchable:!1,min:0,max:0,preserveOrder:!0,createOption(e,i){let{values:o,multiple:s}=this.$props;return Z("div",{class:"form-check d-flex"},s&&Z("input",{class:"form-check-input",type:"checkbox",value:e.value,id:`option${i}`,checked:o.includes(e.value)}),Z("label",{class:"form-check-label flex-grow-1"},e.text))},createSelected(e,i){let{values:o,multiple:s}=this.$props;return Z("li",null,e.text,Z("oi-bi",{name:"x",onClick:a=>{a.preventDefault(),a.stopImmediatePropagation(),o.splice(i,1),this.updateSelf(),g(this,Ct)&&this.checkValidity(),this.fire("change",s?{values:o}:{value:this.value})}}))}});var ps=`

/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx0YWJsZSIsInNvdXJjZXMiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOltdfQ== */`;var{h:L,classNames:Jg,extractClass:qa}=omii,Le=class extends h{render(){let{columns:t,rows:e,showHeader:i,titleCellFormatter:o,dataCellFormatter:s,height:a}=this.$props,l=qa(this.$props)?.class??"";return L("div",{className:"table-container",style:{height:a}},L("table",{className:`table ${l}`},L("thead",null,i&&L("tr",null,t?.map(r=>L("th",{style:r.titleStyle,scope:"col"},o(r,t,e,this)))),L("slot",{name:"header"})),L("tbody",null,e?.map((r,d)=>L("tr",null,t.map(n=>L("td",{style:n.style},s(n,r,d,e,this)))))),L("tfoot",null,L("slot",{name:"footer"}))))}};c(Le,"css",[()=>b("reboot","utilities","tables"),ps]),c(Le,"defaultProps",{rows:[],columns:[],showHeader:!0,titleCellFormatter(t,e,i,o){if(t.type=="checkbox"){t.checked||(t.checked=[]);let s=i?.map(l=>l[t.field])??[],a=s.every(l=>t.checked.includes(l));return L("input",{type:"checkbox","data-field":t.field,checked:a,onChange:async l=>{if(l.target.checked){t.checked.push(...s);let r=[...new Set(t.checked)];t.checked.splice(0,t.checked.length,...r)}else{let r=new Set(t.checked),d=new Set(s.filter(n=>!r.has(n)));t.checked.splice(0,t.checked.length,...d)}await o.updateSelf()}})}return t.title??t.field},dataCellFormatter(t,e,i,o,s){let a=e[t.field];switch(t.type){case"index":return i+1;case"checkbox":return t.checked||(t.checked=[]),L("input",{type:"checkbox",checked:t.checked?.includes(a),onChange:async l=>{let r=t.checked.indexOf(a);r==-1?t.checked.push(a):t.checked.splice(r,1),await s.updateSelf()}});case"radio":return L("input",{type:"radio"});default:return a}},height:"auto"}),c(Le,"propTypes",{showHeader:Boolean});var us=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFx0aW55bWNlIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFLSTtFQUNBOztBQUxBO0VBRUk7O0FBTVI7RUFDSSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG5cclxuICAgIC5lZGl0b3Ige1xyXG4gICAgICAgICZbY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiXTpmb2N1cyxcclxuICAgICAgICAmW2NvbnRlbnRFZGl0YWJsZT1cInRydWVcIl06aG92ZXIge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgIzE5NzZEMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudG94LXN0YXR1c2Jhcl9fYnJhbmRpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */`;var{h:to,classNames:Wg,extractClass:Zg}=omii,Is=!0,Cs=new URL("./tinymce/",import.meta.url).href,hs="./tinymce.js",Tt,bi,fi,Dt,Ve=class extends h{constructor(){super(...arguments);C(this,Tt,void 0);C(this,bi,void 0);C(this,fi,!1);C(this,Dt,!1)}static get min(){return Is}static set min(e){Is=e}static get root(){return Cs}static set root(e){Cs=e}static get jsFile(){return hs}static set jsFile(e){hs=e}static async use(){return await import(new URL(this.jsFile,this.root).href)}get value(){return this.$props.value}set value(e){if(this.$props.value=e,this.editor&&g(this,Dt))try{this.editor.setContent(e)}catch{console.log("editor not init")}}get editor(){return g(this,Tt)}css(){return g(this,bi)}get validity(){let{required:e}=this.$props,i={valid:!0};return e&&value==""&&(i.valid=!1,i.valueMissing=!0),i}checkValidity(){I(this,fi,!0);let e=this.validity.valid;return e?this.classList.remove("is-invalid"):this.classList.add("is-invalid"),e}get editorId(){return`editor${this.elementId}`}async installed(){await this.constructor.use();let e=this.$(`#${this.editorId}`),{menu:i,menubar:o,toolbar:s,plugins:a,language:l,toolbarMode:r,baseUrl:d,inline:n,readonly:u,contentStyle:p,contentCss:m,fontFamilyFormats:A,blockFormats:y,fontSizeFormats:f,lineHeightFormats:x,indentUseMargin:J,indentation:G,styleFormats:B,styleFormatsMerge:F,colorCols:k,colorMap:pe,imagesUploadUrl:Qe,imagesUploadHandler:S,imagesUploadBasePath:V,imagesUploadCredentials:ue,imagesReuseFilename:jt,imagesFileTypes:et,imageList:Ye,imageBatch:io,imageAdvtab:xs,imageUploadtab:ys,imageDimensions:vs,imageTitle:Xs,imagePrependUrl:Gs,relativeUrls:Bs,automaticUploads:ws,filePickerTypes:Js,filePickerCallback:Fs,templates:Ss,importcssGroups:Hs,importcssAppend:Rs,width:Os,height:Ns,minWidth:ks,minHeight:Ws,maxWidth:Zs,maxHeight:Ls,resize:Vs,placeholder:Us}=this.$props;tinymce.init({target:e,promotion:!1,base_url:d??this.constructor.root,menu:i,menubar:o,toolbar:s,toolbar_mode:r,plugins:a,language:l,inline:n,readonly:u,extended_valid_elements:"oi-icon[name|color|size]",custom_elements:"oi-icon",content_css:m,content_style:p,font_family_formats:A,block_formats:y,font_size_formats:f,line_height_formats:x,indent_use_margin:J,indentation:G,style_formats:B,style_formats_merge:F,color_cols:k,color_map:pe,images_upload_url:Qe,images_upload_handler:S,images_upload_base_path:V,images_upload_credentials:ue,images_reuse_filename:jt,images_file_types:et,image_list:Ye,image_advtab:xs,image_uploadtab:ys,image_dimensions:vs,image_title:Xs,image_prepend_url:Gs,automatic_uploads:ws,file_picker_types:Js,file_picker_callback:Fs,importcss_groups:Hs,templates:Ss,importcss_append:Rs,width:Os,height:Ns,min_width:ks,min_height:Ws,max_width:Zs,max_height:Ls,relative_urls:Bs,resize:Vs,placeholder:Us,setup:tt=>{I(this,Tt,tt),this.fire("setup",{editor:tt}),tt.on("init",oo=>{I(this,Dt,!0),this.fire("ready")}),tt.on("blur",oo=>{console.log("editor blur")}),tt.on("change",oo=>{this.$props.value=tt.getContent(),this.fire("change",{value:this.value})})}})}render(){let{inline:e}=this.$props;return e?to("div",null,to("div",{class:"editor",id:this.editorId},this.value)):to("textarea",{class:"editor",id:this.editorId,value:this.value,placeholder:this.placeholder})}};Tt=new WeakMap,bi=new WeakMap,fi=new WeakMap,Dt=new WeakMap,c(Ve,"css",[()=>b("reboot","scrollbar"),us]),c(Ve,"propTypes",{value:String,placeholder:String,required:Boolean,inline:Boolean,readonly:Boolean}),c(Ve,"defaultProps",{value:"",relativeUrls:null,width:null,height:null,minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,resize:!0,placeholder:"...",readonly:!1,required:!1,language:"zh-Hans",directionality:null,plugins:"preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",toolbar:"undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage  quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print",toolbarSticky:!0,toolbarMode:"wrap",menu:null,menubar:!1,inline:!1,contentCss:null,contentStyle:null,blockFormats:"Div=div;Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre",fontFamilyFormats:"\u5B8B\u4F53=\u5B8B\u4F53;\u4EFF\u5B8B=\u4EFF\u5B8B;\u6977\u4F53=\u6977\u4F53;\u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;\u9ED1\u4F53=\u9ED1\u4F53;\u96B6\u4E66=\u96B6\u4E66;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",fontSizeFormats:null,lineHeightFormats:null,indentation:null,indentUseMargin:!1,styleFormatsMerge:!0,styleFormats:null,colorCols:5,colorMap:null,imagesUploadUrl:null,imagesUploadHandler:null,imagesUploadBasePath:null,imagesUploadCredentials:!1,imagesReuseFilename:!1,imagesFileTypes:null,imageList:null,imageAdvtab:!0,imageUploadtab:!1,imageDimensions:!0,imageTitle:!0,imagePrependUrl:null,imageBatch:!1,automaticUploads:!0,filePickerTypes:null,filePickerCallback:null,templates:null,importcssAppend:!0,importcssGroups:[{title:"Table styles",filter:/^(td|tr)\./},{title:"Block styles",filter:/^(div|p)\./},{title:"Other styles"}]});var ms=`
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiRDpcXGdpdGh1Ylxcb21paS11aVxcc3JjXFxlY2hhcnRzIiwic291cmNlcyI6WyJpbmRleC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDSTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59Il19 */`;var{h:el,classNames:zg,extractClass:jg}=omii,As=new URL("./echarts/",import.meta.url).href,bs="echarts.esm.min.js",fs=null,zt,Ue=class extends h{constructor(){super(...arguments);C(this,zt,void 0)}static get root(){return As}static set root(e){As=e}static get jsFile(){return bs}static set jsFile(e){bs=e}get echart(){return g(this,zt)}async installed(){let e=fs;e||(e=fs=await import(new URL(this.constructor.jsFile,this.constructor.root).href)),I(this,zt,e.init(this.$("main"))),this.draw()}draw(){this.echart.setOption(this.$props)}updated(){this.draw()}render(){return el("main",null)}};zt=new WeakMap,c(Ue,"css",ms),c(Ue,"propTypes",{}),c(Ue,"defaultProps",{title:null,tooltip:null,legend:[],xAxis:null,yAxis:null,series:[],width:null,height:null});var{define:v}=omii;v("oi-rate",Ce);v("oi-tab",Ie);v("oi-icon",D);v("oi-bi",$);v("oi-pager",P);v("oi-tree",Ae);v("oi-loading",se);v("oi-alert",be);v("oi-accordion",fe);v("oi-breadcrumb",xe);v("oi-modal",ye);v("oi-popover",ee);v("oi-uploader",re);v("oi-carousel",Ge);v("oi-badge",we);v("oi-toast",Je);v("oi-progress",ce);v("oi-tooltip",Me);v("oi-layout",He);v("oi-import",Re);v("oi-offcanvas",Ne);v("oi-pagination",me);v("oi-dropdown",ke);v("oi-coder",We);v("oi-select",Ze);v("oi-table",Le);v("oi-tinymce",Ve);v("oi-echarts",Ue);customElements.define("oi-form",ut,{extends:"form"});var tl=import.meta.url;omii.ui={utils:so,css:Ao,effect:w,icon:D,tab:Ie,rate:Ce,pager:P,tree:Ae,treeNode:Oi,loading:se,alert:be,accordion:fe,breadcrumb:xe,modal:ye,popover:ee,uploader:re,carousel:Ge,badge:we,toast:Je,progress:ce,tooltip:Me,layout:He,import:Re,offcanvas:Ne,pagination:me,form:ut,dropdown:ke,coder:We,select:Ze,table:Le,importURL:tl,sortable:it,tinymce:Ve,echarts:Ue};export{fe as accordion,be as alert,$ as bicon,xe as breadcrumb,Ge as carousel,We as coder,Ao as css,ke as dropdown,Ue as echarts,w as effect,ut as form,D as icon,Re as import,tl as importURL,He as layout,se as loading,ye as modal,Ne as offcanvas,P as pager,me as pagination,ee as popover,ce as progress,Ce as rate,Ze as select,it as sortable,Ie as tab,Le as table,Ve as tinymce,Je as toast,Me as tooltip,Ae as tree,Oi as treeNode,re as uploader,so as utils};
//# sourceMappingURL=omii-ui.js.map
