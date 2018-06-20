webpackJsonp([0],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartilhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartilhaPage = (function () {
    function CartilhaPage(nav) {
        this.nav = nav;
    }
    CartilhaPage.prototype.backToRoot = function () {
        this.nav.push('CartilhaDetalhesPage');
    };
    CartilhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cartilha',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/cartilha/cartilha.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Cartilha Informativa</ion-title>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div id="cartilha1" tappable (click)="backToRoot()">Como Ajudar<img src="./assets/img/como_ajudar.png" height="64px"/></div>\n    <div id="cartilha2" tappable (click)="backToRoot()">Como cuidar<img src="./assets/img/como_cuidar.png" height="64px"/></div>\n    <div id="cartilha3" tappable (click)="backToRoot()">Seja um abrigo<img src="./assets/img/Seja_abrigo.png" height="64px"/></div>\n    <div id="cartilha4" tappable (click)="backToRoot()">O que não fazer<img src="./assets/img/nao_fazer.png" height="64px"/></div>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/cartilha/cartilha.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], CartilhaPage);
    return CartilhaPage;
}());

//# sourceMappingURL=cartilha.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(nav) {
        this.nav = nav;
    }
    HomePage.prototype.backToRoot = function () {
        this.nav.push('HomeDetalhesPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-grid fixed>\n      <ion-row align-items-stretch>\n\n        <ion-col col-12 col-md-6 align-self-stretch align-self-center approxItemHeight="457px">\n          <ion-card (click)="backToRoot()" tappable>\n             <img src="./assets/img/slide4.jpg">\n            <ion-card-title style="text-align: center;">\n              Manchete da noticia\n            </ion-card-title>\n            <ion-card-content>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae dui id metus dictum congue. Donec sagittis imperdiet purus a auctor. \n            </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n         <ion-col col-12 col-md-6 align-self-stretch align-self-center approxItemHeight="457px">\n          <ion-card (click)="backToRoot()" tappable>\n             <img src="./assets/img/slide4.jpg">\n            <ion-card-title style="text-align: center;">\n              Manchete da noticia\n            </ion-card-title>\n            <ion-card-content>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae dui id metus dictum congue. Donec sagittis imperdiet purus a auctor. \n            </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n         <ion-col col-12 col-md-6 align-self-stretch align-self-center approxItemHeight="457px">\n          <ion-card (click)="backToRoot()" tappable>\n             <img src="./assets/img/slide4.jpg">\n            <ion-card-title style="text-align: center;">\n              Manchete da noticia\n            </ion-card-title>\n            <ion-card-content>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae dui id metus dictum congue. Donec sagittis imperdiet purus a auctor. \n            </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n         <ion-col col-12 col-md-6 align-self-stretch align-self-center approxItemHeight="457px">\n           <ion-card (click)="backToRoot()" tappable>\n             <img src="./assets/img/slide4.jpg">\n            <ion-card-title style="text-align: center;">\n              Manchete da noticia\n            </ion-card-title>\n            <ion-card-content>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae dui id metus dictum congue. Donec sagittis imperdiet purus a auctor. \n            </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartilha_cartilha__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voluntario_voluntario__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__doa_o_doa_o__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__voluntario_voluntario__["a" /* VoluntarioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__doa_o_doa_o__["a" /* DonatePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_2__cartilha_cartilha__["a" /* CartilhaPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Voluntário" tabIcon="contacts"> </ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Doação" tabIcon="heart"> </ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Mapa" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobrePage = (function () {
    function SobrePage(nav) {
        this.nav = nav;
    }
    SobrePage.prototype.backToRoot = function () {
        this.nav.setRoot('TabsPage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/sobre/sobre.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title><ion-icon tappable (click)="backToRoot()" name="arrow-back"></ion-icon>Sobre</ion-title>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/img/sparrow-logo.svg" alt="SPARROW logo">\n  </div>\n  <div padding class="about-info">\n    <h4>PetPet</h4>\n\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis semper posuere. Fusce et euismod sapien, ut interdum dui. Cras non sem sit amet est facilisis convallis a vitae urna. Vestibulum euismod aliquet nunc quis posuere. Donec quis sem odio. Maecenas sed urna eu augue iaculis gravida ut id risus. Mauris tempor convallis nibh non ultricies. Ut placerat justo et tellus tincidunt mollis.\n    </p>\n    <p>\n      Nunc sed rhoncus dolor, sit amet commodo lectus. Nullam eget lorem iaculis, accumsan turpis sed, feugiat ante. Suspendisse quis scelerisque risus, vel tempus dui. Sed tincidunt ac turpis a malesuada. Mauris sit amet ligula ut velit aliquet vehicula. Praesent non massa at leo consectetur blandit. \n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/sobre/sobre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.backToRoot = function () {
        this.nav.setRoot('TabsPage');
    };
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getAvatar();
        this.getDisplayName();
        this.getEmail();
    };
    AccountPage.prototype.updatePicture = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Digite a url do avatar',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'avatar',
            value: this.userAvatar,
            placeholder: 'avatar'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
                user.updateProfile({
                    displayName: _this.userDisplayName,
                    photoURL: data.avatar
                }).then(function () {
                }).catch(function (error) {
                });
            }
        });
        alert.present();
    };
    AccountPage.prototype.changeEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Mudar Email',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'email',
            value: this.userEmail,
            placeholder: 'email'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
                user.updateEmail(data.email).then(function () {
                });
                _this.getEmail();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getEmail = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.userEmail = user.email;
            }
        }
        ;
    };
    AccountPage.prototype.getDisplayName = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.userDisplayName = user.displayName;
            }
        }
        ;
    };
    AccountPage.prototype.getAvatar = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.userAvatar = user.photoURL;
            }
        }
        ;
    };
    AccountPage.prototype.changePassword = function () {
        var alert = this.alertCtrl.create({
            title: 'Mudar Senha',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'senha',
            value: this.userPassword,
            placeholder: 'senha'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
                user.updatePassword(data.senha).then(function () {
                });
            }
        });
        alert.present();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      <ion-icon tappable (click)="backToRoot()" name="arrow-back"></ion-icon>Account</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu" class="backButtonNav"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center>\n    <img src="{{userAvatar}}" alt="avatar">\n    <h2>{{userDisplayName}}</h2>\n    <h4>{{userEmail}}</h4>\n    <ion-list inset>\n      <button ion-item (click)="updatePicture()">Mudar avatar</button>\n      <button ion-item (click)="changeEmail()">Mudar email</button>\n      <button ion-item (click)="changePassword()">Mudar senha</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abrigo_tabs_page_abrigo_tabs_page__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
        this.login = { email: '', password: '' };
        this.segment = "loginView";
        this.submitted = false;
    }
    LoginPage.prototype.backToRoot = function () {
        this.nav.setRoot('TabsPage');
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        var erro;
        if (form.valid) {
            var check = true;
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signInWithEmailAndPassword(this.login.email, this.login.password).catch(function (error) {
                erro = error;
                check = false;
            });
            if (check) {
                this.userData.login(this.login.email, 'user');
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__abrigo_tabs_page_abrigo_tabs_page__["a" /* Abrigo_TabsPage */]);
            }
            else {
                this.alertCtrl.create({
                    title: 'Erro',
                    subTitle: erro,
                    buttons: ['OK']
                }).present();
            }
        }
    };
    LoginPage.prototype.onSignup = function (form) {
        if (form.valid) {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().createUserWithEmailAndPassword(this.login.email, this.login.password)
                .then(function (user) {
                var user2 = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
                user2.updateProfile({
                    displayName: user2.email.split("@")[0],
                    photoURL: "http://www.gravatar.com/avatar?d=mm&s=140",
                });
            })
                .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('A senha é muito fraca');
                }
                else if (errorCode == 'auth/email-already-in-use') {
                    alert('O email já está em uso.');
                }
                else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        }
        this.userData.signup(this.login.email.split("@")[0], 'user');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__abrigo_tabs_page_abrigo_tabs_page__["a" /* Abrigo_TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/login/login.html"*/'<ion-content no-padding>\n	<div class="logo">\n		<img src="assets/img/logo_logo.png" alt="PetPet logo">\n	</div>\n	<ion-segment [(ngModel)]="segment">\n		<ion-segment-button value="loginView">\n			Login\n		</ion-segment-button>\n		<ion-segment-button value="cadastrar">\n			Cadastrar\n		</ion-segment-button>\n	</ion-segment>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines class="someDesgraça" id="formulario">\n\n			<ion-item class="someDesgraça">\n				<ion-icon color="light" name="unlock"></ion-icon>\n				<ion-label color="light" class="someDesgraça">Email:</ion-label>\n				<ion-input [(ngModel)]="login.email" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n				required>\n				</ion-input>\n		</ion-item>\n		<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n			Email é obrigatório\n		</p>\n\n		<ion-item class="someDesgraça">\n			<ion-icon name="unlock"></ion-icon>\n			<ion-label color="light">Senha:</ion-label>\n			<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n			</ion-input>\n		</ion-item>\n		<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n			Senha é obrigatório\n		</p>\n	</ion-list>\n	<ion-row>\n		<button ion-button class="botaoConfirm" (click)="onLogin(loginForm)" type="submit" round *ngIf="segment === \'loginView\'" color="sucess">Login</button>\n		<button ion-button class="botaoConfirm" (click)="onSignup(loginForm)" color="light" round *ngIf="segment === \'cadastrar\'" color="sucess">Cadastrar</button>\n	</ion-row>\n	<ion-row>\n		<button ion-button (click)="backToRoot()" color="danger" round id="botãoPular">Pular</button>\n	</ion-row>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Abrigo_TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartilha_cartilha__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abrigo_map_abrigo_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abrigo_voluntario_abrigo_voluntario__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abrigo_donate_abrigo_donate__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Abrigo_TabsPage = (function () {
    function Abrigo_TabsPage(navParams) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__abrigo_voluntario_abrigo_voluntario__["a" /* AbrigoVoluntarioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__abrigo_donate_abrigo_donate__["a" /* AbrigoDonatePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__abrigo_map_abrigo_map__["a" /* AbrigoMapPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_2__cartilha_cartilha__["a" /* CartilhaPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    Abrigo_TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_tabs-page/abrigo_tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Voluntário" tabIcon="contacts"> </ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Doação" tabIcon="heart"> </ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Mapa" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_tabs-page/abrigo_tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Abrigo_TabsPage);
    return Abrigo_TabsPage;
}());

//# sourceMappingURL=abrigo_tabs-page.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrigoMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbrigoMapPage = (function () {
    function AbrigoMapPage(platform) {
        this.platform = platform;
    }
    AbrigoMapPage.prototype.ionViewDidLoad = function () {
    };
    AbrigoMapPage.prototype.showDiv = function () {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AbrigoMapPage.prototype, "mapElement", void 0);
    AbrigoMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abrigo_map',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_map/abrigo_map.html"*/'<ion-header>\n	<ion-navbar color="secondary">\n		<button ion-button menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Locais de Coleta</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n	<div style="height: 50%; width: 100%" #mapCanvas id="map_canvas"></div>\n	<ion-item-divider sticky color=danger>\n		<ion-icon name=information-circle item-start></ion-icon>\n		Cadastre seus postos de recebimento\n	</ion-item-divider>\n	<ion-list padding-left padding-right>\n		<ion-item no-lines (click)="showDiv()" color="secondary" class="roundCoisa">\n			<ion-avatar style="float: left">\n				<img src="../assets/img/plaquinha.png">\n			</ion-avatar>\n			<ion-icon name="arrow-dropdown" style="float: right"></ion-icon>\n			<div style="float: left;padding-top: 15;">Petshop para pets</div><br>\n			<p>Funciona das 08 às 20 horas</p>\n			<div class="info" text-wrap id="myDIV">\n				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus leo, auctor eget ullamcorper at, maximus et nisi. i</div>\n				<ion-avatar style="float: left">\n					<img src="../assets/img/sãolazaro.jpg">\n				</ion-avatar>\n				<h4 class="abrigoNome">Abrigo Auau</h4>\n				<button ion-button full round color="danger" (click)="aparecerPopup()">Editar</button> \n			</div>\n		</ion-item>\n	</ion-list>\n	<ion-fab bottom right>\n		<button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_map/abrigo_map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], AbrigoMapPage);
    return AbrigoMapPage;
}());

