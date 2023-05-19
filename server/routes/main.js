const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/**
 * GET
 * HOME
 */

router.get("", async (req, res) => {
  try {
    const locals = {
      title: "NodeJS Blog",
      description: "Simple Blog created with NodeJS, Express & MongoDB",
    };

    let perPage = 5;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.count();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.log(error);
  }
});

//Old: all blogs without pagination
// router.get('', async (req, res) => {
//     const locals = {
//         title: "NodeJS Blog",
//         description: "Simple Blog created with NodeJS, Express & MongoDB"
//     }

//     try {
//         const data = await Post.find();
//         res.render("index", { locals, data });
//     } catch (error) {
//         console.log(error);
//     }
// });

router.get("/about", (req, res) => {
  res.render("aboudfst");
});

// function insertPostData() {
//     Post.insertMany([
//         {
//             title: "Building a blog",
//             body: "Thi is the body text"
//         },
//         {
//             title: "Building a blog2",
//             body: "Thi is the body text2"
//         },
//         {
//             title: "Building a blog3",
//             body: "Thi is the body text3"
//         },
//         {
//             title: "Building a blog4",
//             body: "Thi is the body text4"
//         },
//         {
//             title: "Building a blog5",
//             body: "Thi is the body text5"
//         },
//         {
//             title: "Building a blog6",
//             body: "Thi is the body text6"
//         },
//         {
//             title: "Building a blog7",
//             body: "Thi is the body text7"
//         },
//         {
//             title: "Building a blog8",
//             body: "Thi is the body text8"
//         },
//         {
//             title: "Building a blog9",
//             body: "Thi is the body text9"
//         },
//         {
//             title: "Building a blog10",
//             body: "Thi is the body text10"
//         },
//         {
//             title: "Building a blog11",
//             body: "Thi is the body text11"
//         },
//         {
//             title: "Building a blog12",
//             body: "Thi is the body text12"
//         }
//     ])
// }
// insertPostData();

module.exports = router;
