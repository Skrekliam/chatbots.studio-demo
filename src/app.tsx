
const express: any = require('express');
const axios: any = require('axios');
const app: any = express();
const firebase: any = require('firebase');
require('dotenv').config({ path: __dirname+'/process.env' });

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.DB_apiKey,
    authDomain: process.env.DB_authDomain,
    projectId: process.env.DB_projectId,
    storageBucket: process.env.DB_storageBucket,
    messagingSenderId: process.env.DB_messagingSenderId,
    appId: process.env.DB_appId,
    measurementId: process.env.DB_measurementId
  });

const db :any = firebaseApp.firestore();





app.get('/', (req: any, res: any): any => {
    res.send('Homepage');
})

app.get('/upload/dog/image', (req: any, res: any): any => {
    axios.get('https://random.dog/woof.json').then((res1 : any)=> console.log(res1.data))
})

app.listen(3000, (): any => console.log('port : 3000 '+ process.env.DB_apiKey));