import{M as e}from"./index.8c101744.js";import{_ as t}from"./index.e6c14409.js";import{d as n,r as o,e as a,h as r,o as i,i as s,w as m,j as l,m as p}from"./index.235c9427.js";import"./index.894bad25.js";import"./index.9f4b5e6b.js";import"./RightOutlined.e98a0138.js";import"./EllipsisOutlined.337018b0.js";import"./types.ff0884b9.js";import"./isEqual.f199c34e.js";import"./toInteger.a0b6e6f7.js";import"./DownOutlined.eef7ce8b.js";/* empty css              */import"./index.7c34e4aa.js";import"./usePageContext.0105a284.js";import"./transButton.a31ee614.js";import"./ArrowLeftOutlined.016153c4.js";import"./vendor.3b1829c7.js";var u=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=o(null),t=o("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=a(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const d=p(" 黑暗主题 ");u.render=function(e,t,n,o,a,p){const u=r("a-button"),c=r("MarkDown"),f=r("PageWrapper");return i(),s(f,{title:"MarkDown组件示例"},{default:m((()=>[l(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:m((()=>[d])),_:1},8,["onClick"]),l(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default u;
