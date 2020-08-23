var express         =   require("express"),
    app             =   express(),
    bodyParser      =   require("body-parser"),
    path            =   require("path")

//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({extended:true}));

//ROUTING
app.get("/", function(req, res){
    res.render("index");
});

//SERVER START
app.listen(process.env.PORT, function(){
    console.log("The server has started!");
});