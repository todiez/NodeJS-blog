const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * GET
 * Admin - Login Page
 */
router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJS, Express & MongoDB"
        }
        res.render("index", { locals });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;