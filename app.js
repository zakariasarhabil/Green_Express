const express = require("express");
var cors = require('cors');



const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({
    type: 'application/*+json'
}))
app.use(bodyParser.raw({
    type: 'application/vnd.custom-type'
}))
app.use(bodyParser.text({
    type: 'text/html'
}))


const connection = require("./config/database");

//Models
const Category = require("./models/category");
const Admin = require("./models/admin");
const Blog = require("./models/blog");
const Comment = require("./models/comment");
const Portfolio = require("./models/portfolio");
const User = require("./models/user");

// import route
const categories = require("./routes/categories");
const users = require("./routes/users")
const admins = require("./routes/admins")
const portfolio = require("./routes/portfolios")
const blogs = require("./routes/blogs")
const comments = require("./routes/comments")



app.use(cors())
app.use("/comments", comments)
app.use("/blogs", blogs)
app.use("/portfolios", portfolio)
app.use("/admins", admins)
app.use("/categories", categories);
app.use("/users", users);










//les relation

// Relation between category and portfolio table

Portfolio.belongsTo(Category);
Portfolio.belongsTo(Admin);

Blog.belongsTo(Admin);
Comment.belongsTo(Blog);

Comment.belongsTo(User);
Comment.belongsTo(Blog);

Blog.hasMany(Comment);
User.hasMany(Comment);

connection
    .sync()
    .then(result => {
        app.listen(5000, () => console.log("Server ON"));




    })
    .catch(err => {
        console.log("error: ", err);
    });