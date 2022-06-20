const orders = require('../models').orders;

module.exports = {
    list(req, res) {
        return orders.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((orders) => res.status(200).send(orders))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    getById(req, res) {
        return orders.findByPk(req.params.id, {
            include: []
        })
        .then((orders) => {
            if (!orders) {
                return res.status(404).send({
                    message: 'orders tidak ditemukan'
                })
            }
            return res.status(200).send(orders);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    add(req, res) {
        if (!req.body.IDUsers) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "id pengguna harus di isi"
                }
            )
        }

        if (!req.body.Status) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "status harus di isi"
                }
            )
        }

        if (!req.body.Date) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "tanggal harus di isi"
                }
            )
        }

        
        return orders.create({
            IDUsers: req.body.IDUsers,
            Status: req.body.Status,
            Date: req.body.Date
        })
        .then((orders) => res.status(201).send(orders))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    update(req, res) {
        return orders.findByPk(req.params.id)
        .then((orders) => {
            if (!orders) {
                return res.status(404).send({
                    message: 'orders tidak ditemukan'
                })
            }
            return orders.update({
                IDUsers: req.body.IDUsers,
                Status: req.body.Status,
                Date: req.body.Date
            })
            .then(() => res.status(200).send(orders))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    delete(req, res) {
        return orders.findByPk(req.params.id)
        .then((orders) => {
            if (!orders) {
                return res.status(404).send({
                    message: 'orders tidak ditemukan'
                })
            }
            return orders.destroy()
            .then(() => res.status(204).send({ message: "orders dihapus"}))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
}