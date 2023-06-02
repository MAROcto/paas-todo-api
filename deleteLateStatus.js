require("dotenv").config()
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL)

sequelize.query(`DELETE FROM todos WHERE statut = 'EN_RETARD'`)