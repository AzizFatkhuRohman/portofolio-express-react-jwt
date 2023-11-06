import { Sequelize } from "sequelize";

const database = new Sequelize('portofolio_react','root','',{
    host:"localhost",dialect:"mysql"
})

export default database