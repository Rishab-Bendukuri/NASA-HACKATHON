const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const path=require('path');

app.use(exp.static(path.join(__dirname,'./build')))
mclient.connect("mongodb+srv://dushyanth:dushyanth@cluster0.sqi2uud.mongodb.net/?retryWrites=true&w=majority")
.then((client)=>{
  let dbObj=client.db("nasa");
  let nocCollectionObject=dbObj.collection("noc");
  app.set("nocCollectionObject",nocCollectionObject);
  console.log("DB connection boss :)")
})
.catch(err=>console.log('Error in DB connection ',err))
app.use("/noc-api", require("./APIs/nocAPIs"));
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});
app.listen(4000, () => console.log("Bro! server on 4000!"));