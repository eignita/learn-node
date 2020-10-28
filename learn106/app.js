const express = require("express");
const app = express();

app.listen(8080, () => console.log("app listening on port 8080"));
app.get("/", (req, res) => {
    // res.send("<p>Hello Express !!</p>");
    res.sendFile('./views/index.html', { root: __dirname});
});
app.get("/about", (req, res) => res.sendFile('./views/about.html', { root: __dirname}));
app.get("/about-me", (req,res) => res.redirect("/about"));

// use : use this funtion for every incoming request. this use should be at the bottom of the page.
// the req are made from top to bottom.
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})