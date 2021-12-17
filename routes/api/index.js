const router = require('express').Router();
const travelerRoutes = require('./travelerRoutes');

router.use('/Traveller', travelerRoutes);

module.exports = router;
