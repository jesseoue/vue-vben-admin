import{f as e}from"./BasicForm.1796ed98.js";import{d as i}from"./ScrollContainer.2c2d7291.js";import{d as t,bX as r,g as s,h as o,o as d,i as n,w as a,j as m}from"./index.7f9d11df.js";import{M as p}from"./index.bc0f57fd.js";import{_ as c}from"./index.ef974eb9.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eed3e6c4.js";import"./isEqual.cf616f95.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.be1c27c7.js";import"./index.5d173e58.js";import"./SearchOutlined.eb5ee535.js";import"./EyeOutlined.00406e72.js";import"./index.25d875eb.js";import"./CheckOutlined.1f0166be.js";import"./DownOutlined.8186e43a.js";import"./index.1b83d9eb.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./RightOutlined.738ce43d.js";import"./RedoOutlined.202801c7.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./Tree.f65cc9de.js";import"./util.62a283cc.js";/* empty css              */import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./DeleteOutlined.512a40ae.js";import"./index.87a8ba38.js";import"./useModal.221a6e76.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./FullscreenOutlined.7e53edc0.js";import"./index.18cb88c8.js";import"./Dropdown.ed1fed22.js";import"./index.84854765.js";import"./LeftOutlined.d674a5c8.js";import"./download.cd37389c.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./index.576d13da.js";import"./useScrollTo.59748d94.js";import"./index.fd14664a.js";import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>r(p,{value:e[i],onChange:t=>{e[i]=t}})}];var j=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:c},setup(){const{createMessage:e}=s();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});j.render=function(e,i,t,r,s,p){const c=o("BasicForm"),l=o("CollapseContainer"),j=o("PageWrapper");return d(),n(j,{title:"MarkDown组件嵌入Form示例"},{default:a((()=>[m(l,{title:"MarkDown表单"},{default:a((()=>[m(c,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default j;
