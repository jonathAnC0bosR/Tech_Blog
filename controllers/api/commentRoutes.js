const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [{ model: Post}, { model: User }]
        });

        res.status(200).json(comments);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/',  async (req, res) => {
    try {
        const newPost = await Comment.create({
            ...req.body, 
            user_id: req.session.user_id,
            post_id: req.body.post_id
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;