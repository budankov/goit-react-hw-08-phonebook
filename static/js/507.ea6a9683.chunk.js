"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[507],{8507:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(1413),r=t(4942),i=t(9439),l=t(2791),s=function(e){var n=e.initialState,t=e.onSubmit,s=(0,l.useState)((0,a.Z)({},n)),o=(0,i.Z)(s,2),u=o[0],c=o[1],m=(0,l.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))}),[c]);return{state:u,setState:c,handleChange:m,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},u)),c((0,a.Z)({},n))}}},o=t(3366);var u=t(3329),c=["label","hadleChange"],m=function(e){var n=e.label,t=e.hadleChange,r=function(e,n){if(null==e)return{};var t,a,r=(0,o.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,c),i=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:i,children:n}),(0,u.jsx)("input",(0,a.Z)({id:i,onChange:t},r))]})},d="Button_button__SYhP+",h=function(e){var n=e.children,t=e.type,a=void 0===t?"submit":t;return(0,u.jsx)("button",{type:a,className:d,children:n})},f={name:{type:"text",name:"name",required:!0,label:"User name"},email:{type:"email",name:"email",required:!0,label:"User email"},password:{type:"password",name:"password",required:!0,label:"User password"}},_={name:"",email:"",password:""},b="RegisterForm_form__5aEEn",p=function(e){var n=e.onSubmit,t=s({initialState:_,onSubmit:n}),r=t.state,i=t.handleChange,l=t.handleSubmit,o=r.name,c=r.email,d=r.password;return(0,u.jsxs)("form",{className:b,onSubmit:l,children:[(0,u.jsx)(m,(0,a.Z)({value:o,hadleChange:i},f.name)),(0,u.jsx)(m,(0,a.Z)({value:c,hadleChange:i},f.email)),(0,u.jsx)(m,(0,a.Z)({value:d,hadleChange:i},f.password)),(0,u.jsx)(h,{children:"Register"})]})},v=t(8329),g=function(){return(0,u.jsx)("div",{className:v.Z.container,children:(0,u.jsx)("div",{className:v.Z.containerBcg,children:(0,u.jsxs)("div",{className:v.Z.contactBook,children:[(0,u.jsx)("h1",{className:v.Z.title,children:"Phonebook"}),(0,u.jsx)("div",{className:v.Z.mainContainer,children:(0,u.jsx)(p,{})})]})})})}},8329:function(e,n){n.Z={container:"styles_container__9djz6",containerBcg:"styles_containerBcg__yX6Rx",contactBook:"styles_contactBook__m5VYB",mainContainer:"styles_mainContainer__Df3Wm",title:"styles_title__1mzka",subTitle:"styles_subTitle__VPDln"}},3366:function(e,n,t){function a(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=507.ea6a9683.chunk.js.map