//# sourceMappingURL=abrigo_map.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrigoVoluntarioPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abrigo_eventCreate_abrigo_eventCreate__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AbrigoVoluntarioPage = (function () {
    function AbrigoVoluntarioPage(nav) {
        var _this = this;
        this.nav = nav;
        this.requests = [];
        this.getDisplayName();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('eventRequest/').on('value', function (resp) {
            _this.requests = [];
            _this.requests = snapshotToArray(resp);
        });
    }
    AbrigoVoluntarioPage.prototype.goToCreate = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__abrigo_eventCreate_abrigo_eventCreate__["a" /* AbrigoEventCreate */]);
    };
    AbrigoVoluntarioPage.prototype.getDisplayName = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.userDisplayName = user.displayName;
            }
        }
        ;
    };
    AbrigoVoluntarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-abrigos_voluntario',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_voluntario/abrigo_voluntario.html"*/'<ion-header >\n  <ion-navbar color=secondary>\n    <ion-title>Seus Eventos</ion-title>\n    <button end ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-item-divider class="aviso" color=danger>\n  <ion-icon name=information-circle  item-start></ion-icon>\n  Gerencie seus eventos\n</ion-item-divider>\n<ion-list padding-left padding-right *ngFor="let pedido of requests">\n  <ion-item no-lines color="secondary" class="roundCoisa" *ngIf="pedido.createdBy===userDisplayName">\n    <ion-icon name="calendar" style="float: left"></ion-icon>\n    <ion-icon name="arrow-dropdown" style="float: right"></ion-icon>\n    <div class="eventTitle">{{pedido.titulo}}</div><br>\n    <p>Dia {{pedido.data}} das {{pedido.horarioInicio}} às {{pedido.horarioFim}} horas</p>\n    <ion-col tappable >\n      <span class="volunteerNumber"style="float: right">{{pedido.participantes}}</span>  \n      <ion-icon class="volunteerIcon" name="people" style="float: right"></ion-icon>\n    </ion-col>\n    <div class="info" text-wrap id="myDIV">\n      <div>{{pedido.descricao}}</div>\n      <ion-avatar style="float: left">\n        <img src="{{pedido.avatar}}">\n      </ion-avatar>\n      <h4 class="abrigoNome">{{pedido.createdBy}}</h4>\n      <button ion-button full round color="danger" (click)="aparecerPopup()">Editar</button> \n    </div>\n  </ion-item>\n</ion-list>\n<ion-fab bottom right>\n   <button ion-fab color="danger" (click)="goToCreate()"><ion-icon name="add"></ion-icon></button>\n </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_voluntario/abrigo_voluntario.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */]) === "function" && _a || Object])
    ], AbrigoVoluntarioPage);
    return AbrigoVoluntarioPage;
    var _a;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=abrigo_voluntario.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrigoEventCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbrigoEventCreate = (function () {
    function AbrigoEventCreate(nav, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.pedidoEvento = { titulo: '', descricao: '', data: '', horarioInicio: '', horarioFim: '' };
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventRequest/');
    }
    AbrigoEventCreate.prototype.confirmRequest = function () {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var newData = this.ref.push();
        newData.set({
            titulo: this.pedidoEvento.titulo,
            descricao: this.pedidoEvento.descricao,
            data: this.pedidoEvento.data,
            horarioInicio: this.pedidoEvento.horarioInicio,
            horarioFim: this.pedidoEvento.horarioFim,
            createdBy: user.displayName,
            participants: '1',
            avatar: user.photoURL
        });
        var toast = this.toastCtrl.create({
            message: 'Solicitação enviada',
            duration: 3000
        });
        toast.present();
        this.nav.pop();
    };
    AbrigoEventCreate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventCreate',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_eventCreate/abrigo_eventCreate.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Cadastre o seu evento</ion-title>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-left padding right>\n  <ion-list>\n    <ion-label>Título do evento</ion-label>    \n    <ion-item>\n      <ion-input [(ngModel)]="pedidoEvento.titulo" name="pedidoTitulo" type="text" #pedidoTitulo="ngModel"required></ion-input>\n    </ion-item>\n    <ion-label>Descricao do evento</ion-label>\n    <ion-item>\n      <ion-textarea [(ngModel)]="pedidoEvento.descricao" name="pedidoDescricao" #pedidoDescricaosupportQuestion="ngModel" rows="2" required class="someDesgraça"></ion-textarea>\n    </ion-item>\n        <ion-label style="color: black">Data do evento</ion-label>\n\n    <ion-item>\n      <ion-input [(ngModel)]="pedidoEvento.data" name="pedidodata" type="text" #pedidoData="ngModel"required></ion-input>\n    </ion-item>\n          <ion-label style="color: black">Horário</ion-label>\n    <ion-item>\n      <ion-label style="color: black">De</ion-label>\n      <ion-input [(ngModel)]="pedidoEvento.horarioInicio" name="pedidoInicio" type="text" #pedidoInicio="ngModel"required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label style="color: black">até </ion-label>\n      <ion-input [(ngModel)]="pedidoEvento.horarioFim" name="pedidoFim" type="text" #pedidoFim="ngModel"required></ion-input>\n    </ion-item>\n    <button ion-button full round color="danger" (click)="confirmRequest()">Confirmar</button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_eventCreate/abrigo_eventCreate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AbrigoEventCreate);
    return AbrigoEventCreate;
}());

