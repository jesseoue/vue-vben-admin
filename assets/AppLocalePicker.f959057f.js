import{_ as e}from"./index.02899c62.js";import{d as a,aJ as s,aF as t,r as o,aK as n,K as l,aZ as r,bi as i,ck as c,e as p,h as d,o as f,i as u,bw as v,j as m,l as x,k as g}from"./index.235c9427.js";import"./index.9f4b5e6b.js";import"./RightOutlined.e98a0138.js";import"./EllipsisOutlined.337018b0.js";import"./types.ff0884b9.js";import"./isEqual.f199c34e.js";import"./toInteger.a0b6e6f7.js";/* empty css              */import"./vendor.3b1829c7.js";var j=a({name:"AppLocalPicker",components:{Dropdown:e,Icon:s},props:{showText:t.bool.def(!0),reload:t.bool},setup(e){const a=o([]),{prefixCls:s}=n("app-locale-picker"),{localeList:t}=i(),{changeLocale:d,getLang:f}=c(),u=l((()=>{var e;const s=a.value[0];return s?null==(e=t.find((e=>e.event===s)))?void 0:e.text:""}));return r((()=>{a.value=[p(f)]})),{localeList:t,handleMenuEvent:function(s){var t;t=s.event,d(t),a.value=[t],e.reload&&location.reload()},selectedKeys:a,getLangText:u,prefixCls:s}}});const b=v("data-v-25af17ef"),L=b(((e,a,s,t,o,n)=>{const l=d("Icon"),r=d("Dropdown");return f(),u(r,{trigger:["click"],dropMenuList:e.localeList,selectedKeys:e.selectedKeys,onMenuEvent:e.handleMenuEvent,overlayClassName:`${e.prefixCls}-overlay`},{default:b((()=>[m("span",{class:e.prefixCls},[m(l,{icon:"cil:language"}),e.showText?(f(),u("span",{key:0,class:`${e.prefixCls}__text`},x(e.getLangText),3)):g("",!0)],2)])),_:1},8,["dropMenuList","selectedKeys","onMenuEvent","overlayClassName"])}));j.render=L,j.__scopeId="data-v-25af17ef";export default j;
