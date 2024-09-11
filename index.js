const express = require("express")  //importing express
const mongoose = require("mongoose") ///importing mongoose

var studentModel = require('./src/student/studentModel');

const cors = require("cors");       //Importing cors
const routes = require('./routes/routes');       //Importing route
const bodyParser = require("body-parser")        //Importing this for extracting data from the body of incoming request
const app = express()    //Setting up express server to the object named app
const port = 5000       //Setting the port
const mongodbdatabaseURL = "mongodb+srv://arunbalaji211:6PQsdUomIdHSi2IB@cluster0.cb44b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"   //Mongodb url
mongoose.connect(mongodbdatabaseURL        //Used Urlparser and Topology for default database configuration
    //useNewUrlParser:true,
    // useUnifiedTopology:true
)
const connection = mongoose.connection          //Giving connection to mongoose and stored to object
app.listen(port,()=>{                               //Used for assigning & starting of application at port
    console.log("Server is running at port "+port);
    
})
connection.once("open",()=>{                        //Setting up event listener for the connected event,executes once the connection is established.
    console.log("Mongodb Database Connected!!!!");
    
});
app.use(bodyParser.json());                     //Bodyparser also helps in extracting data with our required format, here in json.
app.use(cors());                                //Enabling routing from any localhost
app.use(routes);                                //This helps in accessing of routes for handling various route(requests)


// Here also we can define the routing without using router...

// app.get('/studentssss', async (req,res) => { 
//     try{
//         const students = await studentModel.find({});           //This will completely read or view the data present inside the collection.
//         res.status(200).send(students);
        
//     }
//     catch(error){
//         res.status(400).send(error);
//     }
// }
// );


// app.post('/student/creates', async (req,res) => {       //If this url came in post request then the corresponding things should happen
//     // Using async function, so that it will wait until the completion of execution of current statement.
//     //Request and Response is responsible for sending and getting data..
// const student = new studentModel(req.body);           //Sending Frontend data(req.data) to the studentModel 

// try{
// await student.save();                               //Express has a method called save used for saving the data.
// res.status(201).send(
// {
// "status":true,                              //If successful then status will be shown as true and message will be displayed..
// "message": "Student data created!!!!!"
// }
// );
// }

// catch(error){
// res.status(400).send(error);
// }

// }
// );
