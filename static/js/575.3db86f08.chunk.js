"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[575],{575:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(861),a=t(439),s=t(757),i=t.n(s),u=t(791),c=t(689),o=t(818),v={reviewsItem:"ReviewsMoviesCard_reviewsItem__ZGrSO",contentWrapper:"ReviewsMoviesCard_contentWrapper__dQAUm",reviewsUserAvatar:"ReviewsMoviesCard_reviewsUserAvatar__N2R6G",reviewsCreatedAt:"ReviewsMoviesCard_reviewsCreatedAt__8NaLK",reviewsUserInfo:"ReviewsMoviesCard_reviewsUserInfo__xnv7r",reviewsList:"ReviewsMoviesCard_reviewsList__-LD6r"},p=t(184),d=function(e){var r=e.reviewMovie,t=null===r||void 0===r?void 0:r.map((function(e){var r=e.id,t=e.author_details,n=e.author,a=e.created_at,s=e.content;return(0,p.jsxs)("li",{className:v.reviewsItem,children:[(0,p.jsxs)("div",{className:v.reviewsUserInfo,children:[(0,p.jsx)("img",{className:v.reviewsUserAvatar,width:80,src:t.avatar_path&&t.avatar_path.includes("https")?t.avatar_path.substring(1):"/goit-react-hw-05-movies/avatar.jpg ",alt:""}),(0,p.jsx)("p",{className:v.reviewsAutor,children:n})]}),(0,p.jsxs)("div",{className:v.contentWrapper,children:[(0,p.jsx)("p",{className:v.reviewsCreatedAt,children:a.slice(0,10)}),(0,p.jsx)("p",{children:s})]})]},r)}));return(0,p.jsx)("ul",{className:v.reviewsList,children:t})},f=function(){var e=(0,u.useState)(),r=(0,a.Z)(e,2),t=r[0],s=r[1],v=(0,c.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.jP)(v);case 3:r=e.sent,s(r.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.response,console.log(t.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),0===(null===t||void 0===t?void 0:t.length)?(0,p.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,p.jsx)(d,{reviewMovie:t})}},818:function(e,r,t){t.d(r,{M1:function(){return f},Pg:function(){return p},jP:function(){return l},qF:function(){return d},t$:function(){return v}});var n=t(861),a=t(757),s=t.n(a),i=t(912),u=t(7),c=t.n(u),o=i.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b331236c37988e13f653df9937f18de4",language:"en-US",include_adult:!1}}),v=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"all","day",e.next=4,o.get("/trending/".concat("all","/").concat("day"));case 4:return r=e.sent,t=r.data,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r,t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/search/movie",{params:{query:r,page:t}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r,t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(r,"/reviews"),{params:{page:t}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();p.propTypes={id:c().string.isRequired},d.propTypes={searchQuery:c().string.isRequired,page:c().string.isRequired},f.propTypes={id:c().string.isRequired},l.propTypes={id:c().string.isRequired,page:c().string.isRequired}}}]);
//# sourceMappingURL=575.3db86f08.chunk.js.map