//# sourceMappingURL=abrigo_eventCreate.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrigoDonatePage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abrigo_donateCreate_abrigo_donateCreate__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AbrigoDonatePage = (function () {
    function AbrigoDonatePage(nav) {
        var _this = this;
        this.nav = nav;
        this.requests = [];
        this.getDisplayName();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('donateRequest/').on('value', function (resp) {
            _this.requests = [];
            _this.requests = snapshotToArray(resp);
        });
    }
    AbrigoDonatePage.prototype.goToCreate = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__abrigo_donateCreate_abrigo_donateCreate__["a" /* AbrigoDonateCreate */]);
    };
    AbrigoDonatePage.prototype.getDisplayName = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.userDisplayName = user.displayName;
            }
        }
        ;
    };
    AbrigoDonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-abrigo_donate',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_donate/abrigo_donate.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Seus pedidos de doação</ion-title>\n    <button end ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider sticky class="aviso" color=danger>\n    <ion-icon name=information-circle item-start></ion-icon>\n    Gerencie seus pedidos de doação\n  </ion-item-divider>\n  <ion-list padding-left padding-right *ngFor="let pedido of requests">\n   <ion-item no-lines color="secondary" class="roundCoisa"  no-lines *ngIf="pedido.createdBy===userDisplayName">\n      <ion-icon name="paw" style="float: left" *ngIf="pedido.tipo === \'alimento\'"></ion-icon>\n      <ion-icon name="cash" style="float: left" *ngIf="pedido.tipo === \'financeira\'"></ion-icon>\n      <ion-icon name="medkit" style="float: left" *ngIf="pedido.tipo === \'medicamentos\'"></ion-icon>\n      <ion-icon name="basket" style="float: left" *ngIf="pedido.tipo === \'higiene\'"></ion-icon>\n      <ion-icon name="arrow-dropdown" style="float: right"></ion-icon>\n      <div class="eventTitle">{{pedido.titulo}}</div><br>\n      <p>Até dia 08/07</p>\n      <div class="info" text-wrap>\n        <div>{{pedido.descricao}}</div>\n        <ion-avatar style="float: left">\n          <img src="{{pedido.avatar}}">\n        </ion-avatar>\n        <h4 class="abrigoNome">{{pedido.createdBy}}</h4>\n        <button ion-button full round color="danger" (click)="aparecerPopup()">Editar</button> \n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-fab bottom right>\n    <button ion-fab color="danger" (click)="goToCreate()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_donate/abrigo_donate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */]])
    ], AbrigoDonatePage);
    return AbrigoDonatePage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=abrigo_donate.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrigoDonateCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbrigoDonateCreate = (function () {
    function AbrigoDonateCreate(nav, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.pedidoDoar = { titulo: '', descricao: '', tipo: '' };
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('donateRequest/');
    }
    AbrigoDonateCreate.prototype.confirmRequest = function () {
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var newData = this.ref.push();
        newData.set({
            titulo: this.pedidoDoar.titulo,
            descricao: this.pedidoDoar.descricao,
            tipo: this.pedidoDoar.tipo,
            createdBy: user.displayName,
            avatar: user.photoURL
        });
        var toast = this.toastCtrl.create({
            message: 'Solicitação enviada',
            duration: 3000
        });
        toast.present();
        this.nav.pop();
    };
    AbrigoDonateCreate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donateCreate',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_donateCreate/abrigo_donateCreate.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Cadastre o seu pedido</ion-title>\n    <button ion-button menuToggle end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-left padding right>\n  <ion-list>\n    <ion-label>Título do pedido</ion-label>    \n    <ion-item>\n      <ion-input [(ngModel)]="pedidoDoar.titulo" name="pedidoTitulo" type="text" #pedidoTitulo="ngModel"required></ion-input>\n    </ion-item>\n    <ion-label>Descricao do pedido</ion-label>\n    <ion-item>\n      <ion-textarea [(ngModel)]="pedidoDoar.descricao" name="pedidoDescricao" #pedidoDescricao="ngModel" rows="2" required class="someDesgraça"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Qual é o tipo de doação?</ion-label>\n      <ion-select [(ngModel)]="pedidoDoar.tipo">\n        <ion-option value="alimento">Alimentos</ion-option>\n        <ion-option value="financeira">Financeira</ion-option>\n        <ion-option value="higiene">Higiene</ion-option>\n        <ion-option value="medicamentos">Medicamentos</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button full round color="danger" (click)="confirmRequest()">Confirmar</button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/abrigo_donateCreate/abrigo_donateCreate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AbrigoDonateCreate);
    return AbrigoDonateCreate;
}());

