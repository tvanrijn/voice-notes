(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,n){t.exports=n(86)},40:function(t,e){},42:function(t,e){},78:function(t,e,n){},80:function(t,e,n){},82:function(t,e,n){},84:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(24),o=n.n(c),l=n(25),s=n(26),r=n(29),d=n(27),m=n(30),u=n(28),C=n.n(u),h=(n(78),n(80),function(t){var e=t.onListenClick;return i.a.createElement("div",{className:"micControls"},i.a.createElement("button",{className:"btn btn-danger btn-round",onClick:e},"Listen to microphone"),i.a.createElement("img",{id:"mic",src:"favicon.ico",alt:"",height:"32",width:"32"}),i.a.createElement("button",{id:"stop",className:"btn btn-primary btn-round"},"Pause recording"))}),b=(n(82),function(t){var e=t.showNotesText,n=t.addUserInput;return i.a.createElement("textarea",{id:"notes",placeholder:"Your notes",value:e,onChange:n})}),p=(n(84),function(t){var e=t.onDateClick,n=t.onCopyClick,a=t.onClearClick;return i.a.createElement("div",{className:"notesControls"},i.a.createElement("button",{className:"btn btn-info btn-round",onClick:e},i.a.createElement("i",{className:"fa fa-calendar"}),"Add current date-time"),i.a.createElement("button",{className:"btn btn-info btn-round",onClick:n,"data-toggle":"popover","data-placement":"top","data-content":"Copied!"},i.a.createElement("i",{className:"fa fa-copy"}),"Copy"),i.a.createElement("button",{className:"btn btn-info btn-round",onClick:a},i.a.createElement("i",{className:"fa fa-remove"}),"Clear"))}),W=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(r.a)(this,Object(d.a)(e).call(this))).state={text:"",copySuccess:""},t}return Object(m.a)(e,t),Object(s.a)(e,[{key:"onListenClick",value:function(){var t=C()({access_token:"eyJraWQiOiIyMDE3MTEyOSIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWJiZmQ2Njg4LWJhMjEtNGMyNy1iY2VjLWE1NWNlMjk4MDdjMyIsImlkIjoiaWFtLVNlcnZpY2VJZC1iYmZkNjY4OC1iYTIxLTRjMjctYmNlYy1hNTVjZTI5ODA3YzMiLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1iYmZkNjY4OC1iYTIxLTRjMjctYmNlYy1hNTVjZTI5ODA3YzMiLCJzdWIiOiJTZXJ2aWNlSWQtYmJmZDY2ODgtYmEyMS00YzI3LWJjZWMtYTU1Y2UyOTgwN2MzIiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJ1bmlxdWVfaW5zdGFuY2VfY3JucyI6WyJjcm46djE6Ymx1ZW1peDpwdWJsaWM6c3BlZWNoLXRvLXRleHQ6dXMtc291dGg6YS80Nzg3YzcyOTA5MjU0YzBiOTI5YWU1NTI3MjhmNzE2ZTo4YzI3YWQ1NC0xYWEzLTRlNDUtOWUzMS05YjBiNDgxN2YxNTU6OiJdLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI0Nzg3YzcyOTA5MjU0YzBiOTI5YWU1NTI3MjhmNzE2ZSJ9LCJpYXQiOjE1NDk5ODg3MzUsImV4cCI6MTU0OTk5MjMzNSwiaXNzIjoiaHR0cHM6Ly9pYW0uYmx1ZW1peC5uZXQvaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.Qh8wtTBB7Wu0TQy8MDIRc90P1mGfE3Toi1DMMAG5uZwTKZa-0axR5Qb28zzj3dCL6fJsWl1bv6RXI-1jWlRNnqXCM-MTuuelynV6t9PSk93CgNnKWg6XuhxhWQpnBG_7hmqoXZcEaJ1L_UPLe5fifSCYwWsUR5Rk0oVgXoGUYbwgP5GJ2gyjmjCcVJXfmOG0DB3Us9FdtjTkoZ2c4k4RH8l_lQSJPfKyDFyRTvd3j9L_AW-Seb7QGAjFh7cGj0uG8kQ9QgjQXqHM1bYttw2KRpycy4Eie_tD-aSWGVAd_trQ2FKvCSjvELtl72FbrcVBXrNPC7U1t0cSn527GhWzXg"}),e=document.getElementById("mic");e.classList.add("active"),t.setEncoding("utf8"),t.on("data",function(t){var e=this.state.text.concat(t);this.setState({text:e})}.bind(this)),t.on("error",function(t){console.log(t)}),document.querySelector("#stop").addEventListener("click",function(){t.stop(),e.classList.remove("active")})}},{key:"addUserInput",value:function(t){this.setState({text:t.target.value})}},{key:"onCopyClick",value:function(){var t=document.createElement("textarea");t.innerText=this.state.text,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove();this.setState({copySuccess:"Copied!"})}},{key:"onDateClick",value:function(){var t=((new Date).toLocaleString()+": ").concat(this.state.text);this.setState({text:t})}},{key:"onClearClick",value:function(){this.setState({text:""})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{onListenClick:this.onListenClick.bind(this)}),i.a.createElement(b,{showNotesText:this.state.text,addUserInput:this.addUserInput.bind(this)}),i.a.createElement(p,{onDateClick:this.onDateClick.bind(this),onCopyClick:this.onCopyClick.bind(this),onClearClick:this.onClearClick.bind(this)}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.a8ca2c08.chunk.js.map