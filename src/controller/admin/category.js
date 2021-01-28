const Category = require('../../models/category')
const slugify = require('slugify');

function createCategory(category, parentId = null) {
    const categoryList = [];
    let categores;
    if (parentId == null) {
        categores = category.filter(cat => cat.parentId == undefined)
    } else {
        categores = category.filter(cat => cat.parentId == parentId)
    }
    for (let cat of categores) {
        categoryList.push({
            _id: cat._id,
            name: cat._name,
            slug: cat.slug,
            children: createCategory(category,cat._id)
        })
    }
    return categoryList
}



exports.addCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId
    }

    const cat = new Category(categoryObj)
    cat.save((error, category) => {
        if (error) return res.status(400).json({ error })
        if (category) {
            return res.status(201).json({ category })
        }
    })
}


exports.getCategories = (req, res) => {
    Category.find({})
        .exec((err, category) => {
            if (err) res.status(400).json({ err })
            if (category) {

                const CategoryList = createCategory(category)
                res.status(200).json({ CategoryList })
            }

        })
}