//# sourceMappingURL=abrigo_donateCreate.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            var mapEle = _this.mapElement.nativeElement;
            var map = new google.maps.Map(mapEle, {
                center: mapData.find(function (d) { return d.center; }),
                zoom: 12
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var marker = new google.maps.Marker({
                    position: markerData,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    MapPage.prototype.showDiv = function () {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/map/map.html"*/'<ion-header>\n	<ion-navbar color="secondary">\n		<button ion-button menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Mapa</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n	<div style="height: 50%; width: 100%" #mapCanvas id="map_canvas"></div>\n	<ion-item-divider class="aviso" color="danger">\n		<ion-icon name=information-circle item-start></ion-icon>\n		Postos de doação\n	</ion-item-divider>\n	<ion-list padding-left padding-right>\n		<ion-item no-lines (click)="showDiv()" color="secondary" class="roundCoisa">\n			<ion-avatar style="float: left">\n				<img src="../assets/img/plaquinha.png">\n			</ion-avatar>\n			<ion-icon name="arrow-dropdown" style="float: right"></ion-icon>\n			<div style="float: left;padding-top: 15;">Petshop para pets</div><br>\n			<p>Funciona das 08 às 20 horas</p>\n			<div class="info" text-wrap id="myDIV">\n				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus leo, auctor eget ullamcorper at, maximus et nisi. i</div>\n				<ion-avatar style="float: left">\n					<img src="../assets/img/sãolazaro.jpg">\n				</ion-avatar>\n				<h4 class="abrigoNome">Abrigo Auau</h4>\n			</div>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoluntarioPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoluntarioPage = (function () {
    function VoluntarioPage(alertCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.requests = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventRequest/').on('value', function (resp) {
            _this.requests = [];
            _this.requests = snapshotToArray(resp);
        });
    }
    VoluntarioPage.prototype.aparecerPopup = function () {
        var alert = this.alertCtrl.create({
            title: 'Obrigado!',
            subTitle: 'Agora, seu pedido será confirmado em breve!',
            buttons: ['OK']
        });
        alert.present();
    };
    VoluntarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-voluntario',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/voluntario/voluntario.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Voluntário</ion-title>\n    <button end ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-item-divider class="aviso" color=danger>\n  <ion-icon name=information-circle item-start></ion-icon>\n  Eventos que você pode participar\n</ion-item-divider>\n<ion-list padding-left padding-right >\n  <ion-item no-lines color="secondary" class="roundCoisa" *ngFor="let pedido of requests">\n    <ion-icon name="calendar" style="float: left"></ion-icon>\n    <ion-icon name="arrow-dropdown" style="float: right"></ion-icon>\n    <div class="eventTitle">{{pedido.titulo}}</div><br>\n    <p>Dia {{pedido.data}} das {{pedido.horarioInicio}} às {{pedido.horarioFim}} horas</p>\n    <ion-col tappable >\n      <span class="volunteerNumber"style="float: right">{{pedido.participantes}}</span>  \n      <ion-icon class="volunteerIcon" name="people" style="float: right"></ion-icon>\n    </ion-col>\n    <div class="info" text-wrap id="myDIV">\n      <div>{{pedido.descricao}}</div>\n      <ion-avatar style="float: left">\n        <img src="{{pedido.avatar}}">\n      </ion-avatar>\n      <h4 class="abrigoNome">{{pedido.createdBy}}</h4>\n      <button ion-button full round color="danger" (click)="aparecerPopup()">Participar</button> \n    </div>\n  </ion-item>\n</ion-list>\n</ion-content>'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/voluntario/voluntario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], VoluntarioPage);
    return VoluntarioPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=voluntario.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatePage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonatePage = (function () {
    function DonatePage(alertCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.requests = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('donateRequest/').on('value', function (resp) {
            _this.requests = [];
            _this.requests = snapshotToArray(resp);
        });
    }
    DonatePage.prototype.aparecerPopup = function () {
        var alert = this.alertCtrl.create({
            title: 'Obrigado!',
            subTitle: 'Agora, seu pedido será confirmado em breve!',
            buttons: ['OK']
        });
        alert.present();
    };
    DonatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donate',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/doação/doação.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Doação</ion-title>\n    <button end ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider class="aviso" color=danger>\n    <ion-icon name=information-circle item-start></ion-icon>\n    Iniciativas que você pode ajudar\n  </ion-item-divider>\n  <ion-item no-lines class="someDesgraça">\n    <ion-scroll scrollX="true" swipe-horizontal>\n      <button ion-button round class="scroll-item" color="secondary">\n        Todos\n      </button>\n      <button ion-button round class="scroll-item" color="secondary">\n        Medicamento\n      </button>\n      <button ion-button round class="scroll-item" color="secondary">\n        Alimento\n      </button>\n      <button ion-button round class="scroll-item" color="secondary">\n        Equipamentos\n      </button>\n      <button ion-button round class="scroll-item" color="secondary">\n        Higiene\n      </button>\n    </ion-scroll>\n  </ion-item>\n  <ion-list padding-left padding-right >\n    <ion-item no-lines color="secondary" class="roundCoisa" *ngFor="let pedido of requests" no-lines>\n      <ion-icon name="paw" style="float: left" *ngIf="pedido.tipo === \'alimento\'"></ion-icon>\n      <ion-icon name="cash" style="float: left" *ngIf="pedido.tipo === \'financeira\'"></ion-icon>\n      <ion-icon name="medkit" style="float: left" *ngIf="pedido.tipo === \'medicamentos\'"></ion-icon>\n      <ion-icon name="basket" style="float: left" *ngIf="pedido.tipo === \'higiene\'"></ion-icon>\n      <ion-icon name="arrow-dropdown" style="float: right"></ion-icon>\n      <div class="eventTitle">{{pedido.titulo}}</div><br>\n      <p>Até dia 08/07</p>\n      <div class="info" text-wrap>\n        <div>{{pedido.descricao}}</div>\n        <ion-avatar style="float: left">\n          <img src="{{pedido.avatar}}">\n        </ion-avatar>\n        <h4 class="abrigoNome">{{pedido.createdBy}}</h4>\n        <button ion-button full round color="danger" (click)="aparecerPopup()">Ajudar</button> \n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/doação/doação.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DonatePage);
    return DonatePage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=doação.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificacoesPage = (function () {
    function NotificacoesPage(nav) {
        this.nav = nav;
    }
    NotificacoesPage.prototype.backToRoot = function () {
        this.nav.setRoot('TabsPage');
    };
    NotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificacoes',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/notificacoes/notificacoes.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n		<ion-title>\n      <ion-icon tappable (click)="backToRoot()" name="arrow-back"></ion-icon>Notificações</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-list>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n		<ion-item>Notificação</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/notificacoes/notificacoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], NotificacoesPage);
    return NotificacoesPage;
}());

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddRoomPage = (function () {
    function AddRoomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { roomname: '' };
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('chatrooms/');
    }
    AddRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddRoomPage');
    };
    AddRoomPage.prototype.addRoom = function () {
        var newData = this.ref.push();
        newData.set({
            roomname: this.data.roomname
        });
        this.navCtrl.pop();
    };
    AddRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-room',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/add-room/add-room.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Criar sala</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="addRoom()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Digite o nome da sala</ion-label>\n        <ion-input type="text" [(ngModel)]="data.roomname" name="roomname" required=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button full round color="secondary" type="submit">Add</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/add-room/add-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddRoomPage);
    return AddRoomPage;
}());

//# sourceMappingURL=add-room.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatTestPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_room__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatTestPage = (function () {
    function ChatTestPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { type: '', username: '', message: '' };
        this.chats = [];
        this.offStatus = false;
        this.roomkey = this.navParams.get("key");
        this.roomname = this.navParams.get("roomname");
        this.username = this.navParams.get("username");
        this.data.type = 'message';
        this.data.username = this.username;
        var joinData = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        joinData.set({
            type: 'join',
            user: this.username,
            message: this.username + ' entrou na conversa.',
            sendDate: Date()
        });
        this.data.message = '';
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').on('value', function (resp) {
            _this.chats = [];
            _this.chats = snapshotToArray(resp);
            setTimeout(function () {
                if (_this.offStatus === false) {
                    _this.content.scrollToBottom(300);
                }
            }, 1000);
        });
    }
    ChatTestPage.prototype.ionViewWillLeave = function () {
        var exitData = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        exitData.set({
            type: 'exit',
            user: this.username,
            message: this.username + ' saiu da conversa.',
            sendDate: Date()
        });
        this.offStatus = true;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__room_room__["a" /* RoomPage */], {
            username: this.username
        });
    };
    ChatTestPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 80);
    };
    ChatTestPage.prototype.sendMessage = function () {
        if (/\S/.test(this.data.message)) {
            var newData = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
            newData.set({
                type: this.data.type,
                user: this.data.username,
                message: this.data.message,
                sendDate: Date()
            });
            this.data.message = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatTestPage.prototype, "content", void 0);
    ChatTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatTest',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/chatTest/chatTest.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      {{roomname}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let chat of chats" no-lines>\n      <div class="chat-status" text-center *ngIf="chat.type===\'join\'||chat.type===\'exit\';else message">\n        <span class="chat-date">{{chat.sendDate | date:\'short\'}}</span>\n        <span class="chat-content-center">{{chat.message}}</span>\n      </div>\n      <ng-template #message>\n        <div class="chat-message" text-right *ngIf="chat.user === username">\n          <div class="right-bubble">\n            <p text-wrap>{{chat.message}}</p>\n            <span class="msg-date">{{chat.sendDate | date:\'short\'}}</span>\n          </div>\n        </div>\n        <div class="chat-message" text-left *ngIf="chat.user !== username">\n          <div class="left-bubble">\n            <span class="msg-name">{{chat.user}}</span>\n            <p text-wrap>{{chat.message}}</p>\n            <span class="msg-date">{{chat.sendDate | date:\'short\'}}</span>\n          </div>\n        </div>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 offset-1>\n        <ion-input type="text" placeholder="Escreva uma mensagem" (keyup.enter)="sendMessage()" [(ngModel)]="data.message" name="message"></ion-input>\n      </ion-col>\n      <ion-col col-3 (click)="sendMessage()">\n        <button ion-fab color="secondary">\n            <ion-icon name="send" color="light"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/chatTest/chatTest.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChatTestPage);
    return ChatTestPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=chatTest.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContatoPage = (function () {
    function ContatoPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    ContatoPage.prototype.ionViewDidEnter = function () {
    };
    ContatoPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Tente novamente no próximo checkpoint',
                duration: 3000
            });
            toast.present();
        }
    };
    ContatoPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Sair da página?',
                message: 'Você tem certeza que quer sair dessa página? Seu formulário ainda não foi enviado'
            });
            alert.addButton({ text: 'Cancelar', handler: reject });
            alert.addButton({ text: 'Sair', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    ContatoPage.prototype.backToRoot = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    ContatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contato',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/contato/contato.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n		<button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>		<ion-icon tappable (click)="backToRoot()" name="arrow-back"></ion-icon>\nContato</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/logo_logo.png" alt="Ionic Logo" width="80%">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)" class="someDesgraça">\n		<ion-list no-lines>\n			<ion-item class="someDesgraça">\n				<ion-label stacked color="light">Envie aqui sua sugestão</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required class="someDesgraça"></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Digite uma mensagem para nós\n		</p>\n\n		<div padding>\n			<button ion-button block color="danger" type="submit">Enviar</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/contato/contato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ContatoPage);
    return ContatoPage;
}());

