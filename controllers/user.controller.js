import user from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

export const postRegister = async(req,res)=>{
    const {
        nama,email,password,confPassword
    } = req.body
    if (password !== confPassword) {
        return res.status(400).json({
            msg:"Password dan konfirmasi password tidak sama"
        })
    } else {
        try {
            const salt = await bcrypt.genSalt()
            const hash = await bcrypt.hash(password,salt)
            await user.create({
                nama:nama,email:email,password:hash
            })
            return res.status(200).json({
                msg:"Register berhasil"
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const postLogin = async (req, res) => {
    try {
        const users = await user.findAll({
            where: {
                email: req.body.email
            }
        });

        if (users.length === 0) {
            return res.status(400).json({
                msg: "User not found"
            });
        }

        const User = users[0]; // Assuming you want the first user with the given email

        const match = await bcrypt.compare(req.body.password, User.password);

        if (!match) {
            return res.status(400).json({
                msg: "Password anda salah"
            });
        } else {
            const userId = User.id;
            const nama = User.nama;
            const email = User.email;
            const aksesToken = jwt.sign({ userId, nama, email }, process.env.tokenAkses, {
                expiresIn: "2d"
            });

            await User.update(
                {
                    token: aksesToken
                },
                {
                    where: {
                        id: userId
                    }
                }
            );
            return res.status(200).json({ aksesToken });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
};

export const getUser = async(req,res)=>{
    try {
        const users = await user.findAll()
        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}