import{d as t,b1 as s,cp as i,cq as e,h as o,o as a,i as l,j as d,aL as m,aM as n,l as r,m as p,bw as c}from"./index.235c9427.js";import{L as f}from"./index.38f60bbd.js";import"./index.f8ea2301.js";import"./index.c0911123.js";import"./index.e3922afb.js";import{T as u}from"./index.8f136ef9.js";/* empty css              */import{a as j}from"./index.18edf0bd.js";import{t as _}from"./data.aa527d47.js";import{E as b}from"./EllipsisOutlined.337018b0.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.d0a5f83f.js";import"./CheckOutlined.f658229f.js";import"./DownOutlined.eef7ce8b.js";import"./LeftOutlined.8c6268d3.js";import"./RightOutlined.e98a0138.js";import"./DoubleLeftOutlined.c4ab8fa3.js";import"./DoubleRightOutlined.4c9aac2a.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./colors.b92dcb6b.js";import"./index.a1ffa5d9.js";import"./domUtils.38a8ef8c.js";import"./_stringToArray.d39e0b68.js";import"./useTimeout.d59d45c1.js";import"./useScrollTo.c738d8ed.js";import"./animation.a0fd69a1.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:f,ListItem:f.Item,ListItemMeta:f.Item.Meta,Tag:u,Tooltip:s,EllipsisOutlined:b},setup:()=>({todoList:_})});const x=c("data-v-579679d3");i("data-v-579679d3");const O=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),v={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},h={class:"todo-list__item-desc"},I=d("br",null,null,-1),g=p(" 待审批 "),C={class:"todo-list__all"},E=p(" 查看更多 ");e();const M=x(((t,s,i,e,c,f)=>{const u=o("ListItemMeta"),j=o("Tag"),_=o("a-button"),b=o("ListItem"),L=o("List"),M=o("EllipsisOutlined"),k=o("Tooltip"),y=o("CollapseContainer");return a(),l(y,{class:"todo-list",title:"待办事项",canExpan:!1},{title:x((()=>[O])),default:x((()=>[d(L,null,{default:x((()=>[(a(!0),l(m,null,n(t.todoList,(t=>(a(),l(b,{key:t.id,class:"todo-list__item"},{default:x((()=>[d(u,null,{title:x((()=>[d("div",null,[d("span",v,r(t.title),1),d("span",T,r(t.memo),1)])])),description:x((()=>[d("div",h,[p(" 提交人："+r(t.sbmter)+" ",1),I,p(" 提交时间："+r(t.sbmtTime),1)])])),_:2},1024),d(_,{type:"link"},{default:x((()=>[d(j,{color:"blue"},{default:x((()=>[g])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",C,[d(k,{placement:"topRight"},{title:x((()=>[E])),default:x((()=>[d(M)])),_:1})])])),_:1})}));L.render=M,L.__scopeId="data-v-579679d3";export default L;
