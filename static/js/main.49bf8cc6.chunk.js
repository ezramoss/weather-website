(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(23),i=a.n(s),r=a(8),j=(a(33),a(64)),d=a(59),o=a(60),m=a(27),l=a(28),h=a(61),b=a(62),x=a(65),u=a(63),O=(a(34),a(25)),p=a.n(O),y=a(26),f=function e(t,a,c,n,s,i,r){Object(y.a)(this,e),this.maxTempC=t,this.minTempC=a,this.maxTempF=c,this.minTempF=n,this.conditions=s,this.icon=i,this.date=r},T=a(0),v=new Array(3),g=1;function C(e){return Object(T.jsxs)(x.a,{className:"mb-3",style:{width:"20rem"},children:[Object(T.jsx)("br",{}),Object(T.jsx)(x.a.Title,{className:"text-center",style:{fontSize:45},children:e.dayName}),Object(T.jsx)("div",{children:Object(T.jsx)(u.a,{src:e.icon,style:{height:50},rounded:!0})}),Object(T.jsxs)(x.a.Body,{children:[Object(T.jsx)("h3",{children:e.conditions}),Object(T.jsxs)("h3",{children:["High: ",1===g?e.maxTempF:e.maxTempC]}),Object(T.jsxs)("h3",{children:["Low: ",1===g?e.minTempF:e.minTempC]})]})]})}var w=function(){var e=Object(c.useState)(1),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(r.a)(s,2),u=i[0],O=i[1],y=Object(c.useState)(""),w=Object(r.a)(y,2),N=w[0],F=w[1],S=Object(c.useState)([]),A=Object(r.a)(S,2),k=A[0],D=A[1],E=Object(c.useState)(1),L=Object(r.a)(E,2),z=L[0],B=L[1],J=Object(c.useState)("1"),M=Object(r.a)(J,2),W=M[0],q=M[1],G=N;function H(){1===a?(g=2,n(2)):(g=1,n(1))}return Object(c.useEffect)((function(){""!==N&&p.a.get("https://weather-website-backend-0be487779640.herokuapp.com/getWeather/"+G).then((function(e){var t=[];console.log(e);for(var a=0;a<e.data.dayArray.length;a++){var c=new Date(e.data.dayArray[a].date);c.setDate(c.getDate()+1),c=c.toLocaleDateString("en-US",{weekday:"long"});var n=new f(e.data.dayArray[a].maxTempC,e.data.dayArray[a].minTempC,e.data.dayArray[a].maxTempF,e.data.dayArray[a].minTempF,e.data.dayArray[a].conditions,e.data.dayArray[a].icon,c);t.push(n)}O(t),v[0]=e.data.name,v[1]=e.data.region,v[2]=e.data.country,D(v),B(1===z?2:1)}))}),[N]),Object(T.jsxs)("div",{children:[Object(T.jsx)("header",{className:"App-header"}),Object(T.jsxs)("body",{children:[Object(T.jsxs)(j.a,{onSubmit:function(e){F(G),e.preventDefault()},children:[Object(T.jsx)("div",{className:"mt-3",children:Object(T.jsx)(d.a,{children:Object(T.jsx)(o.a,{className:"justify-content-center",children:Object(T.jsx)(m.a,{xs:"auto",children:Object(T.jsx)("h1",{className:"text",children:"Find Your Weather"})})})})}),Object(T.jsx)("div",{className:"mt-3",children:Object(T.jsx)(d.a,{children:Object(T.jsxs)(o.a,{className:"justify-content-center",children:[Object(T.jsx)(m.a,{xs:"auto",children:Object(T.jsx)(j.a.Control,{type:"text",placeholder:"Enter Location",onChange:function(e){G=e.target.value}})}),Object(T.jsx)(m.a,{xs:"auto",children:Object(T.jsx)(l.a,{type:"submit",children:"Go"})}),Object(T.jsx)(m.a,{xs:"auto",children:Object(T.jsx)(h.a,{children:[{name:"\xb0F",value:"1"},{name:"\xb0C",value:"2"}].map((function(e,t){return Object(T.jsx)(b.a,{id:"radio-".concat(t),type:"radio",variant:t="outline-success",name:"radio",value:e.value,checked:W===e.value,onChange:function(e){q(e.currentTarget.value),H()},children:e.name},Math.random())}))})})]})})})]}),Object(T.jsx)("div",{className:"mt-5",children:Object(T.jsx)(d.a,{children:N&&Object(T.jsxs)("div",{children:[Object(T.jsx)(o.a,{className:"justify-content-center",children:Object(T.jsx)(m.a,{xs:"auto",children:Object(T.jsxs)("h1",{children:[k[0],", ",k[1],", ",k[2]]})})}),Object(T.jsx)(o.a,{className:"justify-content-center",children:u.map((function(e){return Object(T.jsx)(C,{dayName:e.date,conditions:e.conditions,icon:e.icon,maxTempC:e.maxTempC,minTempC:e.minTempC,maxTempF:e.maxTempF,minTempF:e.minTempF})}))})]})})}),Object(T.jsx)(x.a.Footer,{className:"custom-footer",style:{backgroundColor:"grey"},children:Object(T.jsx)("p",{children:"This website is a passion project and is not intended for detailed weather reports. Please direct any questions, comments, or concerns to ezramoss4@gmail.com"})})]})]})};i.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(w,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.49bf8cc6.chunk.js.map