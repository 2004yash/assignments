const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
import { Admin, Course } from '../models/user.js';

// Admin Routes
router.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let newAdmin = new Admin({
        username: username,
        password: password
    });
    newAdmin.save().then(() => {
        res.status(201).send("Admin created successfully");
    }).catch((err) => {
        res.status(500).send("Error creating admin");
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let price = req.body.price;
    let imageLink = req.body.imageLink;
    let newCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    });
    newCourse.save().then(() => {
        res.status(201).json({
            message: "Course created successfully",
            courseId: newCourse._id
        })
    }).catch((err) => {
        res.status(500).send("Error creating course");
    });
});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({}, (err, courses) => {
        if(err) {
            res.status(500).send("Error finding courses");
        } else {
            res.status(200).json({
                courses: courses
            });
        }
    });

});

module.exports = router;