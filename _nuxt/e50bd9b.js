(window.webpackJsonp=window.webpackJsonp||[]).push([[62,30,33,36,38],{168:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(36),r(13),r(66),r(67),{data:function(){return{states:[],stateId:""}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-explore.anak2u.com.my/api/states").then((function(t){return t.json()}));case 2:t.states=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=r(29),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"search-popup"},[t._m(1),t._v(" "),r("div",{staticClass:"search-popup__inner"},[r("form",{staticClass:"search-popup__form",attrs:{action:"#"}},[r("h2",[t._v("Select preferred state")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stateId,expression:"stateId"}],attrs:{list:"states",type:"text",name:"search",placeholder:"Type here to Search...."},domProps:{value:t.stateId},on:{input:function(e){e.target.composing||(t.stateId=e.target.value)}}}),t._v(" "),r("datalist",{attrs:{id:"states"}},t._l(t.states,(function(e){return r("option",{key:e.id},[t._v(t._s(e.city))])})),0),t._v(" "),r("NuxtLink",{attrs:{to:"/state/"+t.stateId}},[r("button",{attrs:{type:"submit"}},[r("i",{staticClass:"kipso-icon-magnifying-glass"})])]),t._v(" "),r("p",[t._v("asdadadas "+t._s(t.stateId))])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"site-footer"},[r("div",{staticClass:"site-footer__upper"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-3 col-lg-6 col-sm-12"},[r("div",{staticClass:"footer-widget footer-widget__contact"},[r("h2",{staticClass:"footer-widget__title"},[t._v("Courses")]),t._v(" "),r("ul",{staticClass:"list-unstyled footer-widget__course-list"},[r("li",[r("h2",[r("a",{attrs:{href:"course-details.html"}},[t._v("Introduction Web Design")])]),t._v(" "),r("p",[t._v("Mike Hardson")])]),t._v(" "),r("li",[r("h2",[r("a",{attrs:{href:"course-details.html"}},[t._v(" Learning MBA Management ")])]),t._v(" "),r("p",[t._v("Jessica Brown")])])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-lg-6 col-sm-12"},[r("div",{staticClass:"footer-widget footer-widget__link"},[r("h2",{staticClass:"footer-widget__title"},[t._v("Explore")]),t._v(" "),r("div",{staticClass:"footer-widget__link-wrap"},[r("ul",{staticClass:"list-unstyled footer-widget__link-list"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Overview")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Teachers")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Join Us")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Our News")])])]),t._v(" "),r("ul",{staticClass:"list-unstyled footer-widget__link-list"},[r("li",[r("a",{attrs:{href:"#"}},[t._v("Help ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Contact")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Register Now")])])])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-lg-6 col-sm-12"},[r("div",{staticClass:"footer-widget footer-widget__gallery"},[r("h2",{staticClass:"footer-widget__title"},[t._v("Gallery")]),t._v(" "),r("ul",{staticClass:"list-unstyled footer-widget__gallery-list"},[r("li",[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/assets/images/footer-1-1.png",alt:""}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/assets/images/footer-1-2.png",alt:""}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/assets/images/footer-1-3.png",alt:""}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/assets/images/footer-1-4.png",alt:""}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/assets/images/footer-1-5.png",alt:""}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"/assets/images/footer-1-6.png",alt:""}})])])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-lg-6 col-sm-12"},[r("div",{staticClass:"footer-widget footer-widget__about"},[r("h2",{staticClass:"footer-widget__title"},[t._v("About")]),t._v(" "),r("p",{staticClass:"footer-widget__text"},[t._v("Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.\n                                      Phasellus vehic sagittis euismod.")]),t._v(" "),r("div",{staticClass:"footer-widget__btn-block"},[r("a",{staticClass:"thm-btn",attrs:{href:"#"}},[t._v("Contact")]),t._v(" "),r("a",{staticClass:"thm-btn",attrs:{href:"#"}},[t._v("Purchase")])])])])])])]),t._v(" "),r("div",{staticClass:"site-footer__bottom"},[r("div",{staticClass:"container"},[r("p",{staticClass:"site-footer__copy"},[t._v("© Copyright 2020 by "),r("a",{attrs:{href:"#"}},[t._v("Layerdrops.com")])]),t._v(" "),r("div",{staticClass:"site-footer__social"},[r("a",{staticClass:"scroll-to-target site-footer__scroll-top",attrs:{href:"#","data-target":"html"}},[r("i",{staticClass:"kipso-icon-top-arrow"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-pinterest-p"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-instagram"})])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-popup__overlay custom-cursor__overlay"},[r("div",{staticClass:"cursor"}),t._v(" "),r("div",{staticClass:"cursor-follower"})])}],!1,null,"52cc078c",null);e.default=component.exports;installComponents(component,{Footer:r(168).default})},169:function(t,e,r){"use strict";r.r(e);var n={name:"NavOne",mounted:function(){if($(".main-navigation .navigation-box").length){$(".main-navigation .sub-menu").parent("li").children("a").append((function(){return'<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>'}));var t=$(".header-navigation .menu-toggler"),e=$(".main-navigation .sub-nav-toggler");t.on("click",(function(){var menu=$(this).data("target");return $(menu).slideToggle(),$(menu).toggleClass("showen"),!1})),e.on("click",(function(){return $(this).parent().parent().children(".sub-menu").slideToggle(),!1}))}}},l=r(29),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("header",{staticClass:"site-header site-header__header-one "},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light header-navigation stricky"},[r("div",{staticClass:"container clearfix"},[t._m(1),t._v(" "),r("div",{staticClass:"main-navigation"},[r("ul",{staticClass:" navigation-box"},[t._m(2),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Pages")]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("nuxt-link",{attrs:{to:"/about"}},[t._v("About Page")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/pricing"}},[t._v("Pricing Plans")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ'S")])],1)])]),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/state/Selangor"}},[t._v("Courses")]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("nuxt-link",{attrs:{to:"/state/Selangor"}},[t._v("Courses")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/course-details"}},[t._v("Course Details")])],1)])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/teachers"}},[t._v("Teachers")]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("nuxt-link",{attrs:{to:"/teachers"}},[t._v("Teachers")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/teacher-details"}},[t._v("Teachers Details")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/become-teacher"}},[t._v("Become Teacher")])],1)])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/news"}},[t._v("News")]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("nuxt-link",{attrs:{to:"/news"}},[t._v("News Page")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/news-details"}},[t._v("News Details")])],1)])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._v(" "),t._m(3)])]),t._v(" "),t._m(4)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topbar-one"},[r("div",{staticClass:"container"},[r("div",{staticClass:"topbar-one__left"},[r("a",{attrs:{href:"#"}},[t._v("needhelp@kipso.com")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("444 888 0000")])]),t._v(" "),r("div",{staticClass:"topbar-one__right"},[r("a",{attrs:{href:"#"}},[t._v("Login")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("Register")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo-box clearfix"},[r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[r("img",{staticClass:"main-logo",attrs:{src:"/assets/images/logo-dark.png",width:"128",alt:"Awesome Image"}})]),t._v(" "),r("div",{staticClass:"header__social"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-pinterest-p"})]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fab fa-instagram"})])]),t._v(" "),r("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"}},[r("span",{staticClass:"kipso-icon-menu"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"current"},[r("a",{attrs:{href:"/"}},[t._v("Home")]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("a",{attrs:{href:"/"}},[t._v("Home 01")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/index-2"}},[t._v("Home 02")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/index-3"}},[t._v("Home 03")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[t._v("Header Versions")]),t._v(" "),r("ul",{staticClass:"sub-menu"},[r("li",[r("a",{attrs:{href:"/"}},[t._v("Header 01")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/index-2"}},[t._v("Header 02")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/index-3"}},[t._v("Header 03")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-side-box"},[e("a",{staticClass:"header__search-btn search-popup__toggler",attrs:{href:"#"}},[e("i",{staticClass:"kipso-icon-magnifying-glass"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"site-header__decor"},[r("div",{staticClass:"site-header__decor-row"},[r("div",{staticClass:"site-header__decor-single"},[r("div",{staticClass:"site-header__decor-inner-1"})]),t._v(" "),r("div",{staticClass:"site-header__decor-single"},[r("div",{staticClass:"site-header__decor-inner-2"})]),t._v(" "),r("div",{staticClass:"site-header__decor-single"},[r("div",{staticClass:"site-header__decor-inner-3"})])])])}],!1,null,"aea5157e",null);e.default=component.exports},170:function(t,e,r){"use strict";r.r(e);var n={name:"PageHeader",props:{title:{type:String}}},l=r(29),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"inner-banner"},[r("div",{staticClass:"container"},[r("ul",{staticClass:"list-unstyled thm-breadcrumb"},[t._m(0),t._v(" "),r("li",{staticClass:"active"},[r("a",{attrs:{href:"#"}},[t._v(t._s(t.title))])])]),t._v(" "),r("h2",{staticClass:"inner-banner__title"},[t._v(t._s(t.title))])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/"}},[t._v("Home")])])}],!1,null,"e69bd05e",null);e.default=component.exports},199:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(36),r(13),r(66),r(67),{data:function(){return{events:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://explore-anak2u-backend.test/api/clients/articles").then((function(t){return t.json()}));case 2:t.events=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=r(29),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"blog-one blog-page"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.events.data,(function(e){return r("div",{key:e.id,staticClass:"col-lg-4"},[r("div",{staticClass:"blog-one__single"},[r("div",{staticClass:"blog-one__image"},[r("img",{attrs:{src:e.image,alt:""}}),t._v(" "),r("nuxt-link",{staticClass:"blog-one__plus",attrs:{to:"/news-details"}},[r("i",{staticClass:"kipso-icon-plus-symbol"})])],1),t._v(" "),r("div",{staticClass:"blog-one__content text-center"},[t._m(0,!0),t._v(" "),r("h2",{staticClass:"blog-one__title"},[r("nuxt-link",{attrs:{to:"/news-details"}},[t._v(t._s(e.title))])],1),t._v(" "),r("p",{staticClass:"blog-one__text"},[t._v("Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit\n                            amet finibus eros.")]),t._v(" "),r("nuxt-link",{staticClass:"blog-one__link",attrs:{to:"/news-details"}},[t._v("Read More")])],1)])])})),0),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-one__meta"},[r("a",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"",href:"#","data-original-title":"Posted On Jan 19"}},[r("i",{staticClass:"fa fa-calendar-alt"})]),t._v(" "),r("a",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"",href:"#","data-original-title":"No Comments"}},[r("i",{staticClass:"fa fa-comments"})]),t._v(" "),r("a",{attrs:{"data-toggle":"tooltip","data-placement":"top",title:"",href:"#","data-original-title":"Posted By Admin"}},[r("i",{staticClass:"fa fa-user"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-pagination"},[r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-angle-double-left"})]),t._v(" "),r("a",{staticClass:"active",attrs:{href:"#"}},[t._v("1")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("2")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("3")]),t._v(" "),r("a",{attrs:{href:"#"}},[t._v("4")]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fa fa-angle-double-right"})])])}],!1,null,"139ab169",null);e.default=component.exports},229:function(t,e,r){"use strict";r.r(e);var n=r(170),l=r(169),o=r(168),c=r(199),_={components:{Footer:o.default,NavOne:l.default,PageHeader:n.default,News:c.default},head:function(){return{title:"Kipso | News"}}},v=r(29),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavOne"),t._v(" "),r("PageHeader",{attrs:{title:"News"}}),t._v(" "),r("News"),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavOne:r(169).default,PageHeader:r(170).default,News:r(199).default,Footer:r(168).default})}}]);