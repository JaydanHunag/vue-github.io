"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[883],{5883:function(s,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(3396),t=n(9242);const o={class:"container mt-5"},a={class:"col-md-6"},i=(0,r._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},u=(0,r._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),c={class:"mb-2"},d=(0,r._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,r._)("div",{class:"text-end mt-4"},[(0,r._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function m(s,e,n,m,h,b){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,t.iM)(((...s)=>b.signIn&&b.signIn(...s)),["prevent"]))},[(0,r._)("div",a,[i,(0,r._)("div",l,[u,(0,r.wy)((0,r._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[t.nr,h.user.username]])]),(0,r._)("div",c,[d,(0,r.wy)((0,r._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[t.nr,h.user.password]])]),p])],32)])}n(560);var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){console.log("signIn進行中");const s="https://vue3-course-api.hexschool.io/admin/signin";this.axios.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:n}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(n)}`,this.$router.push("/dashboard/products")}}))}}},b=n(89);const w=(0,b.Z)(h,[["render",m]]);var f=w}}]);
//# sourceMappingURL=883.fd2ae216.js.map