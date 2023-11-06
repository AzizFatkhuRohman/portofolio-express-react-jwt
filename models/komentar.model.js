import { Sequelize } from "sequelize";
import database from "../config/database.js";

const {DataTypes} = Sequelize
const komentar = database.define('komentar',{
    postId:{
        type:DataTypes.INTEGER
    },
    komentator:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"Nama anda tidak boleh kosong"
            }
        }
    },
    body:{
        type:DataTypes.STRING(450),
        allowNull:false,
        validate:{
            notNull:{
                msg:"Body tidak boleh kosong"
            },
            max:450
        }
    }
},{
    freezeTableName:true
})
export default komentar