module.exports = function(app){
    app.get('/construcao', function(req,res){
        res.render('./construcao/construcao');
    });
};