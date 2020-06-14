const Comment = require('./../models/comment');
const Blog = require('./../models/blog');
const User = require('./../models/user');

exports.getAllComments = (req, res) => {

    Comment.findAll({
            include: [{
                model: Blog
            }, {
                model: User
            }, ]
        })
        .then((comments) => {
            console.log(comments)
            res.status(200).json({
                error: false,
                data: comments,
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'comments not found!'
        }))

}




exports.storeComment = (req, res) => {

    let {
        commentaire
    } = req.body;

    Comment.create({
            commentaire: commentaire
        })
        .then((Comment) => res.status(201).json({
            error: false,
            data: Comment
        }))
        .catch((err) => res.status(400).json({
            error: true,
            message: 'Bad request !'
        }))

}




exports.updateComment = (req, res) => {

    let {
        commentaire
    } = req.body;

    Comment.update({
            commentaire: commentaire
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



exports.showOneComment = (req, res) => {

    Comment.findByPk(req.params.id)
        .then(Comment => {
            res.status(200).json({
                error: false,
                data: Comment
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'Comment not found !'
        }))
}



exports.patchComment = (req, res) => {
    Comment.update(req.body, {
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

exports.deleteComment = (req, res) => {

    let id = req.params.id;

    Comment.destroy({
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