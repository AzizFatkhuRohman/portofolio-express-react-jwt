import express from "express"
import { postRegister,postLogin, getUser } from "../controllers/user.controller.js"
import { tokenVerifikasi } from "../middleware/tokenVerifikasi.js"
import { findPost, getPost, postPost, getPostPublic,findPostPublic } from "../controllers/post.controller.js"
import { findKomentar, postKomentar } from "../controllers/komentar.controller.js"
const route = express.Router()

route.post('/register', postRegister)
route.post('/login', postLogin)
route.get('/post/:id',findPost)
route.get('/post-public', getPostPublic)
route.get('/post-public/detail/:id', findPostPublic)
route.post('/komentar',postKomentar)
//admin
route.get('/post', tokenVerifikasi, getPost)
route.post('/post', tokenVerifikasi,postPost)
route.get('/detail-komentar/:id',tokenVerifikasi,findKomentar)

export default route