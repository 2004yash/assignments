import { User } from '../models/user.js';

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers.password;
    User.findOne({username: username}, (err, user) => {
        if(err) {
            res.status(500).send("Error finding user");
        } else if(user) {
            if(user.password === password) {
                next();
            } else {
                res.status(401).send("Unauthorized");
            }
        } else {
            res.status(401).send("Unauthorized");
        }
    }
    )
}

module.exports = userMiddleware;