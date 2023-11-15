const express = require("express")
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/home', function(req, res){
    res.render('formulario.handlebars')

})

app.post('/enviado', function(req, res){
    res.send("seu titulo: "+req.body.titulo+"<br>"+"Seu conteudo: "+req.body.conteudo)
})












app.listen(8081,function(){
    console.log("conectado")
})