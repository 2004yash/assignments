import { Admin } from '../models/user.js';

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers.password;
    Admin.findOne({username: username}, (err, user) => {
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

module.exports = adminMiddleware;