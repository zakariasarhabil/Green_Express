const Admin = require("./../models/admin");

exports.getAllAdmins = (req, res) => {
    Admin.findAll()
        .then(admins => {
            res.status(200).json({
                error: false,
                data: admins
            });
        })
        .catch(err =>
            res.status(404).json({
                error: true,
                message: "Admin not found !"
            })
        );
};



exports.storeAdmin = (req, res) => {
    let {
        name,
        email
    } = req.body;

    Admin.create({
            name: name,
            email: email
        })
        .then(Admin => res.status(201).json({
            error: false,
            data: Admin
        }))
        .catch(err =>
            res
            .status(400)
            .json({
                error: true,
                message: "Please check the data for Admin"
            })
        );
};

exports.updateAdmin = (req, res) => {
    console.log(req.body);
    let {
        name,
        email
    } = req.body;

    Admin.update({
            name: name,
            email: email
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


exports.showOneAdmin = (req, res) => {

    Admin.findByPk(req.params.id)
        .then(Admin => {
            res.status(200).json({
                error: false,
                data: Admin
            })
        })
        .catch(err => res.status(404).json({
            error: true,
            message: 'product not found !'
        }))
}


exports.patchAdmin = (req, res) => {
    Admin.update(req.body, {
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