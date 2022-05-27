"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
require("dotenv/config");
const FirebaseAPP = (0, app_1.initializeApp)({
    apiKey: process.env.APIKEY,
    appId: process.env.APPID,
    authDomain: process.env.AUTHDOMAIN,
    measurementId: process.env.MEASUREMENTID,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
});
exports.DB = (0, firestore_1.getFirestore)(FirebaseAPP);
