var e=Object.assign;import{d as t,r as i,a as o,aE as r,dp as s,dq as n,h as d,o as p,i as a,bx as m,j as c,a3 as j,b8 as l,k as f}from"./index.7f9d11df.js";import{S as u}from"./index.69bb9da6.js";import x from"./Step1.ad78469a.js";import b from"./Step2.3cac8e75.js";import S from"./Step3.f05af0bb.js";import{_ as v}from"./index.ef974eb9.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.1f0166be.js";import"./index.25d875eb.js";import"./SearchOutlined.eb5ee535.js";import"./DownOutlined.8186e43a.js";import"./index.5d173e58.js";import"./EyeOutlined.00406e72.js";import"./index.18cb88c8.js";import"./BasicForm.1796ed98.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.eed3e6c4.js";import"./isEqual.cf616f95.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.be1c27c7.js";import"./index.1b83d9eb.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./RightOutlined.738ce43d.js";import"./RedoOutlined.202801c7.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./Tree.f65cc9de.js";import"./util.62a283cc.js";/* empty css              */import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./DeleteOutlined.512a40ae.js";import"./index.87a8ba38.js";import"./useModal.221a6e76.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./Dropdown.ed1fed22.js";import"./index.84854765.js";import"./LeftOutlined.d674a5c8.js";import"./download.cd37389c.js";import"./useForm.069cadb3.js";import"./data.2505cb7f.js";import"./index.12f36f42.js";import"./index.f1fdfbec.js";import"./index.fd14664a.js";import"./index.5160dc0f.js";import"./usePageContext.310cba05.js";import"./transButton.b06e8cfe.js";import"./ArrowLeftOutlined.e9a5e86b.js";var O=t({components:{Step1:x,Step2:b,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=o({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},r(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,o,r,s)=>{const n=d("a-step"),m=d("a-steps"),u=d("Step1"),x=d("Step2"),b=d("Step3"),S=d("PageWrapper");return p(),a(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[c("div",g,[c(m,{current:e.current},{default:h((()=>[c(n,{title:"填写转账信息"}),c(n,{title:"确认转账信息"}),c(n,{title:"完成"})])),_:1},8,["current"])]),c("div",N,[j(c(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[l,0===e.current]]),e.initSetp2?j((p(),a(x,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[l,1===e.current]]):f("",!0),e.initSetp3?j((p(),a(b,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[l,2===e.current]]):f("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
