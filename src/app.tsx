
const express: any = require('express');
const axios: any = require('axios');
const app: any = express();
const firebase: any = require('firebase');
require('dotenv').config({ path: __dirname + '/process.env' });

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.DB_apiKey,
    authDomain: process.env.DB_authDomain,
    projectId: process.env.DB_projectId,
    storageBucket: process.env.DB_storageBucket,
    messagingSenderId: process.env.DB_messagingSenderId,
    appId: process.env.DB_appId,
    measurementId: process.env.DB_measurementId
});

const db: any = firebaseApp.firestore();

interface DataResponse {
    fileSizeBytes: number,
    url: string
}




app.get('/', (req: any, res: any): any => {
    res.send('Homepage');
})

app.get('/upload/dog/image', (req: any, res: any): any => {
    axios.get('https://random.dog/woof.json?filter=mp4,webm').then((res1: any) => {
        const data: DataResponse = res1.data;

        db.collection("dogs").add({ ...data, width: req.query.width, height: req.query.height }).then(():any =>res.send('Success!'))
            .catch((err: any) => console.log(err))

    })
})

app.get('/list/dog/images', (req: any, res: any): any => {
    db.collection('dogs').get().then((doc: any): any => console.log(doc))
})

app.listen(3000, (): any => console.log('port : 3000 '));