const express = require('express');
const router = express.Router();

const usersController = require('../controllers').users;
const itemsController = require('../controllers').items;
const ordersController = require('../controllers').orders;
const orderdetailsController = require('../controllers').orderdetails;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'bingleshop' });
});

router.get('/api/user', usersController.list);
router.get('/api/user/:id', usersController.getById);
router.post('/api/user', usersController.add);
router.put('/api/user/:id', usersController.update);
router.delete('/api/user/:id', usersController.delete);

router.get('/api/divisi', itemsController.list);
router.get('/api/divisi/:id', itemsController.getById);
router.post('/api/divisi', itemsController.add);
router.put('/api/divisi/:id', itemsController.update);
router.delete('/api/divisi/:id', itemsController.delete);

router.get('/api/project', ordersController.list);
router.get('/api/project/:id', ordersController.getById);
router.post('/api/project', ordersController.add);
router.put('/api/project/:id', ordersController.update);
router.delete('/api/project/:id', ordersController.delete);

router.get('/api/projectDivisi', orderdetailsController.list);
router.get('/api/projectDivisi/:id', orderdetailsController.getById);
router.post('/api/projectDivisi', orderdetailsController.add);
router.put('/api/projectDivisi/:id', orderdetailsController.update);
router.delete('/api/projectDivisi/:id', orderdetailsController.delete);

module.exports = router; 