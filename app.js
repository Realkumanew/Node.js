const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public/")))
app.get("/", (req, res) => {
    res.send("Hello World Jaaaaaaaa");
})

app.listen(PORT, () => {
    debug("Listening on port %d", PORT);
})
