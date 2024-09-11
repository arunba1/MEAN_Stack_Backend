// Route is responsible for deciding the page's url..

const express = require("express")
const router = express.Router();            //Useful for accessing the router...

var studentModel = require('../src/student/studentModel');  //Importing Schema

// For performing any operations with Mongodb is only possible with the help of Schema

//Addition or insertion of new data...
router.post('/student/create', async (req,res) => {       //If this url came in post request then the corresponding things should happen
                                                          // Using async function, so that it will wait until the completion of execution of current statement.
                                                          //Request and Response is responsible for sending and getting data..
    const student = new studentModel(req.body);           //Sending Frontend data(req.data) to the studentModel 

    try{
        await student.save();                               //Express has a method called save used for saving the data.
        res.status(201).send(
            {
                "status":true,                              //If successful then status will be shown as true and message will be displayed..
                "message": "Student data created!!!!!"
            }
        );
    }

    catch(error){
        res.status(400).send(error);
    }

}
);

//Reading or getting the data...

router.get('/students', async (req,res) => { 
    try{
        const students = await studentModel.find({});           //This will completely read or view the data present inside the collection.
        res.status(200).send(students);
        
    }
    catch(error){
        res.status(400).send(error);
    }
}
);


//Finding the data record

router.get('/students/:id', async (req,res) => {                //If we want to only display the individual person record we can make use of id. 
    try{    
        const _id = req.params.id;                              //Params.id will helps in separation of id of that required record.
        const students = await studentModel.findById({_id});           //This will completely read or view the data present inside the collection.
        if(!students){                                          //If the data is not present then it will throw an error like not found
            return res.status(404).send();
        }
        return res.status(200).send(students);                  //If data is present it will send that  
    }
    catch(error){
        res.status(400).send(error);
    }
}
);


//Editing or updating the record

router.patch('/students/:id', async (req,res)=>{                //Patch method is used for editing the record.
    try{    
        const _id = req.params.id;                              //Params.id will helps in separation of id of that required record.
        const body = req.body;                                  //We also needs here body in order to edit the data.
        const updatestudents = await studentModel.findByIdAndUpdate(_id,body,{new:true});           //This will completely read or view the data present inside the collection and update it.
        if(!updatestudents){                                          //If the data is not present then it will throw an error like not found.
            return res.status(404).send();
        }
        // return res.status(200).send(updatestudents);                  //If data is present it will send that  
        res.status(201).send(
            {
                "status":true,                              //If successful then status will be shown as true and message will be displayed..
                "message": "Student data updated!!!!!"
            }
        );
    }
    catch(error){
        res.status(400).send(error);
    }
})


//Deleting the data

router.delete('/students/:id', async (req,res)=>{
    try{    
        const _id = req.params.id;                              //Params.id will helps in separation of id of that required record.
        const deletestudents = await studentModel.findByIdAndDelete(_id);           //This will completely delete the particular record.
        if(!deletestudents){                                          //If the data is not present then it will throw an error like not found.
            return res.status(404).send();
        }
        // return res.status(200).send(deletestudents);                  //If data is present it will send that  
        res.status(201).send(
            {
                "status":true,                              //If successful then status will be shown as true and message will be displayed..
                "message": "Student data deleted!!!!!"
            }
        );
    }
    catch(error){
        res.status(400).send(error);
    }
})



module.exports = router;                                    //Exporting Express router instance for anywhere usage purpose