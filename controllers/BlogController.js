const Blog = require('./../models/blog');
const Admin = require('./../models/admin');


exports.getAllBlogs = (req, res) => {

    Blog.findAll({
            include: [{
                model: Admin
            }, ]
        })
        .then((blog) => {
            console.log(blog)
            res.status(200).json({
                error: false,
                data: blog,
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'blog not found!'
        }))

}


exports.storeBlog = (req, res) => {

    let {
        title,
        urlImage,
        description,
        admin
    } = req.body;

    Blog.create({
            title: title,
            description: description,
            urlImage: urlImage,
            adminId: admin
        })
        .then((Blog) => res.status(201).json({
            error: false,
            data: Blog
        }))
        .catch((err) => res.status(400).json({
            error: true,
            message: 'Bad request !'
        }))

}



exports.updateBlog = (req, res) => {

    let {
        title,
        urlImage,
        description,

        admin
    } = req.body;

    Blog.update({
            title: title,
            description: description,
            urlImage: urlImage,

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



exports.showOneBlog = (req, res) => {

    Blog.findByPk(req.params.id)
        .then(Blog => {
            res.status(200).json({
                error: false,
                data: Blog
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'Blog not found !'
        }))
}




exports.patchBlog = (req, res) => {
    Blog.update(req.body, {
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

exports.deleteBlog = (req, res) => {

    let id = req.params.id;

    Blog.destroy({
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