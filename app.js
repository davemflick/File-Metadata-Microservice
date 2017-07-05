var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req,res,next)=>{
	res.render("home");
});

app.listen(process.env.PORT || 3000, process.env.IP, ()=>{
	console.log("Server listening");
});