"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[166],{166:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(689),o=r(818),v={reviewsItem:"ReviewsMoviesItem_reviewsItem__07eHG",contentWrapper:"ReviewsMoviesItem_contentWrapper__Y4m-I",reviewsUserAvatar:"ReviewsMoviesItem_reviewsUserAvatar__jbsoo",reviewsCreatedAt:"ReviewsMoviesItem_reviewsCreatedAt__My9lE",reviewsUserInfo:"ReviewsMoviesItem_reviewsUserInfo__HlxOi"},p=r(184),f=function(e){var t=e.author,r=e.authorDetails,n=e.content,a=e.createdAt;return(0,p.jsxs)("li",{className:v.reviewsItem,children:[(0,p.jsxs)("div",{className:v.reviewsUserInfo,children:[(0,p.jsx)("img",{className:v.reviewsUserAvatar,width:80,src:r.avatar_path&&r.avatar_path.includes("https")?r.avatar_path.substring(1):"/goit-react-hw-05-movies/avatar.jpg ",alt:""}),(0,p.jsx)("p",{className:v.reviewsAutor,children:t})]}),(0,p.jsxs)("div",{className:v.contentWrapper,children:[(0,p.jsx)("p",{className:v.reviewsCreatedAt,children:a.slice(0,10)}),(0,p.jsx)("p",{children:n})]})]})},l="ReviewsMovies_reviewsList__9KMF+",d=function(){var e=(0,i.useState)(),t=(0,a.Z)(e,2),r=t[0],s=t[1],v=(0,u.UO)().movieId;(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.jP)(v);case 3:t=e.sent,s(t.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response,console.log(r.data.message);case 11:return e.prev=11,e.finish(11);case 13:case"end":return e.stop()}}),e,null,[[0,7,11,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var d=null===r||void 0===r?void 0:r.map((function(e){var t=e.id,r=e.author_details,n=e.author,a=e.created_at,s=e.content;return(0,p.jsx)(f,{author:n,authorDetails:r,content:s,createdAt:a},t)}));return(0,p.jsx)("ul",{className:l,children:d})}},818:function(e,t,r){r.d(t,{M1:function(){return v},Pg:function(){return u},jP:function(){return p},qF:function(){return o},t$:function(){return i}});var n=r(861),a=r(757),s=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b331236c37988e13f653df9937f18de4",language:"en-US",include_adult:!1}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"all","day",e.next=4,c.get("/trending/".concat("all","/").concat("day"));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t,page:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"),{params:{page:r}});case 2:return n=e.sent,a=n.data,console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=166.d90a2442.chunk.js.map