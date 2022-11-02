"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[288],{725:function(e,t,n){n.d(t,{s:function(){return i}});var r=n(689),s=n(731),a=n(184),i=function(e){var t=e.list,n=e.path,i=void 0===n?"":n,o=(0,r.TH)();return(0,a.jsx)("ul",{children:t.map((function(e){var t=e.title,n=e.id;return(0,a.jsx)("li",{children:(0,a.jsx)(s.OL,{to:"".concat(i).concat(n),state:{from:o},children:t})},n)}))})}},288:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,s=n(885),a=n(791),i=n(168),o=n(82).ZP.form(r||(r=(0,i.Z)(["\n    margin-top: 40px;\n    padding-left: 10px;\n    & input{\n        box-sizing: border-box;\n        width: 300px;\n        height: 30px;\n        margin-right: 3px;\n    }\n    & button{\n        height: 30px;\n    }\n"]))),c=n(184),u=function(e){var t=e.onSubmit,n=(0,a.useState)(""),r=(0,s.Z)(n,2),i=r[0],u=r[1];return(0,c.jsxs)(o,{onSubmit:function(e){e.preventDefault(),i&&(t({keyword:i.trim()}),u(""))},children:[(0,c.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;u(t)},value:i}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})},h=n(731),p=n(725),f=n(321),v=function(e){var t=e.isLoading,n=(0,h.lr)(),r=(0,s.Z)(n,2),i=r[0],o=r[1],v=i.get("keyword"),l=(0,a.useState)([]),g=(0,s.Z)(l,2),x=g[0],d=g[1];return(0,a.useEffect)((function(){v&&(t(!0),f.h.getSearchMovie(v).then((function(e){0!==e.results.length&&d(e.results)})).catch((function(e){console.log(e)})).finally((function(){t(!1)})))}),[v,t]),(0,c.jsxs)("main",{children:[(0,c.jsx)(u,{onSubmit:o}),x.length>0&&(0,c.jsx)(p.s,{list:x})]})}},321:function(e,t,n){n.d(t,{h:function(){return f}});var r=n(982);function s(e,t,n,r,s,a,i){try{var o=e[a](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,s)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,c,"next",e)}function c(e){s(i,r,a,o,c,"throw",e)}o(void 0)}))}}var i=n(671),o=n(144),c=n(687),u=n.n(c),h=n(869),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"7cf73ae9a20e9f92c4fc22e4e8bf4150";(0,i.Z)(this,e),this.apiKey=t,this.imageURL="https://image.tmdb.org/t/p/w500",this.allGenres=!0,this.genres=[]}return(0,o.Z)(e,[{key:"getTrendingMovies",value:function(){var e=a(u().mark((function e(){var t,n,r,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,e.prev=1,e.next=4,this.getGenres();case 4:return e.next=6,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(this.apiKey,"&page=").concat(t));case 6:if(!(n=e.sent).ok){e.next=12;break}return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",this.showMovieInfo(r));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchMovie",value:function(){var e=a(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGenres();case 2:return e.prev=2,e.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(this.apiKey,"&query=").concat(t));case 5:if(!(n=e.sent).ok){e.next=11;break}return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",this.showMovieInfo(r));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieInfo",value:function(){var e=a(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGenres();case 2:return e.prev=2,e.next=5,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(this.apiKey));case 5:if(!(n=e.sent).ok){e.next=11;break}return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",this.showMovieInfo(r));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=a(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGenres();case 2:return e.prev=2,e.next=5,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(this.apiKey));case 5:if(!(n=e.sent).ok){e.next=12;break}return e.next=9,n.json();case 9:return(r=e.sent).cast=this.showCasts(r.cast),e.abrupt("return",r);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[2,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=a(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGenres();case 2:return e.prev=2,e.next=5,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(this.apiKey));case 5:if(!(n=e.sent).ok){e.next=11;break}return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"showMovieInfo",value:function(e){var t=this;return Array.isArray(e.results)?e.results=e.results.map((function(e){return e.poster_path=t.imageURL+e.poster_path,e.backdrop_path=t.imageURL+e.backdrop_path,e.genre_ids=t.showGenres(e.genre_ids),e})):(e.poster_path=this.imageURL+e.poster_path,e.backdrop_path=this.imageURL+e.backdrop_path,e.genre_ids=this.showGenres(e.genre_ids)),e}},{key:"getGenres",value:function(){var e=a(u().mark((function e(){var t,n,s,a,i,o,c,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.allGenres){e.next=34;break}return this.allGenres=!this.allGenres,t="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(this.apiKey),n="https://api.themoviedb.org/3/genre/tv/list?api_key=".concat(this.apiKey),e.prev=4,e.next=7,fetch(t);case 7:if(!(s=e.sent).ok){e.next=13;break}return e.next=11,s.json();case 11:i=e.sent,(a=this.genres).push.apply(a,(0,r.Z)(i.genres));case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.error("Error in getGenres"),console.log(e.t0);case 19:return e.prev=19,e.next=22,fetch(n);case 22:if(!(o=e.sent).ok){e.next=28;break}return e.next=26,o.json();case 26:h=e.sent,(c=this.genres).push.apply(c,(0,r.Z)(h.genres));case 28:e.next=34;break;case 30:e.prev=30,e.t1=e.catch(19),console.error("Error in getGenres"),console.log(e.t1);case 34:case"end":return e.stop()}}),e,this,[[4,15],[19,30]])})));return function(){return e.apply(this,arguments)}}()},{key:"showGenres",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.genres.length<1?t:t=t.map((function(t){return e.genres.find((function(e){return e.id===t})).name}))}},{key:"showCasts",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t=t.map((function(t){return t.profile_path?(t.profile_path=e.imageURL+t.profile_path,t):(t.profile_path=h,t)}))}}]),e}(),f=new p},869:function(e,t,n){e.exports=n.p+"static/media/noImage.86e8f937e78ff43f6665.png"}}]);
//# sourceMappingURL=288.c0314027.chunk.js.map