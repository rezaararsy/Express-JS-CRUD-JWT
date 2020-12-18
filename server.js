const express = require("express");
const bodyParser = require("body-parser");
const initRoutes = require("./app/routes/web");

global.__basedir = __dirname;

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application." });
// });

app.use(express.urlencoded({ extended: true }));
initRoutes(app);


const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/customer.routes.js")(app);

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// const Role = db.role;

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
// });

// function initial() {
//     Role.create({
//         id: 1,
//         name: "user"
//     });

//     Role.create({
//         id: 2,
//         name: "moderator"
//     });

//     Role.create({
//         id: 3,
//         name: "admin"
//     });
// }

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});