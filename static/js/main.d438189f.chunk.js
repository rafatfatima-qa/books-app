(this["webpackJsonpbooks-app"]=this["webpackJsonpbooks-app"]||[]).push([[0],{36:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(29),r=t.n(n),j=(t(36),t(14)),i=t(16),l=t(6),o=t(15),d=(t(37),t(19)),b=t(7),h=t.p+"static/media/books-logo1.be720760.png",x=t(26),O=t(0);var m=function(){var e=Object(b.f)();return Object(O.jsx)(l.a,{children:Object(O.jsxs)(l.a.Body,{children:[Object(O.jsx)(l.a.Header,{children:Object(O.jsx)("h4",{children:"About This App..."})}),Object(O.jsxs)(l.a.Text,{children:[Object(O.jsx)("h5",{children:"What does this app do?"}),"- This is a class project in which books record has been fetched thru an API and a login page was created.",Object(O.jsx)("hr",{}),Object(O.jsx)("h5",{children:"API used:"}),Object(O.jsx)("href",{children:"https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"}),Object(O.jsx)("hr",{}),Object(O.jsx)("h5",{children:"Technologies used to create this app:"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"HTML"}),Object(O.jsx)("li",{children:"CSS"}),Object(O.jsx)("li",{children:"JavaScript"}),Object(O.jsx)("li",{children:"npm"}),Object(O.jsx)("li",{children:"react"}),Object(O.jsx)("li",{children:"Bootstrap (for coding and implementation on UI)"})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("h5",{children:"Softwares needed to build and run this app:"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"VS Code (as Editor)"}),Object(O.jsx)("li",{children:"Browser (as runtime environment)"}),Object(O.jsx)("li",{children:"npm (as build generator)"}),Object(O.jsx)("li",{children:"react.js"})]}),Object(O.jsx)("hr",{}),Object(O.jsx)(l.a.Text,{children:Object(O.jsx)(i.a,{className:"btn btn-primary",onClick:function(){return e.push("/home")},children:"Back"})})]})]})})},u=t(22),p=t(20);var f=function(){var e=Object(b.f)();return Object(O.jsx)(d.a,{children:Object(O.jsx)(u.a,{className:"justify-content-md-center",children:Object(O.jsx)(p.a,{md:"auto",children:Object(O.jsx)(l.a,{className:"text-center cardBody",children:Object(O.jsxs)(l.a.Body,{className:"cardBody",children:[Object(O.jsx)(x.a,{className:"cardBody",children:Object(O.jsx)(x.a.Image,{className:"cardBody",width:300,height:300,alt:"books-logo",src:h,rounded:!0})}),Object(O.jsxs)(l.a.Text,{className:"cardBody",children:[Object(O.jsx)(i.a,{className:"btn btn-primary",size:"sm",onClick:function(){return e.push("/about")},children:"About"})," ",Object(O.jsx)(i.a,{className:"btn btn-primary",size:"sm",onClick:function(){return e.push("/login")},children:"Login"})]})]})})})})})};var y=function(){var e=Object(b.f)(),c=Object(a.useState)([]),t=Object(j.a)(c,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(u.a,{className:"justify-content-md-center",children:Object(O.jsxs)(p.a,{md:"auto",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Books Record"}),s.map((function(c){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{className:"cardBody",children:[Object(O.jsx)(l.a.Header,{children:Object(O.jsxs)("h4",{className:"cardBody text-center",children:["Book Title: ",c.title]})}),Object(O.jsxs)(l.a.Body,{className:"cardBody",children:[Object(O.jsxs)(l.a.Title,{className:"cardBody",children:["Pages: ",c.pages]}),Object(O.jsxs)(l.a.Title,{className:"cardBody",children:["Release Year: ",c.releaseDate]}),Object(O.jsxs)(l.a.Title,{className:"cardBody",children:["ISBN: ",c.isbn]}),Object(O.jsx)(i.a,{variant:"primary",className:"btn btn-primary",onClick:function(){return e.push("/home")},children:"Back"})]})]})})}))]})})})})};var g=function(){var e=Object(b.f)(),c=Object(a.useState)(""),t=Object(j.a)(c,2),s=t[0],n=t[1],r=Object(a.useState)(""),h=Object(j.a)(r,2),x=h[0],m=h[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(l.a.Body,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsxs)(o.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(o.a.Label,{children:"Email address"}),Object(O.jsx)(o.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:function(e){n(e.target.value)}}),Object(O.jsx)(o.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(o.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(o.a.Label,{children:"Password"}),Object(O.jsx)(o.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:function(e){m(e.target.value)}})]}),Object(O.jsx)(o.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(O.jsx)(o.a.Check,{type:"checkbox",label:"Remember Me"})}),Object(O.jsx)(l.a.Text,{children:Object(O.jsx)(i.a,{variant:"primary",type:"submit",onClick:function(){console.log(s,x),""==s||""==x?alert("please enter valid email and password"):(window.localStorage.setItem(s,x),e.push("/dashboard"))},children:"Submit"})}),Object(O.jsx)(l.a.Text,{children:Object(O.jsx)(i.a,{className:"btn btn-primary",onClick:function(){return e.push("/home")},children:"Back"})})]})})})})})},k=t(18);function B(){return Object(O.jsx)(k.a,{children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{exact:!0,path:"/",children:Object(O.jsx)(f,{})}),Object(O.jsx)(b.a,{exact:!0,path:"/home",children:Object(O.jsx)(f,{})}),Object(O.jsx)(b.a,{exact:!0,path:"/books-app",children:Object(O.jsx)(f,{})}),Object(O.jsx)(b.a,{exact:!0,path:"/Login",children:Object(O.jsx)(g,{})}),Object(O.jsx)(b.a,{exact:!0,path:"/Dashboard",children:Object(O.jsx)(y,{})}),Object(O.jsx)(b.a,{exact:!0,path:"/About",children:Object(O.jsx)(m,{})})]})})}t(44);function N(){return Object(O.jsx)("div",{children:Object(O.jsx)(B,{})})}var v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.d438189f.chunk.js.map