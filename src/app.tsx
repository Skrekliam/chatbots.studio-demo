const express: any = require('express');
const axios: any = require('axios');
const app: any = express();

app.get('/', (req: any, res: any): any => {
    res.send('Homepage');
})

app.get('/upload/dog/image', (req: any, res: any): any => {
    axios.get('https://random.dog/woof.json').then((res1 : any)=> console.log(res1.data))
})

app.listen(3000, (): any => console.log('port : 3000'));