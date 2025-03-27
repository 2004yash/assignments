const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index');


// User Routes
router.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let newUser = new User({
        username: username,
        password: password
    });
    newUser.save().then(() => {
        res.status(201).send("User created successfully");
    }).catch((err) => {
        res.status(500).send("Error creating user");
    });
}
);

router.get('/courses', (req, res) => {
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

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    let courseId = req.params.courseId;
    let username = req.headers.username;
    User.updateOne({ username: username }, { $push: { purchasedCourses: courseId } }, (err) => {
        if(err) {
            res.status(500).json({
                message: "Error purchasing course"
            });
        } else {
            res.status(200).json({
                message: "Purchase complete!"
            });
        }
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let username = req.headers.username;
    User.find({ username: username }, (err, user) => {
        if(err) {
            res.status(500).json({
                message: "Error fetching purchased courses"
            });
        } else {
            Course.find({ _id: { $in: user[0].purchasedCourses } }, (err, courses) => {
                if(err) {
                    res.status(500).json({
                        message: "Error fetching purchased courses"
                    });
                } else {
                    res.status(200).json({
                        courses: courses
                    });
                }
            });
        }
    }
    );
}
);


module.exports = router