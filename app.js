var express         =   require("express"),
    app             =   express(),
    bodyParser      =   require("body-parser")


//Connect to MongoDB
/* mongoose.connect("mongodb://localhost/a38", {useNewUrlParser: true, useUnifiedTopology: true}); */

//APP CONFIG
//nem kell a .ejs attributomot kirakni
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
/* app.use(methodOverride("_method")); */

app.get("/", function(req, res){
    res.render("index");
});


//SERVER START
app.listen(process.env.PORT, function(){
    console.log("The Hajobull server has started!");
});