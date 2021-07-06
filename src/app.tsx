const express: any = require('express');

const app: any = express();

app.post('/upload/dog/image', (req: any, res: any): any => {
    res.send(req);
})