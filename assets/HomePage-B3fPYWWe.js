import{r,j as s,L as p}from"./index-B07NJVwv.js";import{c as d}from"./page.module-D_bOILRI.js";import{c as x}from"./cities-CVUX3U3U.js";import{P as j}from"./index-BnJgbcFO.js";import"./iconBase-D7gGcUnF.js";const _="_wrapInput_hoic9_2",b="_options_hoic9_9",f="_select_hoic9_23",g="_icon_hoic9_59",v="_visible_hoic9_86",N="_hidden_hoic9_90",e={wrapInput:_,options:b,select:f,icon:g,visible:v,hidden:N};function w({setSelectedCity:i}){const[n,c]=r.useState(!1),[o,m]=r.useState({}),u=t=>{m(t),i(t),c(!1)};return s.jsxs("div",{className:e.select,children:[s.jsxs("label",{className:e.wrapInput,children:[s.jsx("input",{type:"text",defaultValue:o.city,readOnly:o.city,placeholder:"Оберіть найближче місто..."}),s.jsx("button",{type:"button",onClick:()=>c(!n),children:s.jsx(j,{className:e.icon})})]}),s.jsx("div",{className:n?e.visible:e.hidden,children:s.jsx("ul",{className:e.options,children:x.map((t,h)=>s.jsx("li",{onClick:()=>u(t),children:t.city},h))})})]})}const y="/goblin-client/goblin.jpg",C="_wellcome_mob9b_3",M="_box_mob9b_25",B="_info_mob9b_37",l={wellcome:C,box:M,info:B};function S(){return s.jsxs("div",{className:l.wellcome,children:[s.jsx("h1",{children:"Ласкаво просимо"}),s.jsxs("div",{className:l.box,children:[s.jsx("img",{src:y,alt:"Goblin"}),s.jsxs("div",{className:l.info,children:[s.jsx("h2",{children:"Вітаю! Я Домовик"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae non velit quidem culpa delectus perspiciatis quas nobis esse ratione inventore unde doloremque placeat natus? Praesentium veritatis unde molestiae fugit?"})]})]})]})}const I="_wrapBtn_15p8j_2",L="_btnMain_15p8j_10",a={wrapBtn:I,btnMain:L},P="/goblin-client/search.jpg",$="/goblin-client/service.jpg";function k({city:i}){return s.jsxs("div",{className:a.wrapBtn,children:[s.jsxs(p,{to:`/service/${i.path}`,className:a.btnMain,children:[s.jsx("img",{src:P,alt:""}),s.jsx("span",{children:"Шукаю послугу"})]}),s.jsxs(p,{to:"auth",className:a.btnMain,children:[s.jsx("img",{src:$,alt:""}),s.jsx("span",{children:"Надаю послугу"})]})]})}function R(){const[i,n]=r.useState({}),c=o=>{n(o)};return s.jsxs("section",{className:d.home,children:[s.jsx(S,{}),s.jsxs("div",{className:d.selectCase,children:[s.jsx(w,{setSelectedCity:c}),s.jsx(k,{city:i})]})]})}export{R as default};
