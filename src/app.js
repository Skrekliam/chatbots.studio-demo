var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var express = require('express');
var axios = require('axios');
var app = express();
var firebase = require('firebase');
require('dotenv').config({ path: __dirname + '/process.env' });
var firebaseApp = firebase.initializeApp({
    apiKey: process.env.DB_apiKey,
    authDomain: process.env.DB_authDomain,
    projectId: process.env.DB_projectId,
    storageBucket: process.env.DB_storageBucket,
    messagingSenderId: process.env.DB_messagingSenderId,
    appId: process.env.DB_appId,
    measurementId: process.env.DB_measurementId
});
var db = firebaseApp.firestore();
app.get('/', function (req, res) {
    res.send('Homepage');
});
app.get('/upload/dog/image', function (req, res) {
    axios.get('https://random.dog/woof.json?filter=mp4,webm').then(function (res1) {
        var data = res1.data;
        db.collection("dogs").add(__assign(__assign({}, data), { width: req.query.width, height: req.query.height })).then(function () { return res.send('Success!'); })["catch"](function (err) { return console.log(err); });
    });
});
app.listen(3000, function () { return console.log('port : 3000 '); });
