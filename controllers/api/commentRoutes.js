const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [{ model: User}]
        });

        res.status(200).json(comments);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;