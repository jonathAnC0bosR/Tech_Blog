const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User, 
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
            posts, 
            logged_in: req.session.logged_in
        });


    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/posts', async (req, res) => {
    try{
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });

        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User }, { model: Comment, include: { model: User } }
            ],
        });

        const post = postData.get({plain: true});
        const comments = post.comments;
        res.render('post', {
            post,
            comments,  
            logged_in: req.session.logged_in,
        });


    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {

    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
    res.redirect('/');
    return;
    }

    res.render('login');
});

router.get('/home', withAuth, (req, res) => {
    res.render('home', {
        logged_in: req.session.logged_in
    });
});

router.get('/signup', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
})

module.exports = router;