//# sourceMappingURL=contato.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(321);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cartilha_cartilha__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contato_contato__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_map_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_voluntario_voluntario__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_detalhes_home_detalhes__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cartilha_detalhes_cartilha_detalhes__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_abrigo_tabs_page_abrigo_tabs_page__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_page_tabs_page__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tutorial_tutorial__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_doa_o_doa_o__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_notificacoes_notificacoes__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_abrigo_donate_abrigo_donate__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_abrigo_donateCreate_abrigo_donateCreate__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_abrigo_eventCreate_abrigo_eventCreate__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_abrigo_voluntario_abrigo_voluntario__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_abrigo_map_abrigo_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chatTest_chatTest__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_signin_signin__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_room_room__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_add_room_add_room__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cartilha_cartilha__["a" /* CartilhaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_voluntario_voluntario__["a" /* VoluntarioPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_doa_o_doa_o__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_detalhes_home_detalhes__["a" /* HomeDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cartilha_detalhes_cartilha_detalhes__["a" /* CartilhaDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_abrigo_tabs_page_abrigo_tabs_page__["a" /* Abrigo_TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_abrigo_donate_abrigo_donate__["a" /* AbrigoDonatePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_abrigo_donateCreate_abrigo_donateCreate__["a" /* AbrigoDonateCreate */],
                __WEBPACK_IMPORTED_MODULE_28__pages_abrigo_eventCreate_abrigo_eventCreate__["a" /* AbrigoEventCreate */],
                __WEBPACK_IMPORTED_MODULE_29__pages_abrigo_voluntario_abrigo_voluntario__["a" /* AbrigoVoluntarioPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_abrigo_map_abrigo_map__["a" /* AbrigoMapPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chatTest_chatTest__["a" /* ChatTestPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_add_room_add_room__["a" /* AddRoomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_abrigo_tabs_page_abrigo_tabs_page__["a" /* Abrigo_TabsPage */], name: 'Abrigo_TabsPage', segment: 'abrigo_tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_voluntario_voluntario__["a" /* VoluntarioPage */], name: 'Voluntário', segment: 'voluntario' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */], name: 'HomePage', segment: 'HomePage' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_home_detalhes_home_detalhes__["a" /* HomeDetalhesPage */], name: 'HomeDetalhesPage', segment: 'HomeDetalhesPage' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_abrigo_donateCreate_abrigo_donateCreate__["a" /* AbrigoDonateCreate */], name: 'AbrigoDonateCreate', segment: 'AbrigoDonateCreate' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_abrigo_eventCreate_abrigo_eventCreate__["a" /* AbrigoEventCreate */], name: 'AbrigoEventCreate', segment: 'AbrigoEventCreate' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */], name: 'Pontos de coleta', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_cartilha_cartilha__["a" /* CartilhaPage */], name: 'CartilhaPage', segment: 'cartilha' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_cartilha_detalhes_cartilha_detalhes__["a" /* CartilhaDetalhesPage */], name: 'CartilhaDetalhesPage', segment: 'CartilhaDetalhesPage' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */], name: 'NotificacoesPage', segment: 'notificacoes' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre__["a" /* SobrePage */], name: 'SobrePage', segment: 'sobre' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_contato_contato__["a" /* ContatoPage */], name: 'ContatoPage', segment: 'contato' },
                        { component: __WEBPACK_IMPORTED_MODULE_31__pages_chatTest_chatTest__["a" /* ChatTestPage */], name: 'ChatTestPage', segment: 'chatTest' },
                        { component: __WEBPACK_IMPORTED_MODULE_32__pages_signin_signin__["a" /* SigninPage */], name: 'SigninPage', segment: 'SigninPage' },
                        { component: __WEBPACK_IMPORTED_MODULE_33__pages_room_room__["a" /* RoomPage */], name: 'RoomPage', segment: 'room' },
                        { component: __WEBPACK_IMPORTED_MODULE_34__pages_add_room_add_room__["a" /* AddRoomPage */], name: 'AddRoomPage', segment: 'addroom' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cartilha_cartilha__["a" /* CartilhaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_voluntario_voluntario__["a" /* VoluntarioPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_doa_o_doa_o__["a" /* DonatePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_detalhes_home_detalhes__["a" /* HomeDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cartilha_detalhes_cartilha_detalhes__["a" /* CartilhaDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_abrigo_tabs_page_abrigo_tabs_page__["a" /* Abrigo_TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_abrigo_donate_abrigo_donate__["a" /* AbrigoDonatePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_abrigo_donateCreate_abrigo_donateCreate__["a" /* AbrigoDonateCreate */],
                __WEBPACK_IMPORTED_MODULE_28__pages_abrigo_eventCreate_abrigo_eventCreate__["a" /* AbrigoEventCreate */],
                __WEBPACK_IMPORTED_MODULE_29__pages_abrigo_voluntario_abrigo_voluntario__["a" /* AbrigoVoluntarioPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_abrigo_map_abrigo_map__["a" /* AbrigoMapPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chatTest_chatTest__["a" /* ChatTestPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_add_room_add_room__["a" /* AddRoomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sobre_sobre__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_page_tabs_page__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notificacoes_notificacoes__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_room_room__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contato_contato__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_data__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var config = {
    apiKey: 'AIzaSyA_uvBzMx3r_DHSwz31Hh1aj6aMpNSgXqY',
    authDomain: 'sparrowproject-a11a8.firebaseapp.com',
    databaseURL: 'https://sparrowproject-a11a8.firebaseio.com',
    projectId: 'sparrowproject-a11a8',
    storageBucket: 'sparrowproject-a11a8.appspot.com',
};
var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.appPages = [
            { title: 'Entre em contato', name: 'ContatoPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_contato_contato__["a" /* ContatoPage */], icon: 'at' },
            { title: 'Sobre', name: 'SobrePage', component: __WEBPACK_IMPORTED_MODULE_4__pages_sobre_sobre__["a" /* SobrePage */], icon: 'ribbon' },
        ];
        this.loggedInPages = [
            { title: 'Conta', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Conversas', name: 'RoomPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_room_room__["a" /* RoomPage */], icon: 'chatbubbles' },
            { title: 'Notificações', name: 'NotificacoesPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */], icon: 'notifications' },
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Logar/Cadastrar', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.platformReady();
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        __WEBPACK_IMPORTED_MODULE_11_firebase__["initializeApp"](config);
    }
    ConferenceApp.prototype.ngAfterViewInit = function () {
        this.getUsername();
        this.getAvatar();
        console.log(this.userAvatar);
    };
    ConferenceApp.prototype.getUsername = function () {
        var user = __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.username = user.email;
            }
        }
        ;
    };
    ConferenceApp.prototype.getAvatar = function () {
        var user = __WEBPACK_IMPORTED_MODULE_11_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.userAvatar = user.photoURL;
            }
        }
        ;
    };
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content" side="right">\n\n    <ion-header>\n      <ion-toolbar color="secondary">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class="outer-content">\n      <ion-list>\n        <ion-list-header>\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n      <ion-list>\n        <ion-item-divider style="height: 4px">\n        </ion-item-divider>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content" side="right">\n\n    <ion-header>\n      <ion-toolbar color="secondary">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n       <div padding-top text-center>\n       <img style="border-radius: 50%" src="{{userAvatar}}" alt="avatar"/>\n        <h2>{{username}}</h2>\n      </div>\n      <ion-list>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-item-divider>\n        </ion-item-divider>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        this.data = data.json();
        this.data.tracks = [];
        this.data.schedule.forEach(function (day) {
            day.groups.forEach(function (group) {
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.login = function (username, type) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username, type);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username, type) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username, type);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut();
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username, type) {
        this.storage.set('username', username);
        this.storage.set('type', type);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeDetalhesPage = (function () {
    function HomeDetalhesPage() {
    }
    HomeDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-detalhes',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/home-detalhes/home-detalhes.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n		<ion-title>Manchete da Notícia</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n	<ion-card no-padding>\n	<img src="./assets/img/slide4.jpg">\n        <ion-card-title style="text-align: center;">\n            Manchete da noticia\n        </ion-card-title>\n        <ion-card-content>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis semper posuere. Fusce et euismod sapien, ut interdum dui. Cras non sem sit amet est facilisis convallis a vitae urna. Vestibulum euismod aliquet nunc quis posuere. Donec quis sem odio. Maecenas sed urna eu augue iaculis gravida ut id risus. Mauris tempor convallis nibh non ultricies. Ut placerat justo et tellus tincidunt mollis. \n        </ion-card-content>\n     </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/home-detalhes/home-detalhes.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomeDetalhesPage);
    return HomeDetalhesPage;
}());

//# sourceMappingURL=home-detalhes.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartilhaDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartilhaDetalhesPage = (function () {
    function CartilhaDetalhesPage() {
    }
    CartilhaDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cartilha-detalhes',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/cartilha-detalhes/cartilha-detalhes.html"*/'<ion-header>\n\n	<ion-navbar color="secondary">\n		<ion-title>Cartilha Informativa</ion-title>\n        <button ion-button menuToggle right>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n	<ion-card no-padding>\n        <ion-card-title style="text-align: center;">\n            Alimentação\n        </ion-card-title>\n        <ion-card-content>\n            <h2>O que dar pro pet comer?</h2>\n            <br>\n            <p>Os nossos pets precisam de uma alimentação balanceada assim como a gente. É recomendado que eles se alimentem apenas de ração durante toda a vida, com alguns agrados ocasionais - afinal ninguém é de ferro. Não dê comidas muito doces ou gordurosas pro seu pet, animais geralmente não tem um metabolismo tão forte quanto o nosso e podem ter problemas de saúde comendo esse tipo de comida. \n                Não alimente seus pets com comida feita em casa. Comida humana não foi feita pro sistema digestivo dos animais e pode fazer mal, além de acostumar o pet de maneira errada. \n                Cuidado para não dar chocolates, pimenta, cebolas e afins para seu cãozinho, ele pode ficar até doente! \n            Lembre-se, animais se comportam muitas vezes como bebês humanos, especialmente quando ainda são filhotes: Eles são curiosos e gostam de experimentar coisas - mas isso não significa que você deve deixar que eles comam tudo. </p>\n            <br>\n            <h2>Qual a melhor ração para dar ao pet?</h2>\n            <br>\n                <p>Existem muitos tipos de ração no mercado, mas dê sempre preferência às rações sem corantes e de boa qualidade. Rações PREMIUM geralmente possuem uma boa fórmula e composição para garantir que seu pet tenha todos os nutrientes para viver uma vida saudável e feliz. Caso o seu pet tenha alguma dificuldade para comer as rações, não goste ou vomite tudo depois, troque a ração ou mude a tática de alimentação. \n                Lembre-se: em casos mais sérios, consulte sempre o veterinário!</p>\n                <br>\n                <h2>Meu cachorro está comendo grama, o que faço?</h2>\n                <br>\n                    <p>Comer grama é uma tática que o animal tem para tentar se livrar de irritações no seu sistema digestivo ou suprir necessidades alimentares graves. Se o seu bichinho está comendo grama, pode ser algo trivial como uma dor de barriga ou algo bem mais sério. Por via de dúvidas, observe por um dia, se o bichinho não melhorar, é bom levá-lo ao veterinário. Nunca deixe para tratar problemas da saúde do seu animal em último caso.</p>\n                    <br>\n                    <h2>Meu cachorro não quer mais comer ração, apenas comida caseira, o que faço?</h2>\n                    <br>\n                    <p>Maus costumes, como não comer ração, são facilmente contornados com treinamento adequado. Se o seu cachorro se acostumou a não comer ração, apenas comida caseira, experimente misturar um pouco da comida - bem pouco mesmo - com a ração e deixe que ele coma. A princípio ele não vai querer, ele vai cheirar e em seguida deixar a ração lá parada, mas não se desespere, eventualmente ele vai comê-la quando sentir a necessidade. \n                        Após a primeira vez que ele comer a ração misturada com comida caseira, vá aos poucos, diariamente, reduzindo a quantidade de comida caseira na ração até que não seja mais necessário usar. \n                        NUNCA faça essa mudança de maneira brusca, o cachorro pode acabar se assustando e preferindo ficar com fome à comer a nova comida - que para ele pode ser estranha. \n                    Usar rações de boa qualidade facilita a transição.</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/cartilha-detalhes/cartilha-detalhes.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CartilhaDetalhesPage);
    return CartilhaDetalhesPage;
}());

