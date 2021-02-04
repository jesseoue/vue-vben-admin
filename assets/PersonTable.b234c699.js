import{_ as e}from"./index.98d30001.js";import{d as t,h as i,o,i as n,j as s,w as d,m as r}from"./index.235c9427.js";import{g as a}from"./index.de84615c.js";import{u as l}from"./useTable.cb24d985.js";import"./index.f8ea2301.js";import"./SearchOutlined.d0a5f83f.js";import"./CheckOutlined.f658229f.js";import"./DownOutlined.eef7ce8b.js";import"./index.c4000a0b.js";import"./index.e3922afb.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.8ae22173.js";import"./isEqual.f199c34e.js";import"./get.c99c5613.js";import"./_baseProperty.74f89655.js";import"./toInteger.a0b6e6f7.js";import"./index.9f4b5e6b.js";import"./RightOutlined.e98a0138.js";import"./EllipsisOutlined.337018b0.js";import"./types.ff0884b9.js";import"./index.c0911123.js";import"./LeftOutlined.8c6268d3.js";import"./DoubleLeftOutlined.c4ab8fa3.js";import"./DoubleRightOutlined.4c9aac2a.js";import"./zh_CN.8094f4d6.js";import"./uuid.d0ff399d.js";import"./index.2443f1f5.js";import"./util.f25cfbfa.js";import"./DeleteOutlined.008da605.js";import"./EyeOutlined.9382e0fa.js";import"./index.02899c62.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.a31ee614.js";import"./CaretDownFilled.d49f2ee1.js";import"./clickOutside.4d35352c.js";import"./domUtils.38a8ef8c.js";import"./_stringToArray.d39e0b68.js";import"./index.e24dbd35.js";import"./index.50d65c07.js";import"./UpOutlined.f0a17120.js";import"./index.62ac9a6e.js";import"./useSortable.9e708068.js";import"./useTimeout.d59d45c1.js";import"./useWindowSizeFn.fa0aaa79.js";import"./index.3a114297.js";import"./useAttrs.e0fa6102.js";import"./index.18edf0bd.js";import"./index.a1ffa5d9.js";import"./useScrollTo.c738d8ed.js";import"./animation.a0fd69a1.js";import"./FullscreenOutlined.3bcf401b.js";import"./index.6f92763f.js";import"./SettingOutlined.471659b0.js";import"./useExpose.0d75246d.js";import"./useForm.8523f767.js";import"./index.81cddce3.js";import"./index.8f136ef9.js";import"./colors.b92dcb6b.js";import"./RedoOutlined.2398c929.js";import"./Tree.e88fd625.js";import"./index.021a028e.js";import"./index.2e55a12d.js";import"./download.fd5d2d06.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],p=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var c=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=l({columns:m,showIndexColumn:!1,dataSource:p,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const j=r(" 新增成员 ");c.render=function(e,t,r,a,l,m){const p=i("TableAction"),c=i("BasicTable"),f=i("a-button");return o(),n("div",null,[s(c,{onRegister:e.registerTable},{action:d((({record:t,column:i})=>[s(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),s(f,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:d((()=>[j])),_:1},8,["onClick"])])};export default c;
