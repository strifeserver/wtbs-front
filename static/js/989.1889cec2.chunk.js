"use strict";(self.webpackChunkwtbs_app=self.webpackChunkwtbs_app||[]).push([[989],{3786:function(e,t,n){n.d(t,{J:function(){return o}});n(2791);var a=n(7022),r=n(1621),s=n(1413),i=n(9743),c=n(2677),l=n(6757),u=n(184);function d(e){var t=e.totalPages,n=e.currentPage,r=e.handlePageChange;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.Z,{fluid:!0,className:"m-0 p-0 w-100",children:(0,u.jsx)(i.Z,{className:"w-100 h-100 p-0 m-0 d-flex justify-content-center align-items-center",children:(0,u.jsx)(c.Z,{lg:9,children:(0,u.jsx)(l.ZP,(0,s.Z)((0,s.Z)({},l.OZ),{},{total:t,current:n,onPageChange:function(e){return r(e)},extraClassName:"justify-content-center"}))})})})})}var o=function(e){var t=e.dataList,n=e.onSubmit,s=e.register,i=e.handleSubmit,c=e.totalPages,l=e.currentPage,o=e.handlePageChange,m=e.CardComponent;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.zI,{dataList:t,onSubmit:n}),(0,u.jsx)(r.E1,{onSubmit:n,register:s,handleSubmit:i}),(0,u.jsx)(m,{}),(0,u.jsx)(d,{totalPages:c,currentPage:l,handlePageChange:o}),(0,u.jsx)(a.Z,{fluid:!0,className:"m-0 p-0 my-5"})]})}},1621:function(e,t,n){n.d(t,{E1:function(){return o},cz:function(){return h},zI:function(){return m}});var a=n(1413),r=(n(2791),n(7022)),s=n(9743),i=n(2677),c=n(3855),l=n(3360),u=n(4261),d=n(184),o=function(e){var t=e.handleSubmit,n=e.onSubmit,u=e.register;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.Z,{fluid:!0,className:"h-10 my-3",children:(0,d.jsx)(s.Z,{className:"d-flex justify-content-center align-items-center h-100",children:(0,d.jsx)(i.Z,{xs:12,lg:8,children:(0,d.jsxs)(c.Z,{className:"d-flex",onSubmit:t(n),children:[(0,d.jsx)(c.Z.Control,(0,a.Z)({type:"text",placeholder:"Search"},u("Search",{}))),(0,d.jsx)(l.Z,{variant:"outline-primary",type:"submit",children:"Search"})]})})})})})},m=function(e){var t,n=e.dataList,a=e.onSubmit;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(r.Z,{fluid:!0,className:"m-0 p-3 text-center",children:[" ",(0,d.jsx)(l.Z,{size:"sm",onClick:function(){return a({Search:""})},className:"mx-1",children:"Tags: All"}),n?null===(t=n.data_tags)||void 0===t?void 0:t.map((function(e){return(0,d.jsx)(l.Z,{className:"mx-1",size:"sm",onClick:function(){return a({Search:e})},children:e},(0,u.Z)())})):(0,d.jsx)(d.Fragment,{})]})})},h=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.Z,{fluid:!0,className:"m-0 p-0",children:(0,d.jsx)(s.Z,{children:(0,d.jsx)(i.Z,{xs:12,lg:12,className:"text-center",children:(0,d.jsx)("p",{className:"empty-result-text",children:"(Empty Result)"})})})})})}},1989:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(885),r=n(2791),s=n(2677),i=n(9140),c=n(7022),l=n(1035),u=n(3360),d=n(7689),o=n(4261),m=n(184);function h(e){var t,n=e.data,a=e.onSubmit,r=(0,d.s0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(s.Z,{xs:12,lg:4,md:4,className:"p-2 d-flex justify-content-center my-2",children:(0,m.jsxs)(i.Z,{style:{width:"25rem",borderRadius:"0px"},className:"ministry-card",children:[(0,m.jsx)(i.Z.Img,{style:{borderRadius:"0px"},variant:"top",src:"http://www.whathebiblesays.org/api/public/images/contents/"+n.content_thumbnail}),(0,m.jsxs)(i.Z.Body,{className:"d-flex flex-column",children:[(0,m.jsx)(i.Z.Title,{className:"ministry-text-list-title",children:n.content_title}),(0,m.jsx)(c.Z,{fluid:!0,className:"p-2",children:null===(t=n.content_tags)||void 0===t?void 0:t.map((function(e){return(0,m.jsx)(l.Z,{className:"pill-cursor",bg:"primary",pill:!0,onClick:function(){return a({Search:e})},children:e},(0,o.Z)())}))}),(0,m.jsx)(c.Z,{dangerouslySetInnerHTML:{__html:n.content_description.sub_content_section}}),(0,m.jsx)(u.Z,{variant:"primary",onClick:function(e){return function(e){e.preventDefault(),r("/Ministries/MinistryDetails",{state:n})}(e)},className:"mt-auto",children:"View Details"})]})]})})})}var x=n(9743),f=n(173),g=n(1134),j=n(1621),p=n(3786),Z=n(3355);function v(){var e=(0,g.cI)(),t=e.register,n=e.handleSubmit,i=(0,r.useState)([]),l=(0,a.Z)(i,2),u=l[0],d=l[1],v=(0,r.useState)(0),b=(0,a.Z)(v,2),N=b[0],S=b[1],y=(0,r.useState)(0),w=(0,a.Z)(y,2),C=w[0],P=w[1],_="ministry",k=function(e,t,n){d(e),S(t),P(n)},F=function(e){(0,Z.rQ)(_,e.Search,N,6).then((function(e){var t=e.data.result;k(t,t.current_page,Math.ceil(t.total/6))}))};(0,r.useEffect)((function(){(0,Z.rQ)(_,"",N,6).then((function(e){var t=e.data.result;k(t,t.current_page,Math.ceil(t.total/6))}))}),[N]);return(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(c.Z,{fluid:!0,className:"m-0 p-0 w-100",children:(0,m.jsx)(x.Z,{lg:12,className:"page-divider m-0 p-0 ".concat(f.tq?"w-100":"w-75"," h-25"),children:(0,m.jsx)(s.Z,{lg:12,className:"h-100 align-items-center d-flex",children:(0,m.jsx)("h1",{className:"page-divider-text p-5 ".concat(f.tq?"text-center":""),children:"Our Ministries"})})})}),(0,m.jsx)(p.J,{dataList:u,onSubmit:F,register:t,handleSubmit:n,totalPages:C,currentPage:N,handlePageChange:function(e){S(e),(0,Z.rQ)(_,"",e,6).then((function(e){var t=e.data.result;k(t,t.current_page,Math.ceil(t.total/6))}))},CardComponent:function(){var e,t;return 0!==(null===(e=u.data)||void 0===e?void 0:e.length)?(0,m.jsx)(c.Z,{fluid:!0,className:"d-flex justify-content-center h-auto m-0 p-0 mt-5",children:(0,m.jsx)(x.Z,{className:"m-0 p-0 ".concat(f.Em||f.tq?"w-100":"w-75"),children:null===(t=u.data)||void 0===t?void 0:t.map((function(e){return(0,m.jsx)(h,{data:e,onSubmit:F},(0,o.Z)())}))})}):(0,m.jsx)(j.cz,{})}})]})}}}]);
//# sourceMappingURL=989.1889cec2.chunk.js.map