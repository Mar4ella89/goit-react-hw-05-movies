"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[215],{215:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),u=t(689),o=t(818),p="CastMovieCard_itemName__+pMcV",d="CastMovieCard_item\u0421haracter__kZYpo",f="CastMovieCard_castItem__4Bg+S",v="CastMovieCard_castList__qL4xr",l=t(184),h=function(e){var r=e.castMovie,t=null===r||void 0===r?void 0:r.map((function(e){var r=e.cast_id,t=e.character,n=e.name,a=e.original_name,s=e.profile_path;return(0,l.jsxs)("li",{className:f,children:[(0,l.jsx)("img",{src:s?"https://image.tmdb.org/t/p/w185".concat(s):"/goit-react-hw-05-movies/cast.jpg ",alt:n,loading:"lazy"}),(0,l.jsx)("h3",{className:p,children:null!==n&&void 0!==n?n:a}),(0,l.jsx)("p",{className:d,children:t})]},r)}));return(0,l.jsx)("ul",{className:v,children:t})},m=function(){var e=(0,i.useState)(),r=(0,a.Z)(e,2),t=r[0],s=r[1],p=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.M1)(p);case 3:r=e.sent,s(r.cast),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.response,console.log(t.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),0===(null===t||void 0===t?void 0:t.length)?(0,l.jsx)("p",{children:"We don't have any cast for this movie"}):(0,l.jsx)(h,{castMovie:t})}},818:function(e,r,t){t.d(r,{M1:function(){return v},Pg:function(){return d},jP:function(){return l},qF:function(){return f},t$:function(){return p}});var n=t(861),a=t(757),s=t.n(a),c=t(912),i=t(7),u=t.n(i),o=c.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b331236c37988e13f653df9937f18de4",language:"en-US",include_adult:!1}}),p=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"all","day",e.next=4,o.get("/trending/".concat("all","/").concat("day"));case 4:return r=e.sent,t=r.data,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r,t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/search/movie",{params:{query:r,page:t}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r,t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(r,"/reviews"),{params:{page:t}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();d.propTypes={id:u().string.isRequired},f.propTypes={searchQuery:u().string.isRequired,page:u().string.isRequired},v.propTypes={id:u().string.isRequired},l.propTypes={id:u().string.isRequired,page:u().string.isRequired}}}]);
//# sourceMappingURL=215.0a04438c.chunk.js.map