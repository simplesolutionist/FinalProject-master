(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0088e25d"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"c992b702"}[t]+".css",i=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],p.parentNode.removeChild(p),a(r)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"206d":function(t,e,a){"use strict";var s=a("4413"),n=a.n(s);n.a},"2ab8":function(t,e,a){"use strict";var s=a("70d5"),n=a.n(s);n.a},4413:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"bus",(function(){return ft}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("Nav"),a("router-view")],1)])])},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar container is-fixed-top is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/exercises"}},[t._v("Exercises")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/progress"}},[t._v("Progress")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/achievements"}},[t._v("Achievements")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/friends"}},[t._v("Friends")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[a("v-icon",{attrs:{small:"",color:"teal darken-2"}},[t._v(" mdi-email ")]),t._v(" Contact ")],1),a("a",{staticClass:"navbar-item"},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-edit")]),t._v(" Newsletter ")],1),a("a",{staticClass:"navbar-item"},[a("v-icon",{attrs:{small:""}},[t._v("fas fa-lock")]),t._v(" Settings ")],1),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[a("v-icon",{attrs:{small:"",color:"teal darken-2"}},[t._v(" mdi-account ")]),t._v(" Report An Issue ")],1)])]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v("Admin")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/users"}},[t._v("Users")])],1)])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("LoginBadge")],1)])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item"},[s("img",{attrs:{src:a("cf05"),height:"28"}})])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"LoginBadge"}},[t.session.user?a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"}),a("div",{staticClass:"media-content"},[a("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))])])]):a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-light",attrs:{to:"/signup"}},[t._v(" Sign Up ")]),a("router-link",{staticClass:"button is-light",attrs:{to:"/login"}},[t._v(" Log in ")])],1)])},l=[],u=(a("a434"),{user:null,email:null,user_id:null,notifications:[],addNotification:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.notifications.push({text:t,type:e})},deleteNotification:function(t){this.notifications.splice(t,1)}}),d=u,p={data:function(){return{session:d}}},h=p,m=(a("2ab8"),a("2877")),f=Object(m["a"])(h,c,l,!1,null,null,null),v=f.exports,g={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:v}},_=g,b=a("6544"),C=a.n(b),w=a("132d"),y=Object(m["a"])(_,r,o,!1,null,null,null),x=y.exports;C()(y,{VIcon:w["a"]});var k={components:{Nav:x}},E=k,j=(a("5c0b"),Object(m["a"])(E,n,i,!1,null,null,null)),N=j.exports,O=(a("d3b7"),a("8c4f")),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition-group",{attrs:{name:"fade",tag:"div"}},[t._l([t.currentIndex],(function(e){return a("div",{key:e},[a("img",{attrs:{src:t.currentImg}})])})),a("transition",{attrs:{name:"slide-fade"}})],2),a("a",{staticClass:"prev",attrs:{href:"#"},on:{click:t.prev}},[t._v("❮ Previous")]),t._v(" "),a("a",{staticClass:"next",staticStyle:{margin:"5px"},attrs:{href:"#"},on:{click:t.next}},[t._v("❯ Next")]),a("center",[a("router-link",{attrs:{to:"/signup"}},[a("button",{staticClass:"button is-info is-rounded"},[t._v("Get Started")])])],1),a("br"),a("br"),a("br"),a("br"),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)],1)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"section-a"}},[a("p",[t._v("Online Store")]),a("br"),a("img",{attrs:{src:"https://image.flaticon.com/icons/png/512/1021/1021745.png",alt:"outfit1",width:"60",height:"45"}}),a("img",{attrs:{src:"https://image.flaticon.com/icons/png/512/1021/1021747.png",alt:"outfit2",width:"60",height:"45"}}),a("img",{attrs:{src:"https://www.soba-store.com/wp-content/uploads/2018/05/roupas.jpg",alt:"shirt",width:"60",height:"45"}}),a("img",{attrs:{src:"https://cdn1.iconfinder.com/data/icons/fitness/500/Shoes_soccer_sport_fitness-512.png",alt:"sneakers",width:"60",height:"45"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"section-b"}},[a("p",[t._v("Featured Trainers")]),a("br"),a("h1",[t._v("COMING SOON")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"section-c"}},[a("p",[t._v("Group Classes")]),a("br"),a("img",{attrs:{src:"https://images.assetsdelivery.com/compings_v2/bsd555/bsd5551603/bsd555160300070.jpg",alt:"workout classes",width:"80",height:"80"}}),a("img",{attrs:{src:"https://www.netclipart.com/pp/m/246-2460709_fruit-bowl-project-angel-heart-healthy-food-icon.png",alt:"diet",width:"60",height:"45"}}),a("img",{attrs:{src:"https://play-lh.googleusercontent.com/gEnz6YtDv9TZnl4CfZUHKbdFtZcih67K6MpYMT7MqIYOd6b6XMrDyDDY41ZvRoPYPmA",alt:"yoga",width:"60",height:"45"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"section-d"}},[a("p",[t._v("Locations")]),a("br"),a("img",{attrs:{src:"https://cdn4.iconfinder.com/data/icons/fitness-lino-color/100/fitness_gym_health-22-512.png",alt:"gym",width:"60",height:"45"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"section-e"}},[a("p",[t._v("Workout Categories For You")]),a("br"),a("img",{attrs:{src:"https://www.flaticon.com/svg/static/icons/svg/1312/1312938.svg",alt:"treadmill",width:"60",height:"45"}}),a("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRmOaHHsPVm5tADDS_u-ywLJ0twLmU55XDVQ&usqp=CAU",alt:"dumbbell",width:"60",height:"45"}}),a("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcm6ZIhsj-c3YLM0wWYaJxAzpjlk-lglCXVQ&usqp=CAU",alt:"eliptical",width:"60",height:"45"}}),a("img",{attrs:{src:"https://www.iconbunny.com/icons/media/catalog/product/2/0/2022.12-bicycle-icon-iconbunny.jpg",alt:"bike",width:"60",height:"45"}})])}],L={name:"Slider",data:function(){return{images:["https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1840394/pexels-photo-1840394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/939716/pexels-photo-939716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/378442/pexels-photo-378442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/3766209/pexels-photo-3766209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://images.pexels.com/photos/2150109/pexels-photo-2150109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,5500)},next:function(){this.currentIndex+=1},prev:function(){this.currentIndex-=1}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length]}}},S=L,D=(a("cccb"),Object(m["a"])(S,$,A,!1,null,null,null)),I=D.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"is-size-1"},[t._v(" Member Login ")]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third is-offset-one-third"},[a("ul",{staticClass:"panel"},[a("p",{staticClass:"panel-heading"},[t._v(" Login ")]),a("div",{staticClass:"panel-block"},[a("div",{staticClass:"field",class:{"is-danger":t.error}},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0),t._m(1)]),a("div",{staticClass:"control"},[a("button",{staticClass:"button is-info",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(" Login ")]),a("button",{staticClass:"button is-warning",on:{click:function(e){return e.preventDefault(),t.googleLogin(e)}}},[t._v(" Google Login ")])])]),a("p",{staticClass:"help is-danger"},[t._v(t._s(t.error)+" ")]),a("p",[t._v("Don't have an account? "),a("router-link",{attrs:{to:"/signup"}},[t._v(" Sign up here ")])],1)])])])])]),a("center",[a("img",{attrs:{src:"https://cdn.dribbble.com/users/1326405/screenshots/3718427/8-2.gif",height:"450",width:"450"}})])],1)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-exclamation-triangle"})])}],T=(a("96cf"),a("1da1")),F=Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"http://localhost:3001/";function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?fetch(F+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(F+t).then((function(t){return t.json()}))}function R(){return U("users")}var B=null,Y={data:function(){return{email:"",error:""}},methods:{login:function(){var t=this;(void 0).login(this.email).catch((function(e){console.error(e),t.error=e.message}))},googleLogin:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B.signIn();case 2:a=e.sent,console.log(a),s=a.getBasicProfile(),console.log(s),session.user={name:s.getName(),handle:s.getEmail(),profile:s.getImageUrl()},session.addNotification("Yay! You logged in","success"),t.$router.push("Home");case 9:case"end":return e.stop()}}),e)})))()}}},H=document.createElement("script");H.setAttribute("src","https://apis.google.com/js/api:client.js"),document.head.appendChild(H),H.onload=function(){gapi.load("auth2",(function(){B=gapi.auth2.init({client_id:"875221985757-bddnup196819eav2oj4jnuapi4c0jaq8.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"profile email"})}))};var q=Y,G=(a("206d"),Object(m["a"])(q,P,M,!1,null,null,null)),J=G.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v(" Signup ")])]),a("div",{staticClass:"control"},[a("router-link",{staticClass:"button is-link ",attrs:{to:"/login"}},[t._v("Already have an account?")])],1)])])},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Name")]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Text input"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Username")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{staticClass:"input is-success",attrs:{type:"text",placeholder:"Text input",value:""}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})]),a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{staticClass:"input is-danger",attrs:{type:"email",placeholder:"Email input",value:""}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})]),a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-exclamation-triangle"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Password")]),a("p",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{staticClass:"checkbox"},[a("input",{attrs:{type:"checkbox"}}),t._v(" I agree to the "),a("a",{attrs:{href:"#"}},[t._v("terms and conditions")])])])])}],z={data:function(){return{firstname:"",lastname:"",email:"",username:"",password:"",error:""}},methods:{signup:function(){d.user={name:"User 5"},d.addNotification("Yay! You signed in","success"),this.$router.push("Home")}}},K=z,Q=(a("e42b"),Object(m["a"])(K,V,Z,!1,null,null,null)),X=Q.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"container-fluid"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/home"}},[t._v("Admin")])],1),a("li",{staticClass:"breadcrumb-item active"},[t._v("Functionalities")])]),a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-header d-flex"},[t._m(0),a("button",{staticClass:"btn btn-primary btn-sm ml-auto",on:{click:t.showNewCategoryModal}},[a("span",{staticClass:"fa fa-plus"}),t._v(" Create New")])]),t._m(1)]),a("b-modal",{ref:"newCategoryModal",attrs:{"hide-footer":"",title:"Add New Category"}},[a("div",{staticClass:"d-block"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createCategory(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Enter Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryData.name,expression:"categoryData.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter category name"},domProps:{value:t.categoryData.name},on:{input:function(e){e.target.composing||t.$set(t.categoryData,"name",e.target.value)}}}),t.errors.name?a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.name[0]))]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("Choose an image")]),t.categoryData.image.name?a("div",[a("img",{ref:"newCategoryImageDispaly",staticClass:"w-150px",attrs:{src:""}})]):t._e(),a("input",{ref:"newCategoryImage",staticClass:"form-control",attrs:{type:"file",id:"image"},on:{change:t.attachImage}}),t.errors.image?a("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.image[0]))]):t._e()]),a("hr"),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.hideNewCategoryModal}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[a("span",{staticClass:"fa fa-check"}),t._v(" Save")])])])])])],1),a("br"),a("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[t._m(2),a("tbody",t._l(t.list,(function(e,s){return a("tr",{key:s,attrs:{i:s,post:e}},[a("th",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.FirstName))]),a("td",[t._v(t._s(e.LastName))]),a("td",[t._v(t._s(e.Password))]),a("td",[t._v(t._s(e.DOB))]),a("td",[t._v(t._s(e.Type))]),a("td",[t._v(t._s(e.exercise_skill_level))])])})),0)])])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fas fa-chart-area"}),t._v(" Manage Users ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("td",[t._v("#")]),a("td",[t._v("Name")]),a("td",[t._v("ExerciseLogID")]),a("td",[t._v("Action")])])]),a("tbody",[a("tr",[a("td",[t._v("1")]),a("td",[t._v("Ayman")]),a("td",[t._v("1")]),a("td",[a("button",{staticClass:"btn btn-primary btn-sm"},[a("span",{staticClass:"fa fa-edit"})]),a("button",{staticClass:"btn btn-danger btn-sm"},[a("span",{staticClass:"fa fa-trash"})])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("id")]),a("th",[t._v("First Name")]),a("th",[t._v("Last Name")]),a("th",[t._v("Password")]),a("th",[t._v("DOB")]),a("th",[t._v("Type")]),a("th",[t._v("Exercise Skill Level")])])])}],et=(a("b0c0"),{name:"category",data:function(){return{list:[],categoryData:{name:"",image:""},created:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t.list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},errors:{}}},methods:{attachImage:function(){this.categoryData.image=this.$refs.newCategoryImage.files[0];var t=new FileReader;t.addEventListener("load",function(){this.$refs.newCategoryImageDispaly.src=t.result}.bind(this),!1),t.readAsDataURL(this.categoryData.image)},hideNewCategoryModal:function(){this.$refs.newCategoryModal.hide()},showNewCategoryModal:function(){this.$refs.newCategoryModal.show()},createCategory:function(){var t=Object(T["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("name",this.categoryData.name),t.prev=2,t.next=5,categoryService.createCategory(e);case 5:t.sent,t.next=17;break;case 8:t.prev=8,t.t0=t["catch"](2),t.t1=t.t0.response.status,t.next=422===t.t1?13:15;break;case 13:return this.errors=t.t0.response.data.errors,t.abrupt("break",17);case 15:return alert("some error occurred"),t.abrupt("break",17);case 17:case"end":return t.stop()}}),t,this,[[2,8]])})));function e(){return t.apply(this,arguments)}return e}()}}),at=et,st=Object(m["a"])(at,W,tt,!1,null,null,null),nt=st.exports,it=a("6c40");s["default"].use(O["a"]);var rt=[{path:"/",name:"Home",component:I},{path:"/login",name:"Login",component:J},{path:"/signup",name:"Signup",component:X},{path:"/users",name:"Users",component:nt},{path:"/friends",name:"Friends",component:it["default"]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/exercises",name:"Exercises",component:function(){return a.e("about").then(a.bind(null,"b280"))}},{path:"/progress",name:"Progress",component:function(){return a.e("about").then(a.bind(null,"e65a"))}},{path:"/achievements",name:"Achievements",component:function(){return a.e("about").then(a.bind(null,"4e79"))}},{path:"/friends",name:"Friends",component:function(){return a.e("about").then(a.bind(null,"6c40"))}}],ot=new O["a"]({mode:"history",base:"",routes:rt}),ct=ot,lt=a("2f62");s["default"].use(lt["a"]);new lt["a"].Store({state:{},mutations:{},actions:{}});var ut=a("5b3d"),dt=a.n(ut),pt=a("5f5b"),ht=(a("5abe"),a("15f5"),a("f309"));s["default"].use(ht["a"]);var mt=new ht["a"]({}),ft=new s["default"];s["default"].component("star-rating",dt.a),s["default"].use(pt["a"]),s["default"].config.productionTip=!1,s["default"].config.productionTip=!1,new s["default"]({router:ct,vuetify:mt,render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"5ced":function(t,e,a){},"64a4":function(t,e,a){},"6c40":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friends"},[a("Friends")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"search"},[a("div",{staticClass:"pad-15-hor pad-15-ver search-parent"},[a("div",{staticClass:"search-bar"},[a("b-form-input",{attrs:{type:"text",placeholder:"Search by Name"},on:{input:function(e){return t.search_text()}},model:{value:t.search.text,callback:function(e){t.$set(t.search,"text",e)},expression:"search.text"}}),t._m(0)],1),a("div",[a("b-form-select",{attrs:{options:t.options},on:{input:function(e){return t.sort()}},model:{value:t.search.filter,callback:function(e){t.$set(t.search,"filter",e)},expression:"search.filter"}})],1)])]),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},t._l(t.wonders_data,(function(e){return a("div",{key:e.id,staticClass:"col-md-4 pad-50-ver card"},[a("div",{staticClass:"card-inner",on:{mouseover:function(a){return t.show_hover(!0,e.id)},mouseout:function(e){return t.show_hover(!1,0)}}},[a("img",{staticClass:"card-img",attrs:{src:e.imageURL}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.hover_flag||t.active_id!=e.id,expression:"!hover_flag || active_id != wonder.id"}],staticClass:"card-bottom pad-50-hor"},[a("div",{staticClass:"min-width-160"},[a("span",{staticClass:"bold"},[t._v("Exercise Level:")]),a("star-rating",{attrs:{rating:e.ratings,"show-rating":!1,inline:!0,"star-size":15}})],1),a("div",{staticClass:"max-width-160"},[a("span",{staticClass:"bold"},[t._v(t._s(e.place))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hover_flag&&t.active_id==e.id,expression:"hover_flag && active_id == wonder.id"}],class:{"card-hover":1}},[a("span",{class:{fas:1,"fa-heart":1,"absolute-star":1,green:t.check_active(e.id)},on:{click:function(a){return t.make_active(e.id)}}},[t._v(t._s(e.likes))]),a("h5",[t._v(t._s(e.place))]),a("p",[t._v(t._s(e.description))])])])])})),0)])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"search-icon"},[a("i",{staticClass:"fas fa-search"})])}],o=(a("4de4"),a("c975"),a("d81d"),a("ac1f"),a("841c"),a("bc3a")),c=a.n(o),l={name:"Friends",mounted:function(){this.hover_flag=!1;var t=this;c.a.get("https://run.mocky.io/v3/cc2e4a2f-8441-4382-abac-ff7e7691fd20").then((function(e){t.wonders_data_actual=e.data.data,e.data.data.map((function(e){t.likes.count+=e.likes})),t.wonders_data_actual=t.wonders_data_actual.map((function(t){return t.active_like=!1,t})),t.wonders_data=e.data.data})).catch((function(t){}))},data:function(){return{hover_flag:!1,wonders_data_actual:[],wonders_data:[],active_id:0,options:[{value:null,text:"Sort By"},{value:"a",text:"Exercise Level"},{value:"b",text:"Friends"}],search:{filter:null,text:""},likes:{count:0,hit:0}}},methods:{show_hover:function(t,e){this.hover_flag=t,this.active_id=e},sort:function(){"b"==this.search.filter?this.wonders_data.sort((function(t,e){return e.likes-t.likes})):this.wonders_data.sort((function(t,e){return e.ratings-t.ratings}))},search_text:function(){var t=this;this.wonders_data=this.wonders_data_actual.filter((function(e){if("-1"!=e.place.toLowerCase().indexOf(t.search.text.toLowerCase()))return e}))},check_active:function(t){var e=!1;return this.wonders_data_actual.map((function(a){a.id==t&&(e=a.active_like)})),e},make_active:function(t){this.likes.hit++,this.wonders_data_actual=this.wonders_data_actual.map((function(e){return e.id==t&&(e.active_like=!e.active_like,e.active_like?e.likes++:e.likes--),e}));var e=this;e.likes.count=0,this.wonders_data_actual.map((function(t){e.likes.count+=t.likes}))}},components:{}},u=l,d=(a("a792"),a("2877")),p=Object(d["a"])(u,i,r,!1,null,"378ad505",null),h=p.exports,m={name:"friends",components:{Friends:h}},f=m,v=Object(d["a"])(f,s,n,!1,null,null,null);e["default"]=v.exports},"70d5":function(t,e,a){},"9c0c":function(t,e,a){},a792:function(t,e,a){"use strict";var s=a("64a4"),n=a.n(s);n.a},cccb:function(t,e,a){"use strict";var s=a("5ced"),n=a.n(s);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.0390b876.png"},cff3:function(t,e,a){},e42b:function(t,e,a){"use strict";var s=a("cff3"),n=a.n(s);n.a}});
//# sourceMappingURL=app.2e922db1.js.map