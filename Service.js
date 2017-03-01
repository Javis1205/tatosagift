var express = require ("express");
var app = express();
var pg = require ("pg");
var config = {
  user: 'postgres', //env var: PGUSER
  database: 'tatosagift', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 3000, // how long a client is allowed to remain idle before being closed
};
app.listen(3000);
function item(id,name,status,cost,info1,info2,image){
  this.Id = id ;
  this.Name = name ;
  this.Status = status;
  this.Cost = cost;
  this.Info1 = info1;
  this.Info2 = info2;
  this.Image = image;
}
app.get("/item/:id",function(req,res){
  var id = req.params.id;
  console.log(id);
  var data = [];
  var pool = new pg.Pool(config);

  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM hangxachtaynhat WHERE id = '+id+'', function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      for (var i=0 ;i<result.rows.length; i++){
        console.log("da ket noi");
        data.push(
          new item(result.rows[i].id,result.rows[i].name,result.rows[i].status,result.rows[i].cost,result.rows[i].info1,result.rows[i].info2,result.rows[i].image)
        );
      }
      res.send(data);
    });
  });
});
app.get("/items/:page",function(req,res){
  var page = req.params.page;
  var lineinpage = 10;
  var where = (page -1)*lineinpage;
  var data = [];
  var pool = new pg.Pool(config);

  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM hangxachtaynhat LIMIT '+lineinpage+' OFFSET '+where+'', function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      for (var i=0 ;i<result.rows.length; i++){
        console.log("da ket noi");
        data.push(
          new item(result.rows[i].id,result.rows[i].name,result.rows[i].status,result.rows[i].cost,result.rows[i].info1,result.rows[i].info2,result.rows[i].image)
        );
      }
      res.send(data);
    });
  });
});
