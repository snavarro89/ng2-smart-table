webpackJsonp([0],{

/***/ "../../../../../src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_editor_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/custom-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_render_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/custom-render.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedExamplesCustomEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AdvancedExamplesCustomEditorComponent = class AdvancedExamplesCustomEditorComponent {
    constructor() {
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                link: '<a href="http://www.google.com">Google</a>',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_2__custom_render_component__["a" /* CustomRenderComponent */],
                },
                username: {
                    title: 'User Name',
                },
                link: {
                    title: 'Link',
                    type: 'html',
                    editor: {
                        type: 'custom',
                        component: __WEBPACK_IMPORTED_MODULE_1__custom_editor_component__["a" /* CustomEditorComponent */],
                    },
                },
            },
        };
    }
};
AdvancedExamplesCustomEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'advanced-example-custom-editor',
        template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
    })
], AdvancedExamplesCustomEditorComponent);

//# sourceMappingURL=advanced-example-custom-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedExamplesTypesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AdvancedExamplesTypesComponent = class AdvancedExamplesTypesComponent {
    constructor() {
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                comments: 'Lorem ipsum dolor sit amet, ex dolorem officiis convenire usu.',
                passed: 'Yes',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                comments: `Vix iudico graecis in? Malis eirmod consectetuer duo ut?
                Mel an aeterno vivendum accusata, qui ne amet stet definitiones.`,
                passed: 'Yes',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                comments: 'Mollis latine intellegebat ei usu, veri exerci intellegebat vel cu. Eu nec ferri copiosae.',
                passed: 'No',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                comments: 'Eu sea graece corrumpit, et tation nominavi philosophia eam, veri posidonium ex mea?',
                passed: 'Yes',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                comments: `Quo viris appellantur an, pro id eirmod oblique iuvaret,
                timeam omittam comprehensam ad eam? Eos id dico gubergren,
                cum dicant qualisque ea, id vim ferri moderatius?`,
                passed: 'No',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
                comments: 'Audire appareat sententiae qui no. Sed no rebum vitae quidam.',
                passed: 'No',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                comments: `Mel dicat sanctus accusata ut! Eu sit choro vituperata,
                qui cu quod gubergren elaboraret, mollis vulputate ex cum!`,
                passed: 'Yes',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                comments: 'Cu usu nostrum quaerendum, no eripuit sanctus democritum cum.',
                passed: 'No',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                comments: 'In iisque oporteat vix, amet volutpat constituto sit ut. Habeo suavitate vis ei.',
                passed: 'No',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
                comments: `Lorem ipsum dolor sit amet, causae fuisset ea has, adhuc tantas interesset per id.
                 Ne vocibus persequeris has, meis lucilius ex mea, illum labores contentiones pro in?`,
                passed: 'Yes',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
                comments: 'Lorem ipsum dolor sit amet, mea dolorum detraxit ea?',
                passed: 'No',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    editor: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'name',
                                titleField: 'name',
                                descriptionField: 'email',
                            },
                        },
                    },
                },
                username: {
                    title: 'User Name',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
                                    value: '<b>Samantha</b>',
                                    title: 'Samantha',
                                }],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    type: 'string',
                },
                comments: {
                    title: 'Comments',
                    editor: {
                        type: 'textarea',
                    },
                },
                passed: {
                    title: 'Passed',
                    editor: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                        },
                    },
                },
            },
        };
    }
};
AdvancedExamplesTypesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'advanced-example-types',
        template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
    })
], AdvancedExamplesTypesComponent);

//# sourceMappingURL=advanced-example-types.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExampleButtonViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ButtonViewComponent = class ButtonViewComponent {
    constructor() {
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }
    onClick() {
        this.save.emit(this.rowData);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ButtonViewComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], ButtonViewComponent.prototype, "rowData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], ButtonViewComponent.prototype, "save", void 0);
ButtonViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'button-view',
        template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
    })
], ButtonViewComponent);

let BasicExampleButtonViewComponent = class BasicExampleButtonViewComponent {
    constructor() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
                button: {
                    title: 'Button',
                    type: 'custom',
                    renderComponent: ButtonViewComponent,
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                            alert(`${row.name} saved!`);
                        });
                    }
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                button: 'Button #1',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                button: 'Button #2',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                button: 'Button #3',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                button: 'Button #4',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                button: 'Button #5',
            },
        ];
    }
    ngOnInit() {
    }
};
BasicExampleButtonViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'basic-example-button-view',
        template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
    }),
    __metadata("design:paramtypes", [])
], BasicExampleButtonViewComponent);

