import{d as e,dz as t,dA as s,dp as o,dq as a,h as n,o as r,i,bx as d,j as c,m}from"./index.7f9d11df.js";import{A as p}from"./index.87a8ba38.js";import u from"./CurrentPermissionMode.e2f98292.js";import{_ as f}from"./index.ef974eb9.js";import"./vendor.3b1829c7.js";import"./index.18cb88c8.js";import"./index.fd14664a.js";import"./index.e74efc31.js";import"./RightOutlined.738ce43d.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./isEqual.cf616f95.js";import"./toInteger.61c42cd2.js";import"./DownOutlined.8186e43a.js";/* empty css              */import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";var l=e({components:{Alert:p,CurrentPermissionMode:u,PageWrapper:f},setup(){const{changeMenu:e}=s();return{RoleEnum:t,changeMenu:e}}});const j=d("data-v-bcdaa5b4");o("data-v-bcdaa5b4");const b={class:"mt-4"},g=m(" 权限切换(请先切换权限模式为后台权限模式): "),x=m(" 获取用户id为1的菜单 "),h=m(" 获取用户id为2的菜单 ");a();const C=j(((e,t,s,o,a,d)=>{const m=n("CurrentPermissionMode"),p=n("Alert"),u=n("a-button"),f=n("a-button-group"),l=n("PageWrapper");return r(),i(l,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:j((()=>[c(m),c(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),c("div",b,[g,c(f,null,{default:j((()=>[c(u,{onClick:t[1]||(t[1]=t=>e.changeMenu("1"))},{default:j((()=>[x])),_:1}),c(u,{onClick:t[2]||(t[2]=t=>e.changeMenu("2"))},{default:j((()=>[h])),_:1})])),_:1})])])),_:1})}));l.render=C,l.__scopeId="data-v-bcdaa5b4";export default l;
