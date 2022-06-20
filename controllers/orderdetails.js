const orderdetails = require('../models').orderdetails;

module.exports = {
    list(req, res) {
        return orderdetails.findAll({
            include: [],
            order: [['createdAt', 'DESC']]
        })
        .then((orderdetails) => res.status(200).send(orderdetails))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    getById(req, res) {
        return orderdetails.findByPk(req.params.id, {
            include: []
        })
        .then((orderdetails) => {
            if (!orderdetails) {
                return res.status(404).send({
                    message: 'orderdetails tidak ditemukan'
                })
            }
            return res.status(200).send(orderdetails);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    add(req, res) {
        if (!req.body.IDOrders) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "id orders harus di isi"
                }
            )
        }

        if (!req.body.IDItems) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "id items harus di isi"
                }
            )
        }

        if (!req.body.Quantity) {
            return res.status(400).send(
                { 
                    error_code: "400",
                    message: "quantity harus di isi"
                }
            )
        }

        
        return orderdetails.create({
            IDOrders: req.body.IDOrders,
            IDItems: req.body.IDItems,
            Quantity: req.body.Quantity
        })
        .then((orderdetails) => res.status(201).send(orderdetails))
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    update(req, res) {
        return orderdetails.findByPk(req.params.id)
        .then((orderdetails) => {
            if (!orderdetails) {
                return res.status(404).send({
                    message: 'ordersdetails tidak ditemukan'
                })
            }
            return orderdetails.update({
                IDOrders: req.body.IDOrders,
                IDItems: req.body.IDItems,
                Quantity: req.body.Quantity
            })
            .then(() => res.status(200).send(orderdetails))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    },

    delete(req, res) {
        return orderdetails.findByPk(req.params.id)
        .then((orderdetails) => {
            if (!orderdetails) {
                return res.status(404).send({
                    message: 'ordersdetails tidak ditemukan'
                })
            }
            return orderdetails.destroy()
            .then(() => res.status(204).send({ message: "ordersdetails dihapus"}))
            .catch((error) => {
                res.status(400).send(error);
            });
        })
        .catch((error) => {
            res.status(400).send(error);
        });
    }
}