var _a;
//# sourceMappingURL=basic-example-button-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExampleCustomActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BasicExampleCustomActionsComponent = class BasicExampleCustomActionsComponent {
    constructor() {
        this.settings = {
            actions: {
                custom: [
                    {
                        name: 'view',
                        title: 'View ',
                    },
                    {
                        name: 'edit',
                        title: 'Edit ',
                    },
                    {
                        name: 'delete',
                        title: 'Delete ',
                    },
                    {
                        name: 'duplicate',
                        title: 'Duplicate ',
                    },
                ],
            },
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                }
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
        ];
    }
    onCustom(event) {
        alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
    }
};
BasicExampleCustomActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'basic-example-custom-actions',
        template: `
    <ng2-smart-table [settings]="settings" [source]="data" (custom)="onCustom($event)"></ng2-smart-table>
  `,
    })
], BasicExampleCustomActionsComponent);

//# sourceMappingURL=basic-example-custom-actions.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Customized edit and view cells examples</h2>\n<h3><a id=\"types\" class=\"anchor\" href=\"#types\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Select, Completer and Textarea column types</h3>\n<p>\n  An example on how to use select, completer, textarea column types:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts\" target=\"_blank\">Demo Source</a>\n  <advanced-example-types></advanced-example-types>\n</div>\n<h3><a id=\"custom-editor-renderer\" class=\"anchor\" href=\"#custom-editor-renderer\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Custom editor/renderer column type</h3>\n<p>An example on how to use a custom cell editor and/or custom cell renderer:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts\" target=\"_blank\">Demo Source</a>\n  <advanced-example-custom-editor></advanced-example-custom-editor>\n</div>\n<p>When implementing a custom editor or renderer remember to add it to the <code>entryComponents</code> and to the <code>declarations</code> part of your module</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.customEditorModule }}</code>\n</pre>\n<p>\n  <b>For the custom cell editor:</b><br>\n  To inherit the methods needed to interact with the table you can either extend the component with the <code>DefaultEditor</code> class or implement the <code>Editor</code> interface and reproduce the same methods on your component.<br>\n  <b>For the custom cell renderer:</b><br>\n  In this example the custom component is applying a <code>.toUpperCase()</code> to one of the columns. You can implement the ViewCell interface to make sure you are setting up your component correctly.\n</p>\n\n<h3>\n  <a id=\"buttonview\" class=\"anchor\" href=\"#buttonview\" aria-hidden=\"true\">\n    <span aria-hidden=\"true\" class=\"octicon octicon-link\"></span>\n  </a>Button View\n</h3>\n<p>An example on how to use custom button view:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts\"\n    target=\"_blank\">Demo Source</a>\n  <basic-example-button-view></basic-example-button-view>\n</div>\n\n<h3><a id=\"multiselect\" class=\"anchor\" href=\"#customactions\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Custom actions</h3>\n<p>An example on how to use custom actions:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/basic-example-custom-actions.component.ts\" target=\"_blank\">Demo Source</a>\n  <basic-example-custom-actions></basic-example-custom-actions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomViewEditExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CustomViewEditExamplesComponent = class CustomViewEditExamplesComponent {
    constructor() {
        this.snippets = {
            customEditorModule: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/custom-editor-module.md"),
        };
    }
};
CustomViewEditExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'custom-edit-view-examples',
        template: __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.html"),
    })
], CustomViewEditExamplesComponent);

//# sourceMappingURL=custom-edit-view-examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/custom-edit-view/custom-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__ = __webpack_require__("../../../../../src/ng2-smart-table/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CustomEditorComponent = class CustomEditorComponent extends __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__["b" /* DefaultEditor */] {
    constructor() {
        super();
    }
    ngAfterViewInit() {
        if (this.cell.newValue !== '') {
            this.name.nativeElement.value = this.getUrlName();
            this.url.nativeElement.value = this.getUrlHref();
        }
    }
    updateValue() {
        const href = this.url.nativeElement.value;
        const name = this.name.nativeElement.value;
        this.cell.newValue = `<a href='${href}'>${name}</a>`;
    }
    getUrlName() {
        return this.htmlValue.nativeElement.innerText;
    }
    getUrlHref() {
        return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ViewChild */])('name'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], CustomEditorComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ViewChild */])('url'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object)
], CustomEditorComponent.prototype, "url", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ViewChild */])('htmlValue'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object)
], CustomEditorComponent.prototype, "htmlValue", void 0);
CustomEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        template: `
    Name: <input [ngClass]="inputClass"
            #name
            class="form-control short-input"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="updateValue()"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()"><br>
    Url: <input [ngClass]="inputClass"
            #url
            class="form-control short-input"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            [placeholder]="cell.getTitle()"
            (click)="onClick.emit($event)"
            (keyup)="updateValue()"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">
    <div [hidden]="true" [innerHTML]="cell.getValue()" #htmlValue></div>
  `,
    }),
    __metadata("design:paramtypes", [])
], CustomEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=custom-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/custom-edit-view/custom-render.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRenderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CustomRenderComponent = class CustomRenderComponent {
    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], CustomRenderComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], CustomRenderComponent.prototype, "rowData", void 0);
CustomRenderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        template: `
    {{renderValue}}
  `,
    })
], CustomRenderComponent);

//# sourceMappingURL=custom-render.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<header-component tagline=\"Examples\"></header-component>\n<div class=\"main-content with-sidebar\">\n  <nav class=\"fixed-sidebar\">\n    <h4>Examples</h4>\n    <ul class=\"examples-menu\">\n      <li><a routerLink=\"./using-filters\" routerLinkActive=\"active\">Standalone & Advanced filters</a></li>\n      <li><a routerLink=\"./populate-from-server\" routerLinkActive=\"active\">Loading data from server</a></li>\n      <li><a routerLink=\"./custom-editors-viewers\" routerLinkActive=\"active\">Custom editors and viewers</a></li>\n      <li><a routerLink=\"./various\" routerLinkActive=\"active\">Various</a></li>\n    </ul>\n  </nav>\n  <div class=\"main-content-body\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".with-sidebar {\n  position: relative; }\n  .with-sidebar .main-content-body {\n    padding-left: 16rem; }\n  .with-sidebar .fixed-sidebar {\n    display: block;\n    padding: 0 1rem;\n    margin-top: 2rem;\n    position: fixed;\n    top: 0;\n    padding-top: 290px;\n    width: 16rem;\n    font-size: 0.875rem; }\n    .with-sidebar .fixed-sidebar .back-top {\n      display: none;\n      margin-bottom: 1rem;\n      font-weight: bold; }\n    .with-sidebar .fixed-sidebar ul {\n      padding-left: 1rem;\n      list-style: none;\n      margin-bottom: 0.875rem; }\n    .with-sidebar .fixed-sidebar.scrolled {\n      position: fixed;\n      top: 0; }\n      .with-sidebar .fixed-sidebar.scrolled .back-top {\n        display: block; }\n    .with-sidebar .fixed-sidebar .examples-menu a.active {\n      font-weight: bold; }\n\n@media screen and (max-width: 64em) {\n  .with-sidebar .fixed-sidebar {\n    display: none; } }\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .with-sidebar {\n    padding: 2rem 4rem; } }\n\n@media screen and (max-width: 42em) {\n  .with-sidebar {\n    padding: 2rem 1rem; } }\n", "", {"version":3,"sources":["/Users/joshua/ripsaw/ng2-smart-table/src/app/pages/examples/examples.component.scss"],"names":[],"mappings":"AAAA;EACE,mBAAkB,EA2CnB;EA5CD;IAII,oBAAmB,EACpB;EALH;IAQI,eAAc;IACd,gBAAe;IACf,iBAAgB;IAChB,gBAAe;IACf,OAAM;IACN,mBAAkB;IAClB,aAAY;IACZ,oBAAmB,EA4BpB;IA3CH;MAkBM,cAAa;MACb,oBAAmB;MACnB,kBAAiB,EAClB;IArBL;MAwBM,mBAAkB;MAClB,iBAAgB;MAChB,wBAAuB,EACxB;IA3BL;MA8BM,gBAAe;MACf,OAAM,EAKP;MApCL;QAkCQ,eAAc,EACf;IAnCP;MAwCQ,kBAAiB,EAClB;;AAKP;EACE;IAEI,cAAa,EACd,EAAA;;AAIL;EACE;IACE,mBAAkB,EACnB,EAAA;;AAGH;EACE;IACE,mBAAkB,EACnB,EAAA","file":"examples.component.scss","sourcesContent":[".with-sidebar {\n  position: relative;\n\n  .main-content-body {\n    padding-left: 16rem;\n  }\n\n  .fixed-sidebar {\n    display: block;\n    padding: 0 1rem;\n    margin-top: 2rem;\n    position: fixed;\n    top: 0;\n    padding-top: 290px;\n    width: 16rem;\n    font-size: 0.875rem;\n\n    .back-top {\n      display: none;\n      margin-bottom: 1rem;\n      font-weight: bold;\n    }\n\n    ul {\n      padding-left: 1rem;\n      list-style: none;\n      margin-bottom: 0.875rem;\n    }\n\n    &.scrolled {\n      position: fixed;\n      top: 0;\n\n      .back-top {\n        display: block;\n      }\n    }\n\n    .examples-menu {\n      a.active {\n        font-weight: bold;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 64em) {\n  .with-sidebar {\n    .fixed-sidebar {\n      display: none;\n    }\n  }\n}\n\n@media screen and (min-width: 42em) and (max-width: 64em) {\n  .with-sidebar {\n    padding: 2rem 4rem;\n  }\n}\n\n@media screen and (max-width: 42em) {\n  .with-sidebar {\n    padding: 2rem 1rem;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ExamplesComponent = class ExamplesComponent {
};
ExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'examples',
        styles: [__webpack_require__("../../../../../src/app/pages/examples/examples.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/examples/examples.component.html"),
    })
], ExamplesComponent);

