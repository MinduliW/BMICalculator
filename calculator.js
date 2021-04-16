const express = require("express");
const bodyParser = require("body-Parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/bmi.html");
});


app.post("/", function(req,res){

  var weight = Number(req.body.num1);
  var height = Number(req.body.num2);

  var result = weight/ (height*height);
  res.send("Your bmi is" + result);

});
app.listen(3000, function(){
  console.log("server running")
});
