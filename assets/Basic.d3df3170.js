import{_ as e}from"./index.485cc0b1.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.252346e9.js";import{d as o,r,h as s,o as d,i as a,j as n,w as p,m as l,l as c}from"./index.7f9d11df.js";import"./index.25d875eb.js";import"./SearchOutlined.eb5ee535.js";import"./CheckOutlined.1f0166be.js";import"./DownOutlined.8186e43a.js";import"./BasicForm.1796ed98.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eed3e6c4.js";import"./isEqual.cf616f95.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.be1c27c7.js";import"./index.5d173e58.js";import"./EyeOutlined.00406e72.js";import"./index.1b83d9eb.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./RightOutlined.738ce43d.js";import"./RedoOutlined.202801c7.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./Tree.f65cc9de.js";import"./util.62a283cc.js";/* empty css              */import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./DeleteOutlined.512a40ae.js";import"./index.87a8ba38.js";import"./useModal.221a6e76.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./index.18cb88c8.js";import"./Dropdown.ed1fed22.js";import"./index.84854765.js";import"./LeftOutlined.d674a5c8.js";import"./download.cd37389c.js";import"./index.c36a065d.js";import"./DoubleLeftOutlined.1f9fac32.js";import"./DoubleRightOutlined.0e9a17f4.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b06e8cfe.js";import"./CaretDownFilled.142b7f4e.js";import"./useForm.069cadb3.js";import"./clickOutside.e14cef1b.js";import"./useSortable.345935aa.js";import"./useExpose.f1d5eaba.js";var m=o({components:{BasicTable:e},setup(){const e=r(!1),o=r(!1),s=r(!0),d=r(!0),a=r(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:s,border:d,toggleStriped:function(){s.value=!s.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,a.value={pageSize:20}}),3e3)},toggleBorder:function(){d.value=!d.value},pagination:a}}});const j={class:"p-4"},u=l(" 开启loading ");m.render=function(e,i,t,o,r,m){const f=s("a-button"),b=s("BasicTable");return d(),a("div",j,[n(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:p((()=>[n(f,{type:"primary",onClick:e.toggleCanResize},{default:p((()=>[l(c(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleBorder},{default:p((()=>[l(c(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleLoading},{default:p((()=>[u])),_:1},8,["onClick"]),n(f,{type:"primary",onClick:e.toggleStriped},{default:p((()=>[l(c(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default m;
