import { Sequelize } from "sequelize";
import database from "../config/database.js";

const {DataTypes} = Sequelize
const user = database.define('user',{
    nama:{
        type:DataTypes.STRING(50),
        allowNull:false,
        validate:{
            notNull:{
                msg:"Nama tidak boleh kosong"
            }
        }
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull:false,
        validate:{
            notNull:{
                msg:"Email tidak boleh kosong"
            },
            isEmail:true
        },
        unique:{
            args:true,
            msg:"email sudah ada"
        }
    },
    token:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:6,
            notNull:{
                msg:"Password tidak boleh kosong"
            }

        }
    }
},{
    freezeTableName:true
})

export default user