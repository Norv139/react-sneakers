(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"title":"Nike Air Huarache H","price":10799,"img":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/efb42610-7136-4808-bf8a-7133632ac8b9/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-huarache-l5Pg0s.png"},{"title":"Nike Air Max 95","price":15499,"img":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1e6edcf-6ba9-48fb-83f1-d831736be852/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-95-zcVhs3.png"},{"title":"Nike Air Max 90","price":12799,"img":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/65d02ab6-19ed-4635-81f2-569be3333ae4/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-90-S8L0TL.png"},{"title":"Nike Crater Impact","price":9799,"img":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6a0ff185-b777-4515-9a90-7171fa8b4626/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-crater-impact-0v24WZ.png"},{"title":"Nike Air Huarache N","price":10799,"img":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/efb42610-7136-4808-bf8a-7133632ac8b9/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-huarache-l5Pg0s.png"},{"title":"Nike Air Zoom Pegasus 38 Shield","price":11299,"img":"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5bc11d4-65e7-4254-a896-ee239ee280f5/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B1%D0%B5%D0%B3%D0%B0-%D0%BF%D0%BE-%D1%88%D0%BE%D1%81%D1%81%D0%B5-%D1%81-%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%BE%D0%B9-%D0%BE%D1%82-%D0%BD%D0%B5%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D1%8B-air-zoom-pegasus-38-shield-TJhtkN.png"}]')},25:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var c=i(2),s=i.n(c),a=i(18),n=i.n(a),r=(i(25),i(26),i(20)),l=i(3),j=i(0);var m=function(e){var t=s.a.useState(!1),i=Object(l.a)(t,2);return i[0],i[1],Object(j.jsxs)("div",{className:"card",onClick:e.onClickCard,children:[Object(j.jsx)("div",{className:"favorite"}),Object(j.jsx)("img",{width:133,height:133,src:e.img,alt:"img"}),Object(j.jsx)("h5",{className:"mb-40",children:e.title}),Object(j.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("p",{children:"\u0426\u0435\u043d\u0430:"}),Object(j.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(j.jsx)("div",{className:"plus",children:Object(j.jsx)("img",{onClick:function(){e.onPlus({title:e.title,price:e.price,img:e.img})},width:11,height:11,src:"./img/btn-plus-1.svg",alt:"img"})})]})]})};var o=function(e){return Object(j.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(j.jsxs)("div",{className:"d-flex align-center",children:[Object(j.jsx)("img",{width:40,height:40,src:"img/logo192.png",alt:"img"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"text-uppercase",children:"React sneakers"}),Object(j.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u043e\u0432\u043e\u043a"})]})]}),Object(j.jsxs)("ul",{className:"d-flex ",children:[Object(j.jsxs)("li",{onClick:e.onOpen,className:"mr-30 cu-p",children:[Object(j.jsx)("img",{width:18,height:18,src:"img/shoppingCart.png",alt:"img"}),Object(j.jsxs)("span",{children:[function(){for(var t=e.items.map((function(e){return e.price})),i=0,c=0;c<t.length;c++)i+=parseInt(t[c]);return i}()," \u0440\u0443\u0431."]})]}),Object(j.jsx)("li",{children:Object(j.jsx)("img",{width:18,height:18,src:"img/user.png",alt:"img"})})]})]})};var b=function(e){return Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"driwer",children:[Object(j.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(j.jsx)("img",{onClick:e.onClose,className:"remove-btn",src:"./img/btn_remove.svg",alt:"img"})]}),Object(j.jsx)("div",{className:"items",children:e.items.length>0?Object(j.jsx)("div",{children:e.items.map((function(t){return Object(j.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(j.jsx)("img",{width:133,height:133,src:t.img,alt:"img"}),Object(j.jsxs)("div",{className:"cartText mr-20",children:[Object(j.jsx)("p",{className:"md-5",children:t.title}),Object(j.jsxs)("b",{children:[t.price," \u0440\u0443\u0431."]})]}),Object(j.jsx)("img",{onClick:function(){e.onRemove(t.title)},className:"remove-btn",src:"./img/btn_remove.svg",alt:"img"})]})}))}):Object(j.jsxs)("div",{className:"cart_none",children:[Object(j.jsx)("img",{width:300,src:"https://cdn.the-village.ru/the-village.ru/post_image-image/SDbLTwiH2GdnM11LKNmcVQ.png"}),Object(j.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0442\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0442\u043e\u0432\u0430\u0440"})]})}),Object(j.jsxs)("div",{className:"cartTotalBlock",children:[Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(j.jsx)("div",{}),Object(j.jsxs)("b",{children:[function(){for(var t=e.items.map((function(e){return e.price})),i=0,c=0;c<t.length;c++)i+=parseInt(t[c]);return i}()," \u0440\u0443\u0431."]})]})}),Object(j.jsxs)("button",{className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(j.jsx)("img",{width:16,height:16,src:"./img/rightArrows.svg",alt:"img"})]})]})]})})},d=i(9),h=i.n(d),g=i(19);var u=function(){var e=s.a.useState([]),t=Object(l.a)(e,2),i=t[0],c=t[1],a=s.a.useState([]),n=Object(l.a)(a,2),d=n[0],u=n[1],D=s.a.useState(""),f=Object(l.a)(D,2),x=f[0],p=f[1],O=s.a.useState(!1),B=Object(l.a)(O,2),v=B[0],N=B[1];return s.a.useEffect((function(){h.a.get("https://6191576f41928b0017690030.mockapi.io/items").then((function(e){return e.data})),h.a.get("https://6191576f41928b0017690030.mockapi.io/items").then((function(e){return e.data})),c(g)}),[]),Object(j.jsxs)("div",{className:"wrapper clear",children:[v&&Object(j.jsx)(b,{items:d,onClose:function(){return N(!1)},onRemove:function(e){console.log(e),u((function(t){return t.filter((function(t){return t.title!==e}))}))}}),Object(j.jsx)(o,{items:d,onOpen:function(){return N(!0)}}),Object(j.jsxs)("div",{className:"content p-40",children:[Object(j.jsxs)("div",{className:"md-40 d-flex align-center justify-between",children:[Object(j.jsx)("h1",{children:""===x?"\u0432\u0441\u0435 \u043a\u0440\u043e\u0441\u043e\u0432\u043a\u0438":"\u041f\u043e\u0438\u0441\u043a: "+x}),Object(j.jsxs)("div",{className:"search-block d-flex mb-30",children:[Object(j.jsx)("img",{src:"./img/find_icon.svg",alt:"Search"}),Object(j.jsx)("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:x,onChange:function(e){p(e.target.value)}}),Object(j.jsx)("button",{className:"btn_clear",onClick:function(){p("")},children:"X"})]})]}),Object(j.jsx)("div",{className:"sneakers d-flex flex-wrap",children:i.filter((function(e){return e.title.toLowerCase().includes(x.toLocaleLowerCase())})).map((function(e){return Object(j.jsx)(m,{title:e.title,price:e.price,img:e.img,onPlus:function(e){!function(e){u([].concat(Object(r.a)(d),[e]))}(e)},onFavorite:function(){return alert("onFavorititems")}},e.title)}))})]})]})};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d34d431b.chunk.js.map