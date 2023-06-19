const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // const userData = await User.findAll().catch((err) => {
    //     res.json(err);
    // });

    // const users = userData.map((user) => user.get({ plain: true}));
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
        return;
    }
})

module.exports = router;