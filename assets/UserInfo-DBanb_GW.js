import{d,f as r,i as f,r as a,o as i,c as g,a as o,e as v,w as m,u as l,m as b,j as h,_ as C}from"./index-CSWKMiup.js";const k={class:"demo-progress"},x=d({__name:"UserInfo",setup(I){const e=r(10),n=r(0),t=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],u=()=>{e.value+=10,e.value>100&&(e.value=100)},p=()=>{e.value-=10,e.value<0&&(e.value=0)};return f(()=>{setInterval(()=>{n.value=n.value%100+10},500)}),(B,w)=>{const c=a("el-progress"),s=a("el-button"),_=a("el-button-group");return i(),g("div",k,[o(c,{type:"dashboard",percentage:e.value,color:t},null,8,["percentage"]),o(c,{type:"dashboard",percentage:n.value,color:t},null,8,["percentage"]),v("div",null,[o(_,null,{default:m(()=>[o(s,{icon:l(b),onClick:p},null,8,["icon"]),o(s,{icon:l(h),onClick:u},null,8,["icon"])]),_:1})])])}}}),N=C(x,[["__scopeId","data-v-66435327"]]);export{N as default};
