import{d as t,b1 as o,u as e,aQ as r,K as n,aB as s,du as a,h as i,o as u,i as d,w as c,j as l}from"./index.235c9427.js";/* empty css              */import{B as m}from"./index.755e68c5.js";import{B as p}from"./BugOutlined.3742283c.js";import"./vendor.3b1829c7.js";import"./colors.b92dcb6b.js";import"./isNumeric.2bec345d.js";var f=t({name:"ErrorAction",components:{BugOutlined:p,Tooltip:o,Badge:m},setup(){const{t:t}=e(),{push:o}=r();return{t:t,getCount:n((()=>a.getErrorListCountState)),handleToErrorList:function(){o(s.ERROR_LOG_PAGE).then((()=>{a.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,n,s){const a=i("BugOutlined"),m=i("Badge"),p=i("Tooltip");return u(),d(p,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:c((()=>[l(m,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:c((()=>[l(a)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;
