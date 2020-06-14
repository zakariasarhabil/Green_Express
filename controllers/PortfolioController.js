const Portfolio = require('./../models/portfolio');
const Category = require('./../models/category');
const Admin = require('./../models/admin');

exports.getAllPortfolios = (req, res) => {

    Portfolio.findAll({
            include: [{
                model: Admin
            }, {
                model: Category
            }, ]
        })
        .then((post) => {
            console.log(post)
            res.status(200).json({
                error: false,
                data: post,
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'post not found!'
        }))

}


exports.storePortfolio = (req, res) => {

    let {
        title,
        urlImage,
        description,
        category,
        admin
    } = req.body;

    Portfolio.create({
            title: title,
            description: description,
            urlImage: urlImage,
            categoryId: category,
            adminId: admin
        })
        .then((portfolio) => res.status(201).json({
            error: false,
            data: portfolio
        }))
        .catch((err) => res.status(400).json({
            error: true,
            message: 'Bad request !'
        }))

}


exports.updatePortfolio = (req, res) => {

    let {
        title,
        urlImage,
        description,
        category,
        admin
    } = req.body;

    Portfolio.update({
            title: title,
            description: description,
            urlImage: urlImage,
            categoryId: category,
            adminId: admin
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(result => res.status(202).json({
            error: false,
            data: result
        }))
        .catch(err =>
            res.status(400).json({
                error: true,
                message: "bad request !!!!!"
            }))



}

exports.showOnePortfolio = (req, res) => {

    Portfolio.findByPk(req.params.id)
        .then(Portfolio => {
            res.status(200).json({
                error: false,
                data: Portfolio
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'Portfolio not found !'
        }))
}



exports.patchPortfolio = (req, res) => {
    Portfolio.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(result => res.status(200).json({
            error: false,
            data: result
        }))
        .catch(err =>
            res.status(400).json({
                error: true,
                message: "bad request!"
            })
        );
};

exports.deletePortfolio = (req, res) => {

    let id = req.params.id;

    Portfolio.destroy({
            where: {
                id: id
            }
        })
        .then(() => res.status(204).json({}))
        .catch((err) => res.status(403).json({
            error: true,
            message: 'impossible to delete this resource !'
        }))
}