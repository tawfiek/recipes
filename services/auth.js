"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("firebase/app");
firebase;
var AuthServise = (function () {
    function AuthServise() {
    }
    AuthServise.prototype.signup = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password);
    };
    return AuthServise;
}());
exports.AuthServise = AuthServise;
