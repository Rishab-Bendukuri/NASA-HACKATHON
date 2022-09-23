const exp = require("express");
const nocApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

nocApp.use(exp.json());
nocApp.get(
  "/number/:range",
  expressAsyncHandler(async (request, response) => {
    let range=request.params.range
    let rangeA=range.split("-")
    let oarr=[]
    let nocCollectionObject = request.app.get("nocCollectionObject");
    let nocs = await nocCollectionObject.find().toArray();
    for(var i=0;i<nocs.length;i++){
      let year=(+Object.keys(nocs[i])[0])
      if(year<=(+rangeA[1]) && year>=(+rangeA[0]))
        oarr.push(nocs[i])
    }
    response.send(oarr);
  })
);

module.exports = nocApp;