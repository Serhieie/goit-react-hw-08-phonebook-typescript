"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_typescript=self.webpackChunkgoit_react_hw_08_phonebook_typescript||[]).push([[586],{3403:function(e,t,r){r.d(t,{Y:function(){return n},f:function(){return o}});var a=r(8007),o=a.Ry().shape({name:a.Z_().min(1).max(18).required().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0457\u0491\u0406\u0407\u0490].*$/,"Name must start with letters"),phone:a.Z_().min(7).max(18).required().matches(/^\+?(\d{2}-?\d{3}-?\d{3}-?\d{2}-?\d{2})$|^\d{7}$|^\d{10}$|^\+?\d{12}$/,"Number must have 7, 10 or 12 digits")}),n=a.Ry().shape({name:a.Z_().min(2,"Name should be at least 2 characters").max(16,"Name should not exceed 16 characters").required("Name is required"),email:a.Z_().email("Please enter a valid email address").required("Email is required"),password:a.Z_().min(7,"Password should be at least 7 characters long").required("Password is required"),confirmPassword:a.Z_().oneOf([a.iH("password"),null],"Passwords must match").required("Please confirm your password")})},179:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var a=r(9439),o=r(5705),n=r(3403),l=r(6387),s=r(1545),d=r(3853),i=r(184);function m(e){var t=e.isThemeDark;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("label",{htmlFor:"name",className:"mt-2 text-xl flex items-center gap-2 md:ml-2 md:w-10/12\n      md2:text-sm font-light sm:mt-1",children:[(0,i.jsx)(s.uRN,{className:"ml-3 md:ml-6"}),"Name"]}),(0,i.jsx)(o.gN,{type:"text",name:"name",id:"name",placeholder:"Enter name",className:"".concat(t?" text-darkFontDark bg-sky-900 placeholder:text-darkFontDark ":" text-darkFont bg-lightPartsColor placeholder:text-darkFont ","text-center mx-auto w-11/12 py-1 px-5 rounded-sm h-12 \n          border-0 outline-none   \n           placeholder:font-extralight\n         md:w-10/12    md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 \n           ssm:text-base  font-light  transition-all  2xl2:text-2xl")}),(0,i.jsxs)("label",{htmlFor:"phone",className:"mt-1 text-xl flex items-center gap-2 md:ml-2 md:w-10/12\n      md:text-4 font-light md2:text-xs",children:[(0,i.jsx)(d.faY,{className:"ml-3 md:ml-6 w-[14px] h-[14px]"}),"Phone Number"]}),(0,i.jsx)(o.gN,{type:"tel",name:"phone",id:"phone",placeholder:"Enter phone number",className:"".concat(t?" text-darkFontDark bg-sky-900 placeholder:text-darkFontDark  ":" text-darkFont bg-lightPartsColor placeholder:text-darkFont  "," text-center w-11/12 py-1 px-5 rounded-sm h-12 \n        border-0 outline-none mx-auto  \n        md:w-10/12  text-xl md:h-10 md:py-0.5 md:px-2 placeholder:opacity-50 \n        ssm:text-base  placeholder:font-extralight font-light  transition-all 2xl2:text-2xl")})]})}function c(e){for(var t=e.replace(/\D/g,""),r=0,a=[/^(\d{2})(\d{3})(\d{3})(\d{4})$/,/^(\d{3})(\d{3})(\d{4})$/,/^(\d{3})(\d{4})$/];r<a.length;r++){var o=a[r],n=t.match(o);if(n)return n.slice(1).join("-")}return t}var x=r(8820),h=r(8016),p=function(e){var t=e.isLoading,r=e.isThemeDark;return(0,i.jsx)("button",{type:"submit",disabled:t,className:"".concat(r?"shadow-none hover:bg-buttonHoverColorDark text-buttonTextColorDark hover:text-lightPartsColorDark bg-buttonColorDark":"shadow-shadowBox hover:bg-buttonHoverColor text-buttonTextColor bg-buttonColor"," text-center font-light w-40 h-11 rounded-sm border-none outline-none mx-auto cursor-pointer shadow-md flex items-center justify-around transition-all duration-30 ").concat("text-lg md:w-48"," ssm:w-40 ssm:h-10 md2:text-sm"),children:t?(0,i.jsx)(h.Z,{color:"".concat(r?"#3f78cc ":"#F5DEB3 "),size:"6px"}):(0,i.jsxs)(i.Fragment,{children:["Add Contact ",(0,i.jsx)(x.vM4,{})]})})},u=function(){return(0,i.jsxs)("div",{className:"w-full flex justify-center font-extralight items-center flex-col  h-20 mt-2 md:text-base md:h-7 text-center",children:[(0,i.jsx)(o.Bc,{className:"text-xl text-errorMsg m-0 p-0 font-extralight items-center  md:w-10/12 md:text-base md2:text-sm",name:"name",component:"div"}),(0,i.jsx)(o.Bc,{className:"text-xl text-errorMsg m-0 p-0 font-extralight items-center  md:w-10/12 md:text-base md2:text-sm",name:"phone",component:"div"})]})},b=r(5273),g={name:"",phone:""};function f(e){var t=e.isThemeDark,r=(0,b.bC)().data,s=(0,b.wf)(),d=(0,a.Z)(s,2),x=d[0],h=d[1].isLoading;return(0,i.jsx)(o.J9,{initialValues:g,validationSchema:n.f,onSubmit:function(e,t){var a=t.resetForm,o=e.name,n=c(e.phone),s=o.split(" ").map((function(e){if(0===e.length)return"";var t=e[0],r=e.slice(1).toLowerCase();return t.toUpperCase()+r})).join(" ").trim(),d=Array.isArray(r)&&r.some((function(e){return e.name.toLowerCase()===s.toLowerCase()})),i=Array.isArray(r)&&r.some((function(e){return c(e.number)===n}));if(d&&i)return(0,l.wt)();x({name:s,number:n}),(0,l.UK)(),a()},children:(0,i.jsxs)(o.l0,{autoComplete:"off",className:"".concat(t?" shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark ":" from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 ","  flex gap-2 flex-col w-1/3 py-20 pr-7 pl-5 rounded-sm\n          shadow-lg bg-gradient-to-tr md:py-12 md:px-5 md:min-h-0 md:w-[99%]\n          transition-all  overflow-hidden ssm2:w-12/12 ssm2:py-6 ssm2:m-0 ssm2:pt-16"),children:[(0,i.jsx)("h1",{className:"text-center text-3xl m-0 md:text-xl md2:text-xl font-normal",children:"Add Contact Field"}),(0,i.jsx)(m,{isThemeDark:t}),(0,i.jsx)(u,{}),(0,i.jsx)(p,{isLoading:h,isThemeDark:t})]})})}var k=r(3433),w=r(2791),v=r(4420),C=window.innerWidth,j={overlay:{position:"fixed",zIndex:999,top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(250, 250, 210, 0.5)"},content:{position:"absolute",top:"40%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid #ccc",background:"rgb(245, 187, 86)",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:C>768?"60px 40px":"20px 10px"}},D={overlay:{position:"fixed",zIndex:999,top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(48, 45, 62, 0.3)"},content:{position:"absolute",top:"40%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid #ccc",background:"rgb(4, 23, 55)",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:C>768?"60px 40px":"20px 10px"}},N=r(7948),y=r.n(N);y().setAppElement("#root");var F=function(e){var t=e.isThemeDark,r=e.contact,a=e.modalIsOpen,o=e.closeModal,n=e.handleDelete,l=(0,w.useRef)();return(0,i.jsxs)(y(),{style:t?D:j,isOpen:a,onRequestClose:o,contentLabel:"Delete Confirmation",className:"md:w-[290px] md:p-6 md3:w-[420px] md3:p-12",children:[(0,i.jsxs)("h2",{ref:l,className:"".concat(t?"text-darkFontDark":"text-darkFont"," text-center   text-2xl md:text-sm "),children:["Delete contact"," ",(0,i.jsx)("span",{className:"font-bold text-green-700",children:r.name}),"?"]}),(0,i.jsxs)("div",{className:"flex jusrify-center items-center mx-auto mt-10  md:mt-6 gap-1 ",children:[(0,i.jsx)("button",{onClick:function(){return n(r.id)},className:"".concat(t?" bg-deleteBtnColorDark hover:bg-deleteBtnHoverColorDark text-darkFontDark ":" bg-deleteBtnColor hover:bg-deleteBtnHoverColor text-lightPartsColor ","text-4  \n            border-none py-3 px-10 rounded-0.5 cursor-pointer \n            duration-300 mx-auto  md:py-2 md:px-5\n             font-light 2xl:text-xl"),children:"Delete"}),(0,i.jsx)("button",{onClick:o,className:"".concat(t?" bg-buttonColorDark text-darkFontDark hover:text-lightPartsColorDark hover:bg-buttonHoverColorDark ":" bg-buttonColor text-lightPartsColor hover:bg-buttonHoverColor ","text-4  \n            border-none py-3 px-10 rounded-0.5 cursor-pointer \n            duration-300 mx-auto  md:py-2 md:px-5\n            font-light 2xl:text-xl"),children:"Cancel"})]})]})},P=r(5087);function B(e){var t=e.contact,r=e.index,o=(0,P.F)().isThemeDark,n=window.innerWidth,l=(0,w.useState)(!1),s=(0,a.Z)(l,2),d=s[0],m=s[1],p=(0,b.Nt)(),u=(0,a.Z)(p,2),g=u[0],f=u[1].isLoading;return(0,i.jsxs)("tr",{className:"".concat(o?" border-tableBorderColorDark ":" border-tableBorderColor "," border-b-2  "),children:[(0,i.jsx)("td",{width:"5%",className:"".concat(o?" bg-lightPartsColorDark ":" bg-lightPartsColor ","p-1 text-cente pl-4 ssm2:pl-2"),children:r+1}),(0,i.jsx)("td",{width:"44%",className:"".concat(o?" bg-lightPartsColorDark ":" bg-lightPartsColor ","p-1 text-center  user-selectable  md:text-md   "),children:t.name}),(0,i.jsx)("td",{width:"42%",className:"".concat(o?" bg-lightPartsColorDark ":" bg-lightPartsColor ","p-1 text-center   md:text-md  user-selectable "),children:c(t.number)}),(0,i.jsx)("td",{width:"15%",className:"".concat(o?" bg-lightPartsColorDark ":" bg-lightPartsColor "," p-1 text-center   md:text-md   pr-3 1xl2:pr-6 "),children:(0,i.jsx)("button",{id:"delete-btn",onClick:function(){m(!0)},disabled:f,className:" ".concat(o?" bg-buttonColorDark hover:bg-buttonHoverColorDark text-lightPartsColorDark hover:text-darkFontDark":" bg-buttonColor hover:bg-buttonHoverColor text-lightPartsColor "," mx-auto border-none 1xl2:text-lg\n           py-1 px-2 min-w-[50px] min-h-[28px] text-xs cursor-pointer \n           duration-300 flex text-center items-center \n            rounded-sm font-light justify-center sm:min-h-[20px] sm:min-w-[30px]"),children:f?(0,i.jsx)(h.Z,{color:"".concat(o?"#3f78cc ":"#F5DEB3 "),size:"2px"}):n<768?(0,i.jsx)(x.Psi,{style:{marginRight:"4px"}}):"Delete"})}),(0,i.jsx)(F,{isThemeDark:o,contact:t,modalIsOpen:d,closeModal:function(){m(!1)},handleDelete:function(e){g(e),m(!1)}})]})}var H=r(6351),T=function(e){var t=e.isThemeDark;return(0,i.jsx)("thead",{className:"text-lg  right-0 left-0 top-0 w-full  1xl2:text-2xl",children:(0,i.jsxs)("tr",{className:"".concat(t?"border-tableBorderColorDark ":"border-tableBorderColor "," border-b-2  "),children:[(0,i.jsx)("th",{width:"7%",className:"".concat(t?"bg-tableHeaderBackgroundDark  text-darkFontDark ":"bg-tableHeaderBackground text-darkFont "," items-center  \n           font-bold min-w-4 p-2 md:p-0.5 "),children:"#"}),(0,i.jsx)("th",{width:"40%",className:"".concat(t?"bg-tableHeaderBackgroundDark text-darkFontDark ":"bg-tableHeaderBackground text-darkFont "," items-center \n           font-bold min-w-4 p-2 md:p-0.5  "),children:"Name"}),(0,i.jsx)("th",{width:"42%",className:"".concat(t?"bg-tableHeaderBackgroundDark text-darkFontDark ":"bg-tableHeaderBackground text-darkFont ","items-center  \n           font-bold min-w-4 p-2 md:p-0.5  "),children:"Phone Number"}),(0,i.jsx)("th",{width:"15%",className:"".concat(t?"bg-tableHeaderBackgroundDark  text-darkFontDark ":" bg-tableHeaderBackground text-darkFont ","items-center  \n           font-bold min-w-4 p-2 md:p-0.5  pr-3  1xl2:pr-7"),children:"Action"})]})})};function _(e){var t=e.data,r=e.error,a=e.isLoading,o=(0,v.v9)(H.B8),n=(0,v.v9)(H.gh),l=(0,w.useMemo)((function(){var e=o.toLowerCase();if(!Array.isArray(t))return[];var r=t.filter((function(t){return t.name.toLowerCase().includes(e)||t.number.toLowerCase().includes(e)}));return(0,k.Z)(r).sort((function(e,t){return e.name.localeCompare(t.name)}))}),[t,o]);return(0,i.jsxs)("div",{className:"overflow-x-auto  w-[92%] ssm2:w-12/12 ssm2:p-0 ssm2:m-0 ssm2:pb-10 ",children:[(0,i.jsxs)("div",{className:"h-6",children:[a&&!t&&(0,i.jsx)("p",{className:"text-center font-light text-xs",children:"Loading..."}),!a&&t&&0===t.length&&(0,i.jsx)("p",{className:"text-center font-light text-base",children:"No contacts found."}),r&&(0,i.jsx)("p",{className:"text-center font-light text-base",children:"Error fetching contacts. Please try again later."})]}),(0,i.jsxs)("table",{className:"".concat(n?"border-tableBorderColorDark ":"border-tableBorderColor "," border-2  border-collapese \n        mt-5 mb-5 block mx-auto overflow-auto w-full h-[490px] \n         ssm2:w-12/12 ssm2:p-0 ssm2:m-0 ssm2:text-base"),children:[(0,i.jsx)(T,{isThemeDark:n}),(0,i.jsx)("tbody",{className:"max-h-fit max-w-full  text-xl ssm:text-base    ssm2:text-lg  1xl2:text-2xl",children:!r&&l.map((function(e,t){return(0,i.jsx)(B,{contact:e,index:t},e.id)}))})]})]})}var L=r(1634),Z=r(1578);function W(){var e=(0,v.I0)(),t=(0,v.v9)(H.B8),r=(0,v.v9)(H.gh);return(0,i.jsxs)("label",{className:"".concat(r?"bg-tableHeaderBackgroundDark":"bg-filterLabelColor","  w-[60%] mx-auto mb-2 \n    mt-5 py-1 px-5 rounded-0.5 flex md:w-[85%] md:text-3 md:py-1\n    md:px-2 md2:w-[85%] transition-all relative"),children:[(0,i.jsx)(Z.VrF,{className:"\n        absolute w-4 h-4 opacity-40 top-3.5 md:left-10 left-14 1xl2:left-12\n        z-10 ".concat(r?" text-filterPlaceholderColorDark ":" text-filterPlaceholderColor "," \n        md:w-5 md:h-5 \n        ssm:hidden   transition-all ")}),(0,i.jsx)("input",{placeholder:"Enter name for filter",type:"text",value:t,onChange:function(t){var r=t.target.value;e((0,L.Qt)(r))},className:"".concat(r?" bg-sky-900 text-darkFontDark placeholder:text-filterPlaceholderColorDark ":"bg-lightPartsColor text-darkFont placeholder:text-filterPlaceholderColor  ","placeholder:opacity-50 flex text-m border-none outline-none w-11/12 max-w-[480px]\n         h-10 rounded mx-auto opacity-70 text-center py-0.5 pr-2 pl-12 placeholder:text-center \n         placeholder:py-1 placeholder:px-5 md:w-[90%] \n          md:pl-10 ssm:pl-1 text-xl placeholder:font-light font-light transition-all\n           placeholder:ssm:text-base")})]})}var q=function(e){var t=e.data,r=e.isThemeDark?" shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark ":" shadow-shadowBox from-smallWraperGradient1 to-smallWraperGradient2 ";return(0,i.jsxs)("div",{className:"".concat(r," \n      w-8/12 flex justify-center items-center flex-col\n      px-5 pr-4 rounded-sm shadow-lg min-h-562 ssm:min-h-762\n      select-none bg-gradient-to-tr\n      relative md:mt-3 md:pt-0 md:pb-7 md:px-1 md2:px-2 md:w-11/12\n      transition-all ssm2:w-full ssm2:p-0 ssm2:mt-2"),children:[(0,i.jsx)(W,{}),(0,i.jsx)(_,{data:t})]})},A=r(4270);function R(e){var t=e.isThemeDark,r=(0,b.bC)().data;return(0,i.jsxs)("div",{className:"flex gap-4 sm:gap-0 justify-around mx-auto  w-11/12   p-14 md3:p-4 1xl2:mt-5  ssm:pt-4  rounded shadow-xl md:flex-col md:items-center md:text-base md:px-1.5 md:w-11/12 text-xl min-h-482 ssm:min-h-762 select-none  bg-gradient-to-tl  relative ssm2:w-[100%] ssm2:p-0  ssm2:m-0 ",children:[(0,i.jsx)(A.q,{children:(0,i.jsx)("title",{children:"Stone-Contacts"})}),(0,i.jsx)(f,{isThemeDark:t}),(0,i.jsx)(q,{data:r,isThemeDark:t})]})}}}]);
//# sourceMappingURL=586.33a27696.chunk.js.map