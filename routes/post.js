const express = require('express')
const { renderHompage, renderDetail } = require('../controller/post')

const postRouter  = express.Router()

//homerouter
postRouter.get("/", renderHompage )

postRouter.get("/detail/:id",renderDetail)

module.exports = postRouter