(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = __webpack_require__(1);
exports.createUser = createUser_1.createUser;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { AngularFirestore } from 'agularfire2/firestore';
const functions = __webpack_require__(2);
const db_1 = __webpack_require__(3);
exports.createUser = functions.https.onRequest((req, res) => {
    db_1.FireStore.addUser();
    res.send("hello world");
    // db.collection("users").add({
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    // })
    // .then((docRef:any) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error:any) => {
    //     console.error("Error adding document: ", error);
    // });
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var admin = __webpack_require__(4);
var serviceAccount = __webpack_require__(5);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://friendlychat-813.firebaseio.com"
});
const fire = admin.firestore();
// const firestore = admin.firestore();
class FireStore {
    static addUser() {
        console.log("done in db");
        fire.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
            .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
            .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
}
exports.FireStore = FireStore;
// let data = {
//     // firestore: firestore,
//     init: ()=>{
//     }
// }
// data.init();
exports.default = fire;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"type":"service_account","project_id":"friendlychat-813","private_key_id":"f77acb0e954cd6cbe3ea8514246d20230e759eb3","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDGYythInGsn8Io\n4rTCBJOngLNqu8AU1SpTJpF6CYs20lUgJtXvRarl/zQtkidQazRT6a0GifoGhrLa\nZqQdzMBYhbYTHX84TleinU/kmlM2j/mjWB88XjL12tj++PiVv72XjkzJKsqmR/Tl\nYCnsKX5Wh5DezmjRsubM0uGWavQpeyYjDMGRclxZcsjSKdcG7i03XQpqAKxhNnGx\n+fON+XoY/rrmnIaQJsBdlVkhaqzCUV0qitr7WV10jS16rPAurM9gm/9f6XC0Q+pd\nGTRruQifRVT66gOcMvjRvrLalmyRShmefS2ceFOLyzQs+zckJhVslPBDNi7yF/B8\nG/B4AJg3AgMBAAECggEAUPW9iTlePH1B5h+GdrsZar0J+x+9poLLb/2IVs44QtoZ\nJTLUEX5T3OKF76b6ZkYpp6jwFIAQScOEj75dcU/Smw2OHUTnWxoVh2Y9aWRVWyns\nTW2z6ZXjpBN4hK0j/TCvdX779QiChNNOrKDO2vKf/T37sAF6I0GoEKRqrVDebWJ9\nOyw3vK2nV1qq9ZmBF0b/mXXsxUKH/L0v9vLx2jrg84rG2GkRleY3WytXVSEVvhhz\n+wR3DLJoVmjWtdnQCHMsp0z5bE1bdymUXlHa6O7sRuKT/VmKzwa6d7Z/jrWCeWzT\nzlTBUd08SDuNTPd72dfd6T14nHcO7HHG6hL8dWgewQKBgQDqjm4683iNBZHkJcVk\nngUMBN/nczJJOCLKmJb7eaAvfaYNSUDcspBXkaFs6zK/9hwut2pWDvDGtUpRqm5s\nfl2tHs7Fm4v2wXN3srmuatXG4wdKMyMyWl+G1abKK+X/i1MRtNxS8cGPA15r/aRK\nCYTK4dz6rsCXvuzDjCmxYHoHIQKBgQDYhjzsFvEIQtmbJjMgPzIPHI37GuE2ftbT\nhV4s6iOtdhEHaB69ESwcdQ13Gtkz7ycen3Wwb4n5qim9qj0jHY+DaDeZwsTMKAsF\n0xlvmQPnipNDBBCYkScPfGBHglAyruzJapDX//wJu68XQ0oXj8/NpZym8pBNUbwK\n5Dsyv/6sVwKBgE3PlDfQPyShPWWvNg2L8marU0/nwj3R9pC5EBU6ou4+Q5DSxUax\nofq64A9O8xYFYhIJXKhR6oQw7gerf1hUj2T3/GZHlKX2RQTncHuxC1wgQnHWBw4U\nNu53AA6/g1xD7vnHwvNtKeX0myU+DntVLw1S4kjzIgb1GnxAijBCrhihAoGAOhQP\nxVgGASxFSEt/zTeGSu1i3CcCn+Z34zbT4wJO3ZlcyfrQu/AeP+fZ28fU2QxeFuW4\n4MGaZeCR37EJQyELvLi4qULIHObkxgQwv3FwzaurAn/Vn8bXjlzTSnsW3fFzzDcM\ncRPV3Bp+xaOj/RvzJns0wMcxk7vHz7gWdO9w9XMCgYA2J+36Kri30si1PAZc+D8r\nmr1IU/0feTjksBHwtHIZw8a0rzioJuaFjc/zpVWqhm6w6cUvfBrXbPfClNk/cYnt\nNW/JCU/37NLMvTvkK/qnpsCbucuapp9U5CN3jQPSeerGgijOJDUh7EgMA+a4y9eM\n1l3qwpdoqnMELkDi7T9fZg==\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-7hcqt@friendlychat-813.iam.gserviceaccount.com","client_id":"108531815960709864710","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7hcqt%40friendlychat-813.iam.gserviceaccount.com"}

/***/ })
/******/ ])));