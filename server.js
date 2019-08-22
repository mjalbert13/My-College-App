const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const connection = require('./server/database/index')
const MongoStore = require('connect-mongo') (session)
const session = require('express-session');
const passport = require('passport')
const user = require('./server/routes/usersRoutes');

// const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools?";
// const SEARCH = "&&_fields=id,school.name,school.state,latest.student.size,latest.cost.avg_net_price.private,latest.cost.avg_net_price.public";
// const key = process.env.KEY;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(session({
  secret: "College",
  store: MongoStore({connection}),
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/users', user);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
