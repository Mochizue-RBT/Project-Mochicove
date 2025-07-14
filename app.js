import express from 'express';
import bodyParser from 'body-parser';
import { Pool } from 'pg';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(morgan('tiny'));

const db = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'mochicove',
  port: 5432,
  password: 'mochi',
}); 

app.listen(port, (req, res)=>{
  return console.log(`🚀 Server is now listening to port http://localhost:${port}`);
});

app.get('/', (req, res)=>{
  return res.render('index');
});