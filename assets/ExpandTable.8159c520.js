import{_ as e}from"./index.485cc0b1.js";import{getBasicColumns as i}from"./tableData.252346e9.js";import{d as t}from"./table.1ac48d66.js";import{d as s,h as o,o as r,i as d,j as p,w as m,l as a}from"./index.7f9d11df.js";import{u as n}from"./useTable.18b63247.js";import"./index.25d875eb.js";import"./SearchOutlined.eb5ee535.js";import"./CheckOutlined.1f0166be.js";import"./DownOutlined.8186e43a.js";import"./BasicForm.1796ed98.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eed3e6c4.js";import"./isEqual.cf616f95.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.be1c27c7.js";import"./index.5d173e58.js";import"./EyeOutlined.00406e72.js";import"./index.1b83d9eb.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./RightOutlined.738ce43d.js";import"./RedoOutlined.202801c7.js";import"./index.e74efc31.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./Tree.f65cc9de.js";import"./util.62a283cc.js";/* empty css              */import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./DeleteOutlined.512a40ae.js";import"./index.87a8ba38.js";import"./useModal.221a6e76.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./index.18cb88c8.js";import"./Dropdown.ed1fed22.js";import"./index.84854765.js";import"./LeftOutlined.d674a5c8.js";import"./download.cd37389c.js";import"./index.c36a065d.js";import"./DoubleLeftOutlined.1f9fac32.js";import"./DoubleRightOutlined.0e9a17f4.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b06e8cfe.js";import"./CaretDownFilled.142b7f4e.js";import"./useForm.069cadb3.js";import"./clickOutside.e14cef1b.js";import"./useSortable.345935aa.js";import"./useExpose.f1d5eaba.js";var c=s({components:{BasicTable:e},setup(){const[e]=n({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:i(),rowKey:"id",canResize:!1});return{registerTable:e}}});const j={class:"p-4"};c.render=function(e,i,t,s,n,c){const l=o("BasicTable");return r(),d("div",j,[p(l,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[p("span",null,"No: "+a(e.no),1)])),_:1},8,["onRegister"])])};export default c;
