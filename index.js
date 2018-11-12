const Sequelize = require('sequelize');
const sequelize = new Sequelize('impact_byte', 'root', 'cimahpar9', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING
    }, email: {
        type: Sequelize.STRING,
        unique: true
    }
});

// force: true will drop the table if it already exists
// User.sync({ force: false }).then(() => {
//     // Table created
//     console.log("table created")
// });

//create
// User.create({
//   first_name: "joko",
//   last_name: "budi",
//   email: "joko@gmail.com"
// })
//   .then(() => console.log("berhasil!"))
//   .catch((err) => console.log(`gagal ${err}`))

//find
// User.findById(1, {raw: true})
//     .then(user => console.log(user))
//     .catch(err => console.log(err))


// User.findAll({raw: true})
//     .then(user => console.log(user))
//     .catch(err => console.log(error));
  
//update all
// User.update({first_name: "albert"}, {
//   where: {
//     id: 1
//   }
// }).then(result => {
//   console.log(result);
// })

//delete
// User.findOne({ where: {id : 2}})
//     .then(user => {
//       user.destroy()
//           .then(res=> console.log(res))
//           .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

//search with or
// const Op = Sequelize.Op;

// User.findAll({ 
//   where: {
//     [Op.or]: [{ last_name: "Joko" }, {last_name: 'sudarsono'}]
//   },
//   raw: true
// })
//   .then(user => console.log(user))
//   .catch(err => console.log(err))

User.findAll({
  attributes: ["first_name", "last_name"],
  raw: true
})
  .then(user => console.log(user))
  .catch(err => console.log(err))


