const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const func = require("./functions");

app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))

app.set('view engine', 'hbs')

app.get("/", function(req, res){
    res.render("index",
        {
            pageTitle: "21.02.2021",
            text: func.text
        }
    );
})

app.get("/about", function(req,res){
    res.send("Strona o mnie")
})

app.listen(port, (err) => {
    if(err){return console.log(`Błąd: ${err}`)}
    console.log(`Strona działa na porcie ${port}`);
});