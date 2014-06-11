var express     = require('express'),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    child       = require("child_process"),
    app         = express();


function gitPull(){
  child.exec('cd /ngLazy-demo && git pull origin master',  {detached: true});
}

app.use(bodyParser());
app.use(morgan({ format: 'dev', immediate: true }));

app.get('/', function(req, res){
  res.send(200, "GOTTEN");
});
app.post('/', function(req, res){
  console.log(req.body);
  req.body.commits.distinct && gitPull();
  res.send(204);
});

app.listen(8001);
console.log('Server running at http://127.0.0.1:8001/');


