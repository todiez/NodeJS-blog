const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin'

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
        res.render("admin/index", { locals, layout: adminLayout });
    } catch (error) {
        console.log(error);
    }
});

/**
 * POST
 * Admin - Check Login Page
 */
router.post('/admin', async (req, res) => {
    try {
        //basic logic for login
        const { username , password } = req.body;
        console.log(req.body);
        
        res.redirect('/admin');
    } catch (error) {
        console.log(error);
    }
});

/**
 * POST
 * Admin - SignUp Page
 */
router.post('/register', async (req, res) => {
    try {
        //basic logic for login
        const { username , password } = req.body;
        console.log(req.body);
        
        res.redirect('/admin');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;