const mongoose = require('mongoose');
const { use } = require('../routes/admin');

// Connect to MongoDB
mongoose.connect('mongodb+srv://2004agarwalyash:Y%40shkanu2004@firstcluster.vuuqumo.mongodb.net/assignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [String]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    users: [String]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}