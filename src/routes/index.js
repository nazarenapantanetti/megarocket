const express = require('express');

const router = express.Router();

// const subscriptions = require('../controllers/subscription');
// const admins = require('../controllers/admins');
// const members = require('../controllers/member');
const superAdmins = require('./super-admins');
// const classes = require('../controllers/class');
// const trainers = require('../controllers/trainer');
// const activities = require('../controllers/activity');

// router.use('/members', members);
// router.use('/admins', admins);
router.use('/superAdmins', superAdmins);
// router.use('/classes', classes);
// router.use('/trainers', trainers);
// router.use('/subscriptions', subscriptions);
// router.use('/activities', activities);

module.exports = router;
