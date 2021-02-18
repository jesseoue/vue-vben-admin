import{_ as e}from"./index.485cc0b1.js";import{d as t,h as o,o as i,i as n,j as r,w as s,m as d}from"./index.7f9d11df.js";import{_ as a}from"./BasicForm.1796ed98.js";import{u as c}from"./useTable.18b63247.js";import"./index.25d875eb.js";import"./SearchOutlined.eb5ee535.js";import"./CheckOutlined.1f0166be.js";import"./DownOutlined.8186e43a.js";import"./index.ff61af1b.js";import"./index.43504c48.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eed3e6c4.js";import"./isEqual.cf616f95.js";import"./get.c0473d28.js";import"./_baseProperty.74f89655.js";import"./toInteger.61c42cd2.js";import"./index.e74efc31.js";import"./RightOutlined.738ce43d.js";import"./EllipsisOutlined.a98bfac0.js";import"./types.6c8ee0af.js";import"./index.c36a065d.js";import"./LeftOutlined.d674a5c8.js";import"./DoubleLeftOutlined.1f9fac32.js";import"./DoubleRightOutlined.0e9a17f4.js";import"./zh_CN.8094f4d6.js";import"./uuid.4c08c426.js";import"./index.0ec94771.js";import"./util.62a283cc.js";import"./DeleteOutlined.512a40ae.js";import"./EyeOutlined.00406e72.js";import"./Dropdown.ed1fed22.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.b06e8cfe.js";import"./CaretDownFilled.142b7f4e.js";import"./useForm.069cadb3.js";import"./clickOutside.e14cef1b.js";import"./domUtils.10b268bc.js";import"./_stringToArray.7199892a.js";import"./index.5d173e58.js";import"./index.d6ccd8a9.js";import"./UpOutlined.703fea9d.js";import"./index.06e0d19d.js";import"./useSortable.345935aa.js";import"./useTimeout.946338f4.js";import"./useWindowSizeFn.dde781a9.js";import"./useModal.221a6e76.js";import"./ScrollContainer.2c2d7291.js";import"./index.576d13da.js";import"./useScrollTo.59748d94.js";import"./FullscreenOutlined.7e53edc0.js";import"./index.18cb88c8.js";import"./useExpose.f1d5eaba.js";import"./index.be1c27c7.js";import"./index.1b83d9eb.js";import"./RedoOutlined.202801c7.js";import"./Tree.f65cc9de.js";import"./index.87a8ba38.js";import"./index.84854765.js";import"./download.cd37389c.js";const l=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],m=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=c({columns:l,showIndexColumn:!1,dataSource:m,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function o(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function i(e){var o;if(null==(o=e.onEdit)||o.call(e,!1),e.isNew){const o=t(),i=o.findIndex((t=>t.key===e.key));o.splice(i,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:o,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:i.bind(null,e,t)}}]:[{label:"编辑",onClick:o.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=t(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(o)},getDataSource:t}}});const j=d(" 新增成员 ");p.render=function(e,t,d,a,c,l){const m=o("TableAction"),p=o("BasicTable"),u=o("a-button");return i(),n("div",null,[r(p,{onRegister:e.registerTable},{action:s((({record:t,column:o})=>[r(m,{actions:e.createActions(t,o)},null,8,["actions"])])),_:1},8,["onRegister"]),r(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[j])),_:1},8,["onClick"])])};export default p;
