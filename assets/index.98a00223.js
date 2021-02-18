import{aV as e,aW as o,d as t,r as l,L as a,e as r,dp as s,dq as d,h as i,o as n,i as c,j as m,bx as u,m as p}from"./index.7f9d11df.js";import{d as f}from"./ScrollContainer.2c2d7291.js";import{_ as g}from"./index.ef974eb9.js";import"./vendor.3b1829c7.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./RightOutlined.738ce43d.js";/* empty css              */import"./useTimeout.946338f4.js";import"./useScrollTo.59748d94.js";import"./index.fd14664a.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./isEqual.cf616f95.js";import"./toInteger.61c42cd2.js";import"./DownOutlined.8186e43a.js";import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";const b=e((()=>o((()=>import("./index.eb632f9a.js")),["/assets/index.eb632f9a.js","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.7f9d11df.js","/assets/index.9ee69cf2.css","/assets/download.cd37389c.js"])));var v=t({components:{CollapseContainer:f,QrCode:b,PageWrapper:g},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-f8968a82");s("data-v-f8968a82");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=m("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1);d();const _=j(((e,o,t,l,a,r)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),c(p,{title:"二维码组件使用示例"},{default:j((()=>[m("div",x,[m(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),m(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-f8968a82";export default v;
