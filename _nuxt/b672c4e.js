(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{177:function(t,e,c){"use strict";c.r(e);var r=c(2),n=(c(36),c(13),c(66),c(67),c(18),{props:["state"],data:function(){return{schools:[],cities:[],categories:[],city:"",category:"Tadika"}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://explore-anak2u-backend.test/api/clients/negeri/"+t.state).then((function(t){return t.json()})).then((function(data){t.city=data.cities[0].name,t.category=data.categories[1].name,t.schools=data.data,t.cities=data.cities,t.categories=data.categories}));case 2:case"end":return e.stop()}}),e)})))()})),methods:{debug:function(){console.log("ok"),console.log("http://explore-anak2u-backend.test/api/clients/negeri/"+this.state),console.log("get data "+this.city),console.log("get data "+this.category)},changeCity:function(t){var e=this;this.city=t,fetch("http://explore-anak2u-backend.test/api/clients/negeri/"+this.state+"/"+this.city).then((function(t){return t.json()})).then((function(data){e.schools=data.data,e.category=data.categories[1].name,e.categories=data.categories}))},changeCategory:function(t){var e=this;this.category=t,fetch("http://explore-anak2u-backend.test/api/clients/negeri/"+this.state+"/"+this.city+"/"+this.category).then((function(t){return t.json()})).then((function(data){console.log(data.data),e.schools=data.data}))}},beforeUpdate:function(){}}),o=n,l=c(29),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"course-one course-page"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-3 col-sm-12"},[c("div",{staticStyle:{"background-color":"white",margin:"30px 10px"}},[c("table",{staticClass:"search-result-table"},[c("thead",[c("tr",[c("td",{attrs:{colspan:"3"}},[t._v("Search by type")]),t._v(" "),c("td",[c("button",{on:{click:t.debug}},[t._v("console")])])])]),t._v(" "),c("tbody",[c("tr",{on:{click:function(e){return t.changeCategory("All")}}},[c("td",{staticClass:"search-result-table-col-1"}),t._v(" "),c("td",{staticClass:"search-result-table-col-2"},[t._v("> All")]),t._v(" "),c("td",{staticClass:"search-result-table-col-3"})]),t._v(" "),t._l(t.categories,(function(e){return c("tr",{key:e.id,on:{click:function(c){return t.changeCategory(e.name)}}},[c("td",{staticClass:"search-result-table-col-1"}),t._v(" "),c("td",{staticClass:"search-result-table-col-2"},[t._v("> "+t._s(e.name))]),t._v(" "),c("td",{staticClass:"search-result-table-col-3"},[t._v("("+t._s(e.count)+")")])])}))],2)])]),t._v(" "),c("div",{staticStyle:{"background-color":"white",margin:"30px 10px"}},[c("table",{staticClass:"search-result-table"},[t._m(0),t._v(" "),c("tbody",t._l(t.cities,(function(e){return c("tr",{key:e.id,on:{click:function(c){return t.changeCity(e.name)}}},[c("td",{staticClass:"search-result-table-col-1"}),t._v(" "),c("td",{staticClass:"search-result-table-col-2"},[t._v("> "+t._s(e.name))]),t._v(" "),c("td",{staticClass:"search-result-table-col-3"},[t._v("("+t._s(e.count)+")")])])})),0)])])]),t._v(" "),c("div",{staticClass:"col-lg-9 col-sm-12"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-6",staticStyle:{"text-align":"center"}},[t._v("Category : "+t._s(this.category))]),t._v(" "),c("div",{staticClass:"col-6",staticStyle:{"text-align":"center"}},[t._v("City :  "+t._s(this.city))]),t._v(" "),t._l(t.schools,(function(e){return c("div",{key:e.id,staticClass:"col-lg-6 col-sm-12",staticStyle:{padding:"10px auto"}},[c("NuxtLink",{staticClass:"course-one__single",attrs:{to:"/details/"+e.client_slug}},[c("div",{staticClass:"course-one__image"},[c("img",{attrs:{src:e.logo_url,alt:""}}),t._v(" "),c("i",{staticClass:"far fa-heart"})]),t._v(" "),c("div",{staticClass:"course-one__content"},[c("a",{staticClass:"course-one__category",attrs:{href:"#"}},[t._v(t._s(e.category.name))]),t._v(" "),c("div",{staticClass:"course-one__admin"},[c("img",{attrs:{src:"/assets/images/team-1-1.jpg",alt:""}}),t._v("\n                                    by "),c("nuxt-link",{attrs:{to:"/teacher-details"}},[t._v("Lou Guerrero")])],1),t._v(" "),c("h2",{staticClass:"course-one__title"},[c("nuxt-link",{attrs:{to:"/course-details"}},[t._v(t._s(e.client_name))])],1),t._v(" "),c("div",{staticClass:"course-one__stars"},[c("span",{staticClass:"course-one__stars-wrap"},[c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"}),t._v(" "),c("i",{staticClass:"fa fa-star"})]),t._v(" "),c("span",{staticClass:"course-one__count"},[t._v("4.8")]),t._v(" "),c("span",{staticClass:"course-one__stars-count"},[t._v("250")])]),t._v(" "),c("div",{staticClass:"course-one__meta"},[c("nuxt-link",{attrs:{to:"/course-details"}},[c("i",{staticClass:"far fa-clock"}),t._v(" 10 Hours")]),t._v(" "),c("nuxt-link",{attrs:{to:"/course-details"}},[c("i",{staticClass:"far fa-folder-open"}),t._v(" 6 Lectures")]),t._v(" "),c("nuxt-link",{attrs:{to:"/course-details"}},[t._v("RM "+t._s(e.client_fee))])],1),t._v(" "),c("a",{staticClass:"course-one__link",attrs:{href:"#"}},[t._v("See Preview")])])])],1)}))],2)])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("thead",[c("tr",[c("td",{attrs:{colspan:"3"}},[t._v("Search by city")])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"post-pagination"},[c("a",{attrs:{href:"#"}},[c("i",{staticClass:"fa fa-angle-double-left"})]),t._v(" "),c("a",{staticClass:"active",attrs:{href:"#"}},[t._v("1")]),t._v(" "),c("a",{attrs:{href:"#"}},[t._v("2")]),t._v(" "),c("a",{attrs:{href:"#"}},[t._v("3")]),t._v(" "),c("a",{attrs:{href:"#"}},[t._v("4")]),t._v(" "),c("a",{attrs:{href:"#"}},[c("i",{staticClass:"fa fa-angle-double-right"})])])}],!1,null,"7e5b875b",null);e.default=component.exports}}]);