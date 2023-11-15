const Sequelize =  require('sequelize')
const sequelize = new Sequelize ('cursocn', 'root', '1718' ,{
    host:'localhost',
    dialect:'mysql'
})

const user = sequelize.define('Users',{
    nome:{type:Sequelize.STRING},
    sobrenome:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    idade:{type:Sequelize.INTEGER}
})

user.create({
    nome:'gabriel',
    sobrenome:'amaral',
    email:'gabrielteste@gamil.com',
    idade:'17'
})