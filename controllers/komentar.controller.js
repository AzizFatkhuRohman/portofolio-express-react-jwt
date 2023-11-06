import komentar from "../models/komentar.model.js";

export const findKomentar = async(req,res)=>{
    const komentarId = req.params.id
    try {
        const dataKomentar = await komentar.findOne({
            where:{id:komentarId}
        })
        return res.status(200).json(dataKomentar)
    } catch (error) {
        console.log(error)
    }
}
export const postKomentar = async(req,res)=>{
    const {
        postId,komentator,body
    } = req.body
    try {
        await komentar.create({
            postId:postId,komentator:komentator,body:body
        })
        return res.status(200).json({
            msg:"komentar berhasil dibuat"
        })
    } catch (error) {
        console.log(error)
    }
}