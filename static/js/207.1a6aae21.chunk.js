"use strict";(self.webpackChunkgoit_react_hw_08_phonebook_typescript=self.webpackChunkgoit_react_hw_08_phonebook_typescript||[]).push([[207],{7902:function(t,e,n){n.d(e,{l:function(){return r}});var a=n(184),r=function(t){var e=t.windowSize,n=t.isThemeDark,r=e.height>440?"block":"hidden";return(0,a.jsxs)("div",{className:"".concat(r),children:[(0,a.jsx)("div",{className:"".concat(n?"top-52 right-12":"top-32 left-12"," w-full  max-w-[280px] pointer-events-none h-full max-h-96 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-3xl absolute   md:hidden "),children:(0,a.jsx)("div",{className:"".concat(n?"from-transparent   to-violet-800 ":"from-transparent   to-amber-300 "," absolute bottom-0 w-full h-full  max-w-[580px] max-h-[480px] transform \n        -translate-x-1/2 pointer-events-none -translate-y-1/2 bg-gradient-to-b from-transparent\n          rounded-full animate-shine blur-3xl")})}),(0,a.jsx)("div",{className:"".concat(n?"top-10 left-2":"top-52  right-12"," w-full  max-w-[180px] pointer-events-none h-full max-h-96 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-3xl absolute  md:-z-10"),children:(0,a.jsx)("div",{className:"".concat(n?"from-transparent   to-cyan-700 ":"from-transparent   to-amber-500 "," absolute bottom-0 w-full h-full  max-w-[580px] max-h-[480px] transform \n        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent\n          rounded-full pointer-events-none animate-shine blur-3xl")})})]})}},9207:function(t,e,n){n.r(e),n.d(e,{default:function(){return D}});var a=n(5861),r=n(9439),o=n(4687),s=n.n(o),l=n(4420),i=n(1087),d=n(8016),m=n(184),c=function(t){var e=t.windowSize,n=t.text,a=t.isLoading,r=t.isThemeDark,o=e.height>460?"md3:mt-24":"md3:mt-4  ",s=r?"shadow-none hover:bg-buttonHoverColorDark text-buttonTextColorDark hover:text-lightPartsColorDark bg-buttonColorDark":"shadow-shadowBox hover:bg-buttonHoverColor text-buttonTextColor bg-buttonColor";return(0,m.jsx)("button",{type:"submit",disabled:a,className:"\n       ".concat(o," \n        ").concat(s," \n      text-center font-light w-40 h-11 rounded-sm border-none outline-none \n      mx-auto cursor-pointer shadow-md mt-28 mb-8 flex items-center justify-around transition-all duration-300 ").concat("text-lg md:w-48"," ssm:w-40 ssm:h-10 md2:text-sm "),children:a?(0,m.jsx)(d.Z,{color:"".concat(r?"#3f78cc ":"#F5DEB3 "),size:"6px"}):(0,m.jsx)(m.Fragment,{children:n})})},x=n(840),h=n(8356),u=n(8454),p=n(3524),w=n(3479),f=n(3519),g=function(t){var e=t.windowSize,n=t.isThemeDark,a=(0,u.F)().showPassword,r=(0,l.I0)(),o=(0,l.v9)(h.is),s=e.height>460?"md3:mt-9":"md3:mt-0";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("label",{className:"\n        ".concat(s,"\n        mt-9 text-xl flex items-center gap-2 md:ml-2 \n      md2:text-sm font-light sm:mt-1"),htmlFor:"userEmail",children:[" ","Email"," "]}),(0,m.jsx)("input",{onChange:function(t){var e=t.target.value;r((0,x.iD)(e))},className:"\n        ".concat(n?" text-darkFontDark bg-sky-900 placeholder:text-darkFontDark ":" text-darkFont bg-lightPartsColor placeholder:text-darkFont ","  mx-auto w-full py-1 rounded-sm px-5  h-12 \n          border-0 outline-none   \n           placeholder:font-base\n             md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 \n           ssm:text-base  font-light  transition-all  2xl2:text-2xl"),type:"email",name:"userEmail",id:"userEmail",placeholder:"Balambino@mail.com",value:o.email||"",required:!0}),(0,m.jsxs)("label",{className:"mt-2 text-xl flex items-center gap-2 md:ml-2 \n      md2:text-sm font-light sm:mt-1",htmlFor:"userPassword",children:[" ","Password"," "]}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("input",{className:"".concat(n?" text-darkFontDark bg-sky-900 placeholder:text-darkFontDark ":" text-darkFont bg-lightPartsColor placeholder:text-darkFont "," mx-auto  py-1 px-5 rounded-l-sm h-12 \n          border-0 outline-none   \n           placeholder:font-base\n            md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 \n           ssm:text-base w-full  font-light  transition-all  2xl2:text-2xl"),type:"".concat(a?"text":"password"),name:"userPassword",id:"userPassword",placeholder:"Enter your password",min:7,required:!0}),(0,m.jsx)("button",{className:"".concat(n?" text-darkFontDark bg-sky-900 placeholder:text-darkFontDark ":" text-darkFont bg-lightPartsColor placeholder:text-darkFont "," rounded-r-sm w-12 transition-all"),type:"button",onClick:function(){r((0,f.VS)())},children:a?(0,m.jsx)(w.CER,{}):(0,m.jsx)(p.$dn,{})})]})]})},b=n(7902),k=n(9664),v=n(5428),j=n(2791),y=n(4270);function D(){var t=(0,l.I0)(),e=(0,l.v9)(v.g),n=(0,l.v9)(h.NS),o=(0,j.useState)({width:window.innerWidth,height:window.innerHeight}),d=(0,r.Z)(o,2),x=d[0],u=d[1],p=function(){u({width:window.innerWidth,height:window.innerHeight})};(0,j.useEffect)((function(){return window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}),[]);var w=function(){var e=(0,a.Z)(s().mark((function e(n){var a,r,o,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a=n.target.elements,r=a.userEmail,o=a.userPassword,l={email:r.value.trim(),password:o.value.trim()},t((0,k.x4)(l)),l.password="";case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=x.height>460?"md3:w-5/12 pb-12":"md3:w-10/12   md2:mt-1 pb-1",D=e?" shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark ":" from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 ";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y.q,{children:(0,m.jsx)("title",{children:"StoneBook-Login"})}),(0,m.jsxs)("form",{onSubmit:w,autoComplete:"off",className:"\n        ".concat(f," \n         ").concat(D,"  flex gap-2 flex-col   pt-20  px-10 rounded-sm\n          shadow-lg bg-gradient-to-tr md2:mt-4  md2:pt-8  md:pb-14 md:px-5 md:min-h-0 md:w-[96%]\n          transition-all  ssm2:-mt-4 ssm2:pt-28  mx-auto z-20 mt-2 "),children:[(0,m.jsx)("h1",{className:"text-center text-4xl m-0 md:text-2xl md2:text-2xl font-normal mt-2",children:"Login"}),(0,m.jsx)(g,{windowSize:x,isThemeDark:e}),(0,m.jsxs)(i.rU,{className:" ".concat(e?"text-teal-400 ":"text-teal-600 "," mt-12 flex gap-4"),to:"/registration",children:[(0,m.jsx)("p",{className:"".concat(e?"text-darkFontDark":"text-darkFont"," "),children:"Have no account?"}),"Registrate now"]}),(0,m.jsx)(c,{windowSize:x,text:"Sign in",isLoading:n,isThemeDark:e})]}),(0,m.jsx)(b.l,{windowSize:x,isThemeDark:e})]})}}}]);
//# sourceMappingURL=207.1a6aae21.chunk.js.map