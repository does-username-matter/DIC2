const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
// const mongoose= require('mongoose');
//
// mongoose.connect("mongodb://localhost:27017/peopleDB", { useNewUrlParser:true});

const app= express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.get("/courses",function(req,res){

  res.sendFile(__dirname+"/courses.html");
});

app.get("/admissions",function(req,res){



  res.sendFile(__dirname+"/admissions.html");
});

app.get("/contact",function(req,res){

  res.sendFile(__dirname+"/contact.html");
});

app.get("/faculty",function(req,res){

  res.sendFile(__dirname+"/faculty.html");
});


app.get("/weather",function(req,res){


  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=0f41219b5eeaa02632d3e6484e1f5740&units=metric"

  https.get(url, function(response) {

    response.on("data",function(data){
      const weatherData=JSON.parse(data);
      const temp=weatherData.main.temp;
      const desc=weatherData.weather[0].description;
      const imageURL="https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@4x.png";

      // urlIcon=urlIcon+weatherData.weather[0].icon+"@2x.png"

        res.write("<h1>The Temperature in Chandigarh is "+temp+" degree Celcius.</h1>");
        res.write("<h3>The weather is currently "+desc+".</h3>");

          res.write("<img src="+ imageURL +" >")
// "<img src="imageURL">"
        res.send();
  })
})

});





// const peopleSchema= new mongoose.Schema(
//   {
//     name:String,
//     email:String,
//     text:String
//   });
//
//   const People=mongoose.model("People",peopleSchema);
//
//

app.post("/",function(req,res){

  var fname=req.body.fName;
  var email=req.body.email;
  var text=req.body.text;

  console.log(fname, email,text);

res.send("Thanks for Sharing your Thoughts/Query. We shall get back to you in a few days.")


})








app.listen(3000, function(){
  console.log("Server running at port 3000.")
})
