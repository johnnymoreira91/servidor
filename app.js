var app = require('./config/server');

/*
app.get('/', function(req,res){
    res.render('./home');
});*/

app.listen(3000, function(){
    console.log('SERVIDOR ON');
});