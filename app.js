const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engins", "ejs");


app.get("/", (req, res) => {
    res.render('index', { username: 'New' });
})

app.listen(PORT, () => {
    debug("Listening on port %d", PORT);
})