//# sourceMappingURL=cartilha-detalhes.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>ICA</b>\n      </h2>\n      <p>\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n      <h2 class="slide-title" >What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">What is Ionic Pro?</h2>\n      <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_room__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { nickname: "" };
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.enterNickname = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__room_room__["a" /* RoomPage */], {
            nickname: this.data.nickname
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="enterNickname()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Enter your Nickname</ion-label>\n        <ion-input type="text" [(ngModel)]="data.nickname" name="nickname" required=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button full round color="secondary" type="submit">Enter</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_room_add_room__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatTest_chatTest__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomPage = (function () {
    function RoomPage(navCtrl, navParams, userData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.rooms = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('chatrooms/');
        this.ref.on('value', function (resp) {
            _this.rooms = [];
            _this.rooms = snapshotToArray(resp);
        });
    }
    RoomPage.prototype.backToRoot = function () {
        this.navCtrl.setRoot('TabsPage');
    };
    RoomPage.prototype.addRoom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_room_add_room__["a" /* AddRoomPage */]);
    };
    RoomPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    RoomPage.prototype.getUsername = function () {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        if (user) {
            if (user != null) {
                this.username = user.displayName;
            }
        }
        ;
    };
    RoomPage.prototype.joinRoom = function (key, roomname) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatTest_chatTest__["a" /* ChatTestPage */], {
            key: key,
            roomname: roomname,
            username: this.username,
        });
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room',template:/*ion-inline-start:"/home/pedro/Downloads/SparrowProject/src/pages/room/room.html"*/'<!--\n  Generated template for the RoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      <ion-icon tappable (click)="backToRoot()" name="arrow-back"></ion-icon>Conversas</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu" class="backButtonNav"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let room of rooms">\n      {{room.roomname}}\n      <ion-icon name="chatboxes" item-end (click)="joinRoom(room.key, room.roomname)"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-fab bottom right>\n   <button ion-fab  color="secondary" (click)="addRoom()"><ion-icon name="add"></ion-icon></button>\n </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/pedro/Downloads/SparrowProject/src/pages/room/room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */]])
    ], RoomPage);
    return RoomPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=room.js.map

/***/ })

},[299]);
//# sourceMappingURL=main.js.map