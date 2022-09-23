const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const path=require('path');
var cors = require('cors')
app.use(cors())
app.use(exp.static(path.join(__dirname,'./build')))

mclient.connect("mongodb+srv://dushyanth:dushyanth@cluster0.sqi2uud.mongodb.net/?retryWrites=true&w=majority")
.then((client)=>{
  let dbObj=client.db("nasa");
  let nocCollectionObject=dbObj.collection("noc");
  let cnaCollectionObject=dbObj.collection("cna");
  app.set("nocCollectionObject",nocCollectionObject);
  app.set("cnaCollectionObject",cnaCollectionObject);
  console.log("DB connected boss :)")
})
.catch(err=>console.log('Error in DB connection ',err))
app.use("/noc-api", require("./APIs/nocAPIs"));
app.use("/cna-api", require("./APIs/cnaAPIs"));
app.use('*', (request, response)=>{
  response.sendFile(path.join(__dirname, '../notus-react-main/build/index.html'))
});
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});
app.listen(4000, () => console.log("Bro! server on 4000!"));