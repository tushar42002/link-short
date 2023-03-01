
import express from "express";
import cors from 'cors';

import con from './db.js'


const port = 4000


const app = express();
app.use(express.json());
 app.use(cors());


app.get('/', (req, res) => {
  res.send(con)
})

app.post('/create_short_url', (req, res) => {
  console.log(req.body);
  let unique_id = Math.random().toString(36).replace(/[^a-z0-9]/gi,'').substring(2,10);
  console.log(unique_id);
  let sql = `INSERT INTO links (long_url , short_urlid, user_id, date) VALUES ('${req.body.url}', '${unique_id}', '${req.body.id}', current_timestamp())`
   con.query(sql, function(err,result){
    if (err) {
      res.status(500).send("sommething is wrong");
    }else{ 
      res.json({'url': `${unique_id}`}).status(200)
    }
   }) 
})


app.post('/signup', (req, res) => {
  console.log(req.body);
  let sql = `INSERT INTO users (name , email, password, date) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}', current_timestamp())`
   con.query(sql, function(err,result){
    if (err) {
      res.status(500).send("sommething is wrong");
    }else{
      res.send("done").status(200)
    }
   })
})
 
app.get('/:shorturlid', (req, res) => {
   let shorturlid = req.params.shorturlid;
   let sql = `select * from links where short_urlid = '${shorturlid}'`;

   con.query(sql, function(err, result){
    if (err) {
      console.log(err);
      res.status(500).send("some error occur")
    } else {
       res.redirect(result[0].long_url)
    }
   })
})


app.get('/login', (req, res) => {
   let sql = `select * from users where email = ${req.body.email}`;

   con.query(sql, function(err, result){
    if (err) {
      res.status(500).send("some error occur")
    } else {
      if (result.password === req.body.password) {
        res.status(200).send({name: result.name, email: result.email})
      }
    }
   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})



