import{r,j as s,L as d}from"./index-iY-zw8p4.js";import{c as u}from"./page.module-Cre-Q77M.js";import{c as h}from"./cities-CVUX3U3U.js";import{G as _}from"./iconBase-Bh3R9tJa.js";const j="_wrapInput_14hxb_2",b="_options_14hxb_9",g="_select_14hxb_23",f="_icon_14hxb_59",v="_visible_14hxb_86",w="_hidden_14hxb_90",t={wrapInput:j,options:b,select:g,icon:f,visible:v,hidden:w};function y(e){return _({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,76h64a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm80,40H40a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Zm120.49,20.49a12,12,0,0,1-17,0l-18.08-18.08a44,44,0,1,1,17-17l18.08,18.07A12,12,0,0,1,240.49,200.49ZM184,164a20,20,0,1,0-20-20A20,20,0,0,0,184,164Z"},child:[]}]})(e)}function N({setSelectedCity:e}){const[i,c]=r.useState(!1),[o,p]=r.useState({}),x=n=>{p(n),e(n),c(!1)};return s.jsxs("div",{className:t.select,children:[s.jsxs("label",{className:t.wrapInput,children:[s.jsx("input",{type:"text",defaultValue:o.city,readOnly:o.city,placeholder:"Оберіть найближче місто..."}),s.jsx("button",{type:"button",onClick:()=>c(!i),children:s.jsx(y,{className:t.icon})})]}),s.jsx("div",{className:i?t.visible:t.hidden,children:s.jsx("ul",{className:t.options,children:h.map((n,m)=>s.jsx("li",{onClick:()=>x(n),children:n.city},m))})})]})}const M="/goblin-client/goblin.jpg",q="_wellcome_7dwqk_3",B="_box_7dwqk_43",C="_info_7dwqk_80",a={wellcome:q,box:B,info:C};function k(){return s.jsxs("div",{className:a.wellcome,children:[s.jsx("h1",{children:"Ласкаво просимо"}),s.jsxs("div",{className:a.box,children:[s.jsx("img",{src:M,alt:"Goblin"}),s.jsxs("div",{className:a.info,children:[s.jsx("h2",{children:"Вітаю! Я Домовик"}),s.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae non velit quidem culpa delectus perspiciatis quas nobis esse ratione inventore unde doloremque placeat natus? Praesentium veritatis unde molestiae fugit?"})]})]})]})}const H="_wrapBtn_qzxi6_2",I="_btnMain_qzxi6_15",l={wrapBtn:H,btnMain:I},S="/goblin-client/search.jpg",Z="/goblin-client/service.jpg";function A({city:e}){return s.jsxs("div",{className:l.wrapBtn,children:[s.jsxs(d,{to:`/service/${e.path}`,className:l.btnMain,children:[s.jsx("img",{src:S,alt:""}),s.jsx("span",{children:"Шукаю послугу"})]}),s.jsxs(d,{to:"auth",className:l.btnMain,children:[s.jsx("img",{src:Z,alt:""}),s.jsx("span",{children:"Надаю послугу"})]})]})}function O(){const[e,i]=r.useState({});console.log(e);const c=o=>{i(o)};return s.jsxs("section",{className:u.main,children:[s.jsx(k,{}),s.jsx(N,{setSelectedCity:c}),s.jsx(A,{city:e})]})}export{O as default};
