(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-registro-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/registro/registro.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/registro/registro.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"text-align: left;\">\r\n        <ion-button (click)=\"Cargar()\" color=\"success\">\r\n          <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"text-align: right;\">\r\n        <ion-button color=\"secondary\">\r\n          <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-item>\r\n    <ion-label>Actividades</ion-label>\r\n    <ion-select>\r\n      <ion-select-option *ngFor=\"let item of actividades\"> {{ item.Actividad }} </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <ion-button expand=\"block\" (click)=\"alert()\">Test</ion-button>\r\n\r\n  <ion-button (click)=\"Registrar()\" color=\"danger\">\r\n    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n  <ion-button expand=\"block\" (click)=\"createBaseDatos()\">\r\n    Create DataBase\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"block\" (click)=\"createTable()\">\r\n    Create Table\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"block\" (click)=\"getRows()\">\r\n    Get Rows\r\n  </ion-button>\r\n\r\n\r\n  <ion-item-divider>\r\n    <ion-input placeholder=\"Enter Name\" [(ngModel)]=\"name_model\"></ion-input>\r\n    <ion-button expand=\"block\" (click)=\"insertRow()\">\r\n      Insert Row\r\n    </ion-button>\r\n  </ion-item-divider>\r\n\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        Row ID\r\n      </ion-col>\r\n      <ion-col>\r\n        Name\r\n      </ion-col>\r\n      <ion-col>\r\n        Delete\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let item of row_data\">\r\n      <ion-col>\r\n        {{item.pid}}\r\n      </ion-col>\r\n      <ion-col>\r\n        {{item.Name}}\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)=\"deleteRow(item)\" size=\"small\" color=\"danger\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-bottom-drawer\r\n  style=\"box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px -4px 8px rgba(0, 0, 0, 0.04), 0px -12px 32px rgba(0, 0, 0, 0.04);\"\r\n  [(state)]=\"drawerState\" [minimumHeight]=\"minimumHeight\" [dockedHeight]=\"dockedHeight\" [shouldBounce]=\"shouldBounce\"\r\n  [distanceTop]=\"distanceTop\">\r\n  <div class=\"drawer-content\">\r\n    <ion-title>Registrar</ion-title>\r\n\r\n    <form action=\"\">\r\n\r\n      <ion-item>\r\n        <ion-label>Date</ion-label>\r\n        <ion-datetime display-format=\"YYYY-MM-DD\" max=\"2100-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Proyectos</ion-label>\r\n        <ion-select>\r\n          <ion-select-option *ngFor=\"let p of proyectos\"> {{ p.Proyecto }} </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Actividades</ion-label>\r\n        <ion-select>\r\n          <ion-select-option *ngFor=\"let a of actividades\"> {{ a.Actividad }} </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"medium\" position=\"floating\">Description</ion-label>\r\n        <ion-textarea></ion-textarea>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label color=\"medium\" position=\"floating\">Tiempo</ion-label>\r\n        <ion-input type=\"number\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-bottom-drawer>"

/***/ }),

/***/ "./src/app/page/registro/registro-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/page/registro/registro-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/page/registro/registro.page.ts");




var routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
var RegistroPageRoutingModule = /** @class */ (function () {
    function RegistroPageRoutingModule() {
    }
    RegistroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistroPageRoutingModule);
    return RegistroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/registro/registro.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/registro/registro.module.ts ***!
  \**************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/page/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/page/registro/registro.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ion-bottom-drawer */ "./node_modules/ion-bottom-drawer/fesm5/ion-bottom-drawer.js");









var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_8__["IonBottomDrawerModule"],
                _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            ],
            declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());



/***/ }),

