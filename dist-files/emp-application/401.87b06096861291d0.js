"use strict";(self.webpackChunkemp_application=self.webpackChunkemp_application||[]).push([[401],{2401:(h,a,r)=>{r.r(a),r.d(a,{LoginModule:()=>p});var l=r(9808),n=r(2382),u=r(8093),o=r(1223),c=r(569);const g=[{path:"",component:(()=>{class t{constructor(e,i,m){this.formBuilder=e,this.router=i,this.authService=m}ngOnInit(){console.log("in login"),this.navigateToAuth(),this.userForm=this.formBuilder.group({userName:["",[n.kI.required,n.kI.minLength(5)]],password:["",[n.kI.required]]})}onLoginClick(){if(this.userForm.valid){let e=this.userForm.value;this.authService.authenticateUser(e.userName,e.password),this.authService.getAutheticationStatus().subscribe(i=>{i&&this.navigateToAuth()})}}navigateToAuth(){this.authService.isAuthenticated()&&this.router.navigate(["auth"])}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(n.qu),o.Y36(u.F0),o.Y36(c.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:14,vars:2,consts:[[1,"container"],[1,"form-signin",3,"formGroup","ngSubmit"],[1,"form-header"],["for","userName",1,"sr-only"],["type","text","id","userName","name","userName","formControlName","userName","placeholder","User Name","autocomplete","false","autofocus","",1,"form-control"],["for","password",1,"sr-only"],["type","password","id","password","name","password","formControlName","password","placeholder","Password",1,"form-control"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"form",1),o.NdJ("ngSubmit",function(){return i.onLoginClick()}),o.TgZ(2,"h2",2),o._uU(3,"Sign in"),o.qZA(),o.TgZ(4,"label",3),o._uU(5,"User name"),o.qZA(),o._UZ(6,"input",4),o._UZ(7,"br"),o.TgZ(8,"label",5),o._uU(9,"Password"),o.qZA(),o._UZ(10,"input",6),o._UZ(11,"br"),o.TgZ(12,"button",7),o._uU(13,"Login"),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(1),o.Q6J("formGroup",i.userForm),o.xp6(11),o.Q6J("disabled",i.userForm.invalid))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u],styles:[".form-signin[_ngcontent-%COMP%]{max-width:330px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[u.Bz.forChild(g)],u.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[l.ez,n.u5,n.UX,d]]}),t})()}}]);