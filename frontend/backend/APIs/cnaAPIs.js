const exp = require("express");
const cnaApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");

cnaApp.use(exp.json());
cnaApp.get(
  "/percentages",
  expressAsyncHandler(async (request, response) => {
    let cnaCollectionObject = request.app.get("cnaCollectionObject");
    let cnas = await cnaCollectionObject.find().toArray();
    response.send({"message":"success","data": cnas});
  })
);

module.exports = cnaApp;