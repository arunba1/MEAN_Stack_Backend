// Creating schema for our database
// Creating structure for table

const mongoose = require("mongoose");           //Importing mongoose for library for mongodb
const { type } = require("os");

var Schema = mongoose.Schema;                   //Creating Schema for Mongodb and storing to a variable

var studentSchema = new Schema(                 //Defining column(collection) structure to the database
    {

        name:{                                  //Creating as JSON format.
            type:String,                        //Declaring the type and defining it as required one.
            required:true
        },

        address:{
            type:String,
            required:true
        },

        phone:{
            type:Number,
            required:true
        }

    }
);

module.exports = mongoose.model('student',studentSchema);   //This schema should be created with the name of student. Basically we're creating model(collection) named student of studentschema type.

