// db = crav
// table = restaurant

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const queries = require('./queries')

// const coffees = require("./routes/games");

// app.use("/games", coffees);

app.use(morgan('dev'));
app.use(bodyParser.json());

// routes ---------------------------------------------------------------------------------

app.get("/", (request, response, next) => {
    queries.list()
    .then(games => {
        response.json({games});
    })
    .catch(next);
})

app.get("/mexican", (request, response, next) => {
    queries.getMexican()
    .then(games => {
        response.json({games});
    })
    .catch(next);
})

app.get("/italien", (request, response, next) => {
    queries.getMexican()
    .then(games => {
        response.json({games});
    })
    .catch(next);
})

app.get("/american", (request, response, next) => {
    queries.getAmerican()
    .then(games => {
        response.json({games});
    })
    .catch(next);
})


// end of routes ---------------------------------------------------------------------------------

// router.get("/", (request, response, next) => {
//     queries.list()
//     .then(games => {
//         response.json({games});
//     })
//     .catch(next);
// });

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
