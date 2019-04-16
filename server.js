const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const DATABASE_NAME = 'form';
const MONGO_URL = `mongodb://localhost:27017`;

let db = null;
let collection = null;
let clientCollection=null;

app.use(express.static("public"));

app.get("/hello", function(req,res){
   res.send('Hello, ' );
})

async function contactList(req, res) {
    const cursor = await clientCollection.find()
                                .project({ _id:0,client: 1,estado:1 ,quantity:1})
                                .sort({ client: 1 });

  const array = await cursor.toArray();
  res.render("users", { array } );

}


app.get("/form", function(req,res){
  res.send('Fomrulario:');
});

app.get("/", contactList);



async function startServer() {
    const user = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
    db = users.db(DATABASE_NAME);
    collection = db.collection('users');
}

app.listen("3000", function(){
console.log("Server is up and running.\nOpen http://localhost:3000 to start");
  });
