(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"09fd":function(n,t,e){"use strict";e.r(t);var i=e("e844"),r=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=r.a},"71df":function(n,t,e){"use strict";var i=e("8375"),r=e.n(i);r.a},"77fb":function(n,t,e){"use strict";(function(n){e("f032");i(e("66fd"));var t=i(e("ac74"));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},8375:function(n,t,e){},ac74:function(n,t,e){"use strict";e.r(t);var i=e("e40e"),r=e("09fd");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("71df");var u,o=e("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports},e40e:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var r=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.newsList,(function(t,e){var i=n.__get_orig(t),r=t.newsPhoto?t.newsPhoto.split(","):null;return{$orig:i,g0:r}}))),i=n.__map(n.shangpinList,(function(t,e){var i=n.__get_orig(t),r=t.shangpinPhoto?t.shangpinPhoto.split(","):null;return{$orig:i,g1:r}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},a=[]},e844:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=u(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return o=n.done,n},e:function(n){c=!0,a=n},f:function(){try{o||null==e.return||e.return()}finally{if(c)throw a}}}}function u(n,t){if(n){if("string"===typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function c(n,t,e,i,r,a,u){try{var o=n[a](u),c=o.value}catch(s){return void e(s)}o.done?t(c):Promise.resolve(c).then(i,r)}function s(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var a=n.apply(t,e);function u(n){c(a,i,r,u,o,"next",n)}function o(n){c(a,i,r,u,o,"throw",n)}u(void 0)}))}}e("c64a");var l=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("6d0e"))}.bind(null,e)).catch(e.oe)},f={components:{uniIcons:l},data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],newsList:[],shangpinchurukuList:[],shangpinList:[]}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var n=this;return s(i.default.mark((function t(){var e,r,u,o,c,s,l,f;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,n.$api.page("config",{page:1,limit:5});case 3:r=t.sent,u=a(r.data.list);try{for(u.s();!(o=u.n()).done;)c=o.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&e.push({img:c.value})}catch(i){u.e(i)}finally{u.f()}return e&&(n.swiperList=e),t.next=9,n.$api.list("news",{page:1,limit:6});case 9:return s=t.sent,n.newsList=s.data.list,t.next=13,n.$api.list("shangpinchuruku",{page:1,limit:6});case 13:return l=t.sent,n.shangpinchurukuList=l.data.list,t.next=17,n.$api.list("shangpin",{page:1,limit:6,shangxiaTypes:1,shangpinDelete:1});case 17:f=t.sent,n.shangpinList=f.data.list;case 19:case"end":return t.stop()}}),t)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=f}).call(this,e("543d")["default"])}},[["77fb","common/runtime","common/vendor"]]]);