(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,a){e.exports=a(347)},347:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),c=(a(210),a(211),a(15));Object(c.b)();var i=a(17),m=a(34),u=Object(n.createContext)({page:"HOME",setPage:function(){}}),s=Object(c.c)({root:{position:"fixed",width:"100%",height:"100%"}}),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),b=function(){var e=s();return Object(n.useEffect)(function(){if(d){var e=document.getElementById("panorama").style;e.backgroundColor="grey",e.width="100%",e.height="100%",e.position="fixed"}else new window.naver.maps.Panorama("panorama",{panoId:"C9p1IfEWYtci7irXSJRJSg==",zoomControl:!0,size:{width:window.innerWidth,height:window.innerHeight}})},[]),r.a.createElement("div",{className:e.root},r.a.createElement("div",{id:"panorama"}))},p=a(46),E=a.n(p),f=a(47),g=a.n(f),h=a(30),w=a.n(h),O=a(51),v=a.n(O),j=a(116),x=a.n(j),y=a(52),C=a(45),k=a.n(C),N=a(115),S=a.n(N),B=a(75),I=a(19),P=Object(c.c)({root:{margin:"2px",width:"30px",height:"30px",fontSize:"1rem",backgroundColor:function(e){return function(e){var t=e.number;return t<=10?"#fbc400":t<=20?"#69c8f2":t<=30?"#ff7272":t<=40?"#aaa":"#b0d840"}({number:e.number})}}}),H=function(e){var t=e.number,a=P({number:t});return r.a.createElement(I.a,{className:a.root},t)},M=function(e){var t=e.open,a=e.lottoNumbers,n=e.handleClose;return r.a.createElement(I.c,{"aria-labelledby":"result-modal-title",open:t,onClose:n},r.a.createElement(I.f,{id:"result-modal-title"},r.a.createElement(I.g,{container:!0,justify:"center",alignItems:"center"},"\ud48d\uc218\uc9c0\ub9ac \ud328\ud134 \ubd84\uc11d\uacb0\uacfc")),r.a.createElement(I.e,null,a.map(function(e){return r.a.createElement(I.g,{key:e,container:!0,justify:"center",alignItems:"center"},e.map(function(e){return r.a.createElement(H,{key:e,number:e})}))})),r.a.createElement(I.d,null,r.a.createElement(I.b,{variant:"contained",color:"primary",fullWidth:!0,onClick:n},"\ub2eb\uae30")))},z=Object(c.c)({root:{position:"absolute",margin:"auto",left:0,right:0,top:-29}}),W=function(){var e=z(),t=Object(n.useState)([]),a=Object(m.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),u=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{color:"primary",className:"".concat(e.root),"aria-label":"Generate",onClick:function(){var e=Object(y.a)(Array(5)).map(function(){return Object(B.sampleSize)(Object(B.range)(1,46),6).sort(function(e,t){return e-t})});l(e),s(!0)}},r.a.createElement(S.a,{className:"animated infinite pulse",fontSize:"large"})),r.a.createElement(M,{open:u,lottoNumbers:o,handleClose:function(){s(!1)}}))},F=Object(c.c)({positionFixed:{top:"auto",bottom:0}}),J=function(){var e=F(),t=Object(n.useContext)(u);return r.a.createElement(E.a,{position:"fixed",className:e.positionFixed},r.a.createElement(W,null),r.a.createElement(g.a,{showLabels:!0},r.a.createElement(w.a,{label:"\uc7a5\uc18c\uac80\uc0c9",icon:r.a.createElement(v.a,null),onClick:function(){return t.setPage("SEARCH")}}),r.a.createElement(w.a,{disabled:!0}),r.a.createElement(w.a,{label:"\uc774\uc804\ub0b4\uc5ed",icon:r.a.createElement(x.a,null)})))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(J,null))},L=a(29),R=a.n(L),$=a(48),G=a.n($),T=a(33),V=a.n(T),X=a(117),Y=a.n(X),q=Object(c.c)({root:{padding:"2px 4px",display:"flex",alignItems:"center"},input:{marginLeft:8,flex:1},iconButton:{padding:10}}),D=function(){var e=q(),t=Object(n.useContext)(u);return r.a.createElement(R.a,{className:e.root},r.a.createElement(V.a,{className:e.iconButton,"aria-label":"Menu",onClick:function(){return t.setPage("HOME")}},r.a.createElement(Y.a,null)),r.a.createElement(G.a,{className:e.input,placeholder:"\uc7a5\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",inputProps:{"aria-label":"\uc7a5\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}}),r.a.createElement(V.a,{className:e.iconButton,"aria-label":"Search"},r.a.createElement(v.a,null)))},K=function(){var e=Object(n.useState)("HOME"),t=Object(m.a)(e,2),a=t[0],o=t[1];return r.a.createElement(u.Provider,{value:{page:a,setPage:o}},"HOME"===a?r.a.createElement(A,null):r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=Object(i.createMuiTheme)({typography:{useNextVariants:!0}});l.a.render(r.a.createElement(c.a,{theme:Q},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[205,1,2]]]);
//# sourceMappingURL=main.6a30cf40.chunk.js.map