import { Sequelize } from "sequelize";
import database from "../config/database.js";

const {DataTypes} = Sequelize
const post = database.define('post',{
    userId:{
        type:DataTypes.INTEGER
    },
    judul:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"Judul tidak boleh kosong"
            },
            max:255
        },
        unique:{
            args:true,
            msg:"Judul sudah ada"
        }
    },
    kategori:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"Kategori tidak boleh kosong"
            }
        }
    },
    gambar:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"Gambar tidak boleh kosong"
            }
        }
    },
    deskripsi:{
        type:DataTypes.STRING(500),
        allowNull:false,
        validate:{
            notNull:{
                msg:"Deskripsi tidak boleh kosong"
            }
        }
    }
},{
    freezeTableName:true
})

export default post