/***/ "./src/app/page/registro/registro.page.scss":
/*!**************************************************!*\
  !*** ./src/app/page/registro/registro.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulos {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZWdpc3Ryby9EOlxcVGVzaXNcXEFjdGl2aWRhZGVzRGlhcmlhcy1Gcm9udEVuZC9zcmNcXGFwcFxccGFnZVxccmVnaXN0cm9cXHJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG9ze1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn0iLCIudGl0dWxvcyB7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/registro/registro.page.ts":
/*!************************************************!*\
  !*** ./src/app/page/registro/registro.page.ts ***!
  \************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_datalocal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/datalocal.service */ "./src/app/services/datalocal.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion-bottom-drawer */ "./node_modules/ion-bottom-drawer/fesm5/ion-bottom-drawer.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var RegistroPage = /** @class */ (function () {
    function RegistroPage(storage, dataService, platform, sqlite) {
        var _this = this;
        this.storage = storage;
        this.dataService = dataService;
        this.platform = platform;
        this.sqlite = sqlite;
        // drawerState = DrawerState.Bottom;
        // minimumHeight = 0;
        // dockedHeight = 300;
        // shouldBounce = true;
        // distanceTop = 56;
        this.shouldBounce = true;
        this.dockedHeight = 300;
        this.distanceTop = 56;
        this.drawerState = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"].Bottom;
        this.states = ion_bottom_drawer__WEBPACK_IMPORTED_MODULE_4__["DrawerState"];
        this.minimumHeight = 50;
        this.actividades = [];
        this.proyectos = [];
        this.name_model = '';
        this.row_data = [];
        this.database_name = 'freaky_datatable.db';
        this.table_name = 'myfreakytable';
        this.platform.ready().then(function () {
            _this.createBaseDatos();
        }).catch(function (error) {
            console.log(error);
        });
    }
    RegistroPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RegistroPage.prototype.alert = function () {
        alert('Test');
    };
    RegistroPage.prototype.createBaseDatos = function () {
        /*
            this.sqlite.create({
              name: 'data.db',
              location: 'default'
            })
              .then((db: SQLiteObject) => {
        
        
                db.executeSql('create table danceMoves(name VARCHAR(32))', [])
                  .then(() => console.log('Executed SQL'))
                  .catch(e => console.log(e));
        
        
              })
              .catch(e => console.log(e));*/
        var _this = this;
        this.sqlite.create({
            name: this.database_name,
            location: 'default'
        }).then(function (db) {
            _this.databaseObj = db;
            alert('freaky_datatable Database Created!');
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    RegistroPage.prototype.createTable = function () {
        this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(255))', []).then(function () {
            alert('Table Created!');
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    RegistroPage.prototype.insertRow = function () {
        var _this = this;
        if (!this.name_model.length) {
            alert("Enter Name");
            return;
        }
        this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (Name) VALUES ("' + this.name_model + '")', []).then(function () {
            alert('Row Inserted!');
            _this.getRows();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    RegistroPage.prototype.getRows = function () {
        var _this = this;
        this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            _this.row_data = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.row_data.push(res.rows.item(i));
                }
            }
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    RegistroPage.prototype.deleteRow = function (item) {
        var _this = this;
        this.databaseObj.executeSql("DELETE FROM " + this.table_name + " WHERE pid = " + item.pid, []).then(function (res) {
            alert("Row Deleted!");
            _this.getRows();
        })
            .catch(function (e) {
            alert("error " + JSON.stringify(e));
        });
    };
    RegistroPage.prototype.Cargar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.dataService.cargarLocalStorage().subscribe(function (data) {
                            console.log(data);
                        });
                        console.log(this.storage.get('actividades'));
                        // debugger;
                        _a = this;
                        return [4 /*yield*/, this.storage.get('actividades')];
                    case 1:
                        // debugger;
                        _a.actividades = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.storage.get('proyectos')];
                    case 2:
                        _b.proyectos = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.Registrar = function () {
        this.storage.clear();
        this.actividades = [];
    };
    RegistroPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_datalocal_service__WEBPACK_IMPORTED_MODULE_2__["DatalocalService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
    ]; };
    RegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/registro/registro.page.html"),
            styles: [__webpack_require__(/*! ./registro.page.scss */ "./src/app/page/registro/registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _services_datalocal_service__WEBPACK_IMPORTED_MODULE_2__["DatalocalService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"]])
    ], RegistroPage);
    return RegistroPage;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.http.get(apiUrl + "/Actividades_Vista?filter[where][ID_Proyecto]=18"), this.http.get(apiUrl + "/Proyectos_Vista"));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/datalocal.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/datalocal.service.ts ***!
  \***********************************************/
/*! exports provided: DatalocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalocalService", function() { return DatalocalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






//import { async } from '@angular/core/testing';
var DatalocalService = /** @class */ (function () {
    // proyectos: Proyectos[] = [];
    function DatalocalService(dataService, storage, toastCtrl) {
        this.dataService = dataService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.actividades = [];
    }
    DatalocalService.prototype.cargarLocalStorage = function () {
        // this.storage.remove('actividades');
        // this.storage.remove('proyectos');
        var _this = this;
        this.dataService.getAll()
            .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // debugger;
                this.storage.set('actividades', data[0]);
                this.storage.set('proyectos', data[1]);
                this.presentToast('Datos Cargados');
                return [2 /*return*/];
            });
        }); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(this.storage.get('actividades'), this.storage.get('proyectos'));
    };
    DatalocalService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 1500,
                            color: 'dark',
                            mode: 'ios',
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatalocalService.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    DatalocalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], DatalocalService);
    return DatalocalService;
}());



/***/ })

}]);
//# sourceMappingURL=page-registro-registro-module-es5.js.map