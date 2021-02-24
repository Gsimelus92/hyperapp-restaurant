(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        hyper: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/hyper/index.js", "vendors~hyper" ]);
    return checkDeferredModules();
})({
    "./assets/js/hyper/actions/actions.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return actions; });\nconst actions = {\n  reviewLeftClicked,\n  reviewRightClicked,\n  intro,\n  showMenu\n};\n\nfunction reviewLeftClicked(state, actions) {\n  return {\n    reviewStatus: {\n      currentReview: state.reviewStatus.currentReview - 1\n    }\n  };\n}\n\nfunction reviewRightClicked(state, actions) {\n  return {\n    reviewStatus: {\n      currentReview: state.reviewStatus.currentReview + 1\n    }\n  };\n}\n\nfunction showMenu() {}\n\nfunction intro(state, actions) {\n  console.log('Just ran my first action');\n  return {\n    count: state.count + 1\n  };\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/actions/actions.js?");
    },
    "./assets/js/hyper/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.js */ "./assets/js/hyper/components/Header.js");\n/* harmony import */ var _TopImg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopImg.js */ "./assets/js/hyper/components/TopImg.js");\n/* harmony import */ var _OurStory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OurStory.js */ "./assets/js/hyper/components/OurStory.js");\n/* harmony import */ var _SpecialMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpecialMenu.js */ "./assets/js/hyper/components/SpecialMenu.js");\n/* harmony import */ var _RandomQuote_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RandomQuote.js */ "./assets/js/hyper/components/RandomQuote.js");\n/* harmony import */ var _Reviews_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Reviews.js */ "./assets/js/hyper/components/Reviews.js");\n/* harmony import */ var _ContactUs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContactUs.js */ "./assets/js/hyper/components/ContactUs.js");\n/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer.js */ "./assets/js/hyper/components/Footer.js");\n\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": \'app\'\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Header_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_TopImg_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_OurStory_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_SpecialMenu_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_RandomQuote_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Reviews_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_ContactUs_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_Footer_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/App.js?');
    },
    "./assets/js/hyper/components/ContactUs.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction ContactUs(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "ContactUs"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", {\n    "class": "comp-title"\n  }, "Contact Us"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, "Delicious Flavor of Autumn"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "box"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "row"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-6"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "city"\n  }, state.companyInfo.location), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h6", {\n    "class": "Address"\n  }, "435 main st ", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("br", null), "Somerville, ma 02148"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, "email:"), \' \', Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "mailto:info@primesteak.com"\n  }, "info@primesteak.com"))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-6"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h6", null, "Phone:"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, "342-346-6789"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h6", null, "Lunch Services:"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "Friday, Saturday and SUnday ", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("br", null), "from 12pm - 1:30pm"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h6", null, "Phone:"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, "342-346-6789"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h6", null, "Dinner Services:"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "Daily ", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("br", null), "from 6pm - 9:30pm"))))));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/ContactUs.js?');
    },
    "./assets/js/hyper/components/Footer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Footer(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("footer", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("nav", {\n    "class": "menu"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Our Story"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Reviews"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Special Menu"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Reservations"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Contact US")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("ul", {\n    "class": "social-media"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("li", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://www.facebook.com",\n    target: "new"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-facebook-square"\n  }))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("li", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://www.twitter.com",\n    target: "new"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-twitter"\n  }))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("li", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://www.google.com",\n    target: "new"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-google-plus-g"\n  }))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("li", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "https://www.youtube.com",\n    target: "new"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    "class": "fab fa-youtube-square"\n  })))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "copyright"\n  }, "\\xA9 2019 Copyright")));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Footer.js?');
    },
    "./assets/js/hyper/components/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Header(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("header", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "logo"\n  }, "Logo"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("nav", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Our Story"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "App.js#Reviews"\n  }, "Reviews"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Special Menu"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Reservations"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#"\n  }, "Contact Us"))));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\nObject(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n  href: "index.html#about"\n}, "About");\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Header.js?');
    },
    "./assets/js/hyper/components/OurStory.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurStory; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction OurStory(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "OurStory"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "row"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-6"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", {\n    "class": "comp-title"\n  }, "Our Story"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, "Cooking is the art of adustment"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, "Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY. Vegan quinoa post-ironic typewriter put a bird on it la croix pitchfork pop-up knausgaard deep v photo booth woke. Brooklyn tattooed franzen, farm-to-table glossier salvia sartorial sriracha meditation vegan art party pickled small batch. Artisan shaman tumblr, williamsburg pork belly activated charcoal listicle mixtape flannel chillwave godard crucifix retro tacos woke. YOLO DIY gochujang, pabst authentic cronut tacos wolf godard shaman forage seitan kitsch literally. Everyday carry godard af", \' \'), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "quote"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", null, "\\"The best steak in the toen of huntington\\""), "-", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, "Thomas Eggsy")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#",\n    "class": "reserve-btn"\n  }, "Reserve")), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-6"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "video-img"\n  })))));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/OurStory.js?');
    },
    "./assets/js/hyper/components/RandomQuote.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopImg; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction TopImg(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "RandomQuote",\n    style: {\n      backgroundImage: \'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url("https://www.thekitchenmagpie.com/wp-content/uploads/images/2009/10/how-to-cook-a-prime-rib-roast.jpeg")\'\n    }\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, "\\"Good painting is like good cooking: it can be tasted, but not explained.\\""), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", {\n    "class": "author"\n  }, "Johny -")));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/RandomQuote.js?');
    },
    "./assets/js/hyper/components/Reviews.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reviews; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction Reviews(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n\n  var currentReview = function currentReview() {\n    return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", null, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", {\n      "class": "comp-title"\n    }, "Reviews"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, state.reviewsData[state.reviewStatus.currentReview].company), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h4", null, state.reviewsData[state.reviewStatus.currentReview].highlight), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", null, state.reviewsData[state.reviewStatus.currentReview].review), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n      "class": "author"\n    }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, state.reviewsData[state.reviewStatus.currentReview].author), \' \', "-", \' \', Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("em", null, state.reviewsData[state.reviewStatus.currentReview].authourInfo)));\n  };\n\n  var leftClickBTN = function leftClickBTN() {\n    if (state.reviewStatus.currentReview == 0) {\n      console.log(\'do nothing\');\n    } else {\n      actions.reviewLeftClicked();\n    }\n  };\n\n  var rightClickBTN = function rightClickBTN() {\n    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {\n      console.log(\'do nothing\');\n    } else {\n      actions.reviewRightClicked();\n    }\n  };\n\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "Reviews"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "row"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-8"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "side-img"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("img", {\n    src: "https://www.at-sunrice.com/assets/Uploads/Chef-Clement-REAL.jpg"\n  }))), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "col-md-4"\n  }, currentReview(), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "arrows"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    onclick: leftClickBTN,\n    "class": "fa fa-arrow-left ".concat(state.reviewStatus.currentReview > 0 ? \'ready\' : \'\'),\n    "aria-hidden": "true"\n  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("i", {\n    onclick: rightClickBTN,\n    "class": "fa fa-arrow-right ".concat(state.reviewStatus.currentReview == state.reviewsData.length - 1 ? \'\' : \'ready\'),\n    "aria-hidden": "true"\n  }))))));\n}\n\n//# sourceURL=webpack:///./assets/js/hyper/components/Reviews.js?');
    },
    "./assets/js/hyper/components/SpecialMenu.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialMenu; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction SpecialMenu(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n\n  var loopMenu = function loopMenu() {\n    return state.specialMenuData.map(function (item) {\n      console.log(item.title);\n      return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n        "class": "col-md-4"\n      }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n        "class": "box"\n      }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n        "class": "box-img"\n      }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n        "class": "price-circle"\n      }, "$", item.price)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("span", {\n        "class": "title"\n      }, item.title), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("p", {\n        "class": "details"\n      }, item.description)));\n    });\n  };\n\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "SpecialMenu"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", {\n    "class": "comp-title"\n  }, "Special Menu"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, "Delicious Flavor of Auumn"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "row boxes"\n  }, loopMenu()), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("a", {\n    href: "#",\n    "class": "link"\n  }, "View Full Menu")));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/SpecialMenu.js?');
    },
    "./assets/js/hyper/components/TopImg.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopImg; });\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n\nfunction TopImg(_ref) {\n  let {\n    state,\n    actions\n  } = _ref;\n  console.log(state);\n  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("section", {\n    id: "TopImg"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "title"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h5", null, "Welcome"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h1", null, state.companyInfo.title)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "contact-info"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "container"\n  }, Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "booking"\n  }, "Book Table Directly"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("h2", null, "(781) - 219 - 8652"), Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("div", {\n    "class": "hours"\n  }, "Opening Hours ", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, "Mon -Fri:"), " 9am - 9pm", Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])("strong", null, "Weekend:"), " 9am - 11pm")))));\n} // <Header state={state} actions={actions}/>\n// <Button state={state} actions={actions}/>\n\n//# sourceURL=webpack:///./assets/js/hyper/components/TopImg.js?');
    },
    "./assets/js/hyper/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");\n/* harmony import */ var _actions_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/actions.js */ "./assets/js/hyper/actions/actions.js");\n/* harmony import */ var _state_globalState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/globalState.js */ "./assets/js/hyper/state/globalState.js");\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App.js */ "./assets/js/hyper/components/App.js");\n\n\n\n\nObject(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* app */ "a"])({\n  state: _state_globalState_js__WEBPACK_IMPORTED_MODULE_2__[/* globalState */ "a"],\n  view: (state, actions) => Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__[/* h */ "b"])(_components_App_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n    state: state,\n    actions: actions\n  }),\n  root: document.getElementById(\'app\'),\n  actions: _actions_actions_js__WEBPACK_IMPORTED_MODULE_1__[/* actions */ "a"],\n  events: {\n    action(state, actions, _ref) {\n      let {\n        name,\n        data\n      } = _ref;\n      console.group(\'Action Info\');\n      console.log(\'Name:\', name);\n      console.log(\'Data:\', data);\n      console.groupEnd();\n    },\n\n    load(state, actions) {\n      actions.intro();\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/hyper/index.js?');
    },
    "./assets/js/hyper/state/globalState.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return globalState; });\nvar companyInfo = {\n  title: 'Prime Steak Restaurant',\n  phone: '(781) - 219 - 8652',\n  location: 'Boston,MA'\n};\nvar specialMenuData = [{\n  title: 'Super BBQ Grill No Smoke',\n  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',\n  price: 15\n}, {\n  title: 'Chicken Fingers',\n  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',\n  price: 20\n}, {\n  title: 'All American Hamburger',\n  description: 'Fried eggs, Steak, baked potato or french fries, side of vegetables',\n  price: 18\n}];\nvar reviewsData = [{\n  company: 'The Food Nenwork',\n  authour: 'Joe Bastiachi',\n  authourInfo: 'Winner Of The Chef Masters',\n  highlight: 'Best Restaurant in the Boston area!',\n  review: 'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'\n}, {\n  company: 'HBO',\n  authour: 'Joe Bastiachi',\n  authourInfo: 'Winner Of The Chef Masters',\n  highlight: 'Best Restaurant in the Boston area!',\n  review: 'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'\n}, {\n  company: 'CWB',\n  authour: 'Joe Bastiachi',\n  authourInfo: 'Winner Of The Chef Masters',\n  highlight: 'Best Restaurant in the Boston area!',\n  review: 'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'\n}, {\n  company: 'NBC',\n  authour: 'Joe Bastiachi',\n  authourInfo: 'Winner Of The Chef Masters',\n  highlight: 'Best Restaurant in the Boston area!',\n  review: 'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'\n}, {\n  company: 'The New York Times',\n  authour: 'Joe Bastiachi',\n  authourInfo: 'Winner Of The Chef Masters',\n  highlight: 'Best Restaurant in the Boston area!',\n  review: 'Yr slow-carb lumbersexual +1, bushwick intelligentsia kitsch kogi kale chips stumptown hoodie. XOXO everyday carry authentic, woke taxidermy marfa knausgaard migas pug venmo bitters kitsch DIY.'\n}];\nvar randomQuoteData = [{\n  author: 'Johny',\n  quote: 'Good Painting Is Like Good Cooking: It Can Be Tasted, But Not Explained.'\n}, {\n  author: 'John',\n  quote: 'Good food.'\n}, {\n  author: 'Billy',\n  quote: 'Wicked Good.'\n}];\nconst globalState = {\n  count: 0,\n  companyInfo,\n  specialMenuData,\n  reviewsData,\n  randomQuoteData,\n  reviewStatus: {\n    currentReview: 0\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/hyper/state/globalState.js?");
    }
});