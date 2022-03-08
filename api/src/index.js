const express = require('express');
const mongoose = require('mongoose');

const { connectMONGO } = require('./helpers/database');
const { HOST, PORT } = require('./config');

const app = express();

const postSchema = new mongoose.Schema({
    name: String,
});

const Post = mongoose.model('Post', postSchema);

app.get('/test', (req, res) => {
    res.send('api work');
});

const bootstrap = async () => {
    app.listen(PORT, () => {
        console.log(`server listening port: ${PORT}`);
        console.log(`on host: ${HOST}`);

        Post.find((err, posts) => {
            if (err) return console.error(err);

            console.log('posts: ', posts);

            if (!posts.length) {
                const newPost = new Post({ name: 'Post №1' });

                newPost.save((err, savedPost) => {
                    if (err) return console.error(err);

                    console.log('savedPost: ', savedPost);
                });
            }
        });
    });
};

connectMONGO()
    .on('error', console.error)
    .on('disconnected', connectMONGO)
    .once('open', bootstrap)