//# sourceMappingURL=examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng2_smart_table__ = __webpack_require__("../../../../../src/ng2-smart-table/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_routes__ = __webpack_require__("../../../../../src/app/pages/examples/examples.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_advanced_example_filters_component__ = __webpack_require__("../../../../../src/app/pages/examples/filter/advanced-example-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__various_advanced_example_confirm_component__ = __webpack_require__("../../../../../src/app/pages/examples/various/advanced-example-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_edit_view_advanced_example_custom_editor_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__custom_edit_view_advanced_example_types_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/advanced-example-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_advanced_example_server_component__ = __webpack_require__("../../../../../src/app/pages/examples/server/advanced-example-server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__server_basic_example_load_component__ = __webpack_require__("../../../../../src/app/pages/examples/server/basic-example-load.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__various_basic_example_multi_select_component__ = __webpack_require__("../../../../../src/app/pages/examples/various/basic-example-multi-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__custom_edit_view_custom_editor_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/custom-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filter_basic_example_source_component__ = __webpack_require__("../../../../../src/app/pages/examples/filter/basic-example-source.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__custom_edit_view_custom_render_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/custom-render.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filter_filter_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/filter/filter-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__server_server_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/server/server-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__custom_edit_view_custom_edit_view_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__custom_edit_view_basic_example_custom_actions_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/basic-example-custom-actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__various_various_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/various/various-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__custom_edit_view_basic_example_button_view_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/basic-example-button-view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























const EXAMPLES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_8__filter_advanced_example_filters_component__["a" /* AdvancedExampleFiltersComponent */],
    __WEBPACK_IMPORTED_MODULE_9__various_advanced_example_confirm_component__["a" /* AdvancedExampleConfirmComponent */],
    __WEBPACK_IMPORTED_MODULE_10__custom_edit_view_advanced_example_custom_editor_component__["a" /* AdvancedExamplesCustomEditorComponent */],
    __WEBPACK_IMPORTED_MODULE_11__custom_edit_view_advanced_example_types_component__["a" /* AdvancedExamplesTypesComponent */],
    __WEBPACK_IMPORTED_MODULE_12__server_advanced_example_server_component__["a" /* AdvancedExampleServerComponent */],
    __WEBPACK_IMPORTED_MODULE_13__server_basic_example_load_component__["a" /* BasicExampleLoadComponent */],
    __WEBPACK_IMPORTED_MODULE_14__various_basic_example_multi_select_component__["a" /* BasicExampleMultiSelectComponent */],
    __WEBPACK_IMPORTED_MODULE_16__filter_basic_example_source_component__["a" /* BasicExampleSourceComponent */],
    __WEBPACK_IMPORTED_MODULE_15__custom_edit_view_custom_editor_component__["a" /* CustomEditorComponent */],
    __WEBPACK_IMPORTED_MODULE_17__custom_edit_view_custom_render_component__["a" /* CustomRenderComponent */],
    __WEBPACK_IMPORTED_MODULE_18__filter_filter_examples_component__["a" /* FilterExamplesComponent */],
    __WEBPACK_IMPORTED_MODULE_19__server_server_examples_component__["a" /* ServerExamplesComponent */],
    __WEBPACK_IMPORTED_MODULE_20__custom_edit_view_custom_edit_view_examples_component__["a" /* CustomViewEditExamplesComponent */],
    __WEBPACK_IMPORTED_MODULE_22__various_various_examples_component__["a" /* VariousExamplesComponent */],
    __WEBPACK_IMPORTED_MODULE_23__custom_edit_view_basic_example_button_view_component__["a" /* BasicExampleButtonViewComponent */],
    __WEBPACK_IMPORTED_MODULE_21__custom_edit_view_basic_example_custom_actions_component__["a" /* BasicExampleCustomActionsComponent */],
    __WEBPACK_IMPORTED_MODULE_23__custom_edit_view_basic_example_button_view_component__["b" /* ButtonViewComponent */],
];
let ExamplesModule = class ExamplesModule {
};
ExamplesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__examples_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_5__ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__custom_edit_view_custom_editor_component__["a" /* CustomEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_17__custom_edit_view_custom_render_component__["a" /* CustomRenderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__custom_edit_view_basic_example_button_view_component__["b" /* ButtonViewComponent */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__examples_component__["a" /* ExamplesComponent */],
            ...EXAMPLES_COMPONENTS,
        ],
    })
], ExamplesModule);

