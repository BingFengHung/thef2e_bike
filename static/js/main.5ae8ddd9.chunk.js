(this.webpackJsonpthef2e_bike=this.webpackJsonpthef2e_bike||[]).push([[0],{14:function(n,e,t){n.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n"}},24:function(n,e,t){n.exports={container:"Map_container__3xh_q"}},32:function(n,e,t){},6:function(n,e,t){n.exports={container:"Header_container__1VC87",logo:"Header_logo__3_SJs",selectContainer:"Header_selectContainer__Irzeo",items:"Header_items__2Dz-W"}},63:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),o=t(9),r=t.n(o),c=(t(32),t(4)),u=t.n(c),s=t(10),l=t(12),p=t(11),h=t.n(p),d=t(26);function b(){var n=(new Date).toGMTString(),e=new d.a("SHA-1","TEXT");return e.setHMACKey("0o53fh7JHKpoZBW2kIM8SM7GW4Y","TEXT"),e.update("x-date: "+n),{Authorization:'hmac username="83fc39f9c29946578ee26c17b458f970", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":n}}function f(){return(f=Object(s.a)(u.a.mark((function n(e){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("hi",e),h.a.defaults.baseURL="https://ptx.transportdata.tw/MOTC",h.a.defaults.headers=b(),n.next=6,h.a.get(e);case 6:if(200!==(t=n.sent).status){n.next=9;break}return n.abrupt("return",t.data);case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:return n.abrupt("return",null);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}var j=function(n){return f.apply(this,arguments)},y=t(14),m=t.n(y),g=(t(52),t(5)),C=t.n(g),v=t(24),O=t.n(v),x=(t(53),t(54),t(55),t(3)),_=t(1);var k=function(n){var e=n.bikeAvailable,t=n.bikeStations,i=Object(a.useRef)();return Object(a.useEffect)((function(){if(null===t||0===t.length)return null;var n=C.a.map(i.current,{center:[t[0].StationPosition.PositionLat,t[0].StationPosition.PositionLon],zoom:16});C.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n);var a=new C.a.Icon({iconUrl:"https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),o=C.a.markerClusterGroup();return t.map((function(n,t){return C.a.marker([n.StationPosition.PositionLat,n.StationPosition.PositionLon],{icon:a}).bindPopup("<div> \n\t\t\t<h1>".concat(n.StationName.Zh_tw,"</h1>\n\t\t\t<p>").concat(n.StationAddress.Zh_tw,"</p>\n\t\t\t<p>\u53ef\u79df\u501f\u6578\u91cf").concat(e[t].AvailableRentBikes,"</p>\n\t\t\t<p>\u53ef\u6b78\u9084\u6578\u91cf").concat(e[t].AvailableReturnBikes,"</p>\n\t\t\t</div>\n\t\t\t"))})).forEach((function(n){return o.addLayer(n)})),n.addLayer(o),function(){return n.remove()}}),[t]),Object(_.jsx)("div",{className:O.a.container,ref:function(n){return i.current=n}})},T=t(6),w=t.n(T),S="\u81fa\u5317\u5e02:Taipei\n\u65b0\u5317\u5e02:NewTaipei\n\u6843\u5712\u5e02:Taoyuan\n\u81fa\u4e2d\u5e02:Taichung\n\u81fa\u5357\u5e02:Tainan\n\u9ad8\u96c4\u5e02:Kaohsiung\n\u57fa\u9686\u5e02:Keelung\n\u65b0\u7af9\u5e02:Hsinchu\n\u65b0\u7af9\u7e23:HsinchuCounty\n\u82d7\u6817\u7e23:MiaoliCounty\n\u5f70\u5316\u7e23:ChanghuaCounty\n\u5357\u6295\u7e23:NantouCounty\n\u96f2\u6797\u7e23:YunlinCounty\n\u5609\u7fa9\u7e23:ChiayiCounty\n\u5609\u7fa9\u5e02:Chiayi\n\u5c4f\u6771\u7e23:PingtungCounty\n\u5b9c\u862d\u7e23:YilanCounty\n\u82b1\u84ee\u7e23:HualienCounty\n\u81fa\u6771\u7e23:TaitungCounty\n\u91d1\u9580\u7e23:KinmenCounty\n\u6f8e\u6e56\u7e23:PenghuCounty\n\u9023\u6c5f\u7e23:LienchiangCounty".split(/\r?\n/),N="\u81fa\u4e2d\u5e02:Taichung\n\u65b0\u7af9\u5e02:Hsinchu\n\u82d7\u6817\u7e23:MiaoliCounty\n\u65b0\u5317\u5e02:NewTaipei\n\u5c4f\u6771\u7e23:PingtungCounty\n\u91d1\u9580\u7e23:KinmenCounty\n\u6843\u5712\u5e02:Taoyuan\n\u81fa\u5317\u5e02:Taipei\n\u9ad8\u96c4\u5e02:Kaohsiung\n\u81fa\u5357\u5e02:Tainan\n\u5609\u7fa9\u5e02:Chiayi".split(/\r?\n/),A="\u81fa\u4e2d\u5e02:Taichung\n\u57fa\u9686\u5e02:Keelung\n\u65b0\u7af9\u7e23:HsinchuCounty\n\u82d7\u6817\u7e23:MiaoliCounty\n\u5f70\u5316\u7e23:ChanghuaCounty\n\u65b0\u5317\u5e02:NewTaipei\n\u5357\u6295\u7e23:NantouCounty\n\u96f2\u6797\u7e23:YunlinCounty\n\u5609\u7fa9\u7e23:ChiayiCounty\n\u5609\u7fa9\u5e02:Chiayi\n\u5c4f\u6771\u7e23:PingtungCounty\n\u5b9c\u862d\u7e23:YilanCounty\n\u82b1\u84ee\u7e23:HualienCounty\n\u81fa\u6771\u7e23:TaitungCounty\n\u91d1\u9580\u7e23:KinmenCounty\n\u6f8e\u6e56\u7e23:PenghuCounty\n\u6843\u5712\u5e02:Taoyuan\n\u81fa\u5317\u5e02:Taipei\n\u9ad8\u96c4\u5e02:Kaohsiung\n\u81fa\u5357\u5e02:Tainan".split(/\r?\n/),M=(S.map((function(n,e){return n.split(":")})),N.map((function(n,e){return n.split(":")}))),P=A.map((function(n){return n.split(":")})),H=function(n){var e=M.map((function(n,e){return Object(_.jsx)("option",{value:n[1],children:n[0]},e)})),t=P.map((function(n,e){return Object(_.jsx)("option",{value:n[1],children:n[0]},e)})),a=Object(x.b)();return Object(_.jsxs)("div",{className:w.a.container+" "+n.style,children:[Object(_.jsx)("p",{className:w.a.logo,children:"Go Bike"}),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:w.a.selectContainer,children:[Object(_.jsxs)("div",{className:w.a.items,children:[Object(_.jsx)("p",{children:"Bike Station\uff1a"}),Object(_.jsxs)("select",{onChange:function(n){a({type:"ADD_ITEM",payload:{itemNew:n.target.value}}),a({type:"PlaceSelect",payload:{place:n.target.value}})},children:[Object(_.jsx)("option",{disabled:!0,selected:!0,value:!0,children:"\u79df\u8eca/\u9084\u8eca"}),e]})]}),Object(_.jsxs)("div",{className:w.a.items,children:[Object(_.jsx)("p",{children:"\u81ea\u884c\u8eca\u9053\uff1a"}),Object(_.jsxs)("select",{children:[Object(_.jsx)("option",{disabled:!0,selected:!0,value:!0,children:"\u81ea\u884c\u8eca\u9053"}),t]})]})]})})]})};var L=function(){var n=Object(a.useState)([]),e=Object(l.a)(n,2),t=(e[0],e[1],Object(a.useState)([])),i=Object(l.a)(t,2),o=i[0],r=i[1],c=Object(a.useState)([]),p=Object(l.a)(c,2),h=p[0],d=p[1],b=Object(x.c)((function(n){return n.place}));return Object(a.useEffect)((function(){var n=null,e=null;function t(){return(t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j("/v2/Bike/Station/".concat(b,"?$format=JSON")).then((function(e){console.log("A"),n=e}));case 2:return t.next=4,j("v2/Bike/Availability/".concat(b,"?$format=JSON")).then((function(n){console.log("B"),e=n}));case 4:console.log(n.length,e.length),n.length===e.length?(d(e),r(n)):alert("Not compare");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[b]),Object(_.jsxs)("div",{className:m.a.container,children:[Object(_.jsx)(H,{style:m.a.header}),Object(_.jsx)(k,{bikeAvailable:h,bikeStations:o})]})},D=t(27),I={menuItemData:["Like\u7684\u767c\u554f","Like\u7684\u56de\u7b54","Like\u7684\u6587\u7ae0","Like\u7684\u7559\u8a00"],place:"NewTaipei"},B=Object(D.a)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PlaceSelect":var t=n;return t.place=e.payload.place,t;case"ADD_ITEM":var a=n.menuItemData.slice();return console.log(a),{menuItemData:[e.payload.itemNew].concat(a)};case"CLEAN_ITEM":return{menuItemData:[]};default:return n}}));r.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(x.a,{store:B,children:Object(_.jsx)(L,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5ae8ddd9.chunk.js.map