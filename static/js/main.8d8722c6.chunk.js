(this.webpackJsonpthef2e_bike=this.webpackJsonpthef2e_bike||[]).push([[0],{13:function(n,e,t){n.exports={container:"Road_container__1CbJq",header:"Road_header__c1kgL",station:"Road_station__16GtC",location:"Road_location__3MEFE"}},33:function(n,e,t){n.exports={container:"Map_container__3xh_q"}},34:function(n,e,t){n.exports={container:"MapRoute_container__3Bsze"}},42:function(n,e,t){},7:function(n,e,t){n.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n",map:"App_map__3Febj",station_dispaly:"App_station_dispaly__3mN6X",station_not_display:"App_station_not_display__7uWut",road_display:"App_road_display__BE9Ql",road_not_display:"App_road_not_display__u4QZm"}},72:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),i=t(17),c=t.n(i),r=(t(42),t(12)),s=t.n(r),u=t(18),l=t(6),d=t(19),p=t.n(d),h=t(36);function j(){var n=(new Date).toGMTString(),e=new h.a("SHA-1","TEXT");return e.setHMACKey("0o53fh7JHKpoZBW2kIM8SM7GW4Y","TEXT"),e.update("x-date: "+n),{Authorization:'hmac username="83fc39f9c29946578ee26c17b458f970", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":n}}function b(){return(b=Object(u.a)(s.a.mark((function n(e){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("hi",e),p.a.defaults.baseURL="https://ptx.transportdata.tw/MOTC",p.a.defaults.headers=j(),n.next=6,p.a.get(e);case 6:if(200!==(t=n.sent).status){n.next=9;break}return n.abrupt("return",t.data);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:return n.abrupt("return",null);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}var _=function(n){return b.apply(this,arguments)},m=t(7),f=t.n(m),O=(t(32),t(4)),y=t.n(O),g=t(33),x=t.n(g),v=(t(61),t(62),t(63),t(1));var C=function(n){var e=n.bikeAvailable,t=n.bikeStations,o=Object(a.useRef)();return Object(a.useEffect)((function(){if(null===t||0===t.length)return null;var n=y.a.map(o.current,{center:[t[0].StationPosition.PositionLat,t[0].StationPosition.PositionLon],zoom:16});y.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n);var a=new y.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),i=y.a.markerClusterGroup();return t.map((function(n,t){return y.a.marker([n.StationPosition.PositionLat,n.StationPosition.PositionLon],{icon:a}).bindPopup("<div> \n\t\t\t<h1>".concat(n.StationName.Zh_tw,"</h1>\n\t\t\t<p>").concat(n.StationAddress.Zh_tw,"</p>\n\t\t\t<p>\u53ef\u79df\u501f\u6578\u91cf").concat(e[t].AvailableRentBikes,"</p>\n\t\t\t<p>\u53ef\u6b78\u9084\u6578\u91cf").concat(e[t].AvailableReturnBikes,"</p>\n\t\t\t</div>\n\t\t\t"))})).forEach((function(n){return i.addLayer(n)})),n.addLayer(i),function(){return n.remove()}}),[t]),Object(v.jsx)("div",{className:x.a.container,ref:function(n){return o.current=n}})},S=t(34),N=t.n(S),w=function(n){var e=n.route,t=Object(a.useRef)();return Object(a.useEffect)((function(){if(null===e)return null;alert("in");var n=e.Geometry.replace("MULTILINESTRING ","").replace("((","").replace("))","").trim().split(",").map((function(n){var e=n.split(" "),t=[];return t.push(Number(e[1])),t.push(Number(e[0])),t})),a=y.a.map(t.current,{center:[n[0][0],n[0][1]],zoom:16});y.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a);var o=new y.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});y.a.marker([n[0][0],n[0][1]],{icon:o}).addTo(a).bindPopup("<h1>Start</h1>").openPopup(),y.a.marker([n[n.length-1][0],n[n.length-1][1]],{icon:o}).addTo(a).bindPopup("<h1>End</h1>").openPopup();var i=n,c=y.a.polyline(i,{color:"red"}).addTo(a);return a.fitBounds(c.getBounds()),function(){return a.remove()}}),[e]),Object(v.jsx)("div",{className:N.a.container,ref:function(n){return t.current=n}})},T=t(9),k=t.n(T),R="\u81fa\u5317\u5e02:Taipei\n\u65b0\u5317\u5e02:NewTaipei\n\u6843\u5712\u5e02:Taoyuan\n\u81fa\u4e2d\u5e02:Taichung\n\u81fa\u5357\u5e02:Tainan\n\u9ad8\u96c4\u5e02:Kaohsiung\n\u57fa\u9686\u5e02:Keelung\n\u65b0\u7af9\u5e02:Hsinchu\n\u65b0\u7af9\u7e23:HsinchuCounty\n\u82d7\u6817\u7e23:MiaoliCounty\n\u5f70\u5316\u7e23:ChanghuaCounty\n\u5357\u6295\u7e23:NantouCounty\n\u96f2\u6797\u7e23:YunlinCounty\n\u5609\u7fa9\u7e23:ChiayiCounty\n\u5609\u7fa9\u5e02:Chiayi\n\u5c4f\u6771\u7e23:PingtungCounty\n\u5b9c\u862d\u7e23:YilanCounty\n\u82b1\u84ee\u7e23:HualienCounty\n\u81fa\u6771\u7e23:TaitungCounty\n\u91d1\u9580\u7e23:KinmenCounty\n\u6f8e\u6e56\u7e23:PenghuCounty\n\u9023\u6c5f\u7e23:LienchiangCounty".split(/\r?\n/),A="\u81fa\u4e2d\u5e02:Taichung\n\u65b0\u7af9\u5e02:Hsinchu\n\u82d7\u6817\u7e23:MiaoliCounty\n\u65b0\u5317\u5e02:NewTaipei\n\u5c4f\u6771\u7e23:PingtungCounty\n\u91d1\u9580\u7e23:KinmenCounty\n\u6843\u5712\u5e02:Taoyuan\n\u81fa\u5317\u5e02:Taipei\n\u9ad8\u96c4\u5e02:Kaohsiung\n\u81fa\u5357\u5e02:Tainan\n\u5609\u7fa9\u5e02:Chiayi".split(/\r?\n/),L="\u81fa\u4e2d\u5e02:Taichung\n\u57fa\u9686\u5e02:Keelung\n\u65b0\u7af9\u7e23:HsinchuCounty\n\u82d7\u6817\u7e23:MiaoliCounty\n\u5f70\u5316\u7e23:ChanghuaCounty\n\u65b0\u5317\u5e02:NewTaipei\n\u5357\u6295\u7e23:NantouCounty\n\u96f2\u6797\u7e23:YunlinCounty\n\u5609\u7fa9\u7e23:ChiayiCounty\n\u5609\u7fa9\u5e02:Chiayi\n\u5c4f\u6771\u7e23:PingtungCounty\n\u5b9c\u862d\u7e23:YilanCounty\n\u82b1\u84ee\u7e23:HualienCounty\n\u81fa\u6771\u7e23:TaitungCounty\n\u91d1\u9580\u7e23:KinmenCounty\n\u6f8e\u6e56\u7e23:PenghuCounty\n\u6843\u5712\u5e02:Taoyuan\n\u81fa\u5317\u5e02:Taipei\n\u9ad8\u96c4\u5e02:Kaohsiung\n\u81fa\u5357\u5e02:Tainan".split(/\r?\n/),P=(R.map((function(n,e){return n.split(":")})),A.map((function(n,e){return n.split(":")}))),M=L.map((function(n){return n.split(":")})),E=t(5),H=t(10),I=t(11),z=function(n){var e=P.map((function(n,e){return Object(v.jsx)("option",{value:n[1],children:n[0]},e)})),t=M.map((function(n,e){return Object(v.jsx)("option",{value:n[1],children:n[0]},e)})),a=Object(E.b)();return Object(v.jsxs)("div",{className:k.a.container+" "+n.style,children:[Object(v.jsxs)("div",{className:k.a.logo,children:[Object(v.jsx)(H.a,{className:k.a.icon,icon:I.b}),Object(v.jsx)("p",{children:"Go Bike"})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:k.a.selectContainer,children:[Object(v.jsxs)("div",{className:k.a.items,children:[Object(v.jsx)("p",{children:"\u79df\u8eca\u9084\u8eca\u7ad9\u9ede\uff1a"}),Object(v.jsxs)("select",{onChange:function(n){a({type:"PlaceSelect",payload:{place:n.target.value}})},children:[Object(v.jsx)("option",{disabled:!0,selected:!0,value:!0,children:"\u8acb\u9078\u64c7\u7ad9\u9ede"}),e]})]}),Object(v.jsxs)("div",{className:k.a.items,children:[Object(v.jsx)("p",{children:"\u81ea\u884c\u8eca\u9053\uff1a"}),Object(v.jsxs)("select",{onChange:function(n){a({type:"RoadPlace",payload:{road:n.target.value}})},children:[Object(v.jsx)("option",{disabled:!0,selected:!0,value:!0,children:"\u8acb\u9078\u64c7\u8eca\u9053"}),t]})]})]})})]})},B=t(8),K=t.n(B),D=t(13),J=t.n(D),G=function(n){var e=n.data,t=Object(E.b)();return Object(v.jsxs)("div",{className:J.a.container,onClick:function(){t({type:"RoadSelect",payload:{roadSelect:e}})},children:[Object(v.jsx)("p",{className:J.a.header,children:e.RouteName}),Object(v.jsx)(a.Fragment,{children:e.Direction?Object(v.jsxs)("p",{children:["\u65b9\u5411\uff1a",e.Direction]}):null}),Object(v.jsxs)("div",{className:J.a.station,children:[Object(v.jsx)("p",{children:"\u8d77"}),Object(v.jsx)("p",{children:e.RoadSectionStart})]}),Object(v.jsxs)("div",{className:J.a.station,children:[Object(v.jsx)("p",{children:"\u8fc4"}),Object(v.jsx)("p",{children:e.RoadSectionEnd})]}),Object(v.jsxs)("div",{className:J.a.location,children:[Object(v.jsxs)("p",{children:["\u7e3d\u9577\uff1a",e.CyclingLength/1e3,"KM"]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(H.a,{icon:I.c}),Object(v.jsxs)("p",{children:[e.City," ",e.Town]})]})]})]})};var U=function(n){n.props;var e=Object(a.useState)(!1),t=Object(l.a)(e,2),o=t[0],i=t[1],c=Object(a.useState)(K.a.container_close),r=Object(l.a)(c,2),s=r[0],u=r[1],d=Object(a.useState)([]),p=Object(l.a)(d,2),h=p[0],j=p[1],b=Object(E.c)((function(n){return n.road}));return console.log(b,"adsfafd"),Object(a.useEffect)((function(){_("/v2/Cycling/Shape/".concat(b,"?format=JSON")).then((function(n){var e=n.map((function(n,e){return Object(v.jsx)(G,{data:n},e)}));j(e)}))}),[b]),Object(v.jsx)("div",{className:K.a.container+" "+s,children:Object(v.jsxs)("div",{className:K.a.wrapper,children:[Object(v.jsx)("button",{className:K.a.menu,onClick:function(){o?(u(K.a.container_close),i(!1)):(u(K.a.container_open),i(!0))},children:Object(v.jsx)(H.a,{icon:I.a})}),Object(v.jsx)("div",{className:K.a.menu_list,children:Object(v.jsx)("div",{className:K.a.roadContainer,children:h})})]})})};var Z=function(){var n=Object(a.useState)([]),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)([]),c=Object(l.a)(i,2),r=c[0],d=c[1],p=Object(E.c)((function(n){return n.place})),h=Object(E.c)((function(n){return n.roadSelect})),j=Object(E.c)((function(n){return n.stationOrRoad})),b=Object(a.useState)(null),m=Object(l.a)(b,2),O=m[0],y=m[1],g=Object(a.useState)(null),x=Object(l.a)(g,2),S=x[0],N=x[1];return Object(a.useEffect)((function(){if("station"===j){y(f.a.station_dispaly),N(f.a.road_not_display);var n=null,e=null;function t(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_("/v2/Bike/Station/".concat(p,"?$format=JSON")).then((function(e){n=e}));case 2:return t.next=4,_("v2/Bike/Availability/".concat(p,"?$format=JSON")).then((function(n){e=n}));case 4:n&&n.length===e.length&&(d(e),o(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t()}else y(f.a.station_not_display),N(f.a.road_display)}),[p,h]),Object(v.jsxs)("div",{className:f.a.container,children:[Object(v.jsx)(z,{style:f.a.header}),Object(v.jsx)("div",{className:f.a.map+" "+O,children:Object(v.jsx)(C,{bikeAvailable:r,bikeStations:t})}),Object(v.jsx)("div",{className:f.a.map+" "+S,children:Object(v.jsx)(w,{route:h})}),Object(v.jsx)(U,{})]})},F=t(37),X={place:"NewTaipei",road:"NewTaipei",roadSelect:null,stationOrRoad:"station"},Y=Object(F.a)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PlaceSelect":var t=Object.assign({},n);return t.place=e.payload.place,t.stationOrRoad="station",t;case"RoadPlace":var a=Object.assign({},n);return a.road=e.payload.road,a.stationOrRoad="road",a;case"RoadSelect":var o=Object.assign({},n);return o.roadSelect=e.payload.roadSelect,o.stationOrRoad="road",o;case"ADD_ITEM":var i=n.menuItemData.slice();return{menuItemData:[e.payload.itemNew].concat(i)};case"CLEAN_ITEM":return{menuItemData:[]};default:return n}}));c.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(E.a,{store:Y,children:Object(v.jsx)(Z,{})})}),document.getElementById("root"))},8:function(n,e,t){n.exports={container:"RoadList_container__e5diS",close:"RoadList_close__wnnqw",container_open:"RoadList_container_open__3IAAI",container_close:"RoadList_container_close__2aQ4t",wrapper:"RoadList_wrapper__2yFXH",menu:"RoadList_menu__3_fJT",menu_list:"RoadList_menu_list__2Gm_s",roadContainer:"RoadList_roadContainer__2rnqt"}},9:function(n,e,t){n.exports={container:"Header_container__1VC87",logo:"Header_logo__3_SJs",icon:"Header_icon__2vvCF",selectContainer:"Header_selectContainer__Irzeo",items:"Header_items__2Dz-W"}}},[[72,1,2]]]);
//# sourceMappingURL=main.8d8722c6.chunk.js.map