//# sourceMappingURL=examples.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/examples.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_filter_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/filter/filter-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_server_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/server/server-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_edit_view_custom_edit_view_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/custom-edit-view/custom-edit-view-examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__various_various_examples_component__ = __webpack_require__("../../../../../src/app/pages/examples/various/various-examples.component.ts");





const routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__examples_component__["a" /* ExamplesComponent */],
        children: [
            {
                path: '',
                redirectTo: 'using-filters',
            },
            {
                path: 'using-filters',
                component: __WEBPACK_IMPORTED_MODULE_1__filter_filter_examples_component__["a" /* FilterExamplesComponent */],
            },
            {
                path: 'populate-from-server',
                component: __WEBPACK_IMPORTED_MODULE_2__server_server_examples_component__["a" /* ServerExamplesComponent */],
            },
            {
                path: 'custom-editors-viewers',
                component: __WEBPACK_IMPORTED_MODULE_3__custom_edit_view_custom_edit_view_examples_component__["a" /* CustomViewEditExamplesComponent */],
            },
            {
                path: 'various',
                component: __WEBPACK_IMPORTED_MODULE_4__various_various_examples_component__["a" /* VariousExamplesComponent */],
            },
        ],
    },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;

//# sourceMappingURL=examples.routes.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/filter/advanced-example-filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedExampleFiltersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AdvancedExampleFiltersComponent = class AdvancedExampleFiltersComponent {
    constructor() {
        this.data = [
            {
                id: 4,
                name: 'Patricia Lebsack',
                email: 'Julianne.OConner@kory.org',
                passed: 'Yes',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                email: 'Lucio_Hettinger@annie.ca',
                passed: 'No',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                email: 'Karley_Dach@jasper.info',
                passed: 'Yes',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                email: 'Telly.Hoeger@billy.biz',
                passed: 'No',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                email: 'Sherwood@rosamond.me',
                passed: 'Yes',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                email: 'Chaim_McDermott@dana.io',
                passed: 'No',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                email: 'Rey.Padberg@karina.biz',
                passed: 'No',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                email: 'Rey.Padberg@rosamond.biz',
                passed: 'Yes',
            },
        ];
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Select...',
                            list: [
                                { value: 'Glenna Reichert', title: 'Glenna Reichert' },
                                { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
                                { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
                            ],
                        },
                    },
                },
                email: {
                    title: 'Email',
                    filter: {
                        type: 'completer',
                        config: {
                            completer: {
                                data: this.data,
                                searchFields: 'email',
                                titleField: 'email',
                            },
                        },
                    },
                },
                passed: {
                    title: 'Passed',
                    filter: {
                        type: 'checkbox',
                        config: {
                            true: 'Yes',
                            false: 'No',
                            resetText: 'clear',
                        },
                    },
                },
            },
        };
    }
};
AdvancedExampleFiltersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'advanced-example-filters',
        template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
    })
], AdvancedExampleFiltersComponent);

