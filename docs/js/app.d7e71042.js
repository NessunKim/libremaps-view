(function(e){function t(t){for(var r,l,c=t[0],i=t[1],u=t[2],d=0,s=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&s.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(s.length)s.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,l){var c=Object(r["resolveComponent"])("LeftPanel"),i=Object(r["resolveComponent"])("Map");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(c,{url:a.url},null,8,["url"]),Object(r["createVNode"])(i,{onUpdatePanel:a.onUpdatePanel},null,8,["onUpdatePanel"])],64)}var o=Object(r["withScopeId"])("data-v-41dd1d9a");Object(r["pushScopeId"])("data-v-41dd1d9a");var l=Object(r["createVNode"])("div",{id:"map"},null,-1),c=Object(r["createVNode"])("p",{class:"mb-2"},"이 위치에 마커를 추가합니다.",-1),i=Object(r["createVNode"])("label",{class:"new-marker-label",for:"page-name"},"연결할 문서",-1),u=Object(r["createVNode"])("label",{class:"new-marker-label",for:"marker-name"},"마커의 이름",-1),p=Object(r["createVNode"])("label",{class:"new-marker-label",for:"latitude"},"위도",-1),d=Object(r["createVNode"])("label",{class:"new-marker-label",for:"longitude"},"경도",-1),s=Object(r["createVNode"])("label",{class:"new-marker-label",for:"zoom"},"확대 수준(이 수준보다 축소시 숨김)",-1);Object(r["popScopeId"])();var m=o((function(e,t,n,a,m,f){var b=Object(r["resolveComponent"])("vue-slider"),v=Object(r["resolveComponent"])("context-menu");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[l,Object(r["createVNode"])(v,{ref:"menu",onClosed:e.onContextMenuClosed},{default:o((function(){return[Object(r["createVNode"])("div",null,[c,i,Object(r["withDirectives"])(Object(r["createVNode"])("input",{name:"page-name",type:"text",class:["new-marker-input",{"new-marker-input-invalid":e.newMarkerForm.invalidPageName}],placeholder:"연결할 문서","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.newMarkerForm.pageName=t}),onInput:t[2]||(t[2]=function(){return e.newMarkerForm.markerName=e.newMarkerForm.pageName})},null,34),[[r["vModelText"],e.newMarkerForm.pageName]]),u,Object(r["withDirectives"])(Object(r["createVNode"])("input",{name:"marker-name",type:"text",class:["new-marker-input",{"new-marker-input-invalid":e.newMarkerForm.invalidMarkerName}],placeholder:"마커의 이름","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.newMarkerForm.markerName=t})},null,2),[[r["vModelText"],e.newMarkerForm.markerName]]),p,Object(r["withDirectives"])(Object(r["createVNode"])("input",{name:"latitude",type:"text",class:"new-marker-input",placeholder:"위도","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.newMarkerForm.latitude=t})},null,512),[[r["vModelText"],e.newMarkerForm.latitude]]),d,Object(r["withDirectives"])(Object(r["createVNode"])("input",{name:"longitude",type:"text",class:"new-marker-input",placeholder:"경도","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.newMarkerForm.longitude=t})},null,512),[[r["vModelText"],e.newMarkerForm.longitude]]),s,Object(r["createVNode"])(b,{name:"zoom",class:"mb-3",modelValue:e.newMarkerForm.zoom,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.newMarkerForm.zoom=t}),max:18,min:0},null,8,["modelValue"]),Object(r["createVNode"])("button",{class:"new-marker-submit",onClick:t[7]||(t[7]=function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)})}," 추가 (위키로 이동) ")])]})),_:1},8,["onClosed"])],64)})),f=(n("99af"),n("d81d"),n("b0c0"),n("498a"),n("5530")),b=(n("96cf"),n("1da1")),v=(n("6cc5"),n("ef9d"),n("e11e")),w=(n("c293"),n("bc3a")),g=Object(r["withScopeId"])("data-v-d2b31430"),h=g((function(e,t,n,a,o,l){return Object(r["withDirectives"])((Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"context-menu bg-white shadow-xl p-5",style:e.style,ref:"menu",tabindex:"0",onBlur:t[1]||(t[1]=function(){return a.close&&a.close.apply(a,arguments)})},[Object(r["renderSlot"])(e.$slots,"default")],36)),[[r["vShow"],e.show]])})),k={emits:["closed"],setup:function(e,t){var n=t.emit,a=Object(r["ref"])(null),o=Object(r["reactive"])({left:0,top:0,show:!1,style:Object(r["computed"])((function(){return{top:o.top+"px",left:o.left+"px"}}))}),l=function(e){e.currentTarget.contains(e.relatedTarget)||(o.show=!1,o.left=0,o.top=0,n("closed"))},c=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.x,l=t.y,o.left=n,o.top=l,o.show=!0,e.next=6,Object(r["nextTick"])();case 6:a.value.offsetTop+a.value.offsetHeight>window.innerHeight&&(o.top=window.innerHeight-a.value.offsetHeight,o.left+=30),a.value.offsetLeft+a.value.offsetWidth>window.innerWidth&&(o.left=n-a.value.offsetWidth-30),a.value.focus();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f["a"])(Object(f["a"])({},Object(r["toRefs"])(o)),{},{close:l,open:c,menu:a})}};n("667e");k.render=h,k.__scopeId="data-v-d2b31430";var O=k,j=n("4971"),N=n.n(j),x=(n("3e39"),function(e){var t=e.emit,n=null,a=null,o=Object(r["reactive"])({pageName:"",invalidPageName:!1,markerName:"",invalidMarkerName:!1,latitude:0,longitude:0,zoom:0}),l=Object(r["ref"])(null),c=[],i=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var r,a,o,l,i,u,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getBounds(),a=n.getZoom(),o=r.getNorthWest().wrap(),l=r.getSouthEast().wrap(),i={north:o.lat,south:l.lat,west:o.lng,east:l.lng,zoom:a},e.next=7,w["get"]("//api.maps.librewiki.net/markers",{params:i});case 7:u=e.sent,p=u.data,c.map((function(e){return e.remove()})),c.length=0,p.data.map((function(e){var a=e.attributes,o=a.latitude,l=a.longitude,i=a.name,u=a.page_id,p=360*Math.ceil((r.getWest()-l)/360),d=v["marker"]([o,l+p]);d.addTo(n).bindTooltip(i,{permanent:!0}).openTooltip(),d.on("click",(function(){t("updatePanel","https://librewiki.net/index.php?curid=".concat(u))})),c.push(d)}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){a&&a.remove(),a=v["marker"]([e.latlng.lat,e.latlng.lng]).addTo(n),o.latitude=e.latlng.lat,o.longitude=e.latlng.wrap().lng,o.zoom=n.getZoom(),l.value.open({x:e.originalEvent.clientX,y:e.originalEvent.clientY})},p=function(){a&&(a.remove(),a=null)},d=function(e){o.pageName.trim()?o.markerName.trim()?(window.open("https://librewiki.net/index.php?action=edit&preload=%ED%8B%80:%EB%A6%AC%EB%B8%8C%EB%A0%88_%EB%A7%B5%EC%8A%A4_%EB%A7%88%EC%BB%A4/%ED%85%9C%ED%94%8C%EB%A6%BF&preloadparams[]=".concat(o.latitude,"&preloadparams[]=").concat(o.longitude,"&preloadparams[]=").concat(o.zoom,"&preloadparams[]=").concat(o.markerName,"&title=").concat(o.pageName,"&section=new&nosummary=true&editintro=%ED%8B%80:%EB%A6%AC%EB%B8%8C%EB%A0%88%20%EB%A7%B5%EC%8A%A4%20%EB%A7%88%EC%BB%A4/%ED%8E%B8%EC%A7%91%EC%B0%BD%20%EC%95%88%EB%82%B4"),"_blank"),o.pageName="",o.markerName="",o.invalidPageName=!1,o.invalidMarkerName=!1,l.value.close(e)):o.invalidMarkerName=!0:o.invalidPageName=!0};return Object(r["onMounted"])(Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=v["map"]("map").setView([37.7,126.7],7),window.map=n,v["tileLayer"]("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://librewiki.net">Libre Wiki</a> contributors'}).addTo(n),e.next=5,i();case 5:n.on("zoomend",(function(){o.zoom=n.getZoom()})),n.on("contextmenu",u),n.on("moveend",i);case 8:case"end":return e.stop()}}),e)})))),{menu:l,onSubmit:d,onContextMenuClosed:p,newMarkerForm:o}}),B={emits:["updatePanel"],components:{ContextMenu:O,VueSlider:N.a},setup:function(e,t){var n=t.emit;return Object(f["a"])({},x({emit:n}))}};n("b4be");B.render=m,B.__scopeId="data-v-41dd1d9a";var y=B,M={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},C=Object(r["createVNode"])("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1),V={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},E=Object(r["createVNode"])("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"},null,-1);function A(e,t,n,a,o,l){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:["top-0 z-50 bg-white float-left shadow-2xl h-screen relative",{"w-4/12":a.open,"w-0":!a.open}]},[Object(r["createVNode"])("iframe",{src:n.url,class:"w-full h-full"},null,8,["src"]),Object(r["createVNode"])("button",{class:"bg-white absolute z-50 top-1/2 left-full shadow-2xl rounded-r-md w-7",onClick:t[1]||(t[1]=function(){return a.onClick&&a.onClick.apply(a,arguments)})},[a.open?(Object(r["openBlock"])(),Object(r["createBlock"])("svg",M,[C])):(Object(r["openBlock"])(),Object(r["createBlock"])("svg",V,[E]))])],2)}var P={props:{url:{type:String,required:!1}},setup:function(e){var t=Object(r["ref"])(!1),n=function(){t.value=!t.value,setTimeout((function(){window.map.invalidateSize()}),200)};return Object(r["watch"])((function(){return e.url}),(function(){t.value=!0})),{onClick:n,open:t}}};P.render=A;var S=P,F={name:"App",components:{Map:y,LeftPanel:S},setup:function(){var e=Object(r["ref"])("https://librewiki.net"),t=function(t){e.value=t};return{url:e,onUpdatePanel:t}}};F.render=a;var z=F;n("ba8c");Object(r["createApp"])(z).mount("#app")},"667e":function(e,t,n){"use strict";n("703f")},"703f":function(e,t,n){},"93d2":function(e,t,n){},b4be:function(e,t,n){"use strict";n("93d2")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.d7e71042.js.map