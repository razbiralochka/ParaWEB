const express = require("express")
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");

var Asking = bodyParser.urlencoded({extended: false});


app.set("view engine", "hbs");
let i = 0;
app.use(express.static(__dirname));

app.get("/single", function (request, response) {
    response.render("single.hbs");
    console.log("(GET)NEW MESSAGE!!!!!!");
    
});


app.post("/single", Asking, function (request, response) {
    
    console.log("(POST)NEW MESSAGE!!!!!!");
    console.log(request.body);
    response.render("single.hbs");
});

 



app.use( function(request, response){





response.render("index.hbs",{
    NEWS_1: (i/2).toString()

});
console.log(i);
i = i + 1;







});

app.use("/", function(request, response){
     
    response.send("Главная страница");
});

app.listen(3000);
