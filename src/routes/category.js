const express = require('express');
const router = express.Router()
const Category = require('../models/category.js')
const slugify = require('slugify')
const { requireSignin, adminMiddleware } = require('../commen-middleware')
const { addCategory, getCategories } = require('../controller/admin/category.js')

router.post('/categroy/create',requireSignin,adminMiddleware, addCategory)
router.get('/categroy/getcategories', getCategories)
module.exports = router

