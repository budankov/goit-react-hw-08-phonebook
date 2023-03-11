"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[369],{2369:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(2791),r=n(9434),s=n(3634),c=n(6916),i=function(e){return e.contacts.items},o=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},u=(0,c.P1)([i,function(e){return e.filter}],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.includes(n)}))})),m=n(6151),d=n(2419),h=n(5264),_=n(5705),f=n(6727),b=f.Ry().shape({name:f.Z_().required().trim().max(20,"must be max 20 characters long").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces."),number:f.Z_().required().trim().max(20,"must be max 20 characters long").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Number must be digits and can contain spaces, dashes, parentheses and can start with +")}),x="ContactForm_form__zqkUM",p=n(3329),j={name:"",number:""},v=function(){var e=(0,r.I0)(),t=(0,r.v9)(i);return(0,p.jsx)(_.J9,{initialValues:j,validationSchema:b,onSubmit:function(n,a){var r=a.resetForm;if(t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))return h.Notify.failure("".concat(n.name," is already in contacts"));e((0,s.uK)(n)),r()},children:(0,p.jsxs)(_.l0,{className:x,children:[(0,p.jsxs)("label",{children:[(0,p.jsx)("p",{children:"Name"}),(0,p.jsx)(_.gN,{type:"text",name:"name"})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("p",{children:"Number"}),(0,p.jsx)(_.gN,{type:"tel",name:"number"})]}),(0,p.jsx)(m.Z,{type:"submit",variant:"contained",size:"small",sx:{backgroundColor:"#4caf50","&:hover":{backgroundColor:"#29972c"}},startIcon:(0,p.jsx)(d.Z,{}),children:"Add contact"})]})})},C=n(3400),y=n(7247),N="ContactListItem_contactItem__pXP8s",k=function(e){var t=e.name,n=e.number,a=e.id,c=(0,r.I0)();return(0,p.jsxs)("li",{className:N,children:[t,": ",n,(0,p.jsx)(C.Z,{"aria-label":"delete",onClick:function(){return c((0,s.GK)(a))},children:(0,p.jsx)(y.Z,{sx:{fill:"#dd2c00"}})})]},a)},g="ContactListIsEmpty_listIsEmpty__FQc2y",w=function(){return(0,p.jsx)("p",{className:g,children:"Contacts list is empty! Add contacts and it they appear here."})},L="ContactList_contactListContainer__VIGnh",I="ContactList_contactList__lfyFV",F="ContactList_scrollbar__hUgEU",Z=function(){var e=(0,r.v9)(u);return(0,p.jsx)("div",{className:L,children:(0,p.jsx)("ul",{className:"".concat(I," ").concat(e.length>1?F:""),children:0===e.length?(0,p.jsx)(w,{}):e.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,p.jsx)(k,{id:t,name:n,number:a},t)}))})})},P=n(3165),A="ContactFilter_filterTitle__CI44y",z="ContactFilter_filterInput__VDle2",E=function(){var e=(0,r.I0)();return(0,p.jsxs)("label",{className:A,children:["Find contacts by name",(0,p.jsx)("input",{className:z,onChange:function(t){var n=t.target;e((0,P.T)(n.value))},type:"text",name:"filter"})]})},S=n(6286),T=function(){return(0,p.jsx)(S.NB,{visible:!0,height:"50",width:"50",ariaLabel:"blocks-loading",wrapperStyle:{display:"flex",margin:"0 auto"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})},V="Phonebook_container__roRy3",q="Phonebook_containerBcg__omFaD",B="Phonebook_contactBook__64jGc",G="Phonebook_title__mhwvS",U="Phonebook_subTitle__dTrA2",D=function(){var e=(0,r.I0)(),t=(0,r.v9)(o),n=(0,r.v9)(l);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,p.jsx)("div",{className:V,children:(0,p.jsx)("div",{className:q,children:(0,p.jsxs)("div",{className:B,children:[(0,p.jsx)("h1",{className:G,children:"Phonebook"}),(0,p.jsx)(v,{}),(0,p.jsx)("h2",{className:U,children:"Contacts"}),(0,p.jsx)(E,{}),t&&!n&&(0,p.jsx)(T,{}),(0,p.jsx)(Z,{})]})})})}}}]);
//# sourceMappingURL=369.ea8ca823.chunk.js.map