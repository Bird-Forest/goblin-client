import{j as e}from"./index-D26WuegB.js";import{u as l,I as a,a as c,b as o,f as d,o as u}from"./Input-CYfcjYE_.js";import{c as r}from"./forget.module-C6PW8z1S.js";const p=c({newPwd:o().min(10,"мінімум 10 символів").trim().required("поле обов'язкове"),repeed:o().min(10,"мінімум 10 символів").trim().required("поле обов'язкове").oneOf([d("newPwd")],"Паролі не співпадають")}).required();function j(){const{register:s,handleSubmit:m,formState:{errors:t,isSubmitting:n},watch:b,reset:f}=l({resolver:u(p)});return e.jsxs("form",{onSubmit:m(i=>{console.log(i)}),className:r.formFt,children:[e.jsx(a,{label:"Новий пароль, 10 символів",name:"newPwd",placeholder:"...",register:s,errors:t}),e.jsx(a,{label:"Повторити пароль",name:"repeed",placeholder:"...",register:s,errors:t}),e.jsx("div",{className:r.btnWrap,children:e.jsx("button",{type:"submit",className:r.btn,children:n?"Чекаємо":"Відправити"})})]})}export{j as default};
