const express = require("express")
const app = express();

app.get("/", function(req,res) {
    res.sendFile('C:/Users/micro/OneDrive/Documentos/all-my-coding/CURSONODE/HTML/index.html')
});
app.get("/produtos", function(req,res) {
    res.sendFile('C:/Users/micro/OneDrive/Documentos/all-my-coding/CURSONODE/HTML/index.html')
});

app.get("/ver", function(req,res) {
    res.sendFile('C:/Users/micro/OneDrive/Documentos/all-my-coding/CURSONODE/HTML/index.html')
});

app.get('/ola/:cargo/:nome/:cor', function(req,res) {
    res.send("ola "+ req.params.nome + "<br>" + "voce trabalha de "+ req.params.cargo + "<br>" + 
    "<mark>e sua cor é</mark> " + req.params.cor);
   
});

app.listen(8080, function serve() {
    console.log("esta rodando")
});