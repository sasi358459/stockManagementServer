"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8727],{8727:(q,g,c)=>{c.r(g),c.d(g,{ChatApp:()=>S});var o=c(603),t=c(4650),l=c(6895),m=c(1235),u=c(4655);let C=(()=>{class n{constructor(e,s,a){this.location=e,this._chatAppService=s,this._loginService=a}ngOnInit(){this.loggedInUser=this._loginService.getLocalStorage("user");const e=this.location.getState();this.appearedUser=e.userData,this._chatAppService.socket.emit("chatting-users",{loggedInUser:this.loggedInUser,onChatUser:this.appearedUser}),this._chatAppService.socket.on("notification",a=>{console.log(a)})}onSend(e){const s={from:this.loggedInUser,to:this.appearedUser,message:e,time:Date.now().toString()};this._chatAppService.socket.emit("message",s),this._chatAppService.socket.on("notification",a=>{a.error||(this.messageData=a.body,console.log(this.messageData))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.Ye),t.Y36(m.O),t.Y36(u.S))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chat-message"]],decls:23,vars:3,consts:[[1,"cardStyle","m-0"],["slot","start"],["alt","Silhouette of a person's head","src","https://ionicframework.com/docs/img/demos/avatar.svg"],["lines","full"],[1,"m-0"],["slot","end"],[1,"d-flex","align-items-center"],["slot","start","type","text","placeholder","Enter message here....."],["message",""],["color","light",3,"click"],["slot","end","name","send"]],template:function(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"ion-card",0)(1,"ion-item")(2,"ion-avatar",1),t._UZ(3,"img",2),t.qZA(),t.TgZ(4,"ion-label")(5,"ion-card-title"),t._uU(6),t.ALo(7,"titlecase"),t.qZA()()(),t.TgZ(8,"ion-list")(9,"ion-item",3)(10,"ion-label")(11,"h3",4),t._uU(12,"Text Item"),t.qZA(),t.TgZ(13,"p",4),t._uU(14,"0.00 am"),t.qZA()()(),t.TgZ(15,"ion-item",3)(16,"ion-label",5),t._uU(17,"Mega Man X"),t.qZA()()(),t.TgZ(18,"div",6),t._UZ(19,"ion-textarea",7,8),t.TgZ(21,"ion-button",9),t.NdJ("click",function(){t.CHM(a);const h=t.MAs(20);return t.KtG(s.onSend(h.value))}),t._UZ(22,"ion-icon",10),t.qZA()()()}2&e&&(t.xp6(6),t.Oqu(t.lcZ(7,1,s.appearedUser.userName)))},dependencies:[o.BJ,o.YG,o.PM,o.Dq,o.gu,o.Ie,o.Q$,o.q_,o.g2,o.j9,l.rS]}),n})();var r=c(1635);const d=function(){return["active"]};let Z=(()=>{class n{constructor(e,s){this.router=e,this._chatService=s}ngOnInit(){this._chatService.connectToSocket()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.F0),t.Y36(m.O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chat-app"]],decls:13,vars:4,consts:[[1,"h-100"],[1,"d-flex","justify-content-around","align-items-center","w-100",2,"position","fixed","bottom","0"],["routerLink","chats",1,"d-flex","justify-content-center","flex-column","align-items-center",3,"routerLinkActive"],["name","chatbubbles"],["routerLink","contacts",1,"d-flex","justify-content-center","flex-column","align-items-center",3,"routerLinkActive"],["name","people"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div"),t._UZ(2,"router-outlet"),t.qZA(),t.TgZ(3,"div")(4,"div",1)(5,"div",2),t._UZ(6,"ion-icon",3),t.TgZ(7,"span"),t._uU(8,"Chats"),t.qZA()(),t.TgZ(9,"div",4),t._UZ(10,"ion-icon",5),t.TgZ(11,"span"),t._uU(12," Contacts "),t.qZA()()()()()),2&e&&(t.xp6(5),t.Q6J("routerLinkActive",t.DdM(2,d)),t.xp6(4),t.Q6J("routerLinkActive",t.DdM(3,d)))},dependencies:[o.gu,o.YI,r.lC,r.rH,r.Od],styles:[".active[_ngcontent-%COMP%]{color:#00f}"]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chats"]],decls:28,vars:0,consts:[["slot","start"],["alt","Silhouette of mountains","src","https://ionicframework.com/docs/img/demos/thumbnail.svg"],["lines","none"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t._uU(3,"Card Title"),t.qZA(),t.TgZ(4,"ion-card-subtitle"),t._uU(5,"Card Subtitle"),t.qZA()(),t.TgZ(6,"ion-card-content")(7,"ion-list")(8,"ion-item")(9,"ion-thumbnail",0),t._UZ(10,"img",1),t.qZA(),t.TgZ(11,"ion-label"),t._uU(12,"Item"),t.qZA()(),t.TgZ(13,"ion-item")(14,"ion-thumbnail",0),t._UZ(15,"img",1),t.qZA(),t.TgZ(16,"ion-label"),t._uU(17,"Item"),t.qZA()(),t.TgZ(18,"ion-item")(19,"ion-thumbnail",0),t._UZ(20,"img",1),t.qZA(),t.TgZ(21,"ion-label"),t._uU(22,"Item"),t.qZA()(),t.TgZ(23,"ion-item",2)(24,"ion-thumbnail",0),t._UZ(25,"img",1),t.qZA(),t.TgZ(26,"ion-label"),t._uU(27,"Item"),t.qZA()()()()())},dependencies:[o.PM,o.FN,o.Zi,o.tO,o.Dq,o.Ie,o.Q$,o.q_,o.Bs]}),n})();var A=c(7185);function v(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item",1),t.NdJ("click",function(){const p=t.CHM(e).$implicit,h=t.oxw();return t.KtG(h.onContactClick(p))}),t.TgZ(1,"ion-thumbnail",2),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"ion-label"),t._uU(4),t.qZA()()}if(2&n){const e=i.$implicit;t.xp6(4),t.Oqu(e.userName)}}const _=[{path:"",component:Z,children:[{path:"",redirectTo:"chats",pathMatch:"full"},{path:"chats",component:f},{path:"contacts",component:(()=>{class n{constructor(e,s,a,p){this._chatService=e,this._loginService=s,this._toaster=a,this._router=p}ngOnInit(){this.getUsers()}getUsers(){this._chatService.getAllUsers().subscribe(e=>{e.error?(this._loginService.dismissLoading(),this._toaster.error(e.message)):(this.users=e.body,this._loginService.dismissLoading())},e=>{e&&(this._loginService.dismissLoading(),this._toaster.error(e.error.message))})}onContactClick(e){this._router.navigate(["home/chatApp/chatMessage"],{state:{userData:e}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.O),t.Y36(u.S),t.Y36(A._W),t.Y36(r.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contacts"]],decls:7,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start"],["alt","Silhouette of mountains","src","https://ionicframework.com/docs/img/demos/thumbnail.svg"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t._uU(3,"Users"),t.qZA()(),t.TgZ(4,"ion-card-content")(5,"ion-list"),t.YNc(6,v,5,1,"ion-item",0),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngForOf",s.users))},dependencies:[o.PM,o.FN,o.Zi,o.Dq,o.Ie,o.Q$,o.q_,o.Bs,l.sg]}),n})()},{path:"chatMessage",component:C}]}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(_),r.Bz]}),n})();var T=c(7155);let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.Pc,U,l.ez,T.p0]}),n})()}}]);