webpackJsonp([1],{

/***/ "../../../../../src/app/pages/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<header-component tagline=\"Quick Start & Demo\"></header-component>\n<section class=\"main-content\">\n\n  <h2 ><a id=\"getting-started\" class=\"anchor\" href=\"#getting-started\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Getting Started</h2>\n  <p>\n    Hello and Welcome!\n  </p>\n\n  <h3><a id=\"installation\" class=\"anchor\" href=\"#installation\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Installation</h3>\n  <p>\n    The library is available as npm package, so all you need to do is to run the following command:\n  </p>\n  <pre>\n    <code highlight class=\"bash\">{{ snippets.install }}</code>\n  </pre>\n  <p>This command will create a record in your `package.json` file and install the package into the npm modules folder.</p>\n\n  <h2><a id=\"examples\" class=\"anchor\" href=\"#examples\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Examples</h2>\n  <h3><a id=\"minimal-setup\" class=\"anchor\" href=\"#minimal-setup\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Minimal Setup Example</h3>\n  <p>\n    First thing you need to do is to import the ng2-smart-table directives into your component.\n  </p>\n  <pre>\n    <code highlight class=\"typescript\">{{ snippets.require }}</code>\n  </pre>\n  <p>\n    Then register it by adding to the list of directives of your module:\n  </p>\n  <pre>\n    <code highlight class=\"typescript\">{{ snippets.directive }}</code>\n  </pre>\n  <p>\n    Now, we need to configure the table and add it into the template. The only <strong>required</strong> setting for the component to start working is a columns configuration.<br>\n    Let's register <i>settings</i> property inside of the component where we want to have the table and configure some columns (<a [routerLink]=\"['/documentation']\">Settings documentation</a>):\n  </p>\n  <pre>\n    <code highlight class=\"typescript\">{{ snippets.settings }}</code>\n  </pre>\n  <p>\n    Finally let's put the ng2-smart-table component inside of the template:\n  </p>\n  <pre>\n    <code highlight class=\"typescript\">{{ snippets.template }}</code>\n  </pre>\n  <p>\n    At this step you will have a minimally configured table which should look something like this:\n  </p>\n  <div>\n    <basic-example></basic-example>\n  </div>\n  <p>\n    All functions are available by default and you don't need to configure them somehow, so you already able to add/edit/delete rows, sort or filter the table, etc.\n  </p>\n  <p>\n    But it feels like something is missing... Right, there is no data in the table by default. To add some, let's create an array property with a list of objects in the component. Please note that object keys are same as in the columns configuration.\n  </p>\n  <pre>\n    <code highlight class=\"typescript\">{{ snippets.array }}</code>\n  </pre>\n  <p>And pass the data to the table:</p>\n  <pre>\n    <code highlight class=\"typescript\">{{ snippets.dataTemplate }}</code>\n  </pre>\n  <p>Now you have some data in the table:</p>\n  <div>\n    <basic-example-data></basic-example-data>\n  </div>\n  <p>\n    That's it for a minimal setup, our final component should look like this, pretty simple, huh?\n  </p>\n  <pre class=\"with-source\">\n    <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/shared/components/basic-example/basic-example-data.component.ts\" target=\"_blank\">Demo Source</a>\n    <code highlight class=\"typescript\">{{ snippets.basicFull }}</code>\n  </pre>\n\n  <p>Full component documentation you can find <a [routerLink]=\"['/documentation']\">here</a>.</p>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DemoComponent = class DemoComponent {
    constructor() {
        this.snippets = {
            install: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/install.md"),
            require: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/require.md"),
            directive: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/directive.md"),
            settings: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/settings.md"),
            template: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/template.md"),
            array: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/array.md"),
            dataTemplate: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/data-template.md"),
            basicFull: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/basic-full.md"),
        };
    }
};
DemoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'demo',
        template: __webpack_require__("../../../../../src/app/pages/demo/demo.component.html"),
    })
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_routes__ = __webpack_require__("../../../../../src/app/pages/demo/demo.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_component__ = __webpack_require__("../../../../../src/app/pages/demo/demo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const DEMO_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */],
];
let DemoModule = class DemoModule {
};
DemoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__demo_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            ...DEMO_COMPONENTS,
        ],
    })
], DemoModule);

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/demo/demo.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_component__ = __webpack_require__("../../../../../src/app/pages/demo/demo.component.ts");

const routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__demo_component__["a" /* DemoComponent */],
    },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;

//# sourceMappingURL=demo.routes.js.map

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/array.md":
/***/ (function(module, exports) {

module.exports = "data = [\n  {\n    id: 1,\n    name: \"Leanne Graham\",\n    username: \"Bret\",\n    email: \"Sincere@april.biz\"\n  },\n  {\n    id: 2,\n    name: \"Ervin Howell\",\n    username: \"Antonette\",\n    email: \"Shanna@melissa.tv\"\n  },\n  \n  // ... list of items\n  \n  {\n    id: 11,\n    name: \"Nicholas DuBuque\",\n    username: \"Nicholas.Stanton\",\n    email: \"Rey.Padberg@rosamond.biz\"\n  }\n];"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/basic-full.md":
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-example-data',\n  styles: [],\n  template: `\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  `\n})\nexport class BasicExampleDataComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: 'ID'\n      },\n      name: {\n        title: 'Full Name'\n      },\n      username: {\n        title: 'User Name'\n      },\n      email: {\n        title: 'Email'\n      }\n    }\n  };\n  \n  data = [\n    {\n      id: 1,\n      name: \"Leanne Graham\",\n      username: \"Bret\",\n      email: \"Sincere@april.biz\"\n    },\n    // ... other rows here\n    {\n      id: 11,\n      name: \"Nicholas DuBuque\",\n      username: \"Nicholas.Stanton\",\n      email: \"Rey.Padberg@rosamond.biz\"\n    }\n  ];\n}\n"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/data-template.md":
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/directive.md":
/***/ (function(module, exports) {

module.exports = "// ...\n\n@NgModule({\n  imports: [\n    // ...\n    \n    Ng2SmartTableModule,\n    \n    // ...\n  ],\n  declarations: [ ... ]\n})\n// ..."

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/install.md":
/***/ (function(module, exports) {

module.exports = "npm install --save ng2-smart-table"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/require.md":
/***/ (function(module, exports) {

module.exports = "import { Ng2SmartTableModule } from 'ng2-smart-table';"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/settings.md":
/***/ (function(module, exports) {

module.exports = "settings = {\n  columns: {\n    id: {\n      title: 'ID'\n    },\n    name: {\n      title: 'Full Name'\n    },\n    username: {\n      title: 'User Name'\n    },\n    email: {\n      title: 'Email'\n    }\n  }\n};"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/demo/snippets/template.md":
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]=\"settings\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ })

});
//# sourceMappingURL=1.chunk.js.map