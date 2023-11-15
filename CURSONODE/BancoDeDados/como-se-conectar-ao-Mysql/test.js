const Sequelize = require('sequelize')
const sequelize = new Sequelize('cursonode', 'root', '1718', {
    host:"localhost",
    dialect:"mysql"
})

const postagem = sequelize.define('postagem', {
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

const User = sequelize.define("Users",{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER  
    },
    email:{
        type:Sequelize.STRING
    }
})

User.create({
    nome:"gabriel",
    sobrenome:"amaral",
    idade:"17",
    email:"gabrielteste@teste.com"
})

