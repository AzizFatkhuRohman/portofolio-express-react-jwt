import komentar from "../models/komentar.model.js";
import post from "../models/post.model.js";

export const getPost = async(req,res)=>{
    try {
        const dataPost = await post.findAll()
        return res.status('200').json(dataPost)
    } catch (error) {
        console.log(error)
    }
}
export const getPostPublic = async(req,res)=>{
    try {
        const dataPost = await post.findAll()
        return res.status('200').json(dataPost)
    } catch (error) {
        console.log(error)
    }
}
export const findPostPublic = async(req,res)=>{
    const postId = req.params.id
    try {
        const dataPost = await post.findOne({
            where:{id:postId}
        })
        const dataKomentar = await komentar.findAll()
        
        return res.status(200).json({
            dataPost:dataPost,
            dataKomentar:dataKomentar
        })
    } catch (error) {
        
    }
}
export const findPost = async(req,res)=>{
    const postId = req.params.id
    try {
        const dataPost = await post.findOne({
            where:{id:postId}
        })
        const dataKomentar = await komentar.findAll()
        
        return res.status(200).json({
            dataPost:dataPost,
            dataKomentar:dataKomentar
        })
    } catch (error) {
        
    }
}
export const postPost = async(req,res)=>{
    const {
        userId,judul,kategori,gambar,deskripsi
    } = req.body
    try {
        await post.create({
            userId:userId,judul:judul,
            kategori:kategori, gambar:gambar,deskripsi:deskripsi
        })
        return res.status(200).json({
            msg:"Post berhasil"
        })
    } catch (error) {
        console.log(error)
    }
}