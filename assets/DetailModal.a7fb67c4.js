import{_ as t}from"./index.3a114297.js";import{D as s}from"./index.c25cfa82.js";import{u as e}from"./useDescription.6f4838c6.js";import{d as i,u as o,h as r,o as a,i as n,w as d,j as m,a7 as c}from"./index.235c9427.js";import{getDescSchema as p}from"./data.d56061e7.js";import"./useTimeout.d59d45c1.js";import"./useAttrs.e0fa6102.js";import"./useWindowSizeFn.fa0aaa79.js";import"./index.18edf0bd.js";import"./index.a1ffa5d9.js";import"./domUtils.38a8ef8c.js";import"./_stringToArray.d39e0b68.js";import"./RightOutlined.e98a0138.js";/* empty css              */import"./useScrollTo.c738d8ed.js";import"./animation.a0fd69a1.js";import"./FullscreenOutlined.3bcf401b.js";import"./isEqual.f199c34e.js";import"./index.b9c1702d.js";import"./responsiveObserve.c545f1cc.js";import"./get.c99c5613.js";import"./vendor.3b1829c7.js";import"./index.8f136ef9.js";import"./colors.b92dcb6b.js";var f=i({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:s},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[s]=e({column:2,schema:p()});return{register:s,useI18n:o,t:t}}});f.render=function(t,s,e,i,o,p){const f=r("Description"),j=r("BasicModal");return a(),n(j,c({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:d((()=>[m(f,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;
