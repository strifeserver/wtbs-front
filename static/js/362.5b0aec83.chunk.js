"use strict";(self.webpackChunkwtbs_app=self.webpackChunkwtbs_app||[]).push([[362],{3786:function(e,n,t){t.d(n,{J:function(){return d}});t(2791);var r=t(7022),a=t(1621),s=t(1413),i=t(9743),c=t(2677),l=t(6757),o=t(184);function u(e){var n=e.totalPages,t=e.currentPage,a=e.handlePageChange;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.Z,{fluid:!0,className:"m-0 p-0 w-100",children:(0,o.jsx)(i.Z,{className:"w-100 h-100 p-0 m-0 d-flex justify-content-center align-items-center",children:(0,o.jsx)(c.Z,{lg:9,children:(0,o.jsx)(l.ZP,(0,s.Z)((0,s.Z)({},l.OZ),{},{total:n,current:t,onPageChange:function(e){return a(e)},extraClassName:"justify-content-center"}))})})})})}var d=function(e){var n=e.dataList,t=e.onSubmit,s=e.register,i=e.handleSubmit,c=e.totalPages,l=e.currentPage,d=e.handlePageChange,m=e.CardComponent;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.zI,{dataList:n,onSubmit:t}),(0,o.jsx)(a.E1,{onSubmit:t,register:s,handleSubmit:i}),(0,o.jsx)(m,{}),(0,o.jsx)(u,{totalPages:c,currentPage:l,handlePageChange:d}),(0,o.jsx)(r.Z,{fluid:!0,className:"m-0 p-0 my-5"})]})}},1621:function(e,n,t){t.d(n,{E1:function(){return d},cz:function(){return h},zI:function(){return m}});var r=t(1413),a=(t(2791),t(7022)),s=t(9743),i=t(2677),c=t(3855),l=t(3360),o=t(4261),u=t(184),d=function(e){var n=e.handleSubmit,t=e.onSubmit,o=e.register;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.Z,{fluid:!0,className:"h-10 my-3",children:(0,u.jsx)(s.Z,{className:"d-flex justify-content-center align-items-center h-100",children:(0,u.jsx)(i.Z,{xs:12,lg:8,children:(0,u.jsxs)(c.Z,{className:"d-flex",onSubmit:n(t),children:[(0,u.jsx)(c.Z.Control,(0,r.Z)({type:"text",placeholder:"Search"},o("Search",{}))),(0,u.jsx)(l.Z,{variant:"outline-primary",type:"submit",children:"Search"})]})})})})})},m=function(e){var n,t=e.dataList,r=e.onSubmit;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a.Z,{fluid:!0,className:"m-0 p-3 text-center",children:[" ",(0,u.jsx)(l.Z,{size:"sm",onClick:function(){return r({Search:""})},className:"mx-1",children:"Tags: All"}),t?null===(n=t.data_tags)||void 0===n?void 0:n.map((function(e){return(0,u.jsx)(l.Z,{className:"mx-1",size:"sm",onClick:function(){return r({Search:e})},children:e},(0,o.Z)())})):(0,u.jsx)(u.Fragment,{})]})})},h=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.Z,{fluid:!0,className:"m-0 p-0",children:(0,u.jsx)(s.Z,{children:(0,u.jsx)(i.Z,{xs:12,lg:12,className:"text-center",children:(0,u.jsx)("p",{className:"empty-result-text",children:"(Empty Result)"})})})})})}},4362:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(4165),a=t(5861),s=t(885),i=t(2791),c=t(7022),l=t(9743),o=t(2677),u=t(1035),d=t(2592),m=t(3360),h=t(173),x=t(4261),f=t(9603),g=t(184);function j(e){var n,t,r=e.data,a=e.downloadButton,s=e.onSubmit;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(c.Z,{fluid:!0,className:"my-5 m-0 p-0",children:(0,g.jsx)(l.Z,{className:"w-100 m-0 p-0 h-100 justify-content-center",children:(0,g.jsx)(o.Z,{lg:12,className:"news-box-shadow news-box-border ".concat(h.tq?"w-100":"w-75"),children:(0,g.jsxs)(l.Z,{className:"m-0 p-0 w-100 border-animation",children:[(0,g.jsxs)(o.Z,{lg:12,className:"".concat(h.tq?"order-1":""),children:[(0,g.jsx)("h1",{className:"news-header-title-text pt-3",children:null===r||void 0===r?void 0:r.content_title}),(0,g.jsx)(u.Z,{bg:"primary",pill:!0,children:(0,f.ZP)(null===r||void 0===r?void 0:r.created_at,"mmmm dd, yyyy")}),null===r||void 0===r||null===(n=r.content_tags)||void 0===n?void 0:n.map((function(e){return(0,g.jsx)(u.Z,{className:"pill-cursor mx-1",bg:"primary",pill:!0,onClick:function(){return s({Search:e})},children:e},(0,x.Z)())}))]}),(0,g.jsx)(o.Z,{lg:8,id:"news-description-container",className:"".concat(h.tq?"order-4":""),dangerouslySetInnerHTML:{__html:null===r||void 0===r||null===(t=r.content_description)||void 0===t?void 0:t.content_description}}),(0,g.jsx)(o.Z,{lg:4,className:"".concat(h.tq?"order-2":""),children:(0,g.jsx)(d.Z,{className:"news-image",src:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL+"/images/contents/"+(null===r||void 0===r?void 0:r.content_thumbnail)})}),(0,g.jsx)(o.Z,{lg:12,className:"".concat(h.tq?"order-3 text-center":""," p-3"),children:(0,g.jsx)(m.Z,{variant:"primary",className:"news-download-button",onClick:function(){return a(null===r||void 0===r?void 0:r.content_files)},children:"Download Newsletter"})})]})})})})})}var p=t(1134),v=t(3355),Z=t(1621),S=t(3786);function _(){var e=(0,p.cI)(),n=e.register,t=e.handleSubmit,u=(0,i.useState)([]),d=(0,s.Z)(u,2),m=d[0],h=d[1],f=(0,i.useState)(0),_=(0,s.Z)(f,2),N=_[0],b=_[1],w=(0,i.useState)(0),C=(0,s.Z)(w,2),P=C[0],y=C[1],E=12,T="newsletter",O=function(e,n,t){h(e),b(n),y(t)},R=function(e){(0,v.rQ)(T,e.Search,N,E).then((function(e){var n=e.data.result;O(n,n.current_page,Math.ceil(n.total/E))}))};(0,i.useEffect)((function(){(0,v.rQ)(T,"",N,E).then((function(e){var n=e.data.result;O(n,n.current_page,Math.ceil(n.total/E))}))}),[N]);var F=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL+"/files/contents/"+n,window.open(t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(S.J,{dataList:m,onSubmit:R,register:n,handleSubmit:t,totalPages:P,currentPage:N,handlePageChange:function(e){b(e),(0,v.rQ)(T,"",e,E).then((function(e){var n=e.data.result;O(n,n.current_page,Math.ceil(n.total/E))}))},CardComponent:function(){var e,n;return 0!==(null===(e=m.data)||void 0===e?void 0:e.length)?(0,g.jsx)(c.Z,{fluid:!0,className:"m-0 p-0",children:(0,g.jsx)(l.Z,{className:"m-0 p-0 d-flex justify-content-center",children:(0,g.jsx)(o.Z,{xs:12,lg:10,children:null===(n=m.data)||void 0===n?void 0:n.map((function(e,n){return(0,g.jsx)(j,{data:e,downloadButton:F,onSubmit:R},(0,x.Z)())}))})})}):(0,g.jsx)(Z.cz,{})}})})}}}]);
//# sourceMappingURL=362.5b0aec83.chunk.js.map