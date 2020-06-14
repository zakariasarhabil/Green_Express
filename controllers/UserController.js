const User = require("./../models/user");

exports.getAllUsers = (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).json({
                error: false,
                data: users
            });
        })
        .catch(err =>
            res.status(404).json({
                error: true,
                message: "user not found !"
            })
        );
};



exports.storeUser = (req, res) => {
    let {
        name
    } = req.body;

    User.create({
            name: name
        })
        .then(user => res.status(201).json({
            error: false,
            data: user
        }))
        .catch(err =>
            res
            .status(400)
            .json({
                error: true,
                message: "Please check the data for user"
            })
        );
};

exports.updateUser = (req, res) => {
    console.log(req.body);
    let {
        name
    } = req.body;

    User.update({
            name: name
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
                message: "bad request !"
            })
        );
};


exports.showOneUser = (req, res) => {

    User.findByPk(req.params.id)
        .then(user => {
            res.status(200).json({
                error: false,
                data: user
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'product not found !'
        }))
}


exports.patchUser = (req, res) => {
    User.update(req.body, {
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