//# sourceMappingURL=advanced-example-filters.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/filter/basic-example-source.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__ = __webpack_require__("../../../../../src/ng2-smart-table/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExampleSourceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BasicExampleSourceComponent = class BasicExampleSourceComponent {
    constructor() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    filter: false,
                },
                name: {
                    title: 'Full Name',
                    filter: false,
                },
                username: {
                    title: 'User Name',
                    filter: false,
                },
                email: {
                    title: 'Email',
                    filter: false,
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
            },
        ];
        this.source = new __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__["c" /* LocalDataSource */](this.data);
    }
    onSearch(query = '') {
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'name',
                search: query,
            },
            {
                field: 'username',
                search: query,
            },
            {
                field: 'email',
                search: query,
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    }
};
BasicExampleSourceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'basic-example-source',
        template: `
    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
    }),
    __metadata("design:paramtypes", [])
], BasicExampleSourceComponent);

//# sourceMappingURL=basic-example-source.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/filter/filter-examples.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Customized filters examples</h2>\n<h3><a id=\"separate-filter\" class=\"anchor\" href=\"#separate-filter\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Standalone Filter Example</h3>\n<p>\n  Say you don't need to have a filter field in the each table column or the requirements says that search field should be placed outside of the table?<br>\n  Fortunately this is super easy to achieve, to do this we need to slightly modify our basic component example.\n</p>\n<h4><a id=\"data-source\" class=\"anchor\" href=\"#data-source\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Data Source</h4>\n<p>\n  First thing you need to know is that all the data operations against the table <i>must</i> be done using the <strong>DataSource</strong> table property. DataSource is an abstraction around your data which allows you easily modify the table data or subscribe to events to modify the table behaviour.\n</p>\n<p>\n  To access the DataSource we either can take it from the table or pass it instead of our <i>data array</i>. Let's do the second option as it requires less code and is more demonstrative. Let's import the DataSource class by modifying the import statement:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.sourceRequire }}</code>\n</pre>\n<p>\n  Note that the import now contains a <strong>LocalDataSource</strong> class (the word <i>Local</i> here means that the data is processed locally in a browser, not on the server side).<br>\n  Then let's create a DataSource instance and pass our data array into it as a constructor parameter:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.createSource }}</code>\n</pre>\n<p>\n  Now let's pass the source to the table instead of the data array:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.sourceTemplate }}</code>\n</pre>\n<p>\n  At this point if you look at the result there will be no difference comparing to the first example. Basically if you pass an array to the table component first thing it will do is wrap LocalDataSource object around your array as we did here manually.<br>\n  Now, having the DataSource we basically could change the table data in any way we need to - filter it, sort, paginate to some page, create/delete/modify the rows. In our example we need to be able to filter the data outside of the table, firstly let's add a search filed to the template with a listener:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.search }}</code>\n</pre>\n<p>\n  And the listener code which asks the DataSource to filter the data:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.searchTable }}</code>\n</pre>\n<p>\n  Last thing, let's hide the default table filters to not conflict with our standalone one:\n</p>\n<pre>\n  <code highlight class=\"typescript\">{{ snippets.hideFilters }}</code>\n</pre>\n<p>\n  And done! Now the table has a standalone search field:\n</p>\n<div>\n  <basic-example-source></basic-example-source>\n</div>\n<p>\n  Same way you can modify the data of the table, for example by adding a row from a third party form or listening to some external event.\n  Here's a full component code:\n</p>\n<pre class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/basic-example-source.component.ts\" target=\"_blank\">Demo Source</a>\n  <code highlight class=\"typescript\">{{ snippets.sourceFull }}</code>\n</pre>\n\n<h3><a id=\"filters\" class=\"anchor\" href=\"#filters\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Checkbox, Select and Completer filter types</h3>\n<p>\n  An example on how to use the built-in column filter types:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/advanced-example-filters.component.ts\" target=\"_blank\">Demo Source</a>\n  <advanced-example-filters></advanced-example-filters>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/examples/filter/filter-examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterExamplesComponent = class FilterExamplesComponent {
    constructor() {
        this.snippets = {
            sourceRequire: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/source-require.md"),
            createSource: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/create-source.md"),
            sourceTemplate: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/source-template.md"),
            search: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/search.md"),
            searchTable: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/search-table.md"),
            sourceFull: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/source-full.md"),
            hideFilters: __webpack_require__("../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/hide-filters.md"),
        };
    }
};
FilterExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'filter-examples',
        template: __webpack_require__("../../../../../src/app/pages/examples/filter/filter-examples.component.html"),
    })
], FilterExamplesComponent);

//# sourceMappingURL=filter-examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/server/advanced-example-server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ng2_smart_table__ = __webpack_require__("../../../../../src/ng2-smart-table/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedExampleServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AdvancedExampleServerComponent = class AdvancedExampleServerComponent {
    constructor(http) {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                },
                albumId: {
                    title: 'Album',
                },
                title: {
                    title: 'Title',
                },
                url: {
                    title: 'Url',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_2__src_ng2_smart_table__["d" /* ServerDataSource */](http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
    }
};
AdvancedExampleServerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'advanced-example-server',
        template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AdvancedExampleServerComponent);

var _a;
//# sourceMappingURL=advanced-example-server.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/server/basic-example-load.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__ = __webpack_require__("../../../../../src/ng2-smart-table/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_example_load_service__ = __webpack_require__("../../../../../src/app/pages/examples/server/basic-example-load.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExampleLoadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BasicExampleLoadComponent = class BasicExampleLoadComponent {
    constructor(service) {
        this.service = service;
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    editable: false,
                    addable: false,
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__["c" /* LocalDataSource */]();
        this.service.getData().then((data) => {
            this.source.load(data);
        });
    }
};
BasicExampleLoadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'basic-example-load',
        providers: [__WEBPACK_IMPORTED_MODULE_2__basic_example_load_service__["a" /* BasicExampleLoadService */]],
        template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__basic_example_load_service__["a" /* BasicExampleLoadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__basic_example_load_service__["a" /* BasicExampleLoadService */]) === "function" && _a || Object])
], BasicExampleLoadComponent);

var _a;
//# sourceMappingURL=basic-example-load.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/server/basic-example-load.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExampleLoadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BasicExampleLoadService = BasicExampleLoadService_1 = class BasicExampleLoadService {
    // emulating request to the server
    getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.generateData());
            }, 2000);
        });
    }
    getNewExampleObj(n) {
        n = typeof n !== 'undefined' ? n : Math.random() * 1000;
        return {
            id: n,
            name: `Jack London ${n}`,
            username: `jack_london_${n}`,
            email: `jack_london_${n}@example.com`,
        };
    }
    generateData() {
        const data = [];
        for (let i = 0; i < BasicExampleLoadService_1.DATA_SIZE; i++) {
            data.push(this.getNewExampleObj(i));
        }
        return data;
    }
};
BasicExampleLoadService.DATA_SIZE = 500;
BasicExampleLoadService = BasicExampleLoadService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], BasicExampleLoadService);

var BasicExampleLoadService_1;
//# sourceMappingURL=basic-example-load.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/server/server-examples.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Get data from external source example</h2>\n<h3><a id=\"from-server\" class=\"anchor\" href=\"#from-server\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Loading From Server Example</h3>\n<p>\n  This example shows how to pass the data loaded from some API to the table DataSource.\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/server/basic-example-load.component.ts\" target=\"_blank\">Demo Source</a>\n  <basic-example-load></basic-example-load>\n</div>\n\n<h3><a id=\"server\" class=\"anchor\" href=\"#server\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Server Data Source Example</h3>\n<p>\n  An example on how to load data user Server DataSource:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/server/advanced-example-server.component.ts\" target=\"_blank\">Demo Source</a>\n<advanced-example-server></advanced-example-server>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/examples/server/server-examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ServerExamplesComponent = class ServerExamplesComponent {
};
ServerExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'server-examples',
        template: __webpack_require__("../../../../../src/app/pages/examples/server/server-examples.component.html"),
    })
], ServerExamplesComponent);

//# sourceMappingURL=server-examples.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/various/advanced-example-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__ = __webpack_require__("../../../../../src/ng2-smart-table/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedExampleConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AdvancedExampleConfirmComponent = class AdvancedExampleConfirmComponent {
    constructor() {
        this.settings = {
            delete: {
                confirmDelete: true,
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
            },
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                notShownField: true,
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                notShownField: true,
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                notShownField: false,
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                notShownField: false,
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                notShownField: false,
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
                notShownField: false,
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                notShownField: false,
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                notShownField: true,
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                notShownField: false,
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
                notShownField: false,
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
                notShownField: true,
            }
        ];
        this.source = new __WEBPACK_IMPORTED_MODULE_1__ng2_smart_table__["c" /* LocalDataSource */](this.data);
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    }
};
AdvancedExampleConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'advance-example-comfirm',
        template: `
    <ng2-smart-table
      [settings]="settings"
      [source]="source"
      (deleteConfirm)="onDeleteConfirm($event)"
      (editConfirm)="onSaveConfirm($event)"
      (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
  `,
    }),
    __metadata("design:paramtypes", [])
], AdvancedExampleConfirmComponent);

//# sourceMappingURL=advanced-example-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/various/basic-example-multi-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicExampleMultiSelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BasicExampleMultiSelectComponent = class BasicExampleMultiSelectComponent {
    constructor() {
        this.settings = {
            selectMode: 'multi',
            columns: {
                id: {
                    title: 'ID',
                },
                name: {
                    title: 'Full Name',
                },
                username: {
                    title: 'User Name',
                },
                email: {
                    title: 'Email',
                },
            },
        };
        this.data = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
            },
            {
                id: 11,
                name: 'Nicholas DuBuque',
                username: 'Nicholas.Stanton',
                email: 'Rey.Padberg@rosamond.biz',
            },
        ];
    }
};
BasicExampleMultiSelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'basic-example-multi-select',
        template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
    })
], BasicExampleMultiSelectComponent);

//# sourceMappingURL=basic-example-multi-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/examples/various/various-examples.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Various examples</h2>\n<h3><a id=\"confirm\" class=\"anchor\" href=\"#confirm\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Confirm Action Example</h3>\n<p>\n  An example on how to confirm an action before it's applied to the table:\n</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/advanced-example-confirm.component.ts\" target=\"_blank\">Demo Source</a>\n  <advance-example-comfirm></advance-example-comfirm>\n</div>\n\n\n<h3><a id=\"multiselect\" class=\"anchor\" href=\"#multiselect\" aria-hidden=\"true\"><span aria-hidden=\"true\" class=\"octicon octicon-link\"></span></a>Multi select</h3>\n<p>An example on how to use multi select mode:</p>\n<div class=\"with-source\">\n  <a class=\"source\" href=\"https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/various/basic-example-multi-select.component.ts\" target=\"_blank\">Demo Source</a>\n  <basic-example-multi-select></basic-example-multi-select>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/examples/various/various-examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariousExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let VariousExamplesComponent = class VariousExamplesComponent {
};
VariousExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'various-examples',
        template: __webpack_require__("../../../../../src/app/pages/examples/various/various-examples.component.html"),
    })
], VariousExamplesComponent);

//# sourceMappingURL=various-examples.component.js.map

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/create-source.md":
/***/ (function(module, exports) {

module.exports = "source: LocalDataSource; // add a property to the component\n\nconstructor() {\n  this.source = new LocalDataSource(this.data); // create the source\n}"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/custom-editor-module.md":
/***/ (function(module, exports) {

module.exports = "@NgModule({\n  imports: [\n    // ...\n  ],\n  entryComponents: [CustomEditorComponent, CustomRenderComponent],\n  declarations: [\n    // ...\n    CustomEditorComponent,\n    CustomRenderComponent,\n  ],\n})"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/hide-filters.md":
/***/ (function(module, exports) {

module.exports = "settings = {\n  columns: {\n    id: {\n      title: 'ID',\n      filter: false\n    },\n    name: {\n      title: 'Full Name',\n      filter: false\n    },\n    username: {\n      title: 'User Name',\n      filter: false\n    },\n    email: {\n      title: 'Email',\n      filter: false\n    }\n  }\n};"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/search-table.md":
/***/ (function(module, exports) {

module.exports = "onSearch(query: string = '') {\n  this.source.setFilter([\n    // fields we want to include in the search\n    {\n      field: 'id',\n      search: query\n    },\n    {\n      field: 'name',\n      search: query\n    },\n    {\n      field: 'username',\n      search: query\n    },\n    {\n      field: 'email',\n      search: query\n    }\n  ], false); \n  // second parameter specifying whether to perform 'AND' or 'OR' search \n  // (meaning all columns should contain search query or at least one)\n  // 'AND' by default, so changing to 'OR' by setting false here\n}\n"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/search.md":
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({ \n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/source-full.md":
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'basic-example-source',\n  styles: [],\n  template: `\n    <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\nexport class BasicExampleSourceComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: 'ID',\n        filter: false\n      },\n      name: {\n        title: 'Full Name',\n        filter: false\n      },\n      username: {\n        title: 'User Name',\n        filter: false\n      },\n      email: {\n        title: 'Email',\n        filter: false\n      }\n    }\n  };\n  \n  data = [\n    // ... our data here\n  ];\n  \n  source: LocalDataSource;\n  \n  constructor() {\n    this.source = new LocalDataSource(this.data);\n  }\n\n  onSearch(query: string = '') {\n    this.source.setFilter([\n      // fields we want to include in the search\n      {\n        field: 'id',\n        search: query\n      },\n      {\n        field: 'name',\n        search: query\n      },\n      {\n        field: 'username',\n        search: query\n      },\n      {\n        field: 'email',\n        search: query\n      }\n    ], false);\n    // second parameter specifying whether to perform 'AND' or 'OR' search \n    // (meaning all columns should contain search query or at least one)\n    // 'AND' by default, so changing to 'OR' by setting false here\n  }\n}\n"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/source-require.md":
/***/ (function(module, exports) {

module.exports = "import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table-extended';\n"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../../src/app/pages/examples/snippets/source-template.md":
/***/ (function(module, exports) {

module.exports = "// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n  `\n})\n// ..."

/***/ })

});
//# sourceMappingURL=0.chunk.js.map