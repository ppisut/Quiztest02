var express = require('express')
var app = express()
var ejs = require('ejs')
var mongo = require('mongodb')
var monk = require('monk')
var db = monk('localhost:27017/test')
var bodyParser = require('body-parser')
app.listen(4600)

//body parser json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/todos', function (req, res){
    res.render([{id: '', title: '', isDone: false}])
})


app.get('/todo/:id', function (req, res){
    var id = req.params.id;
    
})


app.post('/todos', function (req, res){
    var db = req.db
    var text = req.body.text
    var collection = db.get('Todo')
    collection.insert({
        "" : text,
        "false" : is_done
    })
    res.render(suc,{ id: '', title: '', isDone: false })
})



app.put('/todo/:id', function (req, res){
    var db = req.db;
    var text = req.body.text;
    var id = req.params.id;
    var collection = db.get('Todo')
    collection.insert({
        "" : text,
        "false" : is_done
    })
    res.render(suc,{ id: '', title: '', isDone: false })
})


app.delete('/todo/:id', function (req, res){
    if(res.render == false){
        res.render(suc)
    } else{
        res.render(err)
    }

})


