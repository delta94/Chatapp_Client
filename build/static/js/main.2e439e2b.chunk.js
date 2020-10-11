(this["webpackJsonpchatapp-client"]=this["webpackJsonpchatapp-client"]||[]).push([[0],{117:function(e,a,t){},144:function(e,a,t){e.exports={waiting__wrapper:"style_waiting__wrapper__14uiZ"}},147:function(e,a,t){e.exports=t(249)},153:function(e,a,t){},243:function(e,a){},247:function(e,a,t){},248:function(e,a,t){},249:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),s=t.n(c),l=(t(152),t(153),t(22)),o=t(9),m=t(6),i=t.n(m),u=t(17),p=t(40),h=t(18),d=t(10),f=t(11),g=t(253),E=t(254),b=t(255),v=t(256),N=t(257),x=t(145),k=t(258),w=t(259),y=t(260),O=t(58),C=t(59),j=t(143),_=t.n(j),B=t(79),S=t.n(B),I=_.a.create({headers:{"content-type":"application/json"},paramsSerializer:function(e){return S.a.stringify(e)}});I.interceptors.request.use(function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),n=a,t&&(n.headers.Authorization="Bearer ".concat(t)),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),I.interceptors.response.use((function(e){return e&&e.data?e.data:e}));var T,P=I,q="https://chap-app-server.herokuapp.com",R="https://chap-app-server.herokuapp.com",M=new(function(){function e(){Object(O.a)(this,e),this.API_ENDPOINT="".concat(q,"/api/auth")}return Object(C.a)(e,[{key:"getToken",value:function(e){return P.post("".concat(this.API_ENDPOINT,"/login"),e)}},{key:"checkToken",value:function(e){return P.post("".concat(this.API_ENDPOINT,"/check"),e)}},{key:"register",value:function(e){return P.post("".concat(this.API_ENDPOINT,"/register"),e)}},{key:"update",value:function(e,a){return P.post("".concat(this.API_ENDPOINT,"/update/").concat(a),e)}}]),e}()),L="".concat(q,"/api/rooms"),W=new(function(){function e(){Object(O.a)(this,e)}return Object(C.a)(e,[{key:"createRoom",value:function(e,a){return P.post("".concat(L,"/").concat(e),a)}},{key:"getRooms",value:function(e){return P.get("".concat(L,"/").concat(e))}},{key:"getRoomsByName",value:function(e){return P.get("".concat(L,"/search?q=").concat(e))}}]),e}()),z=new(function(){function e(){Object(O.a)(this,e)}return Object(C.a)(e,[{key:"getMessagesByRoomId",value:function(e){var a="".concat(q,"/api/messages/").concat(e);return P.get(a)}}]),e}()),D=t(15),A=r.a.createContext(),H=function(e){var a=e.children,t=Object(n.useState)(null),c=Object(D.a)(t,2),s=c[0],l=c[1],o=Object(n.useState)(!1),m=Object(D.a)(o,2),i=m[0],u=m[1];return r.a.createElement(A.Provider,{value:{user:s,setUser:l,isLogin:i,setLogin:u}},a)},U=t(105),V=(t(189),r.a.createContext()),F=function(e){var a=e.children;return r.a.createElement(V.Provider,{value:{toast:U.b}},a,r.a.createElement(U.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))},J=t(144),K=t.n(J),G=r.a.createContext(),Z=function(e){var a=e.children,t=Object(n.useState)(!1),c=Object(D.a)(t,2),s=c[0],l=c[1];return r.a.createElement(G.Provider,{value:{isWaiting:s,setIsWaiting:l}},a,s&&r.a.createElement("div",{className:K.a.waiting__wrapper},r.a.createElement("div",{className:"waiting"},r.a.createElement(d.a,{className:"fa-spin fa-5x",icon:f.j}))))},$=function(e,a){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t?e.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):e.error(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},Q=(t(117),t(81)),X=t.n(Q),Y=function(){var e=Object(n.useContext)(A),a=e.isLogin,t=e.setLogin,c=e.setUser,s=Object(n.useContext)(V).toast,m=Object(n.useContext)(G).setIsWaiting,O=h.a().shape({email:h.b().email("Email kh\xf4ng h\u1ee3p l\u1ec7").required("B\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp email"),password:h.b().min(6,"Password ph\u1ea3i c\xf3 \xedt nh\u1ea5t 6 k\xfd t\u1ef1").max(10,"B\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c nh\u1eadp qu\xe1 10 k\xfd t\u1ef1").required("B\u1ea1n b\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp m\u1eadt kh\u1ea9u")}),C=function(){var e=Object(u.a)(i.a.mark((function e(n){var r,l,o,u,p,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.getToken(n);case 3:if("success"!==(r=e.sent).status){e.next=15;break}if(l=r.data,o=l.message,u=l.token,p=l.user,u&&p){e.next=8;break}throw new Error("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i");case 8:$(s,o),localStorage.setItem("token",u),t((function(){return!a})),c((function(){return p})),m((function(){return!1})),e.next=18;break;case 15:if("failed"!==r.status){e.next=18;break}throw h=r.error.message,new Error(h);case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),m((function(){return!1})),$(s,e.t0.message,!1);case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(a){return e.apply(this,arguments)}}(),j=Object(p.a)({initialValues:{email:"",password:""},validationSchema:O,onSubmit:function(e){m((function(){return!0})),C(e)}});return a?r.a.createElement(o.a,{to:{pathname:"/main"}}):r.a.createElement(g.a,{className:"p-0",fluid:!0},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(E.a,{className:"login-form rounded",onSubmit:j.handleSubmit},r.a.createElement("div",{className:"login-image"},r.a.createElement("img",{className:"rounded-circle",src:X.a,alt:"person"})),r.a.createElement(b.a,{className:"my-3 w-100"},r.a.createElement(v.a,null,r.a.createElement(N.a,{addonType:"prepend"},r.a.createElement(x.a,null,r.a.createElement(d.a,{icon:f.a,className:"fa-lg"}))),r.a.createElement(k.a,{type:"text",size:"lg",name:"email",placeholder:"Nh\u1eadp email c\u1ee7a b\u1ea1n",onChange:j.handleChange,value:j.values.email,onBlur:j.handleBlur})),r.a.createElement(w.a,{color:"danger"},j.touched.email&&j.errors.email)),r.a.createElement(b.a,{className:"w-100"},r.a.createElement(v.a,null,r.a.createElement(N.a,{addonType:"prepend"},r.a.createElement(x.a,null,r.a.createElement(d.a,{icon:f.e,className:"fa-lg"}))),r.a.createElement(k.a,{type:"password",size:"lg",name:"password",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n",onChange:j.handleChange,values:j.values.password,onBlur:j.handleBlur})),r.a.createElement(w.a,{color:"danger"},j.touched.password&&j.errors.password)),r.a.createElement(y.a,{className:"my-3",size:"lg",outline:!0,color:"primary"},"\u0110\u0103ng nh\u1eadp"),r.a.createElement("p",{className:"text-white"},"B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n",r.a.createElement("span",null,r.a.createElement(l.b,{className:"text-success",to:"/register"},"T\u1ea1o t\xe0i kho\u1ea3n"))))))},ee=t(266),ae=t(267),te=t(261),ne=function(){var e=Object(n.useContext)(A),a=e.user,t=e.setUser,c=e.setLogin;return a&&r.a.createElement(te.a,{className:"navbar-main"},r.a.createElement("div",{className:"navbar-main__header"},r.a.createElement("div",{className:"rounded-circle navbar-main__header__avatar",style:{backgroundImage:"url('".concat(a.avatar,"')")}}),r.a.createElement("p",{className:"font-weight-bold mt-1"},a.name)),r.a.createElement("ul",{className:"list-unstyled navbar-main__menu"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/main/chat"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(d.a,{icon:f.d,className:"fa-lg"})),"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/main/setting"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(d.a,{icon:f.c,className:"fa-lg"})),"Setting"))),r.a.createElement("div",{className:"navbar-main__footer"},r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),localStorage.removeItem("token"),t((function(){return null})),c((function(){return!1}))}},r.a.createElement("span",null,r.a.createElement(d.a,{icon:f.i,className:"fa-lg"})),"Log out")))},re=t(82),ce=t.n(re),se=t(4),le=t.n(se),oe=t(83),me=t(268),ie=t(262),ue=t(263),pe=t(264),he=t(265),de=function(e){var a=e.setRooms,t=e.user,c=Object(n.useState)(!1),s=Object(D.a)(c,2),l=s[0],o=s[1],m=function(){return o(!l)},g=Object(n.useContext)(V).toast,v=Object(n.useContext)(G).setIsWaiting,N=h.a().shape({name:h.b().min(3,"T\xean ph\xf2ng ph\u1ea3i nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1").max(30,"T\xean ph\xf2ng kh\xf4ng qu\xe1 30 k\xfd t\u1ef1").required("B\u1ea1n ph\u1ea3i nh\u1eadp t\xean ph\xf2ng")}),x=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,c,s,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v((function(){return!0})),e.prev=1,e.next=4,W.createRoom(t,n);case 4:if("success"!==(r=e.sent).status){e.next=15;break}if(c=r.data,s=c.room,l=c.message,s&&l){e.next=9;break}throw new Error("C\xf3 l\u1ed7i x\u1ea3y ra");case 9:v((function(){return!1})),m(),a((function(e){return[].concat(Object(oe.a)(e),[s])})),$(g,l),e.next=18;break;case 15:if("failed"!==r.status){e.next=18;break}throw o=r.error.message,new Error(o);case 18:e.next=25;break;case 20:e.prev=20,e.t0=e.catch(1),v((function(){return!1})),m(),$(g,e.t0.message,!1);case 25:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(a,t){return e.apply(this,arguments)}}(),w=Object(p.a)({initialValues:{name:""},validationSchema:N,onSubmit:function(e){x(t._id,e)}});return r.a.createElement("div",{className:"chat-containt__header"},r.a.createElement("h4",null,"Chats"),r.a.createElement(y.a,{onClick:m},r.a.createElement("span",{className:"mr-2"},r.a.createElement(d.a,{icon:f.g})),"Create New Room"),r.a.createElement(me.a,{isOpen:l,toggle:m},r.a.createElement(ie.a,{toggle:m},"T\u1ea1o ph\xf2ng"),r.a.createElement(ue.a,null,r.a.createElement(E.a,{onSubmit:w.handleSubmit},r.a.createElement(b.a,null,r.a.createElement(pe.a,{for:"name"},"T\xean ph\xf2ng"),r.a.createElement(k.a,{type:"text",name:"name",id:"name",placeholder:"Nh\u1eadp t\xean ph\xf2ng",onChange:w.handleChange,value:w.values.name,onBlur:w.handleBlur}),r.a.createElement("p",{className:"text-danger"},w.touched.name&&w.errors.name)))),r.a.createElement(he.a,null,r.a.createElement(y.a,{color:"primary",onClick:w.handleSubmit},"T\u1ea1o"),r.a.createElement(y.a,{color:"danger",onClick:m},"H\u1ee7y"))))},fe=function(e){var a=e.onSearch,t=e.search,n=e.setSearch;return r.a.createElement("div",{className:"chat-containt__input-group my-3"},r.a.createElement(d.a,{icon:f.h}),r.a.createElement(k.a,{type:"text",name:"search",placeholder:"T\xecm ki\u1ebfm",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return a(e,t)}}))},ge=function(e){var a=e.rooms,t=e.children;return r.a.createElement("ul",{className:"list-unstyled rooms"},a.map(t))},Ee=function(){var e=Object(n.useContext)(A).user,a=Object(n.useContext)(V).toast,t=Object(n.useContext)(G).setIsWaiting,c=Object(n.useState)([]),s=Object(D.a)(c,2),o=s[0],m=s[1],p=Object(n.useState)([]),h=Object(D.a)(p,2),d=h[0],f=h[1],g=Object(n.useState)(""),E=Object(D.a)(g,2),b=E[0],v=E[1],N=function(){var e=Object(u.a)(i.a.mark((function e(n){var r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.getRooms(n);case 3:if(r=e.sent,c=r.status,s=r.data.rooms,"success"===c&&s){e.next=8;break}throw new Error("C\xf3 l\u1ed7i x\u1ea3y ra");case 8:t((function(){return!1})),m((function(){return s})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),t((function(){return!1})),$(a,"C\xf3 l\u1ed7i x\u1ea3y ra, xin vui l\xf2ng th\u1eed l\u1ea1i sau!",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){t((function(){return!0})),N(e._id)}),[]);var x=function(){var e=Object(u.a)(i.a.mark((function e(n,r){var c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==n.which&&13!==n.keyCode||!r){e.next=19;break}return t((function(){return!0})),e.prev=2,e.next=5,W.getRoomsByName(r);case 5:if(c=e.sent,s=c.status,l=c.data.rooms,"success"===s&&l){e.next=10;break}throw new Error("C\xf3 l\u1ed7i x\u1ea3y ra");case 10:t((function(){return!1})),f((function(){return l})),v(""),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),t((function(){return!1})),$(a,"C\xf3 l\u1ed7i x\u1ea3y ra, xin vui l\xf2ng th\u1eed l\u1ea1i sau!",!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(a,t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"chat-containt h-100"},r.a.createElement(de,{setRooms:m,user:e}),r.a.createElement(fe,{onSearch:x,search:b,setSearch:v}),r.a.createElement(y.a,{className:le()({"d-none":!d.length}),outline:!0,color:"danger",onClick:function(){return f([])}},"Reset"),r.a.createElement(ce.a,{className:"rooms-scroll"},r.a.createElement(ge,{rooms:0!==d.length?d:o},(function(e,a){return r.a.createElement("li",{className:"room",key:a},r.a.createElement(l.b,{to:"/main/chat/messages?roomId=".concat(e._id,"&roomName=").concat(e.name)},e.name))}))))},be=t(146),ve=t.n(be),Ne=t(104),xe=t.n(Ne),ke=function(e){var a=e.roomName;return r.a.createElement("div",{className:"chat-messages__header"},r.a.createElement("div",{className:"chat-messages__person"},r.a.createElement("h4",null,a)))},we=function(e){var a=e.messages,t=e.children;return r.a.createElement("ul",{className:"list-unstyled chat-messages-list"},a.map(t))},ye=function(e){var a=e.sendMessage,t=e.message,n=e.setMessage;return r.a.createElement(E.a,{className:"chat-messages__input"},r.a.createElement(k.a,{type:"textarea",name:"message",placeholder:"G\u1edfi tin nh\u1eafn...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){13!==e.which&&13!==e.keyCode||!t||a(e)}}),r.a.createElement(y.a,{className:"chat-messages__input__btn",type:"button",onClick:function(e){return a(e)}},r.a.createElement(d.a,{icon:f.f,className:"fa-sm"})))},Oe=function(e){var a=e.location,t=S.a.parse(a.search),c=t.roomId,s=t.roomName,l=Object(n.useState)([]),o=Object(D.a)(l,2),m=o[0],p=o[1],h=Object(n.useState)(""),g=Object(D.a)(h,2),E=g[0],b=g[1],v=Object(n.useContext)(A).user,N=Object(n.useContext)(V).toast,x=Object(n.useContext)(G).setIsWaiting,k=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.getMessagesByRoomId(c);case 3:if(a=e.sent,t=a.status,n=a.data.messages,"success"===t&&n){e.next=8;break}throw new Error("C\xf3 l\u1ed7i x\u1ea3y ra");case 8:return x((function(){return!1})),p((function(){return n})),T.emit("join",{roomId:c,userId:v._id},(function(e){return!e||$(N,"C\xf3 l\u1ed7i x\u1ea3y ra!",!1)})),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",$(N,"C\xf3 l\u1ed7i x\u1ea3y ra!",!1));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return(T=ve()(R)).on("event",(function(e){console.log(e)})),T.on("message",(function(e){p((function(a){return[].concat(Object(oe.a)(a),[e])}))})),x((function(){return!0})),k(),function(){T.emit("disconnect",{roomId:c,userName:v.name}),T.off()}}),[R,a.search]);return r.a.createElement("div",{className:"chat-messages h-100"},r.a.createElement(ke,{roomName:s}),r.a.createElement(ce.a,{className:"messages-scroll"},r.a.createElement(we,{messages:m},(function(e,a){return e.userId===v._id?r.a.createElement("li",{className:"chat-message-me",key:a},r.a.createElement("div",{className:"chat-message-me__text"},r.a.createElement("p",null,e.text),r.a.createElement("span",null,xe()(e.dateCreate).fromNow())),r.a.createElement(d.a,{icon:f.b,className:"fa-sm"})):r.a.createElement("li",{className:"chat-message-friend",key:a},r.a.createElement("div",{className:"chat-message-friend__infor"},r.a.createElement("img",{className:"rounded-circle",src:"admin"===e.user.name?"https://picsum.photos/200":e.user.avatar,alt:"Person"}),r.a.createElement("small",{className:"text-muted"},e.user.name)),r.a.createElement("div",{className:"chat-message-friend__text"},r.a.createElement("p",null,e.text),r.a.createElement("span",null,xe()(e.dateCreate).fromNow())))}))),r.a.createElement(ye,{sendMessage:function(e){e.preventDefault(),T.emit("sendMessage",{userId:v._id,roomId:c,text:E},(function(e){e?console.log("C\xf3 l\u1ed7i x\u1ea3y ra"):b("")}))},message:E,setMessage:b}))},Ce=function(){return r.a.createElement(g.a,{className:"h-100"},r.a.createElement(ee.a,{className:"h-100"},r.a.createElement(ae.a,{className:"d-none d-lg-block",lg:"4"},r.a.createElement(Ee,null)),r.a.createElement(ae.a,{sm:"12",lg:"8"},r.a.createElement(o.b,{path:"/main/chat/messages",component:Oe}))))},je=function(){var e=Object(n.useState)(!1),a=Object(D.a)(e,2),t=a[0],c=a[1],s=Object(n.useContext)(A).isLogin,l=Object(n.useContext)(V).toast,m=Object(n.useContext)(G).setIsWaiting,O=h.a().shape({email:h.b().email("Email kh\xf4ng h\u1ee3p l\u1ec7").required("B\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp email"),password:h.b().min(6,"Password ph\u1ea3i c\xf3 \xedt nh\u1ea5t 6 k\xfd t\u1ef1").max(10,"B\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c nh\u1eadp qu\xe1 10 k\xfd t\u1ef1").required("B\u1ea1n b\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp m\u1eadt kh\u1ea9u"),name:h.b().max(30,"B\u1ea1n kh\xf4ng \u0111\u01b0\u1ee3c nh\u1eadp d\xe0i qu\xe1 30 k\xfd t\u1ef1").required("B\u1ea1n b\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp t\xean")}),C=function(){var e=Object(u.a)(i.a.mark((function e(a){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.register(a);case 3:if("success"!==(n=e.sent).status){e.next=11;break}r=n.data.message,m((function(){return!1})),c((function(){return!t})),$(l,r),e.next=14;break;case 11:if("failed"!==n.status){e.next=14;break}throw s=n.error.message,new Error(s);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),m((function(){return!1})),$(l,e.t0.message,!1);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(a){return e.apply(this,arguments)}}(),j=Object(p.a)({initialValues:{email:"",password:"",name:""},validationSchema:O,onSubmit:function(e){m((function(){return!0})),C(e)}});return t?r.a.createElement(o.a,{to:{pathname:"/"}}):!s&&r.a.createElement(g.a,{className:"p-0",fluid:!0},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(E.a,{className:"login-form rounded",onSubmit:j.handleSubmit},r.a.createElement("div",{className:"login-image"},r.a.createElement("img",{className:"rounded-circle",src:X.a,alt:"person"})),r.a.createElement(b.a,{className:"my-3 w-100"},r.a.createElement(v.a,null,r.a.createElement(N.a,{addonType:"prepend"},r.a.createElement(x.a,null,r.a.createElement(d.a,{icon:f.a,className:"fa-lg"}))),r.a.createElement(k.a,{type:"text",size:"lg",name:"email",placeholder:"Nh\u1eadp email c\u1ee7a b\u1ea1n",onChange:j.handleChange,value:j.values.email,onBlur:j.handleBlur})),r.a.createElement(w.a,{color:"danger"},j.touched.email&&j.errors.email)),r.a.createElement(b.a,{className:"mb-3 w-100"},r.a.createElement(v.a,null,r.a.createElement(N.a,{addonType:"prepend"},r.a.createElement(x.a,null,r.a.createElement(d.a,{icon:f.k,className:"fa-lg"}))),r.a.createElement(k.a,{type:"text",size:"lg",name:"name",placeholder:"Nh\u1eadp t\xean c\u1ee7a b\u1ea1n",onChange:j.handleChange,value:j.values.name,onBlur:j.handleBlur})),r.a.createElement(w.a,{color:"danger"},j.touched.name&&j.errors.name)),r.a.createElement(b.a,{className:"w-100"},r.a.createElement(v.a,null,r.a.createElement(N.a,{addonType:"prepend"},r.a.createElement(x.a,null,r.a.createElement(d.a,{icon:f.e,className:"fa-lg"}))),r.a.createElement(k.a,{type:"password",size:"lg",name:"password",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n",onChange:j.handleChange,values:j.values.password,onBlur:j.handleBlur})),r.a.createElement(w.a,{color:"danger"},j.touched.password&&j.errors.password)),r.a.createElement(y.a,{className:"my-3",size:"lg",outline:!0,color:"primary"},"\u0110\u0103ng k\xfd"))))},_e=(t(247),function(){return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("div",{className:"page-inner"},r.a.createElement(ne,null),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/main/chat"},r.a.createElement(Ce,null)),r.a.createElement(o.b,{path:"/main/setting",component:Be})))))}),Be=(t(248),function(){var e=Object(n.useContext)(A),a=e.user,t=e.setUser,c=Object(n.useContext)(V).toast,s=Object(n.useContext)(G).setIsWaiting,l=Object(n.useState)(null),o=Object(D.a)(l,2),m=o[0],d=o[1],f=h.a().shape({name:h.b().min(3,"T\xean ph\u1ea3i nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1").max(30,"T\xean kh\xf4ng \u0111\u01b0\u1ee3c qu\xe1 30 k\xfd t\u1ef1").required("B\u1ea1n ph\u1ea3i nh\u1eadp t\xean"),email:h.b().email("B\u1ea1n nh\u1eadp sai \u0111\u1ecbnh d\u1ea1ng").required("B\u1ea1n ph\u1ea3i nh\u1eadp email"),password:h.b().min(3,"M\u1eadt kh\u1ea9u ph\u1ea3i nhi\u1ec1u h\u01a1n 3 k\xfd t\u1ef1").max(10,"M\u1eadt kh\u1ea9u kh\xf4ng qu\xe1 10 k\xfd t\u1ef1")}),v=function(){var e=Object(u.a)(i.a.mark((function e(a,n){var r,l,o,m,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.update(a,n);case 3:if("success"!==(r=e.sent).status){e.next=13;break}if(l=r.data,o=l.user,m=l.message,o&&m){e.next=8;break}throw new Error("C\xf3 l\u1ed7i x\u1ea3y ra");case 8:s((function(){return!1})),$(c,m),t((function(){return o})),e.next=16;break;case 13:if("failed"!==r.status){e.next=16;break}throw u=r.error.message,new Error(u);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),s((function(){return!1})),$(c,e.t0.message,!1);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(a,t){return e.apply(this,arguments)}}(),N=Object(p.a)({initialValues:{name:a.name,email:a.email,password:""},validationSchema:f,onSubmit:function(){var e=new FormData;e.append("name",N.values.name),e.append("email",N.values.email),e.append("password",N.values.password),e.append("avatar",m),s((function(){return!0})),v(e,a._id)}});return r.a.createElement("div",{className:"setting-wrapper h-100"},r.a.createElement(g.a,{className:"h-100 d-flex flex-column"},r.a.createElement("h4",{className:"mb-3"},"C\xe0i \u0111\u1eb7t"),r.a.createElement(ee.a,{className:"flex-grow-1"},r.a.createElement(ae.a,{sm:"12"},r.a.createElement("div",{className:"setting-personInformation border"},r.a.createElement("h4",{className:"border-bottom bg-light"},"Th\xf4ng tin c\xe1 nh\xe2n"),r.a.createElement(E.a,{className:"p-5 flex-grow-1",onSubmit:N.handleSubmit},r.a.createElement(b.a,{className:"row mb-3"},r.a.createElement(pe.a,{for:"name",className:"col-sm-2 col-form-label"},"T\xean"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(k.a,{type:"text",id:"name",name:"name",value:N.values.name,onChange:N.handleChange,onBlur:N.handleBlur}),r.a.createElement(w.a,{color:"danger"},N.touched.name&&N.errors.name))),r.a.createElement(b.a,{className:"row mb-3"},r.a.createElement(pe.a,{for:"email",className:"col-sm-2 col-form-label"},"Email"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(k.a,{type:"text",id:"email",name:"email",value:N.values.email,onChange:N.handleChange,onBlur:N.handleBlur}),r.a.createElement(w.a,{color:"danger"},N.touched.email&&N.errors.email))),r.a.createElement(b.a,{className:"row mb-3"},r.a.createElement(pe.a,{for:"password",className:"col-sm-2 col-form-label"},"M\u1eadt kh\u1ea9u m\u1edbi"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(k.a,{type:"password",id:"password",name:"password",value:N.values.password,onChange:N.handleChange,onBlur:N.handleBlur}),r.a.createElement(w.a,{color:"danger"},N.touched.password&&N.errors.password))),r.a.createElement(b.a,{className:"row mb-3"},r.a.createElement("p",{className:"col-sm-2 col-form-label"},"\u1ea2nh \u0111\u1ea1i di\u1ec7n"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement(pe.a,{for:"avatar",className:"avatar__label"},"Ch\u1ecdn file"),r.a.createElement(k.a,{type:"file",id:"avatar",name:"avatar",onChange:function(e){return d(e.target.files[0])},hidden:!0}),r.a.createElement("span",{className:"ml-2"},m?m.name:"B\u1ea1n ch\u01b0a ch\u1ecdn \u1ea3nh"))),r.a.createElement(b.a,{className:"row"},r.a.createElement("div",{className:"col-sm-10 offset-sm-2"},r.a.createElement(y.a,{className:"mr-2",type:"reset",color:"danger"},"H\u1ee7y"),r.a.createElement(y.a,{type:"submit",color:"primary"},"C\u1eadp nh\u1eadt")))))))))}),Se=function(e){var a=e.path,t=e.component,c=Object(n.useContext)(A),s=c.isLogin,l=c.setLogin,m=c.setUser,p=Object(n.useContext)(V).toast;return function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))||s){e.next=17;break}return e.prev=2,e.next=5,M.checkToken({token:a});case 5:if(t=e.sent,n=t.status,r=t.data.user,"success"===n&&r){e.next=10;break}throw new Error;case 10:l((function(){return!0})),m((function(){return r})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),$(p,"C\xf3 l\u1ed7i x\u1ea3y ra!",!1);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}()(),r.a.createElement(o.b,{path:a,render:function(){return s?r.a.createElement(t,null):r.a.createElement(o.a,{to:{pathname:"/"}})}})},Ie=function(){return r.a.createElement(l.a,null,r.a.createElement(H,null,r.a.createElement(Z,null,r.a.createElement(F,null,r.a.createElement(o.b,{path:"/",exact:!0,component:Y}),r.a.createElement(o.b,{path:"/register",exact:!0,component:je}),r.a.createElement(Se,{path:"/main",component:_e})))))};var Te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){e.exports=t.p+"static/media/person.6eadf5d6.svg"}},[[147,1,2]]]);
//# sourceMappingURL=main.2e439e2b.chunk.js.map