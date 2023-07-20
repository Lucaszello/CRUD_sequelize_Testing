const express = require("express");
const { renderSetAddPost, renderAddPost } = require("../controller/post");
const mainRouter = express.Router();
mainRouter.get("/addPost",renderAddPost)
mainRouter.post("/",renderSetAddPost);

module.exports = mainRouter