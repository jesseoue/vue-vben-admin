import{d as e,b1 as l,u as t,K as s,e as n,h as r,o,i as u,w as i,j as a}from"./index.7f9d11df.js";/* empty css              */import{u as c}from"./useFullScreen.77e86699.js";import{F as d,a as F}from"./FullscreenOutlined.7e53edc0.js";import"./vendor.3b1829c7.js";var m=e({name:"FullScreen",components:{FullscreenExitOutlined:d,FullscreenOutlined:F,Tooltip:l},setup(){const{t:e}=t(),{toggleFullscreen:l,isFullscreenRef:r}=c();return{getTitle:s((()=>n(r)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull"))),isFullscreen:r,toggleFullscreen:l}}});m.render=function(e,l,t,s,n,c){const d=r("FullscreenOutlined"),F=r("FullscreenExitOutlined"),m=r("Tooltip");return o(),u(m,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:i((()=>[a("span",{onClick:l[1]||(l[1]=(...l)=>e.toggleFullscreen&&e.toggleFullscreen(...l))},[e.isFullscreen?(o(),u(F,{key:1})):(o(),u(d,{key:0}))])])),_:1},8,["title","mouseEnterDelay"])};export default m;
