import{d as e}from"./ScrollContainer.2c2d7291.js";import{r as t,e as r,a1 as o,a$ as a,d as n,h as s,o as i,i as l,w as d,j as m,m as c}from"./index.7f9d11df.js";import{_ as p}from"./index.ef974eb9.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./RightOutlined.738ce43d.js";/* empty css              */import"./useTimeout.946338f4.js";import"./useScrollTo.59748d94.js";import"./vendor.3b1829c7.js";import"./index.fd14664a.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./isEqual.cf616f95.js";import"./toInteger.61c42cd2.js";import"./DownOutlined.8186e43a.js";import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const o=r(e);o&&o.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const o=document.createElement("canvas");o.width=300,o.height=240;const a=o.getContext("2d");a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,o.width/20,o.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+o.toDataURL("image/png")+") left top repeat";const l=r(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),a()&&o((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=c(" Create "),g=c(" Clear "),x=c(" Reset ");f.render=function(e,t,r,o,a,n){const c=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[m(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[g])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[x])),_:1})])),_:1})])),_:1})};export default f;
