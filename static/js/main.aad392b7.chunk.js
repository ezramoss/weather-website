(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(23),r=a.n(s),i=a(8),d=(a(33),a(64)),j=a(59),o=a(60),l=a(27),h=a(28),b=a(61),m=a(62),u=a(65),O=a(63),x=(a(34),a(25)),y=a.n(x),p=a(26),f=function e(t,a,c,n,s,r,i){Object(p.a)(this,e),this.maxTempC=t,this.minTempC=a,this.maxTempF=c,this.minTempF=n,this.conditions=s,this.icon=r,this.date=i},v=a(0),g=new Array(3),T=1;function w(e){return Object(v.jsxs)(u.a,{className:"mb-3",style:{width:"20rem"},children:[Object(v.jsx)("br",{}),Object(v.jsx)(u.a.Title,{className:"text-center",style:{fontSize:45},children:e.day.date}),Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{src:e.day.icon,style:{height:50},rounded:!0})}),Object(v.jsxs)(u.a.Body,{children:[Object(v.jsx)("h3",{children:e.day.conditions}),Object(v.jsxs)("h3",{children:["High: ",1===T?e.day.maxTempF:e.day.maxTempC]}),Object(v.jsxs)("h3",{children:["Low: ",1===T?e.day.minTempF:e.day.minTempC]})]})]})}var N=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),O=r[0],x=r[1],p=Object(c.useState)(""),N=Object(i.a)(p,2),C=N[0],S=N[1],A=Object(c.useState)([]),F=Object(i.a)(A,2),k=F[0],D=F[1],E=Object(c.useState)(1),L=Object(i.a)(E,2),z=L[0],B=L[1],J=Object(c.useState)("1"),M=Object(i.a)(J,2),W=M[0],q=M[1],G=C;function H(){return 1===a?(T=2,n(2)):(T=1,n(1))}return Object(c.useEffect)((function(){""!==C&&y.a.get("https://weather-website-backend-0be487779640.herokuapp.com/getWeather/"+G).then((function(e){var t=[];console.log(e);for(var a=0;a<e.data.dayArray.length;a++){var c=new Date(e.data.dayArray[a].date);c.setDate(c.getDate()+1),c=c.toLocaleDateString("en-US",{weekday:"long"});var n=new f(e.data.dayArray[a].maxTempC,e.data.dayArray[a].minTempC,e.data.dayArray[a].maxTempF,e.data.dayArray[a].minTempF,e.data.dayArray[a].conditions,e.data.dayArray[a].icon,c);t.push(n)}x(t),g[0]=e.data.name,g[1]=e.data.region,g[2]=e.data.country,D(g),B(1===z?2:1)}))}),[C]),Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{className:"App-header"}),Object(v.jsxs)("body",{children:[Object(v.jsxs)(d.a,{onSubmit:function(e){S(G),e.preventDefault()},children:[Object(v.jsx)(j.a,{className:"mt-3",children:Object(v.jsx)(o.a,{className:"justify-content-center",xs:"auto",children:Object(v.jsx)("h1",{className:"text",children:"Find Your Weather"})})}),Object(v.jsx)(j.a,{className:"mt-3",children:Object(v.jsxs)(o.a,{className:"justify-content-center",xs:"auto",children:[Object(v.jsx)(l.a,{children:Object(v.jsx)(d.a.Control,{type:"text",placeholder:"Enter Location",onChange:function(e){G=e.target.value}})}),Object(v.jsxs)(l.a,{children:[" ",Object(v.jsx)(h.a,{type:"submit",children:"Go"})," "]}),Object(v.jsx)(l.a,{children:Object(v.jsx)(b.a,{children:[{name:"\xb0F",value:"1"},{name:"\xb0C",value:"2"}].map((function(e,t){return Object(v.jsx)(m.a,{id:"radio-".concat(t),type:"radio",variant:t="outline-success",name:"radio",value:e.value,checked:W===e.value,onChange:function(e){q(e.currentTarget.value),H()},children:e.name},Math.random())}))})})]})})]}),Object(v.jsx)(j.a,{className:"mt-5",children:C&&Object(v.jsxs)("div",{children:[Object(v.jsx)(o.a,{className:"justify-content-center",xs:"auto",children:Object(v.jsxs)("h1",{children:[k[0],", ",k[1],", ",k[2]]})}),Object(v.jsx)(o.a,{className:"justify-content-center",children:O.map((function(e){return Object(v.jsx)(w,{day:e})}))})]})}),Object(v.jsx)(u.a.Footer,{className:"custom-footer",style:{backgroundColor:"grey"},children:Object(v.jsx)("p",{children:"This website is a passion project and is not intended for detailed weather reports. Please direct any questions, comments, or concerns to ezramoss4@gmail.com"})})]})]})};r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.aad392b7.chunk.js.map