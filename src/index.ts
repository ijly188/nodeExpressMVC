import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { Database } from './database';
import appRoute from './app/app.routing';

// 這個要放在前面，因為怕後面 process.env.NODE_ENV 會沒有東西
dotenv.config({ path: path.resolve(__dirname, `./environments/${ process.env.NODE_ENV }.env`) });

Database.connect();


const app = express();

app.use(cors());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "example.com"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        },
    })
);

app.get('/', (req, res, next) => {
    res.send('Hello, World!!');
});

app.use('/', appRoute);

app.listen(process.env.PORT, () => console.log(`http server is running at port ${ process.env.PORT }.`));