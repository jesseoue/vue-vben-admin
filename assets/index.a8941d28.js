import{_ as e}from"./index.ef974eb9.js";import{d as t,dp as o,dq as i,h as n,bB as r,o as s,i as a,a3 as d,j as l,bx as p}from"./index.7f9d11df.js";import"./index.fd14664a.js";import"./index.e74efc31.js";import"./RightOutlined.738ce43d.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./isEqual.cf616f95.js";import"./toInteger.61c42cd2.js";import"./DownOutlined.8186e43a.js";/* empty css              */import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";import"./vendor.3b1829c7.js";const c={event:"mousedown",transition:400},u={beforeMount:(e,t)=>{if(!1===t.value)return;const o=e.getAttribute("ripple-background");var i,n;i=Object.keys(t.modifiers),n=c,i.forEach((e=>{isNaN(Number(e))?n.event=e:n.transition=e}));const r=o||u.background,s=u.zIndex;e.addEventListener(c.event,(t=>{!function({event:e,el:t,zIndex:o,background:i}){var n,r;const s=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=e.clientX||e.touches[0].clientX,d=e.clientY||e.touches[0].clientY,l=t.getBoundingClientRect(),{left:p,top:u}=l,{offsetWidth:m,offsetHeight:g}=t,{transition:v}=c,b=a-p,f=d-u,h=Math.max(b,m-b),x=Math.max(f,g-f),j=window.getComputedStyle(t),R=Math.sqrt(h*h+x*x),y=s>0?s:0,L=document.createElement("div"),E=document.createElement("div");L.className="ripple",Object.assign(null!=(n=L.style)?n:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${v}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:null!=o?o:"9999",backgroundColor:null!=i?i:"rgba(0, 0, 0, 0.12)"}),E.className="ripple-container",Object.assign(null!=(r=E.style)?r:{},{position:"absolute",left:0-y+"px",top:0-y+"px",height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const k=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==k&&(t.style.position="relative");E.appendChild(L),t.appendChild(E),Object.assign(L.style,{marginTop:`${f}px`,marginLeft:`${b}px`});const{borderTopLeftRadius:w,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:O}=j;function B(){setTimeout((()=>{L.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((()=>{var e;null==(e=null==E?void 0:E.parentNode)||e.removeChild(E)}),850),t.removeEventListener("mouseup",B,!1),t.removeEventListener("mouseleave",B,!1),t.removeEventListener("dragstart",B,!1),setTimeout((()=>{let e=!0;for(let o=0;o<t.childNodes.length;o++)"ripple-container"===t.childNodes[o].className&&(e=!1);e&&(t.style.position="static"!==k?k:"")}),c.transition+260)}Object.assign(E.style,{width:`${m}px`,height:`${g}px`,direction:"ltr",borderTopLeftRadius:w,borderTopRightRadius:C,borderBottomLeftRadius:T,borderBottomRightRadius:O}),setTimeout((()=>{var e;const t=2*R+"px";Object.assign(null!=(e=L.style)?e:{},{width:t,height:t,marginLeft:b-R+"px",marginTop:f-R+"px"})}),0),"mousedown"===e.type?(t.addEventListener("mouseup",B,!1),t.addEventListener("mouseleave",B,!1),t.addEventListener("dragstart",B,!1)):B();t.setBackground=e=>{e&&(L.style.backgroundColor=e)}}({event:t,el:e,background:r,zIndex:s})}))},updated(e,t){var o,i;if(!t.value)return void(null==(o=null==e?void 0:e.clearRipple)||o.call(e));const n=e.getAttribute("ripple-background");null==(i=null==e?void 0:e.setBackground)||i.call(e,n)}};var m=t({components:{PageWrapper:e},directives:{Ripple:u}});const g=p("data-v-e9493036");o("data-v-e9493036");const v={class:"demo-box"};i();const b=g(((e,t,o,i,p,c)=>{const u=n("PageWrapper"),m=r("ripple");return s(),a(u,{title:"Ripple示例"},{default:g((()=>[d(l("div",v," content ",512),[[m]])])),_:1})}));m.render=b,m.__scopeId="data-v-e9493036";export default m;
