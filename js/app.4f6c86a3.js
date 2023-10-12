(function(){"use strict";var t={4946:function(t,e,n){var o=n(9242),a=n(3396),r=n(7718),s=n(9271);function l(t,e,n,o,l,u){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r.q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s.O,{style:{background:"violet"}},{default:(0,a.w5)((()=>[(0,a.Wm)(i)])),_:1})])),_:1})}var u={name:"App",data:()=>({})},i=n(89);const c=(0,i.Z)(u,[["render",l]]);var d=c,f=n(2483),m=n(7139),p=n(3435),k=n(6761),h=n(6572),g=n(1550),w=n(4075),v=n(6824),b=n(8521),y=n(3289),_=n(5961),O=n(2127),j=n(3173),C=n(5426),T=n(8952);const W=(0,a._)("b",null,"Todo List",-1),x=(0,a._)("label",{for:"name"},"Task Name",-1);function N(t,e,n,r,s,l){const u=(0,a.up)("v-template");return(0,a.wg)(),(0,a.j4)(k._,{class:"mx-auto",style:{"margin-top":"200px"},width:"500",height:"auto",elevation:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(h.E,{class:"text-center mb-6"},{default:(0,a.w5)((()=>[W])),_:1}),(0,a.Wm)(v.o,{class:"mx-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(b.D,{clos:"9"},{default:(0,a.w5)((()=>[x,(0,a.Wm)(C.h,{id:"name",variant:"outlined",placeholder:"Enter Task Name",modelValue:s.taskName,"onUpdate:modelValue":e[0]||(e[0]=t=>s.taskName=t),color:"#5f3a81",onKeydown:(0,o.D2)(l.addTask,["enter"])},{"append-inner":(0,a.w5)((()=>[(0,a.Wm)(T.Z5,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(p.T,{icon:"mdi-plus-circle",variant:"text",onClick:l.addTask},null,8,["onClick"]),[[o.F8,s.taskName]])])),_:1})])),_:1},8,["modelValue","onKeydown"])])),_:1})])),_:1}),(0,a.Wm)(v.o,{class:"mx-4 mb-6",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(b.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(k._,{elevation:"0"},{default:(0,a.w5)((()=>[(0,a.Wm)(v.o,{class:"mt-4 mx-auto"},{default:(0,a.w5)((()=>[(0,a.Wm)(b.D,{cols:"4"},{default:(0,a.w5)((()=>[(0,a._)("h4",null,"Tasks :  "+(0,m.zw)(s.tasks.length),1)])),_:1}),(0,a.Wm)(b.D,{cols:"6"},{default:(0,a.w5)((()=>[(0,a._)("h4",null,"Completed Tasks :  "+(0,m.zw)(l.completedTasks),1)])),_:1}),s.tasks.length>0?((0,a.wg)(),(0,a.j4)(b.D,{key:0,cols:"2"},{default:(0,a.w5)((()=>[(0,a.Wm)(j.L,{modelValue:l.progress,"onUpdate:modelValue":e[1]||(e[1]=t=>l.progress=t),class:"me-2"},null,8,["modelValue"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(w.J,{class:"mb-4"})])),_:1}),s.tasks.length>0?((0,a.wg)(),(0,a.j4)(v.o,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(b.D,{cols:"12"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.tasks,((t,e)=>((0,a.wg)(),(0,a.j4)(u,{key:e},{default:(0,a.w5)((()=>[0!==e?((0,a.wg)(),(0,a.j4)(w.J,{key:`${e}-divider`})):(0,a.kq)("",!0),(0,a.Wm)(_.l,{onClick:e=>l.setCompletedTasks(t)},{prepend:(0,a.w5)((()=>[(0,a.Wm)(g.p,{modelValue:t.taskComplete,"onUpdate:modelValue":e=>t.taskComplete=e,color:"grey"},null,8,["modelValue","onUpdate:modelValue"])])),append:(0,a.w5)((()=>[(0,a.Wm)(T.Zq,null,{default:(0,a.w5)((()=>[t.taskComplete?((0,a.wg)(),(0,a.j4)(y.t,{key:0,color:"error",onClick:e=>l.deleteTask(t)},{default:(0,a.w5)((()=>[(0,a.Uk)(" mdi-delete ")])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])),_:2},1024)])),default:(0,a.w5)((()=>[(0,a.Wm)(O.V,null,{default:(0,a.w5)((()=>[(0,a._)("span",{class:(0,m.C_)(t.taskComplete?"text-grey":"text-black")},(0,m.zw)(t.taskName),3)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})}n(7658);var V={name:"HomeView",data(){return{taskName:"",tasks:[],tasksDone:[],taskDone:!1}},mounted(){this.tasks=JSON.parse(localStorage.getItem("tasks"))},components:{},computed:{progress(){return this.completedTasks/this.tasks.length*100},completedTasks(){return this.tasks.filter((t=>t.taskComplete)).length}},methods:{addTask(){this.tasks.push({taskName:this.taskName,taskComplete:this.taskDone}),localStorage.setItem("tasks",JSON.stringify(this.tasks||{}))},deleteTask(t){const e=this.tasks.indexOf(t);this.tasks.splice(e,1),console.log("taskIndex",e)},setCompletedTasks(t){const e=this.tasks.indexOf(t);this.tasks.forEach((t=>{const n=this.tasks.indexOf(t);e===n&&(this.tasks[e].taskComplete=!this.tasks[e].taskComplete)})),localStorage.setItem("tasks",JSON.stringify(this.tasks))}}};const D=(0,i.Z)(V,[["render",N]]);var S=D;const E=[{path:"/",name:"home",component:S}],P=(0,f.p7)({history:(0,f.PO)("/"),routes:E});var q=P,A=n(65),J=(0,A.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),M=(n(9773),n(8727)),U=(0,M.Rd)();async function I(){const t=await n.e(461).then(n.t.bind(n,3657,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}I(),(0,o.ri)(d).use(q).use(J).use(U).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,r){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],r=t[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(l=!1,r<s&&(s=r));if(l){t.splice(c--,1);var i=a();void 0!==i&&(e=i)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,a,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var r=Object.create(null);n.r(r);var s={};t=t||[null,e({}),e([]),e(e)];for(var l=2&a&&o;"object"==typeof l&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((function(t){s[t]=function(){return o[t]}}));return s["default"]=function(){return o},n.d(r,s),r}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/webfontloader.b7347639.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="todolist:";n.l=function(o,a,r,s){if(t[o])t[o].push(a);else{var l,u;if(void 0!==r)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var d=i[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+r){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",e+r),l.src=o),t[o]=[a];var f=function(e,n){l.onerror=l.onload=null,clearTimeout(m);var a=t[o];if(delete t[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,o){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=t[e]=[n,o]}));o.push(a[2]=r);var s=n.p+n.u(e),l=new Error,u=function(o){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,r,s=o[0],l=o[1],u=o[2],i=0;if(s.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(u)var c=u(n)}for(e&&e(o);i<s.length;i++)r=s[i],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4946)}));o=n.O(o)})();
//# sourceMappingURL=app.4f6c86a3.js.map