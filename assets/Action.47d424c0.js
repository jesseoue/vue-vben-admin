import{_ as s}from"./index.18edf0bd.js";import{_ as o}from"./index.e6c14409.js";import{d as t,r,e,cp as l,cq as a,h as i,o as c,i as n,j as d,aL as m,aM as p,l as f,bw as u,m as j}from"./index.235c9427.js";import"./index.a1ffa5d9.js";import"./domUtils.38a8ef8c.js";import"./_stringToArray.d39e0b68.js";import"./RightOutlined.e98a0138.js";/* empty css              */import"./useTimeout.d59d45c1.js";import"./useScrollTo.c738d8ed.js";import"./animation.a0fd69a1.js";import"./index.894bad25.js";import"./index.9f4b5e6b.js";import"./EllipsisOutlined.337018b0.js";import"./types.ff0884b9.js";import"./isEqual.f199c34e.js";import"./toInteger.a0b6e6f7.js";import"./DownOutlined.eef7ce8b.js";import"./index.7c34e4aa.js";import"./usePageContext.0105a284.js";import"./transButton.a31ee614.js";import"./ArrowLeftOutlined.016153c4.js";import"./vendor.3b1829c7.js";var b=t({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=r(null),o=()=>{const o=e(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=u("data-v-331a2139");l("data-v-331a2139");const _={class:"my-4"},T=j(" 滚动到100px位置 "),v=j(" 滚动到800px位置 "),C=j(" 滚动到顶部 "),g=j(" 滚动到底部 "),w={class:"scroll-wrap"},k={class:"p-3"};a();const y=x(((s,o,t,r,e,l)=>{const a=i("a-button"),u=i("ScrollContainer"),j=i("PageWrapper");return c(),n(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(a,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[T])),_:1}),d(a,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[v])),_:1}),d(a,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(a,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[g])),_:1})]),d("div",w,[d(u,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",k,[(c(),n(m,null,p(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},f(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=y,b.__scopeId="data-v-331a2139";export default b;
