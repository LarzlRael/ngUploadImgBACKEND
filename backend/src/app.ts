import express from 'express';
import morgan from 'morgan'
import path from 'path';
import cors from 'cors';

const app = express();
//importando el enrutador

import indexRoutes from "./routes/indexRoutes";
//settings
app.set('port', process.env.PORT || 4000);

//settings
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//enrutador
app.use('/api',indexRoutes);

//this folder for this app will be to store public files

app.use('/uploads',express.static(path.resolve('uploads')));
app.use(express.static(path.join(__dirname,'public/angular-photo-galley')));
//exportando la varibble app
export default app;
