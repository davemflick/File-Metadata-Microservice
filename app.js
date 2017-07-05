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

var storage = multer.memoryStorage();


app.post("/", multer({storage: storage }).single('upl'), (req,res,next)=>{
	let fileName = req.file.originalname;
	let mimetype = req.file.mimetype;
	let size = req.file.size;
	let fileObj = {name: fileName, type: mimetype, size: size};
	res.render("home", {file: fileObj});
});

app.listen(process.env.PORT || 3000, process.env.IP, ()=>{
	console.log("Server listening");
});