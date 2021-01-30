const express = require("express");
const app = express();
const elFinder = require("../elfinder");



const roots = [
    {
        driver: elFinder.LocalFileStorage,
        URL: "/uploads/",       //Required
        path: "C:\\Studio\\studio2\\21_SKY\\skylarkjs\\intg\\files\\skylark-elfinder\\demo\\server\\nodejs\\media",   //Required
        permissions: { read:1, write: 1, lock: 0 }
    },
    {
        driver: elFinder.LocalFileStorage,
        URL: "/404/",       //Required
        path: "private",    //Required
        permissions: { read:1, write: 0, lock: 1 }
    },
];

// CORSを許可する
app.use( "/connector",elFinder( roots ) );

app.listen( process.env.PORT || 3000 );