const items = require('../models').items;

module.exports = {
    list(req, res) {
        return items.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((items) => res.status(200).send(items))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    getById(req, res) {
        return items.findByPk(req.params.id, {
            include: []
        })
        .then((items) => {
            if (!items) {
                return res.status(404).send({
                    message: 'item tidak ditemukan'
                })
            }
            return res.status(200).send(items);
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

        if (!req.body.Harga) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "harga harus di isi"
                }
            )
        }

        return items.create({
            Name: req.body.Name,
            Harga: req.body.Harga
        })
        .then((items) => res.status(201).send(items))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    update(req, res) {
        return items.findByPk(req.params.id)
        .then((items) => {
            if (!items) {
                return res.status(404).send({
                    message: 'items tidak ditemukan'
                })
            }
            return items.update({
                Name: req.body.Name,
                Harga: req.body.Harga
            })
            .then(() => res.status(200).send(items))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    delete(req, res) {
        return items.findByPk(req.params.id)
        .then((items) => {
            if (!items) {
                return res.status(404).send({
                    message: 'items tidak ditemukan'
                })
            }
            return items.destroy()
            .then(() => res.status(204).send({ message: "items dihapus"}))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
}