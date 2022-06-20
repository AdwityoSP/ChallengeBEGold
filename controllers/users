const users = require('../models').users;

module.exports = {
    list(req, res) {
        return users.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((users) => res.status(200).send(users))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    getById(req, res) {
        return users.findByPk(req.params.id, {
            include: []
        })
        .then((users) => {
            if (!users) {
                return res.status(404).send({
                    message: 'pengguna tidak ditemukan'
                })
            }
            return res.status(200).send(users);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    add(req, res) {
        if (!req.body.Name) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "nama harus di isi"
                }
            )
        }

        if (!req.body.Password) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "password harus di isi"
                }
            )
        }

        if (!req.body.Email) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "email harus di isi"
                }
            )
        }

        if (req.body.Phone.length !== 12) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "nomor hp harus di isi, minimal 12 angka"
                }
            )
        }

        if (!req.body.Address) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "alamat harus di isi"
                }
            )
        }
        return users.create({
            Name: req.body.Name,
            Password: req.body.Password,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Address: req.body.Address
        })
        .then((users) => res.status(201).send(users))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    update(req, res) {
        return users.findByPk(req.params.id)
        .then((users) => {
            if (!users) {
                return res.status(404).send({
                    message: 'pengguna tidak ditemukan'
                })
            }
            return users.update({
                Name: req.body.Name,
                Password: req.body.Password,
                Email: req.body.Email, 
                Phone: req.body.Phone,
                Address: req.body.Address,
            })
            .then(() => res.status(200).send(users))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    delete(req, res) {
        return users.findByPk(req.params.id)
        .then((users) => {
            if (!users) {
                return res.status(404).send({
                    message: 'pengguna tidak ditemukan'
                })
            }
            return users.destroy()
            .then(() => res.status(204).send({ message: "pengguna dihapus"}))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
}